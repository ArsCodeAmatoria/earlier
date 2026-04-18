import Link from "next/link";
import { Scene21RoadEdgeEnding } from "@/components/screenplay/scene-21-road-edge-ending";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 21 — earlier",
  description:
    "EXT. rural road near Hope, dawn — tell someone; Leanne didn’t come; the thought slips; the road stays empty.",
};

export default function Scene21Page() {
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
            Scene 21 · 217–228 · Final image
          </p>
        </div>

        <ScreenplayShell>
          <Scene21RoadEdgeEnding />
        </ScreenplayShell>
      </div>
    </main>
  );
}
