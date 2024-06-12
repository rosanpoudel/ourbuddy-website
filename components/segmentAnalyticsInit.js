"use client";
import { SEGMENT_API_KEY } from "@/config/config";
import { initSegment, trackEvent } from "@/lib/segment";
import { useEffect } from "react";

function SegmentAnalyticsInit() {
  useEffect(() => {
    const writeKey = SEGMENT_API_KEY;
    if (writeKey) {
      initSegment(writeKey);
    }

    trackEvent("Page visit", { type: "Desktop" });
  }, []);

  return <></>;
}

export default SegmentAnalyticsInit;
