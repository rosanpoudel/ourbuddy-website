import SectionTitle from "@/components/sectionTitle";
import VideoBenefitsAccordion from "@/components/videoBenefitsAccordion";
import React from "react";

const VideoBenefits = () => {
  return (
    <div className="content-section bg-odd" id="videoBenefits">
      <div className="container">
        <SectionTitle
          heading="Personalized video use cases and benefits"
          subHeading="Video Benefits"
          description="Unlock your problem-solving superpowers with personalized videos!"
        />

        <VideoBenefitsAccordion />
      </div>
    </div>
  );
};

export default VideoBenefits;
