import { StickyHeader } from "@/components/site/sticky-header";
import { HeroSection } from "@/components/site/hero-section";
import { EngineSection } from "@/components/site/engine-section";
import { BigTypeSection } from "@/components/site/big-type-section";
import { PillarsSection } from "@/components/site/pillars-section";
import { ThemesSection } from "@/components/site/themes-section";
import { StatsSection } from "@/components/site/stats-section";
import { GallerySection } from "@/components/site/gallery-section";
import { CtaSection } from "@/components/site/cta-section";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="focus:bg-background focus:text-foreground sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
      >
        Access to main content
      </a>
      <StickyHeader />
      <main id="main" className="pb-16">
        <HeroSection />
        <EngineSection />
        <BigTypeSection />
        <PillarsSection />
        <ThemesSection />
        <StatsSection />
        <GallerySection />
        <CtaSection />
      </main>
    </>
  );
}
