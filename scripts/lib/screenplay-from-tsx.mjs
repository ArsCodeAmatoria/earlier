/**
 * Pull plain screenplay blocks from scene TSX (primitives only).
 * Keep scene file list in sync with lib/screenplay-scenes.ts order (1–22).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import parser from "@babel/parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PRIMITIVE_TAGS = new Set([
  "SceneHeading",
  "Action",
  "Char",
  "Dialogue",
  "Parenthetical",
  "CharacterAction",
  "Transition",
]);

/** @typedef {{ tag: string, text: string }} ScreenplayBlock */

function walk(node, visitor) {
  if (!node || typeof node !== "object") return;
  visitor(node);
  for (const key of Object.keys(node)) {
    if (key === "loc" || key === "range" || key === "leadingComments" || key === "innerComments")
      continue;
    const v = node[key];
    if (Array.isArray(v)) {
      for (const ch of v) walk(ch, visitor);
    } else if (v && typeof v === "object") {
      walk(v, visitor);
    }
  }
}

function findArticleRoot(ast) {
  let article = null;
  walk(ast, (node) => {
    if (article) return;
    if (node.type !== "ReturnStatement") return;
    const arg = node.argument;
    if (!arg || arg.type !== "JSXElement") return;
    const name = arg.openingElement?.name;
    if (name?.type === "JSXIdentifier" && name.name === "article") {
      article = arg;
    }
  });
  return article;
}

function jsxTagName(opening) {
  const n = opening.name;
  if (n.type === "JSXIdentifier") return n.name;
  throw new Error(`Unsupported JSX tag shape: ${n.type}`);
}

function jsxElementText(el, filePath) {
  const parts = [];
  for (const c of el.children) {
    if (c.type === "JSXText") {
      parts.push(c.value);
    } else if (c.type === "JSXExpressionContainer") {
      const ex = c.expression;
      if (ex.type === "StringLiteral") {
        parts.push(ex.value);
      } else {
        throw new Error(
          `Unsupported JSX expression in ${filePath}: ${ex.type} — use a string literal or plain text.`,
        );
      }
    } else if (c.type === "JSXElement") {
      parts.push(jsxElementText(c, filePath));
    } else {
      throw new Error(`Unexpected JSX child in ${filePath}: ${c.type}`);
    }
  }
  return parts.join("").replace(/\s+/g, " ").trim();
}

/**
 * @param {string} absolutePath
 * @returns {ScreenplayBlock[]}
 */
export function extractScreenplayBlocks(absolutePath) {
  const code = fs.readFileSync(absolutePath, "utf8");
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });
  const article = findArticleRoot(ast);
  if (!article) {
    throw new Error(`No <article> root return found in ${absolutePath}`);
  }
  /** @type {ScreenplayBlock[]} */
  const blocks = [];
  for (const child of article.children) {
    if (child.type === "JSXText" && !child.value.trim()) continue;
    if (child.type !== "JSXElement") {
      throw new Error(`Unexpected node inside <article> in ${absolutePath}: ${child.type}`);
    }
    const tag = jsxTagName(child.openingElement);
    if (!PRIMITIVE_TAGS.has(tag)) {
      throw new Error(`Unknown primitive <${tag}> in ${absolutePath}`);
    }
    const text = jsxElementText(child, absolutePath);
    blocks.push({ tag, text });
  }
  return blocks;
}

const root = path.join(__dirname, "..", "..");
const screenplayDir = path.join(root, "components", "screenplay");

/** Same order as lib/screenplay-scenes.ts */
export const SCENE_FILES = [
  "scene-01-road-pull-off.tsx",
  "scene-02-walk-in-trail.tsx",
  "scene-03-clearing-arrival.tsx",
  "scene-04-setup-tents-fire.tsx",
  "scene-05-cooking-joy.tsx",
  "scene-06-post-cooking-shift.tsx",
  "scene-07-fire-night.tsx",
  "scene-08-side-conversation.tsx",
  "scene-09-fire-drift-part-1.tsx",
  "scene-10-fire-drift-part-2.tsx",
  "scene-11-midpoint-confrontation.tsx",
  "scene-12-argument-escalation.tsx",
  "scene-13-disappearance.tsx",
  "scene-14-delayed-awareness.tsx",
  "scene-15-search-begins.tsx",
  "scene-16-early-search.tsx",
  "scene-17-memory-bleed.tsx",
  "scene-18-loop-spatial-break.tsx",
  "scene-19-pot-discovery.tsx",
  "scene-20-final-search-collapse.tsx",
  "scene-21-road-edge-ending.tsx",
  "scene-22-final-image.tsx",
];

export function loadAllScreenplayBlocks() {
  /** @type {ScreenplayBlock[]} */
  const all = [];
  for (const file of SCENE_FILES) {
    const p = path.join(screenplayDir, file);
    all.push(...extractScreenplayBlocks(p));
  }
  return all;
}
