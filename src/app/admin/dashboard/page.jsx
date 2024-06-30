import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DriverDetails from "@/components/DriverDetails";

function dashboard() {
  return (
    <div>
      <Navbar />
      <main className="bg-background grid grid-cols-[70%_30%] grid-flow-col gap-4 items-center justify-center p-16">
        <BusTrackingUI />
        <DriverDetails />
      </main>
      <Footer />
    </div>
  );
}

export default dashboard;
