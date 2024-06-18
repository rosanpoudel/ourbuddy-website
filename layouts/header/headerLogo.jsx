"use client";
import { trackEvent } from "@/lib/segment";
import React from "react";

const HeaderLogo = () => {
  return (
    <img
      src="/images/logo.svg"
      onClick={() =>
        trackEvent("Image interaction", {
          interactionType: "Clicked",
          image: `Header Logo`,
        })
      }
      className="max-w-[190px] cursor-pointer"
    />
  );
};

export default HeaderLogo;
