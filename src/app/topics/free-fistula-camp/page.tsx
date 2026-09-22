import makeMetadata from "@/lib/seo";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import StoryCarousel from "@/components/story-carousel";
import Gallery from "@/components/gallery";
import RelatedTopics from "@/components/related-topics";
import TopicCta from "@/components/topic-cta";
import RecordEvidence from "@/components/record-evidence";
import { TOPICS } from "@/lib/topics";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import {
  CalendarIcon,
  HeartIcon,
  InfoIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/free-fistula-camp",
  title:
    "The Free Fistula Camp: healing and hope in Garissa | Fountain of Hope",
  description:
    "A week-long Free Fistula Camp in Garissa, May 2019 — corrective obstetric fistula surgery and care, and a public stand: no woman should suffer the shame of obstetric fistula.",
});

const FRAMES = [
  {
    src: "/images/D7Wde2aW0AAn6f3.jpg",
    alt: "Care and support at the Free Fistula Camp in Garissa",
    caption:
      "On the ground at the Free Fistula Camp — a week that changed lives.",
    meta: "Free Fistula Camp · May 2019",
  },
  {
    src: "/images/D7WdftrXYAIEXPs.jpg",
    alt: "The Free Fistula Camp in session in Garissa",
    caption:
      "The camp in session — women supported through corrective surgery and recovery.",
    meta: "Free Fistula Camp · May 2019",
  },
  {
    src: "/images/D7Wdd7tW0AAP1HW.jpg",
    alt: "Marking the end of the week-long Free Fistula Camp",
    caption:
      "Marking the end of the week — and the end of a long journey for many women.",
    meta: "Free Fistula Camp · May 2019",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/D7VmCi9WwAcQ2kC.jpg",
    alt: "The Free Fistula Camp in Garissa, May 2019",
    tag: "Free Fistula Camp · May 2019",
    caption: "The week-long Free Fistula Camp in Garissa.",
  },
  {
    src: "/images/D7Wfh9VWkAUsz9b.jpg",
    alt: "Obstetric fistula awareness carried through the camp",
    tag: "Free Fistula Camp · May 2019",
    caption: "Obstetric fistula is preventable — the message at the heart of the week.",
  },
  {
    src: "/images/D7Wdd7tW0AAP1HW.jpg",
    alt: "The close of the week-long Free Fistula Camp",
    tag: "Free Fistula Camp · May 2019",
    caption: "The close of the week-long camp.",
  },
  {
    src: "/images/D7Wde2aW0AAn6f3.jpg",
    alt: "Care and support through the Free Fistula Camp week",
    tag: "Free Fistula Camp · May 2019",
    caption: "Care and support through the camp week.",
  },
  {
    src: "/images/D7WdftrXYAIEXPs.jpg",
    alt: "Women supported at the Free Fistula Camp",
    tag: "Free Fistula Camp · May 2019",
    caption: "Women served — and a community that stood with them.",
  },
];

