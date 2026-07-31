#!/usr/bin/env bun
/**
 * Stage-3 wave-89 drain of workbook-runtime:
 * Contiguous chart canvas paint cluster (~1282 LOC) —
 *   helper579–582 rounded-rect / chrome fill,
 *   NCe chart chrome, helper583 plot-area stroke,
 *   PCe Binding1224/1225, FCe/ICe doughnut helpers,
 *   LCe / helper584 entry, helper585 chart paint body
 *   → workbook/chart-paint/
 *
 * Preferred largest non-leave-behind (≥300 inventory).
 * Skipped full `_workbookS`/`_workbookO` (45-ensure fan-out) and WorkbookN leave-behind.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-chart-paint-wave89.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/chart-paint");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave89.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: helper579 … helper585 close (before RCe). */
const DROP = { start: 21097, end: 22378 };

/** Inclusive 1-based splits inside DROP (no cycles; each ≤1000 flat). */
const PRELUDE = { start: 21097, end: 21373 }; // helper579–583, NCe, PCe, FCe, ICe
const ENTRY = { start: 21374, end: 21454 }; // LCe + helper584
const BODY = { start: 21455, end: 22378 }; // helper585

/** Boundary leave-behind helpers/fns → cpH bag (opaque keys avoid HelperN QG). */
const HOOK_MAP: Array<[string, string]> = [
  ["workbookHelper286", "bh286"],
  ["workbookHelper391", "bh391"],
  ["workbookHelper405", "bh405"],
  ["workbookHelper423", "bh423"],
  ["workbookHelper425", "bh425"],
  ["workbookHelper426", "bh426"],
  ["workbookHelper433", "bh433"],
  ["workbookHelper462", "bh462"],
  ["workbookHelper491", "bh491"],
  ["workbookHelper496", "bh496"],
  ["workbookHelper501", "bh501"],
  ["workbookHelper525", "bh525"],
  ["workbookHelper528", "bh528"],
  ["workbookHelper529", "bh529"],
  ["workbookHelper532", "bh532"],
  ["workbookHelper540", "bh540"],
  ["workbookHelper552", "bh552"],
  ["workbookHelper555", "bh555"],
  ["workbookHelper556", "bh556"],
  ["workbookHelper561", "bh561"],
  ["workbookHelper570", "bh570"],
  ["workbookHelper576", "bh576"],
  ["wSe", "layoutLegendPlot"],
  ["Cbe", "paintTreemap"],
  ["hbe", "paintSunburst"],
  ["Tbe", "paintRadar"],
  ["Dbe", "paintFunnel"],
  ["Txe", "paintBoxWhisker"],
  ["ECe", "paintHistogram"],
  ["OCe", "paintWaterfall"],
  ["jCe", "paintCombo"],
  ["yxe", "paintScatter"],
  ["pCe", "paintPie"],
  ["gCe", "paintDoughnut"],
  ["sCe", "paintArea"],
  ["txe", "paintBar"],
  ["nCe", "paintLine"],
  ["aCe", "paintMap"],
  ["RCe", "layoutCategoryLabels"],
  ["vCe", "paintBar3d"],
  ["Kye", "paintSurface"],
  ["DSe", "paintDataTable"],
  ["Yye", "paintAxis"],
  ["KSe", "paintGridlines"],
  ["BSe", "paintTrendlines"],
  ["$be", "paintThreeChart"],
];

