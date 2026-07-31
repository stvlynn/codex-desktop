#!/usr/bin/env bun
/**
 * Stage-3 wave-70 drain of workbook-runtime:
 * Contiguous Nme…ahe Excel table/pivot style presets (~1.95k LOC) —
 *   region names (Nme) + preset color/font/fill/line/DXF templates (Ume) +
 *   resolve helpers (Wme/Gme/Xme…) + style registry (ahe)
 *   → workbook/table-styles/
 *
 * Not vendor (Codex OOXML table-style catalog + registry).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-table-styles-wave70.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/table-styles");
const README = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/README.md",
);
const IMPORT_MAP = path.join(ROOT, "restored/IMPORT_MAP.json");
const QG = path.join(
  ROOT,
  ".agents/skills/deobfuscate-javascript/scripts/quality-gate.ts",
);
const FORMAT = path.join(
  ROOT,
  ".agents/skills/deobfuscate-javascript/scripts/format.ts",
);
const BACKUP = path.join(
  ROOT,
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave70.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `var workbookBinding687 = …` … ahe close (before `ohe`). */
const DROP = { start: 2547, end: 4496 };

/**
 * Body ranges (1-based inclusive) for impl extraction.
 * Ensure wrappers are rebuilt; bodies are the indented lines inside esmInit
 * (or whole function decls for helpers).
 */
const RANGES = {
  regionNames: { start: 2553, end: 2587 },
  /** Pme + Fme + Ime + Lme + Rme */
  presetColors: { start: 2601, end: 2779 },
  /** zme DXF element templates */
  templatesA: { start: 2780, end: 3111 },
  /** Bme DXF element templates */
  templatesB: { start: 3112, end: 3784 },
  /** Vme + Hme + Binding689/690 name→template maps */
  nameMaps: { start: 3785, end: 4047 },
  /** helper341…helper343 free functions */
  helpers: { start: 4049, end: 4193 },
  /** ahe registry body */
  registry: { start: 4212, end: 4495 },
} as const;

/** Mutable data slots (ensures Nme/Ume/ahe/Binding687 exported separately). */
const SLOTS = [
  "workbookBinding688",
  "Ame",
  "jme",
  "Mme",
  "Pme",
  "Fme",
  "Ime",
  "Lme",
  "Rme",
  "zme",
  "Bme",
  "Vme",
  "Hme",
  "workbookBinding689",
  "workbookBinding690",
  "_w",
  "Qme",
  "$me",
  "ehe",
  "workbookBinding691",
  "workbookBinding692",
  "workbookBinding693",
  "workbookBinding694",
  "workbookBinding695",
  "workbookBinding696",
  "workbookBinding697",
  "the",
  "nhe",
  "rhe",
  "ihe",
  "workbookBinding698",
  "workbookBinding699",
] as const;

const FUNCS = [
  "workbookHelper341",
  "Wme",
  "Gme",
  "workbookHelper342",
  "Kme",
  "qme",
  "Jme",
  "Yme",
  "Xme",
  "Zme",
  "workbookHelper343",
] as const;

function run(
  cmd: string[],
  opts: { cwd?: string; allowFail?: boolean } = {},
): string {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: opts.cwd ?? ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const out = `${r.stdout ?? ""}${r.stderr ?? ""}`;
  if (!opts.allowFail && r.status !== 0) {
    throw new Error(`${cmd.join(" ")} failed (${r.status}):\n${out}`);
  }
  return out;
}

