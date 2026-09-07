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
  path: "/topics/school-milk",
  title:
    "A glass of milk, and a reason to stay in school | Fountain of Hope",
  description:
    "For ten weeks, 59 ECD pupils in Nanigi Primary and 210 in Iftin Primary received milk twice a week — nutrition against child non-communicable disease, and for enrollment and retention in school. March 2019.",
});

const FRAMES = [
  {
    src: "/images/D1jKf6gXgAEF87A.jpg",
    alt: "School milk for ECD pupils in Nanigi and Iftin primary schools",
    caption:
      "The milk — twice a week, for ten weeks — for children in Nanigi and Iftin primary schools.",
    meta: "School milk · Mar 2019",
  },
  {
    src: "/images/D1jKgcmX0AYO0MH.jpg",
    alt: "Children and teachers during the school milk program",
    caption:
      "Children and teachers at the center of a small, daily act of nutrition.",
    meta: "School milk · Mar 2019",
  },
  {
    src: "/images/D1jKg_4WoAQ3tBv.jpg",
    alt: "A classroom moment during the school milk program",
    caption:
      "A program built to reduce child non-communicable diseases and keep pupils learning.",
    meta: "School milk · Mar 2019",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/D1jKf6gXgAEF87A.jpg",
    alt: "School milk for ECD pupils in Nanigi and Iftin primary schools",
    tag: "13 Mar 2019",
    caption:
      "For the next ten weeks (except the holiday), 59 ECD pupils in Nanigi Primary and 210 in Iftin Primary received milk twice a week.",
  },
  {
    src: "/images/D1jKgcmX0AYO0MH.jpg",
    alt: "Children and teachers during the school milk program",
    tag: "13 Mar 2019",
    caption:
      "The program aimed to reduce non-communicable diseases in children by improving nutrition — and to enhance enrollment and retention in school.",
  },
  {
    src: "/images/D1jKg_4WoAQ3tBv.jpg",
    alt: "A classroom moment during the school milk program",
    tag: "13 Mar 2019",
    caption:
      "Milk twice a week, in the classroom — nutrition and school days, hand in hand.",
  },
  {
    src: "/images/D1jKhlPXQAAiAsI.jpg",
    alt: "The school milk program in session",
    tag: "13 Mar 2019",
    caption:
      "One of the photographs from the post announcing the ten-week milk program.",
  },
  {
    src: "/images/D1SfeoJXgAA2tlP.jpg",
    alt: "A photograph from 10 March 2019",
    tag: "10 Mar 2019 · verify",
    caption:
      "Days before the milk program post — likely the same project, but confirm against the original post.",
  },
  {
    src: "/images/D1MhicqW0AAiDH_.jpg",
    alt: "A photograph from 9 March 2019",
    tag: "9 Mar 2019 · verify",
    caption:
      "Days before the milk program post — likely the same project, but confirm against the original post.",
  },
  {
    src: "/images/D1JFHZDX0AMvKFT.jpg",
    alt: "A photograph from 8 March 2019",
    tag: "8 Mar 2019 · verify",
    caption:
      "Days before the milk program post — likely the same project, but confirm against the original post.",
  },
];

export default function TopicSchoolMilk() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/D1jKf6gXgAEF87A.jpg",
              alt: "School milk for ECD pupils in Nanigi and Iftin primary schools",
            },
            {
              src: "/images/D1jKgcmX0AYO0MH.jpg",
              alt: "Children and teachers during the school milk program",
            },
            {
              src: "/images/D1jKg_4WoAQ3tBv.jpg",
              alt: "A classroom moment during the school milk program",
            },
          ]}
          ariaLabel="A glass of milk, and a reason to stay in school — March 2019"
          crumbsHere="School milk &middot; Nutrition"
          kickerTop="EDUCATION · NUTRITION"
          kickerSub="Nanigi · Iftin · 2019"
          title={
            <>
              A glass of milk, and <em>a reason to stay in school.</em>
            </>
          }
          sub="In March 2019, Fountain of Hope set out a ten-week school milk program: 59 ECD pupils in Nanigi Primary and 210 in Iftin Primary receiving milk twice a week — a small intervention against child malnutrition, and for enrollment and retention."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“For the next 10 wks (except holiday) 59 ECD pupils in Nanigi Primary and 210 in Iftin Primary will get milk twice a week. This project aims at reducing Non-Communicable diseases in children by improving their nutrition & enhancing enrollment and retention in school.”",
            src: "13 Mar 2019 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              Malnutrition is a health crisis that shows up in a classroom: a
              hungry child cannot attend, cannot focus, cannot stay. The{" "}
              <strong>ten-week school milk program</strong> took the fight{" "}
              <strong>into the school day</strong> — milk twice a week for the
              youngest pupils at{" "}
              <strong>Nanigi and Iftin primary schools</strong>, to{" "}
              <strong>improve nutrition</strong>,{" "}
              <strong>reduce non-communicable diseases in children</strong>, and
              <strong>enhance enrollment and retention</strong>.
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
                  Nutrition as <em>a school matter.</em>
                </h2>
              </div>
              <p className="fn-intro">
                The glass of milk is small. What it buys — a child present, a
                child learning, a child growing — is anything but.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>Two schools, ten weeks, twice a week.</h3>
                  <p>
                    <strong style={{ color: "#fff" }}>59 ECD pupils</strong> in
                    Nanigi Primary and{" "}
                    <strong style={{ color: "#fff" }}>210 in Iftin
                    Primary</strong>{" "}
                    were part of the program — milk twice a week for
                    ten weeks, apart from the holiday.
                  </p>
                  <p>
                    Nutrition and schooling are the same fight. The program
                    aimed to{" "}
                    <strong style={{ color: "#fff" }}>
                      reduce non-communicable diseases in children
                    </strong>{" "}
                    by improving their nutrition,{" "}
                    <strong style={{ color: "#fff" }}>
                      enhancing enrollment and retention
                    </strong>{" "}
                    along the way.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">March 2019</b> · ten weeks
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">Nanigi &amp; Iftin</b> primary
                        schools
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        59 ECD pupils (Nanigi) · 210 ECD pupils (Iftin)
                      </span>
                    </div>
                  </div>
                  <div className="verify-note">
                    <InfoIcon />
                    <span>
                      <b>Note for the team:</b> the story is drawn from the
                      verified post of 13 March 2019. The last three photographs
                      predate it by days and are likely from the same project —
                      please confirm each against the original posts before
                      publishing.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Gallery
          eyebrow="The project in photographs"
          title={
            <>
              The milk program, <em>in frames.</em>
            </>
          }
          note="Seven photographs from March 2019. Captions marked “verify” predate the confirmed post — click each photo to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[1], TOPICS[8]]} />

        <TopicCta message="Your support helps a glass of milk reach a pupil who might otherwise miss school — and miss a year." />
      </main>

      <SiteFooter />
    </>
  );
}