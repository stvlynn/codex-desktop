#!/usr/bin/env bun
/**
 * Stage-3 wave-94 drain of workbook-runtime (four cohesive peels):
 *
 * 1) Chart axis ticks (~403 LOC) — helper462 → workbook/chart-axis-ticks/
 * 2) Shape geometry paint (~380 LOC) — helper616 → workbook/shape-geometry-paint/
 * 3) Table frame layout (~362 LOC) — workbookA → workbook/table-frame-layout/
 * 4) Slide canvas render (~332 LOC) — vEe → workbook/slide-canvas-render/
 *
 * Line-range keep/drop only — never StrReplace the mega boundary body.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-helper462-616-a-vee-wave94.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(ROOT, "restored/boundaries/workbook-runtime/index.ts");
const CAT_OUT = path.join(ROOT, "restored/workbook/chart-axis-ticks");
const SGP_OUT = path.join(ROOT, "restored/workbook/shape-geometry-paint");
const TFL_OUT = path.join(ROOT, "restored/workbook/table-frame-layout");
const SCR_OUT = path.join(ROOT, "restored/workbook/slide-canvas-render");
const README = path.join(ROOT, "restored/boundaries/workbook-runtime/README.md");
const IMPORT_MAP = path.join(ROOT, "restored/IMPORT_MAP.json");
const QG = path.join(ROOT, ".agents/skills/deobfuscate-javascript/scripts/quality-gate.ts");
const FORMAT = path.join(ROOT, ".agents/skills/deobfuscate-javascript/scripts/format.ts");
const BACKUP = path.join(
  ROOT,
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave94.ts.bak",
);
const CHART_PAINT_HOOKS = path.join(ROOT, "restored/workbook/chart-paint/boundary-hooks.ts");
const CHART_PAINT_IMPL = path.join(ROOT, "restored/workbook/chart-paint/paint-chart-impl.ts");
const CHART_PAINT_DIR = path.join(ROOT, "restored/workbook/chart-paint");

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based line ranges (verified on current boundary). */
const CAT_DROP = { start: 7454, end: 7856 };
const SGP_DROP = { start: 23279, end: 23658 };
const TFL_DROP = { start: 25834, end: 26195 };
const SCR_DROP = { start: 27364, end: 27695 };

const ALL_DROPS = [CAT_DROP, SGP_DROP, TFL_DROP, SCR_DROP];

const CAT_HELPER_HOOKS = [
  405, 422, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438,
  439, 440, 446, 460, 461,
] as const;

const SGP_HELPER_HOOKS = [571, 572, 608, 612, 613, 617, 618, 623, 630] as const;

const SGP_FUNC_HOOKS: Array<[string, string]> = [
  ["Gwe", "resolveShapeFill"],
  ["Kwe", "resolveShapeEffects"],
  ["hTe", "isConnectorGeometry"],
  ["Qwe", "paintConnectorRoute"],
  ["Rwe", "drawCustomPaths"],
  ["cTe", "clipShapeGeometry"],
  ["Vwe", "paintShapeAdjustments"],
  ["workbookBinding1260", "drawConnectorArrowheads"],
];

const TFL_HELPER_HOOKS = [639, 643, 644, 645] as const;

const TFL_FUNC_HOOKS: Array<[string, string]> = [
  ["ITe", "resolveCellMargins"],
  ["$B", "layoutTableColumns"],
  ["FTe", "measureEmbeddedHeight"],
  ["STe", "paintTableCells"],
  ["LTe", "sumRowSpan"],
  ["TTe", "strokeTableBorders"],
  ["ETe", "fillTableBackground"],
];

const SCR_FUNC_HOOKS: Array<[string, string]> = [
  ["RTe", "paintSlideBackground"],
  ["BTe", "paintSlideShape"],
  ["nEe", "paintSlideText"],
  ["dEe", "paintViewOverlay"],
  ["_Ee", "paintSlideGroup"],
  ["hEe", "paintSlideImage"],
  ["pEe", "isHiddenElement"],
  ["$Te", "warmSlideImages"],
];

const SCR_HELPER_HOOKS = [615, 654] as const;

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
    // `$Foo` identifiers: `\b` does not fire before `$`, so use a lookbehind.
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

