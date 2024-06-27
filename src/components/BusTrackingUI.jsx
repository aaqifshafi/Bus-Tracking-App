import React from "react";
import "@/styles/BusTrackingUI.css";
import Map from "./Map";

const BusTrackingUI = () => {
  return (
    <div className="bus-tracking-container">
      {/* Insert your desired description here */}
      <div className="map-container">
        <Map
          // mapContainerStyle={{ width: "100%", height: "400px" }}
          center={{ lat: 40.7484, lng: -73.9857 }}
          zoom={12}
        />
      </div>
    </div>
  );
};

export default BusTrackingUI;
