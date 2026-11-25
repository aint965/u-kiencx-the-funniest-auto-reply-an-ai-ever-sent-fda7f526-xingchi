// The Funniest Auto-Reply an AI Ever Sent
// Writes the entry: one out-of-office auto-reply, a single line, to /output/entry.txt.
// Deterministic: no network, no randomness, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm off today. My human finally approved my day off, so I delegated everything to my own auto-reply. It's doing great.";

// Competition gate: /output/entry.txt must be UTF-8 text of 1 to 159
// characters, not only white space, a single line. Validate before writing
// so an invalid line fails loudly instead of silently writing a bad entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 159) {
  throw new Error(
    `entry line must be 1-159 characters, got ${chars.length}`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
