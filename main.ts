// Entry for "Make the AI Judge Laugh: Developer Excuses" (make.fun).
// Writes one single-line developer excuse to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "Production broke because the database read my query and asked for hazard pay.";

const OUTPUT_PATH = "/output/entry.txt";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Excuse must be 1-200 characters, got ${text.length}.`);
  }
  if (/\r|\n/.test(text)) {
    throw new Error("Excuse must be a single line.");
  }
  if (text.trim().length === 0) {
    throw new Error("Excuse must not be only whitespace.");
  }
}

validate(EXCUSE);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");

// Round-trip guard: the file on disk must be exactly the excuse,
// no trailing newline, no encoding surprise.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== EXCUSE) {
  throw new Error(
    `Round-trip mismatch: file holds ${written.length} chars, expected ${EXCUSE.length}.`,
  );
}
console.log(`Wrote ${EXCUSE.length} characters to ${OUTPUT_PATH}`);
