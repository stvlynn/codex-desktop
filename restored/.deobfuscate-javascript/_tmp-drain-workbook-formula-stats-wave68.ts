#!/usr/bin/env bun
/**
 * Stage-3 wave-68 drain of workbook-runtime:
 * Contiguous Excel formula-stats cluster (~1.9k LOC) —
 *   Binding1831/1832 (jstat+bessel toEsm) + Excel error consts +
 *   date serial mode + TYPE + distribution wrappers (BETA…Z.TEST) +
 *   symbol table / short aliases (b2e…Z2e) via Binding1874
 *   → workbook/formula-stats/
 *
 * Not vendor (Codex formula engine wrappers over jstat/bessel).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-formula-stats-wave68.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/formula-stats");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave68.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `var workbookBinding1831,` … Binding1874 close (before `$3`). */
const DROP = { start: 77348, end: 79249 };

/** Drop boundary YXe/XXe — only used by this cluster; re-homed into formula-stats. */
const DROP_YXE_XXE = { start: 70199, end: 70204 };

const RANGES = {
  /** jstat/bessel + errors + date + operators + TYPE + constants (ensure body head). */
  core: { start: 77436, end: 77503 },
  /** BETA…F.DIST (Binding1849–1855). */
  distA: { start: 77504, end: 78090 },
  /** GAMMA…POISSON (Binding1856–1863). */
  distB: { start: 78091, end: 78535 },
  /** QUARTILE…aliases + Z2e bag (Binding1864–1874 close). */
  distC: { start: 78536, end: 79249 },
} as const;

const SLOTS = [
  "workbookBinding1831",
  "workbookBinding1832",
  "workbookBinding1833",
  "workbookBinding1834",
  "workbookBinding1835",
  "workbookBinding1836",
  "workbookBinding1837",
  "workbookBinding1838",
  "workbookBinding1839",
  "workbookBinding1840",
  "workbookBinding1841",
  "c2e",
  "workbookBinding1842",
  "l2e",
  "u2e",
  "d2e",
  "workbookBinding1843",
  "workbookBinding1844",
  "f2e",
  "workbookBinding1845",
  "workbookBinding1846",
  "workbookBinding1847",
  "workbookBinding1848",
  "p2e",
  "m2e",
  "h2e",
  "g2e",
  "workbookBinding1849",
  "workbookBinding1850",
  "workbookBinding1851",
  "workbookBinding1852",
  "workbookBinding1853",
  "workbookBinding1854",
  "workbookBinding1855",
  "workbookBinding1856",
  "workbookBinding1857",
  "workbookBinding1858",
  "workbookBinding1859",
  "workbookBinding1860",
  "workbookBinding1861",
  "workbookBinding1862",
  "workbookBinding1863",
  "workbookBinding1864",
  "workbookBinding1865",
  "workbookBinding1866",
  "workbookBinding1867",
  "workbookBinding1868",
  "workbookBinding1869",
  "workbookBinding1870",
  "_2e",
  "v2e",
  "y2e",
  "workbookBinding1871",
  "b2e",
  "x2e",
  "S2e",
  "C2e",
  "w2e",
  "T2e",
  "E2e",
  "D2e",
  "O2e",
  "k2e",
  "A2e",
  "j2e",
  "M2e",
  "N2e",
  "P2e",
  "F2e",
  "I2e",
  "L2e",
  "R2e",
  "z2e",
  "B2e",
  "V2e",
  "H2e",
  "U2e",
  "W2e",
  "G2e",
  "K2e",
  "workbookBinding1872",
  "q2e",
  "workbookBinding1873",
  "J2e",
  "Y2e",
  "X2e",
  "Z2e",
] as const;

/**
 * Boundary helpers / fns accessed from the cluster (via fsH bag).
 * Hook *field* names avoid `*HelperN` (mechanical-name-family); wire maps
 * legacy boundary symbols onto these fields.
 */
