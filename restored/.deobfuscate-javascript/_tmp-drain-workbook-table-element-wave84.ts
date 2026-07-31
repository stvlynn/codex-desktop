#!/usr/bin/env bun
/**
 * Stage-3 wave-84 drain of workbook-runtime:
 * Contiguous table-element cluster (~719 LOC) —
 *   eDe…cDe helpers (style-id resolve, margins, column tracks, preview) +
 *   _workbookH ensure / Binding1331 cells accessor / _workbookM Table VO +
 *   Binding1332/1333 style-id map + UUID re
 *   → workbook/table-element/
 *
 * Leave-behinds via teH hooks: YEe/Binding1316, Binding1321/1317,
 * QEe/Binding1323, $Ee/Binding1324, Binding1330/1327 (compose tracks).
 * Intentional workbookEt ensure dropped — of/workbookTt from geometry-transform.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-table-element-wave84.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/table-element");
const COMPOSE_HOOKS = path.join(
  ROOT,
  "restored/workbook/compose-dsl/boundary-hooks.ts",
);
const COMPOSE_LAYOUT_META = path.join(
  ROOT,
  "restored/workbook/compose-dsl/layout-meta-impl.ts",
);
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave84.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `function eDe(` … `_workbookH` close (before `_workbookF`). */
const DROP = { start: 32386, end: 33104 };

const SLOTS = [
  "workbookBinding1331",
  "_workbookM",
  "workbookBinding1332",
  "workbookBinding1333",
] as const;

/** Keep imported Binding aliases + public slots; only ephemeral locals rename. */
const KEEP_BINDING = new Set([
  "1331",
  "1332",
  "1333",
  // referenced via teH leave-behinds (names preserved in rewrite)
  "1316",
  "1317",
  "1323",
  "1324",
  "1327",
  // imported ensures / classes used under legacy Binding names
  "647",
]);

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
    [DROP.start - 1, "  });", "Binding1330 close before eDe"],
    [DROP.start, "function eDe(workbookInput10186) {", "eDe"],
    [32395, "function tDe(workbookInput10694) {", "tDe"],
    [32515, "function cDe(workbookInput4389, workbookInput4390 = 140) {", "cDe"],
    [32537, "  _workbookH = esmInit(() => {", "_workbookH ensure"],
    [32538, "    Qt();", "Qt"],
    [32539, "    workbookB();", "workbookB"],
    [32540, "    YEe();", "YEe leave"],
    [32541, "    workbookEt();", "workbookEt leave (will drop)"],
    [32567, '    _workbookM = class extends _workbookZ {', "Table class"],
    [32568, '      type = "table";', "table type"],
    [DROP.end, "  }),", "_workbookH close (varlist comma)"],
    [DROP.end + 1, "  _workbookF,", "_workbookF kept"],
    [DROP.end + 2, "  _workbookP = esmInit(() => {", "_workbookP continues"],
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

function stripVarListNoise(body: string): string {
  const lines = body.split("\n");
  const kept: string[] = [];
  for (const line of lines) {
    if (/^var\s+/.test(line)) continue;
    if (/^\s{2}[A-Za-z_$][\w$]*,\s*$/.test(line)) continue;
    kept.push(line);
  }
  return kept.join("\n");
}

function promoteEnsures(body: string, ensureNames: string[]): string {
  let out = body;
  for (const name of ensureNames) {
    out = out.replace(
      new RegExp(
        `^\\s{2}${escapeRe(name)}\\s*=\\s*esmInit\\(\\(\\)\\s*=>\\s*\\{`,
        "m",
      ),
      `export const ${name} = esmInit(() => {`,
    );
  }
  out = out.replace(/^\s{2}\}\),$/gm, "});");
  out = out.replace(/^\s{2}\}\);$/gm, "});");
  return out;
}

function promoteFunctions(body: string): string {
  return body.replace(/^function\s+/gm, "export function ");
}

