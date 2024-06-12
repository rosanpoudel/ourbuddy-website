"use client";
import { SEGMENT_API_KEY } from "@/config/config";
import { initSegment, trackEvent } from "@/lib/segment";
import { useState, useEffect, useRef } from "react";

function SegmentAnalyticsInit() {
  useEffect(() => {
    const writeKey = SEGMENT_API_KEY;
    if (writeKey) {
      initSegment(writeKey);
    }

    trackEvent("Page visit", { type: "Desktop" });
  }, []);

  // track scroll events
  const sections = [
    { id: "hero-section", name: "HERO SECTION" },
    { id: "why-our-buddy", name: "EHY OUR BUDDY" },
    { id: "CTA", name: "CTA" },
    { id: "features", name: "FEATURES SECTION" },
    { id: "unique-advantage", name: "UNIQUE ADVANTAGE" },
    { id: "testimonials", name: "TESTIMONIALS" },
    { id: "contact-us", name: "CONTACT US FORM" },
    { id: "footer", name: "FOOTER" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (isVisible) {
            trackEvent("Content Viewed", {
              contentTitle: section.name,
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // interaction time on page / scroll depth
  const interactionStartTimeRef = useRef(null);
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);

  useEffect(() => {
    interactionStartTimeRef.current = Date.now();

    const handleUnload = () => {
      const interactionEndTime = Date.now();
      const interactionTime =
        interactionEndTime - interactionStartTimeRef.current;

      trackEvent("Page Interaction Time", {
        page: "Home",
        interactionTime: interactionTime / 1000,
      });

      trackEvent("Scroll Depth Reached", {
        percentage: maxScrollDepth,
      });
    };

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = (scrollTop + windowHeight) / documentHeight;
      const scrollDepthPercentage = Math.min(totalScroll * 100, 100);

      setMaxScrollDepth((prev) => Math.max(prev, scrollDepthPercentage));
    };

    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxScrollDepth]);

  return <></>;
}

export default SegmentAnalyticsInit;
