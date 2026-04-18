import Link from "next/link";
import { Scene14DelayedAwareness } from "@/components/screenplay/scene-14-delayed-awareness";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 14 — earlier",
  description:
    "EXT. forest clearing, night — refined: embers, delayed recognition, Nora calm; not the same version of what happened.",
};

export default function Scene14Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-12"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 12
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 14 · 105–118 · Dark night (refined)
          </p>
        </div>

        <ScreenplayShell>
          <Scene14DelayedAwareness />
        </ScreenplayShell>
      </div>
    </main>
  );
}
