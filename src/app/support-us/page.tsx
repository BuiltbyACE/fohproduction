import Link from "next/link";
import makeMetadata from "@/lib/seo";
import { TOPICS } from "@/lib/topics";
import HomeImpact from "@/components/home-impact";
import RelatedTopics from "@/components/related-topics";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SupportAction from "@/components/support-action";

export const metadata = makeMetadata({
  path: "/support-us",
  type: "website",
  title: "Support Maternal Health in Garissa, Kenya",
  description:
    "Support Fountain of Hope's work on maternal health, girls' education and community resilience in Garissa, Kenya. Contact our team about giving or partnering.",
});

export default function SupportUsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section
          className="topics"
          style={{ paddingTop: "clamp(8rem, 12vw, 10rem)" }}
        >
          <div className="wrap topic-head">
            <span className="eyebrow eyebrow--light">Support the work</span>
            <h1 className="h2">
              Support maternal health and girls&apos; education in Garissa, Kenya
            </h1>
            <p>
              Your support funds health workers, school supplies and livelihoods
              for some of Kenya&apos;s most vulnerable communities.
            </p>
          </div>
        </section>

        <HomeImpact />

        <section className="fn-section">
          <div className="wrap">
            <h2 className="sr-only">Ways to support Fountain of Hope</h2>
            <div className="info-grid">
              <div className="fn-card">
                <h3>Give</h3>
                <p>
                  Giving is arranged directly with our team. Send us your
                  details and we will get in touch.
                </p>
                <SupportAction
                  type="donate"
                  className="btn btn--pink"
                >
                  Contact us about giving
                </SupportAction>
              </div>
              <div className="fn-card">
                <h3>Partner</h3>
                <p>
                  We work with government, health institutions and community
                  partners to reach the people of Garissa.
                </p>
                <SupportAction type="partner" className="btn btn--ghost">
                  Partner with us
                </SupportAction>
              </div>
              <div className="fn-card">
                <h3>Talk to us</h3>
                <p>
                  Prefer to speak to someone first? Find our offices, phone
                  number and email.
                </p>
                <Link className="btn btn--ghost" href="/contact">
                  Contact details
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedTopics related={[TOPICS[0], TOPICS[1]]} />
      </main>

      <SiteFooter />
    </>
  );
}