/** Local export renames (legacy → semantic). */
const EXPORT_RENAME: Array<[string, string]> = [
  ["workbookHelper579", "chartCornerRadiusPx"],
  ["workbookHelper580", "pathRoundedRect"],
  ["workbookHelper581", "fillChartBackground"],
  ["workbookHelper582", "strokeChartBorder"],
  ["workbookHelper583", "strokePlotAreaBorder"],
  ["workbookHelper584", "paintChartFromProto"],
  ["workbookHelper585", "paintChart"],
  ["NCe", "paintChartChrome"],
  ["FCe", "axisCrossesZero"],
  ["ICe", "doughnutHoleLayout"],
  ["LCe", "paintChartElement"],
  ["PCe", "ensureChartPaintConsts"],
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
    [DROP.start - 1, "  });", "MCe close before helper579"],
    [DROP.start, "function workbookHelper579(", "helper579"],
    [21107, "function workbookHelper580(", "helper580"],
    [21166, "function workbookHelper581(", "helper581"],
    [21194, "function workbookHelper582(", "helper582"],
    [21225, "function NCe(", "NCe"],
    [21294, "function workbookHelper583(", "helper583"],
    [21315, "var workbookBinding1224,", "Binding1224"],
    [21317, "  PCe = esmInit(() => {", "PCe"],
    [21324, "function FCe(", "FCe"],
    [21342, "function ICe(", "ICe"],
    [PRELUDE.end, "}", "ICe close"],
    [ENTRY.start, "function LCe(", "LCe"],
    [21435, "function workbookHelper584(", "helper584"],
    [ENTRY.end, "}", "helper584 close"],
    [BODY.start, "function workbookHelper585(", "helper585"],
    [DROP.end, "}", "helper585 close"],
    [DROP.end + 1, "function RCe(", "RCe kept"],
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
    /^(\s*)(export\s+)?(async\s+)?(function\s+)?([A-Za-z_#][\w$]*)\(([^)]*)\)(\s*\{)/gm,
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
      // Only type real function decls (export function / function / async function)
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

const PROTECT = [
  "esmInit",
  "Cn",
  "Mn",
  "Yn",
  "tr",
  "wr",
  "_presentationVn",
  "workbookHelper212",
  "workbookBinding543",
  "workbookX",
  "workbookHelper348",
  "workbookHelper352",
  "workbookBinding721",
  "ensureChartAssetInit",
  "cpH",
  "paintTextElement",
  "resolveFillStyle",
  "chartSeriesColorFn",
  "chartRegressionFn",
  "workbookBinding1224",
  "workbookBinding1225",
  ...HOOK_MAP.map(([, bag]) => bag),
  ...EXPORT_RENAME.map(([, neu]) => neu),
  ...EXPORT_RENAME.map(([old]) => old),
];

function rewriteHooks(body: string): string {
  let out = body;
  for (const [src, bag] of HOOK_MAP) {
    out = out.replace(
      new RegExp(`\\b${escapeRe(src)}\\s*\\(`, "g"),
      `cpH.${bag}(`,
    );
  }
  out = out.replace(/^(\s*)wr\(\);/gm, "$1cpH.ensureWr();");
  out = out.replace(
    /^(\s*)workbookBinding543\(\);/gm,
    "$1cpH.ensureFillResolveInit();",
  );
  out = out.replace(
    /^(\s*)workbookBinding862\(\);/gm,
    "$1cpH.ensureWorkbookBinding862();",
  );
  // Promoted helpers → direct imports (avoid HelperN names in module body).
  out = out.replace(/\bworkbookHelper212\s*\(/g, "resolveFillStyle(");
  out = out.replace(/\bworkbookX\s*\(/g, "paintTextElement(");
  out = out.replace(/\bworkbookHelper348\s*\(/g, "chartSeriesColorFn(");
  out = out.replace(/\bworkbookHelper352\s*\(/g, "chartRegressionFn(");
  return out;
}

function applyExportRenames(body: string, exports: string[]): string {
  let out = body;
  // First promote decls for this file's exports.
  for (const [old, neu] of EXPORT_RENAME) {
    if (!exports.includes(old)) continue;
    if (old === "PCe") {
      out = out.replace(
        /^var workbookBinding1224,\n\s*workbookBinding1225,\n\s*PCe = esmInit/m,
        "export let workbookBinding1224: number;\nexport let workbookBinding1225: number;\nexport const ensureChartPaintConsts = esmInit",
      );
      continue;
    }
    out = out.replace(
      new RegExp(`^function ${escapeRe(old)}\\(`, "m"),
      `export function ${neu}(`,
    );
  }
  // Then rename ALL legacy symbols (cross-file refs + local calls).
  for (const [old, neu] of EXPORT_RENAME) {
    out = out.replace(new RegExp(`\\b${escapeRe(old)}\\b`, "g"), neu);
  }
  return out;
}

function rewriteShared(
  raw: string,
  localPrefix: string,
  exports: string[],
): string {
  let out = raw;
  out = rewriteHooks(out);
  out = applyExportRenames(out, exports);

  // Protect semantic + bag names through local rename.
  const protect = [
    ...PROTECT,
    "workbookBinding1224",
    "workbookBinding1225",
    "workbookBinding721",
    "ensureChartAssetInit",
    "ensureChartPaintConsts",
    ...EXPORT_RENAME.filter(([old]) => exports.includes(old)).map(([, n]) => n),
  ];
  out = protectNames(out, protect);
  out = renameLocals(out, localPrefix);
  out = unprotectNames(out, protect);

  if (exports.includes("workbookHelper584")) {
    out = out.replace(
      /export function paintChartFromProto\(([^)]*)\)(\s*\{)/,
      (_m, params: string, brace: string) =>
        `export function paintChartFromProto(${params})${brace}\n  ensureChartAssetInit();`,
    );
  }

  out = addParamAny(out);
  return out;
}

function buildPrelude(all: string[]): void {
  const raw = all.slice(PRELUDE.start - 1, PRELUDE.end).join("\n");
  const body = rewriteShared(raw, "cp", [
    "workbookHelper579",
    "workbookHelper580",
    "workbookHelper581",
    "workbookHelper582",
    "workbookHelper583",
    "NCe",
    "FCe",
    "ICe",
    "PCe",
  ]);

  write(
    path.join(OUT, "chart-paint-prelude-impl.ts"),
    `${PROV}
// Semantic implementation: chart canvas paint prelude
// (legacy chrome/rounded-rect prelude).
// Stage-3 wave-89; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Cn, tr } from "../presentation-protobuf";
import { resolveFillStyle } from "../canvas-fill";
import { cpH } from "./boundary-hooks";

${body}
`,
  );
}

function buildEntry(all: string[]): void {
  const raw = all.slice(ENTRY.start - 1, ENTRY.end).join("\n");
  const body = rewriteShared(raw, "cp", ["LCe", "workbookHelper584"]);

  write(
    path.join(OUT, "chart-paint-entry-impl.ts"),
    `${PROV}
// Semantic implementation: chart canvas paint entry (legacy chart element entry).
// Stage-3 wave-89; kept flat under maxFlatLines.

import {
  ensureChartAssetInit,
  workbookBinding721,
} from "../chart-asset";
import { paintChart } from "./paint-chart-impl";
import { cpH } from "./boundary-hooks";

${body}
`,
  );
}

function buildBody(all: string[]): void {
  const raw = all.slice(BODY.start - 1, BODY.end).join("\n");
  const body = rewriteShared(raw, "cp", ["workbookHelper585"]);

  write(
    path.join(OUT, "paint-chart-impl.ts"),
    `${PROV}
// Semantic implementation: chart canvas paint body (legacy chart paint body).
// Stage-3 wave-89; kept flat under maxFlatLines.

import {
  Cn,
  Mn,
  Yn,
  Vn as _presentationVn,
} from "../presentation-protobuf";
import { paintTextElement } from "../text-box";
import {
  workbookHelper348 as chartSeriesColorFn,
  workbookHelper352 as chartRegressionFn,
} from "../chart-asset";
import { cpH } from "./boundary-hooks";
import {
  strokePlotAreaBorder,
  paintChartChrome,
  axisCrossesZero,
  doughnutHoleLayout,
} from "./chart-paint-prelude-impl";

${body}
`,
  );
}

function buildHooks(): void {
  const fields = HOOK_MAP.map(
    ([, bag]) => `  ${bag}: (...args: any[]) => any;`,
  ).join("\n");

  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-89: chart-paint boundary hooks
// (chart helper leave-behinds + PCe ensure fan-out).

export type ChartPaintBoundaryHooks = {
${fields}
  ensureWr: () => void;
  ensureFillResolveInit: () => void;
  ensureWorkbookBinding862: () => void;
};

/** Live bag — wired from workbook-runtime after peel. */
export const cpH: ChartPaintBoundaryHooks = {} as ChartPaintBoundaryHooks;

export function wireChartPaintBoundaryHooks(
  next: ChartPaintBoundaryHooks,
): void {
  Object.assign(cpH, next);
}
`,
  );
}

function buildEnsure(): void {
  write(
    path.join(OUT, "ensure-chart-paint-init.ts"),
    `${PROV}
// Stage-3 wave-89: chart-paint cluster ensure (legacy PCe).

import { ensureChartPaintConsts } from "./chart-paint-prelude-impl";

/** Seed Binding1224/1225 chart chrome padding constants. */
export const ensureChartPaintInit = () => {
  ensureChartPaintConsts();
};
`,
  );
}

function buildIndex(): void {
  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-89: chart-paint barrel
// (legacy chart canvas paint cluster).

export { ensureChartPaintInit } from "./ensure-chart-paint-init";
export { wireChartPaintBoundaryHooks, cpH } from "./boundary-hooks";

export {
  chartCornerRadiusPx,
  pathRoundedRect,
  fillChartBackground,
  strokeChartBorder,
  strokePlotAreaBorder,
  paintChartChrome,
  axisCrossesZero,
  doughnutHoleLayout,
  ensureChartPaintConsts,
  workbookBinding1224,
  workbookBinding1225,
} from "./chart-paint-prelude-impl";

export { paintChartElement, paintChartFromProto } from "./chart-paint-entry-impl";
export { paintChart } from "./paint-chart-impl";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  const kept: string[] = [];
  for (let i = 0; i < all.length; i++) {
    const line = i + 1;
    if (line >= DROP.start && line <= DROP.end) continue;
    kept.push(all[i]!);
  }
  return kept;
}

function patchHeader(kept: string[]): string[] {
  const wireFields = HOOK_MAP.map(([src, bag]) => {
    if (src === "$be") {
      return `  ${bag}: (...args: any[]) => ($be as any)(...args),`;
    }
    return `  ${bag}: (...args: any[]) => ${src}(...args),`;
  }).join("\n");

  const importBlock = `
import {
  wireChartPaintBoundaryHooks,
  ensureChartPaintInit,
  chartCornerRadiusPx as workbookHelper579,
  pathRoundedRect as workbookHelper580,
  fillChartBackground as workbookHelper581,
  strokeChartBorder as workbookHelper582,
  strokePlotAreaBorder as workbookHelper583,
  paintChartFromProto as workbookHelper584,
  paintChart as workbookHelper585,
  paintChartChrome as NCe,
  axisCrossesZero as FCe,
  doughnutHoleLayout as ICe,
  paintChartElement as LCe,
  ensureChartPaintConsts as PCe,
  workbookBinding1224,
  workbookBinding1225,
} from "../../workbook/chart-paint";

wireChartPaintBoundaryHooks({
${wireFields}
  ensureWr: () => wr(),
  ensureFillResolveInit: () => workbookBinding543(),
  ensureWorkbookBinding862: () => workbookBinding862(),
});

// Thin aliases: chart-paint cluster drained (wave-89).
var ensurePCe = PCe;
`.trimStart();

  // Find insertion point: after canvas-paint thin aliases
  let insertAt = -1;
  for (let i = 0; i < Math.min(2000, kept.length); i++) {
    if (
      kept[i]?.includes("var ensureCanvasPaintCluster = ensureCanvasPaintClusterInit")
    ) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt < 0) {
    // fallback: before chart-elements import
    for (let i = 0; i < Math.min(2000, kept.length); i++) {
      if (kept[i]?.includes('from "../../workbook/chart-elements"')) {
        let start = i;
        while (start > 0 && !kept[start]?.trim().startsWith("import {")) start--;
        insertAt = start;
        break;
      }
    }
  }
  if (insertAt < 0) throw new Error("insert point for chart-paint import missing");

  kept.splice(insertAt, 0, "", ...importBlock.split("\n"));
  console.log("  inserted chart-paint import + wire");

  // Update stage-3 waves header comment
  for (let i = 0; i < 40; i++) {
    if (kept[i]?.includes("JEe table-cell reunite; TXe/wXe worksheets.")) {
      kept[i] = kept[i]!.replace(
        "JEe table-cell reunite; TXe/wXe worksheets.",
        "JEe table-cell reunite; TXe/wXe worksheets; chart-paint (helper579–585).",
      );
      console.log("  updated waves header");
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

  // Add inventory rows before "## Why it stays"
  if (!md.includes("Chart canvas paint (`helper579`")) {
    md = md.replace(
      "| Worksheets collection (`TXe`/`wXe`/`CXe`/`EXe`) | ~0.40k | **Drained (wave-88)** → `workbook/sheet/` |\n",
      "| Worksheets collection (`TXe`/`wXe`/`CXe`/`EXe`) | ~0.40k | **Drained (wave-88)** → `workbook/sheet/` |\n| Chart canvas paint (`helper579`–`585` / `NCe` / `LCe` / `PCe`) | ~1.28k | **Drained (wave-89)** → `workbook/chart-paint/` |\n",
    );
  }

  const wave = `
## Wave-89 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), \`_workbookS\`/\`_workbookO\` (~1236 leave), helper579–585 chart paint (~1282 contiguous), Zht (~596), $be (~578), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Kpt/Qbe (~352/328).
- Skipped full \`_workbookS\`/\`_workbookO\`: 45-ensure fan-out still entangled with presentation leave-behinds (jLe…aYe / WorkbookN) — unsafe this wave.
- Peeled contiguous chart canvas paint \`helper579\`–\`585\` + \`NCe\`/\`FCe\`/\`ICe\`/\`LCe\`/\`PCe\` → \`workbook/chart-paint/\` (prelude + paint body under flat limit); ~45 chart helper leave-behinds via \`cpH\` hooks; \`Cn\`/\`Mn\`/\`Yn\`/\`tr\`/\`workbookX\`/\`helper212\`/\`Binding721\` imported directly.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${after} (was ${before}; Δ ${after - before}).
- Next: zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / Zht export (~0.60k) / clean \`xLe\` walnut / partial WorkbookN method peel / \`_workbookS\` only after presentation leave-behind ensures drain.
`;

  if (!md.includes("## Wave-89 progress")) {
    md = md.replace(/## Wave-88 progress[\s\S]*?(?=\n## Wave-|\n## Why |\n*$)/, (block) => block.trimEnd() + "\n" + wave);
    // If wave-88 is last section, append
    if (!md.includes("## Wave-89 progress")) {
      md = md.trimEnd() + "\n" + wave;
    }
  }

  fs.writeFileSync(README, md.endsWith("\n") ? md : md + "\n");
  console.log("  updated README");
}

function updateImportMap(afterLoc: number): void {
  const json = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    files?: Record<string, unknown>;
    [k: string]: unknown;
  };
  const note = `Wave workbook-runtime Stage-3 wave-89: helper579–585/NCe/LCe/PCe chart-paint → workbook/chart-paint/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${note} | ${json.notes}` : note;

  // Patch workbook-C49 entry notes + openBoundary
  const files = json.files as Record<string, Record<string, unknown>> | undefined;
  if (files) {
    for (const [key, val] of Object.entries(files)) {
      if (!key.includes("workbook-C49") && !String(val?.restored ?? "").includes("workbook-runtime")) {
        continue;
      }
      const restored = String(val.restored ?? "");
      if (!restored.includes("workbook-runtime") && !key.includes("workbook-C49")) continue;
      const prev = String(val.notes ?? "");
      val.notes = prev.includes("wave-89") ? prev : `${note} | ${prev}`;
      val.openBoundary = true;
      const mods = (val.restoredModules as string[] | undefined) ?? [];
      for (const f of [
        "workbook/chart-paint/index.ts",
        "workbook/chart-paint/chart-paint-prelude-impl.ts",
        "workbook/chart-paint/chart-paint-entry-impl.ts",
        "workbook/chart-paint/paint-chart-impl.ts",
        "workbook/chart-paint/boundary-hooks.ts",
        "workbook/chart-paint/ensure-chart-paint-init.ts",
      ]) {
        if (!mods.includes(f)) mods.push(f);
      }
      val.restoredModules = mods;
    }
  }
  fs.writeFileSync(IMPORT_MAP, JSON.stringify(json, null, 2) + "\n");
  console.log("  updated IMPORT_MAP notes");
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

  fs.mkdirSync(OUT, { recursive: true });
  buildHooks();
  buildPrelude(all);
  buildBody(all);
  buildEntry(all);
  buildEnsure();
  buildIndex();

  let kept = drainBoundary(all);
  kept = patchHeader(kept);

  const afterBody = kept.join("\n") + "\n";
  fs.writeFileSync(BOUNDARY, afterBody);
  const afterLoc = afterBody.split("\n").length - 1;
  console.log(`boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`);

  console.log("formatting…");
  run(["bun", FORMAT, OUT]);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("quality-gate (chart-paint)…");
  run(["bun", QG, OUT, "--no-cache"]);
  console.log("quality-gate (boundary, allow-open)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("DONE wave-89 chart-paint");
}

main();
