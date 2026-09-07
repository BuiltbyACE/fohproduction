import Image from "next/image";
import type { ReactNode } from "react";

export default function PhotoBand({
  src,
  alt,
  eyebrow,
  title,
  note,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  note?: string;
}) {
  return (
    <section className="photo-band" aria-label={alt}>
      <Image src={src} alt={alt} fill sizes="100vw" loading="lazy" />
      <div className="pb-cap">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h3>{title}</h3>
        {note && <p>{note}</p>}
      </div>
    </section>
  );
}