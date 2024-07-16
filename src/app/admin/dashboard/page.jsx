"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddBus from "@/components/AddBus";
import SendMail from "@/components/SendMail";

function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <p className="text-2xl font-semibold text-primary">Loading...</p>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-background p-4 overflow-auto">
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 scroll-m-20 tracking-tight p-2">
              Dashboard
            </h1>
            <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[70%_30%] items-start">
              <BusTrackingUI />
            </div>
          </div>
          <div className="bg-secondary p-4 rounded-lg m-8">
            <h3 className="text-xl font-semibold mb-4 flex justify-center">
              More Features
            </h3>
            <AddBus />
            <SendMail />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return null;
}

export default Dashboard;
