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
    <div className="grid grid-cols-1 lg:grid-cols-[99%,30%] gap-8">
      <div className="w-full h-96 lg:h-full flex justify-center items-center border-2 border-muted rounded-[20px] overflow-hidden">
        <Map setBusData={setBusData} />
      </div>
      <div>{busData && <BusInfo busData={busData} />}</div>
    </div>
  );
};

export default BusTrackingUI;