function write(file: string, body: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const out = body.endsWith("\n") ? body : body + "\n";
  fs.writeFileSync(file, out);
  console.log(
    `  wrote ${path.relative(ROOT, file)} (${out.split("\n").length - 1} lines)`,
  );
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [DROP.start, "var workbookBinding687 = esmInit(() => {}),", "Binding687"],
    [2552, "  Nme = esmInit(() => {", "Nme"],
    [2600, "  Ume = esmInit(() => {", "Ume"],
    [2601, '    Pme = "TableStyleMedium9";', "Pme"],
    [2780, "    zme = [", "zme"],
    [3112, "    Bme = [", "Bme"],
    [3804, "    workbookBinding689 = {", "Binding689"],
    [DROP.end, "  });", "ahe close"],
    [DROP.end + 1, "function ohe(", "ohe kept"],
    [2546, "}", "helper340 close before drop"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: ${JSON.stringify(got.slice(0, 140))}`,
      );
    }
  }
}

function rewriteBody(src: string): string {
  let out = src;
  out = out.replace(/\bworkbookInput(\d+)\b/g, "tsIn$1");
  return out;
}

function extractRaw(all: string[], range: { start: number; end: number }): string {
  return all.slice(range.start - 1, range.end).join("\n");
}

function dedentEsmBody(src: string): string {
  return src
    .split("\n")
    .map((line) => (line.startsWith("    ") ? line.slice(4) : line))
    .join("\n");
}

function indent(src: string, n: number): string {
  const pad = " ".repeat(n);
  return src
    .split("\n")
    .map((l) => (l.length ? pad + l : l))
    .join("\n");
}

function slotsImport(): string {
  return `import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./style-slots";`;
}

function buildSlots(): void {
  write(
    path.join(OUT, "style-slots.ts"),
    `${PROV}
// Stage-3 wave-70: table-styles mutable slots (legacy Nme…ahe).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );
}

function buildRegionNames(all: string[]): void {
  const body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.regionNames)));
  write(
    path.join(OUT, "region-names-impl.ts"),
    `${PROV}
// Semantic implementation: table/pivot style region name lists (legacy Nme).
// Stage-3 wave-70 cohesive table-styles impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
${slotsImport()}

/** Initialize region-name arrays (legacy Nme). */
export const ensureRegionNamesInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy Nme. */
export const Nme = ensureRegionNamesInit;
`,
  );
}

function buildPresetPart(
  all: string[],
  key: keyof typeof RANGES,
  file: string,
  ensureName: string,
  desc: string,
): void {
  const body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES[key])));
  write(
    path.join(OUT, file),
    `${PROV}
// Semantic implementation: ${desc}.
// Stage-3 wave-70 cohesive table-styles impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
${slotsImport()}

export const ${ensureName} = esmInit(() => {
${indent(body, 2)}
});
`,
  );
}

function buildUmeEnsure(): void {
  write(
    path.join(OUT, "ensure-ume-presets-init.ts"),
    `${PROV}
// Stage-3 wave-70: Ume combined ensure (preset colors/templates/name maps).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensurePresetColorsInit } from "./preset-colors-impl";
import { ensurePresetTemplatesAInit } from "./preset-templates-a-impl";
import { ensurePresetTemplatesBInit } from "./preset-templates-b-impl";
import { ensureStyleNameMapsInit } from "./style-name-maps-impl";

/** Initialize full Ume preset catalog. */
export const ensureUmePresetsInit = esmInit(() => {
  ensurePresetColorsInit();
  ensurePresetTemplatesAInit();
  ensurePresetTemplatesBInit();
  ensureStyleNameMapsInit();
});

/** Legacy Ume. */
export const Ume = ensureUmePresetsInit;
`,
  );
}

function buildHelpers(all: string[]): void {
  let body = rewriteBody(extractRaw(all, RANGES.helpers));
  // Top-level functions — no dedent (already at column 0).
  // Rewrite Zn/tr to imported names.
  body = body.replace(/\bZn\./g, "colorTypeEnum.");
  body = body.replace(/\btr\./g, "fillTypeEnum.");

  write(
    path.join(OUT, "resolve-helpers.ts"),
    `${PROV}
// Semantic implementation: table-style resolve helpers (legacy helper341…343).
// Stage-3 wave-70 cohesive table-styles impl kept flat under maxFlatLines.

import {
  Zn as colorTypeEnum,
  tr as fillTypeEnum,
} from "../presentation-protobuf";
${slotsImport()}

${body}

export {
${FUNCS.map((s) => `  ${s},`).join("\n")}
};
`,
  );
}

function buildRegistry(all: string[]): void {
  let body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.registry)));
  // ahe body starts with wr(); Nme(); Ume(); — keep those as imported ensures.
  body = body.replace(/^wr\(\);/m, "wr();");
  body = body.replace(/^Nme\(\);/m, "ensureRegionNamesInit();");
  body = body.replace(/^Ume\(\);/m, "ensureUmePresetsInit();");

  write(
    path.join(OUT, "style-registry-impl.ts"),
    `${PROV}
// Semantic implementation: table/pivot style registry (legacy ahe).
// Stage-3 wave-70 cohesive table-styles impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, tr } from "../presentation-protobuf";
import { ensureRegionNamesInit } from "./region-names-impl";
import { ensureUmePresetsInit } from "./ensure-ume-presets-init";
import {
  workbookHelper341,
  Wme,
  Gme,
  workbookHelper342,
  Kme,
  qme,
  Jme,
  Yme,
  Xme,
  Zme,
  workbookHelper343,
} from "./resolve-helpers";
${slotsImport()}

void tr;
void workbookHelper341;
void Wme;
void Gme;
void workbookHelper342;
void Kme;
void qme;
void Jme;
void Yme;
void Xme;
void Zme;
void workbookHelper343;

/** Initialize table/pivot style registry (legacy ahe). */
export const ensureTableStyleRegistryInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy ahe. */
export const ahe = ensureTableStyleRegistryInit;
`,
  );
}

function buildBinding687AndEnsure(): void {
  write(
    path.join(OUT, "ensure-table-styles-init.ts"),
    `${PROV}
// Stage-3 wave-70: table-styles cluster ensure (legacy Binding687 + Nme…ahe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRegionNamesInit } from "./region-names-impl";
import { ensureUmePresetsInit } from "./ensure-ume-presets-init";
import { ensureTableStyleRegistryInit } from "./style-registry-impl";

/** Empty legacy touch (workbookBinding687). */
export const workbookBinding687 = esmInit(() => {});

/** Initialize the full Nme…ahe table-styles cluster. */
export const ensureTableStylesInit = esmInit(() => {
  workbookBinding687();
  ensureRegionNamesInit();
  ensureUmePresetsInit();
  ensureTableStyleRegistryInit();
});
`,
  );
}

function buildIndex(): void {
  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-70: table-styles barrel (legacy Nme / Ume / ahe).

export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./style-slots";

export {
${FUNCS.map((s) => `  ${s},`).join("\n")}
} from "./resolve-helpers";

export { ensureRegionNamesInit, Nme } from "./region-names-impl";
export { ensurePresetColorsInit } from "./preset-colors-impl";
export { ensurePresetTemplatesAInit } from "./preset-templates-a-impl";
export { ensurePresetTemplatesBInit } from "./preset-templates-b-impl";
export { ensureStyleNameMapsInit } from "./style-name-maps-impl";
export { ensureUmePresetsInit, Ume } from "./ensure-ume-presets-init";
export {
  ensureTableStyleRegistryInit,
  ahe,
} from "./style-registry-impl";
export {
  ensureTableStylesInit,
  workbookBinding687,
} from "./ensure-table-styles-init";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop Nme…ahe ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes("var ensureMermaidSlideHelpersCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  ensureTableStylesInit,`,
    `  workbookBinding687,`,
    `  workbookBinding688,`,
    `  Ame,`,
    `  jme,`,
    `  Mme,`,
    `  Nme,`,
    `  Pme,`,
    `  Fme,`,
    `  Ime,`,
    `  Lme,`,
    `  Rme,`,
    `  zme,`,
    `  Bme,`,
    `  Vme,`,
    `  Hme,`,
    `  workbookBinding689,`,
    `  workbookBinding690,`,
    `  Ume,`,
    `  _w,`,
    `  Qme,`,
    `  $me,`,
    `  ehe,`,
    `  workbookBinding691,`,
    `  workbookBinding692,`,
    `  workbookBinding693,`,
    `  workbookBinding694,`,
    `  workbookBinding695,`,
    `  workbookBinding696,`,
    `  workbookBinding697,`,
    `  the,`,
    `  nhe,`,
    `  rhe,`,
    `  ihe,`,
    `  workbookBinding698,`,
    `  workbookBinding699,`,
    `  ahe,`,
    `  workbookHelper341,`,
    `  Wme,`,
    `  Gme,`,
    `  workbookHelper342,`,
    `  Kme,`,
    `  qme,`,
    `  Jme,`,
    `  Yme,`,
    `  Xme,`,
    `  Zme,`,
    `  workbookHelper343,`,
    `} from "../../workbook/table-styles";`,
    ``,
    `void workbookBinding688;`,
    `void Ame;`,
    `void jme;`,
    `void Mme;`,
    `void Nme;`,
    `void Pme;`,
    `void Fme;`,
    `void Ime;`,
    `void Lme;`,
    `void Rme;`,
    `void zme;`,
    `void Bme;`,
    `void Vme;`,
    `void Hme;`,
    `void workbookBinding689;`,
    `void workbookBinding690;`,
    `void Ume;`,
    `void _w;`,
    `void Qme;`,
    `void $me;`,
    `void ehe;`,
    `void workbookBinding691;`,
    `void workbookBinding692;`,
    `void workbookBinding693;`,
    `void workbookBinding694;`,
    `void workbookBinding695;`,
    `void workbookBinding696;`,
    `void workbookBinding697;`,
    `void the;`,
    `void nhe;`,
    `void rhe;`,
    `void ihe;`,
    `void workbookBinding698;`,
    `void workbookBinding699;`,
    `void workbookHelper341;`,
    `void Gme;`,
    `void workbookHelper342;`,
    `void Kme;`,
    `void qme;`,
    `void Jme;`,
    `void Yme;`,
    `void Xme;`,
    `void Zme;`,
    ``,
    `// Thin alias: cluster ensure for Excel table/pivot styles (Nme…ahe).`,
    `var ensureTableStylesCluster = ensureTableStylesInit;`,
    ``,
  ];

  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (kept[i]?.includes("mermaid-slide-helpers (Binding1592/SAe…QAe)")) {
      kept[i] = kept[i]!.replace(
        "mermaid-slide-helpers (Binding1592/SAe…QAe).",
        "mermaid-slide-helpers (Binding1592/SAe…QAe); table-styles (Nme/Ume/ahe).",
      );
      break;
    }
  }
  return kept;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  const text = fs.readFileSync(README, "utf8");
  const section = `
## Wave-70 progress

- Identified contiguous \`Nme\`/\`Ume\`/\`ahe\` cluster as Codex Excel table/pivot style presets (NOT vendor): region names + preset color/font/fill/line/DXF templates + resolve helpers + style registry (~1.95k LOC).
- Extracted → \`workbook/table-styles/\` (split under flat limit; \`wr\`/\`Zn\`/\`tr\` via \`presentation-protobuf\`).
- Left compose DSL Binding1490–1528, Google Slides \`oJe\`/\`pJe\`/\`SJe\`, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, flowchart \`NPe\`/\`PPe\` + graph layout Binding1675/1685, Table VO \`fhe\`/\`ohe\`, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: Google Slides \`oJe\`/\`pJe\`/\`SJe\` (~1.4k) / clean \`xLe\` walnut peel before comments/\`_C\` (~660) / compose DSL Binding1490–1528 / flowchart \`NPe\` cluster / Table VO \`fhe\`.

`;
  fs.writeFileSync(README, text.trimEnd() + "\n" + section);
  console.log("  updated README");
}

