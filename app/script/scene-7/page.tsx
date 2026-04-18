import Link from "next/link";
import { Scene07FireNight } from "@/components/screenplay/scene-07-fire-night";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 7 — earlier",
  description:
    "EXT. forest clearing, night — only the fire, the ghost story fragment, and laughter no one admits to.",
};

export default function Scene7Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-07"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 7
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 7 · 25–40 · B story / Fun & games / Midpoint
          </p>
        </div>

        <ScreenplayShell>
          <Scene07FireNight />
        </ScreenplayShell>
      </div>
    </main>
  );
}
