"use client";
import React from "react";

const HamburgerMenu = () => {
  const handleClick = () => {};
  return (
    <div className="xl:hidden navigation-bar" onClick={handleClick}>
      <input
        id="navigation-checkbox"
        className="navigation-checkbox"
        type="checkbox"
      />
      <label className="navigation-toggle" for="navigation-checkbox">
        <span className="navigation-toggle-icon"></span>
      </label>
    </div>
  );
};

export default HamburgerMenu;
