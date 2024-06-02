import React from "react";

const BookDemo = ({ title, description, btnText }) => {
  return (
    <div className="py-[120px]">
      <div className="container">
        <div className="relative max-w-[90%] mx-auto">
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
            className="py-[60px] z-1 rounded-2xl"
          >
            <div className="text-center mb-[32px]">
              <h5 className="text-white text-[32px] mb-[16px] font-bold">
                {title}
              </h5>
              <p className="text-white text-[18px] font-md">{description}</p>
            </div>
            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-[#ffffff] px-8 py-3 rounded-lg border border-[#ffffff] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in duration-800 "
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
