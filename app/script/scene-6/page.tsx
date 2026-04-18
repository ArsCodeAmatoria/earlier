import Link from "next/link";
import { Scene06PostCookingShift } from "@/components/screenplay/scene-06-post-cooking-shift";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 6 — earlier",
  description:
    "EXT. forest clearing, dusk — after cooking, the fire low, the clearing tight, lines that don’t land.",
};

export default function Scene6Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-06"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 6
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 6 · 21–24 · Break into Act 2
          </p>
        </div>

        <ScreenplayShell>
          <Scene06PostCookingShift />
        </ScreenplayShell>
      </div>
    </main>
  );
}
