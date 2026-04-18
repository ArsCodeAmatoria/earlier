"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const lineDelay = 0.06;

/** Intrinsic pixels — true poster aspect ratio (816:1456) */
const POSTER_WIDTH = 816;
const POSTER_HEIGHT = 1456;

const credits = [
  { lines: ["Written and directed by", "Jordan Ellis"] },
  { lines: ["Starring", "Riley Chen  ·  Maren Okorie"] },
  { lines: ["Director of photography", "Sam Okonkwo"] },
  { lines: ["Music by", "Theo Park"] },
  { lines: ["An Earlier Pictures release"] },
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

      <div className="site-container relative flex min-h-[min(92dvh,52rem)] flex-col justify-center px-4 py-20 md:min-h-[calc(100dvh-5rem)] md:py-24">
        <motion.div
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-start md:gap-14 lg:gap-20"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            hidden: {},
          }}
        >
          {/* Poster — left on desktop, first on mobile (swapped from text-first stack) */}
          <motion.figure
            variants={fadeUp}
            className="order-1 w-full max-w-[min(78vw,300px)] shrink-0 self-center sm:max-w-[320px] md:order-1 md:max-w-[min(42vw,360px)] md:self-start lg:max-w-[380px]"
          >
            <Image
              src="/images/earlierposter.png"
              alt="earlier — film poster"
              width={POSTER_WIDTH}
              height={POSTER_HEIGHT}
              className="h-auto w-full"
              sizes="(max-width: 768px) 78vw, 380px"
              priority
            />
          </motion.figure>

          {/* Copy + billing — right on desktop, second on mobile */}
          <motion.div
            variants={fadeUp}
            className="order-2 flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left"
          >
            <motion.div
              className="flex w-full max-w-lg flex-col items-center md:items-start"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: lineDelay, delayChildren: 0.1 } },
                hidden: {},
              }}
            >
              <motion.p
                variants={fadeUp}
                className="type-display-md mb-4 text-[0.65rem] tracking-[0.35em] text-zinc-600 md:text-xs"
              >
                Feature film
              </motion.p>

              <h1 id="page-heading" className="w-full">
                <motion.span
                  variants={fadeUp}
                  className="type-display-xl block text-[clamp(2.75rem,9vw,4.5rem)] leading-[0.9] tracking-[0.02em] text-zinc-50 md:text-[clamp(2.5rem,5vw,4rem)]"
                >
                  earlier
                </motion.span>
                <motion.span
                  variants={fadeUp}
                  className="type-display-lg mt-2 block text-[clamp(1rem,3vw,1.5rem)] text-zinc-500"
                >
                  a film
                </motion.span>
              </h1>

              <motion.p
                variants={fadeUp}
                className="font-serif mt-8 max-w-[28ch] text-base italic leading-relaxed text-zinc-400 md:text-lg"
              >
                Memory lingers where the light used to be.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 w-full max-w-[min(100%,19rem)] border-t border-white/[0.12] pt-8 md:mt-auto md:pt-10"
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
                © earlier pictures
              </p>
            </motion.div>
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
