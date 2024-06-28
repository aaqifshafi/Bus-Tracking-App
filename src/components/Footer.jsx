import React from "react";
import "@/styles/Footer.css";
import "@/assets/logo-black.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="row-content">
            <img className="logo" src="" alt="" />
            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Bus App
            </h1>
            <br />
            <p className="text-xl text-muted-foreground">
              Bus App is a web application that allows users to search for bus
              routes and schedules
            </p>
            <br />
            <p className="team text-l text-muted-foreground-mt-10 ">
              Developed by: Huzaif Team
            </p>
            <p className="text-sm text-muted-foreground">
              Copyright &copy; 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
