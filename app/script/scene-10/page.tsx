import Link from "next/link";
import { Scene10FireDriftPart2 } from "@/components/screenplay/scene-10-fire-drift-part-2";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 10 — earlier",
  description:
    "EXT. forest clearing, night — the fire thins; the ghost story shifts; nobody agrees what was said.",
};

export default function Scene10Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-10"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 10
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 10 · 57–66 · Fire drift (part 2) / Bad guys close in
          </p>
        </div>

        <ScreenplayShell>
          <Scene10FireDriftPart2 />
        </ScreenplayShell>
      </div>
    </main>
  );
}
