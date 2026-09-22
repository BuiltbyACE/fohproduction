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
  InfoIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@/components/icons";

export const metadata = makeMetadata({
  path: "/topics/gbv-mou-signing",
  title:
    "A signature against gender-based violence in Garissa | Fountain of Hope",
  description:
    "At the Garissa Child Protection Unit, Fountain of Hope witnessed the signing of an MoU between the County Government of Garissa and the National Government on Gender-Based Violence. 26 November 2018.",
});

const FRAMES = [
  {
    src: "/images/Ds7Aa2bWoAAmftC.jpg",
    alt: "The signing of an MoU on gender-based violence at the Garissa Child Protection Unit",
    caption:
      "The signing — County Government of Garissa and the National Government, together on Gender-Based Violence.",
    meta: "Garissa Child Protection Unit · Nov 2018",
  },
];

const GALLERY: {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}[] = [
  {
    src: "/images/Ds7Aa2bWoAAmftC.jpg",
    alt: "Witnessing the signing of an MoU on gender-based violence in Garissa",
    tag: "26 Nov 2018",
    caption:
      "An MoU between the County Government of Garissa and the National Government regarding Gender Based Violence — signed at the Garissa Child Protection Unit.",
  },
];

export default function TopicGbvMouSigning() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/Ds7Aa2bWoAAmftC.jpg",
              alt: "The signing of an MoU on gender-based violence at the Garissa Child Protection Unit",
            },
          ]}
          ariaLabel="The signing of an MoU on gender-based violence at the Garissa Child Protection Unit"
          crumbsHere="GBV MoU · 2018"
          kickerTop="HEALTH · GENDER-BASED VIOLENCE"
          kickerSub="Garissa · 26 Nov 2018"
          title={
            <>
              A signature against gender-based <em>violence.</em>
            </>
          }
          sub="At the Garissa Child Protection Unit, Fountain of Hope witnessed the signing of an MoU between the County Government of Garissa and the National Government — an agreement on Gender-Based Violence, for a county that shelters its survivors in that very building."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“I witnessed the signing of an MoU between the County Government of Garissa and the National Government regarding Gender Based Violence at the Garissa Child Protection Unit.”",
            src: "26 Nov 2018 · @Fountain_FOH on X",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              On 26 November 2018, at the{" "}
              <strong>Garissa Child Protection Unit</strong>, two levels of
              government put pen to an{" "}
              <strong>MoU on Gender-Based Violence</strong>.{" "}
              <strong>Fountain of Hope was there to witness it</strong> — the
              agreement between the{" "}
              <strong>County Government of Garissa</strong> and the{" "}
              <strong>National Government</strong>, signed in the building that
              shelters survivors of violence.
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
                  The pen that moves <em>a whole response.</em>
                </h2>
              </div>
              <p className="fn-intro">
                An MoU names a commitment in writing. When it is signed inside
                a child protection unit — and witnessed by the organizations
                working on the ground — the signature becomes a promise that
                survivors can hear.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The signature —</div>
                  <h3>Two governments, one unit, one promise.</h3>
                  <p>
                    The{" "}
                    <strong style={{ color: "#fff" }}>
                      County Government of Garissa
                    </strong>{" "}
                    and the{" "}
                    <strong style={{ color: "#fff" }}>
                      National Government
                    </strong>{" "}
                    signed the MoU{" "}
                    <strong style={{ color: "#fff" }}>
                      regarding Gender Based Violence
                    </strong>{" "}
                    — at the{" "}
                    <strong style={{ color: "#fff" }}>
                      Garissa Child Protection Unit
                    </strong>
                    , the safe haven for victims of violence in the county.
                  </p>
                  <p>
                    <strong style={{ color: "#fff" }}>
                      Fountain of Hope witnessed the signing
                    </strong>{" "}
                    — on the ground, the day the two governments agreed it.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        <b className="bold">26 Nov 2018</b>
                      </span>
                    </div>
                    <div>
                      <MapPinIcon />
                      <span>
                        <b className="bold">Garissa</b>, Kenya · Child
                        Protection Unit
                      </span>
                    </div>
                    <div>
                      <UserGroupIcon />
                      <span>
                        County Government of Garissa · National Government ·
                        Fountain of Hope
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> the caption draws on
                    @Fountain_FOH’s post (26 Nov 2018). The exact original post
                    URL was not retrievable during this session — confirm the
                    link before publishing.
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
                A safe haven, <em>and a signature.</em>
              </h2>
              <p>
                What a memorandum of understanding means when it is signed
                inside the place that shelters survivors.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> What was signed
                </h3>
                <p>
                  A{" "}
                  <strong>memorandum of understanding</strong> between the{" "}
                  <strong>County Government of Garissa</strong> and the{" "}
                  <strong>National Government</strong>,{" "}
                  <strong>regarding Gender Based Violence</strong> — an
                  agreement that commits both levels of government to respond
                  to GBV together, rather than apart.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> The day, in facts
                </h3>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">The agreement</div>
                    <div className="v">
                      An <b>MoU on Gender Based Violence</b> —{" "}
                      <b>County Government of Garissa</b> and{" "}
                      <b>National Government</b>.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The place</div>
                    <div className="v">
                      The <b>Garissa Child Protection Unit</b> — a safe haven
                      for victims of gender based violence.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The witness</div>
                    <div className="v">
                      <b>Fountain of Hope</b> witnessed the signing, 26
                      November 2018.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  I witnessed the signing of an MoU between the County
                  Government of Garissa and the National Government regarding
                  Gender Based Violence at the Garissa Child Protection Unit.
                </blockquote>
                <div className="who">
                  Fountain of Hope · on X, 26 Nov 2018
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Why a signature matters
                </h3>
                <p>
                  An MoU is how two governments hand each other authority for a
                  shared problem. Signed inside a child protection unit, it
                  grounds that agreement in the loudest possible reminder of{" "}
                  <strong>who the response is for</strong>: the children and
                  women who walk through that unit’s doors. Fountain of Hope
                  witnessed the moment so the community would know it happened —
                  the same day it gathered with partners at the unit, a safe
                  haven for victims of gender based violence.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Gallery
          eyebrow="The day in photographs"
          title={
            <>
              Where the pen came <em>down.</em>
            </>
          }
          note="The signing of the MoU on Gender-Based Violence at the Garissa Child Protection Unit, 26 November 2018."
          photos={GALLERY}
        />

        <RecordEvidence
          entries={[PORTFOLIO_DATA[2], PORTFOLIO_DATA[3]]}
          intro="The documented record of the Garissa Child Protection Unit — the building where this agreement was signed and where women with young children have a dignified stay — and of the county&apos;s GBV advocacy."
        />

        <RelatedTopics related={[TOPICS[7], TOPICS[6]]} />

        <TopicCta message="Your support helps Fountain of Hope keep standing beside the women and children of Garissa — inside the units, at the tables, when the signatures happen." />
      </main>

      <SiteFooter />
    </>
  );
}