"use client";

import { useContact } from "@/components/site/contact-provider";
import { CONTACT_EMAIL, CONTACT_INTRO } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { openContact } = useContact();

  return (
    <section
      id="contact"
      className="site-container border-t border-zinc-800 py-20 md:py-28"
    >
      <h2 className="type-display-lg text-3xl md:text-4xl">Contact</h2>
      <p className="body-md mt-6 max-w-2xl text-pretty text-zinc-400">
        {CONTACT_INTRO} For{" "}
        <span className="font-logo-script text-zinc-200">earlier</span>, reach us below.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={openContact}
          className={cn(
            "type-display-md border border-zinc-600 bg-transparent px-6 py-4 text-sm text-zinc-100 transition-colors hover:border-zinc-400",
          )}
        >
          Open contact
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={cn(
            "type-display-md inline-flex items-center border border-zinc-800 px-6 py-4 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200",
          )}
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
