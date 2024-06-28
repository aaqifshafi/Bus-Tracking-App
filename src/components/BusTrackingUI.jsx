import React from "react";
import "@/styles/BusTrackingUI.css";
import Map from "./Map";

const BusTrackingUI = () => {
  return (
    <div className="bus-tracking-container">
      {/* Insert your desired description here */}
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default BusTrackingUI;
