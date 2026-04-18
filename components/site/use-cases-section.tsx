"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "Night Shift?",
    hint: "It's what we do!",
    a: "Round-the-clock energy when the schedule demands it — night exteriors, load-ins, and the small hours when the film finds its tone.",
  },
  {
    q: "Weather reroutes?",
    hint: "We react before it's a problem.",
    a: "Rain, wind, or snow — we adjust the plan in real time so the shoot stays on track without losing the scene.",
  },
  {
    q: "Venue change mid-shoot?",
    hint: "We adapt on the fly.",
    a: "New location, new call sheet — we re-block fast and keep the crew aligned so nothing falls through.",
  },
  {
    q: "Need to add a stop?",
    hint: "Consider it done.",
    a: "An extra day or pickup window — we fold it into the schedule without breaking the rest of the run.",
  },
  {
    q: "Our footprint?",
    hint: "Efficiency for the film… and for the crew.",
    a: "Lean travel, clear communication, and respect for everyone’s time — so the work stays human when the days run long.",
  },
];

export function UseCasesSection() {
  return (
    <section
      className="site-container mb-20 md:mb-28"
      aria-labelledby="use-cases-heading"
    >
      <h2 id="use-cases-heading" className="sr-only">
        Use cases
      </h2>

      <div className="grid gap-10 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-10 lg:gap-x-12">
        <p className="body-md order-2 max-w-[20rem] md:order-none md:row-span-2 md:flex md:max-w-[22rem] md:flex-col md:justify-end md:pb-2">
          We don&apos;t just show up. We arrive prepared, committed, and thinking
          several steps ahead. That&apos;s what makes the difference when the film
          is on the line.
        </p>

        <div className="order-1 md:order-none md:col-start-2 md:row-start-1">
          <div className="grid grid-cols-2 gap-x-6 lg:gap-x-10">
            <p className="body-md text-zinc-500">( Use Cases )</p>
            <p className="body-md max-w-[17rem] text-zinc-400">
              Trust our team of collaborators and keep the work human when the day
              runs long.
            </p>
          </div>
        </div>

        <div className="order-3 md:order-none md:col-span-1 md:col-start-2 md:row-start-2">
          <div className="divide-y divide-zinc-800 border-t border-zinc-800">
            {items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="type-display-md text-base leading-tight text-zinc-100 md:text-lg">
                      {item.q}
                    </span>
                    <span className="body-lg font-heading font-normal text-zinc-500 uppercase tracking-[0.04em]">
                      {item.hint}
                    </span>
                  </span>
                  <span className="mt-1 shrink-0 text-zinc-500" aria-hidden>
                    <Plus className="size-5 group-open:hidden" strokeWidth={1.25} />
                    <Minus
                      className="hidden size-5 group-open:block"
                      strokeWidth={1.25}
                    />
                  </span>
                </summary>
                <div className="pb-5">
                  <p className={cn("body-lg max-w-2xl text-zinc-400")}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
