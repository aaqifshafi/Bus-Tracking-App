"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Polyline,
} from "@react-google-maps/api";

const Map = () => {
  const mapRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [routeData, setRouteData] = useState(null);
  const [directions, setDirections] = useState(null);
  const [progressLatLng, setProgressLatLng] = useState(null);
  const [path, setPath] = useState([]);
  const [progressPath, setProgressPath] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const velocity = (50 * 1000) / 3600; // 50 km/h in meters per second

  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const response = [
    {
      _id: "65ad38570919606e5fdfdc4b",
      name: "Bus Route 21b",
      points: [
        {
          type: "endpoint",
          name: "Endpoint 1",
          lat: 34.091028,
          lng: 74.777464,
        },
        {
          type: "waypoint",
          name: "Waypoint A",
          lat: 34.082785,
          lng: 74.783335,
        },
        {
          type: "waypoint",
          name: "Waypoint B",
          lat: 34.076361,
          lng: 74.776387,
        },
        {
          type: "waypoint",
          name: "Waypoint C",
          lat: 34.069912,
          lng: 74.769467,
        },
        {
          type: "waypoint",
          name: "Waypoint D",
          lat: 34.059463,
          lng: 74.786242,
        },
        {
          type: "waypoint",
          name: "Waypoint E",
          lat: 34.024817,
          lng: 74.816842,
        },
        {
          type: "waypoint",
          name: "Waypoint F",
          lat: 34.029888,
          lng: 74.864184,
        },
        {
          type: "waypoint",
          name: "Waypoint G",
          lat: 33.987361,
          lng: 74.932535,
        },
        {
          type: "waypoint",
          name: "Waypoint H",
          lat: 33.937543,
          lng: 74.996736,
        },
        {
          type: "waypoint",
          name: "Waypoint I",
          lat: 33.923298,
          lng: 75.011884,
        },
        {
          type: "endpoint",
          name: "Endpoint 2",
          lat: 33.926425,
          lng: 75.016911,
        },
      ],
      timestamp: "2024-06-25T12:48:28.614Z",
    },
  ];

  useEffect(() => {
    const loadScript = async () => {
      try {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`;
        script.async = true;
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error loading Google Maps script:", error);
      }
    };

    loadScript();
  }, []);

  useEffect(() => {
    if (isLoaded && window.google) {
      setRouteData(response[0]);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (routeData && window.google) {
      const waypoints = routeData.points
        .slice(1, -1)
        .map((point) => ({ location: { lat: point.lat, lng: point.lng } }));

      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: {
            lat: routeData.points[0].lat,
            lng: routeData.points[0].lng,
          },
          destination: {
            lat: routeData.points[routeData.points.length - 1].lat,
            lng: routeData.points[routeData.points.length - 1].lng,
          },
          waypoints,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
            setProgressLatLng({
              lat: routeData.points[0].lat,
              lng: routeData.points[0].lng,
            });
            const pathPoints = result.routes[0].overview_path.map((point) => ({
              lat: point.lat(),
              lng: point.lng(),
            }));
            setPath(pathPoints);
            setProgressPath([pathPoints[0]]);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );
    }
  }, [routeData]);

  useEffect(() => {
    const moveMarker = () => {
      if (path.length > 1) {
        const moveAlongPath = () => {
          if (stepIndex < path.length - 1) {
            const currentLatLng = path[stepIndex];
            const nextLatLng = path[stepIndex + 1];
            const distance = calculateDistance(currentLatLng, nextLatLng);
            const travelTime = distance / velocity; // time to travel in seconds

            const interval = setInterval(() => {
              const latDiff = nextLatLng.lat - currentLatLng.lat;
              const lngDiff = nextLatLng.lng - currentLatLng.lng;
              const stepLat = (latDiff * velocity) / distance / 20;
              const stepLng = (lngDiff * velocity) / distance / 20;

              setProgressLatLng((prev) => ({
                lat: prev.lat + stepLat,
                lng: prev.lng + stepLng,
              }));

              setProgressPath((prev) => [
                ...prev,
                {
                  lat: prev[prev.length - 1].lat + stepLat,
                  lng: prev[prev.length - 1].lng + stepLng,
                },
              ]);

              if (
                Math.abs(progressLatLng.lat - nextLatLng.lat) <
                  Math.abs(stepLat) &&
                Math.abs(progressLatLng.lng - nextLatLng.lng) <
                  Math.abs(stepLng)
              ) {
                clearInterval(interval);
                setStepIndex((prev) => prev + 1);
              }
            }, travelTime * 50);
          }
        };

        moveAlongPath();
      }
    };

    moveMarker();
  }, [path, stepIndex, progressLatLng]);

  const calculateDistance = (point1, point2) => {
    const R = 6371e3; // metres
    const φ1 = (point1.lat * Math.PI) / 180; // φ, λ in radians
    const φ2 = (point2.lat * Math.PI) / 180;
    const Δφ = ((point2.lat - point1.lat) * Math.PI) / 180;
    const Δλ = ((point2.lng - point1.lng) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d;
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      {isLoaded && routeData && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: 34.081501, lng: 74.78423 }}
          zoom={15}
          ref={mapRef}
        >
          {/* Markers for each waypoint */}
          {routeData.points.map((point, index) => (
            <Marker
              key={index}
              position={{ lat: point.lat, lng: point.lng }}
              icon={{
                url:
                  index === 0 || index === routeData.points.length - 1
                    ? "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSOzs9rXHOp9nubmGEwzPDts1s7BnHVCbYojSqh0hugrZZY8hzQ7hHA3yctFiPk7m0qI5xBC1vRnho_E0RWgxp9Zc1fqFVKzUy5MI1btD9NE0zXPbFl0upRzLdPrjK43RTZhl-6KE3ZNTfZ9NAg17KBJHNm6RJDS-WO-OZKQGvCDHoiUO9iODQnQVhsA_D/s320/pin.png"
                    : "", // Example waypoint icon
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              label={
                index === 0 || index === routeData.points.length - 1
                  ? "21B"
                  : null
              }
            />
          ))}

          {/* Polyline for the entire route */}
          <Polyline
            path={path}
            options={{
              strokeColor: "#0088FF",
              strokeOpacity: 1,
              strokeWeight: 6,
            }}
          />

          {/* Polyline for progress path */}
          <Polyline
            path={progressPath}
            options={{
              strokeColor: "orange",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />

          {/* Progress marker */}
          {progressLatLng && (
            <Marker
              position={progressLatLng}
              icon={{
                url: "https://maps.google.com/mapfiles/kml/shapes/bus.png", // Bus icon
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          )}

          {/* InfoWindow for the box with "21B" */}
          {directions && (
            <InfoWindow
              position={{
                lat: routeData.points[Math.floor(routeData.points.length / 2)]
                  .lat,
                lng: routeData.points[Math.floor(routeData.points.length / 2)]
                  .lng,
              }}
            >
              <div style={{ backgroundColor: "white", padding: "10px" }}>
                21B
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default Map;
