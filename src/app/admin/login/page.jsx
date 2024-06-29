import React from "react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LoginPage() {
  return (
    <div>
      <>
        <Navbar />
        <main className="m-20">
          <Login />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default LoginPage;
