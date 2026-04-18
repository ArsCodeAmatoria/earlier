import Link from "next/link";
import { Scene17MemoryBleed } from "@/components/screenplay/scene-17-memory-bleed";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 17 — earlier",
  description:
    "EXT. forest, night — laughter around them; a flash of clearing and fire; Nora denies every sight and sound.",
};

export default function Scene17Page() {
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
            Scene 17 · 147–162 · Finale (memory)
          </p>
        </div>

        <ScreenplayShell>
          <Scene17MemoryBleed />
        </ScreenplayShell>
      </div>
    </main>
  );
}
