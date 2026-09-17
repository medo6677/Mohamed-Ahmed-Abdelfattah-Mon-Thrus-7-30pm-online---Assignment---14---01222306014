import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col justify-between">
      <ScrollRestoration />
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen bg-[#0a0a0a]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
