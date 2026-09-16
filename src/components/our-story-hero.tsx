import Image from "next/image";
import { ArrowDownIcon } from "./icons";

export default function OurStoryHero() {
  return (
    <section
      className="os-hero"
      aria-label="Our story — Fountain of Hope"
    >
      <div className="os-hero-media" aria-hidden="true">
        <Image
          src="/images/hero page better.png"
          alt=""
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="wrap os-hero-inner">
        <span className="eyebrow eyebrow--light">Our story</span>
        <h1>
          Founded by a daughter of Garissa,{" "}
          <em>for the women of Northern Eastern.</em>
        </h1>
        <p className="os-hero-sub">
          Fountain of Hope began in 2017 with a vision to give women in
          Garissa a stronger voice in shaping their health, education and
          future.
        </p>
        <p className="os-hero-sub">
          Founded by Fardosa Osman, Fountain of Hope has grown into a
          community-rooted organization working alongside women, men, youth
          and persons with disabilities to build a healthier, literate and
          more resilient Garissa.
        </p>
        <div className="os-hero-ctas">
          <a className="btn btn--pink" href="#who-we-are">
            Discover our journey
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  );
}