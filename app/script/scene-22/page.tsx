import Link from "next/link";
import { Scene22FinalImage } from "@/components/screenplay/scene-22-final-image";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 22 — earlier",
  description:
    "EXT. forest clearing, morning — empty camp, disturbed ground, mushrooms; hold; cut to black.",
};

export default function Scene22Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-15"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 15
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 22 · 229–240 · Final image (clearing)
          </p>
        </div>

        <ScreenplayShell>
          <Scene22FinalImage />
        </ScreenplayShell>
      </div>
    </main>
  );
}
