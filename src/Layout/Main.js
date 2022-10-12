import Footer from "../components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
