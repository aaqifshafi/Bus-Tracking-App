"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserBusTrackingUI from "@/components/UserBusTrackingUI";

function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (status === "loading") {
    return (
      <div class="fixed inset-0 flex items-center justify-center bg-background">
        <p class="text-2xl font-semibold text-primary">Loading...</p>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-background p-4">
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 scroll-m-20 tracking-tight">
              Dashboard
            </h1>
            <div className="">
              <UserBusTrackingUI />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return null;
}

export default Dashboard;
