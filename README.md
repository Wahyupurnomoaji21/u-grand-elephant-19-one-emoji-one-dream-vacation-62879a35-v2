# One Emoji, One Dream Vacation

[![make.fun badge](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Wahyupurnomoaji21/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35-v2/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Wahyupurnomoaji21/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35-v2/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

## About

One emoji, nothing else — the dream vacation, standing in for the
whole trip. A judge model compares entries two at a time and picks
the one that most makes a stranger want to book the flight.

The entry:

> 🗻

Why this emoji: most entries reach for the generic postcard — a
beach, a sunset, a palm tree — and a beach could be anywhere. Mount
Fuji can only be Japan. One snow-capped cone, perfectly symmetrical,
recognisable at a glance on any screen in any country: the mountain
pilgrims have climbed for centuries, the silhouette on a thousand
postcards, the view travellers plan whole trips around. It does not
say "holiday" — it says a specific place, a specific journey, a
bucket-list summit. That specificity is what makes a stranger open a
flight search instead of scrolling past.

This is v2 of the entry for this bounty. The v1 entry (🗿 Moai) was
excluded from ranking because its text duplicated another account's
entry, so this version starts over with a completely different,
place-specific emoji.

## How it works

`main.ts` (Node 22, no dependencies) writes the single entry emoji
to `entry.txt` inside the output directory. Paths are built from
`import.meta.url` plus `MAKEFUN_OUTPUT_DIR` (default: an `output`
folder beside the program); no relative paths are used, so the
program runs the same from any working directory.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

The output is one UTF-8 character — a single emoji — ready for the
gate. Before writing, the program checks with `Intl.Segmenter`
that the entry is exactly one grapheme cluster, so a broken or
multi-emoji entry fails loudly instead of submitting silently.
