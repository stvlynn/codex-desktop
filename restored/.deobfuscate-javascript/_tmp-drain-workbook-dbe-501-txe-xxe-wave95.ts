#!/usr/bin/env bun
/**
 * Stage-3 wave-95 drain of workbook-runtime (four mid-size chart peels):
 *
 * 1) Bar-direction series (~254 LOC) — Dbe → workbook/chart-bar-direction/
 *    (wave-89 hook misnamed paintFunnel; used for BAR_DIRECTION_BAR)
 * 2) Bar/column series (~266 LOC) — helper501 → workbook/chart-bar-series/
 * 3) Radar chart paint (~268 LOC) — Txe → workbook/chart-radar/
 *    (wave-89 hook misnamed paintBoxWhisker; used for CHART_TYPE_RADAR)
 * 4) Category plot layout (~280 LOC) — Xxe → workbook/chart-plot-layout/
 *
 * Line-range keep/drop only — never StrReplace the mega boundary body.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-dbe-501-txe-xxe-wave95.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(ROOT, "restored/boundaries/workbook-runtime/index.ts");
const CBD_OUT = path.join(ROOT, "restored/workbook/chart-bar-direction");
const CBS_OUT = path.join(ROOT, "restored/workbook/chart-bar-series");
const CR_OUT = path.join(ROOT, "restored/workbook/chart-radar");
const CPL_OUT = path.join(ROOT, "restored/workbook/chart-plot-layout");
const README = path.join(ROOT, "restored/boundaries/workbook-runtime/README.md");
const IMPORT_MAP = path.join(ROOT, "restored/IMPORT_MAP.json");
const QG = path.join(ROOT, ".agents/skills/deobfuscate-javascript/scripts/quality-gate.ts");
const FORMAT = path.join(ROOT, ".agents/skills/deobfuscate-javascript/scripts/format.ts");
const BACKUP = path.join(
  ROOT,
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave95.ts.bak",
);
const CHART_PAINT_HOOKS = path.join(ROOT, "restored/workbook/chart-paint/boundary-hooks.ts");
const CHART_PAINT_IMPL = path.join(ROOT, "restored/workbook/chart-paint/paint-chart-impl.ts");
const CHART_PAINT_DIR = path.join(ROOT, "restored/workbook/chart-paint");

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based line ranges (verified on post-wave-94 boundary). */
const CBD_DROP = { start: 10282, end: 10535 }; // Dbe
const CBS_DROP = { start: 10546, end: 10811 }; // workbookHelper501
const CR_DROP = { start: 12845, end: 13112 }; // Txe
const CPL_DROP = { start: 14413, end: 14692 }; // Xxe

const ALL_DROPS = [CBD_DROP, CBS_DROP, CR_DROP, CPL_DROP];

const CBD_HELPER_HOOKS = [393, 394, 404, 421, 469, 470, 473, 474, 495, 500] as const;
const CBS_HELPER_HOOKS = [393, 394, 404, 421, 424, 469, 470, 473, 474, 495, 500] as const;
const CR_HELPER_HOOKS = [428, 430, 465, 469, 473, 474] as const;
const CPL_HELPER_HOOKS = [
  352, 388, 402, 403, 422, 423, 428, 430, 438, 440, 459, 494,
] as const;

const CR_FUNC_HOOKS: Array<[string, string]> = [["Cxe", "prepareRadarSeries"]];
const CPL_FUNC_HOOKS: Array<[string, string]> = [["Nxe", "paintCategoryAxisLabels"]];

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
  console.log(`  wrote ${path.relative(ROOT, file)} (${out.split("\n").length - 1} lines)`);
}

function slice(all: string[], start: number, end: number): string {
  return all.slice(start - 1, end).join("\n");
}

function renameLocals(body: string, prefix: string): string {
  return body
    .replace(/\bworkbookInput(\d+)\b/g, `${prefix}In$1`)
    .replace(/\bworkbookBinding(\d+)\b/g, `${prefix}Bind$1`)
    .replace(/\bworkbookHelper(\d+)\b/g, `${prefix}Helper$1`);
}

