import React from "react";
import "@/styles/BusTrackingUI.css";

import Map from "./Map";


const BusTrackingUI = () => {
  return (
    <div className="bus-tracking-container">
      {/* Insert your desired description here */}
      <div className="map-container">
          
            <Map/>
      </div>
      <div className="details">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Details</h3><hr /><br />
        <ul >
          <li>Bus Name:
            <p>B-21s</p> </li><br />
          <li>Bus Number: 
            <p>JK01 7777</p><br />
          </li>
          <li>Bus Location: 
            <p>Bus is at the bus stop</p><br />
          </li>
        </ul>
        <ul>
          <li>Driver Name:
            <p>Rashid Ahmad</p><br />
          </li>
          <li>Driver Number:
            <p>999999900</p><br />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusTrackingUI;
