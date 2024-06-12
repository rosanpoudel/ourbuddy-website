"use client";
import { trackEvent } from "@/lib/segment";
import React from "react";

const LoginBtn = () => {
  return (
    <a
      href="#"
      onClick={() => trackEvent("Button Clicked", { button: "Login" })}
      className="ml-5 flex items-center justify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] font-[500] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in-out  duration-1000"
    >
      Login
    </a>
  );
};

export default LoginBtn;
