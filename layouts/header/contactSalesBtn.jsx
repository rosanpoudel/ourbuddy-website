"use client";
import { trackEvent } from "@/lib/segment";
import { formatDate } from "@/utils/date";
import React from "react";

const ContactSalesBtn = () => {
  return (
    <a
      href="#contact-us"
      onClick={() =>
        trackEvent("Button Clicked", {
          buttonName: "Contact sales",
        })
      }
      className="flex items-center justify-center text-[#1276ff] font-[500] px-8 py-3 rounded-lg  border border-[#1276ff] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in-out  duration-1000 "
    >
      Contact sales
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
};

export default ContactSalesBtn;
