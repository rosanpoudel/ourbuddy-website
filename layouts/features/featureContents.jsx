"use client";
import React, { useEffect } from "react";
import FeaturesCard from "@/components/featuresCrad";
import SectionTitle from "@/components/sectionTitle";
import { useInView } from "react-intersection-observer";
import { trackEvent } from "@/lib/segment";

const FeatureContents = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      trackEvent("Content Viewed", {
        contentTitle: "FEATURES",
      });
    }
  }, [inView]);
  return (
    <div ref={ref} id="features" className="content-section bg-odd">
      <div className="container ">
        <div className="">
          <SectionTitle
            heading="Comprehensive Features to Elevate Your Brokerage"
            subHeading="Features"
            description="Discover the powerful tools that make Ourbuddy.ai indispensable."
          />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
            <FeaturesCard
              title="Personalized Video Messaging"
              description="Create and send tailored video messages to engage prospects and clients, boosting
            sales and relationship building."
              icon="/icons/video-message.svg"
            />
            <FeaturesCard
              title="Client Management"
              description="Seamlessly manage client information and communications in a centralized platform,
            enhancing organization and efficiency."
              icon="/icons/client.svg"
            />

            <FeaturesCard
              title="Policy Tracking"
              description="Effortlessly keep track of policies, renewals, and compliance to ensure nothing falls
            through the cracks."
              icon="/icons/policy-tracking.svg"
            />
            <FeaturesCard
              title="Analytics & Reporting"
              description="Gain valuable insights into your brokerage’s performance with real-time analytics and
            detailed reporting tools."
              icon="/icons/analytics.svg"
            />
            <FeaturesCard
              title="Secure Data Storage"
              description="Protect your sensitive client and business data with top-notch security measures,
            ensuring peace of mind."
              icon="/icons/storage.svg"
            />
            <FeaturesCard
              title="On-the-Go Video Creation"
              description="Develop training, learning, and solution videos quickly from anywhere, facilitating rapid
            communication and information sharing."
              icon="/icons/create-video.svg"
            />
            <FeaturesCard
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

export default FeatureContents;
