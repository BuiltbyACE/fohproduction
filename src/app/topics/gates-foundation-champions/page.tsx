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
  InfoIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/gates-foundation-champions",
  title:
    "Grassroots champions at the Gates Foundation office | Fountain of Hope",
  description:
    "Grassroots women health champions from four counties shared their experience and impact with Madam Rachel Toku-Appiah at the newly opened Bill & Melinda Gates Foundation Kenya office, May 2024.",
});

const FRAMES = [
  {
    src: "/images/GNKt-HEWkAAT0d-.jpg",
    alt: "The newly opened Bill & Melinda Gates Foundation Kenya office",
    caption:
      "The newly opened Bill & Melinda Gates Foundation Kenya office — a room that heard grassroots voices.",
    meta: "BMGF Kenya · 9 May 2024",
  },
  {
    src: "/images/GNKt-HIXcAALvAW.jpg",
    alt: "Madam Rachel Toku-Appiah in conversation with grassroots champions",
    caption:
      "Madam Rachel Toku-Appiah — Director for Policy, Advocacy and Communications in Africa — in conversation.",
    meta: "BMGF Kenya · 9 May 2024",
  },
  {
    src: "/images/GNKt-HYWsAADZKq.jpg",
    alt: "Grassroots women health champions from four counties sharing their experience",
    caption:
      "Grassroots women health champions from four counties, sharing experience and impact.",
    meta: "BMGF Kenya · 9 May 2024",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/GNKt-HEWkAAT0d-.jpg",
    alt: "The newly opened Bill & Melinda Gates Foundation Kenya office",
    tag: "9 May 2024",
    caption:
      "The meeting was held at the newly opened Bill & Melinda Gates Foundation Kenya office.",
  },
  {
    src: "/images/GNKt-HIXcAALvAW.jpg",
    alt: "Madam Rachel Toku-Appiah with grassroots women health champions",
    tag: "9 May 2024",
    caption:
      "In conversation with Madam Rachel Toku-Appiah, Director for Policy, Advocacy and Communications in Africa.",
  },
  {
    src: "/images/GNKt-HYWsAADZKq.jpg",
    alt: "Grassroots women health champions sharing experience and impact",
    tag: "9 May 2024",
    caption:
      "Grassroots women health champions from four counties shared their experience and impact.",
  },
];

export default function TopicGatesFoundationChampions() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/GNKt-HEWkAAT0d-.jpg",
              alt: "The newly opened Bill & Melinda Gates Foundation Kenya office",
            },
            {
              src: "/images/GNKt-HIXcAALvAW.jpg",
              alt: "Madam Rachel Toku-Appiah with grassroots women health champions",
            },
            {
              src: "/images/GNKt-HYWsAADZKq.jpg",
              alt: "Grassroots women health champions sharing experience and impact",
            },
          ]}
          ariaLabel="Grassroots women health champions at the Bill & Melinda Gates Foundation Kenya office"
          crumbsHere="Gates Foundation meeting"
          kickerTop="HEALTH · ADVOCACY & PARTNERSHIPS"
          kickerSub="Nairobi · 9 May 2024"
          title={
            <>
              Four counties, one table — <em>grassroots champions heard.</em>
            </>
          }
          sub="In May 2024, grassroots women health champions from four counties gathered at the newly opened Bill & Melinda Gates Foundation (BMGF) Kenya office — to meet Madam Rachel Toku-Appiah, Director for Policy, Advocacy and Communications in Africa, and to share their experience and impact."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“Met Madam Rachel Toku-Appiah, the Director for Policy, Advocacy and Communications in Africa at Bill & Melinda Gates Foundation. Grassroot women health Champions from 4 counties shared their experience and impact. The meeting was held at the newly opened BMGF kenya office.”",
            src: "9 May 2024 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              When a global foundation opens its first Kenya office, the room
              it chooses to fill belongs to the people the work exists for. At
              that meeting were{" "}
              <strong>grassroots women health champions from four counties</strong>{" "}
              — not to be spoken to, but to{" "}
              <strong>share their experience and impact</strong> with{" "}
              <strong>
                Madam Rachel Toku-Appiah
              </strong>{" "}
              — the Director for Policy, Advocacy and Communications in Africa.
              A seat at the table, <strong>Nairobi, 9 May 2024</strong>.
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
                  Experience as <em>the evidence brought.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Grassroots champions do not bring charts — they bring
                experience and impact, and at the new Gates Foundation Kenya
                office, someone with the power to amplify policy sat down to
                listen.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>A table where grassroots spoke.</h3>
                  <p>
                    The newly opened{" "}
                    <strong style={{ color: "#fff" }}>
                      Bill &amp; Melinda Gates Foundation Kenya office
                    </strong>{" "}
                    hosted the meeting. On the other side of it:{" "}
                    <strong style={{ color: "#fff" }}>
                      Madam Rachel Toku-Appiah
                    </strong>
                    , the Director for Policy, Advocacy and Communications in
                    Africa.
                  </p>
                  <p>
                    <strong style={{ color: "#fff" }}>
                      Four counties’ champions
                    </strong>{" "}
                    shared their experience and impact — the reason meetings
                    like this exist: to put grassroots evidence where policy is
                    decided.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">9 May 2024</b>
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">Nairobi</b>, Kenya · BMGF Kenya
                        office
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        Grassroots champions · four counties · BMGF leadership
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> captions are drawn from
                    @Fountain_FOH’s post (9 May 2024). The four counties
                    represented are not named in the post — confirm them before
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
                A door opening <em>in Nairobi.</em>
              </h2>
              <p>
                What a newly opened office means, and why grassroots champions
                were the first to walk in.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> Why the door mattered
                </h3>
                <p>
                  The{" "}
                  <strong>newly opened BMGF Kenya office</strong> is a signal: a
                  global foundation choosing Nairobi as a base for its Africa
                  work. For grassroots champions, it meant a{" "}
                  <strong>physical door</strong> to walk through — and they did,
                  with their counties and their impact in hand.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> Who was in the room
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">The table</div>
                    <div className="v">
                      <b>Grassroots women health champions</b> from{" "}
                      <b>four counties</b> shared their <b>experience and
                      impact</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The listener</div>
                    <div className="v">
                      <b>Madam Rachel Toku-Appiah</b>, Director for Policy,
                      Advocacy and Communications in Africa at BMGF.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The room</div>
                    <div className="v">
                      The <b>newly opened BMGF Kenya office</b>, Nairobi,
                      May 2024.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  Met Madam Rachel Toku-Appiah, the Director for Policy,
                  Advocacy and Communications in Africa at Bill &amp; Melinda
                  Gates Foundation. Grassroot women health Champions from 4
                  counties shared their experience and impact. The meeting was
                  held at the newly opened BMGF kenya office.
                </blockquote>
                <div className="who">
                  Fountain of Hope · on X, 9 May 2024
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Experience is the evidence
                </h3>
                <p>
                  Policy is written where the numbers live. When champions from
                  four counties share what actually happened — the mothers
                  reached, the practices changed, the barriers named — they hand
                  the people closest to the work the{" "}
                  <strong>authority of experience</strong>. That is advocacy,
                  and it is how a grassroots movement moves policy.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The meeting in photographs"
          title={
            <>
              At the table, <em>in frames.</em>
            </>
          }
          note="Three photographs from the newly opened BMGF Kenya office, 9 May 2024. Click each one to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[3], TOPICS[6]]} />

        <TopicCta message="Your support helps grassroots champions carry Garissa’s experience to the tables where policy is written." />
      </main>

      <SiteFooter />
    </>
  );
}