"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const lineDelay = 0.06;

export function HeroSection() {
  return (
    <section className="site-container relative pt-24 md:pt-28">
      <div className="grid gap-10 md:grid-cols-2 md:gap-6 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="relative aspect-[14/9] w-full overflow-hidden md:max-h-[min(70vh,520px)]">
            <Image
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 to-transparent" />
          </div>
          <p className="body-md max-w-xl text-pretty text-zinc-400">
            earlier is a film built for the fast, demanding space between memory
            and the present. For years we&apos;ve followed two lives trying to meet
            in the middle of everything that came before.
          </p>
        </div>

        <div className="flex min-h-0 flex-col justify-between gap-12 md:min-h-[min(85vh,760px)]">
          <nav className="hidden md:block">
            <ul className="flex flex-wrap gap-x-10 gap-y-2">
              {[
                { href: "#story", label: "Story" },
                { href: "#gallery", label: "Gallery" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-heading text-sm font-medium uppercase tracking-[0.14em] text-zinc-500",
                      "bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-bottom bg-no-repeat transition-all hover:bg-size-[100%_1px] hover:text-zinc-200",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.h1
            className="font-heading text-[clamp(2.85rem,9.2vw,5.85rem)] font-semibold uppercase not-italic leading-[0.9] tracking-[0.06em] text-zinc-50"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: lineDelay } },
              hidden: {},
            }}
            id="page-heading"
          >
            <TitleLine>FULL</TitleLine>
            <TitleLine>FRAMES,</TitleLine>
            <TitleLine className="flex flex-wrap items-end gap-3 md:gap-5">
              <span>NO</span>
              <span className="relative inline-block aspect-[47/25] w-[min(46vw,260px)] shrink-0 overflow-hidden md:w-[min(18vw,280px)]">
                <Image
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </span>
            </TitleLine>
            <TitleLine>REGRETS.</TitleLine>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

function TitleLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={cn("block", className)}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.span>
  );
}
