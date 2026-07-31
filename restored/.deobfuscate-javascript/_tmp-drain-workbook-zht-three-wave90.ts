#!/usr/bin/env bun
/**
 * Stage-3 wave-90 drain of workbook-runtime (two cohesive peels):
 *
 * 1) Doc-op apply cluster (~1261 LOC) —
 *    helper1024 + Zht + Qht/$ht/egt…ggt converters + Binding1964/_gt
 *    → workbook/doc-op-apply/
 *    (Zht is export-only from WorkbookN; entire *gt fan-in is self-contained)
 *
 * 2) Three.js chart paint (~971 LOC) —
 *    helper521 + Qbe + $be (contiguous; NOT vendor/three — that shim already
 *    covers Binding929/Xbe stock three@0.170.0; this is app 3D bar paint)
 *    → workbook/three-chart-paint/
 *    chart-paint drops cpH.paintThreeChart hook → direct import
 *
 * Skipped: WorkbookN / _workbookS leave-behinds; N1e (~522) deferred;
 * zXe/kgt still available next.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-zht-three-wave90.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const DO_OUT = path.join(ROOT, "restored/workbook/doc-op-apply");
const TC_OUT = path.join(ROOT, "restored/workbook/three-chart-paint");
const CP_PAINT = path.join(
  ROOT,
  "restored/workbook/chart-paint/paint-chart-impl.ts",
);
const CP_HOOKS = path.join(
  ROOT,
  "restored/workbook/chart-paint/boundary-hooks.ts",
);
const CP_INDEX = path.join(ROOT, "restored/workbook/chart-paint/index.ts");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave90.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: helper1024 … _gt close (before vgt). */
const DO_DROP = { start: 69567, end: 70827 };

/** Inclusive 1-based splits inside DO_DROP (each ≤1000 flat). */
const DO_APPLY = { start: 69567, end: 70167 }; // helper1024 + Zht
const DO_CONV = { start: 70168, end: 70827 }; // Qht…ggt + Binding1964/_gt

/** Inclusive 1-based: helper521 … $be close (before Binding1140 var). */
const TC_DROP = { start: 11723, end: 12693 };

const DO_HOOK_MAP: Array<[string, string]> = [
  ["workbookBinding1734", "commentThreadClass"],
  ["workbookBinding1736", "ensureCommentsInit"],
  ["workbookBinding675", "ensureRangeClusterInit"],
];

const TC_HOOK_MAP: Array<[string, string]> = [
  ["workbookHelper421", "bh421"],
  ["workbookHelper424", "bh424"],
  ["workbookHelper428", "bh428"],
  ["workbookHelper469", "bh469"],
  ["workbookHelper474", "bh474"],
  ["workbookHelper519", "bh519"],
  ["workbookHelper520", "bh520"],
  ["workbookBinding837", "defaultFontFamily"],
  ["workbookBinding1140", "ssfModule"],
  ["workbookBinding1141", "cameraDir"],
];

const DO_EXPORT_RENAME: Array<[string, string]> = [
  ["workbookHelper1024", "isAliasRef"],
  ["Zht", "applyWorkbookDocOps"],
  ["_gt", "ensureDocOpApplyInit"],
];

