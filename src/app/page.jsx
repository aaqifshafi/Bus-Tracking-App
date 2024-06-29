import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Test from "@/components/Test";
import {Card} from "@/components/ui/card"

export default function page() {
  return (
    <>
      <Navbar />
      <Card>
      <BusTrackingUI />
      </Card>
      
      <Footer />
    </>
  );
}
