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
        "Ourbuddy has been instrumental in not only helping us onboard new brokers but increasing collaboration between senior brokers. It truly is a game changer.",
      company: "Keyes Insurance Brokerage Ltd.",
      clientName: "Shaun Keyes, President",
    },
  ];
  return (
    <div ref={ref} id="testimonials" className="content-section bg-even">
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
