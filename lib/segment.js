import { SEGMENT_API_KEY } from "@/config/config";
import { formatDate } from "@/utils/date";
import { AnalyticsBrowser } from "@segment/analytics-next";

let analyticsInstance = null;

export const initSegment = async (writeKey) => {
  if (!analyticsInstance) {
    const [analytics] = await AnalyticsBrowser.load({ writeKey });
    analyticsInstance = analytics;
  }
  return analyticsInstance;
};

export const trackEvent = async (event, properties = {}) => {
  const analytics = await initSegment(SEGMENT_API_KEY);
  if (analytics) {
    analytics.track(event, { ...properties, timestamp: formatDate() });
  }
};

export const identifyUser = async (userId, traits = {}) => {
  const analytics = await initSegment(SEGMENT_API_KEY);
  if (analytics) {
    analytics.identify(userId, traits);
  }
};
