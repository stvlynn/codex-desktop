#!/usr/bin/env bun
/**
 * Wave-60 QG fixup: wire unbound deps + typed public params.
 * Boundary edits are line-anchored splices only (no mega-body StrReplace).
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "restored/workbook/worksheet-drawings");
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const QG = path.join(
  ROOT,
  ".agents/skills/deobfuscate-javascript/scripts/quality-gate.ts",
);
const FORMAT = path.join(
  ROOT,
  ".agents/skills/deobfuscate-javascript/scripts/format.ts",
);

function write(file: string, body: string) {
  if (!body.endsWith("\n")) body += "\n";
  fs.writeFileSync(file, body);
}

function run(cmd: string[]) {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const out = `${r.stdout ?? ""}${r.stderr ?? ""}`;
  if (r.status !== 0) throw new Error(`${cmd.join(" ")} failed:\n${out}`);
  return out;
}

// --- boundary-hooks ---
write(
  path.join(OUT, "boundary-hooks.ts"),
  `// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: boundary ensures still owned by workbook-runtime
// (workbookEt EMU terminal, Binding662/_C, Binding712/722 chart assets,
// Binding736/739 shape element, Binding711 axis VO, Jge, workbookKt no-op,
// Binding728 image asset).

export type WorksheetDrawingsBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureWorkbookKt: () => void;
  ensureBinding662: () => void;
  ensureJge: () => void;
  ensureBinding712: () => void;
  ensureBinding722: () => void;
  ensureBinding739: () => void;
  ensureBinding711: () => void;
  getShapeElementClass: () => any;
  getChartAssetClass: () => any;
  getImageAssetClass: () => any;
  getAxisTitleClass: () => any;
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
export function ensureBinding711(): void {
  requireHooks().ensureBinding711();
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
export function getAxisTitleClass(): any {
  ensureBinding711();
  return requireHooks().getAxisTitleClass();
}
`,
);

// --- chart-drawing-ids ---
write(
  path.join(OUT, "chart-drawing-ids.ts"),
  `// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: chart drawing id helpers (clone/hash/hydrate/materialize).

import { hashToBase36Id, randomBase36Id } from "../stable-id";

export function cloneDrawingJson(value: unknown): any {
  return JSON.parse(JSON.stringify(value));
}
export function hashWorksheetChartId(
  drawing: unknown,
  index: unknown,
): string {
  let cloned = cloneDrawingJson(drawing);
  return (
    cloned.chart && (cloned.chart.id = ""),
    hashToBase36Id(
      \`worksheet-chart:\${index}:\${JSON.stringify(cloned)}\`,
      8,
    )
  );
}
export function newChartSeriesId(): string {
  return \`series-\${randomBase36Id()}\`;
}
export function hydrateChartDrawingSeries(
  drawing: any,
  options: any,
  index: number = 0,
): {
  id: string;
  drawing: any;
  seriesById: Record<string, any>;
  seriesOrder: string[];
} {
  let cloned = cloneDrawingJson(drawing),
    chart = cloned.chart ?? {},
    id = chart.id?.trim() ? chart.id : hashWorksheetChartId(drawing, index);
  chart.id = id;
  chart.series ??= [];
  let seriesOrder: string[] = [],
    seriesById: Record<string, any> = {},
    series = [...(chart.series ?? [])],
    preferred = options?.seriesOrder ?? [];
  for (let i = 0; i < series.length; i += 1) {
    let item = series[i];
    if (!item) continue;
    let seriesId = preferred[i] ?? newChartSeriesId();
    seriesOrder.push(seriesId);
    seriesById[seriesId] = item;
  }
  return (
    (chart.series = []),
    (cloned.chart = chart),
    {
      id,
      drawing: cloned,
      seriesById,
      seriesOrder,
    }
  );
}
export function materializeChartDrawing(state: {
  drawing: any;
  seriesOrder: string[];
  seriesById: Record<string, any>;
}): any {
  let drawing = cloneDrawingJson(state.drawing);
  if (!drawing.chart) return drawing;
  let series = state.seriesOrder
    .map((item) => state.seriesById[item])
    .filter((item) => !!item);
  return ((drawing.chart.series = series), drawing);
}
`,
);

// --- drawing-context-stub ---
{
  let src = fs.readFileSync(path.join(OUT, "drawing-context-stub.ts"), "utf8");
  src = src.replace(
    /export function createWorksheetDrawingContext\(wdIn2205\)/,
    "export function createWorksheetDrawingContext(wdIn2205: any = undefined)",
  );
  // Drop unused chartTypeNameToProto if still imported incorrectly
  write(path.join(OUT, "drawing-context-stub.ts"), src);
}

const EXTRA_IMPORTS = `
import { workbookGt, applyTextStylePatch, ensureTextStyleInit } from "../text-style";
import { composeScopedId } from "../stable-id";
import { Range } from "../range";
import { Array as YArray, Map as YMap } from "../../vendor/yjs";
import {
  colIndexToLetters,
  pointsToPixels,
} from "../../utils/spreadsheet-address-utils";
import { getAxisTitleClass } from "./boundary-hooks";
`.trim();

function patchBagFile(file: string, opts: {
  needEmu?: boolean;
  needYt?: boolean;
  need711?: boolean;
  needRange?: boolean;
  needYjs?: boolean;
  needAddress?: boolean;
  needComposeId?: boolean;
}): void {
  const p = path.join(OUT, file);
  let src = fs.readFileSync(p, "utf8");
  // Ensure text-style import includes workbookGt / applyTextStylePatch
  if (!src.includes("workbookGt") && (opts.needEmu || opts.needYt)) {
    src = src.replace(
      `import { ensureTextStyleInit } from "../text-style";`,
      `import {\n  ensureTextStyleInit,\n  workbookGt,\n  applyTextStylePatch,\n} from "../text-style";`,
    );
  }
  if (opts.needComposeId && !src.includes("composeScopedId")) {
    src = src.replace(
      `hashToBase36Id,\n  randomBase36Id,\n} from "../stable-id";`,
      `hashToBase36Id,\n  randomBase36Id,\n  composeScopedId,\n} from "../stable-id";`,
    );
  }
  if (opts.needRange && !src.includes('import { Range }')) {
    src = src.replace(
      `import { ensureRangeInit } from "../range";`,
      `import { ensureRangeInit, Range } from "../range";`,
    );
  }
  if (opts.needAddress && !src.includes("colIndexToLetters")) {
    src = src.replace(
      `parseA1Range,\n} from "../../utils/spreadsheet-address-utils";`,
      `parseA1Range,\n  colIndexToLetters,\n  pointsToPixels,\n} from "../../utils/spreadsheet-address-utils";`,
    );
  }
  if (opts.needYjs && !src.includes("YArray")) {
    src = src.replace(
      `import { worksheetDrawings } from "./drawing-bindings";`,
      `import { Array as YArray, Map as YMap } from "../../vendor/yjs";\nimport { worksheetDrawings } from "./drawing-bindings";`,
    );
  }
  if (opts.need711 && !src.includes("getAxisTitleClass")) {
    src = src.replace(
      `getImageAssetClass,\n} from "./boundary-hooks";`,
      `getImageAssetClass,\n  getAxisTitleClass,\n  ensureBinding711,\n} from "./boundary-hooks";`,
    );
  }

  // Replace unbound refs
  if (opts.needEmu) {
    src = src.replace(/\bwdBind408\b/g, "(1 / workbookGt)");
    src = src.replace(/\bwdBind409\b/g, "workbookGt");
  }
  if (opts.needYt) {
    src = src.replace(/\bworkbookYt\b/g, "applyTextStylePatch");
  }
  if (opts.needComposeId) {
    src = src.replace(/\bwdHelper302\b/g, "composeScopedId");
  }
  if (opts.need711) {
    src = src.replace(/\bwdBind711\b/g, "AxisTitleClass");
    // inject local after ensure calls in esmInit
    if (!src.includes("const AxisTitleClass")) {
      src = src.replace(
        /export const ensureDrawingAnchorInit = esmInit\(\(\) => \{\n/,
        `export const ensureDrawingAnchorInit = esmInit(() => {\n  ensureBinding711();\n  const AxisTitleClass = getAxisTitleClass();\n`,
      );
    }
  }
  if (opts.needRange) {
    src = src.replace(/\bwdBind672\b/g, "Range");
  }
  if (opts.needYjs) {
    src = src.replace(/\bwdBind265\b/g, "YArray");
    src = src.replace(/\bwdBind266\b/g, "YMap");
  }

  write(p, src);
}

patchBagFile("drawing-helpers.ts", { needEmu: true });
patchBagFile("drawing-anchor.ts", {
  needYt: true,
  need711: true,
  needComposeId: true,
});
patchBagFile("drawing-chart-ops.ts", {
  needEmu: true,
  needRange: true,
  needAddress: true,
});
patchBagFile("drawing-collections-a.ts", { needYjs: true });
patchBagFile("drawing-collections-b.ts", { needEmu: true });

// Also need workbookGt in collections-b if it uses emu - check
{
  const p = path.join(OUT, "drawing-collections-b.ts");
  let src = fs.readFileSync(p, "utf8");
  if (src.includes("(1 / workbookGt)") || src.includes("workbookGt")) {
    if (!src.includes("workbookGt")) {
      src = src.replace(
        `import { ensureTextStyleInit } from "../text-style";`,
        `import {\n  ensureTextStyleInit,\n  workbookGt,\n} from "../text-style";`,
      );
      write(p, src);
    }
  }
}

// Fix drawing-helpers workbookGt import
{
  const p = path.join(OUT, "drawing-helpers.ts");
  let src = fs.readFileSync(p, "utf8");
  if (src.includes("workbookGt") && !src.includes("workbookGt,")) {
    // already patched via ensureTextStyleInit replace
  }
  if (!/workbookGt/.test(src.match(/from "\.\.\/text-style"/)?.input ?? "") && src.includes("workbookGt")) {
    // ok if import line has it
  }
  write(p, src);
}

// Fix chart-ops workbookGt import  
{
  const p = path.join(OUT, "drawing-chart-ops.ts");
  let src = fs.readFileSync(p, "utf8");
  if (src.includes("workbookGt") && !src.includes("workbookGt")) {
    /* noop */
  }
  if (src.includes("(1 / workbookGt)") && !src.includes("workbookGt,")) {
    src = src.replace(
      `import { ensureTextStyleInit } from "../text-style";`,
      `import {\n  ensureTextStyleInit,\n  workbookGt,\n} from "../text-style";`,
    );
    write(p, src);
  }
}

