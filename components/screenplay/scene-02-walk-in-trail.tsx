import { Action, Char, Dialogue, SceneHeading, Transition } from "./primitives";

/** Scene 2 — Walk-in trail (screenplay body) */

export function Scene02WalkInTrail() {
  return (
    <article>
      <SceneHeading>EXT. FOREST TRAIL — DAY</SceneHeading>

      <Action>A narrow path cutting into dense trees. Light filters through unevenly.</Action>
      <Action>LEANNE leads, carrying most of the gear.</Action>
      <Action>MAYA follows a few steps behind.</Action>
      <Action>NORA brings up the rear.</Action>
      <Action>The road is no longer visible.</Action>
      <Action>Footsteps. Fabric shifting. Packs settling.</Action>
      <Action>No music.</Action>
      <Action>Maya glances back the way they came.</Action>
      <Action>Nothing there.</Action>

      <Char>LEANNE</Char>
      <Dialogue>It’s not far.</Dialogue>

      <Action>Maya nods, but doesn’t speed up.</Action>
      <Action>Nora steps over a root, careful.</Action>

      <Char>NORA</Char>
      <Dialogue>You’ve been here before?</Dialogue>

      <Action>Leanne doesn’t turn.</Action>

      <Char>LEANNE</Char>
      <Dialogue>Yeah.</Dialogue>

      <Action>A beat.</Action>

      <Char>MAYA</Char>
      <Dialogue>When?</Dialogue>

      <Action>Leanne adjusts the strap on her shoulder.</Action>

      <Char>LEANNE</Char>
      <Dialogue>A while ago.</Dialogue>

      <Action>They keep walking.</Action>
      <Action>Maya looks off the trail for a moment—</Action>
      <Action>Like she’s checking something.</Action>
      <Action>Nothing moves.</Action>

      <Char>MAYA</Char>
      <Dialogue>It all looks the same.</Dialogue>

      <Action>Leanne keeps moving.</Action>

      <Char>LEANNE</Char>
      <Dialogue>That’s the point.</Dialogue>

      <Action>Maya frowns slightly at that.</Action>
      <Action>Nora watches Leanne now.</Action>

      <Char>NORA</Char>
      <Dialogue>We talked about this?</Dialogue>

      <Action>Leanne stops walking.</Action>
      <Action>The others stop behind her.</Action>
      <Action>She turns, just enough.</Action>

      <Char>LEANNE</Char>
      <Dialogue>Yeah.</Dialogue>

      <Action>Maya shifts her weight.</Action>

      <Char>MAYA</Char>
      <Dialogue>When?</Dialogue>

      <Action>Leanne looks between them.</Action>

      <Char>LEANNE</Char>
      <Dialogue>Before.</Dialogue>

      <Action>A small silence.</Action>
      <Action>No one challenges it directly.</Action>
      <Action>Leanne turns back and keeps walking.</Action>
      <Action>Maya hesitates—then follows.</Action>
      <Action>Nora lingers half a step longer.</Action>
      <Action>Looking off into the trees.</Action>
      <Action>The forest is still.</Action>
      <Action>She looks back toward where the road should be.</Action>
      <Action>It’s gone from view.</Action>
      <Action>A faint breeze moves through the branches—</Action>
      <Action>Or maybe not.</Action>
      <Action>Nora turns and follows.</Action>
      <Action>The three of them move deeper into the trees.</Action>

      <Transition>CUT TO:</Transition>
    </article>
  );
}
