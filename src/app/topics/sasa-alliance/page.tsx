import makeMetadata from "@/lib/seo";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import StoryCarousel from "@/components/story-carousel";
import PhotoBand from "@/components/photo-band";
import Gallery from "@/components/gallery";
import RelatedTopics from "@/components/related-topics";
import TopicCta from "@/components/topic-cta";
import { TOPICS } from "@/lib/topics";
import {
  CalendarIcon,
  InfoIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/sasa-alliance",
  title:
    "The SASA Alliance: a national commitment to save mothers | Fountain of Hope",
  description:
    "The SASA Alliance launches in Nairobi to address the maternal health crisis — grassroots women champions, present to show the commitment. 17–18 June 2025.",
});

const FRAMES = [
  {
    src: "/images/Gtu5RrxWkAE1Zz9.jpg",
    alt: "Grassroots women champions at the SASA Alliance launch",
    caption:
      "Champions from Fountain of Hope, Shina Foundation and Touch alife — there to show the commitment.",
    meta: "SASA Alliance · Jun 2025",
  },
  {
    src: "/images/Gtu5RvQW8AADpYs.jpg",
    alt: "The SASA Alliance launch gathering in Nairobi",
    caption:
      "From Senegal to Tanzania, seven countries present for a continental commitment.",
    meta: "SASA Alliance · Jun 2025",
  },
  {
    src: "/images/Gtu4QciXQAAwn1v.jpg",
    alt: "The SASA Alliance launch in Nairobi, in session",
    caption:
      "The room where a strategic alliance to reduce maternal mortality began.",
    meta: "SASA Alliance · Jun 2025",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/Gtu4QciXQAAwn1v.jpg",
    alt: "The SASA Alliance launch in Nairobi, in session",
    tag: "SASA Alliance · Jun 2025",
    caption: "The launch in session — Nairobi, June 2025.",
  },
  {
    src: "/images/Gtu4QgwXEAA6F00.jpg",
    alt: "Grassroots women champions present at the SASA launch",
    tag: "SASA Alliance · Jun 2025",
    caption: "Grassroots women champions, present to show the commitment.",
  },
  {
    src: "/images/Gtu4Ql-WcAABazj.jpg",
    alt: "Partners gathering at the SASA Alliance launch",
    tag: "SASA Alliance · Jun 2025",
    caption: "The alliance taking shape — partners around the same table.",
  },
  {
    src: "/images/Gtu4QfIWgAAu3y3.jpg",
    alt: "Fountain of Hope and partners during the SASA Alliance launch",
    tag: "SASA Alliance · Jun 2025",
    caption: "Fountain of Hope among the organizations showing the commitment.",
  },
  {
    src: "/images/Gtu5RrxWkAE1Zz9.jpg",
    alt: "Grassroots women champions from across the continent at the SASA launch",
    tag: "SASA Alliance · Jun 2025",
    caption: "Champions from FOH, Shina Foundation and Touch alife in the room.",
  },
  {
    src: "/images/Gtu5RvQW8AADpYs.jpg",
    alt: "Seven countries represented at the SASA Alliance launch",
    tag: "SASA Alliance · Jun 2025",
    caption: "Senegal to Tanzania — the countries present, with Kenya.",
  },
  {
    src: "/images/Gtu5RwtWIAAjQgh.jpg",
    alt: "The commitment in the room at the SASA Alliance launch",
    tag: "SASA Alliance · Jun 2025",
    caption: "A moment of the launch — a commitment made in the room.",
  },
];

