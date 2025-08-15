"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    beTracker: any;
  }
}

export function ConditionalAnalytics() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem("cookie-consent");
      if (cookieConsent) {
        try {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowAnalytics(false);
            return;
          }

          setShowAnalytics(preferences.analytics || false);
        } catch (error) {
          // Handle corrupted localStorage data
          localStorage.removeItem("cookie-consent");
          setShowAnalytics(false);
        }
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableAnalytics = () => setShowAnalytics(true);
    window.addEventListener("enable-analytics", handleEnableAnalytics);

    return () => {
      window.removeEventListener("enable-analytics", handleEnableAnalytics);
    };
  }, []);

  if (!showAnalytics) return null;

  return <Analytics />;
}

export function ConditionalSpeedInsights() {
  const [showSpeedInsights, setShowSpeedInsights] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem("cookie-consent");
      if (cookieConsent) {
        try {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowSpeedInsights(false);
            return;
          }

          setShowSpeedInsights(preferences.speedInsights || false);
        } catch (error) {
          // Handle corrupted localStorage data
          localStorage.removeItem("cookie-consent");
          setShowSpeedInsights(false);
        }
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableSpeedInsights = () => setShowSpeedInsights(true);
    window.addEventListener("enable-speed-insights", handleEnableSpeedInsights);

    return () => {
      window.removeEventListener(
        "enable-speed-insights",
        handleEnableSpeedInsights
      );
    };
  }, []);

  if (!showSpeedInsights) return null;

  return <SpeedInsights />;
}

export function ConditionalMetricool() {
  const [showMetricool, setShowMetricool] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem("cookie-consent");
      if (cookieConsent) {
        try {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowMetricool(false);
            return;
          }

          setShowMetricool(preferences.metricool || false);
        } catch (error) {
          // Handle corrupted localStorage data
          localStorage.removeItem("cookie-consent");
          setShowMetricool(false);
        }
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableMetricool = () => {
      setShowMetricool(true);
      // Load Metricool
      if (typeof window !== "undefined") {
        const script = document.createElement("script");
        script.src = "https://tracker.metricool.com/resources/be.js";
        script.onload = () => {
          if (window.beTracker) {
            window.beTracker.t({
              hash: process.env.NEXT_PUBLIC_METRICOOL_HASH,
            });
          }
        script.onload = () => {
          if (window.beTracker) {
            if (METRICOOL_HASH) {
              window.beTracker.t({
                hash: METRICOOL_HASH,
              });
            } else {
              // Optionally log a warning for debugging
              console.warn("Metricool hash is not defined. Skipping Metricool tracker initialization.");
            }
          }
        };
        document.head.appendChild(script);
      }
    };

    window.addEventListener("enable-metricool", handleEnableMetricool);

    return () => {
      window.removeEventListener("enable-metricool", handleEnableMetricool);
    };
  }, []);
  useEffect(() => {
    let metricoolScript: HTMLScriptElement | null = null;
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem("cookie-consent");
      if (cookieConsent) {
        try {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowMetricool(false);
            return;
          }

          setShowMetricool(preferences.metricool || false);
        } catch (error) {
          // Handle corrupted localStorage data
          localStorage.removeItem("cookie-consent");
          setShowMetricool(false);
        }
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableMetricool = () => {
      setShowMetricool(true);
      // Load Metricool
      if (typeof window !== "undefined" && !metricoolScript) {
        const script = document.createElement("script");
        script.src = "https://tracker.metricool.com/resources/be.js";
        script.onload = () => {
          if (window.beTracker) {
            window.beTracker.t({
              hash: process.env.NEXT_PUBLIC_METRICOOL_HASH,
            });
          }
        };
        document.head.appendChild(script);
        metricoolScript = script;
      }
    };

    window.addEventListener("enable-metricool", handleEnableMetricool);

    return () => {
      window.removeEventListener("enable-metricool", handleEnableMetricool);
      if (metricoolScript && metricoolScript.parentNode) {
        metricoolScript.parentNode.removeChild(metricoolScript);
        metricoolScript = null;
      }
    };
  }, []);

  return null; // Metricool has no React component
}
