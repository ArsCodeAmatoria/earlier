import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** ~65 characters — action lines */
const actionWidth = "max-w-[65ch]";
/** Dialogue column — centered block */
const dialogueCol = "mx-auto w-full max-w-[22rem]";

/**
 * Scene heading (slugline): INT./EXT. LOCATION — TIME
 * Site display caps + rule — reads like a script title card.
 */
export function SceneHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className={cn(
        "type-display-lg mb-8 border-b border-zinc-800 pb-5 text-left text-sm leading-snug tracking-[0.1em] text-zinc-100 md:text-base",
      )}
    >
      {children}
    </h2>
  );
}

/** Action / description */
export function Action({ children }: { children: ReactNode }) {
  return (
    <p className={cn("body-md mb-3 text-left text-zinc-400", actionWidth)}>
      {children}
    </p>
  );
}

/** Character cue — centered, caps, condensed display */
export function Char({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "type-display-md mt-8 mb-1 text-center text-[0.65rem] leading-none tracking-[0.2em] text-zinc-300 md:text-xs",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Blocking under name, before dialogue */
export function CharacterAction({ children }: { children: ReactNode }) {
  return (
    <p className={cn("body-md mb-2 text-left text-zinc-500", dialogueCol)}>
      {children}
    </p>
  );
}

/** Parenthetical */
export function Parenthetical({ children }: { children: ReactNode }) {
  return (
    <p
      className={cn(
        "body-md mb-1 text-center text-sm italic leading-snug text-zinc-500",
        dialogueCol,
      )}
    >
      {children}
    </p>
  );
}

/** Dialogue — serif column (script speech) */
export function Dialogue({ children }: { children: ReactNode }) {
  return (
    <p
      className={cn(
        "font-serif mb-5 text-left text-base leading-relaxed text-zinc-100 md:text-[1.05rem]",
        dialogueCol,
      )}
    >
      {children}
    </p>
  );
}

/** Transitions — small caps label, right */
export function Transition({ children }: { children: ReactNode }) {
  return (
    <p className="type-display-md mt-14 text-right text-[10px] text-zinc-500">
      {children}
    </p>
  );
}
