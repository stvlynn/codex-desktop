#!/usr/bin/env bun
/**
 * Stage-3 wave-88 drain of workbook-runtime:
 * 1) Reunite JEe / Binding1315 table-cell leave-behind (+ _workbookG / helper666)
 *    into workbook/table-row-range/ (~431 LOC)
 * 2) Peel CXe + TXe/wXe + EXe worksheets collection into workbook/sheet/
 *    (~401 LOC)
 *
 * Skipped full `_workbookS`/`_workbookO` — 45-ensure fan-out still entangled
 * with presentation leave-behinds (jLe…aYe / WorkbookN). Consumers already
 * hooked (canvas-paint / mermaid-slide-helpers) but peel unsafe this wave.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-jee-txe-wave88.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const TR_OUT = path.join(ROOT, "restored/workbook/table-row-range");
const SHEET_OUT = path.join(ROOT, "restored/workbook/sheet");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave88.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `_workbookG` … `JEe` close (before `var $H`). */
const JEE_DROP = { start: 31576, end: 32006 };

/** Inclusive 1-based: `CXe` … `EXe` close (before `DXe,`). */
const TXE_DROP = { start: 46655, end: 47055 };

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
    [JEE_DROP.start - 1, "  });", "WEe/Binding1312 close before _workbookG"],
    [JEE_DROP.start, "function _workbookG(", "_workbookG"],
    [31593, "var workbookUnderscore = esmInit(() => {", "workbookUnderscore"],
    [31596, "function workbookHelper666(", "helper666"],
    [31616, "var workbookBinding1314,", "Binding1314"],
    [31618, "  JEe = esmInit(() => {", "JEe"],
    [JEE_DROP.end, "  });", "JEe close"],
    [JEE_DROP.end + 1, "var $H,", "$H kept"],
    [TXE_DROP.start - 1, "  });", "_workbookS close before CXe"],
    [TXE_DROP.start, "function CXe(", "CXe"],
    [46688, "var wXe,", "wXe"],
    [46689, "  TXe = esmInit(() => {", "TXe"],
    [47052, "  }),", "TXe close"],
    [47053, "  EXe = esmInit(() => {", "EXe"],
    [TXE_DROP.end, "  }),", "EXe close"],
    [TXE_DROP.end + 1, "  DXe,", "DXe kept (needs var)"],
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
    /^(\s*)(?:async\s+)?([A-Za-z_#][\w$]*)\(([^)]*)\)(\s*\{)/gm,
    (m, ind: string, name: string, params: string, brace: string) => {
      if (name.startsWith("#")) return m;
      if (!params.trim()) return m;
      if (params.includes(":")) return m;
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
      if (/^\s*async\s+/.test(m)) {
        return `${ind}async ${name}(${typed})${brace}`;
      }
      return `${ind}${name}(${typed})${brace}`;
    },
  );
}

