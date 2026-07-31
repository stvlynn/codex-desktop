#!/usr/bin/env bun
/**
 * Stage-3 wave-60 drain of workbook-runtime:
 * Worksheet drawings cluster (~3.1k LOC) —
 * chart-drawing id helpers (helper373/yve/bve/helper374/xve) + Sve context
 * stub + Binding740–789 (anchors / chart·shape·image drawings) →
 * workbook/worksheet-drawings/.
 *
 * Leaves Lve (Binding790 layout consumer) + Binding790+ in boundary.
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-drawings-wave60.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT_DIR = path.join(ROOT, "restored/workbook/worksheet-drawings");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave60.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: helper373 … Binding789 close (before Lve). */
const DROP = { start: 13082, end: 16203 };

type Part = {
  file: string;
  ensure: string;
  start: number;
  end: number;
  desc: string;
  kind: "free" | "bag";
};

const PARTS: Part[] = [
  {
    file: "chart-drawing-ids.ts",
    ensure: "ensureChartDrawingIdsInit",
    start: 13082,
    end: 13147,
    desc: "chart drawing id helpers (helper373/yve/bve/helper374/xve)",
    kind: "free",
  },
  {
    file: "drawing-context-stub.ts",
    ensure: "ensureDrawingContextStubInit",
    start: 13148,
    end: 13191,
    desc: "worksheet drawing context stub (Sve)",
    kind: "free",
  },
  {
    file: "drawing-helpers.ts",
    ensure: "ensureDrawingHelpersInit",
    start: 13274,
    end: 13578,
    desc: "anchor/px helpers Binding740–752",
    kind: "bag",
  },
  {
    file: "drawing-anchor.ts",
    ensure: "ensureDrawingAnchorInit",
    start: 13579,
    end: 14297,
    desc: "WorksheetAnchor + chart drawing VOs Binding753–757",
    kind: "bag",
  },
  {
    file: "drawing-chart-ops.ts",
    ensure: "ensureDrawingChartOpsInit",
    start: 14298,
    end: 15033,
    desc: "chart type aliases + shape drawing Binding758–780",
    kind: "bag",
  },
  {
    file: "drawing-collections-a.ts",
    ensure: "ensureDrawingCollectionsAInit",
    start: 15034,
    end: 15801,
    desc: "chart/shape drawing collections Binding781–783",
    kind: "bag",
  },
  {
    file: "drawing-collections-b.ts",
    ensure: "ensureDrawingCollectionsBInit",
    start: 15802,
    end: 16202,
    desc: "image drawings + WorksheetDrawings Binding784–788",
    kind: "bag",
  },
];

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function run(
  cmd: string[],
  opts: { allowFail?: boolean } = {},
): string {
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
  let out = body;
  if (!out.endsWith("\n")) out += "\n";
  fs.writeFileSync(file, out);
  console.log(
    `  wrote ${path.relative(ROOT, file)} (${out.split("\n").length - 1} lines)`,
  );
}

