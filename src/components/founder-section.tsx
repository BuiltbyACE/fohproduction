import Image from "next/image";
import Reveal from "./reveal";

export default function FounderSection() {
  return (
    <section className="os-section os-founder" id="founder">
      <div className="wrap os-founder-grid">
        <Reveal className="os-founder-art">
          <Image
            src="/images/Ds7CkMLXQAAwwUi.jpg"
            alt="Fardosa Osman at the Garissa Child Protection Unit, November 2018"
            fill
            sizes="42vw"
            loading="lazy"
          />
          <div className="cap">
            <b>In the field · Nov 2018</b>
            <span>
              At the Garissa Child Protection Unit — a safe haven for victims
              of gender-based violence
            </span>
          </div>
        </Reveal>

        <Reveal className="os-founder-txt">
          <span className="eyebrow eyebrow--light">Our founder</span>
          <h2>
            The woman who <em>started the story.</em>
          </h2>
          <div className="os-founder-sub">
            <span className="name">Fardosa Osman</span>
            <span className="role">Founder, Fountain of Hope</span>
          </div>
          <p>
            Fardosa Osman founded Fountain of Hope in 2017 to give the women of
            Garissa County a platform to advocate for their own health,
            education and future.
          </p>
          <p>
            Woman-led from the very first day, the organization now works
            beside women of faith, young women, health workers and village
            volunteers.
          </p>
          <div className="os-founder-quote">
            Every story on this page starts with <em>her.</em>
          </div>
        </Reveal>
      </div>
    </section>
  );
}