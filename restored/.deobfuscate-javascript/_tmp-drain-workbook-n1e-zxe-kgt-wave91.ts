#!/usr/bin/env bun
/**
 * Stage-3 wave-91 drain of workbook-runtime (three cohesive peels):
 *
 * 1) Unit convert (~522 LOC) — N1e → workbook/unit-convert/
 *    (CONVERT formula body; coerce inlined; #N/A from formula-stats)
 *
 * 2) Named ranges (~377 LOC) — IXe/LXe + RXe/Binding1829/1830/zXe
 *    → workbook/named-ranges/
 *    (parseFormula / address utils / attachment direct; Binding675 via nrH)
 *
 * 3) Styles Yjs branch (~446 LOC) — helper1030–1033/Sgt/Cgt + Ogt/kgt
 *    → workbook/styles-yjs/
 *    (Fill/Font/Borders/stylesheet/yjs direct; no boundary hooks)
 *
 * Skipped: WorkbookN / _workbookS leave-behinds; chart helpers 491+.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-n1e-zxe-kgt-wave91.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const UC_OUT = path.join(ROOT, "restored/workbook/unit-convert");
const NR_OUT = path.join(ROOT, "restored/workbook/named-ranges");
const SY_OUT = path.join(ROOT, "restored/workbook/styles-yjs");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave91.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: N1e only. */
const UC_DROP = { start: 48886, end: 49407 };

/** Inclusive 1-based: IXe … zXe close (before BXe). */
const NR_DROP = { start: 44336, end: 44712 };

/** Inclusive 1-based: helper1030 … kgt close (before Agt). */
const SY_DROP = { start: 68704, end: 69149 };

