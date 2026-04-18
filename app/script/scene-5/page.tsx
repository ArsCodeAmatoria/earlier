import Link from "next/link";
import { Scene05CookingJoy } from "@/components/screenplay/scene-05-cooking-joy";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 5 — earlier",
  description:
    "EXT. forest clearing, late afternoon — cooking, music, al dente, and the moment turns.",
};

export default function Scene5Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-04"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 4
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 5 · 13–20 · Catalyst / Debate
          </p>
        </div>

        <ScreenplayShell>
          <Scene05CookingJoy />
        </ScreenplayShell>
      </div>
    </main>
  );
}
