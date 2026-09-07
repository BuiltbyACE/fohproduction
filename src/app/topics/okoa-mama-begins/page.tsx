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
  UserGroupIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/okoa-mama-begins",
  title: "How Okoa Mama na Mtoto began | Fountain of Hope",
  description:
    "The workshop that started it — ICRHk, BMG and women grassroots set out to implement Okoa Mama na Mtoto: reducing maternal mortality, child death and morbidity, accelerating SDG 2030. 25–27 February 2025.",
});

const FRAMES = [
  {
    src: "/images/GkyMTgDXcAACJMF.jpg",
    alt: "Day two of the Okoa Mama na Mtoto planning workshop",
    caption:
      "Day two — the discussion turning a plan into practice, driven by the grassroots.",
    meta: "OMMI workshop · 25–27 Feb 2025",
  },
  {
    src: "/images/GkqZPDXWIAA8HVg.jpg",
    alt: "Women grassroots around the Okoa Mama na Mtoto planning table",
    caption:
      "Women grassroots around the table as the implementation path took shape.",
    meta: "OMMI workshop · 25–27 Feb 2025",
  },
  {
    src: "/images/GkyMTiuXwAAZBY3.jpg",
    alt: "Partners joining the Okoa Mama na Mtoto conversation, day two",
    caption:
      "JHPIEGO joins the conversation — partners growing the circle.",
    meta: "OMMI workshop · 25–27 Feb 2025",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/GkqZO_yWoAAWiM1.jpg",
    alt: "The room where Okoa Mama na Mtoto first came together",
    tag: "OMMI workshop · Feb 2025",
    caption: "The room where Okoa Mama na Mtoto began to take shape.",
  },
  {
    src: "/images/GkqZO_3W8AAQi8G.jpg",
    alt: "ICRHk, BMG and women grassroots at the OMMI planning table",
    tag: "OMMI workshop · Feb 2025",
    caption: "ICRHk, BMG and women grassroots around the implementation table.",
  },
  {
    src: "/images/GkqZPC6WgAEI-3y.jpg",
    alt: "Working groups shaping the Okoa Mama na Mtoto agenda",
    tag: "OMMI workshop · Feb 2025",
    caption: "From the working groups — where the initiative’s agenda was set.",
  },
  {
    src: "/images/GkqZPDXWIAA8HVg.jpg",
    alt: "Women grassroots in conversation at the OMMI workshop",
    tag: "OMMI workshop · Feb 2025",
    caption: "Women grassroots in conversation, carrying the plan into practice.",
  },
  {
    src: "/images/GkyMTgDXcAACJMF.jpg",
    alt: "Day two discussion on grassroots maternal and newborn health",
    tag: "OMMI workshop · Feb 2025",
    caption: "Day two: accelerating maternal, newborn and child health at the grassroots.",
  },
  {
    src: "/images/GkyMTgOWgAAvmJG.jpg",
    alt: "Focus on the details of the OMMI implementation plan",
    tag: "OMMI workshop · Feb 2025",
    caption: "Moments from the workshop floor — attention on the details that save lives.",
  },
  {
    src: "/images/GkyMTiuXwAAZBY3.jpg",
    alt: "JHPIEGO joining the Okoa Mama na Mtoto conversation",
    tag: "OMMI workshop · Feb 2025",
    caption: "The circle keeps growing — a conversation that refuses to end at the table.",
  },
];

