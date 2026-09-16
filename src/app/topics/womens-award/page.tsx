import makeMetadata from "@/lib/seo";
import Image from "next/image";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import RelatedTopics from "@/components/related-topics";
import TopicCta from "@/components/topic-cta";
import { TOPICS } from "@/lib/topics";
import { AwardIcon, InfoIcon, MapPinIcon } from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/womens-award",
  title:
    "Award for Fountain of Hope in advocacy family planning 2030 | Fountain of Hope",
  description:
    "A moment of recognition for Fountain of Hope's work in women's health — and the movement of women who carry it forward across Garissa.",
});

export default function TopicWomensAward() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/Award.jpg",
              alt: "Recognition for Fountain of Hope's work in women's health",
            },
            {
              src: "/images/GM7Qad3W0AEjRWj.jpg",
              alt: "The award moment — the women of Garissa whose work it honors",
            },
            {
              src: "/images/D7VmCi9WwAcQ2kC.jpg",
              alt: "The field work behind the recognition — the Free Fistula Camp, Garissa 2019",
            },
          ]}
          ariaLabel="Award for Fountain of Hope in advocacy family planning 2030"
          crumbsHere="Women&rsquo;s health award"
          kickerTop="RECOGNITION · WOMEN'S HEALTH"
          kickerSub="Garissa County"
          title={
            <>
              An award that belongs to <em>the movement.</em>
            </>
          }
          sub="Recognition for years of work for the health of Garissa’s women — and for every woman of faith, every health worker and every mother whose strength made it possible."
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              Awards measure one moment, but the work they honor is measured in
              years. The recognition received for the health of Garissa’s women
              is a moment in the highlight reel of a much longer story — one
              written in meetings, radio calls, faith gatherings, dignity kits
              and mothers saved.
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">The story</span>
                <h2 className="h2">
                  Recognition, and the <em>work behind it.</em>
                </h2>
              </div>
              <p className="fn-intro">
                The award is a proud moment for Fountain of Hope — and for the
                women whose dedication made the work visible enough to be
                recognized at all.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <Reveal className="fn-art">
                <Image
                  src="/images/GM7Qad3W0AEjRWj.jpg"
                  alt="The award moment, shared with the women who made the work possible"
                  fill
                  sizes="60vw"
                  loading="lazy"
                />
              </Reveal>

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>Who the award really belongs to.</h3>
                  <p>
                    When Fountain of Hope is recognized for the health of women,
                    it is a recognition of{" "}
                    <strong style={{ color: "#fff" }}>a whole movement</strong>:
                    the women of faith who open their congregations, the health
                    workers who extend a hand, and the mothers of Garissa who
                    carry the message forward.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <AwardIcon />
                      <span>
                        <b className="bold">Recognition</b> in women’s health
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        Fountain of Hope <b className="bold">· Garissa, Kenya</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> tone kept general; confirm the
                    exact award name, date and occasion with the team before
                    publishing.
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
                Recognition is a <em>milestone,</em> not a finish line.
              </h2>
              <p>What the award celebrates — and what it asks next of us.</p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> What the award honors
                </h3>
                <p>
                  The recognition speaks to the health of Garissa’s women — the{" "}
                  <strong>very purpose of Fountain of Hope</strong> since 2017.
                  It honors years of maternal and newborn survival work, of faith
                  leaders carrying health messages into their congregations, and
                  of women organizing around their own safety and dignity.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> A moment in a longer story
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">Started 2017</div>
                    <div className="v">
                      A platform for Garissa’s women to advocate for their own{" "}
                      <b>health, education and resilience</b> — founded by a
                      daughter of Garissa.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The work</div>
                    <div className="v">
                      Maternal and newborn survival, girls’ education and{" "}
                      <b>community-powered change</b> — visible enough to be
                      recognized.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The next chapter</div>
                    <div className="v">
                      An award is not the end — it is{" "}
                      <b>a measure of how far the movement has come</b>, and fuel
                      for what still remains.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  We are not just leaders in faith — we are leaders in life, and
                  saving lives begins with us.
                </blockquote>
                <div className="who">A woman religious leader · Garissa</div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Recognition belongs to
                  Garissa’s women
                </h3>
                <p>
                  Every conversation about the award should end the same way it
                  began: the recognition belongs to the{" "}
                  <strong>women of Garissa</strong> — and the work continues
                  until no mother, no child, no girl is left behind.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedTopics related={[TOPICS[0], TOPICS[6]]} />

        <TopicCta message="Every recognition is a reminder of what the movement still needs — your support to keep going." />
      </main>

      <SiteFooter />
    </>
  );
}