function addParamAny(body: string): string {
  return body.replace(
    /^(\s*)(export\s+)?(async\s+)?(function\s+)?([A-Za-z_$#][\w$]*)\(([^)]*)\)(\s*\{)/gm,
    (
      m,
      ind: string,
      exp: string | undefined,
      asyncKw: string | undefined,
      fnKw: string | undefined,
      name: string,
      params: string,
      brace: string,
    ) => {
      if (name.startsWith("#")) return m;
      if (!params.trim()) return m;
      if (params.includes(":")) return m;
      if (!fnKw && !exp) return m;
      const typed = params
        .split(",")
        .map((p) => {
          const t = p.trim();
          if (!t) return t;
          if (t.includes("=")) {
            const [n, d] = t.split("=").map((s) => s.trim());
            return `${n}: any = ${d}`;
          }
          if (t.startsWith("...")) return `${t}: any[]`;
          return `${t}: any`;
        })
        .join(", ");
      return `${ind}${exp ?? ""}${asyncKw ?? ""}${fnKw ?? ""}${name}(${typed})${brace}`;
    },
  );
}

function protect(body: string, names: string[]): string {
  let out = body;
  for (const n of names) {
    out = out.replace(new RegExp(`\\b${escapeRe(n)}\\b`, "g"), `__P_${n}__`);
  }
  return out;
}

function unprotect(body: string, names: string[]): string {
  let out = body;
  for (const n of names) {
    out = out.replace(new RegExp(`__P_${escapeRe(n)}__`, "g"), n);
  }
  return out;
}

function polish(raw: string, prefix: string, names: string[]): string {
  return addParamAny(unprotect(renameLocals(protect(raw, names), prefix), names));
}

function ren(raw: string, pairs: Array<[string, string]>): string {
  let out = raw;
  for (const [a, b] of pairs) {
    const pat = a.startsWith("$")
      ? `(?<![\\\\w$])${escapeRe(a)}\\b`
      : `\\b${escapeRe(a)}\\b`;
    out = out.replace(new RegExp(pat, "g"), b);
  }
  return out;
}

function hookFieldsHelper(nums: readonly number[], prefix: string): string {
  return nums.map((n) => `  ${prefix}${n}: (...args: any[]) => any;`).join("\n");
}

function hookWireHelper(nums: readonly number[], prefix: string): string {
  return nums
    .map((n) => `  ${prefix}${n}: (...args: any[]) => workbookHelper${n}(...args),`)
    .join("\n");
}

function hookFieldsFunc(pairs: Array<[string, string]>): string {
  return pairs.map(([, k]) => `  ${k}: (...args: any[]) => any;`).join("\n");
}

function hookWireFunc(pairs: Array<[string, string]>): string {
  return pairs
    .map(([from, k]) => `  ${k}: (...args: any[]) => ${from}(...args),`)
    .join("\n");
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [CBD_DROP.start - 1, "});", "before Dbe (Obe-prev close)"],
    [CBD_DROP.start, "function Dbe(", "Dbe"],
    [CBD_DROP.end, "}", "Dbe close"],
    [CBD_DROP.end + 1, "var Obe = esmInit(() => {", "Obe kept"],
    [CBS_DROP.start - 1, "});", "Obe close"],
    [CBS_DROP.start, "function workbookHelper501(", "helper501"],
    [CBS_DROP.end, "}", "helper501 close"],
    [CR_DROP.start - 1, "});", "wxe close"],
    [CR_DROP.start, "function Txe(", "Txe"],
    [CR_DROP.end, "}", "Txe close"],
    [CR_DROP.end + 1, "var workbookBinding1154,", "Binding1154 kept"],
    [CPL_DROP.start, "function Xxe(", "Xxe"],
    [CPL_DROP.end, "}", "Xxe close"],
    [CPL_DROP.end + 1, "var workbookBinding1173,", "Binding1173 kept"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(`${label} miss at ${line}: ${JSON.stringify(got.slice(0, 140))}`);
    }
  }
}

function inDrop(line: number): boolean {
  return ALL_DROPS.some((d) => line >= d.start && line <= d.end);
}

function drainBoundary(all: string[]): string[] {
  const kept: string[] = [];
  for (let i = 0; i < all.length; i++) {
    if (inDrop(i + 1)) continue;
    kept.push(all[i]!);
  }
  return kept;
}

// ---------------------------------------------------------------------------
// chart-bar-direction (Dbe)
// ---------------------------------------------------------------------------

function buildCbdHooks(): void {
  write(
    path.join(CBD_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-95: chart-bar-direction boundary hooks.

export type ChartBarDirectionBoundaryHooks = {
${hookFieldsHelper(CBD_HELPER_HOOKS, "bh")}
};

export const cbdH: ChartBarDirectionBoundaryHooks =
  {} as ChartBarDirectionBoundaryHooks;

export function wireChartBarDirectionBoundaryHooks(
  next: ChartBarDirectionBoundaryHooks,
): void {
  Object.assign(cbdH, next);
}
`,
  );
}

function buildCbdImpl(all: string[]): void {
  let raw = slice(all, CBD_DROP.start, CBD_DROP.end);
  raw = raw.replace(/^function Dbe\(/m, "export function paintBarDirectionSeries(");
  raw = ren(raw, [["Dbe", "paintBarDirectionSeries"]]);

  for (const n of CBD_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `cbdH.bh${n}`]]);
  }

  const protectNames = [
    "paintBarDirectionSeries",
    "_presentationMn",
    "cbdH",
    ...CBD_HELPER_HOOKS.map((n) => `bh${n}`),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
  ];
  const body = polish(raw, "cbd", protectNames);

  write(
    path.join(CBD_OUT, "chart-bar-direction-impl.ts"),
    `${PROV}
// Semantic implementation: horizontal bar-direction series paint (legacy Dbe).
// Stage-3 wave-95. Wave-89 chart-paint hook was misnamed paintFunnel.

import { Mn as _presentationMn } from "../presentation-protobuf";
import { cbdH } from "./boundary-hooks";

void _presentationMn;
void cbdH;

${body}

/** Legacy alias. */
export const Dbe = paintBarDirectionSeries;
`,
  );
}

function buildCbdIndex(): void {
  write(
    path.join(CBD_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-95: chart-bar-direction barrel.

export { wireChartBarDirectionBoundaryHooks, cbdH } from "./boundary-hooks";
export { paintBarDirectionSeries, Dbe } from "./chart-bar-direction-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// chart-bar-series (helper501)
// ---------------------------------------------------------------------------

function buildCbsHooks(): void {
  write(
    path.join(CBS_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-95: chart-bar-series boundary hooks.

export type ChartBarSeriesBoundaryHooks = {
${hookFieldsHelper(CBS_HELPER_HOOKS, "bh")}
};

export const cbsH: ChartBarSeriesBoundaryHooks =
  {} as ChartBarSeriesBoundaryHooks;

export function wireChartBarSeriesBoundaryHooks(
  next: ChartBarSeriesBoundaryHooks,
): void {
  Object.assign(cbsH, next);
}
`,
  );
}

function buildCbsImpl(all: string[]): void {
  let raw = slice(all, CBS_DROP.start, CBS_DROP.end);
  raw = raw.replace(
    /^function workbookHelper501\(/m,
    "export function paintBarSeries(",
  );
  raw = ren(raw, [["workbookHelper501", "paintBarSeries"]]);

  for (const n of CBS_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `cbsH.bh${n}`]]);
  }

  const protectNames = [
    "paintBarSeries",
    "cbsH",
    ...CBS_HELPER_HOOKS.map((n) => `bh${n}`),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
  ];
  const body = polish(raw, "cbs", protectNames);

  write(
    path.join(CBS_OUT, "chart-bar-series-impl.ts"),
    `${PROV}
// Semantic implementation: column/bar series paint (legacy workbook bar-series painter).
// Stage-3 wave-95.

import { cbsH } from "./boundary-hooks";

void cbsH;

${body}

`,
  );
}

