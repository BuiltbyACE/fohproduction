import Reveal from "./reveal";
import type { PortfolioEntry } from "@/lib/portfolio-data";

type Props = {
  entries: PortfolioEntry[];
  intro?: string;
};

export default function RecordEvidence({ entries, intro }: Props) {
  return (
    <section className="re" aria-label="In the record">
      <div className="wrap">
        <Reveal className="re-head">
          <span className="eyebrow eyebrow--paper">In the record</span>
          <h2>
            What the record <em>shows.</em>
          </h2>
          {intro ? <p>{intro}</p> : null}
        </Reveal>

        <div className="re-grid">
          {entries.map((entry) => (
            <Reveal className="re-card" key={entry.id}>
              <div className="re-tax">
                {entry.areaOfInterest.trim() !== "" && (
                  <span className="re-tag">{entry.areaOfInterest}</span>
                )}
                {entry.place.trim() !== "" && (
                  <span className="re-place">{entry.place}</span>
                )}
              </div>
              <h3 className="re-title">{entry.title}</h3>
              <dl className="re-facts">
                {entry.date.trim() !== "" && (
                  <div className="re-row">
                    <dt>Date</dt>
                    <dd>{entry.date}</dd>
                  </div>
                )}
                <div className="re-row re-row--impact">
                  <dt>Reach / Impact</dt>
                  <dd>{entry.impact}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>

        <p className="re-note">
          Documented in Fountain of Hope&apos;s portfolio of interventions.
        </p>
      </div>
    </section>
  );
}