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
        const preferences = JSON.parse(cookieConsent);
        setShowAnalytics(preferences.analytics);
      }
    };

    // Vérifier immédiatement
    checkConsent();

    // Écouter l'événement d'activation
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
        const preferences = JSON.parse(cookieConsent);
        setShowSpeedInsights(preferences.speedInsights);
      }
    };

    // Vérifier immédiatement
    checkConsent();

    // Écouter l'événement d'activation
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
        const preferences = JSON.parse(cookieConsent);
        setShowMetricool(preferences.metricool);
      }
    };

    // Vérifier immédiatement
    checkConsent();

    // Écouter l'événement d'activation
    const handleEnableMetricool = () => {
      setShowMetricool(true);
      // Charger Metricool
      if (typeof window !== "undefined") {
        const script = document.createElement("script");
        script.src = "https://tracker.metricool.com/resources/be.js";
        script.onload = () => {
          if (window.beTracker) {
            window.beTracker.t({ hash: process.env.NEXT_PUBLIC_METRICOOL_HASH });
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

  return null; // Metricool n'a pas de composant React
}
