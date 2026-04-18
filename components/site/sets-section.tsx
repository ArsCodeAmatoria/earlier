const sets = [
  {
    title: "The apartment",
    detail:
      "Narrow rooms, warm tungsten, windows that never quite show the sky — memory made architectural.",
  },
  {
    title: "The road",
    detail:
      "Night driving, rest stops, rain on glass. Time passes as geography.",
  },
  {
    title: "The hall",
    detail:
      "Fluorescent institutional calm; the place where two timelines almost touch.",
  },
];

export function SetsSection() {
  return (
    <section
      id="sets"
      className="site-container border-t border-zinc-800 py-20 md:py-28"
    >
      <h2 className="type-display-lg text-3xl md:text-4xl">Sets</h2>
      <ol className="mt-12 space-y-12">
        {sets.map((s, i) => (
          <li
            key={s.title}
            className="grid gap-4 border-t border-zinc-800 pt-10 md:grid-cols-[minmax(0,10rem)_1fr] md:gap-12 md:pt-12"
          >
            <span className="type-display-md text-zinc-600">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            <div>
              <h3 className="type-display-lg text-2xl md:text-3xl">{s.title}</h3>
              <p className="body-md mt-4 max-w-2xl text-zinc-400">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
