import Link from "next/link";
import { Scene09FireDriftPart1 } from "@/components/screenplay/scene-09-fire-drift-part-1";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 9 — earlier",
  description:
    "EXT. forest clearing, night — back at the fire; lines repeat; distance won’t stay fixed.",
};

export default function Scene9Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-08"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 8
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 9 · 48–56 · Fire drift (part 1)
          </p>
        </div>

        <ScreenplayShell>
          <Scene09FireDriftPart1 />
        </ScreenplayShell>
      </div>
    </main>
  );
}
