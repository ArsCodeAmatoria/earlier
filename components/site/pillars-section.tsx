"use client";

import Image from "next/image";
import { motion } from "motion/react";

const items = [
  {
    n: "1",
    title: "Stillness\nas pace",
    body: "Long takes and quiet rooms let the performances breathe. Nothing is rushed — the edit follows emotion, not clock time.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "2",
    title: "Place as\ncharacter",
    body: "Snow, neon, and empty highways are not backdrop — they push the story when words fail. We shot seasons as they arrived.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "3",
    title: "Sound-first\nmemory",
    body: "Score and room tone carry what the characters won’t say. The mix is built so you feel the past before you see it.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
  },
];

export function PillarsSection() {
  return (
    <section className="mx-auto mt-28 max-w-[min(100%-1.5rem,90rem)] md:mt-40">
      <div className="grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-10">
        {items.map((item, i) => (
          <motion.article
            key={item.n}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-zinc-800 pt-8"
          >
            <div className="font-heading flex items-start justify-between gap-4">
              <span className="text-sm text-zinc-600">( {item.n} )</span>
              <h3 className="max-w-[12rem] whitespace-pre-line text-right text-xl font-semibold uppercase leading-tight tracking-[0.06em] text-zinc-100">
                {item.title}
              </h3>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400 md:text-base">
              {item.body}
            </p>
            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
