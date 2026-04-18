"use client";

import Image from "next/image";
import { motion } from "motion/react";

const stats = [
  { value: "35", label: "Shoot days" },
  { value: "4", label: "Provinces & states visited" },
  { value: "100%", label: "On location interiors" },
  { value: "24/7", label: "Post & score pipeline" },
];

export function StatsSection() {
  return (
    <section className="relative mx-auto mt-28 max-w-[min(100%-1.5rem,90rem)] md:mt-40">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            earlier
            <br />
            A film
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
            We kept the footprint small and the circle tight — the same people from
            first scout to final color. When the story is fragile, the process has
            to be steady.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="font-heading text-4xl font-semibold tabular-nums text-zinc-50 md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 max-w-[12rem] text-xs uppercase leading-snug tracking-[0.12em] text-zinc-500">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-[5/4]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
