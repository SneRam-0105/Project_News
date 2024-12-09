import React from "react";
import Header from "../components/Header/header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="Header">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
