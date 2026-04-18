import { FILMING_LOCATIONS_LINE, SETS_SECTION_INTRO } from "@/lib/site-copy";

const principles = [
  "Nothing should look “staged”",
  "Avoid symmetry or perfection",
  "Slight imperfections > big stylization",
  "Natural light first, practical light second",
  "Space should feel a bit smaller than expected",
];

type LocationBlock = {
  title: string;
  function: string;
  look?: string;
  layout?: string;
  lighting?: string;
  execution?: string;
  composition?: string;
  keyDetails: string;
  hiddenEffect: string;
};

const locations: LocationBlock[] = [
  {
    title: "Road pull-off",
    function:
      "Opening image; transition from “world” to “isolation.”",
    look:
      "Narrow shoulder. Dense trees close to road. No signage if possible.",
    keyDetails:
      "No other cars. No road noise. Trees feel like they start immediately.",
    hiddenEffect:
      "The road should feel like it disappears behind them quickly.",
  },
  {
    title: "Forest trail",
    function: "Transition into disorientation; establish sameness.",
    look:
      "Repetitive trees. No clear landmarks. Slight bends in trail (no straight lines).",
    keyDetails:
      "Roots crossing path. Uneven ground. Similar textures everywhere.",
    hiddenEffect:
      "You could turn around and not know where you came from.",
  },
  {
    title: "Clearing (main set)",
    function:
      "Core of the film; “safe space” that becomes unstable.",
    look:
      "Small to medium clearing (not wide open). Surrounded tightly by trees. Ground: dirt + sparse grass.",
    layout:
      "Two tent spots. Fire pit center-ish (but slightly off-center). Gear scattered naturally.",
    keyDetails:
      "Slightly uneven ground. Subtle circular disturbance in dirt. No clear boundaries—edges blend into trees.",
    hiddenEffect:
      "The clearing should feel like it could shrink without changing.",
  },
  {
    title: "Fire area (night version of clearing)",
    function: "Emotional core; where reality starts slipping.",
    lighting:
      "Fire = primary light. Faces partially visible. Background falls off quickly.",
    look:
      "Fire slightly off-center. Shadows move irregularly. Background trees barely visible.",
    keyDetails:
      "Light doesn’t reach far. Darkness feels close.",
    hiddenEffect:
      "The world ends just beyond the firelight.",
  },
  {
    title: "Tent area",
    function: "False sense of safety; transitional space.",
    look:
      "Close together, slightly cramped. Not perfectly aligned.",
    keyDetails:
      "Open flaps occasionally. Personal items visible but minimal.",
    hiddenEffect:
      "Not quite private, not quite safe.",
  },
  {
    title: "Forest (search area)",
    function: "Collapse of space and direction.",
    look:
      "Same forest as trail—but indistinguishable. No landmarks. No unique trees.",
    keyDetails:
      "Slight variations in density. Occasional open pockets that look similar.",
    hiddenEffect:
      "Every direction feels correct and wrong at the same time.",
  },
  {
    title: "“Loop” area (Higgsfield moment)",
    function: "Spatial contradiction.",
    look:
      "Same as other forest areas. No visual cue it’s different.",
    execution:
      "Reuse same location. Slight camera angle shift. Slight repositioning of actors.",
    keyDetails: "",
    hiddenEffect:
      "Audience feels repetition before recognizing it.",
  },
  {
    title: "Pot location",
    function: "Object anchor; memory contradiction.",
    look:
      "In forest, slightly off path. Not buried, not placed neatly.",
    keyDetails:
      "Looks recently used. Slightly out of place.",
    hiddenEffect:
      "Feels like it shouldn’t be there… but isn’t shocking.",
  },
  {
    title: "Road edge (ending)",
    function:
      "Return to “normal” world; emotional disconnection.",
    look:
      "Similar to opening—but not identical. Slightly different angle or position.",
    keyDetails:
      "No cars. No people. No movement.",
    hiddenEffect:
      "This should feel familiar… but not comforting.",
  },
  {
    title: "Final clearing (ending image)",
    function: "Final question.",
    look:
      "Same clearing. No people.",
    composition:
      "Leave empty space where someone should be.",
    keyDetails:
      "Disturbed ground. Mushrooms visible. Slight suggestion of absence.",
    hiddenEffect:
      "Something is missing—but you can’t prove it.",
  },
];

function Field({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  if (!children.trim()) return null;
  return (
    <div className="mt-5 first:mt-0">
      <p className="type-display-md text-[10px] text-zinc-500">{label}</p>
      <p className="body-md mt-1.5 text-zinc-400">{children}</p>
    </div>
  );
}

export function SetsSection() {
  return (
    <section
      id="sets"
      className="site-container border-t border-zinc-800 py-20 md:py-28"
    >
      <h2 className="type-display-lg text-3xl md:text-4xl">Sets</h2>
      <p className="body-md mt-4 text-zinc-500">{FILMING_LOCATIONS_LINE}</p>
      <p className="body-md mt-6 max-w-3xl text-pretty text-zinc-500">{SETS_SECTION_INTRO}</p>

      <div className="mt-14 border border-zinc-800/80 bg-zinc-950/40 px-6 py-8 md:px-8 md:py-10">
        <h3 className="type-display-md text-xs text-zinc-500">
          Set design principles (for all locations)
        </h3>
        <ul className="mt-6 space-y-3">
          {principles.map((p) => (
            <li key={p} className="body-md text-zinc-400">
              {p}
            </li>
          ))}
        </ul>
      </div>

      <ol className="mt-16 space-y-0">
        {locations.map((loc, i) => (
          <li
            key={loc.title}
            className="border-t border-zinc-800 py-12 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,4rem)_1fr] md:gap-10">
              <span className="type-display-md text-zinc-600">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3 className="type-display-lg text-xl md:text-2xl">{loc.title}</h3>
                <div className="mt-6 max-w-3xl space-y-0">
                  <Field label="Function" children={loc.function} />
                  {loc.look ? <Field label="Look" children={loc.look} /> : null}
                  {loc.layout ? <Field label="Layout" children={loc.layout} /> : null}
                  {loc.lighting ? (
                    <Field label="Lighting" children={loc.lighting} />
                  ) : null}
                  {loc.execution ? (
                    <Field label="Execution" children={loc.execution} />
                  ) : null}
                  {loc.composition ? (
                    <Field label="Composition" children={loc.composition} />
                  ) : null}
                  <Field label="Key details" children={loc.keyDetails} />
                  <Field label="Hidden effect" children={loc.hiddenEffect} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
