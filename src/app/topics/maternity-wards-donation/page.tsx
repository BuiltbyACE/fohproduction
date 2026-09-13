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
  MapPinIcon,
  UserGroupIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/maternity-wards-donation",
  title:
    "Porridge flour and Mackintosh covers for the wards of Garissa | Fountain of Hope",
  description:
    "On 20 April 2018, Fountain of Hope and the Garissa community donated Mackintosh bed covers and porridge flour to the Maternity and Pediatric Wards at Garissa Referral Hospital.",
});

const FRAMES = [
  {
    src: "/images/DbN55PyW0AASg_Q.jpg",
    alt: "Donations of Mackintosh bed covers and porridge flour for the Garissa Referral Hospital wards",
    caption:
      "Mackintosh bed covers and porridge flour — carried to the Maternity and Pediatric Wards at Garissa Referral Hospital.",
    meta: "Garissa Referral Hospital · 20 Apr 2018",
  },
  {
    src: "/images/DbN55P3X4AEJ2em.jpg",
    alt: "The community's donations being received in the maternity ward",
    caption:
      "A donation that belongs to a community that gave together.",
    meta: "Maternity Ward · 20 Apr 2018",
  },
  {
    src: "/images/DbN55P0WsAAWSlS.jpg",
    alt: "Handing over the donation to the hospital",
    caption:
      "The handover — thanking the Garissa community for joining the donation.",
    meta: "20 Apr 2018",
  },
  {
    src: "/images/DbN55P3X4AAfjsB.jpg",
    alt: "Mackintosh covers and porridge flour for the pediatric ward",
    caption:
      "For the babies and the mothers — the two wards that matter most to a mother-and-child a county.",
    meta: "Pediatric Ward · 20 Apr 2018",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/DbN55PyW0AASg_Q.jpg",
    alt: "Mackintosh bed covers and porridge flour for the Garissa Referral Hospital wards",
    tag: "20 Apr 2018",
    caption:
      "Mackintosh bed covers and porridge flour, donated to the Maternity and Pediatric Wards at Garissa Referral Hospital.",
  },
  {
    src: "/images/DbN55P3X4AEJ2em.jpg",
    alt: "Receiving the donation in the maternity ward",
    tag: "20 Apr 2018",
    caption:
      "Mother and Child health is an important aspect of society development — the reason for the donation.",
  },
  {
    src: "/images/DbN55P0WsAAWSlS.jpg",
    alt: "The community's donation at the referral hospital",
    tag: "20 Apr 2018",
    caption:
      "A thank-you to the Garissa Community for joining the donation.",
  },
  {
    src: "/images/DbN55P3X4AAfjsB.jpg",
    alt: "Supplies for the pediatric ward at Garissa Referral Hospital",
    tag: "20 Apr 2018",
    caption:
      "Porridge flour for the pediatric ward — nutrition for young patients still growing.",
  },
];

