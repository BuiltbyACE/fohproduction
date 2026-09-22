import makeMetadata from "@/lib/seo";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import OurStoryHero from "@/components/our-story-hero";
import WhoWeAre from "@/components/who-we-are";
import StoryTimeline from "@/components/story-timeline";
import ValuesSection from "@/components/values-section";
import BeliefsSection from "@/components/beliefs-section";
import WorkHealth from "@/components/work-health";
import WorkEducation from "@/components/work-education";
import WorkResilience from "@/components/work-resilience";
import AdvocacySection from "@/components/advocacy-section";
import FounderSection from "@/components/founder-section";
import FieldGallery from "@/components/field-gallery";
import FutureSection from "@/components/future-section";
import StoryCta from "@/components/story-cta";

export const metadata = makeMetadata({
  path: "/our-story",
  title:
    "Our story — Fountain of Hope, Garissa County, Kenya",
  description:
    "Founded by a daughter of Garissa, for the women of Northern Eastern. The story of Fountain of Hope — from 2017 to the future we are building together.",
});

export default function OurStoryPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <OurStoryHero />
        <WhoWeAre />
        <StoryTimeline />
        <ValuesSection />
        <BeliefsSection />
        <WorkHealth />
        <WorkEducation />
        <WorkResilience />
        <AdvocacySection />
        <FounderSection />
        <FieldGallery />
        <FutureSection />
        <StoryCta />
      </main>

      <SiteFooter />
    </>
  );
}