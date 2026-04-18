"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PreFooterSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_65%)]" />
      <div className="site-container relative grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
        <div className="font-heading text-[clamp(2.5rem,8vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[0.02em] text-zinc-100">
          <span className="block">Audiences</span>
          <span className="block">don&apos;t</span>
          <span className="block">remember</span>
          <span className="block">notes.</span>
          <span className="block">They</span>
          <span className="block">remember</span>
          <span className="block">faces.</span>
        </div>
        <div className="flex flex-col gap-6 md:max-w-md md:justify-end">
          <p className="body-md text-zinc-500">( N°2 )</p>
          <p className="body-md text-zinc-400">
            Discover essays, playlists, and interviews from the people who built
            earlier — from location sound to the final grade.
          </p>
          <Link
            href="#story"
            className="font-heading inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-zinc-100"
          >
            Read the story
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
