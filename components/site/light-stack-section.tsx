"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "35+", label: "Shoot days on the road" },
  { value: "4", label: "Provinces & territories filmed" },
  { value: "100%", label: "Practical light interiors" },
  { value: "24/7", label: "Post & score in lockstep" },
];

export function LightStackSection() {
  return (
    <div className="relative bg-zinc-200 text-zinc-950">
      <section className="site-container py-14 md:py-20">
        <span className="sr-only">A small crew that never sleeps</span>
        <h2
          className="font-heading flex flex-wrap gap-x-[0.2em] gap-y-1 text-3xl font-semibold uppercase leading-[1.05] tracking-[0.03em] md:text-4xl lg:text-5xl"
          aria-hidden
        >
          <span>A</span>
          <span>quiet</span>
          <span>network</span>
        </h2>
        <div className="relative mx-auto my-8 aspect-[92/58] w-full max-w-3xl overflow-hidden rounded-sm md:my-10">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 768px"
          />
        </div>
        <h2
          className="font-heading flex flex-wrap gap-x-[0.2em] gap-y-1 text-3xl font-semibold uppercase leading-[1.05] tracking-[0.03em] md:text-4xl lg:text-5xl"
          aria-hidden
        >
          <span>That</span>
          <span>never</span>
          <span>cuts away.</span>
        </h2>
      </section>

      <section className="site-container pb-16 md:pb-20">
        <div
          className="flex flex-col gap-12 border-t border-zinc-400/80 pt-12 md:flex-row md:items-start md:justify-between md:gap-16"
          data-border-parent
        >
          <div className="max-w-xs space-y-4">
            <p className="body-md font-heading leading-snug font-medium uppercase tracking-[0.12em]">
              earlier
              <br />
              A film
            </p>
            <p className="body-md max-w-[10rem] text-zinc-700">
              We kept the circle tight — the same people from scout to final
              grade. When the story is fragile, the process stays steady.
            </p>
          </div>
          <ul className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-y-12">
            {stats.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="font-heading text-3xl font-semibold tabular-nums md:text-4xl">
                  {s.value}
                </p>
                <p className="body-md mt-2 max-w-[11rem] text-zinc-700">
                  {s.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-container pb-16 md:pb-24">
        <div className="relative grid gap-8 md:grid-cols-12 md:items-end md:gap-6 lg:gap-10">
          <div className="relative aspect-[200/132] md:col-span-7 md:min-h-[280px] lg:col-span-8">
            <div className="absolute inset-0 overflow-hidden rounded-br-[3rem] md:rounded-br-[4rem]">
              <Image
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=2000&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 55vw"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <h2 className="font-heading max-w-[14ch] text-2xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-3xl">
              <span className="text-balance">Ready?</span>{" "}
              <span className="text-balance">Let&apos;s talk screenings.</span>
            </h2>
            <p className="body-md mt-4 max-w-sm text-zinc-700">
              Tell us about your festival, cinema, or premiere — we&apos;ll connect
              you with the team.
            </p>
            <Link
              href="mailto:festivals@earlier.film"
              className={cn(
                "font-heading mt-8 inline-flex w-full max-w-sm items-center justify-between gap-4 border border-zinc-900 bg-zinc-900 px-5 py-4 text-sm font-medium uppercase tracking-[0.14em] text-zinc-50 transition-colors hover:bg-zinc-950 md:px-6",
              )}
            >
              <span>Plan your screening</span>
              <ArrowRight className="size-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
