import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0a] py-10 text-sm text-zinc-600">
      <div className="site-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-zinc-500">
          © <span className="font-logo-script text-zinc-400">earlier</span>
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/script"
            className="type-display-md text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Screenplay
          </Link>
          <Link
            href="#characters"
            className="type-display-md text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Characters
          </Link>
          <Link
            href="#contact"
            className="type-display-md text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
