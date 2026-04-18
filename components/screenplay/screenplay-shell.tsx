import type { ReactNode } from "react";

/**
 * Screenplay scene pages — site typography; title block matches script index.
 */
export function ScreenplayShell({ children }: { children: ReactNode }) {
  return (
    <div className="text-zinc-200 selection:bg-zinc-700 selection:text-zinc-100">
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <p className="type-display-md text-center text-[10px] text-zinc-600">
          Feature screenplay
        </p>
        <p className="font-logo-script mt-5 text-center text-[clamp(1.5rem, 3.5vw, 2rem)] leading-none text-zinc-100">
          earlier
        </p>
        <p className="type-display-md mt-6 text-center text-[10px] text-zinc-600">
          Written by
        </p>
        <p className="body-md mt-2 text-center text-zinc-300">Leigh Akin</p>
      </header>
      {children}
    </div>
  );
}
