"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="mx-auto mt-28 max-w-[min(100%-1.5rem,90rem)] pb-8 md:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-zinc-800 pt-16"
      >
        <h2 className="font-heading max-w-2xl text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-zinc-50 md:text-4xl">
          Ready? Let’s talk festivals and screenings.
        </h2>
        <p className="mt-6 max-w-xl text-zinc-400">
          Book a conversation about bringing earlier to your audience — from
          premiere week through regional runs.
        </p>
        <Link
          href="mailto:festivals@earlier.film"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "font-heading mt-10 inline-flex h-12 rounded-none px-8 uppercase tracking-[0.14em]",
          )}
        >
          Plan a screening
        </Link>
      </motion.div>

      <div className="mt-24 grid gap-12 border-t border-zinc-800 pt-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
            Audiences
            <br />
            don’t remember
            <br />
            exposition.
            <br />
            They remember
            <br />
            names.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
            ( N°2 )
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            Discover the world behind the camera — interviews, playlists, and
            essays from the team.
          </p>
          <Link
            href="#story"
            className="font-heading mt-4 inline-block text-sm uppercase tracking-[0.14em] text-zinc-200 underline-offset-4 hover:underline"
          >
            Read the story
          </Link>
        </div>
        <div className="lg:col-span-2">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
            Production
          </p>
          <ul className="mt-4 space-y-4 text-sm text-zinc-400">
            <li>
              <span className="text-zinc-200">Montreal</span>
              <br />
              2195 Boul. Example, QC — office &amp; post
            </li>
            <li>
              <span className="text-zinc-200">Nashville</span>
              <br />
              1554 JP Hennessy La Vergne, TN — field production
            </li>
          </ul>
        </div>
      </div>

      <footer className="mt-20 flex flex-col gap-8 border-t border-zinc-800 pt-10 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p className="font-heading uppercase tracking-[0.14em]">earlier</p>
        <div className="flex flex-wrap gap-6">
          <Link href="#" className="hover:text-zinc-300">
            Privacy
          </Link>
          <span>Site inspired by Truck&apos;N Roll — built for earlier</span>
        </div>
      </footer>
    </section>
  );
}
