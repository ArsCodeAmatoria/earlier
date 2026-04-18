import Link from "next/link";
import { Scene04SetupTentsFire } from "@/components/screenplay/scene-04-setup-tents-fire";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 4 — earlier",
  description:
    "EXT. forest clearing, late afternoon — tents, fire pit, and what was agreed before.",
};

export default function Scene4Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-03"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 3
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 4 · 8–12 · Set-Up
          </p>
        </div>

        <ScreenplayShell>
          <Scene04SetupTentsFire />
        </ScreenplayShell>
      </div>
    </main>
  );
}
