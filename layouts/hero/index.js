import React from "react";
import Header from "../header";
import BookDemoBtn from "./bookDemoBtn";

const HeroSection = () => {
  return (
    <div
      id="hero-sectoin"
      className="hero-bg pb-10 xl:pb-20 relative xl:h-[100vh] z-[1]"
    >
      <div className="absolute w-full h-full left-0 top-0 z-[-1]">
        <img
          src="/images/hero-bg.png"
          className="w-full w-full h-full object-cover"
        />
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
              <BookDemoBtn />
            </div>
          </div>

          <div className="fadeInFromBottom w-full xl:w-[700px] h-[350px] xl:h-[400px] mx-auto">
            <iframe
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-lg w-full h-full "
              src="https://www.youtube.com/embed/iYRXAsz5Dtc"
              title="Revolutionize Your Brokerage with Ourbuddy.ai: Secure, Share, and Succeed"
              frameBorder="0"
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
