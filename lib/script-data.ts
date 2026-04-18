export type Scene = {
  id: string;
  slug: string;
  heading: string;
  pages: string;
  beats: string;
};

export type Act = {
  id: string;
  title: string;
  scenes: Scene[];
};

export const acts: Act[] = [
  {
    id: "act-1",
    title: "Act 1",
    scenes: [
      {
        id: "1",
        slug: "scene-01",
        heading: "INT. APARTMENT — NIGHT",
        pages: "1–3",
        beats: "Cold open; clock motif; protagonist alone.",
      },
      {
        id: "2",
        slug: "scene-02",
        heading: "EXT. CITY — DAWN",
        pages: "4–6",
        beats: "Transition; routine established; first tension.",
      },
      {
        id: "3",
        slug: "scene-03",
        heading: "INT. CAR — DAY",
        pages: "7–8",
        beats: "Inciting incident; phone call; decision.",
      },
    ],
  },
  {
    id: "act-2a",
    title: "Act 2A",
    scenes: [
      {
        id: "4",
        slug: "scene-04",
        heading: "INT. OFFICE — DAY",
        pages: "9–14",
        beats: "Fun & games; new ally; plan sketched.",
      },
      {
        id: "5",
        slug: "scene-05",
        heading: "EXT. PARK — LATE DAY",
        pages: "15–18",
        beats: "B-plot; secret revealed in subtext.",
      },
    ],
  },
  {
    id: "act-2b",
    title: "Act 2B",
    scenes: [
      {
        id: "6",
        slug: "scene-06",
        heading: "INT. HALLWAY — NIGHT",
        pages: "19–22",
        beats: "Midpoint reversal; stakes double.",
      },
      {
        id: "7",
        slug: "scene-07",
        heading: "INT. KITCHEN — NIGHT",
        pages: "23–26",
        beats: "All is lost setup; relationship fracture.",
      },
    ],
  },
  {
    id: "act-3",
    title: "Act 3",
    scenes: [
      {
        id: "8",
        slug: "scene-08",
        heading: "EXT. BRIDGE — DAWN",
        pages: "27–30",
        beats: "Dark night of the soul; quiet choice.",
      },
      {
        id: "9",
        slug: "scene-09",
        heading: "INT. SAME APARTMENT — DAY",
        pages: "31–34",
        beats: "Finale; echo of opening; final image.",
      },
    ],
  },
];
