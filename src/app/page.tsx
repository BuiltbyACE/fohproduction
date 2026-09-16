import Image from "next/image";
import Link from "next/link";
import makeMetadata from "@/lib/seo";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import HeroCarousel from "@/components/hero-carousel";
import Stats from "@/components/stats";
import HomeImpact from "@/components/home-impact";
import SupportAction from "@/components/support-action";
import TopicsSection from "@/components/topic-cards";
import MoreStories from "@/components/more-topics";
import {
  ArrowDownIcon,
  ArrowRightIcon,
} from "@/components/icons";

const PARTNERS = [
  {
    name: "Government of Kenya",
    role: "National Partner",
    logo: "/logo/government of kenya.png",
  },
  {
    name: "Government of Garissa",
    role: "County Partner",
    logo: "/logo/governmentofGarissa.jpg",
  },
  {
    name: "Okoa Mama Initiative",
    role: "Maternal Health Partner",
    logo: "/logo/okoamamalogo-removebg-preview.png",
  },
  {
    name: "Jhpiego",
    role: "Health & Advocacy Partner",
    logo: "/logo/jheiphgo.png",
  },
  {
    name: "ICHR-Kenya",
    role: "Reproductive Health Partner",
    logo: "/logo/ICHR.png",
  },
];

export const metadata = makeMetadata({
  path: "/",
  type: "website",
  title: "Fountain of Hope — Garissa County, Kenya",
  description:
    "One story, told topic by topic. Fountain of Hope is a woman-led community organization working beside the people of Garissa County in health and education.",
});

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ============ HERO ============ */}
        <section
          className="hero"
          id="top"
          aria-label="Fountain of Hope — Garissa County, Kenya"
        >
          <HeroCarousel />

          <div className="hero-inner wrap">
            <div className="hero-kicker">
              <span style={{ color: "#FF9CBE", fontWeight: 700 }}>
                GARISSA COUNTY, KENYA
              </span>
              <span className="dot" aria-hidden="true" />
              <span>One story, told topic by topic</span>
            </div>
            <h1>
              No mother <em>should die while giving birth.</em>
            </h1>
            <p className="hero-sub">
              Fountain of Hope is a woman-led community organization working
              beside the people of Garissa — its health leaders, women of
              faith, young women and village volunteers — in health and
              education. Each topic below is a real story from the field.
            </p>
            <div className="hero-ctas">
              <a className="btn btn--pink" href="#topics">
                Explore the topics
                <ArrowDownIcon />
              </a>
              <Link className="btn btn--ghost" href="/our-story">
                Our story
              </Link>
            </div>

            <Reveal className="fieldnote">
              <div className="fn-top">
                <span className="fn-tag">From the field</span>
                <span className="fn-date">19 Aug 2025 · Garissa</span>
              </div>
              <p>
                “On to the 5th activity of the Okoa Mama na Mtoto initiative —
                with the CECM Health, Chief Officer Health, Director for Health,
                Health Committee members at the Assembly and Budget Committee
                members. A fruitful discussion, and deliberations we agreed upon
                together.”
              </p>
              <div className="fn-src">
                — shared by @Fountain_FOH on X, 19 August 2025
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <Stats />

        {/* ============ TOPICS ============ */}
        <section className="topics" id="topics">
          <div className="wrap">
            <Reveal className="topic-head">
              <span className="eyebrow eyebrow--light">The topics</span>
              <h2 className="h2">
                Real stories
              </h2>
              <p>
                Born from our work and our field notes. Click a topic to read
                the full story — the photographs, the conversation, and what it
                means for Garissa.
              </p>
            </Reveal>
            <TopicsSection />
            <MoreStories />
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="about" id="about">
          <div className="wrap about-grid">
            <Reveal className="about-txt">
              <span className="eyebrow eyebrow--paper">Our story</span>
              <h2>
                Founded by a daughter of Garissa,{" "}
                <em>for the women of Northern Eastern.</em>
              </h2>
              <p className="lede">
                Fardosa Osman founded Fountain of Hope in{" "}
                <strong>2017</strong> to give women and persons with disability
                of Garissa County a platform to advocate for health, education
                and community resilience. Under her leadership, the organization
                has grown into a community rooted based organisation — engaging
                women, men, youth and persons with disability — with a{" "}
                <strong>2024–2029 strategic plan</strong> built on three
                pillars: health, education, and community resilience.
              </p>
              <Link className="btn btn--navy" href="/our-story">
                Read the full story
                <ArrowRightIcon />
              </Link>
            </Reveal>
            <Reveal className="about-art">
              <Image
                src="/images/hero page better.png"
                alt="Fountain of Hope — Garissa, Kenya"
                fill
                sizes="45vw"
                loading="lazy"
              />
              <div className="cap">Fountain of Hope · Garissa, Kenya</div>
            </Reveal>
          </div>
        </section>

        {/* ============ TRACK RECORD HIGHLIGHTS ============ */}
        <HomeImpact />

        {/* ============ FOUNDER ============ */}
        <section className="founder" id="founder">
          <div className="wrap founder-grid">
