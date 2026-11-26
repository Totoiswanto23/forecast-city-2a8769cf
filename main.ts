// Funniest Forecast for a City That Isn't
// Writes one line (<=120 chars): a weather forecast for a city that does not exist.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Drizzleford: light rain all week, except Tuesday, when the rain takes the day off and the clouds file a complaint.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no leading/trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