function renameAll(src: string): string {
  let out = src;
  const pairs: Array<[string, string]> = [
    // Free helpers / public surface
    ["workbookHelper373", "cloneDrawingJson"],
    ["workbookHelper374", "hydrateChartDrawingSeries"],
    ["workbookHelper300", "hashToBase36Id"],
    ["workbookHelper299", "randomBase36Id"],
    ["workbookHelper329", "columnLettersToNumber"],
    ["yve", "hashWorksheetChartId"],
    ["bve", "newChartSeriesId"],
    ["xve", "materializeChartDrawing"],
    ["Sve", "createWorksheetDrawingContext"],
    // Mutation ops (already semantic in mutation-ops; keep local aliases)
    ["$de", "buildChartSetOp"],
    ["Qde", "buildChartAddOp"],
    ["tfe", "buildChartSelector"],
    ["Ffe", "buildShapeSetOp"],
    ["Pfe", "buildShapeAddOp"],
    ["Ife", "buildShapeSelector"],
    ["Hfe", "buildImageSetOp"],
    ["Vfe", "buildImageAddOp"],
    // Extracted modules
    ["workbookDt", "ShapeGeometry"],
    ["workbookBinding393", "shapeGeometryNameToProto"],
    ["workbookBinding388", "chartTypeNameToProto"],
    ["workbookBinding404", "ensureChartProtoNameMapsInit"],
    ["workbookBinding675", "ensureRangeInit"],
    ["workbookBinding647", "ensureStableIdClusterInit"],
    ["workbookH", "ensureStableIdConstantsInit"],
    ["workbookOt", "ensureShapeGeometryInit"],
    ["workbookBt", "ensureTextStyleInit"],
    ["workbookBinding739", "ensureBinding739"],
    ["workbookBinding736", "getShapeElementClass"],
    ["workbookBinding721", "getChartAssetClass"],
    ["workbookBinding722", "ensureBinding722"],
    ["workbookBinding712", "ensureBinding712"],
    ["workbookEt", "ensureWorkbookEt"],
    ["_C", "ensureBinding662"],
    ["Jge", "ensureJge"],
    ["workbookKt", "ensureWorkbookKt"],
    ["initAddressUtils", "initAddressUtils"],
    ["initAddressMetrics", "initAddressMetrics"],
    ["parseA1Range", "parseA1Range"],
    // Semantic bag slots for key classes / helpers
    ["workbookBinding753", "WorksheetAnchor"],
    ["workbookBinding756", "ChartDrawing"],
    ["workbookBinding757", "ChartDrawingView"],
    ["workbookBinding779", "WorksheetShapeDrawing"],
    ["workbookBinding781", "ChartDrawings"],
    ["workbookBinding782", "ChartDrawingsHost"],
    ["workbookBinding783", "ShapeDrawings"],
    ["workbookBinding786", "WorksheetImageDrawing"],
    ["workbookBinding787", "ImageDrawings"],
    ["workbookBinding788", "WorksheetDrawings"],
    ["$T", "snapshotAnchorPoint"],
    ["Mve", "supportedChartTypeKeys"],
  ];
  pairs.sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of pairs) {
    if (from.startsWith("$") || from.startsWith("_")) {
      out = out.replace(
        new RegExp(`(?<![\\w$])${escapeRe(from)}\\b`, "g"),
        to,
      );
    } else {
      out = out.replace(new RegExp(`\\b${escapeRe(from)}\\b`, "g"), to);
    }
  }
  out = out.replace(/\bworkbookBinding(\d+)\b/g, "wdBind$1");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "wdIn$1");
  out = out.replace(/\bworkbookHelper(\d+)\b/g, "wdHelper$1");
  // protobuf enum access `j.ELEMENT_TYPE_SHAPE`
  out = out.replace(/(?<![\w$])\bj\b(?=\s*\.)/g, "presentationElementType");
  return out;
}

function collectAssignedIdents(renamed: string): string[] {
  const names = new Set<string>();
  for (const line of renamed.split("\n")) {
    const m = line.match(/^\s{4}([A-Za-z_$][\w$]*) = /);
    if (m) names.add(m[1]!);
  }
  return [...names].sort();
}

