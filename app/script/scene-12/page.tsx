import Link from "next/link";
import { Scene12ArgumentEscalation } from "@/components/screenplay/scene-12-argument-escalation";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 12 — earlier",
  description:
    "EXT. forest clearing, night — the argument tightens; the pop wasn’t loud; five minutes ago wasn’t five minutes.",
};

export default function Scene12Page() {
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
            Scene 12 · 79–92 · Bad guys close in
          </p>
        </div>

        <ScreenplayShell>
          <Scene12ArgumentEscalation />
        </ScreenplayShell>
      </div>
    </main>
  );
}