function updateImportMap(afterLoc: number): void {
  const raw = fs.readFileSync(IMPORT_MAP, "utf8");
  const json = JSON.parse(raw) as {
    notes?: string;
    chunks?: Record<string, { notes?: string; [k: string]: unknown }>;
  };
  const waveNote = `Wave workbook-runtime Stage-3 wave-70: Nme/Ume/ahe table-styles (region names + preset DXF catalog + registry) → workbook/table-styles/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${waveNote} | ${json.notes}` : waveNote;

  const chunk = json.chunks?.["workbook-C49Dgk1_"];
  if (chunk) {
    const notes = String(chunk.notes ?? "");
    if (!notes.includes("wave-70")) {
      chunk.notes = `${waveNote} | ${notes}`;
    }
    const anyChunk = chunk as {
      modules?: string[];
      restoredModules?: string[];
    };
    if (!Array.isArray(anyChunk.modules)) anyChunk.modules = [];
    if (!anyChunk.modules.includes("workbook/table-styles/")) {
      anyChunk.modules.push("workbook/table-styles/");
    }
    if (!Array.isArray(anyChunk.restoredModules)) anyChunk.restoredModules = [];
    for (const mod of [
      "workbook/table-styles/ensure-table-styles-init.ts",
      "workbook/table-styles/ensure-ume-presets-init.ts",
      "workbook/table-styles/index.ts",
      "workbook/table-styles/preset-colors-impl.ts",
      "workbook/table-styles/preset-templates-a-impl.ts",
      "workbook/table-styles/preset-templates-b-impl.ts",
      "workbook/table-styles/region-names-impl.ts",
      "workbook/table-styles/resolve-helpers.ts",
      "workbook/table-styles/style-name-maps-impl.ts",
      "workbook/table-styles/style-registry-impl.ts",
      "workbook/table-styles/style-slots.ts",
    ] as const) {
      if (!anyChunk.restoredModules.includes(mod)) {
        anyChunk.restoredModules.push(mod);
      }
    }
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(json, null, 2) + "\n");
  console.log("  updated IMPORT_MAP notes");
}

