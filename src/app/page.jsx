"use client";
import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Login from "@/components/Login";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen p-4 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left -------- Home */}
          <div className="p-4">
            <Home />
          </div>
          {/* Right ---------- Login */}
          <div className="p-4">
            <Login />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
