"use client";

import Script from "next/script";

export default function CalendlyWidget() {
  const openCalendlyPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel",
      });
    }
    return false;
  };

  return (
    <section className="flex justify-center items-center mt-10">
      {/* Calendly link widget */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <a
        href="https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel"
        onClick={openCalendlyPopup}
        className="inline-flex items-center justify-center px-8 py-3 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition-colors shadow-lg hover:shadow-xl font-medium text-base cursor-pointer whitespace-nowrap">
        📅 Réserver un RDV gratuit
      </a>
    </section>
  );
}