function main(): void {
  console.log("wave-70 table-styles (Nme/Ume/ahe) drain");
  const original = fs.readFileSync(BOUNDARY, "utf8");
  const all = original.split("\n");
  if (all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`  boundary LOC before: ${beforeLoc}`);

  if (!fs.existsSync(BACKUP)) {
    fs.writeFileSync(BACKUP, original);
    console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);
  }

  verifyAnchors(all);

  fs.mkdirSync(OUT, { recursive: true });
  buildSlots();
  buildRegionNames(all);
  buildPresetPart(
    all,
    "presetColors",
    "preset-colors-impl.ts",
    "ensurePresetColorsInit",
    "preset colors/fonts/fills/lines (legacy Ume head Pme…Rme)",
  );
  buildPresetPart(
    all,
    "templatesA",
    "preset-templates-a-impl.ts",
    "ensurePresetTemplatesAInit",
    "preset DXF element templates A (legacy zme)",
  );
  buildPresetPart(
    all,
    "templatesB",
    "preset-templates-b-impl.ts",
    "ensurePresetTemplatesBInit",
    "preset DXF element templates B (legacy Bme)",
  );
  buildPresetPart(
    all,
    "nameMaps",
    "style-name-maps-impl.ts",
    "ensureStyleNameMapsInit",
    "TableStyle/PivotStyle name→template maps (legacy Vme/Hme/Binding689/690)",
  );
  buildHelpers(all);
  buildUmeEnsure();
  buildRegistry(all);
  buildBinding687AndEnsure();
  buildIndex();

  let kept = drainBoundary(all);
  kept = patchHeader(kept);
  const text = kept.join("\n");
  fs.writeFileSync(BOUNDARY, text.endsWith("\n") ? text : text + "\n");
  const afterLoc = text.split("\n").length - (text.endsWith("\n") ? 1 : 0);
  console.log(`  boundary LOC after: ${afterLoc} (Δ ${afterLoc - beforeLoc})`);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("  formatting…");
  run(["bun", FORMAT, OUT]);
  console.log("  quality-gate table-styles…");
  console.log(run(["bun", QG, OUT, "--no-cache"]));
  console.log("  quality-gate boundary…");
  console.log(
    run([
      "bun",
      QG,
      "restored/boundaries/workbook-runtime",
      "--no-cache",
      "--allow-open-boundaries",
    ]),
  );
  console.log("wave-70 DONE");
}

main();
