import SectionTitle from "@/components/sectionTitle";
import VideoBenefitsAccordion from "@/components/videoBenefitsAccordion";
import React from "react";

const VideoBenefits = () => {
  return (
    <div className="content-section" id="videoBenefits">
      <div className="container">
        <SectionTitle
          heading="Personalized Video Use cases and benefits"
          subHeading="Video Benefits"
          description="Explore how the personalized videos can imapct your business and team growth."
        />

        <VideoBenefitsAccordion />
      </div>
    </div>
  );
};

export default VideoBenefits;