export default function TopicMaternityWardsDonation() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/DbN55PyW0AASg_Q.jpg",
              alt: "Donations of Mackintosh bed covers and porridge flour for the Garissa Referral Hospital wards",
            },
            {
              src: "/images/DbN55P3X4AEJ2em.jpg",
              alt: "The community's donations being received in the maternity ward",
            },
            {
              src: "/images/DbN55P0WsAAWSlS.jpg",
              alt: "Handing over the donation to the hospital",
            },
            {
              src: "/images/DbN55P3X4AAfjsB.jpg",
              alt: "Mackintosh covers and porridge flour for the pediatric ward",
            },
          ]}
          ariaLabel="Mackintosh bed covers and porridge flour donated to the Garissa Referral Hospital wards"
          crumbsHere="Referral Hospital · Donation"
          kickerTop="HEALTH · MOTHER & CHILD"
          kickerSub="Garissa · 20 Apr 2018"
          title={
            <>
              For mothers and children, <em>a warmer ward.</em>
            </>
          }
          sub="On 20 April 2018, Fountain of Hope thanked the Garissa Community for joining the donation of Mackintosh bed covers and porridge flour to the Maternity and Pediatric Wards at Garissa Referral Hospital — a small way of saying Mother and Child health is an important aspect of society development."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“Mother and Child health is an important aspect of society development. i would like to thank Garissa Community, for joining me in donating Mackintosh bed covers and Porridge Flour to the Maternity and Pediatric Wards at Garissa Referral Hospital”",
            src: "20 Apr 2018 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              In the mother-and-child wards of{" "}
              <strong>Garissa Referral Hospital</strong>, four words write the
              whole story:{" "}
              <strong>Mother and Child health is an important aspect of
              society development.</strong> On 20 April 2018, Fountain of Hope
              and the <strong>Garissa community</strong> turned those words
              into <strong>Mackintosh bed covers</strong> and{" "}
              <strong>porridge flour</strong> — carried to the{" "}
              <strong>Maternity and Pediatric Wards</strong> for the mothers
              and babies who need them.
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
                  A community that gives, <em>together.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Covers for the beds where mothers recover, flour for the
                porridge that feeds small patients — donated by the people of
                Garissa, for the wards at the heart of the county.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The donation —</div>
                  <h3>Mackintosh covers and porridge flour, ward by ward.</h3>
                  <p>
                    <strong style={{ color: "#fff" }}>
                      Mackintosh bed covers
                    </strong>{" "}
                    and{" "}
                    <strong style={{ color: "#fff" }}>
                      porridge flour
                    </strong>{" "}
                    were donated to the{" "}
                    <strong style={{ color: "#fff" }}>
                      Maternity and Pediatric Wards
                    </strong>{" "}
                    at{" "}
                    <strong style={{ color: "#fff" }}>
                      Garissa Referral Hospital
                    </strong>
                    . The Garissa community joined the donation — and
                    Fountain of Hope thanked them for it.
                  </p>
                  <p>
                    Mother and Child health, in the words of the post,{" "}
                    <strong style={{ color: "#fff" }}>
                      is an important aspect of society development
                    </strong>
                    .
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">20 Apr 2018</b>
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">Garissa</b>, Kenya · Referral
                        Hospital
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        Garissa Community · Maternity and Pediatric Wards
                      </span>
                    </div>
                    <div>
                      <HeartIcon />
                      <span>
                        Mackintosh bed covers &amp; porridge flour
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
                Health starts <em>in the community.</em>
              </h2>
              <p>
                What a donation of covers and flour says about the health of
                society.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> What was donated
                </h3>
                <p>
                  <strong>Mackintosh bed covers</strong> — the waterproof
                  covers that keep mattress and patient clean and dry in a
                  ward — and{" "}
                  <strong>porridge flour</strong>, the staple of a warm,
                  nourishing meal for young patients. Together they reach the{" "}
                  <strong>two bedsides</strong> that matter most in the county:
                  the <strong>maternity</strong> and{" "}
                  <strong>pediatric</strong> wards.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> The day, in facts
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">What</div>
                    <div className="v">
                      <b>Mackintosh bed covers</b> and{" "}
                      <b>porridge flour</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">Where</div>
                    <div className="v">
                      The <b>Maternity and Pediatric Wards</b> at{" "}
                      <b>Garissa Referral Hospital</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">Who</div>
                    <div className="v">
                      The <b>Garissa community</b> joined the donation;
                      Fountain of Hope thanked them.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  Mother and Child health is an important aspect of society
                  development. i would like to thank Garissa Community, for
                  joining me in donating Mackintosh bed covers and Porridge
                  Flour to the Maternity and Pediatric Wards at Garissa
                  Referral Hospital
                </blockquote>
                <div className="who">
                  Fountain of Hope · on X, 20 April 2018
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Why society depends on it
                </h3>
                <p>
                  When the pettiest needs of a ward are met — a dry bed, a warm
                  meal — the hospital can do its real work. And when a{" "}
                  <strong>community donates together</strong>, it is not only
                  the ward that receives: the{" "}
                  <strong>social contract</strong> between a people and the
                  health of its mothers and children is renewed, one cover and
                  one bag of flour at a time.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The donation in photographs"
          title={
            <>
              Covers, flour, <em>and a community.</em>
            </>
          }
          note="Four photographs from the donation at Garissa Referral Hospital, 20 April 2018. Click each photo to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[7], TOPICS[0]]} />

        <TopicCta message="Your support helps Fountain of Hope turn community generosity into healthier wards — for the mothers and children of Garissa." />
      </main>

      <SiteFooter />
    </>
  );
}