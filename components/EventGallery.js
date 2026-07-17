"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const GALLERY_SIZES =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/**
 * Editorial photo grid for a single event's archive page. Clicking any
 * photograph opens the shared Lightbox at full aspect ratio.
 */
export default function EventGallery({ images, eventTitle }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const lightboxImages = images.map((src, i) => ({
    src,
    alt: `${eventTitle} event photograph ${i + 1}`,
  }));

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open ${eventTitle} event photograph ${i + 1} of ${images.length}`}
            className="image-zoom relative block aspect-[4/3] w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia"
          >
            <Image
              src={src}
              alt={`${eventTitle} event photograph ${i + 1}`}
              fill
              sizes={GALLERY_SIZES}
              className="image-zoom-inner object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