export default function TopicSasaAlliance() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/Gtu4QgwXEAA6F00.jpg",
              alt: "Grassroots women champions present at the SASA launch",
            },
            {
              src: "/images/Gtu5RwtWIAAjQgh.jpg",
              alt: "The commitment in the room at the SASA Alliance launch",
            },
            {
              src: "/images/Gtu4Ql-WcAABazj.jpg",
              alt: "Partners gathering at the SASA Alliance launch",
            },
          ]}
          ariaLabel="The SASA Alliance — a national commitment to save mothers"
          crumbsHere="SASA Alliance"
          kickerTop="HEALTH · NATIONAL ADVOCACY"
          kickerSub="17–18 June 2025"
          title={
            <>
              SASA: a national commitment <em>to save mothers.</em>
            </>
          }
          sub="In June 2025, Fountain of Hope joined grassroots women champions and partners at the launch of the SASA Alliance in Nairobi — a strategic step to address the maternal health crisis and reduce the high maternal mortalities."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“SASA Alliance launched yesterday to address the maternal health crisis. A commitment made to reduce the high maternal mortalities. Grassroots women champions present to show the commitment.”",
            src: "18 Jun 2025 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              The <strong>SASA Alliance</strong> — Strategic Advocacy for
              Strategic Action — was launched in Nairobi to address the{" "}
              <strong>maternal health crisis</strong>, and with it came a{" "}
              <strong>commitment to reduce the high maternal mortalities</strong>
              . Fountain of Hope was there, among grassroots women champions
              from across Kenya and the continent,{" "}
              <strong>present to show the commitment</strong> — 17–18 June 2025.
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">
                  The story, in frames
                </span>
                <h2 className="h2">
                  A launch, and the <em>commitment in the room.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Nairobi, 17–18 June 2025: the SASA Alliance is launched, and the
                champions who carry the message — Fountain of Hope among them —
                gather to show the commitment.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>Who showed up, and why it matters.</h3>
                  <p>
                    The SASA Alliance brought together{" "}
                    <strong style={{ color: "#fff" }}>
                      grassroots women champions
                    </strong>{" "}
                    and organizations — Fountain of Hope, Shina Foundation and
                    Touch alife — with partners from{" "}
                    <strong style={{ color: "#fff" }}>
                      seven countries
                    </strong>
                    : Kenya, Senegal, Côte d’Ivoire, Nigeria, Ethiopia, Uganda
                    and Tanzania.
                  </p>
                  <p>
                    Grassroots and national in the same room — because ending
                    maternal mortality needs both.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">17–18 June 2025</b>
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">Nairobi</b>, Kenya
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        Grassroots women champions · seven countries · national
                        partners
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> captions are drawn from
                    @Fountain_FOH’s posts (18 June 2025). Confirm
                    photo-to-person attribution against the originals before
                    publishing.
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <PhotoBand
          src="/images/Gtu5R1xWMAAGs67.jpg"
          alt="The SASA Alliance gathering in Nairobi, June 2025"
          eyebrow="SASA ALLIANCE · NAIROBI · JUNE 2025"
          title={
            <>
              Seven countries, <em>one commitment.</em>
            </>
          }
          note="Grassroots women champions and partners from Senegal, Côte d’Ivoire, Nigeria, Ethiopia, Uganda and Tanzania — alongside Kenya — gathered to show the commitment."
        />

        <section className="discuss" id="discuss">
          <div className="wrap">
            <Reveal className="discuss-nav">
              <span className="eyebrow eyebrow--paper">
                The discussion, unpacked
              </span>
              <h2>
                Mortality is a <em>coverage problem.</em>
              </h2>
              <p>
                Why the alliance matters — and what a commitment made in a room
                means when it reaches a ward.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> Why SASA, why now
                </h3>
                <p>
                  The maternal health crisis is urgent and{" "}
                  <strong>national</strong> — no single organization can close
                  it alone. The SASA Alliance was launched in Nairobi
                  specifically to <strong>address the maternal health crisis</strong>
                  , and to move beyond speeches a{" "}
                  <strong>commitment was made to reduce the high maternal
                  mortalities</strong>. An alliance is how a commitment stops
                  being a statement and becomes a plan.
                </p>
                <p>
                  Strategic Advocacy for Strategic Action: the name is the
                  method — <strong>advocacy</strong> that carries the ask,{" "}
                  <strong>action</strong> that delivers it, county by county.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> What was in the room
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">Grassroots champions</div>
                    <div className="v">
                      <b>Fountain of Hope, Shina Foundation</b> and{" "}
                      <b>Touch alife</b> among the grassroots women champions
                      present to <b>show the commitment</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">Seven countries</div>
                    <div className="v">
                      Senegal, Côte d’Ivoire, Nigeria, Ethiopia, Uganda and
                      Tanzania alongside Kenya — a{" "}
                      <b>continental commitment</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The ask</div>
                    <div className="v">
                      A coalition that turns{" "}
                      <b>strategic advocacy into strategic action</b>, reaching
                      the mothers the numbers count.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  SASA Alliance launched yesterday to address the maternal health
                  crisis. A commitment made to reduce the high maternal
                  mortalities. Grassroots women champions present to show the
                  commitment.
                </blockquote>
                <div className="who">
                  Fountain of Hope · SASA Alliance, on X
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> From a launch to a life
                </h3>
                <p>
                  An alliance earns its name in delivery rooms, not speeches.
                  For Fountain of Hope, SASA is the{" "}
                  <strong>national conversation</strong> beside the Garissa work
                  — the faith network, the radio, the budget meetings — all
                  pushing the same commitment downward:{" "}
                  <strong>fewer mothers lost</strong>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The day in photos"
          title={
            <>
              The launch, <em>in frames.</em>
            </>
          }
          note="Seven photographs from Nairobi. Click each one to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[3], TOPICS[0]]} />

        <TopicCta message="Your support helps a national commitment land where it matters — in the health of Garissa's mothers and newborns." />
      </main>

      <SiteFooter />
    </>
  );
}