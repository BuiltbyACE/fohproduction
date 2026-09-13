import makeMetadata from "@/lib/seo";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import StoryCarousel from "@/components/story-carousel";
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
  path: "/topics/okoamama-activity-05",
  title: "When a budget meeting is a life-saving meeting | Fountain of Hope",
  description:
    "The fifth activity of Okoa Mama na Mtoto: Garissa's CECM Health, Chief Officer, Director for Health, and Assembly Health and Budget Committee members deliberate maternal and newborn health. 19 August 2025.",
});

const FRAMES = [
  {
    src: "/images/GyucnxiXcAA59gF.jpg",
    alt: "The county health leadership table at the OMMI fifth activity meeting",
    caption:
      "The table where Garissa’s maternal health sits — county health leadership, assembled.",
    meta: "Ommi activity 05 · Garissa",
  },
  {
    src: "/images/GyucnsFXcAAyiXJ.jpg",
    alt: "Health, assembly and budget committee members in deliberation",
    caption:
      "CECM Health, Chief Officer, Director for Health — and the budget conversation begins.",
    meta: "Ommi activity 05 · Garissa",
  },
  {
    src: "/images/GyucnnqW8AA_tBY.jpg",
    alt: "Fountain of Hope and Health Committee members at the County Assembly",
    caption:
      "Health Committee members at the Assembly — the accountability chain, in the room.",
    meta: "Ommi activity 05 · Garissa",
  },
  {
    src: "/images/GyucnvYWIAAEYoL.jpg",
    alt: "A fruitful discussion on reducing maternal and child mortality",
    caption:
      "A fruitful discussion, deliberations agreed upon — the field note of a working meeting.",
    meta: "Ommi activity 05 · Garissa",
  },
];

