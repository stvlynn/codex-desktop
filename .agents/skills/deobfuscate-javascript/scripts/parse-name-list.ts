import * as fs from "node:fs";

/**
 * Parse a CLI name list that may mix comma-separated tokens with `@file`
 * references (one name per line; `#` comments + blank lines skipped).
 *
 * Avoids ARG_MAX when thousands of basenames/stems must be passed:
 *   --treat-as-npm @./npm-stems.txt
 *   --only @./shard-01.txt
 */
export function parseNameListArg(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  const out: string[] = [];
  for (const token of raw.split(",").map((s) => s.trim()).filter(Boolean)) {
    if (token.startsWith("@")) {
      const filePath = token.slice(1);
      if (!filePath) {
        throw new Error("empty @file path in name list");
      }
      if (!fs.existsSync(filePath)) {
        throw new Error(`name-list @file not found: ${filePath}`);
      }
      const text = fs.readFileSync(filePath, "utf-8");
      for (const line of text.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        out.push(trimmed);
      }
      continue;
    }
    out.push(token);
  }
  return out;
}
