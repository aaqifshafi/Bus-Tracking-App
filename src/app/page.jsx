import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <BusTrackingUI />
      <Footer />
    </>
  );
}
