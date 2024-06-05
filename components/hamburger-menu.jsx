"use client";
import React from "react";

const HamburgerMenu = ({ onClick, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className=" hamburger-menu" onClick={onClick}>
          <input
            id="hamburger-checkbox"
            className="hamburger-checkbox"
            type="checkbox"
            checked={isOpen}
          />
          <label className="hamburger-toggle">
            <span className="hamburger-toggle-icon"></span>
          </label>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 text-[#1e266d]"
          onClick={onClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          ></path>
        </svg>
      )}
    </>
  );
};

export default HamburgerMenu;
