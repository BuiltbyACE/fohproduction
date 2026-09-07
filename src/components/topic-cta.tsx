import Link from "next/link";
import Reveal from "./reveal";
import { HeartIcon } from "./icons";

export default function TopicCta({ message }: { message: string }) {
  return (
    <section className="cta">
      <Reveal className="cta-in">
        <span className="eyebrow">Support the work</span>
        <h2>
          Stand with the women who <em>lead this change.</em>
        </h2>
        <p>{message}</p>
        <div className="ctas">
          <Link className="btn btn--pink" href="/#footer">
            Donate now
            <HeartIcon />
          </Link>
          <Link className="btn btn--ghost" href="/#footer">
            Partner with us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}