export default function TopicOkoaMamaBegins() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/GkqZO_yWoAAWiM1.jpg",
              alt: "The workshop room where Okoa Mama na Mtoto first came together",
            },
            {
              src: "/images/GkqZO_3W8AAQi8G.jpg",
              alt: "ICRHk, BMG and women grassroots at the OMMI planning workshop",
            },
            {
              src: "/images/GkqZPC6WgAEI-3y.jpg",
              alt: "Working groups shaping the Okoa Mama na Mtoto agenda",
            },
          ]}
          ariaLabel="Okoa Mama na Mtoto — the workshop where the initiative began"
          crumbsHere="OMMI &middot; How it began"
          kickerTop="HEALTH · OKOA MAMA NA MTOTO"
          kickerSub="25–27 February 2025"
          title={
            <>
              Where Okoa Mama na Mtoto <em>first came together.</em>
            </>
          }
          sub="Before the budgets and the boardrooms, there was a workshop: ICRHk, BMG and women grassroots setting out to implement Okoa Mama na Mtoto (OMMI) — to reduce maternal mortality, child death and morbidity, in service of SDG 2030."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“We have the opportunity to work with @ICRHk and @BMG to implement the Okoa Mama na Mtoto initiative. We discussed ways of reducing maternal mortality rate, child death and morbidity, accelerating SDG 2030.”",
            src: "25 Feb 2025 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              Okoa Mama na Mtoto did not begin at a budget table. It began in a{" "}
              <strong>workshop</strong> — partners, colleagues and grassroots
              women working out how to run an initiative that would push for
              fewer mothers lost, fewer children lost, and less suffering that
              the numbers and the wards still hide. This is the story of those
              two days, <strong>25–27 February 2025</strong>, when the idea
              first came together.
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
                  Before the budgets, <em>the workshop.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Two days of discussion that became the start of Okoa Mama na
                Mtoto — with ICRHk, BMG and women grassroots, and JHPIEGO
                joining the conversation on the second day.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>Who was in the planning room.</h3>
                  <p>
                    The table that shaped Okoa Mama na Mtoto held three kinds of
                    authority: the{" "}
                    <strong style={{ color: "#fff" }}>technical partners</strong>{" "}
                    (ICRHk, BMG), the{" "}
                    <strong style={{ color: "#fff" }}>grassroots women</strong>{" "}
                    who carry the message, and Fountain of Hope linking them to
                    Garissa. On day two, JHPIEGO joined — strengthening the line
                    on RMCAH+N.
                  </p>
                  <p>
                    The purpose, agreed together:{" "}
                    <strong style={{ color: "#fff" }}>
                      reduce maternal mortality, child death and morbidity
                    </strong>
                    , accelerating SDG 2030.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">25–27 February 2025</b>
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        ICRHk · BMG · JHPIEGO · women grassroots
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> captions are drawn from
                    @Fountain_FOH’s posts (25 &amp; 27 Feb 2025). Confirm
                    photo-to-person attribution against the originals before
                    publishing.
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <PhotoBand
          src="/images/GkyMTfCWUAAAJLq.jpg"
          alt="The wider planning table on the second day of the OMMI workshop"
          eyebrow="OMMI · 25–27 February 2025"
          title={
            <>
              And on day two, <em>the circle grew.</em>
            </>
          }
          note="Day 2 kept the momentum — discussion centred on accelerating progress at the grassroots, and JHPIEGO joined the conversation on RMCAH+N."
        />

        <section className="discuss" id="discuss">
          <div className="wrap">
            <Reveal className="discuss-nav">
              <span className="eyebrow eyebrow--paper">
                The discussion, unpacked
              </span>
              <h2>
                An initiative <em>takes shape.</em>
              </h2>
              <p>
                Two days that mapped an advocacy year — the partners who framed
                it, and the work Okoa Mama na Mtoto set out to do.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> The workshop that started it
                </h3>
                <p>
                  The main discussion at those first meetings: how to{" "}
                  <strong>implement the Okoa Mama na Mtoto initiative</strong>{" "}
                  (OMMI) — advocacy to reduce{" "}
                  <strong>maternal mortality</strong>,{" "}
                  <strong>child death</strong> and{" "}
                  <strong>morbidity</strong>. Not a slogan, but a working
                  programme: partners, grassroots women and Fountain of Hope
                  defining what reducing the numbers would actually mean on the
                  ground.
                </p>
                <p>
                  The horizon line was explicit —{" "}
                  <strong>accelerating SDG 2030</strong> — and in Garissa, that
                  horizon is measured in ambulances, facilities and mothers
                  who arrive in time.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> Day two, the grassroots lens
                </h3>
                <p>
                  Day two was about the places where progress is most needed and
                  most possible —{" "}
                  <strong>RMCAH+N at the grassroots</strong>: reproductive,
                  maternal, newborn, child and adolescent health plus nutrition,
                  at the level where communities live.
                </p>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">The partners</div>
                    <div className="v">
                      <b>ICRHk, BMG</b> and{" "}
                      <b>women grassroots</b> — the table the initiative was
                      shaped around.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The agenda</div>
                    <div className="v">
                      Reducing <b>maternal mortality, child death and
                      morbidity</b>, accelerating <b>SDG 2030</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">Day two</div>
                    <div className="v">
                      Grassroots-centred acceleration of <b>RMCAH+N</b>, joined
                      by <b>JHPIEGO</b>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  Day 2 of discussions, joining with @JHPIEGO, this time
                  focusing and accelerating progress on RMCAH+N at the
                  grassroots level. It is our desire to see measurable
                  improvement in maternal and child health.
                </blockquote>
                <div className="who">
                  Fountain of Hope · Okoa Mama na Mtoto, on X
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> The activity pages make sense
                  now
                </h3>
                <p>
                  Months later, activity five would put Fountain of Hope at the
                  same table as Garissa’s Health and Budget Committees. This
                  workshop in February is where that arc begins — every later
                  topic on this site is a chapter of the initiative shaped in
                  these two days.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The day in photos"
          title={
            <>
              The workshop, <em>frame by frame.</em>
            </>
          }
          note="Seven photographs from across the two days. Click each one to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[0], TOPICS[5]]} />

        <TopicCta message="Your support grows the initiative that began as a workshop — Okoa Mama na Mtoto, from planning table to delivery room." />
      </main>

      <SiteFooter />
    </>
  );
}