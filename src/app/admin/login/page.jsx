import React from "react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LoginPage() {
  return (
    <div>
      <>
        <Navbar />
        <main className="bg-background p-[6rem]">
          <Login />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default LoginPage;
