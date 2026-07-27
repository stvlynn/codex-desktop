import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";

export type DirectCompatExportCount = {
  file: string;
  count: number;
};

type CountOptions = {
  fromSpecifier: string;
  legacyPrefix: string | null;
};

const DEFAULT_FROM_SPECIFIER = "../../app-main-legacy-buw-compat-bundle";
const DEFAULT_LEGACY_PREFIX = "legacyAppMainBuw";
const SOURCE_EXT_RE = /\.[cm]?tsx?$/i;

function collectInputFiles(input: string): string[] {
  const stat = fs.statSync(input);
  if (stat.isFile()) return SOURCE_EXT_RE.test(input) ? [input] : [];

  const out: string[] = [];
  const walk = (dir: string): void => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".deobfuscate-javascript"
      ) {
        continue;
      }
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (SOURCE_EXT_RE.test(entry.name) && entry.name !== "index.ts") {
        out.push(full);
      }
    }
  };

  walk(input);
  return out.sort();
}

function unquoteExportName(name: string): string {
  const trimmed = name.trim();
  return trimmed.replace(/^["']|["']$/g, "");
}

function exportedAliasFromSpecifier(specifier: string): string | null {
  const normalized = specifier.trim().replace(/\s+/g, " ");
  if (normalized.length === 0 || normalized.startsWith("type ")) return null;
  const asMatch = normalized.match(/\bas\s+(.+)$/);
  if (asMatch != null) return unquoteExportName(asMatch[1]!);
  return unquoteExportName(normalized);
}

export function countDirectCompatExportsInSource(
  source: string,
  {
    fromSpecifier = DEFAULT_FROM_SPECIFIER,
    legacyPrefix = DEFAULT_LEGACY_PREFIX,
  }: Partial<CountOptions> = {},
): number {
  const exportFromRe =
    /\bexport\s+(type\s+)?\{([^}]*)\}\s+from\s+["']([^"']+)["'];?/g;
  let count = 0;
  let match: RegExpExecArray | null;

  while ((match = exportFromRe.exec(source)) != null) {
    if (match[1] != null || match[3] !== fromSpecifier) continue;
    for (const rawSpecifier of match[2]!.split(",")) {
      const alias = exportedAliasFromSpecifier(rawSpecifier);
      if (alias == null) continue;
      if (legacyPrefix == null || alias.startsWith(legacyPrefix)) count += 1;
    }
  }

  return count;
}

export function countDirectCompatExports(
  files: string[],
  options: Partial<CountOptions> = {},
): DirectCompatExportCount[] {
  return files.map((file) => ({
    file,
    count: countDirectCompatExportsInSource(
      fs.readFileSync(file, "utf-8"),
      options,
    ),
  }));
}

function usage(): never {
  console.error(
    [
      "Usage: count-direct-compat-exports.ts <file-or-dir> [--from <specifier>] [--legacy-prefix <prefix>] [--json]",
      "",
      `Defaults: --from ${DEFAULT_FROM_SPECIFIER} --legacy-prefix ${DEFAULT_LEGACY_PREFIX}`,
      "Use --legacy-prefix '' to count all named re-exports from the source specifier.",
    ].join("\n"),
  );
  process.exit(64);
}

if (import.meta.main) {
  const parsed = parseArgs({
    args: process.argv.slice(2),
    allowPositionals: true,
    options: {
      from: { type: "string" },
      "legacy-prefix": { type: "string" },
      json: { type: "boolean" },
      help: { type: "boolean", short: "h" },
    },
  });

  if (parsed.values.help === true) usage();
  const input = parsed.positionals[0];
  if (input == null) usage();

  const legacyPrefix =
    parsed.values["legacy-prefix"] === ""
      ? null
      : (parsed.values["legacy-prefix"] ?? DEFAULT_LEGACY_PREFIX);
  const counts = countDirectCompatExports(collectInputFiles(input), {
    fromSpecifier: parsed.values.from ?? DEFAULT_FROM_SPECIFIER,
    legacyPrefix,
  });
  const total = counts.reduce((sum, item) => sum + item.count, 0);

  if (parsed.values.json === true) {
    console.log(JSON.stringify({ files: counts, total }, null, 2));
  } else {
    for (const item of counts) {
      console.log(`${path.basename(item.file)}: ${item.count}`);
    }
    console.log(`total: ${total}`);
  }
}
