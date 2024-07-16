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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr]">
      {busData && (
        <div className="order-2 md:order-1 md:pr-4 md:pt-0">
          <BusInfo busData={busData} />
        </div>
      )}
      <div className="w-full h-96 md:h-80 lg:h-full flex justify-center items-center border-2 border-muted rounded-[20px] overflow-hidden order-1 md:order-2 p-2 md:p-4">
        <Map setBusData={setBusData} />
      </div>
    </div>
  );
};

export default BusTrackingUI;
