import Reveal from "./reveal";
import SupportAction from "./support-action";
import { HeartIcon } from "./icons";

export default function StoryCta() {
  return (
    <section className="cta">
      <Reveal className="cta-in">
        <span className="eyebrow">Get involved</span>
        <h2>
          Be part of <em>what comes next.</em>
        </h2>
        <p>
          Your support funds health workers, school supplies and livelihoods
          for some of Kenya’s most vulnerable communities — and keeps this
          story moving.
        </p>
        <div className="ctas">
          <SupportAction type="donate" className="btn btn--pink">
            Support our work
            <HeartIcon />
          </SupportAction>
          <SupportAction type="partner" className="btn btn--ghost">
            Partner with us
          </SupportAction>
        </div>
      </Reveal>
    </section>
  );
}