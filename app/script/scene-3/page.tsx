import Link from "next/link";
import { Scene03ClearingArrival } from "@/components/screenplay/scene-03-clearing-arrival";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 3 — earlier",
  description:
    "EXT. forest clearing — the group arrives; space, history, and an unexplained laugh.",
};

export default function Scene3Page() {
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
            Scene 3 · 5–7 · Set-Up
          </p>
        </div>

        <ScreenplayShell>
          <Scene03ClearingArrival />
        </ScreenplayShell>
      </div>
    </main>
  );
}
