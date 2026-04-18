/**
 * Generates public/PDFs/earlier-festival-draft.pdf
 * Letter, Courier — title page (no contact) + full screenplay from components/screenplay scene TSX.
 * Run: npm run pdf:festival
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { loadAllScreenplayBlocks } from "./lib/screenplay-from-tsx.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "PDFs");
const outFile = path.join(outDir, "earlier-festival-draft.pdf");

const PAGE_W = 612;
const PAGE_H = 792;
const M = 72;
const M_TOP = 72;
const M_BOT = 72;
/** Body text — ~1.5" / 1" side margins */
const BODY_L = 108;
const BODY_R = PAGE_W - M;
const ACTION_W = BODY_R - BODY_L;
/** Dialogue / parenthetical column */
const DIALOG_L = 168;
const DIALOG_W = 270;

const SIZE = 12;
const LEADING = 14;

function wrapLine(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const trial = cur ? `${cur} ${w}` : w;
    if (font.widthOfTextAtSize(trial, size) <= maxWidth) {
      cur = trial;
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines.length ? lines : [""];
}

function drawPageNumber(page, n, font) {
  const label = `${n}.`;
  const tw = font.widthOfTextAtSize(label, SIZE);
  page.drawText(label, {
    x: PAGE_W - M - tw,
    y: PAGE_H - M_TOP + 8,
    size: SIZE,
    font,
  });
}

/**
 * @param {import('pdf-lib').PDFPage} page
 * @param {string[]} lines
 * @param {import('pdf-lib').PDFFont} font
 * @param {number} yTop
 * @param {(line: string, i: number) => number} getX
 */
function drawLines(page, lines, font, yTop, getX) {
  let y = yTop;
  for (let i = 0; i < lines.length; i++) {
    page.drawText(lines[i], { x: getX(lines[i], i), y, size: SIZE, font });
    y -= LEADING;
  }
  return y;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const blocks = loadAllScreenplayBlocks();
  const pdf = await PDFDocument.create();
  const courier = await pdf.embedFont(StandardFonts.Courier);
  const courierBold = await pdf.embedFont(StandardFonts.CourierBold);
  const courierOblique = await pdf.embedFont(StandardFonts.CourierOblique);

  // --- Title page (unnumbered) ---
  const p1 = pdf.addPage([PAGE_W, PAGE_H]);
  const title = "earlier";
  const titleSize = 36;
  const tw = courierBold.widthOfTextAtSize(title, titleSize);
  p1.drawText(title, {
    x: (PAGE_W - tw) / 2,
    y: PAGE_H / 2 + 40,
    size: titleSize,
    font: courierBold,
  });

  const by = "written by";
  const bySize = 12;
  const byW = courier.widthOfTextAtSize(by, bySize);
  p1.drawText(by, { x: (PAGE_W - byW) / 2, y: PAGE_H / 2 + 8, size: bySize, font: courier });

  const writer = "Leigh Akin";
  const wW = courierBold.widthOfTextAtSize(writer, bySize);
  p1.drawText(writer, { x: (PAGE_W - wW) / 2, y: PAGE_H / 2 - 12, size: bySize, font: courierBold });

  const draft = "FESTIVAL SUBMISSION DRAFT";
  const dSize = 11;
  const dW = courier.widthOfTextAtSize(draft, dSize);
  p1.drawText(draft, { x: (PAGE_W - dW) / 2, y: PAGE_H / 2 - 48, size: dSize, font: courier });

  const note = "Contact information omitted for festival submission.";
  const noteLines = wrapLine(note, courier, 10, PAGE_W - 2 * M);
  let ny = M + 36 + (noteLines.length - 1) * 12;
  for (const line of noteLines) {
    p1.drawText(line, { x: M, y: ny, size: 10, font: courier });
    ny -= 12;
  }

  // --- Screenplay body (numbered from 1) ---
  let page = pdf.addPage([PAGE_W, PAGE_H]);
  let pageNum = 1;
  drawPageNumber(page, pageNum, courier);
  let y = PAGE_H - M_TOP - 24;

  for (let bi = 0; bi < blocks.length; bi++) {
    const { tag, text } = blocks[bi];
    if (!text) continue;

    const prev = blocks[bi - 1];
    if (tag === "SceneHeading" && prev) {
      y -= 8;
    }

    /** @type {string[]} */
    let lines;
    /** @type {import('pdf-lib').PDFFont} */
    let font;
    let tailSlack = 4;

    if (tag === "SceneHeading") {
      font = courierBold;
      lines = wrapLine(text, font, SIZE, ACTION_W);
      tailSlack = 10;
    } else if (tag === "Action") {
      font = courier;
      lines = wrapLine(text, courier, SIZE, ACTION_W);
    } else if (tag === "Char") {
      font = courierBold;
      lines = wrapLine(text, font, SIZE, PAGE_W - 2 * M);
      tailSlack = 2;
    } else if (tag === "CharacterAction") {
      font = courier;
      lines = wrapLine(text, courier, SIZE, DIALOG_W);
      tailSlack = 2;
    } else if (tag === "Parenthetical") {
      font = courierOblique;
      lines = wrapLine(text, courierOblique, SIZE, DIALOG_W);
      tailSlack = 2;
    } else if (tag === "Dialogue") {
      font = courier;
      lines = wrapLine(text, courier, SIZE, DIALOG_W);
      tailSlack = 6;
    } else if (tag === "Transition") {
      font = courier;
      lines = wrapLine(text, courier, SIZE, ACTION_W);
      tailSlack = 12;
    } else {
      throw new Error(`Unknown tag: ${tag}`);
    }

    const blockH = lines.length * LEADING + tailSlack + 4;
    if (y - blockH < M_BOT) {
      page = pdf.addPage([PAGE_W, PAGE_H]);
      pageNum += 1;
      drawPageNumber(page, pageNum, courier);
      y = PAGE_H - M_TOP - 24;
    }

    if (tag === "SceneHeading") {
      y = drawLines(page, lines, font, y, (line) => BODY_L);
    } else if (tag === "Action") {
      y = drawLines(page, lines, font, y, (line) => BODY_L);
    } else if (tag === "Char") {
      y = drawLines(page, lines, font, y, (line) => (PAGE_W - courierBold.widthOfTextAtSize(line, SIZE)) / 2);
    } else if (tag === "CharacterAction" || tag === "Parenthetical") {
      y = drawLines(page, lines, font, y, (line) => {
        const lw = font.widthOfTextAtSize(line, SIZE);
        return DIALOG_L + (DIALOG_W - lw) / 2;
      });
    } else if (tag === "Dialogue") {
      y = drawLines(page, lines, font, y, () => DIALOG_L);
    } else if (tag === "Transition") {
      y = drawLines(page, lines, font, y, (line) => PAGE_W - M - courier.widthOfTextAtSize(line, SIZE));
    }

    y -= tailSlack;
  }

  const bytes = await pdf.save();
  fs.writeFileSync(outFile, bytes);
  console.log(`Wrote ${outFile} (${bytes.length} bytes, ${pageNum} screenplay pages + title)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
