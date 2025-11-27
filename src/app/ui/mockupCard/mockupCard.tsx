"use client";

import Image from "next/image";
import { useState } from "react";

interface MockupCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags?: string[];
}

export default function MockupCard({
  title,
  description,
  image,
  category,
  tags,
}: MockupCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-pink-200 hover:border-pink-300 group">
        {/* Image cliquable */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative h-64 bg-gray-50 overflow-hidden w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
          aria-label={`Voir ${title} en grand`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md z-10">
            {category}
          </span>
        </button>

        {/* Contenu */}
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags optionnels */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Fermer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-[95vw] max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-300">{category}</p>
          </div>
        </div>
      )}
    </>
  );
}
