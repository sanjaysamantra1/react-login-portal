import React from "react";
import { Outlet } from "react-router-dom";
import Carousal from "../carousal/Carousal";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousal />
      <Outlet />
      <Footer />
    </>
  );
}
