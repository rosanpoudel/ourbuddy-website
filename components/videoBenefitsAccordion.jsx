"use client";
import { trackEvent } from "@/lib/segment";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const VideoBenefitsAccordion = () => {
  const data = [
    {
      id: 1,
      title: "Personalized Policy Review Videos for Clients",
      details: {
        scenario:
          "John receives a video from his insurance agent explaining the specifics of his home insurance policy, highlighting the coverage limits and any exclusions that might apply.",
        benefit:
          "John gains a clear understanding of his policy, ensuring he knows exactly what is covered and can make informed decisions.",
      },
    },
    {
      id: 2,
      title: "Custom Onboarding Videos for New Clients",
      details: {
        scenario:
          "Sarah, a new client, receives a welcome video detailing how to access her policy documents online and what to expect in the first few weeks.",
        benefit:
          "Sarah feels welcomed and informed, reducing anxiety and increasing satisfaction with her new insurance provider.",
      },
    },
    {
      id: 3,
      title: "Personalized Renewal Reminder Videos",
      details: {
        scenario:
          "Mark gets a personalized video reminder from his broker explaining the importance of renewing his auto insurance and any changes in his policy.",
        benefit:
          "Mark is reminded to renew his policy in a timely manner and is aware of any updates or changes.",
      },
    },
    {
      id: 4,
      title: "Custom Claims Process Explanation Videos",
      details: {
        scenario:
          "Lisa receives a video tutorial on how to file a claim after a recent car accident, including step-by-step instructions and necessary documentation.",
        benefit:
          "Lisa finds the claims process straightforward and less stressful, ensuring she submits all required information correctly.",
      },
    },
    {
      id: 5,
      title: "Personalized Thank You Videos After Policy Purchase",
      details: {
        scenario:
          "David receives a thank you video from his agent expressing gratitude for choosing ABC International and providing a brief overview of what to expect next.",
        benefit:
          "David feels appreciated and confident in his decision to purchase insurance from ABC International.",
      },
    },
    {
      id: 6,
      title: "Custom Risk Assessment Videos for Specific Clients",
      details: {
        scenario:
          "Emily receives a personalized risk assessment video for her new business, highlighting potential risks and recommended coverage options.",
        benefit:
          "Emily understands the specific risks her business faces and feels more secure with tailored coverage suggestions.",
      },
    },
    {
      id: 7,
      title: "Personalized Coverage Option Videos",
      details: {
        scenario:
          "James receives a video outlining different life insurance coverage options, tailored to his financial situation and future goals.",
        benefit:
          "James can make an informed decision about the best coverage option for his needs and budget.",
      },
    },
    {
      id: 8,
      title: "Custom Videos for Explaining Policy Changes",
      details: {
        scenario:
          "Maria gets a video explaining recent changes to her health insurance policy, including new benefits and any modifications to existing coverage.",
        benefit:
          "Maria is fully informed about policy changes and understands how they affect her coverage.",
      },
    },
    {
      id: 9,
      title: "Personalized Follow-Up Videos After Claims",
      details: {
        scenario:
          "After filing a claim for a flooded basement, Tom receives a follow-up video updating him on the status of his claim and next steps.",
        benefit:
          "Tom feels reassured and informed throughout the claims process, reducing stress and uncertainty.",
      },
    },
    {
      id: 10,
      title: "Custom Videos for New Insurance Products",
      details: {
        scenario:
          "Anna receives a video introducing a new cyber insurance product tailored to small businesses, explaining its benefits and how it works.",
        benefit:
          "Anna is aware of new insurance products that could benefit her business and can make an informed decision about purchasing additional coverage.",
      },
    },
    {
      id: 11,
      title: "Personalized Videos for Client-Specific Insurance Tips",
      details: {
        scenario:
          "Chris receives a video with tips on how to protect his home from winter weather, tailored to his location and specific policy coverage.",
        benefit:
          "Chris feels supported and informed, helping him take proactive steps to prevent damage and potential claims.",
      },
    },
    {
      id: 12,
      title: "Custom Videos for Policyholder Education",
      details: {
        scenario:
          "Rachel receives an educational video explaining the basics of liability insurance and how it protects her business.",
        benefit:
          "Rachel gains a better understanding of her insurance policies and how they protect her, enhancing her confidence in her coverage.",
      },
    },
    {
      id: 13,
      title: "Personalized Videos Highlighting Industry Trends",
      details: {
        scenario:
          "Michael receives a video update on emerging trends in the insurance industry and how they might impact his policies.",
        benefit:
          "Michael stays informed about industry changes and can make proactive adjustments to his coverage as needed.",
      },
    },
    {
      id: 14,
      title: "Custom Videos for Explaining Complex Insurance Terms",
      details: {
        scenario:
          "Sophie gets a video breaking down complex insurance jargon into simple, understandable terms related to her policy.",
        benefit:
          "Sophie gains clarity on her policy details, ensuring she fully understands her coverage and any associated terms.",
      },
    },
    {
      id: 15,
      title: "Personalized Customer Service Introduction Videos",
      details: {
        scenario:
          "Daniel receives a video introduction from his dedicated customer service representative, explaining how to reach out for help and what services are available.",
        benefit:
          "Daniel feels more connected and supported, knowing who to contact for assistance.",
      },
    },
    {
      id: 16,
      title: "Custom Videos for Annual Insurance Reviews",
      details: {
        scenario:
          "Olivia receives a video summarizing her annual insurance review, including any recommended changes or updates to her policies.",
        benefit:
          "Olivia is kept up-to-date on her insurance coverage and can make informed decisions about necessary adjustments.",
      },
    },
    {
      id: 17,
      title: "Personalized Disaster Preparedness Videos",
      details: {
        scenario:
          "Alex receives a video with personalized disaster preparedness tips for his area, including how to protect his home during hurricane season.",
        benefit:
          "Alex feels better prepared for potential disasters, reducing the risk of damage and ensuring he knows what to do in an emergency.",
      },
    },
    {
      id: 18,
      title: "Custom Videos for Cross-Selling or Upselling Policies",
      details: {
        scenario:
          "Jane receives a video highlighting the benefits of adding umbrella insurance to her existing policies, tailored to her risk profile.",
        benefit:
          "Jane learns about additional coverage options that can provide extra protection, helping her make an informed decision.",
      },
    },
    {
      id: 19,
      title: "Personalized Birthday or Holiday Greeting Videos",
      details: {
        scenario:
          "Emma receives a personalized birthday greeting video from her insurance agent, wishing her well and offering a small gift.",
        benefit:
          "Emma feels appreciated and valued, strengthening her relationship with her insurance provider.",
      },
    },
    {
      id: 20,
      title: "Custom Videos to Announce New Services or Updates",
      details: {
        scenario:
          "Lucas receives a video announcement about a new online portal for managing his insurance policies, including a demonstration of its features.",
        benefit:
          "Lucas stays informed about new services and can take advantage of the latest tools and resources offered by his insurance provider.",
      },
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      trackEvent("Content Viewed", {
        contentTitle: "VIDEO BENEFITs",
      });
    }
  }, [inView]);

  return (
    <div ref={ref} classname={`${inView ? "fadeInFromTop" : ""}`}>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data?.map((d, i) => (
          <div className={`shadow-2xl rounded-2xl `}>
            <div className="overflow-hidden">
              <img
                src={`/video-benefits/image-${i + 1}.webp`}
                className="rounded-tr-2xl rounded-tl-2xl transition duration-300 ease-in-out hover:scale-110 w-full"
                alt={d?.title}
                onClick={() =>
                  trackEvent("Image interaction", {
                    interactionType: "Clicked",
                    image: `Video benefits => ${d?.title}`,
                  })
                }
              />
            </div>

            <div className="px-6 pt-5 pb-8">
              <h4 class="text-[#1e266d]  text-[18px] xl:text-[20px] mb-[10px] xl:mb-[16px] font-bold xl:font-[500] xl:min-h-[48px]">
                {d?.title}
              </h4>
              <div className="mb-4">
                <p className="text-[#293c67] text-[16px] font-[600] mb-1">
                  Scenario:
                </p>
                <p className="text-[#4a4242]">{d?.details?.scenario}</p>
              </div>

              <div>
                <p className="text-[#293c67] text-[16px] font-[600] mb-1">
                  Benefit:
                </p>
                <p className="text-[#4a4242]">{d?.details?.benefit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBenefitsAccordion;
