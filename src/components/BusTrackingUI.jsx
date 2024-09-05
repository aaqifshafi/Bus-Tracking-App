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
    <>
      <div className="w-full h-[400px] border-2 border-muted rounded-[20px] overflow-hidden self-center justify-self-center md:w-[500px]">
        <Map setBusData={setBusData} />
      </div>
      <div>
      {busData && <BusInfo busData={busData} />}
      </div>
    </>
  );
};

export default BusTrackingUI;
