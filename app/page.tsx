import { HeroSection } from "@/components/site/hero-section";
import { CharactersSection } from "@/components/site/characters-section";
import { SetsSection } from "@/components/site/sets-section";
import { ContactSection } from "@/components/site/contact-section";
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
      <main id="main">
        <HeroSection />
        <CharactersSection />
        <SetsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}
