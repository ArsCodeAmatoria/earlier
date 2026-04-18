"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HeroSongPlayer } from "@/components/site/hero-song-player";
import { FILMING_LOCATIONS_PLACES, LOGLINE, PRODUCTION_COMPANY } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

const lineDelay = 0.06;

/** Intrinsic pixels — earlierpst2.png aspect ratio (1456×816, landscape) */
const POSTER_WIDTH = 1456;
const POSTER_HEIGHT = 816;

const credits = [
  { lines: ["Written by", "Leigh Akin"] },
  { lines: ["Filmed in", FILMING_LOCATIONS_PLACES] },
  { lines: ["Starring", "Riley Chen  ·  Maren Okorie"] },
  { lines: ["Director of photography", "Sam Okonkwo"] },
  { lines: ["Music by", "Theo Park"] },
  { lines: ["Production company", PRODUCTION_COMPANY] },
] as const;

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#060606]"
      aria-labelledby="page-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.07),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(0,0,0,0.5),transparent_45%)]" />

      <div className="site-container relative flex min-h-[min(92dvh,52rem)] flex-col items-center justify-center px-4 py-20 md:min-h-[calc(100dvh-5rem)] md:py-24">
        <motion.div
          className="flex w-full max-w-5xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: lineDelay, delayChildren: 0.05 } },
            hidden: {},
          }}
        >
          <motion.p
            variants={fadeUp}
            className="type-display-md mx-auto mb-4 max-w-3xl text-[0.65rem] tracking-[0.35em] text-zinc-600 md:text-xs"
          >
            Indie Film
          </motion.p>

          <h1 id="page-heading" className="mx-auto w-full max-w-3xl">
            <motion.span
              variants={fadeUp}
              className="type-display-xl block text-[clamp(3.5rem,16vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-zinc-50"
            >
              earlier
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="type-display-lg mt-3 block text-[clamp(1.15rem,3.5vw,1.75rem)] text-zinc-500"
            >
              a film
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="body-md mx-auto mt-8 max-w-3xl text-pretty leading-relaxed text-zinc-400 md:text-lg"
          >
            {LOGLINE}
          </motion.p>

          <motion.figure
            variants={fadeUp}
            className="relative mt-12 w-full max-w-[min(94vw,560px)] sm:max-w-[640px] md:max-w-[min(88vw,800px)] lg:max-w-[min(90rem,960px)]"
          >
            <Image
              src="/images/earlierpst2.png"
              alt="earlier — film poster"
              width={POSTER_WIDTH}
              height={POSTER_HEIGHT}
              className="h-auto w-full"
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 88vw, 960px"
              priority
            />
          </motion.figure>

          <motion.div variants={fadeUp} className="mt-10 w-full">
            <HeroSongPlayer className="mx-auto" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 w-full max-w-[min(100%,19rem)] border-t border-white/[0.12] pt-8"
          >
            <div className="space-y-5 font-sans">
              {credits.map((block, i) => (
                <div key={i} className="space-y-1.5">
                  {block.lines.map((line, j) => (
                    <p
                      key={j}
                      className={cn(
                        "leading-snug text-zinc-500",
                        j === 0
                          ? "text-[0.55rem] uppercase tracking-[0.2em] text-zinc-600"
                          : "text-[0.65rem] uppercase tracking-[0.14em] text-zinc-400",
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <p className="type-display-md mt-8 text-[0.5rem] tracking-[0.32em] text-zinc-700">
              © {PRODUCTION_COMPANY}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};
