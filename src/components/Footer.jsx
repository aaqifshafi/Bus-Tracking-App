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
      <div className="flex items-center justify-center flex-col">
        <Link href="/">
          <Image
            src={logoSrc}
            alt="logo"
            width={100}
            height={100}
            className="col-span-2"
          />
        </Link>
      </div>
      <div className="p-2 items-center text-center">
        <p className="text-sm text-muted-foreground">Copyright &copy; 2024</p>
      </div>
    </footer>
  );
}
