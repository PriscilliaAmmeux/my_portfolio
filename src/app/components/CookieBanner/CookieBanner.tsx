"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../button/button";

interface CookiePreferences {
  analytics: boolean;
  speedInsights: boolean;
  metricool: boolean;
}

// Constants
const COOKIE_EXPIRY_DAYS = Math.min(
  parseInt(process.env.NEXT_PUBLIC_COOKIE_EXPIRY_DAYS || '7'),
  30 // Maximum 30 days for GDPR compliance
);

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    speedInsights: false,
    metricool: false,
  });

  const showSettingsRef = useRef(showSettings);

  // Keep showSettingsRef in sync with showSettings
  useEffect(() => {
    showSettingsRef.current = showSettings;
  }, [showSettings]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (showSettingsRef.current && e.key === "Escape") {
        setShowSettings(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Helper function to check localStorage availability
  const isLocalStorageAvailable = (): boolean => {
    try {
      if (typeof window === "undefined") return false;
      const test = "__localStorage_test__";
      localStorage.setItem(test, "test");
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  };

  // Helper function to detect operating system
  const getOperatingSystem = (): string => {
    if (typeof window === "undefined") return "unknown";

    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform?.toLowerCase() || "";

    if (userAgent.includes("mac") || platform.includes("mac")) {
      return "macOS";
    } else if (userAgent.includes("win") || platform.includes("win")) {
      return "Windows";
    } else if (userAgent.includes("linux") || platform.includes("linux")) {
      return "Linux";
    } else if (userAgent.includes("android")) {
      return "Android";
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      return "iOS";
    }

    return "unknown";
  };

  // Get OS-specific storage behavior
  const getStorageBehavior = () => {
    const os = getOperatingSystem();

    // Different OS have different localStorage behaviors in private mode
    switch (os) {
      case "iOS":
      case "macOS":
        // Safari private mode allows localStorage but with 0 quota
        return { hasQuotaLimits: true, privateModeBehavior: "zero_quota" };
      case "Windows":
      case "Linux":
        // Chrome/Firefox private mode usually blocks localStorage entirely
        return { hasQuotaLimits: false, privateModeBehavior: "blocked" };
      case "Android":
        // Android browsers vary, but usually similar to desktop
        return { hasQuotaLimits: false, privateModeBehavior: "blocked" };
      default:
        return { hasQuotaLimits: false, privateModeBehavior: "unknown" };
    }
  };

  useEffect(() => {
    // Check if user has already made their choice
    if (!isLocalStorageAvailable()) {
      const storageBehavior = getStorageBehavior();
      console.info(
        `Operating System: ${getOperatingSystem()}, Storage behavior: ${
          storageBehavior.privateModeBehavior
        }`
      );
      setShowBanner(true);
      return;
    }

    try {
      const cookieConsent = localStorage.getItem("cookie-consent");
      if (!cookieConsent) {
        setShowBanner(true);
      } else {
        // Load existing preferences
        const savedPreferences = JSON.parse(cookieConsent);

        // Check if consent has expired
        if (savedPreferences.expiry && Date.now() > savedPreferences.expiry) {
          localStorage.removeItem("cookie-consent");
          setShowBanner(true);
          return;
        }

        // Validate preferences structure
        if (savedPreferences && typeof savedPreferences === "object") {
          setPreferences({
            analytics: savedPreferences.analytics || false,
            speedInsights: savedPreferences.speedInsights || false,
            metricool: savedPreferences.metricool || false,
          });
          // Trigger authorized services
          triggerServices(savedPreferences);
        } else {
          // Invalid data structure
          localStorage.removeItem("cookie-consent");
          setShowBanner(true);
        }
      }
    } catch (error) {
      // Handle any localStorage errors (private browsing, quota exceeded, etc.)
      const os = getOperatingSystem();
      console.warn(`Cookie consent localStorage error on ${os}:`, error);
      setShowBanner(true);
    }
  }, []);

  const triggerServices = (prefs: CookiePreferences) => {
    // Trigger services based on preferences
    if (typeof window !== "undefined" && prefs && typeof prefs === "object") {
      // Analytics
      if (prefs.analytics === true) {
        window.dispatchEvent(new CustomEvent("enable-analytics"));
      }

      // Speed Insights
      if (prefs.speedInsights === true) {
        window.dispatchEvent(new CustomEvent("enable-speed-insights"));
      }

      // Metricool
      if (prefs.metricool === true) {
        window.dispatchEvent(new CustomEvent("enable-metricool"));
      }
    }
  };

  const acceptAll = () => {
    if (!isLocalStorageAvailable()) {
      console.warn(
        "localStorage not available, cannot save cookie preferences"
      );
      return;
    }

    const allAccepted = {
      analytics: true,
      speedInsights: true,
      metricool: true,
    };

    // Save for 7 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);

    const consentData = {
      ...allAccepted,
      timestamp: Date.now(),
      expiry: expiryDate.getTime(),
    };

    try {
      localStorage.setItem("cookie-consent", JSON.stringify(consentData));
      setPreferences(allAccepted);
      triggerServices(allAccepted);
      setShowBanner(false);
    } catch (error) {
      console.error("Failed to save cookie preferences:", error);
      // Still trigger services even if we can't save preferences
      setPreferences(allAccepted);
      triggerServices(allAccepted);
      setShowBanner(false);
    }
  };

  const rejectAll = () => {
    if (!isLocalStorageAvailable()) {
      console.warn(
        "localStorage not available, cannot save cookie preferences"
      );
      setPreferences({
        analytics: false,
        speedInsights: false,
        metricool: false,
      });
      setShowBanner(false);
      return;
    }

    const allRejected = {
      analytics: false,
      speedInsights: false,
      metricool: false,
    };

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);

    const consentData = {
      ...allRejected,
      timestamp: Date.now(),
      expiry: expiryDate.getTime(),
    };

    try {
      localStorage.setItem("cookie-consent", JSON.stringify(consentData));
      setPreferences(allRejected);
      setShowBanner(false);
    } catch (error) {
      console.error("Failed to save cookie preferences:", error);
      // Still update UI even if we can't save preferences
      setPreferences(allRejected);
      setShowBanner(false);
    }
  };

  const savePreferences = () => {
    if (!isLocalStorageAvailable()) {
      console.warn(
        "localStorage not available, cannot save cookie preferences"
      );
      triggerServices(preferences);
      setShowBanner(false);
      setShowSettings(false);
      return;
    }

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);

    const consentData = {
      ...preferences,
      timestamp: Date.now(),
      expiry: expiryDate.getTime(),
    };

    try {
      localStorage.setItem("cookie-consent", JSON.stringify(consentData));
      triggerServices(preferences);
      setShowBanner(false);
      setShowSettings(false);
    } catch (error) {
      console.error("Failed to save cookie preferences:", error);
      // Still trigger services and update UI even if we can't save preferences
      triggerServices(preferences);
      setShowBanner(false);
      setShowSettings(false);
    }
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />

      {/* Main banner */}
      {!showSettings ? (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 p-6 max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🍪 Gestion des cookies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
              Ce site utilise des cookies pour améliorer votre expérience et
              analyser le trafic. Vous pouvez choisir d'accepter ou de refuser
              ces services.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                type="button"
                text="Tout accepter"
                ariaLabel="Accepter tous les cookies"
                variant="bgPink"
                onClick={acceptAll}
              />
              <Button
                type="button"
                text="Tout refuser"
                ariaLabel="Refuser tous les cookies"
                variant="bgWhite"
                onClick={rejectAll}
              />
              <Button
                type="button"
                text="Personnaliser"
                ariaLabel="Personnaliser les cookies"
                variant="bgWhite"
                onClick={openSettings}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Customization panel */
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Préférences des cookies
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-900 dark:text-white">
                  Vercel Analytics
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Statistiques de visite du site
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      analytics: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-900 dark:text-white">
                  Speed Insights
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Performance du site web
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.speedInsights}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      speedInsights: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-900 dark:text-white">
                  Metricool
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Analyse des réseaux sociaux
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.metricool}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      metricool: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              text="Sauvegarder"
              ariaLabel="Sauvegarder les préférences"
              variant="bgPink"
              onClick={savePreferences}
              className="flex-1"
            />
            <Button
              type="button"
              text="Retour"
              ariaLabel="Retour"
              variant="bgWhite"
              onClick={() => setShowSettings(false)}
              className="flex-1"
            />
          </div>
        </div>
      )}
    </>
  );
}
