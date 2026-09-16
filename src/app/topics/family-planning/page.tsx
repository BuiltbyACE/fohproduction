import Image from "next/image";
import makeMetadata from "@/lib/seo";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicHero from "@/components/topic-hero";
import RelatedTopics from "@/components/related-topics";
import TopicCta from "@/components/topic-cta";
import FpImpact from "./fp-impact";
import { TOPICS } from "@/lib/topics";

export const metadata = makeMetadata({
  path: "/topics/family-planning",
  title: "The child-spacing advocacy journey in Garissa | Fountain of Hope",
  description:
    "How culturally and religiously sensitive advocacy, male involvement and county-government partnership carried Garissa County from a 5.5% modern contraceptive prevalence rate to a reported 11% in child-spacing service uptake by 2022 — an FP2020 Rapid Response Mechanism project supported by the United Nations Foundation.",
  image: "/images/family-planning-1.jpg",
});

const KDHS_2014 = [
  {
    label: "Total fertility rate",
    nat: "3.9",
    gar: "6.1",
    natW: 64,
    garW: 100,
    note: "births per woman",
  },
  {
    label: "Contraceptive prevalence rate",
    nat: "58%",
    gar: "5.5%",
    natW: 100,
    garW: 9,
    note: "third lowest county-wide use in Kenya",
  },
  {
    label: "Antenatal care — 1st visit",
    nat: "95.5%",
    gar: "87.3%",
    natW: 100,
    garW: 91,
    note: "of women",
  },
  {
    label: "Antenatal care — 4th visit",
    nat: "57.7%",
    gar: "47.7%",
    natW: 100,
    garW: 83,
    note: "of women",
  },
  {
    label: "Skilled deliveries",
    nat: "61.8%",
    gar: "39.8%",
    natW: 100,
    garW: 64,
    note: "of deliveries",
  },
  {
    label: "Postnatal care",
    nat: "51%",
    gar: "39%",
    natW: 100,
    garW: 76,
    note: "Garissa figure recorded via DHIS, not KDHS",
  },
  {
    label: "Infant mortality",
    nat: "39 / 1000",
    gar: "37 / 1000",
    natW: 100,
    garW: 95,
    note: "live births",
  },
  {
    label: "Under-five mortality",
    nat: "51 / 1000",
    gar: "44 / 1000",
    natW: 100,
    garW: 86,
    note: "live births",
  },
  {
    label: "Fully immunized children",
    nat: "68%",
    gar: "54.4%",
    natW: 100,
    garW: 80,
    note: "of children",
  },
  {
    label: "Female genital mutilation",
    nat: "21%",
    gar: "97%",
    natW: 22,
    garW: 100,
    note: "of women",
  },
  {
    label: "Maternal mortality ratio",
    nat: "362 / 100,000",
    gar: "646 / 100,000",
    natW: 56,
    garW: 100,
    note: "live births; Garissa figure also cites the Kenya Population Situation Analysis Report, 2013",
  },
];

const REASONS_TO_SPACE = [
  {
    n: "01",
    text: "The mother needs time to recover — her health, nutrition and energy — before another pregnancy.",
  },
  {
    n: "02",
    text: "Exclusive breastfeeding is recommended for about six months, and mothers need time to breastfeed.",
  },
  {
    n: "03",
    text: "The next pregnancy should wait until the last child is at least two years old; the ideal space between births is two to three years.",
  },
  {
    n: "04",
    text: "Closely spaced births are linked to higher maternal and child morbidity and mortality — and women of childbearing age in Garissa often have six to ten closely spaced children.",
  },
];