<Reveal className="founder-art">
              <div className="fi fa-big">
                <Image
                  src="/images/Ds7CkMLXQAAwwUi.jpg"
                  alt="Fardosa Osman at the Garissa Child Protection Unit, November 2018"
                  fill
                  sizes="34vw"
                  loading="lazy"
                />
                <div className="cap">
                  <b>In the field · Nov 2018</b>
                  <span>
                    At the Garissa Child Protection Unit — a safe haven for
                    victims of gender-based violence
                  </span>
                </div>
              </div>
              <div className="fi fa-sm">
                <Image
                  src="/images/Ds7CjayX4AA2Fnv.jpg"
                  alt="Visiting the Garissa Child Protection Unit, November 2018"
                  fill
                  sizes="18vw"
                  loading="lazy"
                />
              </div>
              <div className="fi fa-sm">
                <Image
                  src="/images/Ds7ClYGW0AAolQn.jpg"
                  alt="At the Garissa Child Protection Unit, November 2018"
                  fill
                  sizes="18vw"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal className="founder-txt">
              <span className="eyebrow eyebrow--paper">Our founder</span>
              <h2>
                Every story on this page <em>starts with her.</em>
              </h2>
              <p className="lede">
                Fardosa Osman founded Fountain of Hope in{" "}
                <strong style={{ color: "#fff" }}>2017</strong> to give the
                women of Garissa County a platform to advocate for their own
                health, education and future. The budget meetings, the school
                milk, the fistula camp, the champions in Nairobi — each topic
                on this site is a chapter of the vision she began.
              </p>
              <p>
                Woman-led from the very first day, the organization now works
                beside women of faith, young women, health workers and village
                volunteers — guided by a{" "}
                <strong style={{ color: "#fff" }}>
                  2024–2029 strategic plan
                </strong>{" "}
                built on health, education and community resilience.
              </p>
              <div className="founder-feats">
                <div className="found-feat">
                  <h4>2017</h4>
                  <p>Founded by a daughter of Garissa</p>
                </div>
                <div className="found-feat">
                  <h4>Woman-led</h4>
                  <p>A movement carried by women, for women</p>
                </div>
                <div className="found-feat">
                  <h4>Three pillars</h4>
                  <p>Health · education · resilience</p>
                </div>
              </div>
              <div className="founder-src">
                Photographs from Fountain of Hope’s own timeline — a visit to
                the Garissa Child Protection Unit · 26 Nov 2018
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="cta">
          <Reveal className="cta-in">
            <span className="eyebrow">Support the work</span>
            <h2>
              Stand with the women who <em>lead this change.</em>
            </h2>
            <p>
              Your support funds health workers, school supplies and
              livelihoods for some of Kenya’s most vulnerable communities —
              and keeps this story moving.
            </p>
            <div className="ctas">
              <SupportAction
                type="donate"
                className="btn btn--pink"
              >
                Donate now
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 20c-3.5-2.6-6-5.6-6-8.5C6 8.6 8.2 7 10 7c1.3 0 2 .8 2 .8S13.7 7 15 7c1.8 0 4 1.6 4 4.5 0 2.9-2.5 5.9-6 8.5Z" />
                </svg>
              </SupportAction>
              <SupportAction type="partner" className="btn btn--ghost">
                Partner with us
              </SupportAction>
            </div>
          </Reveal>
        </section>

        {/* ============ PARTNERS ============ */}
        <section className="partners">
          <div className="wrap">
            <Reveal className="partners-head">
              <span className="eyebrow eyebrow--center">Trusted collaborators</span>
              <h2>
                Our valued <em>partners</em>
              </h2>
              <p className="partners-lede">
                We work hand-in-hand with government, health institutions and
                community partners to deliver programmes that truly reach the
                people of Garissa.
              </p>
            </Reveal>

            <div className="partner-grid">
              {PARTNERS.map((partner) => (
                <Reveal className="partner" key={partner.name}>
                  <div className="partner-logo">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} — Fountain of Hope partner`}
                      fill
                      sizes="160px"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <span className="partner-role">{partner.role}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}