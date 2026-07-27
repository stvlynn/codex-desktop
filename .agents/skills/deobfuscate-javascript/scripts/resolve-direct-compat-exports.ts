import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";

export type DirectCompatExportResolution = {
  file: string;
  sourceAlias: string;
  exportedName: string;
  bundleInternalName: string | null;
  bundleDefinitionLine: number | null;
};

type ResolveOptions = {
  fromSpecifier: string;
  legacyPrefix: string | null;
  bundlePath: string | null;
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

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function unquoteExportName(name: string): string {
  const trimmed = name.trim();
  return trimmed.replace(/^["']|["']$/g, "");
}

function parseSpecifier(specifier: string): {
  localName: string;
  exportedName: string;
} | null {
  const normalized = specifier.trim().replace(/\s+/g, " ");
  if (normalized.length === 0 || normalized.startsWith("type ")) return null;

  const asMatch = normalized.match(/^(.+?)\s+as\s+(.+)$/);
  if (asMatch != null) {
    return {
      localName: unquoteExportName(asMatch[1]!),
      exportedName: unquoteExportName(asMatch[2]!),
    };
  }

  const name = unquoteExportName(normalized);
  return { localName: name, exportedName: name };
}

function parseReExportsFromSource(
  source: string,
  fromSpecifier: string,
  legacyPrefix: string | null,
): Array<{ sourceAlias: string; exportedName: string }> {
  const exportFromRe =
    /\bexport\s+(type\s+)?\{([^}]*)\}\s+from\s+["']([^"']+)["'];?/g;
  const out: Array<{ sourceAlias: string; exportedName: string }> = [];
  let match: RegExpExecArray | null;

  while ((match = exportFromRe.exec(source)) != null) {
    if (match[1] != null || match[3] !== fromSpecifier) continue;
    for (const rawSpecifier of match[2]!.split(",")) {
      const parsed = parseSpecifier(rawSpecifier);
      if (parsed == null) continue;
      if (
        legacyPrefix == null ||
        parsed.exportedName.startsWith(legacyPrefix)
      ) {
        out.push({
          sourceAlias: parsed.localName,
          exportedName: parsed.exportedName,
        });
      }
    }
  }

  return out;
}

function parseBundleExportMap(bundleSource: string): Map<string, string> {
  const exportRe = /\bexport\s+\{([^}]*)\}\s*;?/g;
  const exportMap = new Map<string, string>();
  let match: RegExpExecArray | null;

  while ((match = exportRe.exec(bundleSource)) != null) {
    for (const rawSpecifier of match[1]!.split(",")) {
      const parsed = parseSpecifier(rawSpecifier);
      if (parsed == null) continue;
      exportMap.set(parsed.exportedName, parsed.localName);
    }
  }

  return exportMap;
}

function lineNumberForIndex(source: string, index: number): number {
  let line = 1;
  for (let cursor = 0; cursor < index; cursor += 1) {
    if (source.charCodeAt(cursor) === 10) line += 1;
  }
  return line;
}

function findDefinitionLine(source: string, name: string): number | null {
  const escaped = escapeRegExp(name);
  const patterns = [
    new RegExp(`\\bfunction\\s+${escaped}\\b`),
    new RegExp(`\\bclass\\s+${escaped}\\b`),
    new RegExp(`\\b(?:var|let|const)\\b[\\s\\S]{0,240}?\\b${escaped}\\b`),
    new RegExp(`\\b${escaped}\\s*=`),
  ];

  for (const pattern of patterns) {
    const match = pattern.exec(source);
    if (match != null) return lineNumberForIndex(source, match.index);
  }

  return null;
}

function resolveBundlePath(
  inputFile: string,
  fromSpecifier: string,
  explicitBundlePath: string | null,
): string {
  if (explicitBundlePath != null) return explicitBundlePath;

  const base = path.resolve(path.dirname(inputFile), fromSpecifier);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.jsx`,
  ];
  const found = candidates.find((candidate) => fs.existsSync(candidate));
  if (found == null) {
    throw new Error(
      `Could not infer bundle path for ${inputFile}; pass --bundle explicitly`,
    );
  }
  return found;
}

export function resolveDirectCompatExportsInSource(
  file: string,
  source: string,
  bundleSource: string,
  options: Pick<ResolveOptions, "fromSpecifier" | "legacyPrefix">,
): DirectCompatExportResolution[] {
  const bundleExportMap = parseBundleExportMap(bundleSource);
  return parseReExportsFromSource(
    source,
    options.fromSpecifier,
    options.legacyPrefix,
  ).map((item) => {
    const bundleInternalName = bundleExportMap.get(item.sourceAlias) ?? null;
    return {
      file,
      sourceAlias: item.sourceAlias,
      exportedName: item.exportedName,
      bundleInternalName,
      bundleDefinitionLine:
        bundleInternalName == null
          ? null
          : findDefinitionLine(bundleSource, bundleInternalName),
    };
  });
}

export function resolveDirectCompatExports(
  files: string[],
  options: Partial<ResolveOptions> = {},
): DirectCompatExportResolution[] {
  const fromSpecifier = options.fromSpecifier ?? DEFAULT_FROM_SPECIFIER;
  const legacyPrefix =
    options.legacyPrefix === undefined
      ? DEFAULT_LEGACY_PREFIX
      : options.legacyPrefix;
  const bundleSources = new Map<string, string>();

  return files.flatMap((file) => {
    const bundlePath = resolveBundlePath(
      file,
      fromSpecifier,
      options.bundlePath ?? null,
    );
    let bundleSource = bundleSources.get(bundlePath);
    if (bundleSource == null) {
      bundleSource = fs.readFileSync(bundlePath, "utf-8");
      bundleSources.set(bundlePath, bundleSource);
    }
    return resolveDirectCompatExportsInSource(
      file,
      fs.readFileSync(file, "utf-8"),
      bundleSource,
      { fromSpecifier, legacyPrefix },
    );
  });
}

function usage(): never {
  console.error(
    [
      "Usage: resolve-direct-compat-exports.ts <file-or-dir> [--bundle <bundle-file>] [--from <specifier>] [--legacy-prefix <prefix>] [--json]",
      "",
      `Defaults: --from ${DEFAULT_FROM_SPECIFIER} --legacy-prefix ${DEFAULT_LEGACY_PREFIX}`,
      "Use --legacy-prefix '' to resolve all named re-exports from the source specifier.",
    ].join("\n"),
  );
  process.exit(64);
}

if (import.meta.main) {
  const parsed = parseArgs({
    args: process.argv.slice(2),
    allowPositionals: true,
    options: {
      bundle: { type: "string" },
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
  const resolutions = resolveDirectCompatExports(collectInputFiles(input), {
    bundlePath: parsed.values.bundle ?? null,
    fromSpecifier: parsed.values.from ?? DEFAULT_FROM_SPECIFIER,
    legacyPrefix,
  });

  if (parsed.values.json === true) {
    console.log(JSON.stringify(resolutions, null, 2));
  } else {
    for (const item of resolutions) {
      const location =
        item.bundleDefinitionLine == null
          ? ""
          : `:${item.bundleDefinitionLine}`;
      const internal = item.bundleInternalName ?? "<unresolved>";
      console.log(
        `${path.basename(item.file)}: ${item.sourceAlias} -> ${internal}${location} -> ${item.exportedName}`,
      );
    }
    console.log(`total: ${resolutions.length}`);
  }
}
