"use client";
import { trackEvent } from "@/lib/segment";
import Link from "next/link";
import React from "react";

const MenuItem = ({ data }) => {
  return (
    <Link
      key={data?.name}
      href={data?.href}
      className="text-[#293c67] font-[500] hover:text-[#1276ff] "
    >
      <span
        onClick={() =>
          trackEvent("Navigation Menu Clicked", { menuItem: data?.name })
        }
      >
        {data?.name}
      </span>
    </Link>
  );
};

export default MenuItem;
