import React from "react";

const SectionTitle = ({ heading, subHeading, description }) => {
  return (
    <div className="mb-[50px] xl:mb-[80px]">
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
