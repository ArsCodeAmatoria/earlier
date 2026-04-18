"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const lineDelay = 0.06;

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-28">
      <div className="mx-auto grid max-w-[min(100%-1.5rem,90rem)] gap-10 md:grid-cols-2 md:gap-6 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="relative aspect-[14/9] w-full overflow-hidden rounded-sm md:max-h-[min(70vh,520px)]">
            <Image
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          </div>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
            earlier is a film built for the quiet, demanding space between memory
            and the present. Years in the making, it follows two lives trying to
            meet in the middle of everything that came before.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10">
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
                      "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat transition-all hover:bg-[length:100%_1px] hover:text-zinc-200",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.h1
            className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] font-semibold uppercase leading-[0.92] tracking-[0.02em] text-zinc-50"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: lineDelay } },
              hidden: {},
            }}
          >
            <TitleLine>Before</TitleLine>
            <TitleLine>midnight,</TitleLine>
            <TitleLine className="flex flex-wrap items-end gap-3">
              <span>no</span>
              <span className="relative inline-block aspect-[47/25] w-[min(42vw,220px)] shrink-0 overflow-hidden rounded-sm md:w-[240px]">
                <Image
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </span>
            </TitleLine>
            <TitleLine>looking back.</TitleLine>
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
        hidden: { opacity: 0, y: 24 },
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
