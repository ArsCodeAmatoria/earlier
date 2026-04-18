const characters = [
  {
    name: "Mara",
    role: "Lead",
    note: "Carries the film’s silence — every scene turns on what she won’t say.",
  },
  {
    name: "Jon",
    role: "Supporting",
    note: "The past arrives in his habits before it arrives in the plot.",
  },
  {
    name: "Lee",
    role: "Supporting",
    note: "Grounds the world; the one who still believes in repair.",
  },
];

export function CharactersSection() {
  return (
    <section
      id="characters"
      className="site-container border-t border-zinc-800 py-20 md:py-28"
    >
      <h2 className="type-display-lg text-3xl md:text-4xl">Characters</h2>
      <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {characters.map((c) => (
          <li key={c.name} className="border-t border-zinc-800 pt-8">
            <p className="type-display-md text-xs text-zinc-500">{c.role}</p>
            <h3 className="type-display-lg mt-3 text-2xl md:text-3xl">{c.name}</h3>
            <p className="body-md mt-4 text-zinc-400">{c.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
