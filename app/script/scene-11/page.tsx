import Link from "next/link";
import { Scene11MidpointConfrontation } from "@/components/screenplay/scene-11-midpoint-confrontation";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 11 — earlier",
  description:
    "EXT. forest clearing, night — midpoint: Leanne presses Nora; laughter again; they’re not in the same place.",
};

export default function Scene11Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-09"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 9
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 11 · 67–78 · Midpoint
          </p>
        </div>

        <ScreenplayShell>
          <Scene11MidpointConfrontation />
        </ScreenplayShell>
      </div>
    </main>
  );
}