export default function TopicFreeFistulaCamp() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/D7VmCi9WwAcQ2kC.jpg",
              alt: "The Free Fistula Camp in Garissa, May 2019",
            },
            {
              src: "/images/D7Wfh9VWkAUsz9b.jpg",
              alt: "Obstetric fistula awareness carried through the camp",
            },
            {
              src: "/images/D7Wdd7tW0AAP1HW.jpg",
              alt: "Marking the end of the week-long Free Fistula Camp",
            },
          ]}
          ariaLabel="The Free Fistula Camp — healing and hope in Garissa"
          crumbsHere="Free Fistula Camp"
          kickerTop="HEALTH · OBSTETRIC FISTULA"
          kickerSub="May 2019"
          title={
            <>
              A week-long camp, <em>and the hope it restored.</em>
            </>
          }
          sub="In May 2019, a Free Fistula Camp in Garissa offered corrective surgery and care to women living with obstetric fistula — and carried a public message that no woman should ever suffer its shame."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“I wish to reiterate that Obstetric Fistula is preventable. It can be largely be avoided by delaying the age of first pregnancy, the cessation of harmful traditional practices such as FGM, early marriages and timely access to obstetric care.”",
            src: "24 May 2019 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              In <strong>May 2019</strong>, Garissa hosted a week-long{" "}
              <strong>Free Fistula Camp</strong> — corrective surgery and care
              for women living with <strong>obstetric fistula</strong>, and a
              stand that no woman should carry its burden alone. The camp also
              delivered the harder message:{" "}
              <strong>obstetric fistula is preventable</strong>.
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">The story</span>
                <h2 className="h2">
                  A week that closed <em>a long journey.</em>
                </h2>
              </div>
              <p className="fn-intro">
                For the women who underwent corrective surgery, the camp marked
                the end of years of pain, bitterness, shame and stigma — and the
                beginning of a message Garissa would keep repeating.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>A week, and what it closed.</h3>
                  <p>
                    For the{" "}
                    <strong style={{ color: "#fff" }}>
                      many women who underwent corrective surgery
                    </strong>
                    , the camp marked the end of a long journey of{" "}
                    <strong style={{ color: "#fff" }}>
                      pain, bitterness, shame and stigma
                    </strong>
                    . It is the kind of restoration no single clinic visit can
                    capture.
                  </p>
                  <p>
                    And the week carried a second message —{" "}
                    <strong style={{ color: "#fff" }}>
                      obstetric fistula is preventable
                    </strong>
                    .
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">May 2019</b> · week-long camp
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">Garissa County</b>, North Eastern
                        Kenya
                      </span>
                    </div>
                    <div>
                      <HeartIcon />
                      <span>Corrective surgery · care · awareness</span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> captions are drawn from
                    @Fountain_FOH’s posts (24 May 2019). Confirm photo-to-person
                    and venue attribution against the originals before
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
                A preventable <em>sorrow,</em> and the work to end it.
              </h2>
              <p>
                What the camp restored for the women who came — and the
                prevention the whole week insisted on.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> Before surgery, prevention
                </h3>
                <p>
                  The Free Fistula Camp treated what decades of neglect left
                  behind — but its loudest message was about what should never
                  happen again:{" "}
                  <strong>obstetric fistula is preventable</strong>. It can be
                  largely avoided by <strong>delaying the age of first
                  pregnancy</strong>, the cessation of harmful traditional
                  practices such as <strong>FGM</strong> and{" "}
                  <strong>early marriages</strong>, and{" "}
                  <strong>timely access to obstetric care</strong>.
                </p>
                <p>
                  Those are the same commitments Okoa Mama na Mtoto would carry
                  into Garissa years later — the camp was the January to that
                  movement’s harvest.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> What the camp stood for
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">Corrective care</div>
                    <div className="v">
                      Women who had lived with the condition{" "}
                      <b>underwent corrective surgery</b> — the end of a long
                      journey of <b>shame and stigma</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The message</div>
                    <div className="v">
                      <b>No woman should suffer the shame of obstetric
                      fistula</b> — spoken from the heart of the camp.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The prevention</div>
                    <div className="v">
                      <b>Delayed first pregnancy</b> · end FGM and early
                      marriage · <b>timely obstetric care</b>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  It was the end of a long journey of pain, bitterness, shame
                  and stigma for the many women who have undergone the corrective
                  surgery. No woman should suffer the shame of obstetric fistula.
                </blockquote>
                <div className="who">
                  Fountain of Hope · Free Fistula Camp, on X
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> A chapter in this site’s story
                </h3>
                <p>
                  The Free Fistula Camp belongs to the same story as the room of
                  budget-makers in 2025: the same Garissa mothers, the same
                  preventable conditions, the same stand that{" "}
                  <strong>care must reach the most neglected women</strong> —
                  from the 2019 camp week to the national SASA commitment.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The day in photos"
          title={
            <>
              The camp, <em>in frames.</em>
            </>
          }
          note="Five photographs from the Free Fistula Camp week. Click each one to view it full screen."
          photos={GALLERY}
        />

        <RecordEvidence
          entries={[PORTFOLIO_DATA[8]]}
          intro="The documented record of the care that stood behind the Free Fistula Camp week."
        />

        <RelatedTopics related={[TOPICS[3], TOPICS[5]]} />

        <TopicCta message="Your support funds the care and prevention that end obstetric fistula — one mother, one surgery, one awareness conversation at a time." />
      </main>

      <SiteFooter />
    </>
  );
}