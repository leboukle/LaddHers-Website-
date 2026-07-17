"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Full-screen photograph viewer shared by every event archive page.
 * Controlled by the parent: pass `index` (the open photo's position, or
 * null/undefined when closed), plus `onClose` and `onNavigate(newIndex)`.
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(null);
  const isOpen = index !== null && index !== undefined;

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen) return null;

  const current = images[index];

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-2xl text-ivory/80 transition-colors duration-400 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia md:right-8 md:top-8"
      >
        &times;
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photograph"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-ivory/80 transition-colors duration-400 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia md:left-6"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photograph"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-ivory/80 transition-colors duration-400 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia md:right-6"
          >
            &#8250;
          </button>
        </>
      )}

      <div
        className="relative h-full w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-wide2 text-ivory/60 md:bottom-8">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}
