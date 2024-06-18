"use client";

import { useInView } from "react-intersection-observer";

const TestimonialsCard = ({ title, clientName, company }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "fadeInFromTop" : ""
      } bg-white flex flex-col justify-between rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100 px-8 xl:px-10 py-10 xl:py-12  hover:-translate-y-4 transition-all duration-700`}
    >
      <div>
        <img
          className="w-[35px] h-[40px] xl:w-[55px] xl:h-[60px]"
          src="/images/quotes.svg"
          alt={title}
        />
      </div>
      <div className="text-center leading-10 tracking-wider text-[16px] xl:text-[20px] text-[#6e7085] italic mt-[30px] xl:mt-[50px] mb-[30px]">
        {title}
      </div>

      <div className="text-center">
        <p className="text-[#333333] text-[18px] xl:text-[20px] font-[600] tracking-widest">
          {clientName}
        </p>
        <p className="text-[#a1a1a1] text-[14px] xl:text-[16px] font-[500]">
          {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
