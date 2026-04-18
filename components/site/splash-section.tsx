"use client";

import Image from "next/image";

export function SplashSection() {
  return (
    <section className="site-container my-20 md:my-28">
      <div className="relative aspect-[200/132] w-full max-md:aspect-[4/5]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent md:bg-gradient-to-r"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6 md:justify-center md:p-12 lg:p-16">
          <p className="font-heading max-w-xl text-balance text-2xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-white md:text-3xl lg:text-4xl">
            Every cut is different.
          </p>
          <p className="font-heading max-w-xl text-balance text-2xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-white md:text-3xl lg:text-4xl">
            We always stay in tune.
          </p>
        </div>
      </div>
    </section>
  );
}
