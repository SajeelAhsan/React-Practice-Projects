import React from "react";
import Headers from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function Route() {
  return (
    <>
    <Headers />
    <Outlet />
    <Footer /> 
    </>
  )
}

export default Route;