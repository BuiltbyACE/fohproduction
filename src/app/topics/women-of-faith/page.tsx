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
import {
  CalendarIcon,
  HeartIcon,
  InfoIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/women-of-faith",
  title:
    "Women religious leaders on the front line | Fountain of Hope",
  description:
    "The second Okoa Mama na Mtoto activity: religious women leaders advocate maternal and newborn health across Garissa — 4 May 2025.",
});

const FRAMES = [
  {
    src: "/images/GqHG44gXMAAXca5.jpg",
    alt: "Religious women leaders at the second OMMI activity",
    caption:
      "The women of faith, gathered — the messengers who never need a microphone.",
    meta: "OMMI activity 02 · 4 May 2025",
  },
  {
    src: "/images/GqHG45TWoAAxtXq.jpg",
    alt: "The gathering of religious women leaders for maternal and newborn health",
    caption:
      "A gathering that carries advocacy into every congregation that trusts it.",
    meta: "OMMI activity 02 · 4 May 2025",
  },
  {
    src: "/images/GqHG48JWsAAOfPB.jpg",
    alt: "Religious women leaders in discussion on newborn health",
    caption:
      "The second activity in action — maternal and newborn health, spoken in the community’s own voice.",
    meta: "OMMI activity 02 · 4 May 2025",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/GqHG44gXMAAXca5.jpg",
    alt: "Religious women leaders at the second OMMI activity",
    tag: "Activity 02 · May 2025",
    caption: "The women of faith gather for the second activity of Okoa Mama na Mtoto.",
  },
  {
    src: "/images/GqHG45TWoAAxtXq.jpg",
    alt: "The gathering of religious women leaders for maternal and newborn health",
    tag: "Activity 02 · May 2025",
    caption: "Advocating maternal and newborn health — carried in the community’s own voice.",
  },
  {
    src: "/images/GqHG4_lWAAAPVEo.jpg",
    alt: "Religious women leaders engaged in the OMMI sessions",
    tag: "Activity 02 · May 2025",
    caption: "Sessions built around the leaders who take the message home.",
  },
  {
    src: "/images/GqHG48JWsAAOfPB.jpg",
    alt: "Religious women leaders in discussion on newborn health",
    tag: "Activity 02 · May 2025",
    caption: "The conversation continues — maternal and newborn health, congregation by congregation.",
  },
];

export default function TopicWomenOfFaith() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/GqHG44gXMAAXca5.jpg",
              alt: "Religious women leaders at the second OMMI activity",
            },
            {
              src: "/images/GqHG4_lWAAAPVEo.jpg",
              alt: "Religious women leaders engaged in the OMMI sessions",
            },
            {
              src: "/images/GqHG48JWsAAOfPB.jpg",
              alt: "Religious women leaders in discussion on newborn health",
            },
          ]}
          ariaLabel="Women religious leaders — the second activity of Okoa Mama na Mtoto"
          crumbsHere="Women of faith"
          kickerTop="HEALTH · COMMUNITY ADVOCACY"
          kickerSub="4 May 2025"
          title={
            <>
              The women of faith on <em>the front line.</em>
            </>
          }
          sub="After the planning came the people: the second activity of Okoa Mama na Mtoto was implemented with religious women leaders — advocating maternal and newborn health, because in Garissa the calendar and the congregation meet."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“Second activity of the Okoa Mama na Mtoto initiative, this time working with the religious women leaders advocating for maternal and newborn health. #icrhk”",
            src: "4 May 2025 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              In Garissa, the message travels furthest when the community itself
              carries it. That is why the second activity of Okoa Mama na Mtoto
              was implemented with{" "}
              <strong>religious women leaders</strong> — the women whose trust
              reaches further than any billboard, advocating{" "}
              <strong>maternal and newborn health</strong> from the place people
              already gather. <strong>4 May 2025.</strong>
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">
                  The congregation as the classroom
                </span>
                <h2 className="h2">
                  The congregation as <em>the classroom.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Women religious leaders gather for the second activity of Okoa
                Mama na Mtoto — advocating maternal and newborn health from
                within their communities.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>The second activity, in the field.</h3>
                  <p>
                    This is the moment the initiative moved from the planning
                    table to the field:{" "}
                    <strong style={{ color: "#fff" }}>
                      religious women leaders
                    </strong>{" "}
                    taking up advocacy for{" "}
                    <strong style={{ color: "#fff" }}>
                      maternal and newborn health
                    </strong>
                    . Their congregations are Garissa’s oldest communication
                    network.
                  </p>
                  <p>
                    When a woman of faith speaks of a mother’s survival, families
                    listen — and act.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">4 May 2025</b>
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
                      <span>Okoa Mama na Mtoto · activity 02</span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> captions are drawn from
                    @Fountain_FOH’s post (4 May 2025, #icrhk). Confirm
                    photo-to-person attribution against the originals before
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
                The church, the mosque, <em>the health room.</em>
              </h2>
              <p>
                Why religious women leaders are central to maternal and newborn
                health advocacy — and where this first gathering led.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> Why the faith network
                </h3>
                <p>
                  No office, poster or radio slot opens a Garissa home the way a
                  religious woman leader can. The{" "}
                  <strong>second activity</strong> of Okoa Mama na Mtoto worked
                  with exactly that authority —{" "}
                  <strong>advocating maternal and newborn health</strong> through
                  the leaders families already trust and turn to for guidance.
                </p>
                <p>
                  Health advocacy rooted in faith is not softer and not slower —
                  it is <strong>durable</strong>, repeated week after week in
                  the language of the community.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> What the women of faith carry
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">The message</div>
                    <div className="v">
                      <b>Maternal and newborn health</b>, carried into
                      congregations week after week.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The trust</div>
                    <div className="v">
                      A woman of faith’s word travels further than{" "}
                      <b>any awareness campaign</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The continuity</div>
                    <div className="v">
                      Part of a sequenced year of advocacy — from planning, to
                      faith leaders, to <b>the budget rooms</b>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  Second activity of the Okoa Mama na Mtoto initiative, this
                  time working with the religious women leaders advocating for
                  maternal and newborn health. #icrhk
                </blockquote>
                <div className="who">
                  Fountain of Hope · Okoa Mama na Mtoto, on X
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> From the second activity onward
                </h3>
                <p>
                  Activities three and five came next — working meetings, county
                  health leadership and the budget conversation. The women of
                  faith who began in activity two are the voice carrying that
                  advocacy doorstep to doorstep, long after each meeting ends.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The day in photos"
          title={
            <>
              Women of faith, <em>in conversation.</em>
            </>
          }
          note="Four photographs from the day. Click each one to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[0], TOPICS[4]]} />

        <TopicCta message="Your support stands beside the women of faith carrying maternal and newborn health into every Garissa congregation." />
      </main>

      <SiteFooter />
    </>
  );
}