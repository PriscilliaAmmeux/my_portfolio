// Services personnalisés pour TarteAuCitron
// À ajouter dans la configuration TarteAuCitron

// Service Vercel Analytics
tarteaucitron.services.vercelanalytics = {
  "key": "vercelanalytics",
  "type": "analytic",
  "name": "Vercel Analytics",
  "uri": "https://vercel.com/docs/analytics/privacy-policy",
  "needConsent": true,
  "cookies": ["_vercel_analytics_id"],
  "js": function () {
    "use strict";
    // Le script Vercel Analytics sera chargé via Next.js
    tarteaucitron.addScript('/_vercel/insights/script.js');
  }
};

// Service Vercel Speed Insights
tarteaucitron.services.vercelspeedinsights = {
  "key": "vercelspeedinsights",
  "type": "api",
  "name": "Vercel Speed Insights",
  "uri": "https://vercel.com/docs/speed-insights/privacy-policy",
  "needConsent": true,
  "cookies": ["_vercel_speed_insights"],
  "js": function () {
    "use strict";
    // Le script Speed Insights sera chargé via Next.js
    tarteaucitron.addScript('/_vercel/speed-insights/script.js');
  }
};

// Service Metricool
tarteaucitron.services.metricool = {
  "key": "metricool",
  "type": "analytic",
  "name": "Metricool",
  "uri": "https://metricool.com/privacy/",
  "needConsent": true,
  "cookies": ["_metricool_id"],
  "js": function () {
    "use strict";
    if (tarteaucitron.user.metricoolId === undefined) {
      return;
    }
    
    tarteaucitron.addScript('https://tracker.metricool.com/resources/be.js', '', function () {
      if (typeof beTracker !== 'undefined') {
        beTracker.t({hash: tarteaucitron.user.metricoolId});
      }
    });
  }
};
