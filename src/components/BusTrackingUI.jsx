import React from "react";
import "@/styles/BusTrackingUI.css";

import Map from "./Map";

const BusTrackingUI = () => {
  return (
    <div className="w-full h-full flex justify-center items-center border-2 border-muted rounded-[20px] overflow-hidden self-center justify-self-center ">
      <Map />
    </div>
  );
};

export default BusTrackingUI;
