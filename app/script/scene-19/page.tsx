import Link from "next/link";
import { Scene19PotDiscovery } from "@/components/screenplay/scene-19-pot-discovery";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 19 — earlier",
  description:
    "EXT. forest, night — the pot from the fire, warm handle, no tracks; ringtone again; Nora: it’s not.",
};

export default function Scene19Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-14"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 14
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 19 · 179–196 · Finale (object)
          </p>
        </div>

        <ScreenplayShell>
          <Scene19PotDiscovery />
        </ScreenplayShell>
      </div>
    </main>
  );
}