const BARRIERS = [
  {
    title: "No postpartum FP data systems or indicators",
    text: "There was little evidence that women were being counselled or served after birth — the scale of the missed opportunity was invisible.",
  },
  {
    title: "No direction from health leadership",
    text: "Without top-level guidance, facilities had no mandate to offer postpartum family planning.",
  },
  {
    title: "Inadequate provider knowledge and skills",
    text: "Health workers had too little training to counsel women — women were hardly counselled at antenatal care.",
  },
  {
    title: "Cultural and religious misconceptions and myths",
    text: "Family planning is culturally and religiously sensitive in a county that is about 98% Muslim and highly patriarchal.",
  },
  {
    title: "Long distances to facilities",
    text: "Facilities average about 25 kilometres away, so returning for a service was a real cost for mothers.",
  },
  {
    title: "Early marriage",
    text: "Early marriage disempowers young women, often as they enter their childbearing years.",
  },
  {
    title: "Limited male support",
    text: "Reproductive decisions are rarely a woman's alone, and men had largely been left out of the conversation.",
  },
];

const JOURNEY = [
  {
    year: "2014",
    title: "The evidence",
    text: "KDHS 2014 records Garissa's modern contraceptive prevalence rate at just 5.5% — among the lowest in Kenya.",
  },
  {
    year: "2016",
    title: "The project",
    text: "The Child Spacing Advocacy Efforts Project I is commissioned through FP2020's Rapid Response Mechanism (RRM), funded by the United Nations Foundation.",
  },
  {
    year: "2017",
    title: "A county plan",
    text: "Garissa County develops its Family Planning Implementation Plan with the support of Fountain of Hope and the UN Foundation.",
  },
  {
    year: "2017–2018",
    title: "A champion",
    text: "Fardosa Osman, founder of Fountain of Hope and then Garissa County First Lady as spouse to the Governor, acts as the family-planning champion.",
  },
  {
    year: "2018–2019",
    title: "Government acts",
    text: "The County Director of Health issues a circular directing Medical Superintendents and Facility In-Charges to provide and report postpartum family-planning services.",
  },
  {
    year: "Through 2020–2022",
    title: "Services and reporting",
    text: "Hospitals and maternity shelters begin providing postpartum family-planning services and counselling — and the county tracks uptake across its seven sub-counties.",
  },
];

const GOALS = [
  {
    n: "01",
    title: "A county directive",
    text: "The County Director of Health issues a circular directing Medical Superintendents and Facility In-Charges to provide — and report — post-pregnancy and postpartum family planning.",
  },
  {
    n: "02",
    title: "Facilities begin",
    text: "Hospitals and maternity shelters begin providing postpartum family-planning services and counselling to women who need them.",
  },
];

const EFFORTS = [
  {
    key: "A",
    title: "Sensitizing decision makers through lived experiences",
    text: "Public forums gave survivors of gender-based violence safe spaces to speak — women and youth voiced concerns and, above all, being listened to mattered. The experience translated into greater support from leaders.",
  },
  {
    key: "B",
    title: "Social and traditional media campaigns",
    text: "The approach was built on audience analysis: youthful, urban audiences were reached online, while conservative rural audiences were reached through radio. Iftin FM and community radio carried prime-hour talk shows on child spacing and SGBV, featuring religious leaders and the County RH Coordinator in the local language.",
  },
  {
    key: "C",
    title: "Public pronouncements and releases by renowned personalities",
    text: "Statements by well-known figures spoke of the acceptability, importance and urgency of child spacing — widening support beyond the project's own forums.",
  },
  {
    key: "D",
    title: "Reducing the perception that Islam is against child spacing",
    text: "Rather than contesting the community's faith, the project put religious leaders at the centre of message development. Sheikh Ali Abdi became a child-spacing champion, and the conversation drew on Quranic framing — including the two years of breastfeeding — to show that child spacing is not discouraged by faith.",
  },
  {
    key: "E",
    title: "Partnerships with county government",
    text: "The strides rest on partnerships with the Departments of Health and Gender. Together with like-minded organizations, these partners increased the uptake of child-spacing services, raised awareness of SGBV, and engaged sheikhs, youth, women leaders, political leaders, MCAs and health-care workers.",
  },
];