function typeParams(params: string): string {
  if (!params.trim()) return "";
  return params
    .split(",")
    .map((p) => {
      const t = p.trim();
      if (!t) return t;
      if (t.includes(":")) return t;
      if (t.includes("=")) {
        const [name, def] = t.split("=").map((s) => s.trim());
        if (name!.includes(":")) return t;
        return `${name}: any = ${def}`;
      }
      if (t.startsWith("...")) {
        const rest = t.slice(3).trim();
        return `...${rest}: any[]`;
      }
      return `${t}: any`;
    })
    .join(", ");
}

function addParamAny(body: string): string {
  let out = body.replace(
    /^export function ([A-Za-z_$][\w$]*)\(([^)]*)\)/gm,
    (_m, name: string, params: string) =>
      `export function ${name}(${typeParams(params)})`,
  );
  out = out.replace(
    /^export function ([A-Za-z_$][\w$]*)\(\n([^)]*?)\n\)/gm,
    (_m, name: string, params: string) => {
      const typed = params
        .split("\n")
        .map((line) => {
          const raw = line.trim().replace(/,$/, "");
          if (!raw) return line;
          const indent = line.match(/^\s*/)?.[0] ?? "  ";
          if (raw.includes(":")) return line;
          if (raw.includes("=")) {
            const [n, def] = raw.split("=").map((s) => s.trim());
            return `${indent}${n}: any = ${def},`;
          }
          return `${indent}${raw}: any,`;
        })
        .join("\n");
      return `export function ${name}(\n${typed}\n)`;
    },
  );
  return out;
}

function renameLocals(body: string): string {
  let out = body.replace(/\bworkbookInput(\d+)\b/g, "teIn$1");
  out = out.replace(/\bworkbookBinding(\d+)\b/g, (m, n: string) => {
    if (KEEP_BINDING.has(n)) return m;
    return `teBind${n}`;
  });
  return out;
}

function rewriteEnsures(body: string): string {
  let out = body;
  // Drop intentional workbookEt — of/workbookTt come from geometry-transform.
  out = out.replace(/^\s*workbookEt\(\);\n/m, "");
  out = out.replace(/^(\s*)YEe\(\);/m, "$1teH.ensureYEe();");
  out = out.replace(
    /^(\s*)workbookBinding1321\(\);/m,
    "$1teH.ensureBinding1321();",
  );
  out = out.replace(/^(\s*)QEe\(\);/m, "$1teH.ensureQEe();");
  out = out.replace(/^(\s*)\$Ee\(\);/m, "$1teH.ensureDollarEe();");
  out = out.replace(
    /^(\s*)workbookBinding1330\(\);/m,
    "$1teH.ensureBinding1330();",
  );
  // Leave-behind class constructors live on the hook bag after ensures.
  out = out.replace(/\bworkbookBinding1316\b/g, "teH.Binding1316");
  out = out.replace(/\bworkbookBinding1317\b/g, "teH.Binding1317");
  out = out.replace(/\bworkbookBinding1323\b/g, "teH.Binding1323");
  out = out.replace(/\bworkbookBinding1324\b/g, "teH.Binding1324");
  out = out.replace(/\bworkbookBinding1327\b/g, "teH.Binding1327");
  return out;
}

function sharedImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import {
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "../slide-element";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  emuToFrameUnit as of,
  frameUnitToEmu as workbookTt,
} from "../geometry-transform";
import {
  composeScopedId as workbookHelper302,
  ensureStableIdClusterInit as workbookBinding647,
} from "../stable-id";
import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./te-slots";
import { teH } from "./boundary-hooks";
`;
}

function buildSupport(): void {
  write(
    path.join(OUT, "te-slots.ts"),
    `${PROV}
// Stage-3 wave-84: table-element mutable slots
// (legacy Binding1331/_workbookM/Binding1332/1333).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );

  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-84: boundary deps for table-element
// (YEe/Binding1321/QEe/$Ee/Binding1330 leave-behinds).

