"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const lineDelay = 0.07;

/** Intrinsic pixels — keeps true poster aspect ratio (816:1456) */
const POSTER_WIDTH = 816;
const POSTER_HEIGHT = 1456;

export function HeroSection() {
  return (
    <section
      className="site-container flex min-h-[min(100dvh,56rem)] flex-col justify-center gap-12 py-16 md:min-h-[calc(100dvh-5rem)] md:flex-row md:items-center md:gap-14 md:py-24 lg:gap-20"
      aria-labelledby="page-heading"
    >
      <motion.div
        className="max-w-[22ch] shrink-0 md:flex-1"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: lineDelay } },
          hidden: {},
        }}
      >
        <h1 id="page-heading">
          <TitleLine className="type-display-xl text-[clamp(2.5rem,11vw,7rem)] leading-[0.88] text-zinc-50">
            earlier
          </TitleLine>
          <TitleLine className="type-display-lg mt-2 text-[clamp(1.25rem,3vw,2rem)] text-zinc-500">
            a film
          </TitleLine>
          <TitleLine className="font-sans mt-8 max-w-[26ch] normal-case text-[clamp(1rem,2.5vw,1.35rem)] leading-relaxed font-normal tracking-[0.02em] text-zinc-400">
            memory lingers where the light used to be
          </TitleLine>
        </h1>
      </motion.div>

      <motion.div
        className="flex w-full justify-center md:w-auto md:justify-end md:shrink-0"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <figure className="w-full max-w-[min(72vw,280px)] sm:max-w-[300px] md:max-w-[min(38vw,340px)] lg:max-w-[380px]">
          <Image
            src="/images/earlierposter.png"
            alt="earlier — film poster"
            width={POSTER_WIDTH}
            height={POSTER_HEIGHT}
            className="h-auto w-full shadow-2xl shadow-black/50"
            sizes="(max-width: 768px) 72vw, (max-width: 1024px) 38vw, 380px"
            priority
          />
        </figure>
      </motion.div>
    </section>
  );
}

function TitleLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={cn("block", className)}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.span>
  );
}