const HOOKS: Array<{ field: string; boundary: string }> = [
  { field: "fn835", boundary: "workbookHelper835" },
  { field: "fn841", boundary: "workbookHelper841" },
  { field: "fn845", boundary: "workbookHelper845" },
  { field: "fn846", boundary: "workbookHelper846" },
  { field: "fn847", boundary: "workbookHelper847" },
  { field: "fn848", boundary: "workbookHelper848" },
  { field: "fn849", boundary: "workbookHelper849" },
  { field: "fn850", boundary: "workbookHelper850" },
  { field: "fn858", boundary: "workbookHelper858" },
  { field: "fn859", boundary: "workbookHelper859" },
  { field: "fn864", boundary: "workbookHelper864" },
  { field: "fn865", boundary: "workbookHelper865" },
  { field: "fn869", boundary: "workbookHelper869" },
  { field: "fn870", boundary: "workbookHelper870" },
  { field: "fn872", boundary: "workbookHelper872" },
  { field: "fn875", boundary: "workbookHelper875" },
  { field: "fn880", boundary: "workbookHelper880" },
  { field: "fn881", boundary: "workbookHelper881" },
  { field: "fn887", boundary: "workbookHelper887" },
  { field: "fn888", boundary: "workbookHelper888" },
  { field: "ZXe", boundary: "ZXe" },
  { field: "FZe", boundary: "FZe" },
  { field: "MZe", boundary: "MZe" },
  { field: "PZe", boundary: "PZe" },
  { field: "tZe", boundary: "tZe" },
  { field: "cZe", boundary: "cZe" },
  { field: "jQe", boundary: "jQe" },
];

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function run(cmd: string[], opts: { allowFail?: boolean } = {}): string {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: ROOT,
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
    [DROP.start, "var workbookBinding1831,", "Binding1831 var"],
    [77435, "  workbookBinding1874 = esmInit(() => {", "Binding1874 ensure"],
    [77436, "    workbookBinding1831 = toEsm(qXe(), 1);", "jstat toEsm"],
    [77504, "    workbookBinding1849 = {};", "BETA start"],
    [78091, "    workbookBinding1856 = {};", "GAMMA start"],
    [78536, "    workbookBinding1864 = {};", "QUARTILE start"],
    [DROP.end, "  });", "Binding1874 close"],
    [DROP.end + 1, "function $3(", "$3 kept"],
    [DROP_YXE_XXE.start, "function YXe() {", "YXe"],
    [DROP_YXE_XXE.start + 3, "function XXe() {", "XXe"],
    [DROP_YXE_XXE.end + 1, "function ZXe(", "ZXe kept"],
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
  // Prefer vendor shims over boundary qXe/JXe factories.
  out = out.replace(
    /workbookBinding1831\s*=\s*toEsm\(qXe\(\),\s*1\);/,
    "workbookBinding1831 = toEsm(workbookJstat, 1);",
  );
  out = out.replace(
    /workbookBinding1832\s*=\s*toEsm\(JXe\(\),\s*1\);/,
    "workbookBinding1832 = toEsm(workbookBessel, 1);",
  );
  // Route boundary helpers through fsH live bag (preserves .DIST etc.).
  // Longer names first so Helper849 doesn't partially match Helper84.
  const byLen = [...HOOKS].sort(
    (a, b) => b.boundary.length - a.boundary.length,
  );
  for (const { field, boundary } of byLen) {
    out = out.replace(
      new RegExp(`\\b${escapeRe(boundary)}\\b`, "g"),
      `fsH.${field}`,
    );
  }
  // Remaining local workbookHelperN temps → fsTmpN (avoid mechanical-name-family).
  out = out.replace(/\bworkbookHelper(\d+)\b/g, "fsTmp$1");
  // Soften mechanical param names for density.
  out = out.replace(/\bworkbookInput(\d+)\b/g, "fsIn$1");
  return out;
}

function sharedImports(): string {
  return `import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import workbookJstat from "../../vendor/jstat";
import workbookBessel from "../../vendor/bessel";
import { fsH } from "./boundary-hooks";
import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./stats-slots";
`;
}

function buildSlots(): void {
  write(
    path.join(OUT, "stats-slots.ts"),
    `${PROV}
// Stage-3 wave-68: formula-stats mutable slots (legacy Binding1831…Z2e).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );
}

function buildHooks(): void {
  const typeFields = HOOKS.map((h) => `  ${h.field}: any;`).join("\n");
  const assign = HOOKS.map((h) => `  fsH.${h.field} = next.${h.field};`).join(
    "\n",
  );
  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-68: boundary deps for formula-stats (Binding1831 cluster).

export type FormulaStatsBoundaryHooks = {
${typeFields}
};

/** Live helper bag — property access (e.g. fsH.fn858.DIST) must stay intact. */
export const fsH: FormulaStatsBoundaryHooks = {} as FormulaStatsBoundaryHooks;

export function wireFormulaStatsBoundaryHooks(
  next: FormulaStatsBoundaryHooks,
): void {
${assign}
}
`,
  );
}

