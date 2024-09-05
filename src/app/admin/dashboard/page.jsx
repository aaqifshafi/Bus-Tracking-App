"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddBus from "@/components/AddBus";
import SendMail from "@/components/SendMail";
import Image from "next/image";
import { useTheme } from "next-themes";

import IUSTlogo from "@/assets/IUSTlogo.png";
import IUSTlogolight from "@/assets/IUSTlogolight.png";

function Dashboard() {
  const { theme, systemTheme } = useTheme();
  const [logoSrc,setLogoSrc]=useState(IUSTlogo)
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setLogoSrc(currentTheme === "dark" ?  IUSTlogolight:IUSTlogo);
  }, [theme, systemTheme]);


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
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
            <div className="container mx-auto w-full">
            <Image src={logoSrc} alt="IUSTlogo"/>
            </div>
          <div className="container mx-auto py-8">
            
            <h1 className="text-3xl font-bold mb-6 scroll-m-20 tracking-tight">
              Admin Dashboard
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-1 items-start">
              <BusTrackingUI />
            </div>
          </div>
          <div className="bg-secondary p-4 rounded-lg m-8">
            <h3 className="text-xl font-semibold mb-4">More Features</h3>
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
