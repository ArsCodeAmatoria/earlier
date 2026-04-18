export type Scene = {
  id: string;
  slug: string;
  heading: string;
  pages: string;
  beats: string;
  /** Link to full screenplay page when available */
  screenplayHref?: string;
  /** Multiple screenplay pages for one beat (e.g. Set-Up spans two scenes) */
  screenplayLinks?: { href: string; label: string }[];
};

export type Act = {
  id: string;
  title: string;
  scenes: Scene[];
};

/** Final 15 beats — 75 min / 75 pp */
export const acts: Act[] = [
  {
    id: "act-1",
    title: "Act 1 — Life / Control (pp. 1–20)",
    scenes: [
      {
        id: "1",
        slug: "beat-01",
        heading: "Opening Image",
        pages: "1–2",
        beats:
          "Car pulls off near Hope. Engine off. Maya reacts to a sound that isn’t there. Silence lingers.",
        screenplayHref: "/script/scene-1",
      },
      {
        id: "2",
        slug: "beat-02",
        heading: "Theme Stated",
        pages: "3–4",
        beats:
          "Forest trail; Leanne leads with gear, Maya and Nora follow; road no longer visible. They probe whether Leanne’s been here and what was agreed—short answers; Nora lingers as the road slips from view.",
        screenplayHref: "/script/scene-2",
      },
      {
        id: "3",
        slug: "beat-03",
        heading: "Set-Up",
        pages: "5–12",
        beats:
          "Clearing arrival; then tents, fire pit, old burn marks. “We talked about this before we came”—memory won’t line up. Fire catches; sound too loud or clearing too quiet.",
        screenplayLinks: [
          { href: "/script/scene-3", label: "Scene 3 · Clearing arrival" },
          { href: "/script/scene-4", label: "Scene 4 · Tents / fire prep" },
        ],
      },
      {
        id: "4",
        slug: "beat-04",
        heading: "Catalyst — Joy with Risk",
        pages: "13–15",
        beats:
          "Cooking scene. Music plays. Laughter and movement. al dente vs “Al Dante”; Ramses. Leanne adds mushrooms. Nora: “You found these?” Leanne: “Yeah.” Maya: “Are you sure?” Leanne: “Yeah.” Maya doesn’t fully believe her. Phone rings briefly. Silenced. “It’s nothing.”",
        screenplayHref: "/script/scene-5",
      },
      {
        id: "5",
        slug: "beat-05",
        heading: "Debate — Shift",
        pages: "16–20",
        beats:
          "Energy fades. Music stops on its own. Maya: “I don’t think this is the way to do it.” No response. Scene drifts out.",
        screenplayHref: "/script/scene-5",
      },
    ],
  },
  {
    id: "act-2a",
    title: "Act 2A — Unease (pp. 21–40)",
    scenes: [
      {
        id: "6",
        slug: "beat-06",
        heading: "Break into Act 2",
        pages: "21–23",
        beats:
          "Dusk; fire lower; no music. Clearing feels smaller. Maya: “I don’t think this is the way to do it.” Leanne: “It is.” Nora: “You said you’d stopped.” Leanne: “We talked about this.” / “Before.” Together but not aligned.",
        screenplayHref: "/script/scene-6",
      },
      {
        id: "7",
        slug: "beat-07",
        heading: "B Story",
        pages: "24–26",
        beats:
          "Edge of clearing; Maya / Leanne low at the trees. “Are we actually doing this?” “We have to.” Wrong time / “There isn’t a right time.” Nora seems fine. “What if we’re wrong?” “We’re not.” “She’s going to know.” “Not if we do it right.” Nora (O.S.): “You said you’d stopped.”",
        screenplayHref: "/script/scene-8",
      },
      {
        id: "8",
        slug: "beat-08",
        heading: "Fun & Games — Perceptual Drift",
        pages: "27–34",
        beats:
          "At the fire: ghost-story fragment and “not really here” (Scene 7). Then repetition and slips—who said what, “before,” Maya’s face wrong for a beat. Same conversation, not shared; distance feels inconsistent.",
        screenplayLinks: [
          { href: "/script/scene-7", label: "Scene 7 · Fire (night)" },
          { href: "/script/scene-9", label: "Scene 9 · Fire drift (part 1)" },
          { href: "/script/scene-10", label: "Scene 10 · Fire drift (part 2)" },
        ],
      },
      {
        id: "9",
        slug: "beat-09",
        heading: "Midpoint — First True Break",
        pages: "35–40",
        beats:
          "Leanne presses purpose (“sit around,” “you know what we’re doing”); Nora: “I know.” Faces misalign in the firelight; laughter again—Maya: “…did you hear that?” Leanne: “We’re not leaving until we figure this out.” Silence. Not the same place anymore.",
        screenplayLinks: [
          { href: "/script/scene-7", label: "Scene 7 · Fire (night)" },
          { href: "/script/scene-11", label: "Scene 11 · Midpoint (confrontation)" },
        ],
      },
    ],
  },
  {
    id: "act-2b",
    title: "Act 2B — Breakdown (pp. 41–55)",
    scenes: [
      {
        id: "10",
        slug: "beat-10",
        heading: "Bad Guys Close In",
        pages: "41–46",
        beats:
          "Scene 10: slips at the fire (“things,” “right away,” Nora listening to nothing). Scene 12: escalation—“we should just do it,” disputed loudness, time slip (“five minutes ago” / “No it wasn’t”), when we got here vs “we’ve been here”; fire almost out—not the same time.",
        screenplayLinks: [
          { href: "/script/scene-10", label: "Scene 10 · Fire drift (part 2)" },
          { href: "/script/scene-12", label: "Scene 12 · Argument escalation" },
        ],
      },
      {
        id: "11",
        slug: "beat-11",
        heading: "All Is Lost — Disappearance",
        pages: "47–49",
        beats:
          "Leanne stands, walks to the trees, listens, steps in—gone. Maya: “Did you see that?” Nora: “Who?” / “She went that way” (wrong vector). “No she didn’t.” Nora: “Yeah.” Same place, not the same moment; something missing—unnamed.",
        screenplayHref: "/script/scene-13",
      },
      {
        id: "12",
        slug: "beat-12",
        heading: "Dark Night of the Soul",
        pages: "50–55",
        beats:
          "Almost gone; red glow. “…where’s Leanne?” / that way / “No she didn’t.” “She left earlier.” Space beside Leanne just empty. “We were just talking to her” / “No.” “Yes.” / “No.” Ember flicker—faces don’t align. “She’s not gone.” / “She left.” Always missing; not the same version of what happened.",
        screenplayHref: "/script/scene-14",
      },
    ],
  },
  {
    id: "act-3",
    title: "Act 3 — Fracture (pp. 56–75)",
    scenes: [
      {
        id: "13",
        slug: "beat-13",
        heading: "Break into Act 3",
        pages: "56–58",
        beats:
          "“Find her.” “Find who?” / “Leanne.” Flashlight; clearing slips away. Ringtone—gone. “That was her phone.” “No.” “We just came from there.” “No we didn’t.” Not lost—not located.",
        screenplayHref: "/script/scene-15",
      },
      {
        id: "14",
        slug: "beat-14",
        heading: "Finale",
        pages: "59–72",
        beats:
          "Scenes 15–19: forest search through pot (beam shortens; object unplaceable). Scene 20: collapse—“She was right behind us.” / “No.” “We were all—” / “You were.” Ringtone directionless—loud—cuts mid-tone. “That’s her phone.” / “No it isn’t.” Wrong space; no resolution. (Beat 15: road / final image—still outline.)",
        screenplayLinks: [
          { href: "/script/scene-15", label: "Scene 15 · Search begins" },
          { href: "/script/scene-16", label: "Scene 16 · Early search" },
          { href: "/script/scene-17", label: "Scene 17 · Memory bleed" },
          { href: "/script/scene-18", label: "Scene 18 · Loop / spatial break" },
          { href: "/script/scene-19", label: "Scene 19 · Pot discovery" },
          { href: "/script/scene-20", label: "Scene 20 · Final search collapse" },
        ],
      },
      {
        id: "15",
        slug: "beat-15",
        heading: "Final Image",
        pages: "73–75",
        beats:
          "Scene 21: dawn road—tell someone; Leanne didn’t come; thought slips; absence. Scene 22: morning clearing—empty, faint disturbance, mushrooms; space complete and incomplete; hold on what isn’t there; cut to black.",
        screenplayLinks: [
          { href: "/script/scene-21", label: "Scene 21 · Road edge (ending)" },
          { href: "/script/scene-22", label: "Scene 22 · Final image (clearing)" },
        ],
      },
    ],
  },
];
