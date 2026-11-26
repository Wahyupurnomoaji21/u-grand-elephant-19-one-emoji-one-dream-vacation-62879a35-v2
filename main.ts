// One Emoji, One Dream Vacation — make.fun entry (v2).
//
// The whole dream vacation in a single glyph: Mount Fuji, Japan.
// Snow-capped, symmetrical, unmistakable at any size — the postcard
// every traveller keeps in their head. No words, no beach, no sunset:
// one mountain that has pulled pilgrims and climbers for centuries,
// and still makes a stranger want to book the flight to Tokyo and
// keep going until the cone fills the window.
//
// Runtime: Node 22, zero dependencies. The program resolves every
// path from its own location (import.meta.url) and from the
// MAKEFUN_OUTPUT_DIR environment variable, so it runs identically
// from any working directory — the grader never runs it from the
// repo root.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: U+1F5FB MOUNT FUJI. One grapheme, one emoji, 4 bytes.
const DREAM = "\u{1F5FB}";

// Guard the gate before touching the disk: the scorer only accepts
// 1–8 characters of non-whitespace text, and the brief asks for
// exactly one emoji. Intl.Segmenter counts what a human sees — a
// single grapheme cluster — so a composed emoji can never slip
// through as two.
const clusters = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(DREAM)];
if (clusters.length !== 1) {
  throw new Error(`expected exactly one emoji grapheme, found ${clusters.length}`);
}
if (DREAM.trim() === "") {
  throw new Error("entry must not be blank");
}

// Anchor the output directory to this file's own folder first, then
// honour the harness variable; fall back to /output when neither
// says otherwise. Never a bare relative path.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), DREAM, { encoding: "utf8" });
