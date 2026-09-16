import Reveal from "./reveal";

const AREAS = [
  {
    term: "RMNCAH-N",
    description: "Every mother. Every child. Every community.",
  },
  {
    term: "A reading culture",
    description: "Every child deserves the opportunity to learn.",
  },
  {
    term: "Empowered communities",
    description: "Stronger communities are prepared for what comes next.",
  },
];

export default function AdvocacySection() {
  return (
    <section className="os-section" id="advocacy">
      <div className="wrap">
        <Reveal className="os-advhead">
          <span className="eyebrow eyebrow--paper">Our advocacy</span>
          <h2>
            We are advocates and <em>champions of</em>
          </h2>
        </Reveal>

        <div className="os-advgrid">
          {AREAS.map((area) => (
            <Reveal className="os-advitem" key={area.term}>
              <span className="k">Advocacy</span>
              <h3>{area.term}</h3>
              <p>{area.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}