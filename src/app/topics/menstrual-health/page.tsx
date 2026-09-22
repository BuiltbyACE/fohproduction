import makeMetadata from "@/lib/seo";
import Image from "next/image";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import PhotoBand from "@/components/photo-band";
import Gallery from "@/components/gallery";
import RelatedTopics from "@/components/related-topics";
import TopicCta from "@/components/topic-cta";
import RecordEvidence from "@/components/record-evidence";
import { TOPICS } from "@/lib/topics";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import {
  HeartIcon,
  InfoIcon,
  UserGroupIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/menstrual-health",
  title:
    "Why a girl should never miss school because she cannot afford a pad | Fountain of Hope",
  description:
    "Menstrual health support and school advocacy keep Garissa's girls learning — dignity kits, education, and the fight to end period absenteeism.",
});

export default function TopicMenstrualHealth() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/sanitary.jpg",
              alt: "Menstrual health support keeping Garissa's girls in school",
            },
          ]}
          ariaLabel="Menstrual health and girls' education in Garissa"
          crumbsHere="Girls &amp; education"
          kickerTop="EDUCATION · GIRL-CHILD RETENTION"
          kickerSub="Garissa County"
          title={
            <>
              No girl should miss school because{" "}
              <em>she cannot afford a pad.</em>
            </>
          }
          sub="Across Garissa, a girl’s period is still one of the surest ways to lose her school days — or her dreams. Menstrual health support keeps her learning, and with her dignity intact."
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              Menstrual health is a school story as much as a health story. When
              a girl cannot afford a pad — or is shamed for her period — she
              stays home, falls behind, and too often drops out for good.
              Fountain of Hope works to close that gap with dignity kits,
              menstrual education and community advocacy that keeps Garissa’s
              girls in school and dreaming big.
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">The story</span>
                <h2 className="h2">
                  Dignity in school, <em>day after day.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Real change for girls looks small and everyday: a reusable pad,
                a safe place to change, a lesson that says a period is not a
                shame. Together these little dignities keep a girl at her desk —
                and on her path.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <Reveal className="fn-art">
                <Image
                  src="/images/sanitary.jpg"
                  alt="Menstrual health support and girl-child education in Garissa"
                  fill
                  sizes="60vw"
                  loading="lazy"
                />
              </Reveal>

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>What missing school costs a girl.</h3>
                  <p>
                    Each missed period during a menstruation means missed
                    lessons, missed confidence, and missed chances. In a county
                    where the boy:girl schooling gap is stubborn, periods are
                    too often the reason a girl falls behind or leaves.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <HeartIcon />
                      <span>
                        <b className="bold">
                          Girl-Child Education &amp; Retention
                        </b>{" "}
                        · Fountain of Hope pillar
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        Menstrual health support · dignity kits · school
                        advocacy
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> written from Fountain of Hope’s
                    strategic plan and public reporting on girls’ education in
                    Garissa. Confirm the specific photo/place with the team
                    before publishing.
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="discuss" id="discuss">
          <div className="wrap">
            <Reveal className="discuss-nav">
              <span className="eyebrow eyebrow--paper">
                The discussion, unpacked
              </span>
              <h2>
                Why periods decide <em>school days.</em>
              </h2>
              <p>
                Menstrual hygiene management (MHM) — the quiet crisis behind the
                dropouts, and the everyday fix that keeps a girl at her desk.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> The hidden dropout
                </h3>
                <p>
                  Across Garissa,{" "}
                  <strong>
                    girls miss school simply because they cannot afford pads
                  </strong>{" "}
                  — or because they lack a safe place to manage their period.
                  Missed days become missed years, and the girls most at risk of
                  early marriage and dropout are the ones most likely to be
                  pushed out of the classroom altogether.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> Dignity kits and the lessons
                  that last
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">Reusable pads &amp; undergarments</div>
                    <div className="v">
                      Dignity kits that let a girl manage her period with{" "}
                      <b>dignity and confidence</b> — and keep coming back to
                      class.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">Menstrual education</div>
                    <div className="v">
                      Conversations that replace <b>shame with knowledge</b> —
                      for girls and for the communities around them.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">School advocacy</div>
                    <div className="v">
                      Safe facilities and supportive attitudes that{" "}
                      <b>normalize menstruation</b> as part of every school day.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  At Mission for Essential Drugs and Supplies (M.E.D.S.)
                  receiving donations of sanitary towels as part of my 3 year
                  program of Menstrual Hygiene Health, that targets one million
                  boys and girls.
                </blockquote>
                <div className="who">
                  Fountain of Hope · 5 June 2018, on X
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Menstrual Hygiene Management —
                  aimed at a million
                </h3>
                <p>
                  In 2018 Fountain of Hope announced a{" "}
                  <strong>
                    three-year program of Menstrual Hygiene Health
                  </strong>{" "}
                  that set out to <strong>target one million boys and girls</strong>{" "}
                  — proof that menstrual health was never a side issue, but a
                  flagship. At{" "}
                  <strong>UNDP Kenya</strong>, the organization shared a{" "}
                  <strong>
                    holistic approach in advocacy of Menstrual Hygiene Management
                  </strong>{" "}
                  — girls and boys, schools and supply chains, knowledge and
                  dignity together.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">04</span> A girl in school changes a
                  county
                </h3>
                <p>
                  An educated girl is healthier, marries later, and raises
                  children who attend school. Every day Fountain of Hope helps a
                  girl stay at her desk is{" "}
                  <strong>an investment in Garissa’s future</strong> — one
                  period, one pad, one school year at a time.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <PhotoBand
          src="/images/De6fJOcWkAAp3oA.jpg"
          alt="Receiving sanitary towel donations at M.E.D.S."
          eyebrow="M.E.D.S. · JUNE 2018"
          title={
            <>
              Donations for a program that <em>reaches a million.</em>
            </>
          }
          note="At Mission for Essential Drugs and Supplies, Fountain of Hope received donations of sanitary towels as part of a three-year Menstrual Hygiene Health program — targeting one million boys and girls."
        />

        <Gallery
          eyebrow="Menstrual Hygiene Management · In photographs"
          title={
            <>
              The work, <em>on a grid.</em>
            </>
          }
          note="The photographs that stand behind the menstrual hygiene management story. Click each one to view it full screen."
          photos={[
            {
              src: "/images/De6fJOcWkAAp3oA.jpg",
              alt: "Receiving sanitary towel donations at M.E.D.S.",
              tag: "5 Jun 2018",
              caption:
                "“Receiving donations of sanitary towels… as part of my 3 year program of Menstrual Hygiene Health, that targets one million boys and girls.”",
            },
            {
              src: "/images/D1JXhgGWkAEBtAw.jpg",
              alt: "A photograph from March 2019, used for the menstrual hygiene management story",
              tag: "Mar 2019 · verify",
              caption:
                "A photograph from the account in March 2019, placed here in support of the menstrual hygiene management story — confirm subject and place before publishing.",
            },
            {
              src: "/images/DcAcKzCWkAUtU7z.jpg",
              alt: "A photograph from 30 April 2018",
              tag: "30 Apr 2018 · verify",
              caption:
                "One of two photographs from 30 April 2018 — possibly the UNDP Kenya post on a holistic approach in advocacy of Menstrual Hygiene Management; confirm which recording shows what.",
            },
            {
              src: "/images/DcAezspXUAAhJxh.jpg",
              alt: "A photograph from 30 April 2018",
              tag: "30 Apr 2018 · verify",
              caption:
                "The other photograph from 30 April 2018 — the same two possibilities; confirm which is the UNDP Kenya visit.",
            },
          ]}
        />

        <RecordEvidence
          entries={[PORTFOLIO_DATA[7], PORTFOLIO_DATA[9]]}
          intro="The documented record behind Fountain of Hope&apos;s menstrual health and girl-child retention work."
        />

        <RelatedTopics related={[TOPICS[0], TOPICS[8]]} />

        <TopicCta message="Your support funds dignity kits, school supplies and menstrual education for Garissa’s girls." />
      </main>

      <SiteFooter />
    </>
  );
}