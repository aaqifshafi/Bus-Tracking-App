"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/styles/Map.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
  TrafficLayer,
  Polyline,
} from "@react-google-maps/api";

const Map = ({ setBusData }) => {
  const [progress, setProgress] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [routeData, setRouteData] = useState([]);
  const [error, setError] = useState(null);
  const [directions, setDirections] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialCenter, setInitialCenter] = useState({
    lat: 34.081501,
    lng: 74.78423,
  });

  const mapRef = useRef(null);
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Loading Map Script
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`;
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    };

    loadScript();
  }, [GOOGLE_MAPS_API_KEY]);

  // Distance and Duration
  useEffect(() => {
    if (routeData.length > 0 && window.google) {
      const distanceService = new google.maps.DistanceMatrixService();
      distanceService.getDistanceMatrix(
        {
          origins: [{ lat: 34.091028, lng: 74.777464 }], // Endpoint 1
          destinations: [{ lat: 33.926425, lng: 75.016911 }], // Endpoint 2
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            const busInfo = {
              busName: "B-21s",
              busNumber: "JK01 7777",
              busLocation: "Srinagar",
              busSpeed: " km/h",
              driverName: "Rashid Ahmad",
              driverNumber: "999999900",
              distance: result.rows[0].elements[0].distance,
              duration: result.rows[0].elements[0].duration,
            };
            setBusData(busInfo);
          } else {
            console.error(`Distance request failed due to ${status}`);
          }
        }
      );
    }
  }, [routeData, setBusData]);

  useEffect(() => {
    if (isLoaded && window.google) {
      const response = [
        {
          paths: [
            {
              type: "endpoint",
              name: "Endpoint 1",
              lat: 34.091028,
              lng: 74.777464,
            },
            {
              type: "endpoint",
              name: "Endpoint 2",
              lat: 33.926425,
              lng: 75.016911,
            },
          ],
          stops: [
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
          ],
        },
      ];

      if (response && response.length > 0) {
        const { paths, stops } = response[0];
        const orderedArray = [paths[0], ...stops, paths[1]];
        setRouteData(orderedArray);
        setInitialCenter({ lat: paths[0].lat, lng: paths[0].lng });
      } else {
        setError("Response data is empty or malformed");
      }
    }
  }, [isLoaded]);
  useEffect(() => {
    if (routeData.length > 0 && window.google) {
      const distanceService = new google.maps.DistanceMatrixService();
      distanceService.getDistanceMatrix(
        {
          origins: [{ lat: 34.091028, lng: 74.777464 }], // Endpoint 1
          destinations: [{ lat: 33.926425, lng: 75.016911 }], // Endpoint 2
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            const busInfo = {
              busName: "B-21s",
              busNumber: "JK01 7777",
              busLocation: "Srinagar",
              busSpeed: " km/h",
              driverName: "Rashid Ahmad",
              driverNumber: "999999900",
              distance: result.rows[0].elements[0].distance,
              duration: result.rows[0].elements[0].duration,
            };
            setBusData(busInfo);
          } else {
            console.error(`Distance request failed due to ${status}`);
          }
        }
      );
    }
  }, [routeData, setBusData]);

  useEffect(() => {
    if (routeData.length > 0 && window.google) {
      const stops = routeData.filter((point) => point.type === "waypoint");
      const waypoints = stops.map((stop) => ({
        location: { lat: stop.lat, lng: stop.lng },
      }));

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: { lat: routeData[0].lat, lng: routeData[0].lng },
          destination: {
            lat: routeData[routeData.length - 1].lat,
            lng: routeData[routeData.length - 1].lng,
          },
          waypoints,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
            const routePath = result.routes[0].overview_path.map((point) => ({
              lat: point.lat(),
              lng: point.lng(),
            }));
            setProgress(routePath);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );
    }
  }, [routeData]);

  const getRandomSpeed = () => {
    const interval = Math.floor(Math.random() * (1001 - 500)) + 500; //USE THIS FOR RANDOM SPEED
    const speed = Math.floor(100 - ((interval - 500) / (1001 - 500)) * 100);
    setBusData((prevData) => ({ ...prevData, busSpeed: `${speed} km/h` }));
    return interval;
  };

  useEffect(() => {
    if (progress.length > 0 && currentIndex < progress.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, getRandomSpeed());

      return () => clearInterval(interval);
    }
  }, [progress, currentIndex]);

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      {isLoaded && routeData.length > 0 && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={initialCenter}
          zoom={10}
          onLoad={handleMapLoad}
        >
          {routeData.map((point, index) => (
            <Marker
              key={index}
              position={{ lat: point.lat, lng: point.lng }}
              icon={{
                url:
                  index === 0 || index === routeData.length - 1
                    ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                    : "",
                scaledSize: new window.google.maps.Size(35, 35),
              }}
            />
          ))}

          {directions && (
            <DirectionsRenderer
              options={{
                polylineOptions: {
                  strokeColor: "#0088FF",
                  strokeOpacity: 0.8,
                  strokeWeight: 8,
                  defaultVisible: true,
                },
                directions,
                suppressMarkers: true,
              }}
            />
          )}

          {progress.length > 0 && currentIndex < progress.length && (
            <>
              <Polyline
                path={progress.slice(0, currentIndex + 1)}
                options={{
                  strokeColor: "orange",
                  strokeOpacity: 0.8,
                  strokeWeight: 8,
                }}
              />
              <Marker
                position={progress[currentIndex]}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/bus.png",
                  scaledSize: new window.google.maps.Size(35, 35),
                }}
              />
            </>
          )}

          <TrafficLayer />
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default Map;