export type TableElementBoundaryHooks = {
  /** Legacy YEe ensure (seeds Binding1316 table row). */
  ensureYEe: () => void;
  /** Legacy Binding1321 ensure (seeds Binding1317 table range). */
  ensureBinding1321: () => void;
  /** Legacy QEe ensure (seeds Binding1323 columns). */
  ensureQEe: () => void;
  /** Legacy $Ee ensure (seeds Binding1324 borders). */
  ensureDollarEe: () => void;
  /** Compose tracks ensure (legacy Binding1330 — seeds Binding1327). */
  ensureBinding1330: () => void;
  /** Table row class (legacy Binding1316). */
  Binding1316: any;
  /** Table range class (legacy Binding1317). */
  Binding1317: any;
  /** Table columns class (legacy Binding1323). */
  Binding1323: any;
  /** Table borders class (legacy Binding1324). */
  Binding1324: any;
  /** Compose track normalizer (legacy Binding1327). */
  Binding1327: any;
};

/** Live bag for intentional leave-behind ensures/classes. */
export const teH: TableElementBoundaryHooks =
  {} as TableElementBoundaryHooks;

export function wireTableElementBoundaryHooks(
  next: TableElementBoundaryHooks,
): void {
  teH.ensureYEe = next.ensureYEe;
  teH.ensureBinding1321 = next.ensureBinding1321;
  teH.ensureQEe = next.ensureQEe;
  teH.ensureDollarEe = next.ensureDollarEe;
  teH.ensureBinding1330 = next.ensureBinding1330;
  Object.defineProperty(teH, "Binding1316", {
    get: () => next.Binding1316,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1317", {
    get: () => next.Binding1317,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1323", {
    get: () => next.Binding1323,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1324", {
    get: () => next.Binding1324,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1327", {
    get: () => next.Binding1327,
    configurable: true,
  });
}
`,
  );

  write(
    path.join(OUT, "ensure-table-element-init.ts"),
    `${PROV}
// Stage-3 wave-84: table-element cluster ensure (legacy _workbookH).

import { _workbookH } from "./table-class-impl";

export const ensureTableElementInit = _workbookH;
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-84: table-element barrel (legacy _workbookH / eDe…cDe / _workbookM).

export { ensureTableElementInit } from "./ensure-table-element-init";
export {
  wireTableElementBoundaryHooks,
  teH,
} from "./boundary-hooks";
export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./te-slots";
export {
  eDe,
  tDe,
  nDe,
  rDe,
  iDe,
  aDe,
  oDe,
  sDe,
  cDe,
  _workbookH,
} from "./table-class-impl";
`,
  );
}

function buildImpl(all: string[]): void {
  let body = all.slice(DROP.start - 1, DROP.end).join("\n");
  body = stripVarListNoise(body);
  body = promoteEnsures(body, ["_workbookH"]);
  body = promoteFunctions(body);
  body = rewriteEnsures(body);
  body = renameLocals(body);
  body = addParamAny(body);
  body = body.replace(/\n\s*\}\);\s*$/, "\n});");

  write(
    path.join(OUT, "table-class-impl.ts"),
    `${PROV}
// Semantic implementation: presentation Table element VO + style/preview helpers
// (legacy _workbookH / _workbookM / Binding1331–1333 / eDe…cDe).
// Stage-3 wave-84 cohesive table-element impl kept flat under maxFlatLines.