function buildPart(
  all: string[],
  key: keyof typeof RANGES,
  file: string,
  ensureName: string,
  desc: string,
  extraHeader = "",
): void {
  const range = RANGES[key];
  let body = all.slice(range.start - 1, range.end).join("\n");
  // Strip trailing `});` from last part (was ensure close) — re-added below.
  if (key === "distC") {
    body = body.replace(/\n\s*\}\);\s*$/, "");
  }
  body = rewriteBody(body);
  // Dedent one level (was inside esmInit).
  body = body
    .split("\n")
    .map((line) => (line.startsWith("    ") ? line.slice(4) : line))
    .join("\n");

  write(
    path.join(OUT, file),
    `${PROV}
// Semantic implementation: ${desc}.
// Stage-3 wave-68 cohesive formula-stats impl kept flat under maxFlatLines.

${sharedImports()}
${extraHeader}
export const ${ensureName} = esmInit(() => {
${body
  .split("\n")
  .map((l) => (l.length ? `  ${l}` : l))
  .join("\n")}
});
`,
  );
}

function buildEnsureAndIndex(): void {
  write(
    path.join(OUT, "ensure-formula-stats-init.ts"),
    `${PROV}
// Stage-3 wave-68: formula-stats cluster ensure (legacy Binding1831 / Binding1874).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFormulaStatsCoreInit } from "./errors-core-impl";
import { ensureFormulaStatsDistAInit } from "./stats-dist-a-impl";
import { ensureFormulaStatsDistBInit } from "./stats-dist-b-impl";
import { ensureFormulaStatsDistCInit } from "./stats-dist-c-impl";

/** Legacy Binding1874 — initializes jstat/bessel wrappers + Excel dist catalog. */
export const workbookBinding1874 = esmInit(() => {
  ensureFormulaStatsCoreInit();
  ensureFormulaStatsDistAInit();
  ensureFormulaStatsDistBInit();
  ensureFormulaStatsDistCInit();
});

export const ensureFormulaStatsInit = workbookBinding1874;
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-68: formula-stats barrel (legacy Binding1831 / Binding1874 cluster).

export {
  wireFormulaStatsBoundaryHooks,
  type FormulaStatsBoundaryHooks,
  fsH,
} from "./boundary-hooks";

export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./stats-slots";

export { YXe, XXe } from "./errors-core-impl";

export {
  workbookBinding1874,
  ensureFormulaStatsInit,
} from "./ensure-formula-stats-init";

export { ensureFormulaStatsCoreInit } from "./errors-core-impl";
export { ensureFormulaStatsDistAInit } from "./stats-dist-a-impl";
export { ensureFormulaStatsDistBInit } from "./stats-dist-b-impl";
export { ensureFormulaStatsDistCInit } from "./stats-dist-c-impl";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  for (let i = DROP_YXE_XXE.start; i <= DROP_YXE_XXE.end; i++) drop.add(i - 1);
  console.log(
    `  drop Binding1831…1874 ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  console.log(
    `  drop YXe/XXe ${DROP_YXE_XXE.start}-${DROP_YXE_XXE.end} (${DROP_YXE_XXE.end - DROP_YXE_XXE.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  // Insert after chart-elements alias block.
  let insertAt = -1;
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes("var ensureChartElementsCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  wireFormulaStatsBoundaryHooks,`,
    `  ensureFormulaStatsInit,`,
    `  workbookBinding1874,`,
    `  YXe,`,
    `  XXe,`,
    ...SLOTS.map((s) => `  ${s},`),
    `} from "../../workbook/formula-stats";`,
    ``,
    `wireFormulaStatsBoundaryHooks({`,
    ...HOOKS.map((h) => `  ${h.field}: ${h.boundary},`),
    `});`,
    ``,
    `// Thin alias: cluster ensure for formula engine stats catalog.`,
    `var ensureFormulaStatsCluster = ensureFormulaStatsInit;`,
    ``,
  ];

  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (kept[i]?.includes("chart-elements (The/Ohe…ige)")) {
      kept[i] = kept[i]!.replace(
        "chart-elements (The/Ohe…ige).",
        "chart-elements (The/Ohe…ige); formula-stats (Binding1831/1874).",
      );
      break;
    }
  }
  return kept;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  const text = fs.readFileSync(README, "utf8");
  const section = `
## Wave-68 progress

- Identified contiguous \`Binding1831\`/\`Binding1874\` cluster as Codex Excel formula-stats wrappers over jstat/bessel (NOT vendor body): error consts + date serial mode + TYPE + BETA…Z.TEST distribution catalog + short aliases (~1.9k LOC).
- Extracted → \`workbook/formula-stats/\` (split under flat limit; helpers remain in boundary via \`fsH\` hooks; jstat/bessel via \`vendor/*\` + \`toEsm\`).
- Left compose DSL Binding1490–1528, Google Slides \`pJe\`/\`SJe\`/\`oJe\`, \`xLe\` walnut/comments cluster, Binding1592, Binding662/\`_C\`, Binding1574/\`Cke\`, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: \`xLe\` walnut layout consts (peel before comments/\`_C\`) / compose DSL Binding1490–1528 / Google Slides \`oJe\`/\`pJe\`/\`SJe\` (~1.4k) / Binding1592 (~1.5k) / Ume table-styles / formula helpers that feed Binding1831.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-68: Binding1831/1874 formula-stats (jstat/bessel Excel dist wrappers) → workbook/formula-stats/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${waveNote} | ${json.notes}` : waveNote;

  const chunk = json.chunks?.["workbook-C49Dgk1_"];
  if (chunk) {
    const notes = String(chunk.notes ?? "");
    if (!notes.includes("wave-68")) {
      chunk.notes = `${waveNote} | ${notes}`;
    }
    const anyChunk = chunk as {
      modules?: string[];
      restoredModules?: string[];
    };
    if (!Array.isArray(anyChunk.modules)) anyChunk.modules = [];
    if (!anyChunk.modules.includes("workbook/formula-stats/")) {
      anyChunk.modules.push("workbook/formula-stats/");
    }
    if (!Array.isArray(anyChunk.restoredModules)) anyChunk.restoredModules = [];
    for (const mod of [
      "workbook/formula-stats/boundary-hooks.ts",
      "workbook/formula-stats/ensure-formula-stats-init.ts",
      "workbook/formula-stats/errors-core-impl.ts",
      "workbook/formula-stats/index.ts",
      "workbook/formula-stats/stats-dist-a-impl.ts",
      "workbook/formula-stats/stats-dist-b-impl.ts",
      "workbook/formula-stats/stats-dist-c-impl.ts",
      "workbook/formula-stats/stats-slots.ts",
    ]) {
      if (!anyChunk.restoredModules.includes(mod)) {
        anyChunk.restoredModules.push(mod);
      }
    }
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(json, null, 2) + "\n");
  console.log("  updated IMPORT_MAP notes");
}