export default function TopicOkoaMama() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/GyucnxiXcAA59gF.jpg",
              alt: "Garissa county health leadership at the OMMI fifth activity meeting",
            },
            {
              src: "/images/GyucnsFXcAAyiXJ.jpg",
              alt: "Health, assembly and budget committee members in deliberation",
            },
            {
              src: "/images/GyucnnqW8AA_tBY.jpg",
              alt: "Fountain of Hope and Health Committee members at the County Assembly",
            },
            {
              src: "/images/GyucnvYWIAAEYoL.jpg",
              alt: "A fruitful discussion on reducing maternal and child mortality",
            },
          ]}
          ariaLabel="Okoa Mama na Mtoto — a working meeting for maternal and newborn health"
          crumbsHere="Okoa Mama · Budget meeting"
          kickerTop="HEALTH · OKOA MAMA NA MTOTO"
          kickerSub="19 August 2025"
          title={
            <>
              When a budget meeting is <em>a life-saving meeting.</em>
            </>
          }
          sub="The budget-makers of Garissa County sit with the health executive — CECM Health, Chief Officer, Director for Health, Health Committee and Budget Committee members — and deliberate maternal and newborn health together. The field story, told from the room."
          fieldnote={{
            tag: "The original post",
            date: "@Fountain_FOH · X",
            text: "“On to the 5th activity of the Okoa Mama na Mtoto initiative — with the CECM Health, Chief Officer Health, Director for Health, Health Committee members at the Assembly and Budget Committee members. A fruitful discussion, and deliberations we agreed upon together.”",
            src: "19 Aug 2025 · 683 views · 9 likes · 2 reposts",
          }}
        />

        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              Every five minutes of the meeting, the same truth holds: a
              mother’s survival depends on staffed facilities, equipped referral
              and emergency transport — and all of it rests on county budget
              decisions. On <strong>19 August 2025</strong>, Okoa Mama na Mtoto
              took the conversation to the people who write those budgets.
            </p>
          </div>
        </section>

        <section className="fn-section" id="story">
          <div className="wrap">
            <Reveal className="fn-head">
              <div>
                <span className="eyebrow eyebrow--paper">
                  The story, in four frames
                </span>
                <h2 className="h2">
                  Four frames from <em>the room.</em>
                </h2>
              </div>
              <p className="fn-intro">
                Captured at the meeting, 19 August 2025. Swipe through the room
                the way the day unfolded — the table, the deliberation, the
                assembly committee, the working meeting.
              </p>
            </Reveal>

            <div className="fn-editorial">
              <StoryCarousel frames={FRAMES} />

              <Reveal className="fn-side">
                <div className="fn-card">
                  <div className="no">— The story —</div>
                  <h3>Who was in the room.</h3>
                  <p>
                    We sat with the people responsible for Garissa’s maternal
                    and newborn health: the{" "}
                    <strong style={{ color: "#fff" }}>
                      CECM Health, the Chief Officer, the Director for Health
                    </strong>
                    , the <strong style={{ color: "#fff" }}>Health Committee</strong>{" "}
                    at the Assembly, and the{" "}
                    <strong style={{ color: "#fff" }}>
                      Budget Committee members
                    </strong>
                    .
                  </p>
                  <p>
                    Health leadership and money leadership, at one table —
                    because a mother’s survival depends on both.
                  </p>
                  <div className="fn-meta">
                    <div>
                      <CalendarIcon />
                      <span>
                        Tuesday, <b className="bold">19 August 2025</b>
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
                      <UserGroupIcon />
                      <span>
                        CECM Health · Chief Officer · Director of Health ·
                        Assembly Health &amp; Budget Committees
                      </span>
                    </div>
                  </div>
                </div>
                <div className="verify-note">
                  <InfoIcon />
                  <span>
                    <b>Note for the team:</b> captions are drawn from
                    @Fountain_FOH’s post (19 Aug 2025) and the OMMI Year 1
                    report. Confirm photo-to-person attribution against the
                    originals before publishing.
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
                What the room <em>agreed.</em>
              </h2>
              <p>
                Where the fifth activity sits in the Okoa Mama na Mtoto Year
                One, and why a budget meeting is a life-saving meeting.
              </p>
            </Reveal>

            <Reveal className="discuss-body">
              <div className="dd-block">
                <h3>
                  <span className="num">01</span> Why a budget meeting
                </h3>
                <p>
                  Maternal and newborn deaths are not only a health story — they
                  are a <strong>money story</strong>. A mother’s survival
                  depends on staffed facilities, equipped referral and emergency
                  transport, all of which rest on county budget decisions. The
                  fifth activity took the Okoa Mama na Mtoto conversation to the
                  people who write those budgets: the{" "}
                  <strong>Health Committee</strong> and the{" "}
                  <strong>Budget Committee</strong> at the County Assembly, with
                  the county’s health executive at the table.
                </p>
                <p>
                  Bringing health leadership and money leadership together into
                  one deliberation is the entire argument of this field note —{" "}
                  <strong>the money must follow the mother</strong>.
                </p>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">02</span> What was on the table
                </h3>
                <p>
                  The working meeting opened with the data and realities of the
                  Okoa Mama na Mtoto landscape, then moved to the decisions the
                  county can make with, and for, its mothers.
                </p>
                <div className="dd-facts">
                  <div className="fact">
                    <div className="k">The budget gap</div>
                    <div className="v">
                      A county health budget under pressure leaves too little for
                      the <b>commodities, referral and facilities</b> that save
                      mothers — the very conversation this meeting opened.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The referral chain</div>
                    <div className="v">
                      <b>Cross-county referrals</b> and emergency transport are
                      a lifeline, yet remain one of the weakest links between a
                      mother, a facility and a skilled birth attendant.
                    </div>
                  </div>
                  <div className="fact">
                    <div className="k">The agreement</div>
                    <div className="v">
                      Fruitful deliberation, and a commitment the room{" "}
                      <b>agreed upon together</b> — carried from the table into
                      the county’s next budget and policy conversations.
                    </div>
                  </div>
                </div>
              </div>

              <div className="dd-quote">
                <span className="qmark">“</span>
                <blockquote>
                  On to the 5th activity … A fruitful discussion, and
                  deliberations we agreed upon together.
                </blockquote>
                <div className="who">
                  Fountain of Hope · Okoa Mama na Mtoto, on X
                </div>
              </div>

              <div className="dd-block">
                <h3>
                  <span className="num">03</span> Where this sits in a year of
                  advocacy
                </h3>
                <p>
                  This was not a one-off meeting. It is the fifth activity in a
                  deliberately sequenced year of maternal and newborn health
                  advocacy in Garissa — from county health landscaping, through
                  the women’s faith network and youth champions, into the rooms
                  where resource decisions are made. The topic pages on this
                  site tell the wider story of the whole initiative.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedTopics related={[TOPICS[1], TOPICS[3]]} />

        <TopicCta message="Every meeting, every radio message, every faith gathering is a step toward the day no mother or child is left behind." />
      </main>

      <SiteFooter />
    </>
  );
}