import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { HomePage } from "@/components/HomePage";

export default function page() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <Card>
        <BusTrackingUI />
      </Card>
      <Footer />
    </>
  );
}
