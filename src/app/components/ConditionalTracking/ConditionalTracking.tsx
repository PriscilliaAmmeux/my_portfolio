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
      // Check if localStorage is available
      if (typeof window === "undefined") return;

      try {
        const cookieConsent = localStorage.getItem("cookie-consent");
        if (cookieConsent) {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowAnalytics(false);
            return;
          }

          setShowAnalytics(preferences.analytics || false);
        }
      } catch (error) {
        // Handle corrupted localStorage data or localStorage unavailable
        console.warn("Analytics consent localStorage error:", error);
        try {
          localStorage.removeItem("cookie-consent");
        } catch {
          // localStorage completely unavailable, ignore
        }
        setShowAnalytics(false);
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableAnalytics = () => setShowAnalytics(true);

    if (typeof window !== "undefined") {
      window.addEventListener("enable-analytics", handleEnableAnalytics);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("enable-analytics", handleEnableAnalytics);
      }
    };
  }, []);

  if (!showAnalytics) return null;

  return <Analytics />;
}

export function ConditionalSpeedInsights() {
  const [showSpeedInsights, setShowSpeedInsights] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      // Check if localStorage is available
      if (typeof window === "undefined") return;

      try {
        const cookieConsent = localStorage.getItem("cookie-consent");
        if (cookieConsent) {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowSpeedInsights(false);
            return;
          }

          setShowSpeedInsights(preferences.speedInsights || false);
        }
      } catch (error) {
        // Handle corrupted localStorage data or localStorage unavailable
        console.warn("SpeedInsights consent localStorage error:", error);
        try {
          localStorage.removeItem("cookie-consent");
        } catch {
          // localStorage completely unavailable, ignore
        }
        setShowSpeedInsights(false);
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableSpeedInsights = () => setShowSpeedInsights(true);

    if (typeof window !== "undefined") {
      window.addEventListener(
        "enable-speed-insights",
        handleEnableSpeedInsights
      );
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(
          "enable-speed-insights",
          handleEnableSpeedInsights
        );
      }
    };
  }, []);

  if (!showSpeedInsights) return null;

  return <SpeedInsights />;
}

export function ConditionalMetricool() {
  const [showMetricool, setShowMetricool] = useState(false);

  useEffect(() => {
    let metricoolScript: HTMLScriptElement | null = null;

    const checkConsent = () => {
      // Check if localStorage is available
      if (typeof window === "undefined") return;

      try {
        const cookieConsent = localStorage.getItem("cookie-consent");
        if (cookieConsent) {
          const preferences = JSON.parse(cookieConsent);

          // Check if consent has expired
          if (preferences.expiry && Date.now() > preferences.expiry) {
            localStorage.removeItem("cookie-consent");
            setShowMetricool(false);
            return;
          }

          setShowMetricool(preferences.metricool || false);
        }
      } catch (error) {
        // Handle corrupted localStorage data or localStorage unavailable
        console.warn("Metricool consent localStorage error:", error);
        try {
          localStorage.removeItem("cookie-consent");
        } catch {
          // localStorage completely unavailable, ignore
        }
        setShowMetricool(false);
      }
    };

    // Check immediately
    checkConsent();

    // Listen to activation event
    const handleEnableMetricool = () => {
      setShowMetricool(true);
      // Load Metricool
      if (typeof window !== "undefined") {
        // Remove existing script if any
        if (metricoolScript && document.head.contains(metricoolScript)) {
          document.head.removeChild(metricoolScript);
        }

        metricoolScript = document.createElement("script");
        metricoolScript.src = "https://tracker.metricool.com/resources/be.js";
        metricoolScript.onload = () => {
          if (window.beTracker) {
            const metricoolHash = process.env.NEXT_PUBLIC_METRICOOL_HASH;
            if (metricoolHash) {
              window.beTracker.t({ hash: metricoolHash });
            } else {
              console.warn(
                "Metricool hash is not defined. Skipping Metricool tracker initialization."
              );
            }
          }
        };
        document.head.appendChild(metricoolScript);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("enable-metricool", handleEnableMetricool);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("enable-metricool", handleEnableMetricool);
      }

      // Clean up script when component unmounts or consent is revoked
      if (metricoolScript && document.head.contains(metricoolScript)) {
        document.head.removeChild(metricoolScript);
      }
    };
  }, []);

  return null; // Metricool has no React component
}
