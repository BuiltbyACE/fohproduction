import Link from "next/link";
import makeMetadata from "@/lib/seo";
import {
  ORG_EMAIL,
  ORG_OFFICES,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_TEL,
} from "@/lib/organization";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SupportAction from "@/components/support-action";

export const metadata = makeMetadata({
  path: "/contact",
  type: "website",
  title: "Contact Us: Garissa and Nairobi Offices",
  description:
    "Contact Fountain of Hope, a woman-led NGO with offices in Garissa County and in Kilimani, Nairobi. Call, email or send a partnership enquiry.",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section
          className="topics"
          style={{ paddingTop: "clamp(8rem, 12vw, 10rem)" }}
        >
          <div className="wrap topic-head">
            <span className="eyebrow eyebrow--light">Contact</span>
            <h1 className="h2">Contact Fountain of Hope in Garissa and Nairobi</h1>
            <p>
              Reach our team by phone or email, or send an enquiry about working
              with us.
            </p>
          </div>
        </section>

        <section className="fn-section">
          <div className="wrap">
            <h2 className="sr-only">Our offices and contact details</h2>
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
          </div>
        </section>

        <section className="cta">
          <Reveal className="cta-in">
            <span className="eyebrow">Work with us</span>
            <h2>
              Partner with the women who <em>lead this change.</em>
            </h2>
            <p>
              Tell us about your organization and we will get back to you.
            </p>
            <div className="ctas">
              <SupportAction type="partner" className="btn btn--pink">
                Send a partnership enquiry
              </SupportAction>
              <Link className="btn btn--ghost" href="/support-us">
                Ways to support us
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
