import {
  Action,
  CharacterAction,
  Char,
  Dialogue,
  SceneHeading,
  Transition,
} from "./primitives";

/** Scene 1 — Road pull-off (screenplay body) */

export function Scene01RoadPullOff() {
  return (
    <article>
      <SceneHeading>EXT. RURAL ROAD — NEAR HOPE — DAY</SceneHeading>

      <Action>A narrow stretch of road. Trees on both sides. No traffic.</Action>
      <Action>A car sits just off the shoulder.</Action>
      <Action>Engine running.</Action>
      <Action>Inside the car:</Action>

      <Char>LEANNE (driver)</Char>
      <CharacterAction>Hands still on the wheel. Looking forward.</CharacterAction>

      <Char>MAYA (passenger)</Char>
      <CharacterAction>Staring out into the trees.</CharacterAction>

      <Char>NORA (back seat)</Char>
      <CharacterAction>Barely visible. Watching the others.</CharacterAction>

      <Action>The engine hums.</Action>
      <Action>No one speaks.</Action>
      <Action>Maya tilts her head slightly—</Action>
      <Action>Listening.</Action>

      <Char>MAYA</Char>
      <Dialogue>…did you hear that?</Dialogue>

      <Action>Leanne doesn’t look at her.</Action>

      <Char>LEANNE</Char>
      <Dialogue>No.</Dialogue>

      <Action>A beat.</Action>
      <Action>Maya keeps looking toward the trees.</Action>
      <Action>Nothing moves.</Action>
      <Action>No sound.</Action>
      <Action>Nora shifts slightly in the back seat.</Action>

      <Char>NORA</Char>
      <Dialogue>Hear what?</Dialogue>

      <Action>Maya doesn’t answer right away.</Action>
      <Action>Still listening.</Action>

      <Char>MAYA</Char>
      <Dialogue>I don’t know.</Dialogue>

      <Action>Silence again.</Action>
      <Action>The engine continues to run.</Action>
      <Action>Leanne exhales, finally moves—</Action>
      <Action>Shifts the car into park.</Action>
      <Action>The engine cuts.</Action>
      <Action>The sudden quiet feels heavier than it should.</Action>
      <Action>No one opens the doors.</Action>
      <Action>A faint breeze through the trees.</Action>
      <Action>Or maybe not.</Action>
      <Action>Maya glances back at Nora.</Action>
      <Action>Nora is already looking at her.</Action>
      <Action>They hold eye contact for a moment too long.</Action>
      <Action>Leanne opens her door.</Action>

      <Char>LEANNE</Char>
      <Dialogue>Come on.</Dialogue>

      <Action>She steps out.</Action>
      <Action>Maya hesitates—one last look into the trees.</Action>
      <Action>Nothing there.</Action>
      <Action>She opens her door.</Action>
      <Action>Nora stays in the back seat a beat longer.</Action>
      <Action>Watching the empty front seats.</Action>
      <Action>Then—</Action>
      <Action>She opens the door.</Action>

      <Transition>CUT TO:</Transition>
    </article>
  );
}