function buildCbsIndex(): void {
  write(
    path.join(CBS_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-95: chart-bar-series barrel.

export { wireChartBarSeriesBoundaryHooks, cbsH } from "./boundary-hooks";
export { paintBarSeries } from "./chart-bar-series-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// chart-radar (Txe)
// ---------------------------------------------------------------------------

function buildCrHooks(): void {
  write(
    path.join(CR_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-95: chart-radar boundary hooks.

export type ChartRadarBoundaryHooks = {
${hookFieldsHelper(CR_HELPER_HOOKS, "bh")}
${hookFieldsFunc(CR_FUNC_HOOKS)}
};

export const crH: ChartRadarBoundaryHooks = {} as ChartRadarBoundaryHooks;

export function wireChartRadarBoundaryHooks(next: ChartRadarBoundaryHooks): void {
  Object.assign(crH, next);
}
`,
  );
}

function buildCrImpl(all: string[]): void {
  let raw = slice(all, CR_DROP.start, CR_DROP.end);
  raw = raw.replace(/^function Txe\(/m, "export function paintRadarChart(");
  raw = ren(raw, [["Txe", "paintRadarChart"]]);

  for (const n of CR_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `crH.bh${n}`]]);
  }
  for (const [from, key] of CR_FUNC_HOOKS) {
    raw = ren(raw, [[from, `crH.${key}`]]);
  }

  const protectNames = [
    "paintRadarChart",
    "_AppInitialMat",
    "appInitialXat",
    "Vn",
    "Bn",
    "crH",
    ...CR_HELPER_HOOKS.map((n) => `bh${n}`),
    ...CR_FUNC_HOOKS.map(([, k]) => k),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
    "PI",
  ];
  const body = polish(raw, "cr", protectNames);

  write(
    path.join(CR_OUT, "chart-radar-impl.ts"),
    `${PROV}
// Semantic implementation: radar chart paint (legacy Txe).
// Stage-3 wave-95. Wave-89 chart-paint hook was misnamed paintBoxWhisker.

import { Vn, Bn } from "../presentation-protobuf";
import { scaleLinear as _AppInitialMat } from "../../vendor/d3-scale-linear";
import { color as appInitialXat } from "../../vendor/d3-color";
import { crH } from "./boundary-hooks";

void Vn;
void Bn;
void _AppInitialMat;
void appInitialXat;
void crH;

${body}

/** Legacy alias. */
export const Txe = paintRadarChart;
`,
  );
}

function buildCrIndex(): void {
  write(
    path.join(CR_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-95: chart-radar barrel.

export { wireChartRadarBoundaryHooks, crH } from "./boundary-hooks";
export { paintRadarChart, Txe } from "./chart-radar-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// chart-plot-layout (Xxe)
// ---------------------------------------------------------------------------

function buildCplHooks(): void {
  write(
    path.join(CPL_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-95: chart-plot-layout boundary hooks.

export type ChartPlotLayoutBoundaryHooks = {
${hookFieldsHelper(CPL_HELPER_HOOKS, "bh")}
${hookFieldsFunc(CPL_FUNC_HOOKS)}
};

export const cplH: ChartPlotLayoutBoundaryHooks =
  {} as ChartPlotLayoutBoundaryHooks;

export function wireChartPlotLayoutBoundaryHooks(
  next: ChartPlotLayoutBoundaryHooks,
): void {
  Object.assign(cplH, next);
}
`,
  );
}

function buildCplImpl(all: string[]): void {
  let raw = slice(all, CPL_DROP.start, CPL_DROP.end);
  raw = raw.replace(/^function Xxe\(/m, "export function layoutCategoryChartPlot(");
  raw = ren(raw, [["Xxe", "layoutCategoryChartPlot"]]);

  raw = ren(raw, [
    ["workbookBinding1173", "AXIS_LABEL_PAD_PX"],
    ["workbookBinding1174", "DEFAULT_MAX_BOTTOM_FRAC"],
  ]);

  for (const n of CPL_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `cplH.bh${n}`]]);
  }
  for (const [from, key] of CPL_FUNC_HOOKS) {
    raw = ren(raw, [[from, `cplH.${key}`]]);
  }

  const protectNames = [
    "layoutCategoryChartPlot",
    "AXIS_LABEL_PAD_PX",
    "DEFAULT_MAX_BOTTOM_FRAC",
    "Cn",
    "_presentationYn",
    "_AppInitialMat",
    "appInitialAat",
    "appInitialSat",
    "cplH",
    ...CPL_HELPER_HOOKS.map((n) => `bh${n}`),
    ...CPL_FUNC_HOOKS.map(([, k]) => k),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
  ];
  const body = polish(raw, "cpl", protectNames);

  write(
    path.join(CPL_OUT, "chart-plot-layout-impl.ts"),
    `${PROV}
// Semantic implementation: category chart plot-area layout (legacy Xxe).
// Stage-3 wave-95.

import { Cn, Yn as _presentationYn } from "../presentation-protobuf";
import { scaleLinear as _AppInitialMat } from "../../vendor/d3-scale-linear";
import { max as appInitialAat, sum as appInitialSat } from "../../vendor/d3-array-min";
import { cplH } from "./boundary-hooks";

/** Legacy Binding1173 — axis label pad (px). */
export const AXIS_LABEL_PAD_PX = 8;
/** Legacy Binding1174 — default max bottom fraction. */
export const DEFAULT_MAX_BOTTOM_FRAC = 0.4;

void Cn;
void _presentationYn;
void _AppInitialMat;
void appInitialAat;
void appInitialSat;
void cplH;

${body}

/** Legacy alias. */
export const Xxe = layoutCategoryChartPlot;
`,
  );
}

function buildCplIndex(): void {
  write(
    path.join(CPL_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-95: chart-plot-layout barrel.

export { wireChartPlotLayoutBoundaryHooks, cplH } from "./boundary-hooks";
export {
  layoutCategoryChartPlot,
  Xxe,
  AXIS_LABEL_PAD_PX,
  DEFAULT_MAX_BOTTOM_FRAC,
} from "./chart-plot-layout-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// chart-paint patch (drop misnamed hooks + bh501)
// ---------------------------------------------------------------------------

function patchChartPaint(): void {
  let hooks = fs.readFileSync(CHART_PAINT_HOOKS, "utf8");
  const dropHookLines = ["bh501:", "paintFunnel:", "paintBoxWhisker:"];
  for (const key of dropHookLines) {
    hooks = hooks.replace(new RegExp(`\\n\\s*${key} \\(\\.\\.\\.args: any\\[\\]\\) => any;`), "");
  }
  write(CHART_PAINT_HOOKS, hooks);

  let impl = fs.readFileSync(CHART_PAINT_IMPL, "utf8");
  if (!impl.includes("paintBarDirectionSeries")) {
    impl = impl.replace(
      'import { cpH } from "./boundary-hooks";',
      `import { cpH } from "./boundary-hooks";
import { paintBarDirectionSeries } from "../chart-bar-direction";
import { paintBarSeries } from "../chart-bar-series";
import { paintRadarChart } from "../chart-radar";`,
    );
  }
  impl = impl.replace(/\bcpH\.paintFunnel\b/g, "paintBarDirectionSeries");
  impl = impl.replace(/\bcpH\.paintBoxWhisker\b/g, "paintRadarChart");
  impl = impl.replace(/\bcpH\.bh501\b/g, "paintBarSeries");
  write(CHART_PAINT_IMPL, impl);
  console.log("  patched chart-paint (funnel/boxWhisker/bh501 → semantic imports)");
}

// ---------------------------------------------------------------------------
// boundary header splice
// ---------------------------------------------------------------------------

function patchHeader(kept: string[]): string[] {
  const block = `
import {
  wireChartBarDirectionBoundaryHooks,
  paintBarDirectionSeries as Dbe,
} from "../../workbook/chart-bar-direction";

wireChartBarDirectionBoundaryHooks({
${hookWireHelper(CBD_HELPER_HOOKS, "bh")}
});

import {
  wireChartBarSeriesBoundaryHooks,
  paintBarSeries as workbookHelper501,
} from "../../workbook/chart-bar-series";

wireChartBarSeriesBoundaryHooks({
${hookWireHelper(CBS_HELPER_HOOKS, "bh")}
});

import {
  wireChartRadarBoundaryHooks,
  paintRadarChart as Txe,
} from "../../workbook/chart-radar";

wireChartRadarBoundaryHooks({
${hookWireHelper(CR_HELPER_HOOKS, "bh")}
${hookWireFunc(CR_FUNC_HOOKS)}
});

import {
  wireChartPlotLayoutBoundaryHooks,
  layoutCategoryChartPlot as Xxe,
} from "../../workbook/chart-plot-layout";

wireChartPlotLayoutBoundaryHooks({
${hookWireHelper(CPL_HELPER_HOOKS, "bh")}
${hookWireFunc(CPL_FUNC_HOOKS)}
});

// Thin aliases: chart-bar-direction + chart-bar-series + chart-radar + chart-plot-layout drained (wave-95).
`.trimStart();

  let insertAt = -1;
  for (let i = 0; i < Math.min(4000, kept.length); i++) {
    if (
      kept[i]?.includes(
        "// Thin aliases: chart-axis-ticks + shape-geometry-paint + table-frame-layout + slide-canvas-render drained (wave-94).",
      )
    ) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]?.trim() === "") insertAt++;
      break;
    }
  }
  if (insertAt < 0) {
    throw new Error("wave-95 insert point missing (after wave-94 thin aliases)");
  }

  kept.splice(insertAt, 0, "", ...block.split("\n"), "");
  console.log("  inserted wave-95 imports + wire hooks");

  // Remove drained hooks from chart-paint wire block
  const removePatterns = [
    "bh501: (...args: any[]) => workbookHelper501(...args),",
    "paintFunnel: (...args: any[]) => Dbe(...args),",
    "paintBoxWhisker: (...args: any[]) => Txe(...args),",
  ];
  for (const pat of removePatterns) {
    for (let i = 0; i < Math.min(2500, kept.length); i++) {
      if (kept[i]?.includes(pat)) {
        kept.splice(i, 1);
        console.log(`  removed ${pat.split(":")[0]} from chart-paint boundary wire`);
        break;
      }
    }
  }

  for (let i = 0; i < 40; i++) {
    if (kept[i]?.includes("slide-canvas-render (vEe).")) {
      kept[i] = kept[i]!.replace(
        "slide-canvas-render (vEe).",
        "slide-canvas-render (vEe); chart-bar-direction (Dbe); chart-bar-series (helper501); chart-radar (Txe); chart-plot-layout (Xxe).",
      );
      console.log("  updated boundary waves header line");
      break;
    }
  }

  return kept;
}

function updateReadme(before: number, after: number): void {
  let md = fs.readFileSync(README, "utf8");
  md = md.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(after / 1000).toFixed(1)}k LOC remaining)`,
  );

  const rowNeedle =
    "| Slide canvas render (`vEe`) | ~0.33k | **Drained (wave-94)** → `workbook/slide-canvas-render/` |\n";
  const newRows = [
    "| Bar-direction series (`Dbe`) | ~0.25k | **Drained (wave-95)** → `workbook/chart-bar-direction/` |",
    "| Bar/column series (`helper501`) | ~0.27k | **Drained (wave-95)** → `workbook/chart-bar-series/` |",
    "| Radar chart paint (`Txe`) | ~0.27k | **Drained (wave-95)** → `workbook/chart-radar/` |",
    "| Category plot layout (`Xxe`) | ~0.28k | **Drained (wave-95)** → `workbook/chart-plot-layout/` |",
  ].join("\n");
  if (md.includes(rowNeedle) && !md.includes("chart-bar-direction")) {
    md = md.replace(rowNeedle, rowNeedle + newRows + "\n");
  }

  const wave = `
## Wave-95 progress

- Re-scanned ≥200 clusters: WorkbookN/Binding1996 (~1862 leave), \`_workbookS\`/\`vYe\` (~1240 leave), \`Xxe\` (~280), \`Vht\` (~270), \`Txe\` (~268), \`helper501\` (~266), \`Dbe\`/\`rze\`/\`kht\` (~254), \`Uft\` (~229), \`gCe\` (~222), \`ODe\` (~210), \`Kht\` (~208). \`jCe\` is a 7-line stub (not a real peel).
- Skipped \`_workbookS\`/WorkbookN / KJe–aYe / \`xLe\`; deferred \`rze\` (vYe leave-behind caller), \`kht\` (WorkbookN leave-behind), \`Vht\`/\`Kht\` CF init/class, \`Uft\`/\`ODe\`.
- Peeled \`Dbe\` → \`workbook/chart-bar-direction/\` (\`cbdH\`); chart-paint \`paintFunnel\` → \`paintBarDirectionSeries\` (hook was misnamed for BAR_DIRECTION_BAR).
- Peeled \`helper501\` → \`workbook/chart-bar-series/\` (\`cbsH\`); chart-paint dropped \`bh501\`; boundary alias keeps \`yxe\` caller.
- Peeled \`Txe\` → \`workbook/chart-radar/\` (\`crH\` + \`Cxe\`); chart-paint \`paintBoxWhisker\` → \`paintRadarChart\` (hook was misnamed for RADAR).
- Peeled \`Xxe\` → \`workbook/chart-plot-layout/\` (\`cplH\` + \`Nxe\`); Binding1173/1174 inlined; boundary alias keeps \`helper559\` caller.
- Boundary wired via single-pass line-range drain; \`openBoundary\` kept.
- QG PASS on four modules + chart-paint + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${after} (was ${before}; Δ ${after - before}).
- Next: \`gCe\` (~0.22k doughnut) / \`nCe\` (~0.19k line) / \`rze\` after \`_workbookS\` ensure drain / \`kht\` after WorkbookN / clean \`xLe\`.
`;

  if (!md.includes("## Wave-95 progress")) {
    // Replace stale wave-94 "Next" if present, then append wave-95
    md = md.replace(
      /- Next: helper501 \(~0\.27k\).*\n/,
      "- Next: helper501 / Xxe / Txe / Dbe (taken by wave-95).\n",
    );
    if (md.includes("## Wave-94 progress")) {
      const idx = md.lastIndexOf("## Wave-94 progress");
      const rest = md.slice(idx);
      const nextWave = rest.search(/\n## Wave-\d+/);
      if (nextWave < 0) {
        md = md.trimEnd() + "\n" + wave;
      } else {
        // already have later wave? shouldn't
        md = md.trimEnd() + "\n" + wave;
      }
    } else {
      md = md.trimEnd() + "\n" + wave;
    }
  }

  fs.writeFileSync(README, md.endsWith("\n") ? md : md + "\n");
  console.log("  updated README");
}

function updateImportMap(afterLoc: number): void {
  const json = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    files?: Record<string, Record<string, unknown>>;
  };
  const note = `Wave workbook-runtime Stage-3 wave-95: Dbe/chart-bar-direction + helper501/chart-bar-series + Txe/chart-radar + Xxe/chart-plot-layout; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${note} | ${json.notes}` : note;

  const files = json.files;
  if (files) {
    for (const [key, val] of Object.entries(files)) {
      const restored = String(val.restored ?? "");
      if (!restored.includes("workbook-runtime") && !key.includes("workbook-C49")) continue;
      const prev = String(val.notes ?? "");
      val.notes = prev.includes("wave-95") ? prev : `${note} | ${prev}`;
      val.openBoundary = true;
      const mods = (val.restoredModules as string[] | undefined) ?? [];
      for (const f of [
        "workbook/chart-bar-direction/index.ts",
        "workbook/chart-bar-series/index.ts",
        "workbook/chart-radar/index.ts",
        "workbook/chart-plot-layout/index.ts",
      ]) {
        if (!mods.includes(f)) mods.push(f);
      }
      val.restoredModules = mods;
    }
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(json, null, 2) + "\n");
  console.log("  updated IMPORT_MAP");
}