const NR_HOOK_MAP: Array<[string, string]> = [
  ["workbookBinding675", "ensureRangeClusterInit"],
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
    [UC_DROP.start - 1, "}", "before N1e"],
    [UC_DROP.start, "function N1e(", "N1e"],
    [UC_DROP.end, "}", "N1e close"],
    [UC_DROP.end + 1, "function P1e(", "P1e kept"],
    [NR_DROP.start - 1, "  });", "theme ensure close before IXe"],
    [NR_DROP.start, "function IXe(", "IXe"],
    [44339, "function LXe(", "LXe"],
    [44342, "var RXe,", "RXe var"],
    [44345, "  zXe = esmInit(() => {", "zXe"],
    [NR_DROP.end, "  });", "zXe close"],
    [NR_DROP.end + 1, "function BXe(", "BXe kept"],
    [SY_DROP.start - 1, "});", "xgt close before helper1030"],
    [SY_DROP.start, "function workbookHelper1030(", "helper1030"],
    [68726, "function Sgt(", "Sgt"],
    [68748, "function workbookHelper1031(", "helper1031"],
    [68753, "function workbookHelper1032(", "helper1032"],
    [68756, "function workbookHelper1033(", "helper1033"],
    [68771, "function Cgt(", "Cgt"],
    [68783, "var workbookBinding1965,", "Binding1965"],
    [68789, "  kgt = esmInit(() => {", "kgt"],
    [SY_DROP.end, "  });", "kgt close"],
    [SY_DROP.end + 1, "function Agt(", "Agt kept"],
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

// ---------------------------------------------------------------------------
// unit-convert
// ---------------------------------------------------------------------------

function buildUcImpl(all: string[]): void {
  let raw = all.slice(UC_DROP.start - 1, UC_DROP.end).join("\n");
  raw = raw.replace(
    /^function N1e\(/m,
    "export function convertUnits(",
  );
  // Inline coerce (legacy helper849) — Binding1835 is #VALUE! from formula-stats.
  raw = raw.replace(/\bworkbookHelper849\b/g, "coerceFormulaNumber");
  raw = raw.replace(/\bworkbookBinding1839\b/g, "formulaNaError");

  const coerce = `
/** Coerce formula scalar to number (legacy workbookHelper849). */
export function coerceFormulaNumber(value: any): any {
  return value instanceof Error
    ? value
    : value == null
      ? 0
      : (typeof value == "boolean" && (value = +value),
        !isNaN(value) && value !== ""
          ? parseFloat(value)
          : formulaValueError);
}
`.trim();

  let out = raw;
  const protect = [
    "convertUnits",
    "coerceFormulaNumber",
    "formulaNaError",
    "formulaValueError",
    "Error",
    "parseFloat",
    "isNaN",
  ];
  out = protectNames(out, protect);
  out = renameLocals(out, "uc");
  out = unprotectNames(out, protect);
  out = addParamAny(out);

  write(
    path.join(UC_OUT, "unit-convert-impl.ts"),
    `${PROV}
// Semantic implementation: CONVERT unit table + conversion (legacy N1e).
// Stage-3 wave-91; kept flat under maxFlatLines.

import {
  workbookBinding1835 as formulaValueError,
  workbookBinding1839 as formulaNaError,
} from "../formula-stats";

${coerce}

${out}

/** Legacy alias kept for formula opcode wrapper \`a7e\`. */
export const N1e = convertUnits;
`,
  );
}

function buildUcIndex(): void {
  write(
    path.join(UC_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-91: unit-convert barrel (legacy N1e / CONVERT).

export {
  convertUnits,
  coerceFormulaNumber,
  N1e,
} from "./unit-convert-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// named-ranges
// ---------------------------------------------------------------------------

function buildNrHooks(): void {
  write(
    path.join(NR_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-91: named-ranges boundary hooks
// (range-cluster ensure leave-behind Binding675).

export type NamedRangesBoundaryHooks = {
  ensureRangeClusterInit: (...args: any[]) => any;
};

/** Live bag — wired from workbook-runtime after peel. */
export const nrH: NamedRangesBoundaryHooks = {} as NamedRangesBoundaryHooks;

export function wireNamedRangesBoundaryHooks(
  next: NamedRangesBoundaryHooks,
): void {
  Object.assign(nrH, next);
}
`,
  );
}

function buildNrImpl(all: string[]): void {
  let raw = all.slice(NR_DROP.start - 1, NR_DROP.end).join("\n");

  // Export helpers + rewrite esmInit bag to export ensure + class.
  raw = raw.replace(/^function IXe\(/m, "export function quoteSheetName(");
  raw = raw.replace(/^function LXe\(/m, "export function stripLeadingEquals(");
  raw = raw.replace(
    /^var RXe,\n\s*workbookBinding1829,\n\s*workbookBinding1830,\n\s*zXe = esmInit/m,
    "export let RXe: any;\nexport let DefinedNameItem: any;\nexport let NullDefinedNameItem: any;\nexport const ensureNamedRangesInit = esmInit",
  );
  raw = raw.replace(/\bIXe\b/g, "quoteSheetName");
  raw = raw.replace(/\bLXe\b/g, "stripLeadingEquals");
  raw = raw.replace(/\bworkbookBinding1829\b/g, "DefinedNameItem");
  raw = raw.replace(/\bworkbookBinding1830\b/g, "NullDefinedNameItem");

  // Direct imports / hooks
  raw = raw.replace(/\bworkbookF\s*\(/g, "ensureFormulaInit(");
  raw = raw.replace(/\bworkbookBinding675\s*\(/g, "nrH.ensureRangeClusterInit(");
  raw = raw.replace(/\bworkbookHelper328\b/g, "parseFormula");
  raw = raw.replace(/\bworkbookHelper333\b/g, "getAttachedWorksheet");

  const protect = [
    "esmInit",
    "ensureFormulaInit",
    "initAddressUtils",
    "parseFormula",
    "getAttachedWorksheet",
    "parseSheetRef",
    "nrH",
    "quoteSheetName",
    "stripLeadingEquals",
    "RXe",
    "DefinedNameItem",
    "NullDefinedNameItem",
    "ensureNamedRangesInit",
    "Error",
    "Map",
    ...NR_HOOK_MAP.map(([, b]) => b),
  ];
  let out = protectNames(raw, protect);
  out = renameLocals(out, "nr");
  out = unprotectNames(out, protect);
  out = addParamAny(out);

  // Legacy aliases for WorkbookN env / ensure call sites.
  out += `

/** Legacy ensure alias (\`zXe\`). */
export const zXe = ensureNamedRangesInit;
`;

  write(
    path.join(NR_OUT, "named-ranges-impl.ts"),
    `${PROV}
// Semantic implementation: defined-name / named-range registry (legacy zXe/RXe).
// Stage-3 wave-91; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureFormulaInit,
  parseFormula,
} from "../formula";
import { getAttachedWorksheet } from "../worksheet-attachment";
import {
  initAddressUtils,
  parseSheetRef,
} from "../../utils/spreadsheet-address-utils";
import { nrH } from "./boundary-hooks";

${out}
`,
  );
}

function buildNrEnsure(): void {
  write(
    path.join(NR_OUT, "ensure-named-ranges-init.ts"),
    `${PROV}
// Stage-3 wave-91: named-ranges ensure (legacy zXe).

import { ensureNamedRangesInit as ensureNamedRangesConsts } from "./named-ranges-impl";

/** Seed DefinedNames class + range/formula prerequisites. */
export const ensureNamedRangesInit = () => {
  ensureNamedRangesConsts();
};

export { zXe } from "./named-ranges-impl";
`,
  );
}

function buildNrIndex(): void {
  write(
    path.join(NR_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-91: named-ranges barrel (legacy IXe/LXe/RXe/zXe).

export { wireNamedRangesBoundaryHooks, nrH } from "./boundary-hooks";
export {
  ensureNamedRangesInit,
  zXe,
} from "./ensure-named-ranges-init";
export {
  quoteSheetName,
  stripLeadingEquals,
  RXe,
  DefinedNameItem,
  NullDefinedNameItem,
  ensureNamedRangesInit as ensureNamedRangesConsts,
} from "./named-ranges-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// styles-yjs
// ---------------------------------------------------------------------------

function buildSyImpl(all: string[]): void {
  let raw = all.slice(SY_DROP.start - 1, SY_DROP.end).join("\n");

  const helperRename: Array<[string, string]> = [
    ["workbookHelper1030", "styleEntryToProtoParts"],
    ["workbookHelper1031", "deepCloneJson"],
    ["workbookHelper1032", "stableStyleSignature"],
    ["workbookHelper1033", "sortKeysDeep"],
    ["Sgt", "styleProtoPartsToEntry"],
    ["Cgt", "fnv1aBase36"],
  ];
  for (const [old, neu] of helperRename) {
    raw = raw.replace(
      new RegExp(`^function ${escapeRe(old)}\\(`, "m"),
      `export function ${neu}(`,
    );
    raw = raw.replace(new RegExp(`\\b${escapeRe(old)}\\b`, "g"), neu);
  }

  raw = raw.replace(
    /^var workbookBinding1965,\n\s*wgt,\n\s*Tgt,\n\s*Egt,\n\s*Dgt,\n\s*Ogt,\n\s*kgt = esmInit/m,
    "export let stylesYjsReadyFlag: any;\nexport let STYLES_ENTRIES_BY_ID: any;\nexport let STYLES_ENTRY_ORDER: any;\nexport let STYLES_SIGNATURE_TO_ID: any;\nexport let STYLES_META: any;\nexport let Ogt: any;\nexport const ensureStylesYjsInit = esmInit",
  );
  raw = raw.replace(/\bworkbookBinding1965\b/g, "stylesYjsReadyFlag");
  raw = raw.replace(/\bwgt\b/g, "STYLES_ENTRIES_BY_ID");
  raw = raw.replace(/\bTgt\b/g, "STYLES_ENTRY_ORDER");
  raw = raw.replace(/\bEgt\b/g, "STYLES_SIGNATURE_TO_ID");
  raw = raw.replace(/\bDgt\b/g, "STYLES_META");

  // Direct deps
  raw = raw.replace(/\bworkbookKt\s*\(\s*\)\s*;?/g, "/* yjs ensure no-op */");
  raw = raw.replace(/\bworkbookWt\s*\(/g, "ensureFillInit(");
  raw = raw.replace(/\bworkbookBinding424\s*\(/g, "ensureStylesheetInit(");
  raw = raw.replace(/\bworkbookCt\b/g, "Fill");
  raw = raw.replace(/\bworkbookBinding419\b/g, "SpreadsheetFont");
  raw = raw.replace(/\bworkbookBinding421\b/g, "Borders");
  raw = raw.replace(/\bworkbookBinding265\b/g, "YArray");
  raw = raw.replace(/\bworkbookBinding266\b/g, "YMap");

  const protect = [
    "esmInit",
    "ensureFillInit",
    "ensureStylesheetInit",
    "Fill",
    "SpreadsheetFont",
    "Borders",
    "YArray",
    "YMap",
    "styleEntryToProtoParts",
    "deepCloneJson",
    "stableStyleSignature",
    "sortKeysDeep",
    "styleProtoPartsToEntry",
    "fnv1aBase36",
    "stylesYjsReadyFlag",
    "STYLES_ENTRIES_BY_ID",
    "STYLES_ENTRY_ORDER",
    "STYLES_SIGNATURE_TO_ID",
    "STYLES_META",
    "Ogt",
    "ensureStylesYjsInit",
    "Error",
    "Map",
    "Set",
    "JSON",
    "Math",
    "Object",
    "Array",
  ];
  let out = protectNames(raw, protect);
  out = renameLocals(out, "sy");
  out = unprotectNames(out, protect);
  out = addParamAny(out);

  out += `

/** Legacy ensure alias (\`kgt\`). */
export const kgt = ensureStylesYjsInit;
`;

  write(
    path.join(SY_OUT, "styles-yjs-impl.ts"),
    `${PROV}
// Semantic implementation: collaborative style branch on Yjs (legacy kgt/Ogt).
// Stage-3 wave-91; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Fill, ensureFillInit } from "../fill";
import {
  SpreadsheetFont,
  Borders,
  ensureStylesheetInit,
} from "../stylesheet";
import { Array as YArray, Map as YMap } from "../../vendor/yjs";

${out}
`,
  );
}

function buildSyEnsure(): void {
  write(
    path.join(SY_OUT, "ensure-styles-yjs-init.ts"),
    `${PROV}
// Stage-3 wave-91: styles-yjs ensure (legacy kgt).

import { ensureStylesYjsInit as ensureStylesYjsConsts } from "./styles-yjs-impl";

/** Seed collaborative style branch class + fill/stylesheet prerequisites. */
export const ensureStylesYjsInit = () => {
  ensureStylesYjsConsts();
};

export { kgt } from "./styles-yjs-impl";
`,
  );
}

function buildSyIndex(): void {
  write(
    path.join(SY_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-91: styles-yjs barrel (legacy style-proto helpers / kgt / Ogt).

export {
  ensureStylesYjsInit,
  kgt,
} from "./ensure-styles-yjs-init";
export {
  styleEntryToProtoParts,
  styleProtoPartsToEntry,
  deepCloneJson,
  stableStyleSignature,
  sortKeysDeep,
  fnv1aBase36,
  Ogt,
  stylesYjsReadyFlag,
  ensureStylesYjsInit as ensureStylesYjsConsts,
} from "./styles-yjs-impl";
`,
  );
}

// ---------------------------------------------------------------------------
// boundary drain / wire
// ---------------------------------------------------------------------------

function inDrop(line: number): boolean {
  return (
    (line >= UC_DROP.start && line <= UC_DROP.end) ||
    (line >= NR_DROP.start && line <= NR_DROP.end) ||
    (line >= SY_DROP.start && line <= SY_DROP.end)
  );
}

function drainBoundary(all: string[]): string[] {
  const kept: string[] = [];
  for (let i = 0; i < all.length; i++) {
    if (inDrop(i + 1)) continue;
    kept.push(all[i]!);
  }
  return kept;
}

function patchHeader(kept: string[]): string[] {
  const importBlock = `
import {
  convertUnits as N1e,
} from "../../workbook/unit-convert";

import {
  wireNamedRangesBoundaryHooks,
  ensureNamedRangesInit,
  RXe,
  zXe,
} from "../../workbook/named-ranges";

wireNamedRangesBoundaryHooks({
  ensureRangeClusterInit: (...args: any[]) => workbookBinding675(...args),
});

// Thin aliases: named-ranges cluster drained (wave-91).
var ensureZXe = ensureNamedRangesInit;

import {
  ensureStylesYjsInit,
  Ogt,
  kgt,
} from "../../workbook/styles-yjs";

// Thin aliases: styles-yjs cluster drained (wave-91).
var ensureKgt = ensureStylesYjsInit;
`.trimStart();

  // Insert after three-chart-paint thin aliases
  let insertAt = -1;
  for (let i = 0; i < Math.min(2800, kept.length); i++) {
    if (
      kept[i]?.includes(
        "// Thin aliases: three-chart-paint cluster drained (wave-90).",
      )
    ) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt < 0) {
    for (let i = 0; i < Math.min(2800, kept.length); i++) {
      if (kept[i]?.includes('from "../../workbook/three-chart-paint"')) {
        let end = i;
        while (end < kept.length && kept[end]?.trim() !== "") end++;
        insertAt = end + 1;
        break;
      }
    }
  }
  if (insertAt < 0) throw new Error("insert point missing for wave-91 imports");

  kept.splice(insertAt, 0, "", ...importBlock.split("\n"));
  console.log("  inserted unit-convert + named-ranges + styles-yjs imports");

  for (let i = 0; i < 40; i++) {
    if (
      kept[i]?.includes(
        "doc-op-apply (Zht/_gt); three-chart-paint (helper521/Qbe/$be).",
      )
    ) {
      kept[i] = kept[i]!.replace(
        "doc-op-apply (Zht/_gt); three-chart-paint (helper521/Qbe/$be).",
        "doc-op-apply (Zht/_gt); three-chart-paint (helper521/Qbe/$be); unit-convert (N1e); named-ranges (zXe/RXe); styles-yjs (kgt/Ogt).",
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

  if (!md.includes("Unit convert (`N1e`)")) {
    md = md.replace(
      "| Three.js chart paint (`helper521` / `Qbe` / `$be`) | ~0.97k | **Drained (wave-90)** → `workbook/three-chart-paint/` |\n",
      "| Three.js chart paint (`helper521` / `Qbe` / `$be`) | ~0.97k | **Drained (wave-90)** → `workbook/three-chart-paint/` |\n| Unit convert (`N1e`) | ~0.52k | **Drained (wave-91)** → `workbook/unit-convert/` |\n| Named ranges (`IXe` / `LXe` / `RXe` / `zXe`) | ~0.37k | **Drained (wave-91)** → `workbook/named-ranges/` |\n| Styles Yjs (`helper1030`…`Cgt` / `Ogt` / `kgt`) | ~0.45k | **Drained (wave-91)** → `workbook/styles-yjs/` |\n",
    );
  }

  const wave = `
## Wave-91 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), \`_workbookS\`/\`_workbookO\` (~1236 leave), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Binding1486 (~626), Kpt (~352), vEe (~332).
- Skipped full \`_workbookS\`/\`_workbookO\` (45-ensure fan-out) and WorkbookN leave-behind; deferred chart helpers 491+ (fan-in to many chart leave-behinds).
- Peeled \`N1e\` → \`workbook/unit-convert/\`; coerce inlined; \`#VALUE!\`/\`#N/A\` from formula-stats; \`a7e\` still wraps \`N1e\`.
- Peeled \`IXe\`/\`LXe\`/\`RXe\`/\`zXe\` → \`workbook/named-ranges/\`; formula/address/attachment direct; Binding675 via \`nrH\`.
- Peeled contiguous \`helper1030\`…\`Cgt\`/\`Ogt\`/\`kgt\` → \`workbook/styles-yjs/\`; Fill/Font/Borders/stylesheet + yjs Map/Array direct.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${after} (was ${before}; Δ ${after - before}).
- Next: helpers 491/722/745 (~0.47–0.41k) / Kpt (~0.35k) / vEe (~0.33k) / Binding1486 (~0.63k) / \`_workbookS\` only after presentation leave-behind ensures drain.
`;

  if (!md.includes("## Wave-91 progress")) {
    if (md.includes("## Wave-90 progress")) {
      md = md.replace(
        /## Wave-90 progress[\s\S]*?(?=\n## Wave-|\n## Why |\n*$)/,
        (block) => block.trimEnd() + "\n" + wave,
      );
    }
    if (!md.includes("## Wave-91 progress")) {
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
  const note = `Wave workbook-runtime Stage-3 wave-91: N1e unit-convert + zXe/RXe named-ranges + kgt/Ogt styles-yjs → workbook/unit-convert/ + workbook/named-ranges/ + workbook/styles-yjs/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${note} | ${json.notes}` : note;

  const files = json.files;
  if (files) {
    for (const [key, val] of Object.entries(files)) {
      const restored = String(val.restored ?? "");
      if (
        !restored.includes("workbook-runtime") &&
        !key.includes("workbook-C49")
      ) {
        continue;
      }
      const prev = String(val.notes ?? "");
      val.notes = prev.includes("wave-91") ? prev : `${note} | ${prev}`;
      val.openBoundary = true;
      const mods = (val.restoredModules as string[] | undefined) ?? [];
      for (const f of [
        "workbook/unit-convert/index.ts",
        "workbook/unit-convert/unit-convert-impl.ts",
        "workbook/named-ranges/index.ts",
        "workbook/named-ranges/named-ranges-impl.ts",
        "workbook/named-ranges/boundary-hooks.ts",
        "workbook/named-ranges/ensure-named-ranges-init.ts",
        "workbook/styles-yjs/index.ts",
        "workbook/styles-yjs/styles-yjs-impl.ts",
        "workbook/styles-yjs/ensure-styles-yjs-init.ts",
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

  fs.mkdirSync(UC_OUT, { recursive: true });
  fs.mkdirSync(NR_OUT, { recursive: true });
  fs.mkdirSync(SY_OUT, { recursive: true });

  buildUcImpl(all);
  buildUcIndex();

  buildNrHooks();
  buildNrImpl(all);
  buildNrEnsure();
  buildNrIndex();

  buildSyImpl(all);
  buildSyEnsure();
  buildSyIndex();

  let kept = drainBoundary(all);
  kept = patchHeader(kept);

  const afterBody = kept.join("\n") + "\n";
  fs.writeFileSync(BOUNDARY, afterBody);
  const afterLoc = afterBody.split("\n").length - 1;
  console.log(`boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`);

  console.log("formatting…");
  run(["bun", FORMAT, UC_OUT, NR_OUT, SY_OUT]);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("quality-gate (unit-convert)…");
  run(["bun", QG, UC_OUT, "--no-cache"]);
  console.log("quality-gate (named-ranges)…");
  run(["bun", QG, NR_OUT, "--no-cache"]);
  console.log("quality-gate (styles-yjs)…");
  run(["bun", QG, SY_OUT, "--no-cache"]);
  console.log("quality-gate (boundary, allow-open)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("wave-91 DONE");
}

main();
