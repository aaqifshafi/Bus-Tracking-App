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
      <div className="w-full h-full flex justify-center items-center border-2 border-muted rounded-[20px] overflow-hidden self-center justify-self-center">
        <Map setBusData={setBusData} />
      </div>
      {busData && <BusInfo busData={busData} />}
    </>
  );
};

export default BusTrackingUI;
