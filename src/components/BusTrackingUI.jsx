"use client";
import React from "react";
import Map from "./Map";
import BusInfo from "./BusInfo";
import { useState, useEffect } from "react";
import "@/styles/BusTrackingUI.css";

const BusTrackingUI = () => {
  const [busData, setBusData] = useState(null);

  useEffect(() => {}, [busData]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-2/3 h-[300px] md:h-full flex justify-center items-center border-2 border-muted rounded-[20px] overflow-hidden">
        <Map setBusData={setBusData} />
      </div>
      <div className="w-full md:w-1/3">
        {busData && <BusInfo busData={busData} />}
      </div>
    </div>
  );
};

export default BusTrackingUI;
