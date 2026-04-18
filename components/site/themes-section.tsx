"use client";

import { motion } from "motion/react";

const blocks = [
  {
    title: "Night shoots?",
    body: "We built the schedule around blue hour and streetlight — the film lives in those hours when everything looks like a memory.",
  },
  {
    title: "Weather turned?",
    body: "Snow became part of the blocking. We rewrote scenes on location instead of fighting the sky.",
  },
  {
    title: "Scene won’t land?",
    body: "We rehearsed in the real spaces — kitchens, motels, parking lots — until the camera could disappear.",
  },
  {
    title: "Need one more beat?",
    body: "The edit holds room for breath. If a look says enough, we don’t cover it with dialogue.",
  },
];

export function ThemesSection() {
  return (
    <section className="mx-auto mt-28 max-w-[min(100%-1.5rem,90rem)] md:mt-36">
      <div className="max-w-2xl">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          ( On set )
        </p>
        <h2 className="font-heading mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-zinc-50 md:text-4xl">
          Every film is different. We stayed in tune.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-400">
          Trust the crew: directors, DP, sound, and the small army that keeps a
          set honest when the day runs long and the temperature drops.
        </p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-12">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            className="border-t border-zinc-800 pt-6"
          >
            <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.06em] text-zinc-100">
              {b.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              {b.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
