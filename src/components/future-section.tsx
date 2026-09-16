import Reveal from "./reveal";
import PhotoBand from "./photo-band";

const PILLARS = [
  { label: "01", title: "Health" },
  { label: "02", title: "Education" },
  { label: "03", title: "Community Resilience Building" },
];

export default function FutureSection() {
  return (
    <>
      <PhotoBand
        src="/images/D7VmCi9WwAcQ2kC.jpg"
        alt="Fountain of Hope — field work in Garissa County, 2019"
        eyebrow="2024–2029"
        title={<>The story continues.</>}
      />

      <section className="os-future" id="future">
        <div className="wrap">
          <Reveal className="os-sechead">
            <span className="eyebrow eyebrow--light">The road ahead</span>
            <h2>
              Where we are <em>going.</em>
            </h2>
            <p>
              Fountain of Hope’s current strategic direction is centered on
              three pillars — health, education and community resilience
              building — each grounded in the community that named them.
            </p>
          </Reveal>

          <div className="os-pillars">
            {PILLARS.map((pillar) => (
              <div className="os-pillar" key={pillar.title}>
                <span className="n">{pillar.label}</span>
                <h3>{pillar.title}</h3>
              </div>
            ))}
          </div>

          <Reveal className="os-vmq">
            “A healthy, literate and wealthy Garissa community”
          </Reveal>
        </div>
      </section>
    </>
  );
}