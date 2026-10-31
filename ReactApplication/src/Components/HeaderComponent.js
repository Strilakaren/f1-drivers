import React from "react";
import logoImg from "../images/placeholder.svg";
import NavComponent from "./NavComponent";

const HeaderComponent = () => {
  return (
    <div className="flex justify-center gap-12 bg-black w-screen">
      <img className="w-20" src={logoImg} alt="Logo" />
      <NavComponent />
    </div>
  );
};

export default HeaderComponent;
