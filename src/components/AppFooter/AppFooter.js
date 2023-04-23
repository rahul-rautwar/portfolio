import React from "react";
import "./AppFooter.css";
import { scrollToSection } from "../utils/Helper";
export const AppFooter = () => {
  return (
    <div className="scroll-container">
      <button className="btn-scroll" onClick={() => scrollToSection("Home")}>
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
};
