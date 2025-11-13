import React from "react";

interface CardPinkBorderProps {
  title: string | React.ReactNode;
  icon?: string | React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

export default function CardPinkBorder({
  title,
  icon,
  image,
  subtitle,
  children,
  className = "",
  footer,
}: CardPinkBorderProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 border-2 border-pink-200 hover:scale-105 transition-transform duration-300 h-full flex flex-col ${className}`}>
      {/* Header avec icône ou image */}
      <div className="flex flex-col items-center text-center mb-6">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="w-24 h-24 rounded-full mb-4 border-4 object-cover"
          />
        ) : icon ? (
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-3xl mb-4">
            {icon}
          </div>
        ) : null}

        <h3 className="text-xl font-bold text-pink-600 mb-2">{title}</h3>

        {subtitle && (
          <p className="text-pink-900 font-medium mb-4">{subtitle}</p>
        )}
      </div>

      {/* Contenu principal */}
      <div className="flex-grow text-pink-900">{children}</div>

      {/* Footer optionnel */}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