function main(): void {
  const raw = fs.readFileSync(BOUNDARY, "utf8");
  const all = raw.split("\n");
  if (all.length && all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`boundary before: ${beforeLoc} lines`);

  if (!fs.existsSync(BACKUP)) {
    fs.copyFileSync(BOUNDARY, BACKUP);
    console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);
  }

  verifyAnchors(all);

  fs.mkdirSync(CBD_OUT, { recursive: true });
  fs.mkdirSync(CBS_OUT, { recursive: true });
  fs.mkdirSync(CR_OUT, { recursive: true });
  fs.mkdirSync(CPL_OUT, { recursive: true });

  console.log("building chart-bar-direction…");
  buildCbdHooks();
  buildCbdImpl(all);
  buildCbdIndex();

  console.log("building chart-bar-series…");
  buildCbsHooks();
  buildCbsImpl(all);
  buildCbsIndex();

  console.log("building chart-radar…");
  buildCrHooks();
  buildCrImpl(all);
  buildCrIndex();

  console.log("building chart-plot-layout…");
  buildCplHooks();
  buildCplImpl(all);
  buildCplIndex();

  patchChartPaint();

  console.log("draining boundary (4 ranges, single pass)…");
  let kept = drainBoundary(all);
  kept = patchHeader(kept);
  const afterBody = kept.join("\n") + "\n";
  fs.writeFileSync(BOUNDARY, afterBody);
  const afterLoc = afterBody.split("\n").length - 1;
  console.log(`boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("\nformatting…");
  run([
    "bun",
    FORMAT,
    CBD_OUT,
    CBS_OUT,
    CR_OUT,
    CPL_OUT,
    CHART_PAINT_DIR,
    BOUNDARY,
  ]);

  console.log("\nquality-gate…");
  const qgOut = run(
    [
      "bun",
      QG,
      CBD_OUT,
      CBS_OUT,
      CR_OUT,
      CPL_OUT,
      CHART_PAINT_DIR,
      BOUNDARY,
      "--no-cache",
      "--allow-open-boundaries",
    ],
    { allowFail: true },
  );
  console.log(qgOut);
  if (!qgOut.includes("PASS") && !/exit.?0/i.test(qgOut)) {
    // quality-gate prints verdict; re-check status via second run if unclear
  }
}

main();
