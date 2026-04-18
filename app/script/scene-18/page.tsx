import Link from "next/link";
import { Scene18LoopSpatialBreak } from "@/components/screenplay/scene-18-loop-spatial-break";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 18 — earlier",
  description:
    "EXT. forest, night — roots, spacing, and the path refuse to lock; the space flickers; Nora says no to every anchor.",
};

export default function Scene18Page() {
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
            Scene 18 · 163–178 · Finale (spatial)
          </p>
        </div>

        <ScreenplayShell>
          <Scene18LoopSpatialBreak />
        </ScreenplayShell>
      </div>
    </main>
  );
}
