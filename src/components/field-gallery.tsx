import Image from "next/image";
import Reveal from "./reveal";

const PHOTOS = [
  {
    src: "/images/GyucnsFXcAAyiXJ.jpg",
    alt: "Fountain of Hope and Garissa County leadership together",
    label: "Fountain of Hope · Garissa, Kenya",
    caption: "Alongside Garissa County leadership",
    big: true,
  },
  {
    src: "/images/Ds7CkMLXQAAwwUi.jpg",
    alt: "Fardosa Osman at the Garissa Child Protection Unit, November 2018",
    label: "In the field · Nov 2018",
    caption: "Fardosa Osman at the Garissa Child Protection Unit",
    big: false,
  },
  {
    src: "/images/Ds7CjayX4AA2Fnv.jpg",
    alt: "Visiting the Garissa Child Protection Unit, November 2018",
    label: "In the field · Nov 2018",
    caption: "Visiting the Garissa Child Protection Unit",
    big: false,
  },
  {
    src: "/images/Ds7ClYGW0AAolQn.jpg",
    alt: "At the Garissa Child Protection Unit, November 2018",
    label: "In the field · Nov 2018",
    caption:
      "At the Garissa Child Protection Unit — a safe haven for victims of gender-based violence",
    big: false,
  },
];

export default function FieldGallery() {
  return (
    <section className="os-section os-section--paper" id="field">
      <div className="wrap">
        <Reveal className="os-sechead">
          <span className="eyebrow eyebrow--paper">The archive</span>
          <h2>
            From the <em>field.</em>
          </h2>
        </Reveal>

        <div className="os-field-grid">
          {PHOTOS.map((photo) => (
            <Reveal
              className={`os-fitem${photo.big ? " os-fitem--big" : ""}`}
              key={photo.src}
            >
              <figure>
                <div className="os-fphoto">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.big ? "70vw" : "30vw"}
                    loading="lazy"
                  />
                </div>
                <div className="os-finfo">
                  <b>{photo.label}</b>
                  <span>{photo.caption}</span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="os-fsrc">
          Photographs from Fountain of Hope’s own timeline — a visit to the
          Garissa Child Protection Unit · 26 Nov 2018
        </div>
      </div>
    </section>
  );
}