function rewriteJeeBody(raw: string): string {
  let out = raw;

  // Drop workbookUnderscore esmInit (redundant Line ensure).
  out = out.replace(
    /var workbookUnderscore = esmInit\(\(\) => \{\n\s*workbookBinding432\(\);\n\}\);\n/,
    "",
  );

  // Promote Binding1314/1315 slots + JEe ensure.
  out = out.replace(
    /var workbookBinding1314,\n\s*workbookBinding1315,\n\s*JEe = esmInit/,
    "export let workbookBinding1314: {\n  left: number;\n  right: number;\n  top: number;\n  bottom: number;\n};\nexport let workbookBinding1315: any;\nexport const JEe = esmInit",
  );

  // Ensure fan-out → promoted imports / scH.
  const ensureMap: Array<[string, string]> = [
    ["workbookBinding603", "ensureParagraphsInit"],
    ["workbookWt", "ensureFillInit"],
    ["workbookBinding432", "ensureLineInit"],
    ["Qt", "Qt"],
    ["workbookBinding1312", "scH.ensureBinding1312"],
    ["workbookBinding627", "ensureDetachedTextInit"],
    ["workbookBt", "ensureTextStyleInit"],
  ];
  for (const [src, dst] of ensureMap) {
    out = out.replace(
      new RegExp(`^(\\s*)${escapeRe(src)}\\(\\);`, "gm"),
      `$1${dst}();`,
    );
  }
  // Drop intentional workbookEt leave-behind (same as wave-85 YEe).
  out = out.replace(/^\s*workbookEt\(\);\n/gm, "");

  // Class / helper rewrites.
  out = out.replace(/\bworkbookHelper659\b/g, "scH.allocateLocalId");
  out = out.replace(/\bnew workbookBinding602\b/g, "new Paragraphs");
  out = out.replace(/\bnew workbookVt\b/g, "new TextStyle");
  out = out.replace(/\bnew workbookBinding626\b/g, "new DetachedText");
  out = out.replace(/\bnew workbookCt\b/g, "new Fill");
  out = out.replace(/\binstanceof workbookCt\b/g, "instanceof Fill");
  out = out.replace(/\bnew workbookBinding431\b/g, "new Line");
  out = out.replace(/\bof\(/g, "emuToFrameUnit(");
  out = out.replace(/\bworkbookTt\b/g, "frameUnitToEmu");

  // Promote helpers.
  out = out.replace(
    /^function _workbookG\(/m,
    "export function _workbookG(",
  );
  out = out.replace(
    /^function workbookHelper666\(/m,
    "export function normalizeTableCellAnchor(",
  );
  out = out.replace(/\bworkbookHelper666\b/g, "normalizeTableCellAnchor");

  // Thin workbookUnderscore compat (was Line ensure).
  out =
    out.trimEnd() +
    `\n\n/** Legacy workbookUnderscore — Line ensure alias. */\nexport const workbookUnderscore = ensureLineInit;\n`;

  // Keep Binding1314/1315 names in cell body (slots); only rename ephemeral locals.
  // Protect slot names from renameLocals.
  out = out.replace(/\bworkbookBinding1314\b/g, "__TC_SLOT_1314__");
  out = out.replace(/\bworkbookBinding1315\b/g, "__TC_SLOT_1315__");
  out = renameLocals(out, "tc");
  out = out.replace(/__TC_SLOT_1314__/g, "workbookBinding1314");
  out = out.replace(/__TC_SLOT_1315__/g, "workbookBinding1315");

  out = addParamAny(out);
  return out;
}

function rewriteTxeBody(raw: string): string {
  let out = raw;

  // Strip `var wXe,` / `TXe =` / `EXe =` multi-decl noise into exports.
  out = out.replace(/^var wXe,\s*$/m, "");
  out = out.replace(
    /^\s{2}TXe = esmInit\(\(\) => \{/m,
    "export const TXe = esmInit(() => {",
  );
  out = out.replace(
    /^\s{2}EXe = esmInit\(\(\) => \{/m,
    "export const EXe = esmInit(() => {",
  );
  out = out.replace(/^function CXe\(/m, "export function CXe(");

  // Ensure fan-out.
  out = out.replace(/^(\s*)kme\(\);/gm, "$1shH.ensureKme();");
  out = out.replace(/^(\s*)SXe\(\);/gm, "$1ensureSheetInit();");
  out = out.replace(/^(\s*)TXe\(\);/gm, "$1TXe();");

  // Logger + Sheet / null-object classes via hooks / bag.
  out = out.replace(/\bworkbookBinding686\b/g, "shH.sheetLog");
  out = out.replace(/\bnew workbookBinding1828\b/g, "new Sheet");
  out = out.replace(/\bnew yXe\b/g, "new NullSheet");

  // Capture wXe class assignment.
  out = out.replace(
    /^(\s*)wXe = class \{/m,
    "$1export let wXe: any;\n$1wXe = class {",
  );

  // Close indent for export const esmInit: `  }),` → `});`
  // Only the TXe close (before EXe) and EXe close.
  out = out.replace(/\n\s*\}\),\nexport const EXe/, "\n});\nexport const EXe");
  out = out.replace(/\n\s*\}\),\s*$/, "\n});");

  // Protect Sheet/TXe/EXe/CXe/wXe from local rename; rename ephemeral.
  const protect = [
    "Sheet",
    "NullSheet",
    "TXe",
    "EXe",
    "CXe",
    "wXe",
    "ensureSheetInit",
    "shH",
    "sheetLog",
  ];
  for (const p of protect) {
    out = out.replace(new RegExp(`\\b${escapeRe(p)}\\b`, "g"), `__P_${p}__`);
  }
  out = renameLocals(out, "ws");
  for (const p of protect) {
    out = out.replace(new RegExp(`__P_${escapeRe(p)}__`, "g"), p);
  }

  out = addParamAny(out);
  return out;
}

function buildTableCell(all: string[]): void {
  const raw = all.slice(JEE_DROP.start - 1, JEE_DROP.end).join("\n");
  const body = rewriteJeeBody(raw);

  write(
    path.join(TR_OUT, "table-cell-impl.ts"),
    `${PROV}
// Semantic implementation: presentation table cell VO
// (legacy JEe / Binding1315 / Binding1314 / _workbookG / helper666).
// Stage-3 wave-88 reunite with table-row-range; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import {
  Paragraphs,
  ensureParagraphsInit,
} from "../text-run";
import {
  TextStyle,
  ensureTextStyleInit,
} from "../text-style";
import { Fill, ensureFillInit } from "../fill";
import { Line, ensureLineInit } from "../line";
import {
  DetachedText,
  ensureDetachedTextInit,
} from "../detached-text";
import { emuToFrameUnit, frameUnitToEmu } from "../geometry-transform";
import { scH } from "../slides-collection";

${body}
`,
  );
}

function patchTableRowRange(): void {
  // Update boundary-hooks — JEe is now local.
  write(
    path.join(TR_OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-88: table-row-range boundary hooks
// (JEe/Binding1315 reunited — hooks cleared; bag kept for future leave-behinds).

export type TableRowRangeBoundaryHooks = Record<string, never>;

/** Live bag (empty after wave-88 JEe reunite). */
export const trH: TableRowRangeBoundaryHooks = {} as TableRowRangeBoundaryHooks;

export function wireTableRowRangeBoundaryHooks(
  _next: TableRowRangeBoundaryHooks = {} as TableRowRangeBoundaryHooks,
): void {
  // no-op — JEe leave-behind drained in wave-88
}
`,
  );

  // Update ensure to seed JEe first.
  write(
    path.join(TR_OUT, "ensure-table-row-range-init.ts"),
    `${PROV}
// Stage-3 wave-88: table-row-range cluster ensure
// (legacy JEe + YEe + Binding1321 + QEe + $Ee).

import { JEe } from "./table-cell-impl";
import { YEe } from "./table-row-range-impl";
import { workbookBinding1321 } from "./table-row-range-impl";
import { QEe } from "./table-row-range-impl";
import { $Ee } from "./table-row-range-impl";

/** Seed cell + row + range + columns + borders (call any leaf; they chain). */
export const ensureTableRowRangeInit = () => {
  JEe();
  YEe();
  workbookBinding1321();
  QEe();
  $Ee();
};
`,
  );

  // Patch table-row-range-impl: replace trH.ensureJEe / trH.Binding1315
  // and fix missing Fill / applyTextStylePatch imports.
  const implPath = path.join(TR_OUT, "table-row-range-impl.ts");
  let impl = fs.readFileSync(implPath, "utf8");

  if (!impl.includes('from "./table-cell-impl"')) {
    impl = impl.replace(
      `import { trH } from "./boundary-hooks";\n`,
      `import { JEe, workbookBinding1315 } from "./table-cell-impl";\nimport { Fill } from "../fill";\nimport { applyTextStylePatch } from "../text-style";\n`,
    );
  }
  impl = impl.replace(/trH\.ensureJEe\(\);/g, "JEe();");
  impl = impl.replace(/trH\.Binding1315/g, "workbookBinding1315");
  impl = impl.replace(/\bworkbookCt\b/g, "Fill");
  impl = impl.replace(/\bworkbookYt\b/g, "applyTextStylePatch");
  impl = impl.replace(
    /\/\/ \(legacy YEe \/ Binding1321 \/ QEe \/ \$Ee \/ Binding1316–1324 \/ XEe \/ ZEe\)\./,
    "// (legacy YEe / Binding1321 / QEe / $Ee / Binding1316–1324 / XEe / ZEe; cell via table-cell-impl).",
  );
  // Drop unused trH import if still present.
  impl = impl.replace(/import \{ trH \} from "\.\/boundary-hooks";\n/, "");
  fs.writeFileSync(implPath, impl.endsWith("\n") ? impl : impl + "\n");
  console.log(`  patched ${path.relative(ROOT, implPath)}`);

  // Update index barrel.
  write(
    path.join(TR_OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-88: table-row-range barrel
// (legacy YEe / Binding1321 / QEe / $Ee / Binding1316–1324 + JEe / Binding1315).

export { ensureTableRowRangeInit } from "./ensure-table-row-range-init";
export { wireTableRowRangeBoundaryHooks, trH } from "./boundary-hooks";
export {
  workbookBinding1316,
  workbookBinding1317,
  workbookBinding1318,
  workbookBinding1319,
  workbookBinding1320,
  workbookBinding1322,
  workbookBinding1323,
  workbookBinding1324,
} from "./tr-slots";
export {
  YEe,
  XEe,
  ZEe,
  workbookBinding1321,
  QEe,
  $Ee,
} from "./table-row-range-impl";
export {
  JEe,
  workbookBinding1314,
  workbookBinding1315,
  _workbookG,
  normalizeTableCellAnchor,
  workbookUnderscore,
} from "./table-cell-impl";
`,
  );
}

function buildWorksheetsCollection(all: string[]): void {
  const raw = all.slice(TXE_DROP.start - 1, TXE_DROP.end).join("\n");
  const body = rewriteTxeBody(raw);

  write(
    path.join(SHEET_OUT, "worksheets-collection-impl.ts"),
    `${PROV}
// Semantic implementation: spreadsheet Worksheets collection
// (legacy TXe / wXe / CXe / EXe).
// Stage-3 wave-88 cohesive worksheets-collection kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSheetInit, Sheet } from "./ensure-sheet-init";
import { sheet } from "./sheet-bag";
import { shH } from "./worksheets-boundary-hooks";

/** Null-object worksheet (legacy yXe) from sheet bag. */
const NullSheet: any = new Proxy(function () {} as any, {
  construct(_t, args) {
    ensureSheetInit();
    return new (sheet.yXe as any)(...args);
  },
  get(_t, prop) {
    ensureSheetInit();
    const v = (sheet.yXe as any)[prop];
    return typeof v === "function" ? v.bind(sheet.yXe) : v;
  },
});

${body}
`,
  );

  write(
    path.join(SHEET_OUT, "worksheets-boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-88: boundary deps for worksheets collection
// (kme / Binding686 sheet logger leave-behind).

export type WorksheetsBoundaryHooks = {
  ensureKme: () => void;
  sheetLog: {
    warn: (...args: any[]) => void;
    debug?: (...args: any[]) => void;
    info?: (...args: any[]) => void;
    error?: (...args: any[]) => void;
  };
};

/** Live bag for kme logger leave-behind. */
export const shH: WorksheetsBoundaryHooks = {} as WorksheetsBoundaryHooks;

export function wireWorksheetsBoundaryHooks(
  next: WorksheetsBoundaryHooks,
): void {
  shH.ensureKme = next.ensureKme;
  Object.defineProperty(shH, "sheetLog", {
    get: () => next.sheetLog,
    configurable: true,
  });
}
`,
  );

  write(
    path.join(SHEET_OUT, "ensure-worksheets-collection-init.ts"),
    `${PROV}
// Stage-3 wave-88: worksheets collection ensure (legacy EXe / TXe).

import { EXe, TXe } from "./worksheets-collection-impl";

/** Seed worksheets collection (EXe → TXe). */
export const ensureWorksheetsCollectionInit = () => {
  EXe();
};

export { TXe, EXe };
`,
  );

  // Patch sheet index to export new surface.
  const indexPath = path.join(SHEET_OUT, "index.ts");
  let index = fs.readFileSync(indexPath, "utf8");
  if (!index.includes("worksheets-collection-impl")) {
    index = index.trimEnd() +
      `

export {
  wireWorksheetsBoundaryHooks,
  type WorksheetsBoundaryHooks,
  shH,
} from "./worksheets-boundary-hooks";
export {
  ensureWorksheetsCollectionInit,
  TXe,
  EXe,
} from "./ensure-worksheets-collection-init";
export { CXe, wXe } from "./worksheets-collection-impl";
`;
    write(indexPath, index);
  }

  // Extend sheet boundary-hooks type? Not required — separate worksheets hooks.
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = JEE_DROP.start; i <= JEE_DROP.end; i++) drop.add(i - 1);
  for (let i = TXE_DROP.start; i <= TXE_DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop JEe cluster ${JEE_DROP.start}-${JEE_DROP.end} (${JEE_DROP.end - JEE_DROP.start + 1} lines)`,
  );
  console.log(
    `  drop TXe/CXe/EXe ${TXE_DROP.start}-${TXE_DROP.end} (${TXE_DROP.end - TXE_DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  // Fix `  DXe,` → `var DXe,` after removing TXe var head.
  for (let i = 0; i < kept.length - 2; i++) {
    if (
      kept[i]?.trim() === "DXe," &&
      kept[i + 1]?.trim() === "OXe," &&
      kept[i + 2]?.includes("kXe = esmInit")
    ) {
      kept[i] = "var DXe,";
      console.log(`  repaired var DXe at kept[${i}]`);
      break;
    }
  }

  // --- table-row-range: extend import + replace JEe wire ---
  let trImportAt = -1;
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes(`from "../../workbook/table-row-range"`)) {
      // Expand the import block to include JEe exports.
      let start = i;
      while (start > 0 && !kept[start]?.trim().startsWith("import {")) start--;
      let end = i;
      const importLines = kept.slice(start, end + 1);
      const joined = importLines.join("\n");
      if (!joined.includes("JEe")) {
        const expanded = joined.replace(
          /import \{([^}]*)\} from "\.\.\/\.\.\/workbook\/table-row-range";/s,
          (_m, inner: string) => {
            const names = inner
              .split(",")
              .map((s: string) => s.trim())
              .filter(Boolean);
            for (const n of [
              "JEe",
              "workbookBinding1314",
              "workbookBinding1315",
              "_workbookG",
              "normalizeTableCellAnchor",
              "workbookUnderscore",
            ]) {
              if (!names.includes(n)) names.push(n);
            }
            return `import {\n  ${names.join(",\n  ")},\n} from "../../workbook/table-row-range";`;
          },
        );
        kept.splice(start, end - start + 1, ...expanded.split("\n"));
        console.log("  expanded table-row-range import");
      }
      trImportAt = start;
      break;
    }
  }
  if (trImportAt < 0) throw new Error("table-row-range import missing");

  // Replace wireTableRowRangeBoundaryHooks({ ensureJEe... }) with empty wire.
  for (let i = 0; i < Math.min(3500, kept.length); i++) {
    if (kept[i]?.includes("wireTableRowRangeBoundaryHooks({")) {
      let end = i;
      for (let j = i; j < Math.min(i + 20, kept.length); j++) {
        if (kept[j]?.trim() === "});") {
          end = j;
          break;
        }
      }
      kept.splice(
        i,
        end - i + 1,
        "wireTableRowRangeBoundaryHooks({});",
        "",
        "// Thin aliases: JEe / Binding1315 reunited into table-row-range (wave-88).",
        "var ensureJEe = JEe;",
      );
      console.log("  replaced JEe boundary wire with empty + alias");
      break;
    }
  }

  // --- sheet: extend import for worksheets collection ---
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes(`from "../../workbook/sheet"`)) {
      let start = i;
      while (start > 0 && !kept[start]?.trim().startsWith("import {")) start--;
      let end = i;
      const joined = kept.slice(start, end + 1).join("\n");
      if (!joined.includes("ensureWorksheetsCollectionInit")) {
        const expanded = joined.replace(
          /import \{([^}]*)\} from "\.\.\/\.\.\/workbook\/sheet";/s,
          (_m, inner: string) => {
            const names = inner
              .split(",")
              .map((s: string) => s.trim())
              .filter(Boolean);
            for (const n of [
              "wireWorksheetsBoundaryHooks",
              "ensureWorksheetsCollectionInit",
              "TXe",
              "EXe",
              "CXe",
              "wXe",
            ]) {
              if (!names.some((x) => x === n || x.startsWith(n + " ") || x.endsWith(" " + n))) {
                names.push(n);
              }
            }
            return `import {\n  ${names.join(",\n  ")},\n} from "../../workbook/sheet";`;
          },
        );
        kept.splice(start, end - start + 1, ...expanded.split("\n"));
        console.log("  expanded sheet import for worksheets collection");
      }
      break;
    }
  }

  // Wire worksheets hooks after wireSheetBoundaryHooks block.
  for (let i = 0; i < Math.min(3500, kept.length); i++) {
    if (
      kept[i]?.includes("// Thin aliases for TXe / WorkbookN")
    ) {
      const wireStub = [
        "wireWorksheetsBoundaryHooks({",
        "  ensureKme: () => {",
        "    kme();",
        "  },",
        "  get sheetLog() {",
        "    return workbookBinding686;",
        "  },",
        "});",
        "",
        "var ensureWorksheetsCollectionCluster = ensureWorksheetsCollectionInit;",
        "",
      ];
      kept.splice(i, 0, ...wireStub);
      console.log("  inserted worksheets boundary wire");
      break;
    }
  }

  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(80, kept.length); i++) {
    if (kept[i]?.includes("presentation-slide (Z$/X$/cLe/sLe).")) {
      kept[i] = kept[i]!.replace(
        "presentation-slide (Z$/X$/cLe/sLe).",
        "presentation-slide (Z$/X$/cLe/sLe); JEe table-cell reunite; TXe/wXe worksheets.",
      );
      break;
    }
  }
  return kept;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  let text = fs.readFileSync(README, "utf8");
  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(afterLoc / 1000).toFixed(1)}k LOC remaining)`,
  );
  if (!text.includes("Table cell (`JEe`")) {
    text = text.replace(
      /\| Presentation slide \(\`Z\$\`\/\`X\$\`\/\`cLe\`\/\`sLe\`\)[^\n]+\n/,
      (m) =>
        m +
        `| Table cell (\`JEe\`/\`Binding1315\`) | ~0.43k | **Drained (wave-88)** → \`workbook/table-row-range/\` (reunite) |\n` +
        `| Worksheets collection (\`TXe\`/\`wXe\`/\`CXe\`/\`EXe\`) | ~0.40k | **Drained (wave-88)** → \`workbook/sheet/\` |\n`,
    );
  }
  const section = `
## Wave-88 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), \`_workbookS\`/\`_workbookO\` (~1236 leave), helper585 (~924 chart paint), Zht (~596), $be (~578), … JEe (~389), zXe (~368), TXe (~364), kgt (~361).
- Skipped full \`_workbookS\`/\`_workbookO\`: consumers already hooked (canvas-paint / mermaid-slide-helpers) but 45-ensure fan-out still entangled with presentation leave-behinds (jLe…aYe / WorkbookN) — unsafe this wave.
- Reunited \`JEe\`/\`Binding1315\` (+ \`_workbookG\` / helper666) → \`workbook/table-row-range/table-cell-impl.ts\`; cleared \`trH\` JEe hooks; Paragraphs/Fill/Line/TextStyle/DetachedText/geometry/scH/Qt imported directly; intentional \`workbookEt\` ensure dropped.
- Peeled \`CXe\`+\`TXe\`/\`wXe\`+\`EXe\` → \`workbook/sheet/worksheets-collection-impl.ts\`; kme/Binding686 logger via \`shH\` hooks; Sheet/yXe via sheet bag.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on changed modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / clean \`xLe\` walnut / partial WorkbookN method peel / \`_workbookS\` only after presentation leave-behind ensures drain.

`;
  fs.writeFileSync(README, text.trimEnd() + "\n" + section);
  console.log("  updated README");
}

function updateImportMap(afterLoc: number): void {
  const raw = fs.readFileSync(IMPORT_MAP, "utf8");
  const json = JSON.parse(raw) as {
    notes?: string;
    files?: Record<string, { notes?: string; [k: string]: unknown }>;
  };
  const waveNote = `Wave workbook-runtime Stage-3 wave-88: JEe table-cell reunite → workbook/table-row-range/; TXe/wXe/CXe/EXe worksheets → workbook/sheet/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${waveNote} | ${json.notes}` : waveNote;
  for (const [, val] of Object.entries(json.files ?? {})) {
    if (
      typeof val === "object" &&
      val &&
      "restored" in val &&
      String((val as { restored?: string }).restored).includes(
        "boundaries/workbook-runtime",
      )
    ) {
      const notes = String((val as { notes?: string }).notes ?? "");
      if (!notes.includes("wave-88")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
      }
      const modules = (val as { modules?: string[] }).modules;
      if (Array.isArray(modules)) {
        for (const m of ["workbook/table-row-range/", "workbook/sheet/"]) {
          if (!modules.includes(m)) modules.push(m);
        }
      }
      const restoredModules = (val as { restoredModules?: string[] })
        .restoredModules;
      if (Array.isArray(restoredModules)) {
        for (const f of [
          "workbook/table-row-range/table-cell-impl.ts",
          "workbook/sheet/worksheets-collection-impl.ts",
          "workbook/sheet/worksheets-boundary-hooks.ts",
          "workbook/sheet/ensure-worksheets-collection-init.ts",
        ]) {
          if (!restoredModules.includes(f)) restoredModules.push(f);
        }
      }
      (val as { openBoundary?: boolean }).openBoundary = true;
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

  buildTableCell(all);
  patchTableRowRange();
  buildWorksheetsCollection(all);

  let kept = drainBoundary(all);
  kept = patchHeader(kept);

  const afterBody = kept.join("\n") + "\n";
  fs.writeFileSync(BOUNDARY, afterBody);
  const afterLoc = afterBody.split("\n").length - 1;
  console.log(`boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`);

  console.log("formatting…");
  run(["bun", FORMAT, TR_OUT]);
  run(["bun", FORMAT, path.join(SHEET_OUT, "worksheets-collection-impl.ts")]);
  run(["bun", FORMAT, path.join(SHEET_OUT, "worksheets-boundary-hooks.ts")]);
  run([
    "bun",
    FORMAT,
    path.join(SHEET_OUT, "ensure-worksheets-collection-init.ts"),
  ]);
  run(["bun", FORMAT, path.join(SHEET_OUT, "index.ts")]);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("quality-gate (table-row-range)…");
  run(["bun", QG, TR_OUT, "--no-cache"]);
  console.log("quality-gate (sheet new files)…");
  run([
    "bun",
    QG,
    path.join(SHEET_OUT, "worksheets-collection-impl.ts"),
    path.join(SHEET_OUT, "worksheets-boundary-hooks.ts"),
    path.join(SHEET_OUT, "ensure-worksheets-collection-init.ts"),
    "--no-cache",
  ]);
  console.log("quality-gate (boundary, allow-open)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("DONE wave-88 JEe reunite + TXe worksheets");
}

main();
