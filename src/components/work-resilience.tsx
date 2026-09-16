import Image from "next/image";
import Reveal from "./reveal";

const COMMITMENTS = [
  {
    n: "01",
    text:
      "Reducing vulnerability, enhancing adaptive capacity towards climate change",
  },
  {
    n: "02",
    text:
      "Promote self reliance and local integration of refugees and host communities",
  },
  {
    n: "03",
    text:
      "Strengthening community’s resilience against radicalization and violent extremism",
  },
];

export default function WorkResilience() {
  return (
    <section className="os-chapter--dark" id="resilience">
      <div className="wrap os-chapter-grid">
        <Reveal className="os-chapter">
          <div className="os-chapter-kicker">
            <span className="eyebrow eyebrow--light">Our work · 03</span>
          </div>
          <div className="os-chapter-num">03</div>
          <h2>Community Resilience Building</h2>
          <p className="lead">
            Stronger communities are prepared for what comes next.
          </p>

          <div>
            {COMMITMENTS.map((commitment) => (
              <div className="os-commit-row" key={commitment.n}>
                <span className="n">{commitment.n}</span>
                <p>{commitment.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="os-chapter-art">
          <Image
            src="/images/D1JFHZDX0AMvKFT.jpg"
            alt="Fountain of Hope — Garissa County, Kenya"
            fill
            sizes="45vw"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}