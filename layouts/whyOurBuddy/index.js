import React from "react";
import SectionTitle from "../../components/common/sectionTitle";

const WhyCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-gray-100 px-10 py-12  hover:-translate-y-4 transition-all duration-700">
      <div className="mb-[35px]">
        <img width="60px" height="60px" src={icon} alt={title} />
      </div>
      <h3 className="text-[#1e266d] text-[20px] mb-[16px] font-[500] min-h-[48px]">
        {title}
      </h3>
      <p className="text-[#293c67] text-[18px]">{description}</p>{" "}
    </div>
  );
};

const WhyOurBuddy = () => {
  return (
    <div className="py-[120px] bg-[#f8f8fc]" id="benefits">
      <div className="container ">
        <div className="">
          <SectionTitle
            heading="Why Choose Ourbuddy.ai?"
            subHeading="Why OurBuddy"
            description="Experience unparalleled benefits designed to enhance your
              brokerage's success."
          />

          <div className="grid grid-cols-3 gap-12">
            <WhyCard
              title="Close More Sales"
              description="Increase your conversion rates with personalized video messages that resonate with
              your prospects."
              icon="/icons/sales.svg"
            />
            <WhyCard
              title="Build Stronger Client Relationships"
              description="Foster trust and loyalty through personalized video communications that make clients
              feel valued and understood."
              icon="/icons/relationship.svg"
            />

            <WhyCard
              title="Onboard Clients and Provide Product Training Efficiently"
              description="Simplify and enhance the onboarding process with personalized video messages,
              ensuring clients are well-informed and confident in using your products."
              icon="/icons/training.svg"
            />
            <WhyCard
              title="Onboard and Train New Hires 10x Faster"
              description="Accelerate the training process for new employees with personalized video content,
              reducing time-to-productivity"
              icon="/icons/onboard.svg"
            />
            <WhyCard
              title="Create Training, Learning, and Solution Videos on the Go"
              description="Develop and share instructional videos quickly, improving internal workflows and
              communication with clients and prospects."
              icon="/icons/media-items.svg"
            />
            <WhyCard
              title="Central Video-Based Knowledge Hub"
              description="Establish a centralized repository of video content for training, learning, and reference,
              accessible to all team members and clients."
              icon="/icons/knowledge.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurBuddy;
