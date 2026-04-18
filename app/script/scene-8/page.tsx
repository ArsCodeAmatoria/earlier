import Link from "next/link";
import { Scene08SideConversation } from "@/components/screenplay/scene-08-side-conversation";
import { ScreenplayShell } from "@/components/screenplay/screenplay-shell";

export const metadata = {
  title: "Screenplay · Scene 8 — earlier",
  description:
    "EXT. edge of clearing, night — Maya and Leanne low at the tree line; Nora at the fire.",
};

export default function Scene8Page() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container max-w-3xl">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/script#beat-07"
            className="type-display-md text-[10px] text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Structure outline · Beat 7
          </Link>
          <p className="type-display-md mt-4 text-[10px] text-zinc-600">
            Scene 8 · 41–47 · B story
          </p>
        </div>

        <ScreenplayShell>
          <Scene08SideConversation />
        </ScreenplayShell>
      </div>
    </main>
  );
}
