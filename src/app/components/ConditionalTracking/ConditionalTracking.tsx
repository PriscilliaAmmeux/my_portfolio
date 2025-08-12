"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    tarteaucitron: any;
  }
}

export function ConditionalAnalytics() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (typeof window !== "undefined" && window.tarteaucitron) {
        // Vérifie si le consentement pour Vercel Analytics est donné
        const analyticsAllowed =
          window.tarteaucitron.state.vercelanalytics === true;
        setShowAnalytics(analyticsAllowed);
      }
    };

    // Vérifie immédiatement
    checkConsent();

    // Écoute les changements de consentement
    const interval = setInterval(checkConsent, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!showAnalytics) return null;

  return <Analytics />;
}

export function ConditionalSpeedInsights() {
  const [showSpeedInsights, setShowSpeedInsights] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (typeof window !== "undefined" && window.tarteaucitron) {
        // Vérifie si le consentement pour Speed Insights est donné
        const speedInsightsAllowed =
          window.tarteaucitron.state.vercelspeedinsights === true;
        setShowSpeedInsights(speedInsightsAllowed);
      }
    };

    // Vérifie immédiatement
    checkConsent();

    // Écoute les changements de consentement
    const interval = setInterval(checkConsent, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!showSpeedInsights) return null;

  return <SpeedInsights />;
}
