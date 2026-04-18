"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContact } from "@/components/site/contact-provider";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#characters", label: "Characters" },
  { href: "/#sets", label: "Sets" },
  { href: "/script", label: "Screenplay" },
];

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isScript = href === "/script";
  const active = isScript && pathname.startsWith("/script");

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "type-display-md text-sm transition-colors",
        active
          ? "text-zinc-100"
          : "text-zinc-500",
        "bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-bottom bg-no-repeat hover:bg-size-[100%_1px] hover:text-zinc-100",
      )}
    >
      {label}
    </Link>
  );
}

export function StickyHeader() {
  const [open, setOpen] = useState(false);
  const { openContact } = useContact();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="site-container flex min-h-[3.75rem] items-center justify-between gap-4 py-3.5 md:min-h-[4.5rem] md:py-4">
        <Link
          href="/"
          className="site-header-wordmark shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
          aria-label="earlier — home"
        >
          e*
        </Link>

        <nav
          className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-2 md:flex lg:gap-x-8"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <button
            type="button"
            onClick={openContact}
            className={cn(
              "type-display-md text-sm text-zinc-500",
              "bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-bottom bg-no-repeat transition-all hover:bg-size-[100%_1px] hover:text-zinc-100",
            )}
          >
            Contact
          </button>
        </nav>

        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-zinc-100"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </Button>
            <SheetContent
              side="right"
              className="border-zinc-800 bg-[#0a0a0a] text-zinc-100"
            >
              <SheetHeader>
                <SheetTitle className="type-display-lg text-left text-xl">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-8" aria-label="Mobile">
                {nav.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
                <button
                  type="button"
                  className="type-display-lg text-left text-2xl leading-none text-zinc-100"
                  onClick={() => {
                    setOpen(false);
                    openContact();
                  }}
                >
                  Contact
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
