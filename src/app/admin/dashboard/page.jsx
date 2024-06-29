import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function dashboard() {
  return (
    <div>
      <Navbar />
      <main className="bg-background">
        <BusTrackingUI />
      </main>
      <Footer />
    </div>
  );
}

export default dashboard;
