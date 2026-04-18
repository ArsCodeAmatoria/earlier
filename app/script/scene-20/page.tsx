import Link from "next/link";
import { Scene20FinalSearchCollapse } from "@/components/screenplay/scene-20-final-search-collapse";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 20 — earlier",
  description:
    "EXT. forest, night — Leanne wasn’t there; Nora: you were; ringtone everywhere then mid-cut; wrong space.",
};

export default function Scene20Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-14"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 14
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 20 · 197–216 · Finale (collapse)
          </p>
        </div>

        <ScreenplayShell>
          <Scene20FinalSearchCollapse />
        </ScreenplayShell>
      </div>
    </main>
  );
}
