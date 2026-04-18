"use client";

import Image from "next/image";
import { motion } from "motion/react";

const shots = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cedd3d5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598899134739-72460cd3ff45?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524712246154-150b4b5e8f0c?auto=format&fit=crop&w=800&q=80",
];

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto mt-28 max-w-[min(100%-1.5rem,90rem)] md:mt-36">
      <h2 className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
        Stills
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shots.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:640px) 100vw, 25vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