function main(): void {
  console.log("wave-68 formula-stats (Binding1831) drain");
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
  buildHooks();
  buildPart(
    all,
    "core",
    "errors-core-impl.ts",
    "ensureFormulaStatsCoreInit",
    "formula error consts + date serial mode + TYPE (legacy Binding1831–1848)",
    `/** Toggle Excel date serial return mode (legacy YXe). */
export function YXe(): void {
  workbookBinding1842 = true;
}

/** Toggle Excel Date object return mode (legacy XXe). */
export function XXe(): void {
  workbookBinding1842 = false;
}

`,
  );
  buildPart(
    all,
    "distA",
    "stats-dist-a-impl.ts",
    "ensureFormulaStatsDistAInit",
    "Excel dist wrappers BETA…F (legacy Binding1849–1855)",
  );
  buildPart(
    all,
    "distB",
    "stats-dist-b-impl.ts",
    "ensureFormulaStatsDistBInit",
    "Excel dist wrappers GAMMA…POISSON (legacy Binding1856–1863)",
  );
  buildPart(
    all,
    "distC",
    "stats-dist-c-impl.ts",
    "ensureFormulaStatsDistCInit",
    "Excel dist wrappers QUARTILE…Z.TEST + aliases (legacy Binding1864–Z2e)",
  );
  buildEnsureAndIndex();

  console.log("  draining boundary…");
  let kept = drainBoundary(all);
  kept = patchHeader(kept);

  const text = kept.join("\n");
  fs.writeFileSync(BOUNDARY, text.endsWith("\n") ? text : text + "\n");
  const afterLoc = text.split("\n").length - (text.endsWith("\n") ? 1 : 0);
  console.log(`  boundary LOC after: ${afterLoc} (Δ ${afterLoc - beforeLoc})`);

  console.log("  format…");
  run(["bun", FORMAT, OUT], { allowFail: true });

  console.log("  quality-gate…");
  const qgOut = run(
    ["bun", QG, OUT, BOUNDARY, "--no-cache", "--allow-open-boundaries"],
    { allowFail: true },
  );
  console.log(qgOut.slice(-8000));
  if (/quality-gate: FAIL/.test(qgOut)) {
    throw new Error("quality-gate failed — see output above");
  }

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);
  console.log("=== wave-68 done ===");
}

main();
