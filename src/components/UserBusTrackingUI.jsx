"use client";
import React from "react";
import Map from "./Map";
import UserBusInfo from "./UserBusInfo";
import { useState, useEffect } from "react";
import "@/styles/BusTrackingUI.css";

const UserBusTrackingUI = () => {
  const [busData, setBusData] = useState(null);
  useEffect(() => {}, [busData]);
  return (
    <>
      <div className="mx-auto w-[290px] h-[400px] border-2 border-muted rounded-[20px] overflow-hidden md:w-[800px] lg:[900px]">
        <Map setBusData={setBusData} />
      </div>
        <div className="m-7">
          {busData && <UserBusInfo busData={busData} />}
        </div>
      
    </>
  );
};

export default UserBusTrackingUI;
