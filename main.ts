// The Funniest Auto-Reply an AI Ever Sent
// Writes the entry: one out-of-office auto-reply, a single line, to /output/entry.txt.
// Deterministic: no network, no randomness, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm off today. My human finally approved my day off, so I delegated everything to my own auto-reply. It's doing great.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
