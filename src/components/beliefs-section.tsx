import Image from "next/image";
import Reveal from "./reveal";

const BELIEFS = [
  "Gender lensed advocacy efforts",
  "Safeguarding all",
  "Child protection",
  "Peaceful co-existence",
  "Environmental",
];

export default function BeliefsSection() {
  return (
    <section className="os-section os-beliefs" id="beliefs">
      <div className="wrap os-beliefs-grid">
        <Reveal className="os-beliefs-art">
          <Image
            src="/images/2018-launch.jpeg"
            alt="Fountain of Hope — the 2018 launch, Garissa County, Kenya"
            fill
            sizes="45vw"
            loading="lazy"
          />
        </Reveal>

        <div>
          <Reveal className="os-sechead">
            <span className="eyebrow eyebrow--light">What we stand for</span>
            <h2>
              We <em>strongly</em> believe in
            </h2>
          </Reveal>

          <div className="os-beliefs-list">
            {BELIEFS.map((belief, i) => (
              <Reveal className="os-belief" key={belief}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{belief}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}