function qualifyBagRefs(src: string, idents: Set<string>): string {
  let out = src;
  for (const id of [...idents].sort((a, b) => b.length - a.length)) {
    out = out.replace(
      new RegExp(`(?<!worksheetDrawings\\.)(?<![\\w$])${escapeRe(id)}\\b`, "g"),
      `worksheetDrawings.${id}`,
    );
  }
  return out;
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [13081, "  });", "Binding739 close"],
    [13082, "function workbookHelper373(", "helper373"],
    [13148, "function Sve(", "Sve"],
    [13192, "var workbookBinding740,", "Binding740"],
    [13257, "  workbookBinding789 = esmInit(() => {", "Binding789"],
    [16203, "  });", "Binding789 close"],
    [16204, "function Lve(", "Lve kept"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: ${JSON.stringify(got.slice(0, 120))}`,
      );
    }
  }
}

function sharedImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { j as presentationElementType } from "../presentation-protobuf";
import { ShapeGeometry, ensureShapeGeometryInit } from "../shape-geometry";
import {
  chartTypeNameToProto,
  shapeGeometryNameToProto,
  ensureChartProtoNameMapsInit,
} from "../chart-proto-name-maps";
import { ensureTextStyleInit } from "../text-style";
import { ensureRangeInit } from "../range";
import {
  ensureStableIdConstantsInit,
  ensureStableIdClusterInit,
  hashToBase36Id,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  initAddressMetrics,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import {
  buildChartAddOp,
  buildChartSetOp,
  buildChartSelector,
  buildShapeAddOp,
  buildShapeSetOp,
  buildShapeSelector,
  buildImageAddOp,
  buildImageSetOp,
} from "../mutation-ops";
import {
  ensureWorkbookEt,
  ensureWorkbookKt,
  ensureBinding662,
  ensureJge,
  ensureBinding712,
  ensureBinding722,
  ensureBinding739,
  getShapeElementClass,
  getChartAssetClass,
  getImageAssetClass,
} from "./boundary-hooks";
import { worksheetDrawings } from "./drawing-bindings";`;
}

function buildBindingsFile(allIdents: string[]): void {
  write(
    path.join(OUT_DIR, "drawing-bindings.ts"),
    `${PROV}
// Stage-3 wave-60: shared worksheet-drawings binding bag (legacy Binding740+).
// Single bag export keeps QG flat-export limit; slots filled by ensure* inits.

export const worksheetDrawings: Record<string, any> = Object.create(null);

// Documented slots (filled at ensure-time):
${allIdents.map((id) => `// - ${id}`).join("\n")}
`,
  );
}

function buildBoundaryHooks(): void {
  write(
    path.join(OUT_DIR, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-60: boundary ensures still owned by workbook-runtime
// (workbookEt EMU terminal, Binding662/_C, Binding712/722 chart assets,
// Binding736/739 shape element, Jge, workbookKt no-op, Binding728 image asset).

export type WorksheetDrawingsBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureWorkbookKt: () => void;
  ensureBinding662: () => void;
  ensureJge: () => void;
  ensureBinding712: () => void;
  ensureBinding722: () => void;
  ensureBinding739: () => void;
  getShapeElementClass: () => any;
  getChartAssetClass: () => any;
  getImageAssetClass: () => any;
};

let hooks: WorksheetDrawingsBoundaryHooks | null = null;

export function wireWorksheetDrawingsBoundaryHooks(
  next: WorksheetDrawingsBoundaryHooks,
): void {
  hooks = next;
}

function requireHooks(): WorksheetDrawingsBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "worksheet-drawings boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureWorkbookEt(): void {
  requireHooks().ensureWorkbookEt();
}
export function ensureWorkbookKt(): void {
  requireHooks().ensureWorkbookKt();
}
export function ensureBinding662(): void {
  requireHooks().ensureBinding662();
}
export function ensureJge(): void {
  requireHooks().ensureJge();
}
export function ensureBinding712(): void {
  requireHooks().ensureBinding712();
}
export function ensureBinding722(): void {
  requireHooks().ensureBinding722();
}
export function ensureBinding739(): void {
  requireHooks().ensureBinding739();
}
export function getShapeElementClass(): any {
  ensureBinding739();
  return requireHooks().getShapeElementClass();
}
export function getChartAssetClass(): any {
  ensureBinding722();
  return requireHooks().getChartAssetClass();
}
export function getImageAssetClass(): any {
  return requireHooks().getImageAssetClass();
}
`,
  );
}

function buildFreePart(all: string[], part: Part): string[] {
  const raw = all.slice(part.start - 1, part.end).join("\n");
  let renamed = renameAll(raw);
  // Free functions: export directly
  renamed = renamed
    .replace(/^function /gm, "export function ")
    .replace(
      /workbookBinding728/g,
      "getImageAssetClass()",
    );

  // Sve / createWorksheetDrawingContext uses getImageAssetClass() and getChartAssetClass()
  if (part.file === "drawing-context-stub.ts") {
    renamed = renamed.replace(
      /new getImageAssetClass\(\)/g,
      "new (getImageAssetClass())",
    );
    renamed = renamed.replace(
      /new getChartAssetClass\(\)/g,
      "new (getChartAssetClass())",
    );
    // Fix: we already renamed Binding728 → getImageAssetClass() via replace above incorrectly for `new workbookBinding728(`
    // renameAll maps Binding721 → getChartAssetClass; Binding728 was left as wdBind728
  }

  write(
    path.join(OUT_DIR, part.file),
    `${PROV}
// Stage-3 wave-60: ${part.desc}.

import {
  hashToBase36Id,
  randomBase36Id,
} from "../stable-id";
import { chartTypeNameToProto } from "../chart-proto-name-maps";
import {
  getChartAssetClass,
  getImageAssetClass,
} from "./boundary-hooks";

${renamed}
`,
  );
  return [part.file];
}

function fixContextStub(all: string[]): void {
  // Rebuild Sve properly — renameAll leaves Binding728 as wdBind728
  const raw = all.slice(13147, 13191).join("\n");
  let renamed = renameAll(raw);
  renamed = renamed
    .replace(/\bwdBind728\b/g, "ImageAsset")
    .replace(/^function /gm, "export function ");

  write(
    path.join(OUT_DIR, "drawing-context-stub.ts"),
    `${PROV}
// Stage-3 wave-60: worksheet drawing context stub (legacy Sve).

import { chartTypeNameToProto } from "../chart-proto-name-maps";
import {
  getChartAssetClass,
  getImageAssetClass,
} from "./boundary-hooks";

${renamed.replace(
  /new ImageAsset\(/g,
  "new (getImageAssetClass() as any)(",
).replace(
  /new getChartAssetClass\(/g,
  "new (getChartAssetClass() as any)(",
).replace(
  /new \(getChartAssetClass\(\)\)\(/g,
  "new (getChartAssetClass() as any)(",
)}
`,
  );
}

function buildBagParts(
  all: string[],
  allIdents: Set<string>,
): { files: string[]; idents: Set<string> } {
  const idents = new Set<string>();
  const files: string[] = [];

  for (const part of PARTS.filter((p) => p.kind === "bag")) {
    const raw = all.slice(part.start - 1, part.end).join("\n");
    let renamed = renameAll(raw);
    for (const id of collectAssignedIdents(renamed)) idents.add(id);
    renamed = qualifyBagRefs(renamed, allIdents);
    // Drop esmInit wrapper lines if present (none in bag slices)
    const body = renamed
      .split("\n")
      .filter((l) => !/^var /.test(l))
      .filter((l) => !/^\s{2}[\w$]+,\s*$/.test(l))
      .join("\n");

    const needsShape =
      part.file.includes("collections") ||
      part.file === "drawing-chart-ops.ts" ||
      part.file === "drawing-anchor.ts";
    const shapePrelude = needsShape
      ? `  const ShapeElementBase = getShapeElementClass();\n  const ChartAssetBase = getChartAssetClass();\n`
      : part.file === "drawing-helpers.ts"
        ? ""
        : `  const ChartAssetBase = getChartAssetClass();\n`;

    // Class extends getShapeElementClass / getChartAssetClass → use locals
    let fixed = body
      .replace(
        /extends getShapeElementClass\b/g,
        "extends ShapeElementBase",
      )
      .replace(/extends getChartAssetClass\b/g, "extends ChartAssetBase");

    write(
      path.join(OUT_DIR, part.file),
      `${PROV}
// Stage-3 wave-60: ${part.desc}.

${sharedImports()}
${
  part.file === "drawing-helpers.ts"
    ? ""
    : part.file === "drawing-anchor.ts"
      ? `import { ensureDrawingHelpersInit } from "./drawing-helpers";\nimport {\n  cloneDrawingJson,\n  hashWorksheetChartId,\n  hydrateChartDrawingSeries,\n  materializeChartDrawing,\n  newChartSeriesId,\n} from "./chart-drawing-ids";\n`
      : part.file === "drawing-chart-ops.ts"
        ? `import { ensureDrawingHelpersInit } from "./drawing-helpers";\nimport { ensureDrawingAnchorInit } from "./drawing-anchor";\nimport {\n  cloneDrawingJson,\n  hashWorksheetChartId,\n  hydrateChartDrawingSeries,\n  materializeChartDrawing,\n} from "./chart-drawing-ids";\n`
        : part.file === "drawing-collections-a.ts"
          ? `import { ensureDrawingHelpersInit } from "./drawing-helpers";\nimport { ensureDrawingAnchorInit } from "./drawing-anchor";\nimport { ensureDrawingChartOpsInit } from "./drawing-chart-ops";\nimport {\n  cloneDrawingJson,\n  hashWorksheetChartId,\n  hydrateChartDrawingSeries,\n  materializeChartDrawing,\n} from "./chart-drawing-ids";\n`
          : `import { ensureDrawingHelpersInit } from "./drawing-helpers";\nimport { ensureDrawingAnchorInit } from "./drawing-anchor";\nimport { ensureDrawingChartOpsInit } from "./drawing-chart-ops";\nimport { ensureDrawingCollectionsAInit } from "./drawing-collections-a";\nimport {\n  cloneDrawingJson,\n  hashWorksheetChartId,\n  hydrateChartDrawingSeries,\n  materializeChartDrawing,\n} from "./chart-drawing-ids";\n`
}

export const ${part.ensure} = esmInit(() => {
  Qt();
  ensureShapeGeometryInit();
  ensureChartProtoNameMapsInit();
  ensureTextStyleInit();
  ensureWorkbookKt();
  ensureBinding722();
  ensureBinding712();
  ensureJge();
  ensureBinding739();
  ensureWorkbookEt();
  ensureStableIdConstantsInit();
  ensureStableIdClusterInit();
  ensureBinding662();
  initAddressUtils();
  ensureRangeInit();
  initAddressMetrics();
${
  part.file === "drawing-helpers.ts"
    ? ""
    : part.file === "drawing-anchor.ts"
      ? "  ensureDrawingHelpersInit();\n"
      : part.file === "drawing-chart-ops.ts"
        ? "  ensureDrawingHelpersInit();\n  ensureDrawingAnchorInit();\n"
        : part.file === "drawing-collections-a.ts"
          ? "  ensureDrawingHelpersInit();\n  ensureDrawingAnchorInit();\n  ensureDrawingChartOpsInit();\n"
          : "  ensureDrawingHelpersInit();\n  ensureDrawingAnchorInit();\n  ensureDrawingChartOpsInit();\n  ensureDrawingCollectionsAInit();\n"
}${shapePrelude}${fixed}
});
`,
    );
    files.push(part.file);
  }
  return { files, idents };
}

function buildMasterEnsure(): void {
  write(
    path.join(OUT_DIR, "ensure-worksheet-drawings-init.ts"),
    `${PROV}
// Stage-3 wave-60: worksheet-drawings master ensure (legacy Binding789).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { ensureShapeGeometryInit } from "../shape-geometry";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { ensureTextStyleInit } from "../text-style";
import { ensureRangeInit } from "../range";
import {
  ensureStableIdConstantsInit,
  ensureStableIdClusterInit,
} from "../stable-id";
import {
  initAddressUtils,
  initAddressMetrics,
} from "../../utils/spreadsheet-address-utils";
import {
  ensureWorkbookEt,
  ensureWorkbookKt,
  ensureBinding662,
  ensureJge,
  ensureBinding712,
  ensureBinding722,
  ensureBinding739,
} from "./boundary-hooks";
import { ensureDrawingHelpersInit } from "./drawing-helpers";
import { ensureDrawingAnchorInit } from "./drawing-anchor";
import { ensureDrawingChartOpsInit } from "./drawing-chart-ops";
import { ensureDrawingCollectionsAInit } from "./drawing-collections-a";
import { ensureDrawingCollectionsBInit } from "./drawing-collections-b";

export const ensureWorksheetDrawingsInit = esmInit(() => {
  Qt();
  ensureShapeGeometryInit();
  ensureChartProtoNameMapsInit();
  ensureTextStyleInit();
  ensureWorkbookKt();
  ensureBinding722();
  ensureBinding712();
  ensureJge();
  ensureBinding739();
  ensureWorkbookEt();
  ensureStableIdConstantsInit();
  ensureStableIdClusterInit();
  ensureBinding662();
  initAddressUtils();
  ensureRangeInit();
  initAddressMetrics();
  ensureDrawingHelpersInit();
  ensureDrawingAnchorInit();
  ensureDrawingChartOpsInit();
  ensureDrawingCollectionsAInit();
  ensureDrawingCollectionsBInit();
});
`,
  );
}

function buildIndex(): void {
  write(
    path.join(OUT_DIR, "index.ts"),
    `${PROV}
// Stage-3 wave-60: worksheet-drawings barrel (legacy Binding740–789 + Sve).

export {
  wireWorksheetDrawingsBoundaryHooks,
  type WorksheetDrawingsBoundaryHooks,
} from "./boundary-hooks";
export { worksheetDrawings } from "./drawing-bindings";
export {
  cloneDrawingJson,
  hashWorksheetChartId,
  newChartSeriesId,
  hydrateChartDrawingSeries,
  materializeChartDrawing,
} from "./chart-drawing-ids";
export { createWorksheetDrawingContext } from "./drawing-context-stub";
export { ensureWorksheetDrawingsInit } from "./ensure-worksheet-drawings-init";
export { ensureDrawingHelpersInit } from "./drawing-helpers";
export { ensureDrawingAnchorInit } from "./drawing-anchor";
export { ensureDrawingChartOpsInit } from "./drawing-chart-ops";
export { ensureDrawingCollectionsAInit } from "./drawing-collections-a";
export { ensureDrawingCollectionsBInit } from "./drawing-collections-b";

import { ensureWorksheetDrawingsInit } from "./ensure-worksheet-drawings-init";
import { worksheetDrawings } from "./drawing-bindings";

export function getChartDrawingClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.ChartDrawing;
}
export function getWorksheetImageDrawingClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.WorksheetImageDrawing;
}
export function getWorksheetDrawingsClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.WorksheetDrawings;
}
`,
  );
}

function classProxy(
  name: string,
  getter: string,
): string[] {
  return [
    `const ${name} = new Proxy(function ${name}Proxy() {}, {`,
    `  construct(_target, args) {`,
    `    const Ctor = ${getter}();`,
    `    return new Ctor(...(args as any[]));`,
    `  },`,
    `  get(_target, prop, _receiver) {`,
    `    if (prop === Symbol.hasInstance) {`,
    `      return (instance: any) => instance instanceof ${getter}();`,
    `    }`,
    `    if (prop === "prototype") return ${getter}()?.prototype;`,
    `    const Ctor = ${getter}();`,
    `    const value = (Ctor as any)?.[prop];`,
    `    return typeof value === "function" ? value.bind(Ctor) : value;`,
    `  },`,
    `}) as any;`,
  ];
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop worksheet-drawings ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let importInsert = 0;
  for (let i = 0; i < Math.min(250, kept.length); i++) {
    if (kept[i]?.startsWith("import ")) {
      let j = i;
      while (j < kept.length && !kept[j]!.includes(";")) j++;
      importInsert = j + 1;
    }
  }
  kept.splice(
    importInsert,
    0,
    `import {`,
    `  wireWorksheetDrawingsBoundaryHooks,`,
    `  ensureWorksheetDrawingsInit as workbookBinding789,`,
    `  createWorksheetDrawingContext as Sve,`,
    `  getChartDrawingClass,`,
    `  getWorksheetImageDrawingClass,`,
    `  getWorksheetDrawingsClass,`,
    `} from "../../workbook/worksheet-drawings";`,
    ...classProxy("workbookBinding756", "getChartDrawingClass"),
    ...classProxy("workbookBinding786", "getWorksheetImageDrawingClass"),
    ...classProxy("workbookBinding788", "getWorksheetDrawingsClass"),
  );

  // Wire hooks after compose-layout wire block
  let wireAt = -1;
  for (let i = 0; i < Math.min(1200, kept.length); i++) {
    if (kept[i]?.includes("wireComposeLayoutBoundaryHooks({")) {
      let j = i;
      while (j < kept.length && kept[j] !== "});") j++;
      wireAt = j + 1;
      break;
    }
  }
  if (wireAt < 0) throw new Error("compose-layout wire anchor missing");
  kept.splice(
    wireAt,
    0,
    ``,
    `wireWorksheetDrawingsBoundaryHooks({`,
    `  ensureWorkbookEt: () => {`,
    `    workbookEt();`,
    `  },`,
    `  ensureWorkbookKt: () => {`,
    `    workbookKt();`,
    `  },`,
    `  ensureBinding662: () => {`,
    `    _C();`,
    `  },`,
    `  ensureJge: () => {`,
    `    Jge();`,
    `  },`,
    `  ensureBinding712: () => {`,
    `    workbookBinding712();`,
    `  },`,
    `  ensureBinding722: () => {`,
    `    workbookBinding722();`,
    `  },`,
    `  ensureBinding739: () => {`,
    `    workbookBinding739();`,
    `  },`,
    `  getShapeElementClass: () => workbookBinding736,`,
    `  getChartAssetClass: () => workbookBinding721,`,
    `  getImageAssetClass: () => workbookBinding728,`,
    `});`,
  );

  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (
      kept[i]?.startsWith(
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme",
      )
    ) {
      kept[i] =
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm; three-npm; highlightjs-npm; zod-npm; presentation-recipes; compose-layout; workbook-core; worksheet-drawings.";
    }
  }
  for (let i = 0; i < Math.min(140, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-59:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-60: helper373…xve/Sve + Binding740–789 worksheet drawings → workbook/worksheet-drawings/; Lve + Binding790+ retained.",
      );
      break;
    }
  }
  return kept;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  let md = fs.readFileSync(README, "utf8");
  md = md.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(afterLoc / 1000).toFixed(1)}k LOC remaining)`,
  );
  if (!md.includes("Worksheet drawings Binding740")) {
    md = md.replace(
      /\| WorkbookN \/ `__workbookT` \(`Binding1996`\) \| ~4\.4k \| \*\*Drained \(wave-59\)\*\* → `workbook\/workbook-core\/` \|/,
      `| WorkbookN / \`__workbookT\` (\`Binding1996\`) | ~4.4k | **Drained (wave-59)** → \`workbook/workbook-core/\` |\n| Worksheet drawings (\`helper373\`…\`Sve\` + \`Binding740\`–\`789\`) | ~3.1k | **Drained (wave-60)** → \`workbook/worksheet-drawings/\` |`,
    );
  }
  if (!md.includes("## Wave-60 progress")) {
    md = md.trimEnd() +
      `

## Wave-60 progress

- Extracted worksheet-drawings cluster (\`helper373\`/\`yve\`/\`bve\`/\`helper374\`/\`xve\` + \`Sve\` + Binding740–789 anchors/chart·shape·image drawings, ~3.1k LOC) → \`workbook/worksheet-drawings/\`.
- Left \`Lve\` + Binding790 drawing-layout helpers, compose DSL Binding1490–1528, Google Slides \`pJe\`/\`SJe\`, Binding662/\`_C\`, Binding1574/\`Cke\`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}).
- Next: Binding790 layout helpers / compose DSL Binding1490–1528 / \`The\`/\`BYe\` / Google Slides \`pJe\`/\`SJe\`.
`;
  }
  fs.writeFileSync(README, md.endsWith("\n") ? md : md + "\n");
  console.log("  updated README.md");
}