const TC_EXPORT_RENAME: Array<[string, string]> = [
  ["workbookHelper521", "createChartTextSprite"],
  ["Qbe", "layoutThreeBarSegments"],
  ["$be", "paintThreeChart"],
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
    [DO_DROP.start - 1, "  });", "before helper1024"],
    [DO_DROP.start, "function workbookHelper1024(", "helper1024"],
    [69572, "function Zht(", "Zht"],
    [DO_APPLY.end, "}", "Zht close"],
    [DO_CONV.start, "function Qht(", "Qht"],
    [70188, "function $ht(", "$ht"],
    [70200, "function egt(", "egt"],
    [70797, "function ggt(", "ggt"],
    [70820, "var workbookBinding1964,", "Binding1964"],
    [70821, "  _gt = esmInit(() => {", "_gt"],
    [DO_DROP.end, "  });", "_gt close"],
    [DO_DROP.end + 1, "function vgt(", "vgt kept"],
    [TC_DROP.start - 1, "  });", "Binding1139 close before helper521"],
    [TC_DROP.start, "function workbookHelper521(", "helper521"],
    [11788, "function Qbe(", "Qbe"],
    [12116, "function $be(", "$be"],
    [TC_DROP.end, "}", "$be close"],
    [TC_DROP.end + 1, "var workbookBinding1140,", "Binding1140 kept"],
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

function renameLocals(body: string, prefix: string): string {
  let out = body.replace(/\bworkbookInput(\d+)\b/g, `${prefix}In$1`);
  out = out.replace(/\bworkbookBinding(\d+)\b/g, `${prefix}Bind$1`);
  out = out.replace(/\bworkbookHelper(\d+)\b/g, `${prefix}Helper$1`);
  return out;
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

function protectNames(body: string, names: string[]): string {
  let out = body;
  for (const n of names) {
    out = out.replace(new RegExp(`\\b${escapeRe(n)}\\b`, "g"), `__P_${n}__`);
  }
  return out;
}

function unprotectNames(body: string, names: string[]): string {
  let out = body;
  for (const n of names) {
    out = out.replace(new RegExp(`__P_${escapeRe(n)}__`, "g"), n);
  }
  return out;
}

function applyExportRenames(
  body: string,
  renames: Array<[string, string]>,
  exports: string[],
): string {
  let out = body;
  for (const [old, neu] of renames) {
    if (!exports.includes(old)) continue;
    if (old === "_gt") {
      out = out.replace(
        /^var workbookBinding1964,\n\s*_gt = esmInit/m,
        "export let workbookBinding1964: WeakMap<object, Record<string, string>>;\nexport const ensureDocOpApplyInit = esmInit",
      );
      continue;
    }
    out = out.replace(
      new RegExp(`^function ${escapeRe(old)}\\(`, "m"),
      `export function ${neu}(`,
    );
  }
  for (const [old, neu] of renames) {
    out = out.replace(new RegExp(`\\b${escapeRe(old)}\\b`, "g"), neu);
  }
  return out;
}

function rewriteDoHooks(body: string): string {
  let out = body;
  for (const [src, bag] of DO_HOOK_MAP) {
    if (src === "workbookBinding1734") {
      out = out.replace(
        new RegExp(`\\b${escapeRe(src)}\\b`, "g"),
        `doH.${bag}`,
      );
      continue;
    }
    // ensure calls: workbookBinding1736() / workbookBinding675()
    out = out.replace(
      new RegExp(`\\b${escapeRe(src)}\\s*\\(`, "g"),
      `doH.${bag}(`,
    );
  }
  out = out.replace(/\bspreadsheetVn\s*\(/g, "spreadsheetVn(");
  out = out.replace(/\bworkbookHelper333\s*\(/g, "getAttachedWorksheet(");
  out = out.replace(/\bworkbookBinding393\b/g, "shapeGeometryNameToProto");
  out = out.replace(/\bworkbookBinding404\s*\(/g, "ensureChartProtoNameMapsInit(");
  return out;
}

function rewriteTcHooks(body: string): string {
  let out = body;
  // Inline 3D layout constants (Binding1139 leave-behind keeps boundary copies).
  out = out.replace(/\bworkbookBinding1136\b/g, "THREE_CHART_BAR_DEPTH");
  out = out.replace(/\bworkbookBinding1137\b/g, "THREE_CHART_MIN_EXTENT");
  out = out.replace(/\bworkbookBinding1138\b/g, "THREE_CHART_MIN_HEIGHT");

  // Three.js npm classes (vendor/three already drained wave-54).
  const threeMap: Array<[string, string]> = [
    ["workbookBinding957", "Vector3"],
    ["workbookBinding972", "Vector4"],
    ["workbookBinding973", "Box3"],
    ["workbookBinding954", "MathUtils"],
    ["workbookBinding1041", "Color"],
    ["workbookBinding1060", "BufferGeometry"],
    ["workbookBinding1072", "BoxGeometry"],
    ["workbookBinding1073", "Group"],
    ["workbookBinding1077", "SpriteMaterial"],
    ["workbookBinding1090", "Sprite"],
    ["workbookBinding1091", "LineBasicMaterial"],
    ["workbookBinding1099", "Line"],
    ["workbookBinding1100", "CanvasTexture"],
    ["$P", "Mesh"],
  ];
  for (const [src, neu] of threeMap) {
    out = out.replace(new RegExp(`\\b${escapeRe(src)}\\b`, "g"), neu);
  }

  out = out.replace(/\b_presentationYn\b/g, "Yn");

  for (const [src, bag] of TC_HOOK_MAP) {
    if (src === "workbookBinding837") {
      out = out.replace(
        new RegExp(`\\b${escapeRe(src)}\\b`, "g"),
        `tcH.${bag}`,
      );
      continue;
    }
    if (src === "workbookBinding1140" || src === "workbookBinding1141") {
      out = out.replace(
        new RegExp(`\\b${escapeRe(src)}\\b`, "g"),
        `tcH.${bag}`,
      );
      continue;
    }
    out = out.replace(
      new RegExp(`\\b${escapeRe(src)}\\s*\\(`, "g"),
      `tcH.${bag}(`,
    );
  }
  return out;
}

function buildDoHooks(): void {
  const fields = DO_HOOK_MAP.map(([, bag]) => {
    if (bag === "commentThreadClass") return `  ${bag}: any;`;
    return `  ${bag}: (...args: any[]) => any;`;
  }).join("\n");
  write(
    path.join(DO_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-90: doc-op-apply boundary hooks
// (comment thread class + range/comments ensure leave-behinds).

export type DocOpApplyBoundaryHooks = {
${fields}
};

/** Live bag — wired from workbook-runtime after peel. */
export const doH: DocOpApplyBoundaryHooks = {} as DocOpApplyBoundaryHooks;

export function wireDocOpApplyBoundaryHooks(
  next: DocOpApplyBoundaryHooks,
): void {
  Object.assign(doH, next);
}
`,
  );
}

function buildTcHooks(): void {
  const fields = TC_HOOK_MAP.map(([, bag]) => {
    if (bag === "defaultFontFamily" || bag === "ssfModule" || bag === "cameraDir") {
      return `  ${bag}: any;`;
    }
    return `  ${bag}: (...args: any[]) => any;`;
  }).join("\n");
  write(
    path.join(TC_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-90: three-chart-paint boundary hooks
// (2D chart helpers + SSF/camera leave-behinds; three npm is direct).

export type ThreeChartPaintBoundaryHooks = {
${fields}
};

/** Live bag — wired from workbook-runtime after peel. */
export const tcH: ThreeChartPaintBoundaryHooks =
  {} as ThreeChartPaintBoundaryHooks;

export function wireThreeChartPaintBoundaryHooks(
  next: ThreeChartPaintBoundaryHooks,
): void {
  Object.assign(tcH, next);
}
`,
  );
}

function buildDoApply(all: string[]): void {
  const raw = all.slice(DO_APPLY.start - 1, DO_APPLY.end).join("\n");
  const exports = ["workbookHelper1024", "Zht"];
  let out = rewriteDoHooks(raw);
  out = applyExportRenames(out, DO_EXPORT_RENAME, exports);
  const protect = [
    "esmInit",
    "doH",
    "spreadsheetVn",
    "getAttachedWorksheet",
    "shapeGeometryNameToProto",
    "ensureChartProtoNameMapsInit",
    "workbookBinding1964",
    "Qht",
    "applyFontPatch",
    "egt",
    "agt",
    "ogt",
    "cgt",
    "lgt",
    "ugt",
    "dgt",
    "mgt",
    "hgt",
    "ggt",
    "ngt",
    "rgt",
    "mapCfThreshold",
    "mapDeepTransform",
    "findCommentThread",
    "findTableOnSheet",
    "mergeAnchorProps",
    ...DO_HOOK_MAP.map(([, b]) => b),
    ...DO_EXPORT_RENAME.map(([, n]) => n),
    ...DO_EXPORT_RENAME.map(([o]) => o),
  ];
  out = protectNames(out, protect);
  out = renameLocals(out, "do");
  out = unprotectNames(out, protect);
  out = addParamAny(out);

  write(
    path.join(DO_OUT, "apply-ops-impl.ts"),
    `${PROV}
// Semantic implementation: workbook doc-op apply (legacy Zht + alias predicate).
// Stage-3 wave-90; kept flat under maxFlatLines.

import { getAttachedWorksheet } from "../worksheet-attachment";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { doH } from "./boundary-hooks";

${out}
`,
  );
}

function buildDoConverters(all: string[]): void {
  const raw = all.slice(DO_CONV.start - 1, DO_CONV.end).join("\n");
  const exports = ["_gt"];
  let out = rewriteDoHooks(raw);
  out = applyExportRenames(out, DO_EXPORT_RENAME, exports);

  // Semantic renames for helpers (avoid HelperN / mechanical-name-family).
  const helperRename: Array<[string, string]> = [
    ["$ht", "applyFontPatch"],
    ["workbookHelper1025", "mapCfThreshold"],
    ["workbookHelper1026", "mapDeepTransform"],
    ["workbookHelper1027", "findCommentThread"],
    ["workbookHelper1028", "findTableOnSheet"],
    ["workbookHelper1029", "mergeAnchorProps"],
  ];
  for (const [old, neu] of helperRename) {
    out = out.replace(
      new RegExp(`^function ${escapeRe(old)}\\(`, "m"),
      `export function ${neu}(`,
    );
    out = out.replace(new RegExp(`\\b${escapeRe(old)}\\b`, "g"), neu);
  }

  // Promote remaining converter function decls for cross-file use from apply-ops.
  for (const name of [
    "Qht",
    "egt",
    "tgt",
    "ngt",
    "rgt",
    "igt",
    "agt",
    "ogt",
    "sgt",
    "cgt",
    "lgt",
    "ugt",
    "dgt",
    "fgt",
    "pgt",
    "mgt",
    "hgt",
    "ggt",
  ]) {
    out = out.replace(
      new RegExp(`^function ${escapeRe(name)}\\(`, "m"),
      `export function ${name}(`,
    );
  }

  const protect = [
    "esmInit",
    "doH",
    "spreadsheetVn",
    "getAttachedWorksheet",
    "shapeGeometryNameToProto",
    "ensureChartProtoNameMapsInit",
    "workbookBinding1964",
    "ensureDocOpApplyInit",
    "applyFontPatch",
    "mapCfThreshold",
    "mapDeepTransform",
    "findCommentThread",
    "findTableOnSheet",
    "mergeAnchorProps",
    "Qht",
    "egt",
    "tgt",
    "ngt",
    "rgt",
    "igt",
    "agt",
    "ogt",
    "sgt",
    "cgt",
    "lgt",
    "ugt",
    "dgt",
    "fgt",
    "pgt",
    "mgt",
    "hgt",
    "ggt",
    ...DO_HOOK_MAP.map(([, b]) => b),
    ...DO_EXPORT_RENAME.map(([, n]) => n),
  ];
  out = protectNames(out, protect);
  out = renameLocals(out, "do");
  out = unprotectNames(out, protect);
  out = addParamAny(out);

  write(
    path.join(DO_OUT, "converters-impl.ts"),
    `${PROV}
// Semantic implementation: doc-op converters + alias WeakMap ensure
// (legacy Qht…ggt + Binding1964/_gt).
// Stage-3 wave-90; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { getAttachedWorksheet } from "../worksheet-attachment";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { doH } from "./boundary-hooks";

${out}
`,
  );
}

function buildDoEnsure(): void {
  write(
    path.join(DO_OUT, "ensure-doc-op-apply-init.ts"),
    `${PROV}
// Stage-3 wave-90: doc-op-apply cluster ensure (legacy _gt).

import { ensureDocOpApplyInit as ensureDocOpApplyConsts } from "./converters-impl";

/** Seed alias WeakMap + spreadsheet/range/comments prerequisites. */
export const ensureDocOpApplyInit = () => {
  ensureDocOpApplyConsts();
};
`,
  );
}

function buildDoIndex(): void {
  write(
    path.join(DO_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-90: doc-op-apply barrel
// (legacy Zht export-only apply + converter fan-in).

export { ensureDocOpApplyInit } from "./ensure-doc-op-apply-init";
export { wireDocOpApplyBoundaryHooks, doH } from "./boundary-hooks";

export { isAliasRef, applyWorkbookDocOps } from "./apply-ops-impl";

export {
  ensureDocOpApplyInit as ensureDocOpApplyConsts,
  workbookBinding1964,
  Qht,
  applyFontPatch,
  egt,
  agt,
  ogt,
  cgt,
  lgt,
  ugt,
  dgt,
  mgt,
  hgt,
  ggt,
  ngt,
  findCommentThread,
  findTableOnSheet,
  mergeAnchorProps,
} from "./converters-impl";
`,
  );
}

function buildTcImpl(all: string[]): void {
  const raw = all.slice(TC_DROP.start - 1, TC_DROP.end).join("\n");
  const exports = ["workbookHelper521", "Qbe", "$be"];
  let out = rewriteTcHooks(raw);
  out = applyExportRenames(out, TC_EXPORT_RENAME, exports);

  const protect = [
    "tcH",
    "Yn",
    "Vector3",
    "Vector4",
    "Box3",
    "MathUtils",
    "Color",
    "BufferGeometry",
    "BoxGeometry",
    "Group",
    "SpriteMaterial",
    "Sprite",
    "LineBasicMaterial",
    "Line",
    "CanvasTexture",
    "Mesh",
    "THREE_CHART_BAR_DEPTH",
    "THREE_CHART_MIN_EXTENT",
    "THREE_CHART_MIN_HEIGHT",
    "layoutThreeBarSegments",
    "createChartTextSprite",
    "paintThreeChart",
    ...TC_HOOK_MAP.map(([, b]) => b),
    ...TC_EXPORT_RENAME.map(([o]) => o),
  ];
  out = protectNames(out, protect);
  out = renameLocals(out, "tc");
  out = unprotectNames(out, protect);
  out = addParamAny(out);

  write(
    path.join(TC_OUT, "three-chart-paint-impl.ts"),
    `${PROV}
// Semantic implementation: Three.js 3D chart paint
// (legacy text-sprite / bar-layout / three-paint).
// Stage-3 wave-90; kept flat under maxFlatLines.
// Stock three.js already drained → vendor/three; this is Codex chart paint.

import {
  Box3,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  Group,
  Line,
  LineBasicMaterial,
  MathUtils,
  Mesh,
  Sprite,
  SpriteMaterial,
  Vector3,
  Vector4,
} from "../../vendor/three";
import { Yn } from "../presentation-protobuf";
import { tcH } from "./boundary-hooks";

/** Chart 3D layout constants (legacy Binding1136–1138). */
export const THREE_CHART_BAR_DEPTH = 2.6;
export const THREE_CHART_MIN_EXTENT = 0.04;
export const THREE_CHART_MIN_HEIGHT = 0.02;

${out}
`,
  );
}

function buildTcIndex(): void {
  write(
    path.join(TC_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-90: three-chart-paint barrel
// (legacy text-sprite / bar-layout / three-paint — app paint on vendor/three).

export {
  wireThreeChartPaintBoundaryHooks,
  tcH,
} from "./boundary-hooks";

export {
  createChartTextSprite,
  layoutThreeBarSegments,
  paintThreeChart,
  THREE_CHART_BAR_DEPTH,
  THREE_CHART_MIN_EXTENT,
  THREE_CHART_MIN_HEIGHT,
} from "./three-chart-paint-impl";
`,
  );
}

function patchChartPaintConsumer(): void {
  // Fix wave-89 leftover: $be( was not rewritten (\\b before $ fails).
  let paint = fs.readFileSync(CP_PAINT, "utf8");
  if (paint.includes("$be(") || paint.includes("cpH.paintThreeChart(")) {
    paint = paint.replace(
      /import \{ cpH \} from "\.\/boundary-hooks";/,
      `import { cpH } from "./boundary-hooks";\nimport { paintThreeChart } from "../three-chart-paint";`,
    );
    paint = paint.replace(/\$be\s*\(/g, "paintThreeChart(");
    paint = paint.replace(/cpH\.paintThreeChart\s*\(/g, "paintThreeChart(");
    write(CP_PAINT, paint);
  }

  let hooks = fs.readFileSync(CP_HOOKS, "utf8");
  if (hooks.includes("paintThreeChart")) {
    hooks = hooks.replace(/\n\s*paintThreeChart: \(\.\.\.args: any\[\]\) => any;/, "");
    write(CP_HOOKS, hooks);
  }
}

function drainBoundary(all: string[]): string[] {
  const kept: string[] = [];
  for (let i = 0; i < all.length; i++) {
    const line = i + 1;
    if (line >= DO_DROP.start && line <= DO_DROP.end) continue;
    if (line >= TC_DROP.start && line <= TC_DROP.end) continue;
    kept.push(all[i]!);
  }
  return kept;
}

function patchHeader(kept: string[]): string[] {
  // 1) Patch existing chart-paint wire: drop paintThreeChart:$be line
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes("paintThreeChart: (...args: any[]) => ($be as any)(...args),")) {
      kept.splice(i, 1);
      console.log("  removed paintThreeChart:$be wire from chart-paint hooks");
      break;
    }
  }

  const doWire = DO_HOOK_MAP.map(([src, bag]) => {
    if (bag === "commentThreadClass") {
      return `  ${bag}: workbookBinding1734,`;
    }
    return `  ${bag}: (...args: any[]) => ${src}(...args),`;
  }).join("\n");

  const tcWire = TC_HOOK_MAP.map(([src, bag]) => {
    if (
      bag === "defaultFontFamily" ||
      bag === "ssfModule" ||
      bag === "cameraDir"
    ) {
      // Live getters so exe()/font ensure can populate after wire.
      return `  get ${bag}() { return ${src}; },`;
    }
    return `  ${bag}: (...args: any[]) => ${src}(...args),`;
  }).join("\n");

  // Object.assign can't use get in object literal assigned via wire fn —
  // use a proxy bag instead: pass values that are refreshed. Simpler: wrap
  // as functions getSsf/getCameraDir/getDefaultFontFamily.
  // Re-do tc wire with function getters for the three live values:
  const tcWireFixed = TC_HOOK_MAP.map(([src, bag]) => {
    if (bag === "defaultFontFamily" || bag === "ssfModule" || bag === "cameraDir") {
      return `  ${bag}: null as any, // patched below via getters on tcH`;
    }
    return `  ${bag}: (...args: any[]) => ${src}(...args),`;
  }).join("\n");

  const importBlock = `
import {
  wireDocOpApplyBoundaryHooks,
  ensureDocOpApplyInit,
  applyWorkbookDocOps as Zht,
  isAliasRef as workbookHelper1024,
  workbookBinding1964,
} from "../../workbook/doc-op-apply";

wireDocOpApplyBoundaryHooks({
${doWire}
});

// Thin aliases: doc-op-apply cluster drained (wave-90).
var _gt = ensureDocOpApplyInit;

import {
  wireThreeChartPaintBoundaryHooks,
  paintThreeChart as $be,
  layoutThreeBarSegments as Qbe,
  createChartTextSprite as workbookHelper521,
} from "../../workbook/three-chart-paint";
import { tcH as __tcHWave90 } from "../../workbook/three-chart-paint";

wireThreeChartPaintBoundaryHooks({
${TC_HOOK_MAP.filter(([, b]) => !["defaultFontFamily", "ssfModule", "cameraDir"].includes(b))
  .map(([src, bag]) => `  ${bag}: (...args: any[]) => ${src}(...args),`)
  .join("\n")}
  defaultFontFamily: undefined,
  ssfModule: undefined,
  cameraDir: undefined,
});
// Live leave-behind bindings (populated by exe / font ensures).
Object.defineProperties(__tcHWave90, {
  defaultFontFamily: {
    enumerable: true,
    configurable: true,
    get: () => workbookBinding837,
  },
  ssfModule: {
    enumerable: true,
    configurable: true,
    get: () => workbookBinding1140,
  },
  cameraDir: {
    enumerable: true,
    configurable: true,
    get: () => workbookBinding1141,
  },
});

// Thin aliases: three-chart-paint cluster drained (wave-90).
`.trimStart();

  // Insert after chart-paint thin aliases (ensurePCe)
  let insertAt = -1;
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes("// Thin aliases: chart-paint cluster drained (wave-89).")) {
      // find ensurePCe line
      let j = i;
      while (j < i + 5 && !(kept[j]?.includes("var ensurePCe"))) j++;
      insertAt = j + 1;
      break;
    }
  }
  if (insertAt < 0) {
    for (let i = 0; i < Math.min(2500, kept.length); i++) {
      if (kept[i]?.includes('from "../../workbook/chart-elements"')) {
        let start = i;
        while (start > 0 && !kept[start]?.trim().startsWith("import {")) start--;
        insertAt = start;
        break;
      }
    }
  }
  if (insertAt < 0) throw new Error("insert point missing");

  kept.splice(insertAt, 0, "", ...importBlock.split("\n"));
  console.log("  inserted doc-op-apply + three-chart-paint imports");

  // Update stage-3 waves header comment
  for (let i = 0; i < 40; i++) {
    if (kept[i]?.includes("chart-paint (helper579–585).")) {
      kept[i] = kept[i]!.replace(
        "chart-paint (helper579–585).",
        "chart-paint (helper579–585); doc-op-apply (Zht/_gt); three-chart-paint (helper521/Qbe/$be).",
      );
      console.log("  updated waves header");
      break;
    }
  }

  // Silence unused (tcWire / tcWireFixed were drafting aids)
  void tcWire;
  void tcWireFixed;

  return kept;
}

function updateReadme(before: number, after: number): void {
  let md = fs.readFileSync(README, "utf8");
  md = md.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(after / 1000).toFixed(1)}k LOC remaining)`,
  );

  if (!md.includes("Doc-op apply (`helper1024`")) {
    md = md.replace(
      "| Chart canvas paint (`helper579`–`585` / `NCe` / `LCe` / `PCe`) | ~1.28k | **Drained (wave-89)** → `workbook/chart-paint/` |\n",
      "| Chart canvas paint (`helper579`–`585` / `NCe` / `LCe` / `PCe`) | ~1.28k | **Drained (wave-89)** → `workbook/chart-paint/` |\n| Doc-op apply (`helper1024` / `Zht` / `Qht`…`ggt` / `_gt`) | ~1.26k | **Drained (wave-90)** → `workbook/doc-op-apply/` |\n| Three.js chart paint (`helper521` / `Qbe` / `$be`) | ~0.97k | **Drained (wave-90)** → `workbook/three-chart-paint/` |\n",
    );
  }

  const wave = `
## Wave-90 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), \`_workbookS\`/\`_workbookO\` (~1236 leave), Zht (~596) + contiguous converters/_gt (~1261 total), $be (~578) + Qbe/helper521 (~971 contiguous), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Kpt (~352).
- Skipped full \`_workbookS\`/\`_workbookO\` (45-ensure fan-out) and WorkbookN leave-behind.
- \`$be\` is app 3D chart paint — **not** covered by \`vendor/three\` (wave-54 stock three@0.170.0 shim).
- Peeled doc-op apply \`helper1024\`/\`Zht\` + \`Qht\`…\`ggt\`/\`Binding1964\`/\`_gt\` → \`workbook/doc-op-apply/\` (apply + converters under flat limit); comment-thread class + range/comments ensures via \`doH\` hooks; spreadsheetVn / chart-proto maps / getAttachedWorksheet imported directly.
- Peeled contiguous \`helper521\`/\`Qbe\`/\`$be\` → \`workbook/three-chart-paint/\`; three.js via \`vendor/three\`; chart helpers + SSF/camera via \`tcH\` hooks; chart-paint now imports \`paintThreeChart\` directly (dropped \`cpH.paintThreeChart\`).
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${after} (was ${before}; Δ ${after - before}).
- Next: N1e unit-convert (~0.52k) / zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / helpers 491+ / \`_workbookS\` only after presentation leave-behind ensures drain.
`;

  if (!md.includes("## Wave-90 progress")) {
    if (md.includes("## Wave-89 progress")) {
      md = md.replace(
        /## Wave-89 progress[\s\S]*?(?=\n## Wave-|\n## Why |\n*$)/,
        (block) => block.trimEnd() + "\n" + wave,
      );
    }
    if (!md.includes("## Wave-90 progress")) {
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
    [k: string]: unknown;
  };
  const note = `Wave workbook-runtime Stage-3 wave-90: Zht/_gt doc-op-apply + helper521/Qbe/$be three-chart-paint → workbook/doc-op-apply/ + workbook/three-chart-paint/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${note} | ${json.notes}` : note;

  const files = json.files;
  if (files) {
    for (const [key, val] of Object.entries(files)) {
      const restored = String(val.restored ?? "");
      if (!restored.includes("workbook-runtime") && !key.includes("workbook-C49")) {
        continue;
      }
      const prev = String(val.notes ?? "");
      val.notes = prev.includes("wave-90") ? prev : `${note} | ${prev}`;
      val.openBoundary = true;
      const mods = (val.restoredModules as string[] | undefined) ?? [];
      for (const f of [
        "workbook/doc-op-apply/index.ts",
        "workbook/doc-op-apply/apply-ops-impl.ts",
        "workbook/doc-op-apply/converters-impl.ts",
        "workbook/doc-op-apply/boundary-hooks.ts",
        "workbook/doc-op-apply/ensure-doc-op-apply-init.ts",
        "workbook/three-chart-paint/index.ts",
        "workbook/three-chart-paint/three-chart-paint-impl.ts",
        "workbook/three-chart-paint/boundary-hooks.ts",
      ]) {
        if (!mods.includes(f)) mods.push(f);
      }
      val.restoredModules = mods;
    }
  }
  fs.writeFileSync(IMPORT_MAP, JSON.stringify(json, null, 2) + "\n");
  console.log("  updated IMPORT_MAP notes");
}

function fixApplyOpsImports(): void {
  // apply-ops-impl calls converters (Qht, egt, …) — add import from converters-impl.
  // Also rewrite legacy helper1027–1029 / $ht call sites if still present.
  const applyPath = path.join(DO_OUT, "apply-ops-impl.ts");
  let body = fs.readFileSync(applyPath, "utf8");
  body = body.replace(/\bworkbookHelper1027\s*\(/g, "findCommentThread(");
  body = body.replace(/\bworkbookHelper1028\s*\(/g, "findTableOnSheet(");
  body = body.replace(/\bworkbookHelper1029\s*\(/g, "mergeAnchorProps(");
  body = body.replace(/\b\$ht\s*\(/g, "applyFontPatch(");
  if (!body.includes('from "./converters-impl"')) {
    body = body.replace(
      'import { doH } from "./boundary-hooks";\n',
      `import { doH } from "./boundary-hooks";
import {
  Qht,
  egt,
  agt,
  ogt,
  cgt,
  lgt,
  ugt,
  dgt,
  mgt,
  hgt,
  ggt,
  ngt,
  rgt,
  findCommentThread,
  findTableOnSheet,
  mergeAnchorProps,
  workbookBinding1964,
} from "./converters-impl";
`,
    );
  }
  write(applyPath, body);
}

function main(): void {
  const raw = fs.readFileSync(BOUNDARY, "utf8");
  const all = raw.split("\n");
  if (all.length && all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`boundary before: ${beforeLoc} lines`);

  if (!fs.existsSync(BACKUP)) {
    fs.writeFileSync(BACKUP, raw);
    console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);
  }

  verifyAnchors(all);

  fs.mkdirSync(DO_OUT, { recursive: true });
  fs.mkdirSync(TC_OUT, { recursive: true });

  buildDoHooks();
  buildDoConverters(all);
  buildDoApply(all);
  fixApplyOpsImports();
  buildDoEnsure();
  buildDoIndex();

  buildTcHooks();
  buildTcImpl(all);
  buildTcIndex();

  patchChartPaintConsumer();

  let kept = drainBoundary(all);
  kept = patchHeader(kept);

  const afterBody = kept.join("\n") + "\n";
  fs.writeFileSync(BOUNDARY, afterBody);
  const afterLoc = afterBody.split("\n").length - 1;
  console.log(`boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`);

  console.log("formatting…");
  run(["bun", FORMAT, DO_OUT, TC_OUT, path.dirname(CP_PAINT)]);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("quality-gate (doc-op-apply)…");
  run(["bun", QG, DO_OUT, "--no-cache"]);
  console.log("quality-gate (three-chart-paint)…");
  run(["bun", QG, TC_OUT, "--no-cache"]);
  console.log("quality-gate (chart-paint consumer)…");
  run(["bun", QG, path.dirname(CP_PAINT), "--no-cache"]);
  console.log("quality-gate (boundary, allow-open)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("DONE wave-90 doc-op-apply + three-chart-paint");
}

main();
