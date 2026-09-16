import Reveal from "./reveal";
import {
  AwardIcon,
  HeartIcon,
  HeartMarkIcon,
  SparkleIcon,
  UserGroupIcon,
} from "./icons";

const VALUES = [
  {
    name: "Community Ownership",
    description: "The work belongs to the community it serves.",
    Icon: UserGroupIcon,
  },
  {
    name: "Integrity",
    description: "We do what we say, in full view of the people we serve.",
    Icon: AwardIcon,
  },
  {
    name: "Compassion",
    description: "Every program begins from dignity and care.",
    Icon: HeartIcon,
  },
  {
    name: "Transparency",
    description: "Open books, open conversations, open partnerships.",
    Icon: SparkleIcon,
  },
  {
    name: "Collaboration",
    description: "Change is built together, never alone.",
    Icon: HeartMarkIcon,
  },
];

export default function ValuesSection() {
  return (
    <section className="os-section">
      <div className="wrap">
        <Reveal className="os-sechead">
          <span className="eyebrow eyebrow--paper">Our values</span>
          <h2>
            How we work <em>matters.</em>
          </h2>
          <p>
            Five principles guide every decision, every partnership and every
            program — from a village meeting to a county strategy. They are not
            words on a wall; they are how we work.
          </p>
        </Reveal>

        <div className="os-values-grid">
          {VALUES.map((value, i) => (
            <Reveal className="os-value" key={value.name}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="vicon" aria-hidden="true">
                <value.Icon />
              </span>
              <h3>{value.name}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}