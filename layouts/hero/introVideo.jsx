import { trackEvent } from "@/lib/segment";
import { useState, useEffect, useRef } from "react";

const YouTubeVideo = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const onYouTubeIframeAPIReady = () => {
      const player = new YT.Player(iframeRef.current, {
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    const onPlayerStateChange = (event) => {
      if (event.data === YT.PlayerState.PLAYING) {
        trackEvent("Video Played", { videoTitle: "Intro video" });
      }
    };

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      // Cleanup
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className="rounded-lg w-full h-full"
      src="https://www.youtube.com/embed/iYRXAsz5Dtc"
      title="Revolutionize Your Brokerage with Ourbuddy.ai: Secure, Share, and Succeed"
      frameBorder="0"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeVideo;
