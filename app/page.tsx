import { StickyHeader } from "@/components/site/sticky-header";
import { HeroSection } from "@/components/site/hero-section";
import { EngineSection } from "@/components/site/engine-section";
import { BigTypeSection } from "@/components/site/big-type-section";
import { PillarsSection } from "@/components/site/pillars-section";
import { SplashSection } from "@/components/site/splash-section";
import { UseCasesSection } from "@/components/site/use-cases-section";
import { LightStackSection } from "@/components/site/light-stack-section";
import { GallerySection } from "@/components/site/gallery-section";
import { PreFooterSection } from "@/components/site/pre-footer-section";
import { SiteFooter } from "@/components/site/site-footer";

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
      <main id="main">
        <HeroSection />
        <EngineSection />
        <BigTypeSection />
        <PillarsSection />
        <SplashSection />
        <UseCasesSection />
        <LightStackSection />
        <GallerySection />
        <PreFooterSection />
        <SiteFooter />
      </main>
    </>
  );
}
