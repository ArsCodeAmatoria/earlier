import { Suspense } from "react";
import { ScriptPageClient } from "./script-page-client";

export const metadata = {
  title: "Screenplay — earlier",
  description:
    "Feature screenplay structure for earlier — 15 beats, 75 pages, by Leigh Akin.",
};

function ScriptFallback() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container">
        <div className="h-48 animate-pulse rounded-lg bg-zinc-900/50" aria-hidden />
      </div>
    </main>
  );
}

export default function ScriptPage() {
  return (
    <Suspense fallback={<ScriptFallback />}>
      <ScriptPageClient />
    </Suspense>
  );
}
