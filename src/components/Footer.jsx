"use client";
import React from "react";
import "@/styles/Footer.css";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoLight from "@/assets/logo-light.png"; // Light mode logo
import logoDark from "@/assets/logo-dark.png"; // Dark mode logo
export default function Footer() {
  const { theme, systemTheme } = useTheme(); // Access theme and systemTheme from useTheme hook
  const [logoSrc, setLogoSrc] = useState(logoLight);
  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setLogoSrc(currentTheme === "dark" ? logoDark : logoLight);
  }, [theme, systemTheme]);
  return (
    <footer className=" top-0 flex h-16 items-center">
      <div className="container sticky bg-background py-2">
        <div className="items-center flex gap-6 col-span-2">
          <Image src={logoSrc} alt="logo" width={100} height={100} />
          <p className="text-xl text-muted-foreground ">
            A web application that allows users to search for bus routes and
            schedules in real-time ✌️
          </p>
        </div>
        <div className="p-2 items-center">
          <p className="text-sm text-muted-foreground text-center">
            Copyright &copy; 2024
          </p>
          <p className="team text-l text-muted-foreground-mt-10 text-center ">
            Developed by: Huzaif Team
          </p>
        </div>
      </div>
    </footer>
  );
}
