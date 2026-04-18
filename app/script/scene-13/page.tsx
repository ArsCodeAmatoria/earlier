import Link from "next/link";
import { Scene13Disappearance } from "@/components/screenplay/scene-13-disappearance";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 13 — earlier",
  description:
    "EXT. forest clearing, night — Leanne walks into the trees; Maya and Nora don’t agree what happened.",
};

export default function Scene13Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-11"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 11
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 13 · 93–104 · All is lost
          </p>
        </div>

        <ScreenplayShell>
          <Scene13Disappearance />
        </ScreenplayShell>
      </div>
    </main>
  );
}
