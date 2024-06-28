import React from "react";
import "@/styles/BusTrackingUI.css";
import Map from "./Map";

import Footer from  "./Footer"


const BusTrackingUI = () => {
  return (
    <div className="bus-tracking-container">
      {/* Insert your desired description here */}
      <div className="map-container">

        <Map/>

      </div>
      <Footer />
    </div>
  );
};

export default BusTrackingUI;
