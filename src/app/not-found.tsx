import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="topics" style={{ paddingTop: "clamp(8rem, 12vw, 10rem)" }}>
          <div className="wrap topic-head">
            <span className="eyebrow eyebrow--light">Page not found</span>
            <h1 className="h2">We could not find that page.</h1>
            <p>It may have moved. These links will take you back to the work.</p>
            <div
              className="hero-ctas"
              style={{ justifyContent: "center", marginTop: "1.75rem" }}
            >
              <Link className="btn btn--pink" href="/topics">
                Browse all topics
              </Link>
              <Link className="btn btn--ghost" href="/">
                Back to the home page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
