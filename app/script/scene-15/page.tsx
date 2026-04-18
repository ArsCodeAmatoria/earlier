import Link from "next/link";
import { Scene15SearchBegins } from "@/components/screenplay/scene-15-search-begins";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 15 — earlier",
  description:
    "Clearing to forest, night — flashlight, ringtone, Nora denies; not lost, not located.",
};

export default function Scene15Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-13"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 13
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 15 · 119–132 · Break into Act 3
          </p>
        </div>

        <ScreenplayShell>
          <Scene15SearchBegins />
        </ScreenplayShell>
      </div>
    </main>
  );
}