/** Apply leave-behind hooks; `$Name` needs non-`\\b` matching. */
function applyFuncHooks(
  raw: string,
  pairs: Array<[string, string]>,
  bag: string,
): string {
  let out = raw;
  for (const [from, key] of pairs) {
    out = ren(out, [[from, `${bag}.${key}`]]);
  }
  return out;
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [7453, "}", "before helper462"],
    [CAT_DROP.start, "function workbookHelper462(", "helper462"],
    [CAT_DROP.end, "}", "helper462 close"],
    [CAT_DROP.end + 1, "var workbookBinding879,", "Binding879 kept"],
    [SGP_DROP.start, "function workbookHelper616(", "helper616"],
    [SGP_DROP.end, "}", "helper616 close"],
    [SGP_DROP.end + 1, "function Xwe(", "Xwe kept"],
    [25832, "  return workbookBinding21754;", "before workbookA"],
    [25833, "}", "helper645 close"],
    [TFL_DROP.start, "function workbookA(", "workbookA"],
    [TFL_DROP.end, "}", "workbookA close"],
    [TFL_DROP.end + 1, "var workbookBinding1268,", "Binding1268 kept"],
    [SCR_DROP.start, "async function vEe(", "vEe"],
    [SCR_DROP.end, "}", "vEe close"],
    [SCR_DROP.end + 1, "var yEe = esmInit(() => {", "yEe kept"],
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
// chart-axis-ticks
// ---------------------------------------------------------------------------

function buildCatHooks(): void {
  const helperFields = CAT_HELPER_HOOKS.map((n) => `  bh${n}: (...args: any[]) => any;`).join("\n");
  write(
    path.join(CAT_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-94: chart-axis-ticks boundary hooks.

export type ChartAxisTicksBoundaryHooks = {
${helperFields}
  nye: (...args: any[]) => any;
  vye: (...args: any[]) => any;
};

export const catH: ChartAxisTicksBoundaryHooks = {} as ChartAxisTicksBoundaryHooks;

export function wireChartAxisTicksBoundaryHooks(
  next: ChartAxisTicksBoundaryHooks,
): void {
  Object.assign(catH, next);
}
`,
  );
}

function buildCatImpl(all: string[]): void {
  let raw = slice(all, CAT_DROP.start, CAT_DROP.end);
  raw = raw.replace(/^function workbookHelper462\(/m, "export function paintChartAxisTicks(");
  raw = ren(raw, [["workbookHelper462", "paintChartAxisTicks"]]);

  raw = ren(raw, [
    ["workbookHelper348", "chartSeriesColorFn"],
    ["workbookBinding837", "CHART_AXIS_FONT_STACK"],
    ["$D", "CHART_AXIS_MUTED"],
    ["workbookBinding879", "AXIS_TICK_INSET"],
    ["workbookBinding880", "AXIS_LABEL_GAP"],
  ]);

  for (const n of CAT_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `catH.bh${n}`]]);
  }
  raw = ren(raw, [
    ["Nye", "catH.nye"],
    ["Vye", "catH.vye"],
  ]);

  const protectNames = [
    "paintChartAxisTicks",
    "chartSeriesColorFn",
    "CHART_AXIS_FONT_STACK",
    "CHART_AXIS_MUTED",
    "AXIS_TICK_INSET",
    "AXIS_LABEL_GAP",
    "_presentationHn",
    "catH",
    ...CAT_HELPER_HOOKS.map((n) => `bh${n}`),
    "nye",
    "vye",
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
  ];
  const body = polish(raw, "cat", protectNames);

  const prelude = `
/** Legacy Binding837 — chart axis font stack. */
export const CHART_AXIS_FONT_STACK =
  "Carlito, Segoe UI, Helvetica, Arial, sans-serif";
/** Legacy \`$D\` — muted axis stroke/fill. */
export const CHART_AXIS_MUTED = "#666";
/** Legacy Binding879 — tick inset (px). */
export const AXIS_TICK_INSET = 6;
/** Legacy Binding880 — axis label gap (px). */
export const AXIS_LABEL_GAP = 8;
`.trim();

  write(
    path.join(CAT_OUT, "chart-axis-ticks-impl.ts"),
    `${PROV}
// Semantic implementation: chart axis tick paint (legacy chart-axis peel).
// Stage-3 wave-94.

import { Hn as _presentationHn } from "../presentation-protobuf";
import { workbookHelper348 as chartSeriesColorFn } from "../chart-asset";
import { catH } from "./boundary-hooks";

${prelude}

${body}
`,
  );
}

function buildCatIndex(): void {
  write(
    path.join(CAT_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-94: chart-axis-ticks barrel.

export { wireChartAxisTicksBoundaryHooks, catH } from "./boundary-hooks";
export {
  paintChartAxisTicks,
  CHART_AXIS_FONT_STACK,
  CHART_AXIS_MUTED,
  AXIS_TICK_INSET,
  AXIS_LABEL_GAP,
} from "./chart-axis-ticks-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// shape-geometry-paint
// ---------------------------------------------------------------------------

function buildSgpHooks(): void {
  write(
    path.join(SGP_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-94: shape-geometry-paint boundary hooks.

export type ShapeGeometryPaintBoundaryHooks = {
${hookFieldsHelper(SGP_HELPER_HOOKS, "bh")}
${hookFieldsFunc(SGP_FUNC_HOOKS)}
};

export const sgpH: ShapeGeometryPaintBoundaryHooks = {} as ShapeGeometryPaintBoundaryHooks;

export function wireShapeGeometryPaintBoundaryHooks(
  next: ShapeGeometryPaintBoundaryHooks,
): void {
  Object.assign(sgpH, next);
}
`,
  );
}

function buildSgpImpl(all: string[]): void {
  let raw = slice(all, SGP_DROP.start, SGP_DROP.end);
  raw = raw.replace(/^function workbookHelper616\(/m, "export function paintShapeGeometry(");
  raw = ren(raw, [["workbookHelper616", "paintShapeGeometry"]]);

  raw = ren(raw, [
    ["workbookHelper212", "resolveFillStyle"],
    ["workbookHelper286", "resolveElementFramePx"],
    ["workbookHelper290", "applyFrameCanvasTransform"],
    ["M_", "applyCanvasLineDash"],
    ["Eue", "applyElementCanvasTransform"],
    ["workbookSt", "resolveColorToCssRgba"],
  ]);

  for (const n of SGP_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `sgpH.bh${n}`]]);
  }
  for (const [from, key] of SGP_FUNC_HOOKS) {
    raw = ren(raw, [[from, `sgpH.${key}`]]);
  }

  const protectNames = [
    "paintShapeGeometry",
    "resolveFillStyle",
    "resolveElementFramePx",
    "applyFrameCanvasTransform",
    "applyCanvasLineDash",
    "applyElementCanvasTransform",
    "resolveColorToCssRgba",
    "workbookGt",
    "workbookDt",
    "ur",
    "v",
    "C",
    "sgpH",
    ...SGP_HELPER_HOOKS.map((n) => `bh${n}`),
    ...SGP_FUNC_HOOKS.map(([, k]) => k),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
  ];
  const body = polish(raw, "sgp", protectNames);

  write(
    path.join(SGP_OUT, "shape-geometry-paint-impl.ts"),
    `${PROV}
// Semantic implementation: shape geometry canvas paint (legacy shape-paint peel).
// Stage-3 wave-94.

import { resolveFillStyle, applyCanvasLineDash } from "../canvas-fill";
import {
  resolveElementFramePx,
  applyFrameCanvasTransform,
  applyElementCanvasTransform,
} from "../geometry-transform";
import { resolveColorToCssRgba } from "../color-resolve";
import { workbookGt } from "../text-style";
import { ShapeGeometry as workbookDt } from "../shape-geometry";
import { ur, v, C } from "../presentation-protobuf";
import { sgpH } from "./boundary-hooks";

void workbookGt;
void workbookDt;
void ur;
void v;
void C;
void sgpH;

${body}
`,
  );
}

