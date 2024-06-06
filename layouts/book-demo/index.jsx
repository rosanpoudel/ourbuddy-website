"use client";

import { useInView } from "react-intersection-observer";

const BookDemo = ({ title, description, btnText }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className="content-section">
      <div className="container">
        <div className="relative xl:max-w-[90%] mx-auto">
          <div className="absolute w-full h-full top-0 left-0 z-[-1]">
            <img
              src="/images/cta-bg.jpg"
              alt="cta-banner"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div
            style={{
              background:
                "linear-gradient(-80deg,rgba(16,27,83,.65),rgba(16,27,83,.96),#101b53)",
            }}
            className="px-4 py-[40px] xl:py-[60px] z-1 rounded-2xl"
          >
            <div
              className={`${
                inView ? "fadeInFromTop" : ""
              } text-center mb-[32px]`}
            >
              <h5 className="text-white text-[24px] xl:text-[32px] mb-[16px] font-bold">
                {title}
              </h5>
              <p className="text-white text-[14px] xl:text-[18px] font-md">
                {description}
              </p>
            </div>
            <div className={`${inView ? "fadeInFromBottom" : ""} text-center`}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-[14px] xl:text-[16px] text-[#ffffff] px-8 py-3 rounded-lg border border-[#ffffff] font-[500] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in-out  duration-1000 "
              >
                {btnText}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
