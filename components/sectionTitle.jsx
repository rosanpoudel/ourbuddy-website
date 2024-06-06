"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const SectionTitle = ({ heading, subHeading, description }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={` mb-[50px] xl:mb-[80px] ${inView ? "fadeInFromTop" : ""}`}
    >
      <p className="text-[#445781] text-[14px] font-[500] tracking-widest uppercase">
        {subHeading}
      </p>
      <h2 className="text-[#1e266d] text-[26px] xl:text-[36px] font-bold mb-1 xl:mb-2">
        {heading}
      </h2>
      <p className="text-[#445781] font-[500] text-[14px] xl:text-[18px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
