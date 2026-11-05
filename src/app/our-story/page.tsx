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
    "About Us: Woman-Led NGO in Garissa, Kenya",
  description:
    "Founded in 2017 by Fardosa Osman, Fountain of Hope is a woman-led NGO in Garissa, Kenya advancing maternal health, girls' education and community resilience.",
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