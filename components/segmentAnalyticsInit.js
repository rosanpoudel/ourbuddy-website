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
        interactionTime: `${Math.floor(interactionTime / 1000)} seconds`,
      });

      trackEvent("Scroll Depth Reached", {
        percentage: `${Math.floor(maxScrollDepth)}%`,
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
