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

const Features = () => {
  return (
    <div className="py-[120px] bg-[#f8f8fc]" id="features">
      <div className="container ">
        <div className="">
          <SectionTitle
            heading="Comprehensive Features to Elevate Your Brokerage"
            subHeading="Features"
            description="Discover the powerful tools that make Ourbuddy.ai indispensable."
          />

          <div className="grid grid-cols-3 gap-12">
            <WhyCard
              title="Personalized Video Messaging"
              description="Create and send tailored video messages to engage prospects and clients, boosting
              sales and relationship building."
              icon="/icons/video-message.svg"
            />
            <WhyCard
              title="Client Management"
              description="Seamlessly manage client information and communications in a centralized platform,
              enhancing organization and efficiency."
              icon="/icons/client.svg"
            />

            <WhyCard
              title="Policy Tracking"
              description="Effortlessly keep track of policies, renewals, and compliance to ensure nothing falls
              through the cracks."
              icon="/icons/policy-tracking.svg"
            />
            <WhyCard
              title="Analytics & Reporting"
              description="Gain valuable insights into your brokerage’s performance with real-time analytics and
              detailed reporting tools."
              icon="/icons/analytics.svg"
            />
            <WhyCard
              title="Secure Data Storage"
              description="Protect your sensitive client and business data with top-notch security measures,
              ensuring peace of mind."
              icon="/icons/storage.svg"
            />
            <WhyCard
              title="On-the-Go Video Creation"
              description="Develop training, learning, and solution videos quickly from anywhere, facilitating rapid
              communication and information sharing."
              icon="/icons/create-video.svg"
            />
            <WhyCard
              title="Central Video-Based Knowledge Hub"
              description="Establish a comprehensive video repository for training and reference, easily accessible
              to your entire team."
              icon="/icons/knowledge.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
