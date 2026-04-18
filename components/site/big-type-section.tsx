"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function BigTypeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative mt-24 overflow-hidden md:mt-40">
      <div className="relative mx-auto max-w-[min(100%-1.5rem,90rem)]">
        <h2 className="sr-only">We hold the light forward</h2>

        <div className="flex flex-col gap-2 md:gap-4">
          <HugeLine>We</HugeLine>
          <HugeLine className="flex flex-wrap items-center gap-4 md:gap-8">
            <span>hold</span>
            <span className="relative aspect-[154/58] w-[min(72vw,520px)] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1540&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="520px"
              />
            </span>
          </HugeLine>
          <HugeLine>the</HugeLine>
          <HugeLine>light.</HugeLine>
        </div>

        <motion.div
          className="pointer-events-none absolute right-0 bottom-0 hidden w-[min(38%,420px)] md:block"
          style={{ y: y1 }}
        >
          <div className="relative aspect-[3/10] w-full overflow-hidden rounded-sm opacity-90">
            <Image
              src="https://images.unsplash.com/photo-1518676590629-3fe9a22733e3?auto=format&fit=crop&w=900&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="420px"
            />
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
          <p className="font-heading max-w-[10rem] text-xs uppercase leading-relaxed tracking-[0.12em] text-zinc-500">
            ESTD. 2026
            <br />
            INDEPENDENT
            <br />
            © earlier
          </p>
          <div className="max-w-xl space-y-4">
            <p className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              ( Three threads )
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              We build the film around restraint — long silences, roads that don’t
              end, and the small choices that rewrite a life. That’s what keeps the
              story honest when the past shows up uninvited.
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
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`font-heading text-[clamp(2.5rem,11vw,8rem)] font-semibold uppercase leading-[0.9] tracking-[0.02em] text-zinc-100 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
