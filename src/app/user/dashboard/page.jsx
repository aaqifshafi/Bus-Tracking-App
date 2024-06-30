import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DriverDetails from "@/components/DriverDetails";

function dashboard() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="grid grid-cols-[60%_30%] grid-flow-col gap-[5rem] items-center justify-center p-16">
          <BusTrackingUI />
          <DriverDetails />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default dashboard;
