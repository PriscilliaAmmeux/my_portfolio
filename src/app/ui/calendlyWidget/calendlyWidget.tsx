"use client";

import Script from "next/script";

type CalendlyVariant = "bgPink" | "bgWhite";

interface CalendlyWidgetProps {
  variant?: CalendlyVariant;
  text?: string;
}

export default function CalendlyWidget({
  variant = "bgPink",
  text = "Me contacter",
}: CalendlyWidgetProps) {
  const openCalendlyPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel",
      });
    }
    return false;
  };

  const getVariantClasses = (): string => {
    const variants = {
      bgPink:
        "bg-pink-700 text-white hover:bg-pink-800 transition-colors shadow-lg hover:shadow-xl",
      bgWhite:
        "bg-white text-pink-700 border border-pink-700 hover:bg-pink-100 transition-colors",
    };

    return `inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-lg cursor-pointer whitespace-nowrap ${variants[variant]}`;
  };

  return (
    <button className="flex justify-center items-center">
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
        className={getVariantClasses()}>
        {text}
      </a>
    </button>
  );
}
