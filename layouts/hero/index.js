import React from "react";
import Header from "../header";

const HeroSection = () => {
  return (
    <div className="hero-bg  min-h-screen relative z-[1]">
      <div className="absolute w-full h-full left-0 top-0 z-[-1]">
        <img src="/images/hero-bg.png" className="w-full h-full object-cover" />
      </div>
      <div className="container  flex flex-col items-center">
        <Header />
        <div className="">
          <div className=" max-w-[700px] mx-auto text-center mt-12 mb-20">
            <h1 className="text-[44px] text-[#1e266d] font-[800] leading-[1.3] tracking-wide">
              Transform Your Insurance Brokerage with Ourbuddy.ai
            </h1>
            <p className="mt-4 mb-8 text-[18px] text-[#293c67]">
              Unlock new levels of efficiency, client satisfaction, <br />
              and growth with our innovative SaaS platform.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex items-center jsutify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in duration-800"
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
              </button>
            </div>
          </div>

          <div className="w-[700px] h-[400px] mx-auto">
            <iframe
              width="800"
              height="450"
              className="rounded-lg"
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