// --- boundary wire splice ---
{
  const lines = fs.readFileSync(BOUNDARY, "utf8").split("\n");
  if (lines[lines.length - 1] === "") lines.pop();
  let start = -1;
  let end = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "wireWorksheetDrawingsBoundaryHooks({") {
      start = i;
      for (let j = i; j < Math.min(i + 40, lines.length); j++) {
        if (lines[j] === "});") {
          end = j;
          break;
        }
      }
      break;
    }
  }
  if (start < 0 || end < 0) throw new Error("wire block not found");
  const replacement = [
    "wireWorksheetDrawingsBoundaryHooks({",
    "  ensureWorkbookEt: () => {",
    "    workbookEt();",
    "  },",
    "  ensureWorkbookKt: () => {",
    "    workbookKt();",
    "  },",
    "  ensureBinding662: () => {",
    "    _C();",
    "  },",
    "  ensureJge: () => {",
    "    Jge();",
    "  },",
    "  ensureBinding712: () => {",
    "    workbookBinding712();",
    "  },",
    "  ensureBinding722: () => {",
    "    workbookBinding722();",
    "  },",
    "  ensureBinding739: () => {",
    "    workbookBinding739();",
    "  },",
    "  ensureBinding711: () => {",
    "    workbookBinding711();",
    "  },",
    "  getShapeElementClass: () => workbookBinding736,",
    "  getChartAssetClass: () => workbookBinding721,",
    "  getImageAssetClass: () => workbookBinding728,",
    "  getAxisTitleClass: () => workbookBinding711,",
    "});",
  ];
  lines.splice(start, end - start + 1, ...replacement);
  write(BOUNDARY, lines.join("\n"));
  console.log(`  rewired boundary hooks at lines ${start + 1}-${end + 1}`);
}

console.log("  format + QG…");
run(["bun", FORMAT, OUT]);
run(["bun", QG, OUT, "--no-cache"]);
run([
  "bun",
  QG,
  "restored/boundaries/workbook-runtime",
  "--no-cache",
  "--allow-open-boundaries",
]);
console.log("wave-60 fixup DONE");
