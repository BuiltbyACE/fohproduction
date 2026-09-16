import Image from "next/image";
import Reveal from "./reveal";

const COMMITMENTS = [
  {
    n: "01",
    text: "Increased access to RMNCAH-N through enhanced male involvement",
  },
  {
    n: "02",
    text: "Increased access to quality health care through strengthened CHVs",
  },
  {
    n: "03",
    text: "Reduced incidences of NCDs through promotion of healthy living",
  },
];

export default function WorkHealth() {
  return (
    <section className="os-section" id="health">
      <div className="wrap os-chapter-grid">
        <Reveal className="os-chapter">
          <div className="os-chapter-kicker">
            <span className="eyebrow eyebrow--paper">Our work · 01</span>
          </div>
          <div className="os-chapter-num">01</div>
          <h2>Health</h2>
          <p className="lead">
            Every mother. Every child. Every community.
          </p>

          <div>
            {COMMITMENTS.map((commitment) => (
              <div className="os-commit-row" key={commitment.n}>
                <span className="n">{commitment.n}</span>
                <p>{commitment.text}</p>
              </div>
            ))}
          </div>

          <div className="os-advline">
            We are advocates and champions of
            <strong>RMNCAH-N</strong>
          </div>
        </Reveal>

        <Reveal className="os-chapter-art">
          <Image
            src="/images/health.jpeg"
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