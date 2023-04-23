import React from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";
import { scrollToSection } from "../utils/Helper";
export const Header = () => {
  const [showHeaderOptions, setShowHeaderOptions] = useState(0);
  const pages = [
    {
      name: "Home",
    },
    {
      name: "AboutMe",
    },
    {
      name: "Resume",
    },
    {
      name: "Skills",
    },
    {
      name: "Projects",
    },
    {
      name: "ContactMe",
    },
  ];
  return (
    <div
      id="Home"
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon
            className="header-hamburger-bars"
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
        <div className="header-logo">
          {/* <span>Logo here</span> */}
          {/* <img src="" /> */}
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {pages.map((page, i) => (
            <div
              key={page.name}
              className={`header-option header-option-separator `}
            >
              <span onClick={() => scrollToSection(page.name)}>
                {page.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
