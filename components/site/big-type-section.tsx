"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function BigTypeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <section ref={ref} className="relative mt-16 overflow-hidden md:mt-24">
      <div className="site-container relative">
        <h2 className="sr-only">We move the story forward</h2>

        <div className="flex flex-col gap-1 md:gap-2">
          <HugeLine>We</HugeLine>
          <HugeLine className="flex flex-wrap items-center gap-3 md:gap-6 lg:gap-10">
            <span>Move</span>
            <span className="relative aspect-[154/58] w-[min(78vw,560px)] overflow-hidden rounded-sm md:w-[min(52vw,640px)]">
              <Image
                src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1540&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="640px"
              />
            </span>
          </HugeLine>
          <HugeLine>Shows</HugeLine>
          <HugeLine>Forward.</HugeLine>
        </div>

        <motion.div
          className="pointer-events-none absolute right-0 bottom-8 hidden w-[min(36%,400px)] md:block lg:bottom-12"
          style={{ y: y1 }}
        >
          <div className="relative aspect-[3/10] w-full overflow-hidden rounded-sm opacity-90">
            <Image
              src="https://images.unsplash.com/photo-1518676590629-3fe9a22733e3?auto=format&fit=crop&w=900&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-8 md:mt-20 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="font-heading max-w-40 text-xs uppercase leading-relaxed tracking-[0.14em] text-zinc-500">
            ESTD. 2026
            <br />
            INDEPENDENT
            <br />
            © earlier
          </p>
          <div className="max-w-xl space-y-4">
            <p className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              ( Three key steps )
            </p>
            <p className="body-md text-zinc-400">
              We anticipate the challenges of a long production in advance. That
              discipline is what makes the difference when the film has to hold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HugeLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "font-heading text-[clamp(2.4rem,12vw,8.25rem)] font-semibold uppercase leading-[0.88] tracking-[0.03em] text-zinc-100",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
