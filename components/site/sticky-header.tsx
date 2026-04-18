"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ContactDialog } from "@/components/site/contact-dialog";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
];

export function StickyHeader() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[min(100%-1.5rem,90rem)] items-center justify-between md:h-16">
        <Link
          href="/"
          className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-zinc-100 transition-colors hover:text-white"
        >
          earlier
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-heading text-sm font-medium uppercase tracking-[0.14em] text-zinc-400",
                "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat transition-all hover:bg-[length:100%_1px] hover:text-zinc-100",
              )}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className={cn(
              "font-heading cursor-pointer text-sm font-medium uppercase tracking-[0.14em] text-zinc-400",
              "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat transition-all hover:bg-[length:100%_1px] hover:text-zinc-100",
            )}
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-zinc-100"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
              <span className="sr-only">Menu</span>
            </Button>
            <SheetContent
              side="right"
              className="border-zinc-800 bg-[#0a0a0a] text-zinc-100"
            >
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-zinc-100">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-heading text-lg font-semibold uppercase tracking-[0.12em]"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="font-heading text-left text-lg font-semibold uppercase tracking-[0.12em]"
                  onClick={() => {
                    setOpen(false);
                    setContactOpen(true);
                  }}
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </header>
  );
}
