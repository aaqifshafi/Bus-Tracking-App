import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";

function LoginPage() {
  return (
    <div>
      <>
        <Navbar />
        <main className="bg-background p-[6rem]">
          <AdminLogin />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default LoginPage;
