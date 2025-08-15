"use client";

import { useState, useEffect } from "react";
import Button from "../button/button";

interface CookiePreferences {
  analytics: boolean;
  speedInsights: boolean;
  metricool: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    speedInsights: false,
    metricool: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait son choix
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      // Charger les préférences existantes
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      // Déclencher les services autorisés
      triggerServices(savedPreferences);
    }
  }, []);

  const triggerServices = (prefs: CookiePreferences) => {
    // Déclencher les services selon les préférences
    if (typeof window !== "undefined") {
      // Analytics
      if (prefs.analytics) {
        window.dispatchEvent(new CustomEvent("enable-analytics"));
      }

      // Speed Insights
      if (prefs.speedInsights) {
        window.dispatchEvent(new CustomEvent("enable-speed-insights"));
      }

      // Metricool
      if (prefs.metricool) {
        window.dispatchEvent(new CustomEvent("enable-metricool"));
      }
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      analytics: true,
      speedInsights: true,
      metricool: true,
    };

    // Sauvegarder pour 7 jours
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    const consentData = {
      ...allAccepted,
      timestamp: Date.now(),
      expiry: expiryDate.getTime(),
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setPreferences(allAccepted);
    triggerServices(allAccepted);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const allRejected = {
      analytics: false,
      speedInsights: false,
      metricool: false,
    };

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    const consentData = {
      ...allRejected,
      timestamp: Date.now(),
      expiry: expiryDate.getTime(),
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setPreferences(allRejected);
    setShowBanner(false);
  };

  const savePreferences = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    const consentData = {
      ...preferences,
      timestamp: Date.now(),
      expiry: expiryDate.getTime(),
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    triggerServices(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />

      {/* Bannière principale */}
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
        /* Panneau de personnalisation */
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
