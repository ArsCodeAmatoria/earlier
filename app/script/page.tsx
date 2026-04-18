import Link from "next/link";
import { acts } from "@/lib/script-data";

export const metadata = {
  title: "Script — earlier",
  description: "Scene breakdown: acts, pages, and beats.",
};

export default function ScriptPage() {
  return (
    <main className="pb-24 pt-[5.5rem] md:pt-28">
      <div className="site-container">
        <div className="mb-12 border-b border-zinc-800 pb-10">
          <Link
            href="/"
            className="type-display-md text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← earlier
          </Link>
          <h1 className="type-display-xl mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-none text-zinc-50">
            Script
          </h1>
          <p className="body-md mt-4 text-zinc-500">
            Scenes, page ranges, and story beats by act.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="lg:w-44 lg:shrink-0">
            <p className="type-display-md mb-3 text-xs text-zinc-600">Jump</p>
            <nav
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:border-l lg:border-zinc-800 lg:pb-0 lg:pl-4"
              aria-label="Acts"
            >
              {acts.map((act) => (
                <a
                  key={act.id}
                  href={`#${act.id}`}
                  className="type-display-md shrink-0 py-1 text-sm text-zinc-500 transition-colors hover:text-zinc-200 lg:block"
                >
                  {act.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 flex-1 space-y-20">
            {acts.map((act) => (
              <section
                key={act.id}
                id={act.id}
                className="scroll-mt-28 border-t border-zinc-800 pt-12 first:border-t-0 first:pt-0"
              >
                <h2 className="type-display-lg text-2xl md:text-3xl">{act.title}</h2>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full min-w-[32rem] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 text-zinc-500">
                        <th className="type-display-md py-3 pr-6 text-xs font-semibold">
                          Scene
                        </th>
                        <th className="type-display-md py-3 pr-6 text-xs font-semibold">
                          Heading
                        </th>
                        <th className="type-display-md py-3 pr-6 text-xs font-semibold">
                          Pages
                        </th>
                        <th className="type-display-md py-3 text-xs font-semibold">
                          Beats
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
                          <td className="body-md py-4 pr-6 font-mono text-zinc-500">
                            {scene.id}
                          </td>
                          <td className="body-md py-4 pr-6 text-zinc-200">
                            {scene.heading}
                          </td>
                          <td className="body-md py-4 pr-6 tabular-nums text-zinc-400">
                            {scene.pages}
                          </td>
                          <td className="body-md py-4 text-zinc-400">
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
        </div>
      </div>
    </main>
  );
}
