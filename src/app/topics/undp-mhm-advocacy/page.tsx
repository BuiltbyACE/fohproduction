import makeMetadata from "@/lib/seo";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import StoryCarousel from "@/components/story-carousel";
import Gallery from "@/components/gallery";
import RelatedTopics from "@/components/related-topics";
import TopicCta from "@/components/topic-cta";
import { TOPICS } from "@/lib/topics";
import { CalendarIcon, MapPinIcon, UserGroupIcon } from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/undp-mhm-advocacy",
  title:
    "A holistic approach in advocacy of menstrual hygiene | Fountain of Hope",
  description:
    "On 30 April 2018, Fountain of Hope joined the UNDP Kenya forum on a Holistic Approach in Advocacy of Menstrual Hygiene Management — an exhilarating moment for the work of keeping Garissa's girls in school.",
});

const FRAMES = [
  {
    src: "/images/DcAcKzhWAAIdprk.jpg",
    alt: "Fountain of Hope at the UNDP Kenya forum on advocacy of Menstrual Hygiene Management",
    caption:
      "An exhilarating moment — at the UNDP Kenya forum, for a Holistic Approach in Advocacy of Menstrual Hygiene Management.",
    meta: "UNDP Kenya · 30 Apr 2018",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/DcAcKzhWAAIdprk.jpg",
    alt: "At the UNDP Kenya forum on menstrual hygiene management advocacy",
    tag: "30 Apr 2018",
    caption:
      "Fountain of Hope at UNDP Kenya — for a Holistic Approach in Advocacy of Menstrual Hygiene Management.",
  },
];

export default function TopicUndpMhmAdvocacy() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/DcAcKzhWAAIdprk.jpg",
              alt: "Fountain of Hope at the UNDP Kenya forum on advocacy of Menstrual Hygiene Management",
            },
          ]}
          ariaLabel="Fountain of Hope at the UNDP Kenya forum on advocacy of Menstrual Hygiene Management"
          crumbsHere="UNDP Kenya · MHM"
          kickerTop="HEALTH · MENSTRUAL HYGIENE"
          kickerSub="Nairobi · 30 Apr 2018"
          title={
            <>
              A holistic approach, <em>in advocacy.</em>
            </>
          }
          sub="An exhilarating moment, in Fountain of Hope's own words — being at UNDP Kenya for a Holistic Approach in Advocacy of Menstrual Hygiene Management, carrying the cause of the girls of Garissa."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“It was an exhilarating moment to be at The UNDP Kenya for  Holistic Approach in Advocacy of Menstrual Hygiene Management #follow me#”",
            src: "30 Apr 2018 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              On{" "}
              <strong>30 April 2018</strong>, Fountain of Hope was at{" "}
              <strong>UNDP Kenya</strong> for a{" "}
              <strong>
                Holistic Approach in Advocacy of Menstrual Hygiene Management
              </strong>{" "}
              — a moment the organization called{" "}
              <strong>exhilarating</strong>, on the record, in the founding
              year of the work that keeps Garissa’s girls learning.
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">
                  The story, in a frame
                </span>
                <h2 className="h2">
                  The founding year <em>takes the floor.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Four months after Fountain of Hope was established, its
                founder carried menstrual hygiene advocacy to the national
                stage — to UNDP Kenya, for a holistic approach to the subject.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The moment —</div>
                  <h3>At UNDP Kenya, for the girls of Garissa.</h3>
                  <p>
                    <strong style={{ color: "#fff" }}>
                      UNDP Kenya
                    </strong>{" "}
                    hosted a forum for a{" "}
                    <strong style={{ color: "#fff" }}>
                      Holistic Approach in Advocacy of Menstrual Hygiene
                      Management
                    </strong>
                    . Fountain of Hope was there, and described it as{" "}
                    <strong style={{ color: "#fff" }}>an exhilarating
                    moment</strong>.
                  </p>
                  <p>
                    The post closes with{" "}
                    <strong style={{ color: "#fff" }}>
                      #follow me
                    </strong>{" "}
                    — an invitation to a following barely four months old, to
                    come along on the advocacy journey.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">30 Apr 2018</b>
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">UNDP Kenya</b>, Nairobi
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        Menstrual Hygiene Management · Holistic advocacy
                      </span>
                    </div>
                  </div>
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
                Advocacy, <em>holistically.</em>
              </h2>
              <p>
                Why being at UNDP Kenya mattered for a young organization and
                the girls it serves.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> An exhilarating moment
                </h3>
                <p>
                  For a community organization established the year before,{" "}
                  <strong>a seat at UNDP Kenya</strong> was national
                  recognition of local story. Menstrual hygiene management is
                  a <strong>matter of dignity, health and schooling</strong> —
                  and a <strong>holistic approach</strong> insists it be
                  addressed with that fullness, not as a taboo.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> The two words that matter
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">Where</div>
                    <div className="v">
                      The forum was held at <b>UNDP Kenya</b>,{" "}
                      <b>30 April 2018</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">What for</div>
                    <div className="v">
                      A <b>Holistic Approach in Advocacy of Menstrual Hygiene
                      Management</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">Who</div>
                    <div className="v">
                      <b>Fountain of Hope</b> was present — and called it{" "}
                      <b>an exhilarating moment</b>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  It was an exhilarating moment to be at The UNDP Kenya for
                  Holistic Approach in Advocacy of Menstrual Hygiene
                  Management #follow me#
                </blockquote>
                <div className="who">
                  Fountain of Hope · on X, 30 April 2018
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Why it is part of this site
                </h3>
                <p>
                  The girls who miss school for want of a pad are the same
                  girls this website’s{" "}
                  <strong>menstrual-health topic</strong> follows. That it all
                  began, in part, at a UNDP forum for{" "}
                  <strong>holistic advocacy</strong> is the founding year made
                  visible — <strong>a Garissa cause meeting Nairobi</strong>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The moment in photographs"
          title={
            <>
              At UNDP Kenya, <em>in a frame.</em>
            </>
          }
          note="Fountain of Hope at UNDP Kenya for a Holistic Approach in Advocacy of Menstrual Hygiene Management, 30 April 2018."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[1], TOPICS[7]]} />

        <TopicCta message="Your support lets Fountain of Hope turn advocacy moments into months of school for the girls of Garissa." />
      </main>

      <SiteFooter />
    </>
  );
}