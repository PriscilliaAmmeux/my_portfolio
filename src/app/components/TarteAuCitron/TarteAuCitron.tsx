"use client";

import Script from "next/script";

declare global {
  interface Window {
    tarteaucitron: any;
    beTracker: any;
  }
}

export default function TarteAuCitron() {
  const initTarteAuCitron = () => {
    if (typeof window !== "undefined" && window.tarteaucitron) {
      // Définir les services personnalisés avant l'initialisation

      // Service Vercel Analytics
      window.tarteaucitron.services.vercelanalytics = {
        key: "vercelanalytics",
        type: "analytic",
        name: "Vercel Analytics",
        uri: "https://vercel.com/docs/analytics/privacy-policy",
        needConsent: true,
        cookies: ["_vercel_analytics_id"],
        js: function () {
          "use strict";
          // Le script sera géré par le composant React
          console.log("Vercel Analytics autorisé");
        },
      };

      // Service Vercel Speed Insights
      window.tarteaucitron.services.vercelspeedinsights = {
        key: "vercelspeedinsights",
        type: "api",
        name: "Vercel Speed Insights",
        uri: "https://vercel.com/docs/speed-insights/privacy-policy",
        needConsent: true,
        cookies: ["_vercel_speed_insights"],
        js: function () {
          "use strict";
          // Le script sera géré par le composant React
          console.log("Vercel Speed Insights autorisé");
        },
      };

      // Service Metricool
      window.tarteaucitron.services.metricool = {
        key: "metricool",
        type: "analytic",
        name: "Metricool",
        uri: "https://metricool.com/privacy/",
        needConsent: true,
        cookies: ["_metricool_id"],
        js: function () {
          "use strict";
          if (window.tarteaucitron.user.metricoolId === undefined) {
            return;
          }

          window.tarteaucitron.addScript(
            "https://tracker.metricool.com/resources/be.js",
            "",
            function () {
              if (typeof window.beTracker !== "undefined") {
                window.beTracker.t({
                  hash: window.tarteaucitron.user.metricoolId,
                });
              }
            }
          );
        },
      };
      window.tarteaucitron.init({
        privacyUrl: "/privacy" /* Url de la politique de confidentialité */,
        bodyPosition:
          "top" /* top place le bandeau de consentement au début du code html, mieux pour l'accessibilité */,

        hashtag:
          "#tarteaucitron" /* Hashtag qui permet d'ouvrir le panneau de contrôle  */,
        cookieName:
          "tarteaucitron" /* Nom du cookie (uniquement lettres et chiffres) */,

        orientation:
          "middle" /* Position de la bannière (top - bottom - popup - banner) */,

        groupServices: true /* Grouper les services par catégorie */,
        showDetailsOnClick: true /* Cliquer pour ouvrir la description */,
        serviceDefaultState:
          "wait" /* Statut par défaut (true - wait - false) */,

        showAlertSmall: false /* Afficher la petite bannière en bas à droite */,
        cookieslist:
          false /* Afficher la liste des cookies via une mini bannière */,
        cookieslistEmbed:
          false /* Afficher la liste des cookies dans le panneau de contrôle */,

        closePopup: true /* Afficher un X pour fermer la bannière */,

        showIcon: true /* Afficher un cookie pour ouvrir le panneau */,
        //"iconSrc": "", /* Optionnel: URL ou image en base64 */
        iconPosition:
          "BottomRight" /* Position de l'icons: (BottomRight - BottomLeft - TopRight - TopLeft) */,

        adblocker: false /* Afficher un message si un Adblocker est détecté */,

        DenyAllCta: true /* Afficher le bouton Tout refuser */,
        AcceptAllCta: true /* Afficher le bouton Tout accepter */,
        highPrivacy: true /* Attendre le consentement */,
        alwaysNeedConsent:
          false /* Demander le consentement même pour les services "Privacy by design" */,

        handleBrowserDNTRequest:
          false /* Refuser tout par défaut si Do Not Track est activé sur le navigateur */,

        removeCredit:
          false /* Retirer le lien de crédit vers tarteaucitron.io */,
        moreInfoLink: true /* Afficher le lien En savoir plus */,

        useExternalCss:
          true /* Mode expert : désactiver le chargement des fichiers .css tarteaucitron */,
        useExternalJs:
          false /* Mode expert : désactiver le chargement des fichiers .js tarteaucitron */,

        //"cookieDomain": ".my-multisite-domaine.fr", /* Optionnel: domaine principal pour partager le consentement avec des sous domaines */

        readmoreLink: "" /* Changer le lien En savoir plus par défaut */,

        mandatory:
          true /* Afficher un message pour l'utilisation de cookies obligatoires */,
        mandatoryCta:
          false /* Afficher un bouton pour les cookies obligatoires (déconseillé) */,

        //"customCloserId": "", /* Optionnel a11y: ID personnalisé pour ouvrir le panel */

        googleConsentMode:
          true /* Activer le Google Consent Mode v2 pour Google ads & GA4 */,
        bingConsentMode:
          true /* Activer le Bing Consent Mode pour Clarity & Bing Ads */,
        softConsentMode:
          false /* Soft consent mode (le consentement est requis pour charger les tags) */,

        dataLayer:
          false /* Envoyer un événement dans dataLayer avec le statut des services */,
        serverSide:
          false /* Server side seulement, les tags ne sont pas chargé côté client */,

        partnersList:
          true /* Afficher le détail du nombre de partenaires sur la bandeau */,
      });

      // Configuration des services

      // Metricool
      window.tarteaucitron.user.metricoolId =
        "83ba35de68463b9c48c90c73562278f1";
      (window.tarteaucitron.job = window.tarteaucitron.job || []).push(
        "metricool"
      );

      // Ajouter Vercel Analytics à la job queue
      (window.tarteaucitron.job = window.tarteaucitron.job || []).push(
        "vercelanalytics"
      );

      // Ajouter SpeedInsights à la job queue
      (window.tarteaucitron.job = window.tarteaucitron.job || []).push(
        "vercelspeedinsights"
      );
    }
  };

  return (
    <>
      {/* CSS personnalisé pour TarteAuCitron */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.22.0/css/tarteaucitron.css"
      />
      <link
        rel="stylesheet"
        href="/tarteaucitron-custom.css"
      />
      
      <Script
        src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.22.0/tarteaucitron.min.js"
        strategy="afterInteractive"
        onLoad={initTarteAuCitron}
      />
    </>
  );
}