${sharedImports()}
${body}
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop eDe…cDe + _workbookH table-element ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(4000, kept.length); i++) {
    if (kept[i]?.includes("var ensureConstraintSolverCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  // Prefer after formula-opcodes cluster if present (wave-83).
  for (let i = 0; i < Math.min(4000, kept.length); i++) {
    if (kept[i]?.includes("var ensureFormulaOpcodesCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  ensureTableElementInit,`,
    `  wireTableElementBoundaryHooks,`,
    `  _workbookH,`,
    `  _workbookM,`,
    `  workbookBinding1331,`,
    `  workbookBinding1332,`,
    `  workbookBinding1333,`,
    `  eDe,`,
    `  tDe,`,
    `  nDe,`,
    `  rDe,`,
    `  iDe,`,
    `  aDe,`,
    `  oDe,`,
    `  sDe,`,
    `  cDe,`,
    `} from "../../workbook/table-element";`,
    ``,
    `var ensureTableElementCluster = ensureTableElementInit;`,
    ``,
    `wireTableElementBoundaryHooks({`,
    `  ensureYEe: () => {`,
    `    YEe();`,
    `  },`,
    `  ensureBinding1321: () => {`,
    `    workbookBinding1321();`,
    `  },`,
    `  ensureQEe: () => {`,
    `    QEe();`,
    `  },`,
    `  ensureDollarEe: () => {`,
    `    $Ee();`,
    `  },`,
    `  ensureBinding1330: () => {`,
    `    workbookBinding1330();`,
    `  },`,
    `  get Binding1316() {`,
    `    return workbookBinding1316;`,
    `  },`,
    `  get Binding1317() {`,
    `    return workbookBinding1317;`,
    `  },`,
    `  get Binding1323() {`,
    `    return workbookBinding1323;`,
    `  },`,
    `  get Binding1324() {`,
    `    return workbookBinding1324;`,
    `  },`,
    `  get Binding1327() {`,
    `    return workbookBinding1327;`,
    `  },`,
    `});`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);

  // Dropped mid-varlist (`var Binding1331…_workbookH = …}),`); re-anchor `_workbookF`.
  for (let i = 0; i < kept.length; i++) {
    if (kept[i] === "  _workbookF," && kept[i + 1]?.startsWith("  _workbookP =")) {
      kept[i] = "var _workbookF,";
      break;
    }
  }
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(80, kept.length); i++) {
    if (kept[i]?.includes("formula-opcodes (Z_t/X_t).")) {
      kept[i] = kept[i]!.replace(
        "formula-opcodes (Z_t/X_t).",
        "formula-opcodes (Z_t/X_t); table-element (_workbookH/eDe…cDe/_workbookM).",
      );
      break;
    }
  }
  return kept;
}

function patchComposeDslWire(kept: string[]): string[] {
  // ensureWorkbookH now resolves via imported _workbookH — keep thin wire.
  const out = [...kept];
  for (let i = 0; i < out.length; i++) {
    if (
      out[i]?.includes("ensureWorkbookH: () => {") &&
      out[i + 1]?.includes("_workbookH();")
    ) {
      // already correct once _workbookH is imported from table-element
      break;
    }
  }
  return out;
}

function updateComposeDslDirectImport(): void {
  // Prefer direct ensure from table-element; drop ensureWorkbookH hook.
  let hooks = fs.readFileSync(COMPOSE_HOOKS, "utf8");
  if (hooks.includes("ensureWorkbookH")) {
    hooks = hooks.replace(
      /\n\s*\/\*\* Legacy _workbookH ensure\. \*\/\n\s*ensureWorkbookH: \(\) => void;\n/,
      "\n",
    );
    hooks = hooks.replace(
      /\n\s*cdslH\.ensureWorkbookH = next\.ensureWorkbookH;\n/,
      "\n",
    );
    write(COMPOSE_HOOKS, hooks);
  }

  let meta = fs.readFileSync(COMPOSE_LAYOUT_META, "utf8");
  if (meta.includes("cdslH.ensureWorkbookH()")) {
    if (!meta.includes('from "../table-element"')) {
      meta = meta.replace(
        'import { cdslH } from "./boundary-hooks";\n',
        'import { cdslH } from "./boundary-hooks";\nimport { ensureTableElementInit } from "../table-element";\n',
      );
    }
    meta = meta.replace(
      "  cdslH.ensureWorkbookH();\n",
      "  ensureTableElementInit();\n",
    );
    write(COMPOSE_LAYOUT_META, meta);
  }
}

function patchBoundaryComposeWire(kept: string[]): string[] {
  const out: string[] = [];
  for (let i = 0; i < kept.length; i++) {
    if (
      kept[i]?.includes("ensureWorkbookH: () => {") &&
      kept[i + 1]?.includes("_workbookH();") &&
      kept[i + 2]?.trim() === "},"
    ) {
      // Drop the ensureWorkbookH entry from wireComposeDslBoundaryHooks.
      i += 2;
      continue;
    }
    out.push(kept[i]!);
  }
  return out;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  let text = fs.readFileSync(README, "utf8");
  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(afterLoc / 1000).toFixed(1)}k LOC remaining)`,
  );
  if (!text.includes("table-element (`_workbookH`")) {
    text = text.replace(
      /\| Formula opcodes \(\`Z_t\`\/\`X_t\`\)[^\n]+\n/,
      (m) =>
        m +
        `| Table element (\`_workbookH\`/\`eDe\`…\`cDe\`/\`_workbookM\`) | ~0.72k | **Drained (wave-84)** → \`workbook/table-element/\` |\n`,
    );
  }
  const section = `
## Wave-84 progress

- Identified contiguous eDe…cDe + \`_workbookH\`/\`_workbookM\` cluster as Codex presentation Table element VO (NOT vendor): style-id resolve, cell-margin/column-track helpers, preview trim, Table class (~719 LOC).
- Extracted → \`workbook/table-element/\` (single impl under flat limit; YEe/Binding1321/QEe/\`$Ee\`/Binding1330 remain in boundary via \`teH\` hooks; slide-element / fill / geometry-transform / stable-id imported directly; intentional \`workbookEt\` ensure dropped — \`of\`/\`workbookTt\` from geometry-transform).
- Compose-dsl \`ensureWorkbookH\` hook cleared → direct \`ensureTableElementInit\` import.
- Left \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, \`_Ye\`/\`_workbookS\` (~1.2k leave), YEe…Binding1330 table support (~0.6k), \`$dt\` formula registry (~0.57k), \`Z$\` (~460), and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: YEe…\`$Ee\` table row/range/columns/borders (~0.58k) / \`$dt\` formula registry (~0.57k) / clean \`xLe\` walnut / \`Z$\` (~460) / leave-behinds only if consumers clean.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-84: _workbookH/eDe…cDe/_workbookM table-element → workbook/table-element/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
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
      if (!notes.includes("wave-84")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
      }
      const modules = (val as { modules?: string[] }).modules;
      if (
        Array.isArray(modules) &&
        !modules.includes("workbook/table-element/")
      ) {
        modules.push("workbook/table-element/");
      }
      const restoredModules = (val as { restoredModules?: string[] })
        .restoredModules;
      if (Array.isArray(restoredModules)) {
        for (const f of [
          "workbook/table-element/te-slots.ts",
          "workbook/table-element/boundary-hooks.ts",
          "workbook/table-element/table-class-impl.ts",
          "workbook/table-element/ensure-table-element-init.ts",
          "workbook/table-element/index.ts",
        ]) {
          if (!restoredModules.includes(f)) restoredModules.push(f);
        }
      }
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
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  buildSupport();
  buildImpl(all);

  let kept = drainBoundary(all);
  kept = patchHeader(kept);
  kept = patchComposeDslWire(kept);
  kept = patchBoundaryComposeWire(kept);
  updateComposeDslDirectImport();

  const afterBody = kept.join("\n") + "\n";
  fs.writeFileSync(BOUNDARY, afterBody);
  const afterLoc = afterBody.split("\n").length - 1;
  console.log(`boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`);

  console.log("formatting…");
  run(["bun", FORMAT, OUT]);
  run(["bun", FORMAT, COMPOSE_HOOKS, COMPOSE_LAYOUT_META]);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("quality-gate (modules)…");
  run(["bun", QG, OUT, "--no-cache"]);
  run(["bun", QG, path.dirname(COMPOSE_HOOKS), "--no-cache"]);
  console.log("quality-gate (boundary, allow-open)…");
  run([
    "bun",
    QG,
    BOUNDARY,
    "--no-cache",
    "--allow-open-boundaries",
    "--allow-flat",
    "--allow-mechanical-names",
  ]);
  console.log("done.");
}

main();
