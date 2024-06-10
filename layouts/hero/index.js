import React from "react";
import Header from "../header";

const HeroSection = () => {
  return (
    <div className="hero-bg pb-10 xl:pb-20 relative z-[1]">
      <div className="absolute w-full h-full left-0 top-0 z-[-1]">
        <h1>
          <img
            src="/images/hero-bg.png"
            className="w-full h-full object-cover"
          />
        </h1>
      </div>
      <div className="container  flex flex-col items-center">
        <Header />

        <div>
          <div className="max-w-[700px] mx-auto text-center mt-3 xl:mt-12 mb-10 xl:mb-16">
            <h1 className="fadeInFromTop px-4 text-[26px] xl:text-[44px] text-[#1e266d] font-[800] leading-[1.3] tracking-wide">
              Transform Your Insurance Brokerage with Ourbuddy.ai
            </h1>
            <p className="fadeInFromTop mt-4 mb-5 xl:mb-8 text-[14px] xl:text-[18px] text-[#293c67]">
              Unlock new levels of efficiency, client satisfaction, <br />
              and growth with our innovative SaaS platform.
            </p>
            <div className="fadeInFromTop flex justify-center">
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] font-[500] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in-out  duration-1000"
              >
                Book a demo
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

          <div className="fadeInFromBottom w-full xl:w-[700px] h-[450px] mx-auto">
            <iframe
              className="rounded-lg w-full h-full xl:w-[800px] xl:h-[450px]"
              src="https://www.youtube.com/embed/iYRXAsz5Dtc"
              title="Revolutionize Your Brokerage with Ourbuddy.ai: Secure, Share, and Succeed"
              frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
