import SectionTitle from "@/components/common/sectionTitle";
import React from "react";

const UniqueAdvantage = () => {
  return (
    <div className="py-[120px]" id="advantages">
      <div className="container">
        <div className="grid grid-cols-10 gap-20">
          <div className="col-span-4 flex flex-col justify-center">
            <SectionTitle
              heading="Our Unique Advantage"
              subHeading="Advantages"
              description="Experience the unmatched efficiency of our video-enabled capabilities"
            />
            <p className="text-[#293c67] text-[18px] leading-10">
              Our platform's video-enabled capability allows you to create,
              capture, store, and share content with anyone, whether internal or
              external, individual or large groups, 10x faster than traditional
              methods.
            </p>
          </div>
          <div className="col-span-6">
            <img
              src="/images/advantage.png"
              className="rounded-3xl"
              alt="Advantages"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueAdvantage;
