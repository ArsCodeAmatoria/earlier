import { HeroSection } from "@/components/site/hero-section";
import { CharactersSection } from "@/components/site/characters-section";
import { SetsSection } from "@/components/site/sets-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/** Skip link: off-screen until keyboard focus; opens below header so it never covers the logo. */}
      <a
        href="#main"
        className={cn(
          "sr-only",
          "focus-visible:not-sr-only focus-visible:fixed focus-visible:left-1/2 focus-visible:z-[60] focus-visible:-translate-x-1/2",
          "focus-visible:top-[calc(env(safe-area-inset-top,0px)+5.5rem)]",
          "focus-visible:rounded-md focus-visible:border focus-visible:border-zinc-600 focus-visible:bg-zinc-900 focus-visible:px-4 focus-visible:py-2",
          "focus-visible:text-sm focus-visible:text-zinc-100 focus-visible:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
        )}
      >
        Skip to main content
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
