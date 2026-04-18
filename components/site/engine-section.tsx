"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export function EngineSection() {
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <>
      <section id="story" className="site-container my-24 md:my-32">
        <div className="grid md:grid-cols-12 md:gap-6 lg:gap-10">
          <div className="md:col-span-5 lg:col-end-6">
            <h2 className="type-display-lg max-w-[22rem] text-2xl leading-tight text-zinc-100 md:text-3xl">
              The engine of every show.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-6 lg:gap-10">
          <div className="md:col-span-5">
            <div className="relative aspect-[8/5] w-full max-w-2xl overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-black/25" />
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => setTrailerOpen(true)}
                className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                aria-label="Watch trailer"
              >
                <Play className="size-7 fill-current" />
              </Button>
            </div>
          </div>

          <motion.div
            className="inview-border md:col-span-7 md:col-start-7 lg:border-t-0 lg:border-l lg:border-zinc-800 lg:pl-10 xl:pl-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="type-display-md text-xs text-zinc-500 md:text-sm">
              What we do
            </p>
            <p className="type-display-lg mt-6 text-2xl leading-snug text-zinc-100 md:text-3xl">
              We don&apos;t just shoot scenes. We make sure everything lands{" "}
              <strong className="text-white">when it matters most.</strong>
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
              <p className="body-md text-zinc-400">
                We don&apos;t just deliver dailies. We make sure picture and sound
                arrive with intention — professionally, consistently, and on
                schedule.
              </p>
              <p className="body-md text-zinc-400">
                Our team understands tours, festivals, and long roads. We plan
                every leg, stay close to your crew, and adapt when the day throws a
                curve — so the film never runs late.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Dialog open={trailerOpen} onOpenChange={setTrailerOpen}>
        <DialogContent className="max-w-lg border-zinc-800 bg-[#121212] text-zinc-100">
          <DialogHeader>
            <DialogTitle className="font-heading text-lg uppercase tracking-wider">
              Trailer
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-md bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <p className="font-heading px-6 text-center text-sm uppercase tracking-[0.2em] text-zinc-200">
                Trailer coming soon
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-500">
            Drop in your Vimeo or YouTube embed when the cut is ready.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
