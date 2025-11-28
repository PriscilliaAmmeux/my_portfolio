"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
  className?: string;
  customThumbnail?: string; // Nouvelle prop pour miniature personnalisée
}

export default function YoutubeVideo({
  videoId,
  title,
  description,
  className = "",
  customThumbnail,
}: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl =
    customThumbnail ||
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className={`py-10 px-4 lg:px-0 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-pink-600 mb-3">
              {title}
            </h2>
            {description && (
              <p className="text-gray-700 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
          {!isLoaded ? (
            <>
              {/* Thumbnail avec bouton play */}
              {customThumbnail ? (
                <Image
                  src={customThumbnail}
                  alt={`Aperçu de la vidéo: ${title}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <img
                  src={thumbnailUrl}
                  alt={`Aperçu de la vidéo: ${title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <button
                onClick={() => setIsLoaded(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                aria-label={`Lancer la vidéo: ${title}`}>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            /* IFrame YouTube chargée seulement au clic */
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
