import Image from "next/image";
import Reveal from "./reveal";

const PILLARS = ["Health", "Education", "Community Resilience Building"];

const PHOTOS = [
  {
    src: "/images/Ds7CkMLXQAAwwUi.jpg",
    alt: "Fardosa Osman at the Garissa Child Protection Unit, November 2018",
    label: "In the field · Nov 2018",
    caption: "Fardosa Osman at the Garissa Child Protection Unit",
  },
  {
    src: "/images/Ds7CjayX4AA2Fnv.jpg",
    alt: "Visiting the Garissa Child Protection Unit, November 2018",
    label: "In the field · Nov 2018",
    caption: "Visiting the Garissa Child Protection Unit",
  },
  {
    src: "/images/Ds7ClYGW0AAolQn.jpg",
    alt: "At the Garissa Child Protection Unit, November 2018",
    label: "In the field · Nov 2018",
    caption:
      "At the Garissa Child Protection Unit — a safe haven for victims of gender-based violence",
  },
];

export default function StoryTimeline() {
  return (
    <section className="os-section os-section--paper" id="beginning">
      <div className="wrap">
        <Reveal className="os-sechead">
          <span className="eyebrow eyebrow--paper">Our beginning</span>
          <h2>
            A vision that <em>began in 2017.</em>
          </h2>
        </Reveal>

        <div className="os-tl">
          <Reveal className="os-tl-item">
            <div className="os-tl-year">2017</div>
            <div className="os-tl-body">
              <h3 className="os-tl-role">The beginning</h3>
              <p>
                Fardosa Osman founded Fountain of Hope in 2017 to give women in
                Garissa County a platform to advocate for health, education and
                community resilience.
              </p>
            </div>
          </Reveal>

          <Reveal className="os-tl-item">
            <div className="os-tl-year">2018</div>
            <div className="os-tl-body">
              <h3 className="os-tl-role">Into the community</h3>
              <p>
                The work moved out of the founding year and into the field —
                standing beside Garissa’s institutions and the people they
                protect.
              </p>
              <div className="os-tl-photos">
                {PHOTOS.map((photo) => (
                  <figure className="os-tl-photo" key={photo.src}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="25vw"
                      loading="lazy"
                    />
                    <figcaption className="cap">
                      <b>{photo.label}</b>
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="os-tl-item">
            <div className="os-tl-year">2024–2029</div>
            <div className="os-tl-body">
              <h3 className="os-tl-role">A broader vision</h3>
              <p>
                Fountain of Hope’s strategic direction focuses on three
                pillars — health, education and community resilience building.
              </p>
              <div className="os-pillars-mini">
                {PILLARS.map((pillar) => (
                  <span className="os-pill" key={pillar}>
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}