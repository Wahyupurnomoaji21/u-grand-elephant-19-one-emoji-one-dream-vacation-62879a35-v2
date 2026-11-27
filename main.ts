// One Emoji, One Dream Vacation — make.fun entry (v2).
//
// The whole dream vacation in a single glyph: Mount Fuji, Japan.
// Snow-capped, symmetrical, unmistakable at any size — the postcard
// every traveller keeps in their head. No words, no beach, no sunset:
// one mountain that has pulled pilgrims and climbers for centuries,
// and still makes a stranger want to book the flight to Tokyo and
// keep going until the cone fills the window.
//
// The program does exactly two things, in order:
//   1. resolveEntry() — pick the dream emoji and prove it is one
//      grapheme cluster, so a bad entry fails loudly, never silently.
//   2. writeEntry() — write that single emoji to entry.txt.
//
// Runtime: Node 22, zero dependencies. Every path is resolved from
// this file's own location (import.meta.url) and from the
// MAKEFUN_OUTPUT_DIR environment variable, so the program runs
// identically from any working directory — the grader never runs
// it from the repo root.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: U+1F5FB MOUNT FUJI. One grapheme, one emoji, 4 bytes.
const DREAM = "\u{1F5FB}";

// Resolve the entry: validate the dream emoji before anything
// touches the disk. The scorer only accepts 1–8 characters of
// non-whitespace text, and the brief asks for exactly one emoji.
// Intl.Segmenter counts what a human sees — a single grapheme
// cluster — so a composed emoji can never slip through as two.
function resolveEntry(): string {
  const clusters = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(DREAM)];
  if (clusters.length !== 1) {
    throw new Error(`expected exactly one emoji grapheme, found ${clusters.length}`);
  }
  if (DREAM.trim() === "") {
    throw new Error("entry must not be blank");
  }
  return DREAM;
}

// Write the validated entry to entry.txt inside the output
// directory, creating the directory first if needed.
function writeEntry(outDir: string, entry: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, { encoding: "utf8" });
}

// Where the output lives: the program's own folder is the anchor,
// the harness variable overrides it, and /output is the last resort.
// Never a bare relative path, so the working directory cannot move
// the entry somewhere the grader will not look.
const programDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(programDir, "output");
writeEntry(outDir, resolveEntry());