const PRINCIPLES = [
  {
    k: "Meaningful, inclusive participation — especially men.",
    p: "Every family decision is shaped by women and men together. The advocacy is built on a gendered lens and a firm belief that all voices belong in the journey.",
  },
  {
    k: "Engage women, men, youth, stakeholders, community leaders and decision makers.",
    p: "No one is left outside the conversation — from households to health facilities to the county leadership.",
  },
  {
    k: "Dialogue and investment in people.",
    p: "The work invests in people, works around people's interests and puts its messages in the community's own context and language.",
  },
];

const OUTCOMES = [
  "Increased male involvement in family planning.",
  "Increased support for child spacing among postpartum married Muslim women.",
  "Increased reporting and handling of gender-based violence cases.",
];

const ACHIEVEMENTS = [
  "Heightened awareness of the importance of child spacing across Garissa County.",
  "County leadership acting on postpartum family planning through policy direction.",
  "A stronger culture of reporting postpartum family-planning services.",
  "Facilities providing postpartum family-planning services and counselling.",
  "Sensitization targeting men to increase their involvement in family planning.",
  "Engagement of religious leaders — with a child-spacing champion among them — in the message of child spacing.",
  "Participation of youth, women, religious and political leaders, MCAs and health-care workers.",
  "Child-spacing service uptake increasing from 5% (2018/19 KHDS) to a reported 11% in 2022.",
];

const KIND = {
  natShort: "Kenya",
  garShort: "Garissa",
};

const PPFP = {
  "2020": [
    ["Balambala", "10", "11"],
    ["Dadaab", "23", "28"],
    ["Fafi", "30", "35"],
    ["Garissa", "111", "124"],
    ["Hulugho", "12", "15"],
    ["Ijara", "22", "29"],
    ["Lagdera", "38", "44"],
    ["Garissa County", "246", "286"],
  ],
  "2021": [
    ["Balambala", "17", "54"],
    ["Dadaab", "80", "27"],
    ["Fafi", "85", "14"],
    ["Garissa", "201", "84"],
    ["Hulugho", "11", "13"],
    ["Ijara", "77", "392"],
    ["Lagdera", "36", "24"],
    ["Garissa County", "496", "595"],
  ],
  "2022": [
    ["Balambala", "8", "17"],
    ["Dadaab", "48", "53"],
    ["Fafi", "62", "19"],
    ["Garissa", "88", "76"],
    ["Hulugho", "6", "8"],
    ["Ijara", "61", "250"],
    ["Lagdera", "26", "24"],
    ["Garissa County", "299", "447"],
  ],
};

