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
import { InfoIcon } from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/2018-the-founding-year",
  title:
    "The year Fountain of Hope began, in photographs | Fountain of Hope",
  description:
    "A first photo-archive of Fountain of Hope's founding year, 2018 — sanitary towel donations for a menstrual hygiene program, community courtesy calls, and the seeds of the work to come.",
});

const FRAMES = [
  {
    src: "/images/De6fJOcWkAAp3oA.jpg",
    alt: "Receiving sanitary towel donations at M.E.D.S.",
    caption:
      "At Mission for Essential Drugs and Supplies, receiving donations of sanitary towels for a three-year menstrual hygiene program.",
    meta: "M.E.D.S. · Jun 2018",
  },
  {
    src: "/images/DcAezspXUAAhJxh.jpg",
    alt: "A photograph from 30 April 2018",
    caption:
      "The second photograph from 30 April 2018 — caption pending team confirmation against the original post.",
    meta: "Apr 2018 · verify",
  },
  {
    src: "/images/DmpP4QkXsAALI2R.jpg",
    alt: "A photograph from September 2018",
    caption:
      "From the founding-year archive — subject and place to be confirmed against the original posts.",
    meta: "Sep 2018 · verify",
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
    alt: "Mackintosh and porridge flour donated for Garissa Referral Hospital",
    tag: "20 Apr 2018",
    caption:
      "Mackintosh and porridge flour donated for the Maternity and Paediatric wards of Garissa Referral Hospital.",
  },
  {
    src: "/images/DcAcKzCWkAUtU7z.jpg",
    alt: "First lady county association advocating for menstrual health management",
    tag: "30 Apr 2018 · verify",
    caption:
      "First lady county association advocating for menstrual health management, child empowerment program advocacy at UNDP KE.",
  },
  {
    src: "/images/DcAezspXUAAhJxh.jpg",
    alt: "A photograph from 30 April 2018",
    tag: "30 Apr 2018 · verify",
    caption:
      "The second photograph from 30 April 2018 — caption pending team confirmation against the original post.",
  },
  {
    src: "/images/De6fJOcWkAAp3oA.jpg",
    alt: "Receiving sanitary towel donations at M.E.D.S.",
    tag: "5 Jun 2018",
    caption:
      "“At Mission for Essential Drugs and Supplies (M.E.D.S.), receiving donations of sanitary towels as part of my 3 year program of Menstrual Hygiene Health, that targets one million boys and girls.”",
  },
  {
    src: "/images/DktnWqbXgAAPYp6.jpg",
    alt: "An official meeting with the Muslim Youth organization",
    tag: "16 Aug 2018",
    caption:
      "An official meeting with the Muslim Youth organization on the community initiatives Fountain of Hope was carrying.",
  },
  {
    src: "/images/DlEck4UWsAAgsjw.jpg",
    alt: "Fountain of Hope and Garissa government donating sanitary towels for girls in Garissa county",
    tag: "20 Aug 2018 · verify",
    caption:
      "Fountain of Hope partners with Garissa government to donate sanitary towels for girls in Garissa county.",
  },
  {
    src: "/images/DmpP4QkXsAALI2R.jpg",
    alt: "A photograph from early September 2018",
    tag: "9 Sep 2018 · verify",
    caption:
      "From the September 2018 archive — caption pending team confirmation against the original post.",
  },
  {
    src: "/images/DqrjMGdXgAArKtB.jpg",
    alt: "A photo booth showcasing Kangaroo mother care with the Garissa Health team",
    tag: "29 Oct 2018 · verify",
    caption:
      "A photo booth that shows Fountain of Hope partnering with the Garissa Health team to showcase how Kangaroo mother breastfeeding has improved bonding in newborn health.",
  },
];

export default function Topic2018FoundingYear() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/De6fJOcWkAAp3oA.jpg",
              alt: "Receiving sanitary towel donations at M.E.D.S.",
            },
            {
              src: "/images/DcAezspXUAAhJxh.jpg",
              alt: "A photograph from 30 April 2018",
            },
            {
              src: "/images/DmpP4QkXsAALI2R.jpg",
              alt: "A photograph from September 2018",
            },
          ]}
          ariaLabel="The year Fountain of Hope began, in photographs — 2018"
          crumbsHere="2018 &middot; The founding year"
          kickerTop="ARCHIVE · THE FOUNDING YEAR"
          kickerSub="2018"
          title={
            <>
              The year Fountain of Hope began —{" "}
              <em>in photographs.</em>
            </>
          }
          sub="These are among the earliest photographs of Fountain of Hope — what the work looked like at the very beginning. One caption is drawn from the original post; the rest wait on your confirmation of the subject and place."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“At Mission for Essential Drugs and Supplies (M.E.D.S.) receiving donations of sanitary towels as part of my 3 year program of Menstrual Hygiene Health, that targets one million boys and girls.”",
            src: "5 Jun 2018 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              In 2018, before the alliances and the award, the work was already
              underway: a{" "}
              <strong>three-year menstrual hygiene program</strong> that set out
              to <strong>reach a million boys and girls</strong>, partnerships
              gathered one meeting at a time, and the first photographs of a
              county movement taking shape. This page collects them —{" "}
              <strong>why it matters later</strong>. What the photographs show,
              beyond their dates, awaits the team’s confirmation.
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
                  Where the work <em>was at the beginning.</em>
                </h2>
              </div>
              <p className="fn-intro">
                A founding year kept in photographs: donation drives, courtesy
                calls, and the quiet, everyday work of a county organization
                finding its feet.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>The seeds of everything after.</h3>
                  <p>
                    The sanitary towels received at{" "}
                    <strong style={{ color: "#fff" }}>M.E.D.S.</strong> in June
                    2018 fed a{" "}
                    <strong style={{ color: "#fff" }}>
                      three-year menstrual hygiene program
                    </strong>{" "}
                    that set its sights on{" "}
                    <strong style={{ color: "#fff" }}>
                      one million boys and girls
                    </strong>{" "}
                    — the same fight Fountain of Hope carries today.
                  </p>
                  <p>
                    The rest of the year’s pictures — the courtesy calls, the
                    visits, the chairs pulled up around a shared purpose were the
                    relationships the later work would be built on.
                  </p>
                  <div className="verify-note">
                    <InfoIcon />
                    <span>
                      <b>Note for the team:</b> only the 5 June 2018 caption is
                      drawn from a verified post. The other photographs record
                      real dates (decoded from the media files) but their
                      subjects are unconfirmed — please verify each one against
                      the archive before publishing.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Gallery
          eyebrow="The year in photographs"
          title={
            <>
              The founding year, <em>frame by frame.</em>
            </>
          }
          note="Eight photographs from 2018. Captions marked “verify” await the team’s confirmation against the original posts. Click each one to view it full screen."
          photos={GALLERY}
        />

        <RelatedTopics related={[TOPICS[1], TOPICS[6]]} />

        <TopicCta message="The founding year is where every impact story since began — your support keeps the archive, and the work, growing." />
      </main>

      <SiteFooter />
    </>
  );
}