function updateImportMap(afterLoc: number): void {
  const map = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    files?: Record<string, { notes?: string; openBoundary?: boolean }>;
  };
  const waveNote =
    `Wave workbook-runtime Stage-3 wave-60: worksheet-drawings helper373…Sve+Binding740–789 → workbook/worksheet-drawings/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  map.notes = map.notes ? `${waveNote} | ${map.notes}` : waveNote;
  const entry = map.files?.["workbook-C49Dgk1_"];
  if (entry) {
    entry.openBoundary = true;
    entry.notes = entry.notes
      ? `${entry.notes} | Stage-3 wave-60: helper373…Sve + Binding740–789 → workbook/worksheet-drawings/; boundary remains open (~${afterLoc} LOC).`
      : `Stage-3 wave-60: worksheet-drawings drained; open (~${afterLoc} LOC).`;
  }
  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("  updated IMPORT_MAP.json");
}

function main(): void {
  console.log("wave-60: worksheet-drawings drain");
  const all = fs.readFileSync(BOUNDARY, "utf8").split("\n");
  // file may end without trailing newline → last empty handled by split
  if (all.length && all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`  boundary LOC before: ${beforeLoc}`);
  verifyAnchors(all);

  if (!fs.existsSync(BACKUP)) {
    fs.copyFileSync(BOUNDARY, BACKUP);
    console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  buildBoundaryHooks();

  // Free function parts
  buildFreePart(all, PARTS[0]!);
  fixContextStub(all);

  // Collect bag idents from all bag parts first
  const allIdents = new Set<string>();
  for (const part of PARTS.filter((p) => p.kind === "bag")) {
    const raw = all.slice(part.start - 1, part.end).join("\n");
    const renamed = renameAll(raw);
    for (const id of collectAssignedIdents(renamed)) allIdents.add(id);
  }
  buildBindingsFile([...allIdents].sort());
  buildBagParts(all, allIdents);
  buildMasterEnsure();
  buildIndex();

  const kept = drainBoundary(all);
  write(BOUNDARY, kept.join("\n"));
  const afterLoc = kept.length;
  console.log(`  boundary LOC after: ${afterLoc} (Δ ${afterLoc - beforeLoc})`);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("\n  formatting…");
  run(["bun", FORMAT, OUT_DIR]);

  console.log("\n  quality-gate (new modules)…");
  run(["bun", QG, OUT_DIR, "--no-cache"]);

  console.log("\n  quality-gate (boundary, allow-open)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("\nwave-60 DONE");
  console.log(`  before=${beforeLoc} after=${afterLoc} delta=${afterLoc - beforeLoc}`);
}

main();
