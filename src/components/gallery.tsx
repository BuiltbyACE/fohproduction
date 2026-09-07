"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";
import { ArrowNextIcon, ArrowPrevIcon } from "./icons";

export type GalleryPhoto = {
  src: string;
  alt: string;
  tag: string;
  caption: string;
};

export default function Gallery({
  eyebrow,
  title,
  note,
  photos,
}: {
  eyebrow: string;
  title: ReactNode;
  note: string;
  photos: GalleryPhoto[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  const headRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight" && open !== null)
        setOpen(Math.min(open + 1, photos.length - 1));
      if (e.key === "ArrowLeft" && open !== null)
        setOpen(Math.max(open - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, photos.length]);

  const current = open !== null ? photos[open] : null;

  return (
    <section className="gallery" aria-label="Photo gallery">
      <div className="wrap">
        <div className="gallery-head rv" ref={headRef}>
          <div>
            <span className="eyebrow eyebrow--light">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <p>{note}</p>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <GalleryTile key={photo.src} photo={photo} onOpen={() => setOpen(i)} />
          ))}
        </div>
      </div>

      <div
        className={open !== null ? "lb open" : "lb"}
        role="dialog"
        aria-modal="true"
        aria-label={current ? current.caption : "Photo viewer"}
        onClick={() => setOpen(null)}
      >
        {current && (
          <>
            <span className="lb-count">
              {String(open! + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="lb-btn lb-close"
              aria-label="Close gallery"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
            >
              <CloseIcon />
            </button>
            <button
              type="button"
              className={open === 0 ? "lb-btn lb-prev is" : "lb-btn lb-prev"}
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(Math.max(open! - 1, 0));
              }}
            >
              <ArrowPrevIcon />
            </button>
            <button
              type="button"
              className={
                open === photos.length - 1
                  ? "lb-btn lb-next is"
                  : "lb-btn lb-next"
              }
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(Math.min(open! + 1, photos.length - 1));
              }}
            >
              <ArrowNextIcon />
            </button>
            <div className="lb-img" onClick={(e) => e.stopPropagation()}>
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                priority
              />
            </div>
            <div className="lb-cap" onClick={(e) => e.stopPropagation()}>
              <b>{current.tag}</b>
              {current.caption}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function GalleryTile({
  photo,
  onOpen,
}: {
  photo: GalleryPhoto;
  onOpen: () => void;
}) {
  const ref = useReveal<HTMLButtonElement>();
  return (
    <button type="button" onClick={onOpen} className="g-photo rv" ref={ref}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="420px"
        loading="lazy"
      />
      <span className="g-zoom" aria-hidden="true">
        <ZoomIcon />
      </span>
      <span className="g-cap">
        <b>{photo.tag}</b>
        {photo.caption}
      </span>
    </button>
  );
}

function ZoomIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}