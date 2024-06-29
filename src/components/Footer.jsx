"use client";
import React from "react";
import "@/styles/Footer.css";
import { useTheme } from "next-themes";
import Link from "next/link";
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
    <footer className="bg-background p-4 w-full">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={logoSrc}
            alt="logo"
            width={100}
            height={100}
            className="col-span-2"
          />
        </Link>
        <span className="hidden md:inline text-muted-foreground md:gap-5 md:text-sm">
          A web application that allows users to search for bus routes and
          schedules in real-time ✌️
        </span>
      </div>
      <div className="p-2 items-center text-center">
        <p className="text-sm text-muted-foreground">Copyright &copy; 2024</p>
        <p className="text-lg text-muted-foreground mt-2">
          Developed by: Huzaif Team
        </p>
      </div>
    </footer>
  );
}