function buildSgpIndex(): void {
  write(
    path.join(SGP_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-94: shape-geometry-paint barrel.

export { wireShapeGeometryPaintBoundaryHooks, sgpH } from "./boundary-hooks";
export { paintShapeGeometry } from "./shape-geometry-paint-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// table-frame-layout
// ---------------------------------------------------------------------------

function buildTflHooks(): void {
  write(
    path.join(TFL_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-94: table-frame-layout boundary hooks.

export type TableFrameLayoutBoundaryHooks = {
${hookFieldsHelper(TFL_HELPER_HOOKS, "bh")}
${hookFieldsFunc(TFL_FUNC_HOOKS)}
};

export const tflH: TableFrameLayoutBoundaryHooks = {} as TableFrameLayoutBoundaryHooks;

export function wireTableFrameLayoutBoundaryHooks(
  next: TableFrameLayoutBoundaryHooks,
): void {
  Object.assign(tflH, next);
}
`,
  );
}

function buildTflImpl(all: string[]): void {
  let raw = slice(all, TFL_DROP.start, TFL_DROP.end);
  raw = raw.replace(/^function workbookA\(/m, "export function layoutTableFrame(");
  raw = ren(raw, [["workbookA", "layoutTableFrame"]]);

  raw = ren(raw, [
    ["workbookHelper212", "resolveFillStyle"],
    ["workbookBinding438", "mergeStyleLayers"],
    ["workbookX", "paintTextElement"],
    ["workbookBinding1269", "DEFAULT_AUTO_ROW_MIN_HEIGHT_PX"],
    ["workbookBinding1270", "DEFAULT_ROW_HEIGHT_EMU"],
    ["workbookBinding1272", "DEFAULT_TABLE_WIDTH_EMU"],
    ["workbookBinding1275", "DEFAULT_CELL_MARGINS"],
    ["workbookBinding1271", "DEFAULT_TABLE_ROW_HEIGHT_SCALE"],
    ["workbookBinding1268", "TABLE_EMU_INV_GT"],
  ]);

  for (const n of TFL_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `tflH.bh${n}`]]);
  }
  for (const [from, key] of TFL_FUNC_HOOKS) {
    raw = ren(raw, [[from, `tflH.${key}`]]);
  }

  const protectNames = [
    "layoutTableFrame",
    "resolveFillStyle",
    "mergeStyleLayers",
    "paintTextElement",
    "workbookGt",
    "twipToCssPx",
    "DEFAULT_AUTO_ROW_MIN_HEIGHT_PX",
    "DEFAULT_ROW_HEIGHT_EMU",
    "DEFAULT_TABLE_WIDTH_EMU",
    "DEFAULT_CELL_MARGINS",
    "DEFAULT_TABLE_ROW_HEIGHT_SCALE",
    "TABLE_EMU_INV_GT",
    "tflH",
    ...TFL_HELPER_HOOKS.map((n) => `bh${n}`),
    ...TFL_FUNC_HOOKS.map(([, k]) => k),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
  ];
  const body = polish(raw, "tfl", protectNames);

  const prelude = `
/** Legacy Binding1269 — auto row min height (px). */
export const DEFAULT_AUTO_ROW_MIN_HEIGHT_PX = 24;
/** Legacy Binding1270 — default row height (EMU). */
export const DEFAULT_ROW_HEIGHT_EMU = 24;
/** Legacy Binding1272 — default table width (EMU). */
export const DEFAULT_TABLE_WIDTH_EMU = 600;
/** Legacy Binding1271 — row height scale factor. */
export const DEFAULT_TABLE_ROW_HEIGHT_SCALE = 1;
/** Legacy Binding1268 — 1 / workbookGt. */
export const TABLE_EMU_INV_GT = 1 / workbookGt;
/** Legacy Binding1275 — default cell margins. */
export const DEFAULT_CELL_MARGINS = {
  left: twipToCssPx(108),
  right: twipToCssPx(108),
  top: 0,
  bottom: 0,
};
`.trim();

  write(
    path.join(TFL_OUT, "table-frame-layout-impl.ts"),
    `${PROV}
// Semantic implementation: table frame layout + paint (legacy workbookA).
// Stage-3 wave-94.

import { resolveFillStyle } from "../canvas-fill";
import { mergeStyleLayers, workbookGt } from "../text-style";
import { paintTextElement } from "../text-box";
import { twipToCssPx } from "../font-stack";
import { tflH } from "./boundary-hooks";

void tflH;

${prelude}

${body}

/** Legacy alias. */
export const workbookA = layoutTableFrame;
`,
  );
}

function buildTflIndex(): void {
  write(
    path.join(TFL_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-94: table-frame-layout barrel.

export { wireTableFrameLayoutBoundaryHooks, tflH } from "./boundary-hooks";
export {
  layoutTableFrame,
  workbookA,
  DEFAULT_AUTO_ROW_MIN_HEIGHT_PX,
  DEFAULT_ROW_HEIGHT_EMU,
  DEFAULT_TABLE_WIDTH_EMU,
  DEFAULT_CELL_MARGINS,
} from "./table-frame-layout-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// slide-canvas-render
// ---------------------------------------------------------------------------

function buildScrHooks(): void {
  write(
    path.join(SCR_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-94: slide-canvas-render boundary hooks.

export type SlideCanvasRenderBoundaryHooks = {
${hookFieldsFunc(SCR_FUNC_HOOKS)}
${hookFieldsHelper(SCR_HELPER_HOOKS, "bh")}
};

export const scrH: SlideCanvasRenderBoundaryHooks = {} as SlideCanvasRenderBoundaryHooks;

export function wireSlideCanvasRenderBoundaryHooks(
  next: SlideCanvasRenderBoundaryHooks,
): void {
  Object.assign(scrH, next);
}
`,
  );
}

function buildScrImpl(all: string[]): void {
  let raw = slice(all, SCR_DROP.start, SCR_DROP.end);
  raw = raw.replace(/^async function vEe\(/m, "export async function renderSlideCanvas(");
  raw = ren(raw, [
    ["vEe", "renderSlideCanvas"],
    ["workbookA", "layoutTableFrame"],
    ["LCe", "paintChartElement"],
    ["workbookHelper110", "resolvePlaceholderTextStyle"],
    ["workbookHelper218", "resolveMasterParagraphDefaults"],
    ["workbookHelper296", "resolveShapeTextFrameRect"],
  ]);

  for (const [from, key] of SCR_FUNC_HOOKS) {
    raw = ren(raw, [[from, `scrH.${key}`]]);
  }
  for (const n of SCR_HELPER_HOOKS) {
    raw = ren(raw, [[`workbookHelper${n}`, `scrH.bh${n}`]]);
  }

  const protectNames = [
    "renderSlideCanvas",
    "layoutTableFrame",
    "paintChartElement",
    "resolvePlaceholderTextStyle",
    "resolveMasterParagraphDefaults",
    "resolveShapeTextFrameRect",
    "scrH",
    ...SCR_FUNC_HOOKS.map(([, k]) => k),
    ...SCR_HELPER_HOOKS.map((n) => `bh${n}`),
    "Error",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Set",
    "Map",
    "Promise",
    "console",
  ];
  const body = polish(raw, "scr", protectNames);

  write(
    path.join(SCR_OUT, "slide-canvas-render-impl.ts"),
    `${PROV}
// Semantic implementation: slide canvas render pass (legacy vEe).
// Stage-3 wave-94.

import { layoutTableFrame } from "../table-frame-layout";
import { paintChartElement } from "../chart-paint";
import {
  resolvePlaceholderTextStyle,
} from "../text-style";
import {
  resolveMasterParagraphDefaults,
} from "../text-box";
import { resolveShapeTextFrameRect } from "../preset-shape";
import { scrH } from "./boundary-hooks";

void layoutTableFrame;
void paintChartElement;
void resolvePlaceholderTextStyle;
void resolveMasterParagraphDefaults;
void resolveShapeTextFrameRect;
void scrH;

${body}

/** Legacy alias. */
export const vEe = renderSlideCanvas;
`,
  );
}

function buildScrIndex(): void {
  write(
    path.join(SCR_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-94: slide-canvas-render barrel.

export { wireSlideCanvasRenderBoundaryHooks, scrH } from "./boundary-hooks";
export { renderSlideCanvas, vEe } from "./slide-canvas-render-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// chart-paint patch (drop bh462)
// ---------------------------------------------------------------------------

function patchChartPaint(): void {
  let hooks = fs.readFileSync(CHART_PAINT_HOOKS, "utf8");
  if (hooks.includes("bh462:")) {
    hooks = hooks.replace(/\n\s*bh462: \(\.\.\.args: any\[\]\) => any;/, "");
    write(CHART_PAINT_HOOKS, hooks);
  }

  let impl = fs.readFileSync(CHART_PAINT_IMPL, "utf8");
  if (!impl.includes("paintChartAxisTicks")) {
    impl = impl.replace(
      'import { cpH } from "./boundary-hooks";',
      'import { cpH } from "./boundary-hooks";\nimport { paintChartAxisTicks } from "../chart-axis-ticks";',
    );
  }
  impl = impl.replace(/\bcpH\.bh462\b/g, "paintChartAxisTicks");
  write(CHART_PAINT_IMPL, impl);
  console.log("  patched chart-paint (bh462 → paintChartAxisTicks)");
}

// ---------------------------------------------------------------------------
// boundary header splice
// ---------------------------------------------------------------------------

function patchHeader(kept: string[]): string[] {
  const catWire = CAT_HELPER_HOOKS.map(
    (n) => `  bh${n}: (...args: any[]) => workbookHelper${n}(...args),`,
  ).join("\n");

  const block = `
import {
  wireChartAxisTicksBoundaryHooks,
  paintChartAxisTicks as workbookHelper462,
} from "../../workbook/chart-axis-ticks";

wireChartAxisTicksBoundaryHooks({
${catWire}
  nye: (...args: any[]) => Nye(...args),
  vye: (...args: any[]) => Vye(...args),
});

import {
  wireShapeGeometryPaintBoundaryHooks,
  paintShapeGeometry as workbookHelper616,
} from "../../workbook/shape-geometry-paint";

wireShapeGeometryPaintBoundaryHooks({
${hookWireHelper(SGP_HELPER_HOOKS, "bh")}
${hookWireFunc(SGP_FUNC_HOOKS)}
});

import {
  wireTableFrameLayoutBoundaryHooks,
  layoutTableFrame as workbookA,
} from "../../workbook/table-frame-layout";

wireTableFrameLayoutBoundaryHooks({
${hookWireHelper(TFL_HELPER_HOOKS, "bh")}
${hookWireFunc(TFL_FUNC_HOOKS)}
});

import {
  wireSlideCanvasRenderBoundaryHooks,
  renderSlideCanvas as vEe,
} from "../../workbook/slide-canvas-render";

wireSlideCanvasRenderBoundaryHooks({
${hookWireFunc(SCR_FUNC_HOOKS)}
${hookWireHelper(SCR_HELPER_HOOKS, "bh")}
});

// Thin aliases: chart-axis-ticks + shape-geometry-paint + table-frame-layout + slide-canvas-render drained (wave-94).
`.trimStart();

  let insertAt = -1;
  for (let i = 0; i < Math.min(4000, kept.length); i++) {
    if (kept[i]?.includes("// Thin aliases: compose-jsx-lower cluster drained (wave-93).")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]?.trim() === "") insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("wave-94 insert point missing (after compose-jsx-lower wave-93)");

  kept.splice(insertAt, 0, "", ...block.split("\n"), "");
  console.log("  inserted wave-94 imports + wire hooks");

  for (let i = 0; i < Math.min(2000, kept.length); i++) {
    if (kept[i]?.includes("bh462: (...args: any[]) => workbookHelper462(...args),")) {
      kept.splice(i, 1);
      console.log("  removed bh462 from chart-paint boundary wire");
      break;
    }
  }

  for (let i = 0; i < 40; i++) {
    if (kept[i]?.includes("compose-jsx-lower (vke/helper745/Cke).")) {
      kept[i] = kept[i]!.replace(
        "compose-jsx-lower (vke/helper745/Cke).",
        "compose-jsx-lower (vke/helper745/Cke); chart-axis-ticks (helper462); shape-geometry-paint (helper616); table-frame-layout (workbookA); slide-canvas-render (vEe).",
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

  const rows = [
    ["Chart axis ticks (`helper462`)", "~0.40k", "**Drained (wave-94)** → `workbook/chart-axis-ticks/`"],
    ["Shape geometry paint (`helper616`)", "~0.38k", "**Drained (wave-94)** → `workbook/shape-geometry-paint/`"],
    ["Table frame layout (`workbookA`)", "~0.36k", "**Drained (wave-94)** → `workbook/table-frame-layout/`"],
    ["Slide canvas render (`vEe`)", "~0.33k", "**Drained (wave-94)** → `workbook/slide-canvas-render/`"],
  ];
  for (const [label, loc, status] of rows) {
    if (!md.includes(label.split("(")[0]!.trim())) {
      md = md.replace(
        "| Compose JSX lower (`vke` / `helper745` / `Cke`) | ~1.22k | **Drained (wave-93)** → `workbook/compose-jsx-lower/` |\n",
        "| Compose JSX lower (`vke` / `helper745` / `Cke`) | ~1.22k | **Drained (wave-93)** → `workbook/compose-jsx-lower/` |\n" +
          rows.map(([l, k, s]) => `| ${l} | ${k} | ${s} |`).join("\n") +
          "\n",
      );
      break;
    }
  }

  const wave = `
## Wave-94 progress

- Peeled \`helper462\` → \`workbook/chart-axis-ticks/\` (\`catH\` for helpers 405/422/424–440/446/460/461 + Nye/Vye); axis consts inlined; chart-paint imports \`paintChartAxisTicks\` (dropped \`cpH.bh462\`).
- Peeled \`helper616\` → \`workbook/shape-geometry-paint/\` (\`sgpH\`); fill/frame/color direct imports; connector helpers via hooks.
- Peeled \`workbookA\` → \`workbook/table-frame-layout/\` (\`tflH\`); table default consts inlined; text/fill via direct imports.
- Peeled \`vEe\` → \`workbook/slide-canvas-render/\` (\`scrH\`); \`layoutTableFrame\` + \`paintChartElement\` direct imports.
- Boundary wired via single-pass line-range drain; \`openBoundary\` kept.
- QG on four modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${after} (was ${before}; Δ ${after - before}).
- Next: presentation leave-behind (\`_workbookS\` / WorkbookN) / \`xLe\` walnut / Binding1344 class peel.
`;

  if (!md.includes("## Wave-94 progress")) {
    if (md.includes("## Wave-93 progress")) {
      md = md.replace(/## Wave-93 progress[\s\S]*?(?=\n## Wave-|\n## Why |\n*$)/, (b) => b.trimEnd() + "\n" + wave);
    }
    if (!md.includes("## Wave-94 progress")) md = md.trimEnd() + "\n" + wave;
  }

  fs.writeFileSync(README, md.endsWith("\n") ? md : md + "\n");
  console.log("  updated README");
}

function updateImportMap(afterLoc: number): void {
  const json = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    files?: Record<string, Record<string, unknown>>;
  };
  const note = `Wave workbook-runtime Stage-3 wave-94: helper462/chart-axis-ticks + helper616/shape-geometry-paint + workbookA/table-frame-layout + vEe/slide-canvas-render; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${note} | ${json.notes}` : note;

  const files = json.files;
  // Match wave-93: touch workbook-runtime + workbook-C49 entries only
  if (files) {
    for (const [key, val] of Object.entries(files)) {
      const restored = String(val.restored ?? "");
      if (!restored.includes("workbook-runtime") && !key.includes("workbook-C49")) continue;
      const prev = String(val.notes ?? "");
      val.notes = prev.includes("wave-94") ? prev : `${note} | ${prev}`;
      val.openBoundary = true;
      const mods = (val.restoredModules as string[] | undefined) ?? [];
      for (const f of [
        "workbook/chart-axis-ticks/index.ts",
        "workbook/shape-geometry-paint/index.ts",
        "workbook/table-frame-layout/index.ts",
        "workbook/slide-canvas-render/index.ts",
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

  fs.mkdirSync(CAT_OUT, { recursive: true });
  fs.mkdirSync(SGP_OUT, { recursive: true });
  fs.mkdirSync(TFL_OUT, { recursive: true });
  fs.mkdirSync(SCR_OUT, { recursive: true });

  console.log("building chart-axis-ticks…");
  buildCatHooks();
  buildCatImpl(all);
  buildCatIndex();

  console.log("building shape-geometry-paint…");
  buildSgpHooks();
  buildSgpImpl(all);
  buildSgpIndex();

  console.log("building table-frame-layout…");
  buildTflHooks();
  buildTflImpl(all);
  buildTflIndex();

  console.log("building slide-canvas-render…");
  buildScrHooks();
  buildScrImpl(all);
  buildScrIndex();

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
    CAT_OUT,
    SGP_OUT,
    TFL_OUT,
    SCR_OUT,
    CHART_PAINT_DIR,
    BOUNDARY,
  ]);

  console.log("\nquality-gate…");
  const qgOut = run(
    [
      "bun",
      QG,
      CAT_OUT,
      SGP_OUT,
      TFL_OUT,
      SCR_OUT,
      BOUNDARY,
      "--no-cache",
      "--allow-open-boundaries",
    ],
    { allowFail: true },
  );
  console.log(qgOut);
}

main();
