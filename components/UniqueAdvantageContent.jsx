"use client";
import { useEffect } from "react";
import SectionTitle from "@/components/sectionTitle";
import { trackEvent } from "@/lib/segment";
import { useInView } from "react-intersection-observer";

const UniqueAdvantageContent = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      trackEvent("Content Viewed", {
        contentTitle: "UNIQUE ADVANTAGES",
      });
    }
  }, [inView]);
  return (
    <div id="unique-advantage" ref={ref} className="content-section">
      <div className="container">
        <div className="grid xl:grid-cols-10 gap-10 xl:gap-20">
          <div className="xl:col-span-4 flex flex-col justify-center">
            <SectionTitle
              heading="Our Unique Advantage"
              subHeading="Advantages"
              description="Experience the unmatched efficiency of our video-enabled capabilities"
            />
            <p
              className={`${
                inView ? "fadeInFromLeft" : ""
              } text-[#293c67] text-[18px] leading-10`}
            >
              Our platform&apos;s video-enabled capability allows you to create,
              capture, store, and share content with anyone, whether internal or
              external, individual or large groups, 10x faster than traditional
              methods.
            </p>
          </div>
          <div className="xl:col-span-6">
            <img
              src="/images/advantage.png"
              className={`${inView ? "fadeInFromRight" : ""} rounded-3xl`}
              alt="Advantages"
              onClick={() =>
                trackEvent("Image interaction", {
                  interactionType: "Clicked",
                  image: `Unique advantage`,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueAdvantageContent;
