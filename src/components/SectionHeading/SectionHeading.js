import React from "react";
import "./SectionHeading.css";
export const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{title}</span>
      </div>
      {subTitle ? (
        <div className="screen-sub-heading">
          <span>{subTitle}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
};
