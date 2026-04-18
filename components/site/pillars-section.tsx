"use client";

import Image from "next/image";
import { motion } from "motion/react";

const items = [
  {
    n: "1",
    title: "Flawless\nexecution",
    body: "Every detail is handled. Every deadline met. No stress, no scrambling — just a crew that makes sure the day rolls exactly as planned. Every time.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "2",
    title: "Safety-first\nstandards",
    body: "From the road to the set, safety is at the heart of what we do. Experienced team, clear protocols, and zero guesswork when the schedule is tight.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "3",
    title: "Solution\noriented",
    body: "We sync with your timeline, your challenges, and your priorities. We don’t just react — we anticipate. We are your road crew.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
  },
];

export function PillarsSection() {
  return (
    <section className="site-container my-28 md:my-40">
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
              <span className="text-xs tracking-[0.12em] text-zinc-600">
                ( {item.n} )
              </span>
              <h3 className="type-display-md max-w-[13rem] whitespace-pre-line text-right text-base leading-tight text-zinc-100 md:text-lg">
                {item.title}
              </h3>
            </div>
            <p className="body-md mt-6 text-zinc-400">
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
