"use client";

import { useInView } from "react-intersection-observer";

const WhyCard = ({ title, description, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "fadeInFromTop" : ""
      } bg-white rounded-3xl shadow-2xl shadow-gray-100 px-8 py-10 xl:px-10 xl:py-12  hover:-translate-y-4 transition-all duration-700`}
    >
      <div className="mb-[15px] xl:mb-[35px]">
        <img
          className="w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]"
          src={icon}
          alt={title}
        />
      </div>
      <h3 className="text-[#1e266d]  text-[18px] xl:text-[20px] mb-[10px] xl:mb-[16px] font-bold xl:font-[500] xl:min-h-[48px]">
        {title}
      </h3>
      <p className="text-[#293c67] text-[16px] xl:text-[18px]">{description}</p>{" "}
    </div>
  );
};

export default WhyCard;
