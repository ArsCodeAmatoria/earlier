"use client";

import Link from "next/link";

const rail = (
  <>
    <span className="font-heading pb-[0.05em] text-2xl font-semibold uppercase md:text-3xl">
      It&apos;s a
    </span>
    <span className="mx-3 inline-flex size-10 items-center justify-center rounded-full border border-current md:mx-4 md:size-12">
      <span className="text-xs font-bold">e</span>
    </span>
    <span className="font-heading pb-[0.05em] text-2xl font-semibold uppercase md:text-3xl">
      wrap
    </span>
    <span className="ml-6 flex flex-col items-center text-center text-[0.65rem] font-medium uppercase leading-tight tracking-[0.14em] md:ml-10 md:text-xs">
      <span>earlier</span>
      <span>Independent</span>
      <span>Film.</span>
    </span>
  </>
);

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0a] pb-12 text-zinc-400">
      <div className="border-b border-zinc-800 py-4">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-l flex items-center gap-6 pr-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={`a-${i}`} className="flex items-center gap-6">
                {rail}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-r flex items-center gap-6 pr-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={`b-${i}`} className="flex items-center gap-6">
                {rail}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
        <ul className="space-y-10">
          <li>
            <p className="body-lg font-heading font-medium text-zinc-100">
              Montreal
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="body-md mt-2 block opacity-70 transition-opacity hover:opacity-100"
            >
              2195 Boul. Hymus,
              <br />
              Dorval, QC
              <br />
              H9P 1J8
            </a>
            <a
              href="tel:+15144210045"
              className="body-md mt-2 block opacity-70 transition-opacity hover:opacity-100"
            >
              514-421-0045
            </a>
          </li>
          <li>
            <p className="body-lg font-heading font-medium text-zinc-100">
              Nashville
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="body-md mt-2 block opacity-70 transition-opacity hover:opacity-100"
            >
              1554 JP Hennessy
              <br />
              La Vergne, TN
              <br />
              37086
            </a>
            <a
              href="tel:+15144210045"
              className="body-md mt-2 block opacity-70 transition-opacity hover:opacity-100"
            >
              514-421-0045
            </a>
          </li>
        </ul>

        <div className="space-y-10">
          <div>
            <p className="body-lg font-heading text-zinc-100">Move.</p>
            <p className="body-lg mt-2 max-w-[15rem] text-balance opacity-60">
              Get your screening on the calendar. Clear and on point.
            </p>
            <Link
              href="mailto:festivals@earlier.film"
              className="font-heading mt-6 inline-flex border border-zinc-600 px-4 py-3 text-xs uppercase tracking-[0.14em] text-zinc-100 transition-colors hover:border-zinc-400"
            >
              Start your request
            </Link>
          </div>
          <div>
            <p className="body-lg font-heading text-zinc-100">Join.</p>
            <p className="body-lg mt-2 max-w-[15rem] text-balance opacity-60">
              Work behind the scenes of the stories we want to tell next.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li>
                <Link
                  href="#"
                  className="font-heading inline-flex border border-zinc-600 px-4 py-3 text-xs uppercase tracking-[0.14em] text-zinc-100 transition-colors hover:border-zinc-400"
                >
                  Crew list
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-heading inline-flex border border-zinc-600 px-4 py-3 text-xs uppercase tracking-[0.14em] text-zinc-100 transition-colors hover:border-zinc-400"
                >
                  Open roles
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="body-lg font-heading text-zinc-100">Social.</p>
          <p className="body-md mt-2 opacity-60">Follow the film.</p>
          <ul className="mt-6 space-y-2">
            <li>
              <a
                href="#"
                className="body-md uppercase tracking-wider opacity-80 hover:opacity-100"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="body-md uppercase tracking-wider opacity-80 hover:opacity-100"
              >
                Letterboxd
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-container flex flex-col gap-4 border-t border-zinc-800 pt-8 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
        <p className="font-heading uppercase tracking-[0.14em] text-zinc-500">
          earlier
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="#" className="hover:text-zinc-400">
            Privacy
          </Link>
          <span>Layout inspired by Truck&apos;N Roll / Locomotive</span>
        </div>
      </div>
    </footer>
  );
}
