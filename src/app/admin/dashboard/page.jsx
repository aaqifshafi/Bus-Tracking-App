"use client";
import React, { useState } from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddBus from "@/components/AddBus";

function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="grid grid-cols-[60%_30%] grid-flow-col gap-[5rem] items-center justify-center p-16">
          <BusTrackingUI />
          {/* <MapContainer /> */}
          {/* <DriverDetails /> */}
        </div>
        <AddBus />
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
