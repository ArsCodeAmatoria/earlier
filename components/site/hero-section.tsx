"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const lineDelay = 0.07;

export function HeroSection() {
  return (
    <section
      className="site-container flex min-h-[min(100dvh,56rem)] flex-col justify-center py-16 md:min-h-[calc(100dvh-5rem)] md:py-24"
      aria-labelledby="page-heading"
    >
      <motion.h1
        className="max-w-[22ch]"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: lineDelay } },
          hidden: {},
        }}
        id="page-heading"
      >
        <TitleLine className="type-display-xl text-[clamp(2.5rem,11vw,7rem)] leading-[0.88] text-zinc-50">
          earlier
        </TitleLine>
        <TitleLine className="type-display-lg mt-2 text-[clamp(1.25rem,3vw,2rem)] text-zinc-500">
          a film
        </TitleLine>
        <TitleLine className="font-sans mt-8 max-w-[26ch] normal-case text-[clamp(1rem,2.5vw,1.35rem)] leading-relaxed font-normal tracking-[0.02em] text-zinc-400">
          memory lingers where the light used to be
        </TitleLine>
      </motion.h1>
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
