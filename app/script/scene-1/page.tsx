import Link from "next/link";
import { Scene01RoadPullOff } from "@/components/screenplay/scene-01-road-pull-off";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 1 — earlier",
  description:
    "EXT. rural road near Hope — Leanne, Maya, and Nora in the car.",
};

export default function Scene1Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-01"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 1
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 1 · 1–2 · Opening Image
          </p>
        </div>

        <ScreenplayShell>
          <Scene01RoadPullOff />
        </ScreenplayShell>
      </div>
    </main>
  );
}
