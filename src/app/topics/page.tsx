import makeMetadata from "@/lib/seo";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TopicsSection from "@/components/topic-cards";

export const metadata = makeMetadata({
  path: "/topics",
  type: "website",
  title: "Health and Education Stories from Garissa",
  description:
    "Field stories from Fountain of Hope in Garissa, Kenya: maternal health, child spacing and family planning, girls' education and gender-based violence.",
});

export default function TopicsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="topics" style={{ paddingTop: "clamp(8rem, 12vw, 10rem)" }}>
          <div className="wrap">
            <div className="topic-head">
              <span className="eyebrow eyebrow--light">The topics</span>
              <h1 className="h2">
                Health and education stories from Garissa, Kenya
              </h1>
              <p>
                Every story from our field notes: the photographs, the
                conversation, and what it means for Garissa.
              </p>
            </div>
            <TopicsSection />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