export default function TopicFamilyPlanning() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicHero
          slides={[
            {
              src: "/images/family-planning-1.jpg",
              alt: "Child spacing and family planning advocacy material from the Garissa programme",
            },
            {
              src: "/images/family-planning-2.jpg",
              alt: "Family planning advocacy imagery from Fountain of Hope's child-spacing work",
            },
          ]}
          ariaLabel="The child-spacing advocacy journey in Garissa County"
          crumbsHere="Child spacing · Advocacy"
          kickerTop="HEALTH · CHILD-SPACING ADVOCACY"
          kickerSub="Garissa County"
          title={
            <>
              A family-planning <em>advocacy journey.</em>
            </>
          }
          sub="How a county with a 5.5% modern contraceptive prevalence rate used culturally and religiously sensitive advocacy — engaging men, religious leaders and county government — to report 11% in child-spacing service uptake by 2022."
        />

        {/* ============ SECTION 1 — THE STORY ============ */}
        <section className="page-lead">
          <div className="wrap page-lead-inner">
            <p>
              This is the story of a missed opportunity in a health system — and
              of the advocacy that answered it. In Garissa County, very low
              contraception use met high fertility, yet women were already coming
              to facilities for antenatal care and childbirth. Fountain of Hope
              and its partners recognised these visits as chances to offer
              postpartum family planning, and built a culture- and faith-sensitive
              advocacy effort around the practice of child spacing. The figures on
              this page are drawn from the programme material and are shown exactly
              as they appear there.
            </p>
          </div>
        </section>

        {/* ============ SECTION 2 — HOW IT ALL BEGAN ============ */}
        <section className="fp-sec" id="story">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">
                How it all began
              </span>
              <h2>
                A 5.5% rate, and the <em>missed opportunity</em> behind it.
              </h2>
              <p>
                The Kenya Demographic and Health Survey (KDHS) of 2014 showed
                Garissa County with the{" "}
                <strong>third lowest contraceptive use in Kenya</strong> — a
                modern contraceptive prevalence rate (mCPR) of 5.5% against high
                fertility. Yet around the same women, the health system was
                already active.
              </p>
            </Reveal>

            <div className="fp-split">
              <Reveal className="fp-split-art">
                <Image
                  src="/images/family-planning-2.jpg"
                  alt="Family-planning advocacy material used in the Garissa child-spacing story"
                  fill
                  sizes="45vw"
                  loading="lazy"
                />
                <div className="cap">The Garissa programme material</div>
              </Reveal>
              <Reveal className="fp-split-txt">
                <h2>
                  Women were already present.{" "}
                  <em>Postpartum family planning was not.</em>
                </h2>
                <p>
                  Most women attended antenatal care — 87.3% made a first visit —
                  and many made a fourth: 47.7%. They arrived at facilities to
                  give birth. But without postpartum family planning (PPFP) data
                  systems or indicators, without direction from health leadership
                  and with providers hardly counselling women at ANC, the moment
                  after birth became a{" "}
                  <strong>missed opportunity</strong>: women left with no avenue
                  to space their next pregnancy.
                </p>
                <p>
                  Family planning had to be reframed in terms the community would
                  hear — and those closest were women who had just given birth.
                  This project exists because of that gap.
                </p>
              </Reveal>
            </div>

            <div className="fp-keys">
              <div className="fp-key">
                <b>5.5%</b>
                <span>
                  Modern contraceptive prevalence rate, KDHS 2014 — third lowest
                  contraceptive use in Kenya.
                </span>
              </div>
              <div className="fp-key">
                <b>94.5%</b>
                <span>
                  Of married women in Garissa were not using a modern
                  contraceptive method at the time of the survey.
                </span>
              </div>
              <div className="fp-key">
                <b>2.4% · 1.5%</b>
                <span>
                  Uptake of injectables and implants respectively — a narrow
                  method mix among the methods in use.
                </span>
              </div>
              <div className="fp-key">
                <b>≈ 25&nbsp;km</b>
                <span>
                  The average distance to a health facility, making return visits
                  a real cost for mothers.
                </span>
              </div>
            </div>

            <div className="fp-subhead">
              <span className="eyebrow eyebrow--paper">What stood in the way</span>
              <h3>
                Barriers named in the <em>source material.</em>
              </h3>
            </div>
            <div className="fp-bars">
              {BARRIERS.map((barrier, i) => (
                <Reveal className="fp-bar-item" key={barrier.title}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{barrier.title}</h4>
                    <p>{barrier.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 3 — WHY ADVOCACY FOR CHILD SPACING ============ */}
        <section className="fp-sec fp-sec--alt">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">
                Why advocacy for child spacing
              </span>
              <h2>
                A sensitive subject, spoken <em>in the community&apos;s own terms.</em>
              </h2>
              <p>
                &ldquo;Family planning&rdquo; was culturally and religiously
                sensitive in Garissa. So the advocacy adopted a phrase communities
                could hold — <strong>child spacing</strong> — and built its health
                message around it.
              </p>
            </Reveal>

            <div className="fp-term">
              <div className="fp-term-col">
                <span className="k">The sensitive term</span>
                <h3>Family planning</h3>
                <p>
                  Accurate in clinical terms, but heavy with cultural and
                  religious overtones in a county that is around 98% Muslim and
                  highly patriarchal. Used alone, it can close the conversation
                  before it starts.
                </p>
              </div>
              <div className="fp-term-col">
                <span className="k">The advocacy language</span>
                <h3>Child spacing</h3>
                <p>
                  Describes allowing a period of rest between births — an ideal of
                  about two to three years — in a way communities can relate to a
                  mother&apos;s health, breastfeeding and caring for the children
                  already at home.
                </p>
              </div>
            </div>

            <div className="fp-reasons">
              {REASONS_TO_SPACE.map((r) => (
                <Reveal className="fp-reason" key={r.n}>
                  <span className="n">{r.n}</span>
                  <p>{r.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 4 — THE GARISSA COUNTY CONTEXT ============ */}
        <section className="fp-sec">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">
                The Garissa County context
              </span>
              <h2>
                Where Garissa stood, <em>beside the national picture.</em>
              </h2>
              <p>
                These indicators framed the challenge the advocacy set out to
                address — a county whose maternal and child-health gap sits in an
                area that is predominantly Muslim, highly patriarchal and far from
                facilities.
              </p>
            </Reveal>

            <Reveal className="fp-table-scroll">
              <table className="fp-table">
                <caption>
                  Garissa reproductive-health indicators —{" "}
                  <span className="src">
                    KDHS 2014, as printed in the programme material ({KIND.natShort} =
                    national; {KIND.garShort} = Garissa County). Bars approximate the
                    ratio between the two.
                  </span>
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Indicator</th>
                    <th scope="col">{KIND.natShort}</th>
                    <th scope="col">{KIND.garShort}</th>
                  </tr>
                </thead>
                <tbody>
                  {KDHS_2014.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="lab">
                        {row.label}
                        <small className="note-sm">{row.note}</small>
                      </th>
                      <td>
                        <span className="num">{row.nat}</span>
                        <span className="bars">
                          <small>{KIND.natShort}</small>
                          <span className="pp pp--nat">
                            <i style={{ width: `${row.natW}%` }} />
                          </span>
                        </span>
                      </td>
                      <td>
                        <span className="num gar">{row.gar}</span>
                        <span className="bars">
                          <small>{KIND.garShort}</small>
                          <span className="pp pp--gar">
                            <i style={{ width: `${row.garW}%` }} />
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <p className="fp-note">
              <strong>Source note:</strong> the Garissa maternal mortality ratio
              additionally references the Kenya Population Situation Analysis
              Report, 2013; the Garissa postnatal-care figure of 39% is recorded
              through DHIS rather than KDHS. The programme&apos;s own narrative
              records skilled birth attendance at 36.7%, while the KDHS table lists
              skilled deliveries at 39.8% — both figures appear in the source and
              are shown here as printed, without reconciliation.
            </p>
          </div>
        </section>

        {/* ============ SECTION 5 — WHY GENDER-LENSED ADVOCACY ============ */}
        <section className="fp-sec fp-sec--alt">
          <div className="wrap">
            <div className="fp-split fp-split--flip">
              <Reveal className="fp-split-art">
                <Image
                  src="/images/Gtu4QgwXEAA6F00.jpg"
                  alt="Grassroots women champions gathering to advocate for maternal and newborn health"
                  fill
                  sizes="45vw"
                  loading="lazy"
                />
                <div className="cap">The gendered lens of the journey</div>
              </Reveal>
              <Reveal className="fp-split-txt">
                <span className="eyebrow eyebrow--paper">
                  Why gender-lensed advocacy
                </span>
                <h2>
                  Child spacing is not a women&apos;s issue alone.{" "}
                  <em>Men shape the decision too.</em>
                </h2>
                <p>
                  Nationally, 47.4% of male partners surveyed in KDHS 2014 did not
                  know about contraception. In Garissa&apos;s patriarchal context,
                  responsibility for childbirth is placed on women, male
                  involvement in reproductive health is &ldquo;very
                  minimal&rdquo;, and men often see involvement as culturally
                  inappropriate. Men also seek health care rarely.
                </p>
                <p>
                  The system itself discouraged them: facilities are named
                  &ldquo;Mother and Child&rdquo;, maternity sections and signage do
                  not welcome men, and provider behaviour reinforces it. The
                  advocacy concluded that service delivery had to be rethought —
                  and that <strong>male involvement had to become part of the
                  child-spacing advocacy effort</strong>.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SECTION 6 — THE ADVOCACY JOURNEY ============ */}
        <section className="fp-sec">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">The advocacy journey</span>
              <h2>
                From a survey finding to <em>county-wide action.</em>
              </h2>
            </Reveal>
            <div className="fp-tl">
              {JOURNEY.map((item) => (
                <Reveal className="fp-tl-item" key={item.title}>
                  <div className="fp-tl-year">{item.year}</div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 7 — THE ADVOCACY STRATEGY ============ */}
        <section className="fp-sec fp-sec--alt">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">The advocacy strategy</span>
              <h2>
                A deliberate process to <em>influence the system.</em>
              </h2>
              <p>
                Advocacy was a strategic series of actions to influence the
                holders of governmental, political, economic and private power —
                a deliberate, calculated process that articulates issues in order
                to inspire, motivate and influence policies and practices. It
                brought together the County Departments of Health and Gender with
                like-minded organizations, led by the project&apos;s community
                champions.
              </p>
            </Reveal>

            <div className="fp-goals">
              {GOALS.map((g) => (
                <Reveal className="fp-goal" key={g.n}>
                  <span className="n">{g.n}</span>
                  <h4>{g.title}</h4>
                  <p>{g.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 8 — ADVOCACY EFFORTS ============ */}
        <section className="fp-sec">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">The advocacy efforts</span>
              <h2>
                Five streams of <em>advocacy, together.</em>
              </h2>
              <p>
                Each effort reinforced the others — informing leaders, widening
                the audience, and embedding the message in faith and government.
              </p>
            </Reveal>

            <div className="fp-efforts">
              {EFFORTS.map((e) => (
                <Reveal className="fp-effort" key={e.key}>
                  <span className="el">{e.key}</span>
                  <div className="fp-effort-txt">
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 9 — GUIDING PRINCIPLES ============ */}
        <section className="fp-sec fp-sec--dark">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--light">Guiding principles</span>
              <h2>
                The lens the journey <em>was read through.</em>
              </h2>
            </Reveal>
            <div className="fp-principles">
              {PRINCIPLES.map((p) => (
                <Reveal className="fp-principle" key={p.k}>
                  <div className="k">{p.k}</div>
                  <p>{p.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 10 — THE RESULTS ============ */}
        <section className="fp-sec">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">The results</span>
              <h2>
                Three advocacy <em>outcomes.</em>
              </h2>
              <p>
                The achievements chapter of the programme material summarises the
                advocacy journey in three outcomes.
              </p>
            </Reveal>
            <div className="fp-ach">
              {OUTCOMES.map((o) => (
                <Reveal className="fp-ach-item" key={o}>
                  <span className="fp-tick" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <p>{o}</p>
                </Reveal>
              ))}
            </div>
            <div className="fp-outcome-extras">
              <p>
                Around these outcomes the journey also raised awareness of the
                importance of child spacing, drew religious leaders — including a
                child-spacing champion — into the message, gave postpartum
                family-planning services real attention in facilities, and created
                space for the sensitive work on gender-based violence.
              </p>
              <p>
                On SGBV, the community-led offensive against gender-based violence
                saw cases in Balambala Sub-County and across the county
                &ldquo;considerably go down&rdquo;. Challenges remained: some
                offenders were relatives or implicated gatekeepers, survivors
                remained reluctant to report, case resolution was poor, and there
                was no psychosocial support and little access to justice.
              </p>
            </div>
            <div className="fp-caveat">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <span>
                <b>The war was far from being won.</b> SGBV cases continued;
                unmet need for family planning remained high; maternal and child
                mortality continued to cause concern; and uptake of family-planning
                commodities and services remained a concern. Fountain of Hope
                remains committed to the journey.
              </span>
            </div>
          </div>
        </section>

        {/* ============ SECTION 11 — 5.5% TO 11% ============ */}
        <section
          className="fp-impact"
          aria-label="Reported progress: from 5.5% to 11%"
        >
          <div className="wrap">
            <span className="eyebrow fp-impact-eyebrow">
              Reported progress · 5.5% to 11%
            </span>
            <div className="fp-impact-nums">
              <div className="fp-impact-num fp-impact-num--src">
                <span className="val">5.5</span>
                <span className="u">%</span>
              </div>
              <div className="fp-impact-arrow" aria-hidden="true">
                →
              </div>
              <div className="fp-impact-num">
                <FpImpact from={5.5} to={11} />
                <span className="u">%</span>
              </div>
            </div>
            <div className="fp-impact-tags">
              <div className="fp-impact-tag">
                <b>KDHS 2014</b>
                Garissa modern contraceptive prevalence rate (mCPR)
              </div>
              <div className="fp-impact-tag">
                <b>2022</b>
                Reported child-spacing service uptake
              </div>
            </div>
            <div className="fp-impact-notes">
              <p>
                The two figures describe different measurements. The{" "}
                <strong>5.5%</strong> is the county&apos;s modern contraceptive
                prevalence rate in KDHS 2014. The <strong>11%</strong> is the
                child-spacing service uptake reported in 2022 — with the
                achievements chapter also citing a <strong>5%</strong> figure from
                the 2018/19 KHDS. They are not a single, continuous trend, and are
                presented here exactly as they appear in the source material.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION 12 — 2020–2022 DATA TABLE ============ */}
        <section className="fp-sec" id="data">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">The service data</span>
              <h2>
                Postpartum family planning, <em>sub-county by sub-county.</em>
              </h2>
              <p>
                Among the programme&apos;s records is a table on&nbsp;
                <strong>&ldquo;Data on Post Partum Family Planning Method
                Uptake — Garissa County&rdquo;</strong>. It counts two measures,
                year by year, across the county&apos;s seven sub-counties.
              </p>
            </Reveal>

            <Reveal className="fp-table-scroll">
              <table className="fp-table">
                <caption>
                  Postpartum FP method uptake — Garissa County, 2020
                  <span className="src">
                    Figures as printed in the programme material — postpartum FP
                    at 4 weeks to 6 weeks, and postpartum FP within 48 hours.
                  </span>
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Sub-county</th>
                    <th scope="col">Postpartum FP · 4 weeks to 6 weeks</th>
                    <th scope="col">Postpartum FP · within 48 hours</th>
                  </tr>
                </thead>
                <tbody>
                  {PPFP["2020"].map((row) => (
                    <tr key={row[0]}>
                      <th scope="row" className="lab">
                        {row[0]}
                      </th>
                      <td>
                        <span className="num">{row[1]}</span>
                      </td>
                      <td>
                        <span className="num">{row[2]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td className="num">246</td>
                    <td className="num">286</td>
                  </tr>
                </tfoot>
              </table>
            </Reveal>

            <Reveal className="fp-table-scroll">
              <table className="fp-table">
                <caption>
                  Postpartum FP method uptake — Garissa County, 2021
                  <span className="src">
                    Figures as printed in the programme material.
                  </span>
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Sub-county</th>
                    <th scope="col">Postpartum FP · 4 weeks to 6 weeks</th>
                    <th scope="col">Postpartum FP · within 48 hours</th>
                  </tr>
                </thead>
                <tbody>
                  {PPFP["2021"].map((row) => (
                    <tr key={row[0]}>
                      <th scope="row" className="lab">
                        {row[0]}
                      </th>
                      <td>
                        <span className="num">{row[1]}</span>
                      </td>
                      <td>
                        <span className="num">{row[2]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td className="num">496</td>
                    <td className="num">595</td>
                  </tr>
                </tfoot>
              </table>
            </Reveal>

            <Reveal className="fp-table-scroll">
              <table className="fp-table">
                <caption>
                  Postpartum FP method uptake — Garissa County, 2022
                  <span className="src">
                    Figures as printed in the programme material.
                  </span>
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Sub-county</th>
                    <th scope="col">Postpartum FP · 4 weeks to 6 weeks</th>
                    <th scope="col">Postpartum FP · within 48 hours</th>
                  </tr>
                </thead>
                <tbody>
                  {PPFP["2022"].map((row) => (
                    <tr key={row[0]}>
                      <th scope="row" className="lab">
                        {row[0]}
                      </th>
                      <td>
                        <span className="num">{row[1]}</span>
                      </td>
                      <td>
                        <span className="num">{row[2]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td className="num">299</td>
                    <td className="num">447</td>
                  </tr>
                </tfoot>
              </table>
            </Reveal>

            <p className="fp-note">
              County totals are reproduced <strong>as printed</strong> in the
              source table without recalculation.
            </p>
          </div>
        </section>

        {/* ============ SECTION 13 — ACHIEVEMENTS AT COUNTRY LEVEL ============ */}
        <section className="fp-sec fp-sec--alt">
          <div className="wrap">
            <div className="fp-split">
              <Reveal className="fp-split-art">
                <Image
                  src="/images/GNKt-HEWkAAT0d-.jpg"
                  alt="Grassroots women health champions engaging with a health partner"
                  fill
                  sizes="45vw"
                  loading="lazy"
                />
                <div className="cap">The journey within a wider commitment</div>
              </Reveal>
              <Reveal className="fp-split-txt">
                <span className="eyebrow eyebrow--paper">
                  Achievements at country level
                </span>
                <h2>
                  Aligned with a national <em>commitment to Northern Kenya.</em>
                </h2>
                <p>
                  The project operated in alignment with the{" "}
                  <strong>FP2020 Kenya Country Action Plan</strong>, in which
                  Kenya committed to broadening access to and choice of family
                  planning — with a special focus on the Arid and Semi-Arid Lands
                  (ASAL), including Northern Kenya, where Garissa lies.
                </p>
                <p>
                  Within that commitment, two programmatic actions anchored the
                  work: building the capacity of facility providers to deliver
                  postpartum family planning, and increasing demand for — and
                  access to — family-planning services. The advocacy journey on
                  this page sits inside that wider national story.
                </p>
              </Reveal>
            </div>

            <div className="fp-ach">
              {ACHIEVEMENTS.map((a) => (
                <div className="fp-ach-item" key={a}>
                  <span className="fp-tick" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION 14 — CLOSING ============ */}
        <section className="fp-sec">
          <div className="wrap">
            <Reveal className="fp-sechead">
              <span className="eyebrow eyebrow--paper">What the journey shows</span>
              <h2>
                Systems move when the community <em>speaks to them.</em>
              </h2>
              <p>
                A low contraceptive prevalence rate was not the end of the story —
                it became the start of one. The journey shows that advocacy works
                when it is culturally and religiously respectful, when men and
                women are engaged together, when faith leaders are partners rather
                than obstacles, and when community voices reach government.
              </p>
            </Reveal>
            <div className="fp-closing">
              <p>
                From a county circular to a maternity-shelter counselling room,
                from Iftin FM to a Quranic framing of breastfeeding, a community
                and its county government built a shared language for child
                spacing. The reported 11% is a marker of that journey — and the
                war is far from won.
              </p>
              <p>
                The figures on this page are the programme&apos;s figures. The
                work continues.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics related={[TOPICS[4], TOPICS[5]]} />

        <TopicCta message="The story of Garissa's child-spacing journey is Fountain of Hope's founding work — join the women, men and religious leaders who continue it." />
      </main>

      <SiteFooter />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}