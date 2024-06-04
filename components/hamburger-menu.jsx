"use client";
import React from "react";

const HamburgerMenu = ({ onClick, isOpen }) => {
  return (
    <div className=" xl:hidden navigation-bar" onClick={onClick}>
      <input
        id="navigation-checkbox"
        className="navigation-checkbox"
        type="checkbox"
        checked={isOpen}
      />
      <label className="navigation-toggle">
        <span className="navigation-toggle-icon"></span>
      </label>
    </div>
  );
};

export default HamburgerMenu;
