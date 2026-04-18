"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { screenplayScenes } from "@/lib/screenplay-scenes";
import { acts } from "@/lib/script-data";
import type { Scene } from "@/lib/script-data";
import { FESTIVAL_SCREENPLAY_PDF_FILENAME, FESTIVAL_SCREENPLAY_PDF_HREF } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

function BeatScreenplayLinks({ scene }: { scene: Scene }) {
  if (scene.screenplayLinks?.length) {
    return (
      <div className="mt-1 flex flex-col gap-0.5 pl-5">
        {scene.screenplayLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="type-display-md w-fit text-[9px] text-zinc-600 underline decoration-zinc-800 underline-offset-2 transition-colors hover:text-zinc-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }
  if (scene.screenplayHref) {
    return (
      <div className="mt-1 pl-5">
        <Link
          href={scene.screenplayHref}
          className="type-display-md text-[9px] text-zinc-600 underline decoration-zinc-800 underline-offset-2 transition-colors hover:text-zinc-300"
        >
          Read scene
        </Link>
      </div>
    );
  }
  return null;
}

type View = "beats" | "screenplay";

function useScriptView(): View {
  const searchParams = useSearchParams();
  return searchParams.get("view") === "screenplay" ? "screenplay" : "beats";
}

function FestivalDraftDownload() {
  return (
    <div className="mb-10 rounded-lg border border-zinc-800 bg-zinc-950/40 px-5 py-6 md:mb-12 md:px-6">
      <p className="type-display-md text-[10px] text-zinc-500">Festival draft (PDF)</p>
      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="body-md max-w-2xl text-sm leading-relaxed text-zinc-400">
          Letter-sized PDF in standard screenplay format — title page with writer credit. No
          contact information on the title page, as is typical for festival and industry reads.
        </p>
        <a
          href={FESTIVAL_SCREENPLAY_PDF_HREF}
          download={FESTIVAL_SCREENPLAY_PDF_FILENAME}
          className="type-display-md shrink-0 self-start rounded-full border border-zinc-600 px-5 py-3 text-center text-[10px] uppercase tracking-[0.16em] text-zinc-100 transition-colors hover:border-zinc-400 sm:self-center"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

function ViewBadges({ view }: { view: View }) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:mb-12">
      <Link
        href="/script?view=beats"
        scroll={false}
        className={cn(
          "rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors",
          view === "beats"
            ? "border-zinc-500 bg-zinc-800/90 text-zinc-100"
            : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300",
        )}
      >
        Beats structure
      </Link>
      <Link
        href="/script?view=screenplay"
        scroll={false}
        className={cn(
          "rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors",
          view === "screenplay"
            ? "border-zinc-500 bg-zinc-800/90 text-zinc-100"
            : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300",
        )}
      >
        Screenplay
      </Link>
    </div>
  );
}

export function ScriptPageClient() {
  const view = useScriptView();

  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container">
        <div className="mb-14 border-b border-zinc-800 pb-12">
          <Link
            href="/"
            className="body-md text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← <span className="font-logo-script text-zinc-400">earlier</span>
          </Link>

          <div className="mt-12 text-center">
            <p className="type-display-md text-[10px] text-zinc-600">Feature screenplay</p>
            <p className="font-logo-script mt-10 text-[clamp(1.75rem,4vw,2.5rem)] leading-none text-zinc-100">
              earlier
            </p>
            <p className="type-display-md mt-8 text-[10px] text-zinc-600">Written by</p>
            <p className="body-md mt-2 text-zinc-300">Leigh Akin</p>
            <p className="type-display-md mt-10 text-[10px] text-zinc-600">
              Structure outline · 15 beats · 75 pages · ~75 minutes
            </p>
          </div>
        </div>

        <ViewBadges view={view} />

        <FestivalDraftDownload />

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:w-72 lg:shrink-0 lg:overflow-y-auto xl:w-80">
            <nav
              className="lg:border-l lg:border-zinc-800 lg:pl-4"
              aria-labelledby="nav-outline-heading"
            >
              <p
                id="nav-outline-heading"
                className="type-display-md mb-4 text-[10px] text-zinc-600"
              >
                Acts · beats · pages
              </p>
              <div className="space-y-8">
                {acts.map((act) => (
                  <div key={act.id}>
                    <a
                      href={`/script?view=beats#${act.id}`}
                      className="type-display-md block border-b border-zinc-800/90 pb-2 text-[10px] uppercase leading-snug tracking-[0.12em] text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {act.title}
                    </a>
                    <ul className="mt-2 space-y-0">
                      {act.scenes.map((scene) => (
                        <li key={scene.id} className="border-b border-zinc-800/40 py-2 last:border-b-0">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={`/script?view=beats#${scene.slug}`}
                              className="min-w-0 flex-1 text-left transition-colors hover:text-zinc-200"
                            >
                              <span className="type-display-md tabular-nums text-[10px] text-zinc-600">
                                {scene.id}
                              </span>
                              <span className="body-md ml-1.5 text-[13px] leading-snug text-zinc-400">
                                {scene.heading}
                              </span>
                            </Link>
                            <span className="type-display-md shrink-0 pt-0.5 text-[10px] tabular-nums text-zinc-600">
                              {scene.pages}
                            </span>
                          </div>
                          <BeatScreenplayLinks scene={scene} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </aside>

          <div className="min-w-0 flex-1">
            {view === "beats" ? (
              <div className="space-y-20">
                {acts.map((act) => (
                  <section
                    key={act.id}
                    id={act.id}
                    className="scroll-mt-28 border-t border-zinc-800 pt-12 first:border-t-0 first:pt-0"
                  >
                    <h2 className="type-display-lg text-base leading-snug tracking-[0.08em] text-zinc-100 md:text-lg">
                      {act.title}
                    </h2>
                    <div className="mt-8 overflow-x-auto">
                      <table className="w-full min-w-[32rem] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-zinc-800 text-zinc-500">
                            <th className="type-display-md py-3 pr-4 text-[10px] text-zinc-500">
                              #
                            </th>
                            <th className="type-display-md py-3 pr-6 text-[10px] text-zinc-500">
                              Story beat
                            </th>
                            <th className="type-display-md py-3 pr-6 text-[10px] text-zinc-500">
                              Pages
                            </th>
                            <th className="type-display-md py-3 text-[10px] text-zinc-500">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {act.scenes.map((scene) => (
                            <tr
                              key={scene.id}
                              id={scene.slug}
                              className="scroll-mt-28 border-b border-zinc-800/80 align-top"
                            >
                              <td className="body-md py-4 pr-4 align-top tabular-nums text-zinc-500">
                                {scene.id}
                              </td>
                              <td className="body-md py-4 pr-6 align-top text-zinc-200">
                                <div className="flex flex-col gap-2">
                                  <span className="type-display-md text-xs text-zinc-200">
                                    {scene.heading}
                                  </span>
                                  {scene.screenplayLinks?.length ? (
                                    <div className="flex flex-col gap-1">
                                      {scene.screenplayLinks.map((link) => (
                                        <Link
                                          key={link.href}
                                          href={link.href}
                                          className="type-display-md w-fit text-[10px] text-zinc-500 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300"
                                        >
                                          {link.label}
                                        </Link>
                                      ))}
                                    </div>
                                  ) : scene.screenplayHref ? (
                                    <Link
                                      href={scene.screenplayHref}
                                      className="type-display-md w-fit text-[10px] text-zinc-500 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300"
                                    >
                                      Read scene
                                    </Link>
                                  ) : null}
                                </div>
                              </td>
                              <td className="body-md py-4 pr-6 align-top tabular-nums text-zinc-400">
                                {scene.pages}
                              </td>
                              <td className="body-md py-4 align-top leading-relaxed text-zinc-400">
                                {scene.beats}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div>
                <p className="body-md max-w-2xl text-zinc-500">
                  Full screenplay pages by scene — same order as production drafts.
                </p>
                <ul className="mt-10 space-y-0 divide-y divide-zinc-800 border-t border-zinc-800">
                  {screenplayScenes.map((sc) => (
                    <li key={sc.href} className="py-10 first:pt-0">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="type-display-md text-[10px] text-zinc-600">
                            Scene {sc.num}
                          </p>
                          <h2 className="type-display-lg mt-2 text-xl text-zinc-100 md:text-2xl">
                            {sc.title}
                          </h2>
                          <p className="body-md mt-2 tabular-nums text-zinc-500">
                            Pages {sc.pages}
                          </p>
                        </div>
                        <Link
                          href={sc.href}
                          className="type-display-md shrink-0 self-start rounded-full border border-zinc-700 px-4 py-2 text-[10px] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                        >
                          Read scene →
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
