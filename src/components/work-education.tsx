import Image from "next/image";
import Reveal from "./reveal";

const COMMITMENTS = [
  {
    n: "01",
    text: "Increased enrolment of both girls and boys into ECDE centres",
  },
  {
    n: "02",
    text:
      "Improved literacy and numeracy levels through an enhanced reading culture",
  },
  {
    n: "03",
    text:
      "Improved and equitable access to affordable, relevant and quality technical vocational education",
  },
];

export default function WorkEducation() {
  return (
    <section className="os-section os-section--paper" id="education">
      <div className="wrap os-chapter-grid os-chapter-grid--flip">
        <Reveal className="os-chapter-art">
          <Image
            src="/images/D1jKgcmX0AYO0MH.jpg"
            alt="Fountain of Hope — Garissa County, Kenya"
            fill
            sizes="45vw"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="os-chapter">
          <div className="os-chapter-kicker">
            <span className="eyebrow eyebrow--paper">Our work · 02</span>
          </div>
          <div className="os-chapter-num">02</div>
          <h2>Education for All</h2>
          <p className="lead">Every child deserves the opportunity to learn.</p>

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
            <strong>A reading culture</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}