import { CHARACTERS_SECTION_INTRO } from "@/lib/site-copy";

const characters = [
  {
    name: "Leanne",
    bio: "Leanne speaks with quiet authority. She rarely raises her voice, but people tend to follow her anyway. Her sentences are short, direct, and often slightly incomplete—as if she assumes the rest is understood. She avoids explaining things and answers questions with minimal information (“yeah,” “before,” “it’s fine”). She does not like being challenged and will redirect rather than engage. Physically, she is always doing something—setting up, adjusting, moving—using activity to maintain control. Emotionally, she is closed off but not cold; she believes she’s doing the right thing and carries that certainty into every interaction. As things begin to shift, she doesn’t show fear—she becomes more focused, more precise, almost rigid. Her stillness is more unsettling than any panic would be.",
  },
  {
    name: "Maya",
    bio: "Maya is the most grounded and relatable. She speaks naturally, conversationally, often in half-finished thoughts. She asks questions more than she makes statements. Her tone is light at first—teasing, observational—but there’s hesitation underneath. She tends to defer, even when she doesn’t agree, and will soften confrontation with humor or uncertainty. As the film progresses, she becomes the audience’s anchor: she notices inconsistencies, tries to track time and space, and seeks clarity. Her speech becomes more direct under pressure, but never fully confident—she’s always trying to confirm reality rather than define it. Physically, she slows down before others do—pausing, looking, listening. She is the only one who consistently feels something is wrong, but she never fully understands it.",
  },
  {
    name: "Nora",
    bio: "Nora is quiet, observant, and slightly detached from the beginning. She speaks less than the others, but when she does, it lands with weight. Her sentences are simple, often flat, sometimes ambiguous. She doesn’t argue loudly—she contradicts calmly. She has a tendency to answer questions with questions or to respond in ways that don’t fully align with what was asked. She appears to notice things others don’t, but never explains what she sees. Emotionally, she is difficult to read—neither warm nor cold, just present. As the film progresses, she becomes more certain while everyone else destabilizes. Her tone does not escalate; it clarifies. By the end, she speaks with complete calm and conviction, even when what she’s saying contradicts reality. She never appears confused—only the others are.",
  },
];

export function CharactersSection() {
  return (
    <section
      id="characters"
      className="site-container border-t border-zinc-800 py-20 md:py-28"
    >
      <h2 className="type-display-lg text-3xl md:text-4xl">Characters</h2>
      <p className="body-md mt-6 max-w-3xl text-pretty text-zinc-500">
        {CHARACTERS_SECTION_INTRO}
      </p>
      <ul className="mt-12 divide-y divide-zinc-800">
        {characters.map((c) => (
          <li key={c.name} className="py-12 first:pt-0 last:pb-0">
            <h3 className="type-display-lg text-2xl md:text-3xl">{c.name}</h3>
            <p className="body-md mt-6 max-w-3xl text-pretty text-zinc-400">{c.bio}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
