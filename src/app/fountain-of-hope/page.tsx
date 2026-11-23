import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import {
  CANONICAL_ORIGIN,
  SITE_NAME,
  logoUrl,
} from "@/lib/seo";
import {
  ORG_DESCRIPTION,
  ORG_EMAIL,
  ORG_FOCUS_AREAS,
  ORG_FOUNDER,
  ORG_FOUNDING_DATE,
  ORG_NAME,
  ORG_OFFICES,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_TEL,
  ORG_SLOGAN,
  SOCIAL_PROFILES,
} from "@/lib/organization";
import { IMPACT_HIGHLIGHTS } from "@/lib/portfolio-data";

const PAGE_PATH = "/fountain-of-hope";
const PAGE_URL = `${CANONICAL_ORIGIN}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "Fountain of Hope Kenya | Official Website" },
  description:
    "Discover Fountain of Hope Kenya, our organisation, mission, programmes and commitment to making a meaningful difference in our community. Visit our official website.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_KE",
    url: PAGE_URL,
    title: "Fountain of Hope Kenya | Official Website",
    description:
      "Discover Fountain of Hope Kenya, our organisation, mission, programmes and commitment to making a meaningful difference in our community. Visit our official website.",
    images: [
      {
        url: `${CANONICAL_ORIGIN}/og/default.jpg`,
        width: 1200,
        height: 630,
        alt: "Fountain of Hope Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Fountain_FOH",
    title: "Fountain of Hope Kenya | Official Website",
    description:
      "Discover Fountain of Hope Kenya, our organisation, mission, programmes and commitment to making a meaningful difference in our community. Visit our official website.",
    images: [`${CANONICAL_ORIGIN}/og/default.jpg`],
  },
};

const VALUES = [
  { name: "Community Ownership", description: "The work belongs to the community it serves." },
  { name: "Integrity", description: "We do what we say, in full view of the people we serve." },
  { name: "Compassion", description: "Every program begins from dignity and care." },
  { name: "Transparency", description: "Open books, open conversations, open partnerships." },
  { name: "Collaboration", description: "Change is built together, never alone." },
];

const BELIEFS = [
  "Gender lensed advocacy efforts",
  "Safeguarding all",
  "Child protection",
  "Peaceful co-existence",
  "Environmental",
];

const PROGRAMMES = [
  "Okoa Mama na Mtoto — maternal and newborn health advocacy",
  "Girls' education, menstrual health and school retention",
  "Gender-based violence prevention and survivor support",
  "Family planning and child-spacing advocacy",
  "Pastoralist community education and resilience",
  "School nutrition and early childhood education support",
];

export default function FountainOfHopeLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${CANONICAL_ORIGIN}/#organization`,
        name: ORG_NAME,
        alternateName: ["Fountain of Hope Garissa", "Fountain of Hope Organisation"],
        url: CANONICAL_ORIGIN,
        description: ORG_DESCRIPTION,
        slogan: ORG_SLOGAN,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          contentUrl: logoUrl,
        },
        image: logoUrl,
        foundingDate: ORG_FOUNDING_DATE,
        founder: {
          "@type": "Person",
          name: ORG_FOUNDER,
          jobTitle: "Founder and Director",
        },
        address: ORG_OFFICES.map((office) => ({
          "@type": "PostalAddress",
          ...("streetAddress" in office ? { streetAddress: office.streetAddress } : {}),
          addressLocality: office.addressLocality,
          addressRegion: office.addressRegion,
          addressCountry: "KE",
        })),
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "AdministrativeArea", name: "Garissa County" },
        ],
        knowsAbout: ORG_FOCUS_AREAS,
        email: ORG_EMAIL,
        telephone: ORG_PHONE_TEL,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "general inquiries",
          email: ORG_EMAIL,
          telephone: ORG_PHONE_TEL,
          areaServed: "KE",
          availableLanguage: ["English", "Swahili"],
        },
        sameAs: [
          ...(SOCIAL_PROFILES.find((profile) => profile.icon === "x")
            ? [SOCIAL_PROFILES.find((profile) => profile.icon === "x")!.url]
            : []),
          ...SOCIAL_PROFILES.filter(
            (profile) => profile.icon !== "x" && profile.icon !== "youtube",
          ).map((profile) => profile.url),
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${CANONICAL_ORIGIN}/#website`,
        url: CANONICAL_ORIGIN,
        name: ORG_NAME,
        description: ORG_DESCRIPTION,
        inLanguage: "en-KE",
        publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": PAGE_URL,
        url: PAGE_URL,
        name: "Fountain of Hope Kenya | Official Website",
        description:
          "Discover Fountain of Hope Kenya, our organisation, mission, programmes and commitment to making a meaningful difference in our community. Visit our official website.",
        inLanguage: "en-KE",
        isPartOf: { "@id": `${CANONICAL_ORIGIN}/#website` },
        about: { "@id": `${CANONICAL_ORIGIN}/#organization` },
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main>
        <section className="topics" style={{ paddingTop: "clamp(8rem, 12vw, 10rem)" }}>
          <div className="wrap topic-head">
            <span className="eyebrow eyebrow--light">Official website</span>
            <h1 className="h2">Fountain of Hope Kenya</h1>
            <p>
              {ORG_DESCRIPTION} Founded in {ORG_FOUNDING_DATE} by {ORG_FOUNDER}, we are a
              woman-led community organisation working beside the people of Garissa County,
              Kenya.
            </p>
            <div className="hero-ctas" style={{ justifyContent: "center", marginTop: "1.75rem" }}>
              <Link className="btn btn--pink" href="/">
                Visit our official website
              </Link>
              <Link className="btn btn--ghost" href="/our-story">
                Our story
              </Link>
            </div>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">Who we are</span>
              <h2>About Fountain of Hope</h2>
              <p>
                Fountain of Hope is a woman-led, community-rooted organisation based in
                Garissa County, Kenya. We work with pastoralist communities on maternal and
                newborn health, girls&apos; education, menstrual health, gender-based
                violence prevention, family planning advocacy and community resilience.
                Under the leadership of our founder, {ORG_FOUNDER}, the organisation has
                grown into a community-rooted movement guided by a 2024–2029 strategic
                plan built on three pillars: health, education and community resilience.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">Our mission</span>
              <h2>{ORG_SLOGAN}</h2>
              <p>
                Our guiding commitment is that no mother should die while giving birth. We
                work beside health leaders, women of faith, young women and village
                volunteers to make that commitment real across Garissa County.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">Our programmes</span>
              <h2>What we do</h2>
            </Reveal>
            <ul className="os-beliefs-list">
              {PROGRAMMES.map((programme, i) => (
                <Reveal className="os-belief" key={programme}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{programme}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">Our impact</span>
              <h2>Documented community impact</h2>
              <p>
                Fountain of Hope&apos;s work is grounded in documented interventions and
                community partnerships across Garissa County and beyond.
              </p>
            </Reveal>
            <div className="hi-grid">
              {IMPACT_HIGHLIGHTS.map((item) => (
                <Reveal className="hi-card" key={item.label}>
                  <div className="hi-val">
                    <span className="hi-num">{item.value.toLocaleString("en-US")}</span>
                  </div>
                  <p className="hi-label">{item.label}</p>
                  <span className="hi-source">{item.source}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">Our values</span>
              <h2>How we work matters.</h2>
            </Reveal>
            <div className="os-values-grid">
              {VALUES.map((value, i) => (
                <Reveal className="os-value" key={value.name}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{value.name}</h3>
                  <p>{value.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">What we stand for</span>
              <h2>We strongly believe in</h2>
            </Reveal>
            <ul className="os-beliefs-list">
              {BELIEFS.map((belief, i) => (
                <Reveal className="os-belief" key={belief}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{belief}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <Reveal className="os-sechead">
              <span className="eyebrow eyebrow--paper">Contact</span>
              <h2>Contact Fountain of Hope</h2>
            </Reveal>
            <div className="info-grid">
              {ORG_OFFICES.map((office) => (
                <div className="fn-card" key={office.name}>
                  <h3>{office.name}</h3>
                  <address style={{ fontStyle: "normal" }}>
                    <p>{office.display}</p>
                  </address>
                </div>
              ))}
              <div className="fn-card">
                <h3>Call or email</h3>
                <p>
                  <a href={`tel:${ORG_PHONE_TEL}`}>{ORG_PHONE_DISPLAY}</a>
                </p>
                <p>
                  <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>
                </p>
              </div>
            </div>
            <p style={{ marginTop: "1.5rem" }}>
              Official website:{" "}
              <a href={CANONICAL_ORIGIN} target="_blank" rel="noopener noreferrer">
                {CANONICAL_ORIGIN.replace("https://", "")}
              </a>
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {SOCIAL_PROFILES.map((profile) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  {profile.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <Reveal className="cta-in">
            <span className="eyebrow">Official website</span>
            <h2>
              Visit the <em>Fountain of Hope</em> official website.
            </h2>
            <p>
              Explore our stories, programmes and ways to support the work of Fountain of
              Hope in Garissa, Kenya.
            </p>
            <div className="ctas">
              <Link className="btn btn--pink" href="/">
                Go to the official website
              </Link>
              <Link className="btn btn--ghost" href="/topics">
                Browse our topics
              </Link>
              <Link className="btn btn--ghost" href="/support-us">
                Support the work
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
