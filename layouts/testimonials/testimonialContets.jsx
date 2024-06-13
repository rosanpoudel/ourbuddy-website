"use client";
import React, { useEffect } from "react";
import { trackEvent } from "@/lib/segment";
import { useInView } from "react-intersection-observer";
import SectionTitle from "@/components/sectionTitle";
import TestimonialsCard from "@/components/testimonialsCard";

const TestimonialContets = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      trackEvent("Content Viewed", {
        contentTitle: "TESTIMONIALS",
      });
    }
  }, [inView]);
  const data = [
    {
      title:
        "Since we started using Ourbuddy.ai, our productivity has increased significantly, and our clients are happier than ever!",
      clientName: "Anil Pradhan",
      company: "Keyes Insurance",
    },

    {
      title:
        "The analytics feature has been a game-changer for us. We now understand our business better and can make more informed decisions.",
      clientName: "Roshan Poudel",
      company: "Nepal Life Insurance",
    },
  ];
  return (
    <div ref={ref} id="testimonials" className="content-section bg-[#f8f8fc]">
      <div className="container">
        <SectionTitle
          heading="What Our Clients Are Saying"
          subHeading="Testimonials"
          description="Learn how Ourbuddy.ai is revolutionizing insurance brokerages."
        />

        <div className="grid xl:grid-cols-3 gap-10">
          {data?.map((d, i) => {
            return (
              <TestimonialsCard
                title={d?.title}
                clientName={d.clientName}
                company={d.company}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialContets;
