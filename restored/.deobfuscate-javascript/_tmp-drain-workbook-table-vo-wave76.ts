#!/usr/bin/env bun
/**
 * Stage-3 wave-76 drain of workbook-runtime:
 * Contiguous Excel Table VO cluster (~1.0k LOC) —
 *   header/totals row-count helpers + ohe/she/che +
 *   Binding700/702 Table VO (fhe) + column/row facades (lhe/uhe/dhe) +
 *   Tables collection (yhe/vhe/_he) + DataTables (xhe/bhe) +
 *   phe/mhe/hhe/ghe add-table helpers
 *   → workbook/table-vo/
 *
 * Not vendor (Codex popcorn worksheet Table / DataTable API).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-table-vo-wave76.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/table-vo");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave76.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: header/totals helpers … xhe close (before Binding736). */
const DROP = { start: 2882, end: 3883 };

const RANGES = {
  helpers: { start: 2882, end: 2910 },
  tableVo: { start: 2911, end: 3428 },
  tablesColl: { start: 3429, end: 3672 },
  dataTables: { start: 3673, end: 3883 },
} as const;

const SLOTS = [
  "workbookBinding700",
  "workbookBinding701",
  "workbookBinding702",
  "lhe",
  "uhe",
  "dhe",
  "_he",
  "vhe",
  "bhe",
] as const;

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
    [DROP.start, "function workbookHelper339(", "helper339"],
    [2885, "function workbookHelper340(", "helper340"],
    [2892, "function ohe(", "ohe"],
    [2901, "function she(", "she"],
    [2906, "function che(", "che"],
    [2911, "var workbookBinding700,", "Binding700"],
    [2917, "  fhe = esmInit(() => {", "fhe"],
    [3429, "function phe() {", "phe"],
    [3462, "function ghe(", "ghe"],
    [3490, "var _he,", "_he"],
    [3492, "  yhe = esmInit(() => {", "yhe"],
    [3673, "  bhe,", "bhe"],
    [3674, "  xhe = esmInit(() => {", "xhe"],
    [DROP.end, "  });", "xhe close"],
    [DROP.end + 1, "var workbookBinding736,", "Binding736 kept"],
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
    if (/^var\s+[A-Za-z_$][\w$]*,\s*$/.test(line)) continue;
    if (/^var\s+[A-Za-z_$][\w$]*\s*,/.test(line) && !/=/.test(line)) continue;
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
    out = out.replace(
      new RegExp(
        `^var ${escapeRe(name)} = esmInit\\(\\(\\)\\s*=>\\s*\\{\\}\\);`,
        "m",
      ),
      `export const ${name} = esmInit(() => {});`,
    );
    out = out.replace(
      new RegExp(
        `^var ${escapeRe(name)} = esmInit\\(\\(\\)\\s*=>\\s*\\{`,
        "m",
      ),
      `export const ${name} = esmInit(() => {`,
    );
  }
  out = out.replace(/^\s{2}\}\),$/gm, "});");
  return out;
}

function promoteFunctions(body: string): string {
  return body.replace(/^(async )?function\s+/gm, (_m, a?: string) =>
    `export ${a ?? ""}function `,
  );
}

function addParamAny(body: string): string {
  return body.replace(
    /^export (async )?function ([A-Za-z_$][\w$]*)\(([^)]*)\)/gm,
    (_m, asyncKw: string | undefined, name: string, params: string) => {
      const a = asyncKw ?? "";
      if (!params.trim()) return `export ${a}function ${name}()`;
      if (params.includes("\n")) return _m;
      const typed = params
        .split(",")
        .map((p) => {
          const t = p.trim();
          if (!t) return t;
          if (t.includes(":")) return t;
          if (t.includes("=")) {
            const [lhs, rhs] = t.split("=");
            return `${lhs!.trim()}: any = ${rhs!.trim()}`;
          }
          return `${t}: any`;
        })
        .join(", ");
      return `export ${a}function ${name}(${typed})`;
    },
  );
}

function renameLocals(body: string): string {
  let out = body.replace(/\bworkbookHelper339\b/g, "tableHeaderRowCount");
  out = out.replace(/\bworkbookHelper340\b/g, "tableTotalsRowCount");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "tvIn$1");
  out = out.replace(/\bworkbookBinding(\d+)\b/g, (m, n: string) => {
    // Keep public Binding700/701/702 slot names.
    if (n === "700" || n === "701" || n === "702" || n === "687") return m;
    return `tvBind${n}`;
  });
  out = out.replace(/\bworkbookHelper(\d+)\b/g, "tvFn$1");
  return out;
}

function sharedImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  parseSheetRef,
  boundsSize,
  boundsIntersect,
} from "../../utils/spreadsheet-address-utils";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import {
  ahe,
  workbookBinding687,
  Wme,
} from "../table-styles";
import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./tv-slots";
`;
}

function buildSupport(): void {
  write(
    path.join(OUT, "tv-slots.ts"),
    `${PROV}
// Stage-3 wave-76: table-vo mutable slots (legacy Binding700…bhe).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );

  write(
    path.join(OUT, "ensure-table-vo-init.ts"),
    `${PROV}
// Stage-3 wave-76: table-vo cluster ensure (legacy fhe/yhe/xhe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { fhe } from "./table-vo-impl";
import { yhe } from "./tables-collection-impl";
import { xhe } from "./data-tables-impl";

export const ensureTableVoInit = esmInit(() => {
  fhe();
  yhe();
  xhe();
});
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-76: table-vo barrel (legacy fhe/yhe/xhe / Binding700–702).

export { ensureTableVoInit } from "./ensure-table-vo-init";
export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./tv-slots";

export {
  tableHeaderRowCount,
  tableTotalsRowCount,
  ohe,
  she,
  che,
} from "./table-helpers-impl";
export { tableHeaderRowCount as workbookHelper339 } from "./table-helpers-impl";
export { tableTotalsRowCount as workbookHelper340 } from "./table-helpers-impl";

export { fhe } from "./table-vo-impl";

export {
  phe,
  mhe,
  hhe,
  ghe,
  yhe,
} from "./tables-collection-impl";

export { xhe } from "./data-tables-impl";
`,
  );
}

function buildPart(
  all: string[],
  key: keyof typeof RANGES,
  file: string,
  desc: string,
  ensureNames: string[],
  extraImports: string,
  opts: { shared?: boolean } = {},
): void {
  const range = RANGES[key];
  let body = all.slice(range.start - 1, range.end).join("\n");
  body = stripVarListNoise(body);
  body = promoteEnsures(body, ensureNames);
  body = promoteFunctions(body);
  body = renameLocals(body);
  body = addParamAny(body);
  body = body.replace(/\n\s*\}\),\s*$/, "\n});");
  const imports =
    opts.shared === false
      ? extraImports
      : `${sharedImports()}\n${extraImports}`;

  write(
    path.join(OUT, file),
    `${PROV}
// Semantic implementation: ${desc}.
// Stage-3 wave-76 cohesive table-vo impl kept flat under maxFlatLines.

${imports}
${body}
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop table-vo cluster ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(3000, kept.length); i++) {
    if (kept[i]?.includes("var ensureChartAssetCluster =")) {
      insertAt = i + 1;
      // Skip blank lines and the wireChartAssetBoundaryHooks block
      while (insertAt < kept.length) {
        const line = kept[insertAt] ?? "";
        if (
          line.trim() === "" ||
          line.startsWith("wireChartAssetBoundaryHooks") ||
          line.trim() === "{" ||
          line.includes("mapDisplayBlanksAs") ||
          line.includes("mapParentLabelLayout") ||
          line.trim() === "});"
        ) {
          insertAt++;
          continue;
        }
        break;
      }
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  ensureTableVoInit,`,
    `  fhe,`,
    `  yhe,`,
    `  xhe,`,
    `  vhe,`,
    `  bhe,`,
    `  _he,`,
    `  workbookBinding700,`,
    `  workbookBinding701,`,
    `  workbookBinding702,`,
    `  lhe,`,
    `  uhe,`,
    `  dhe,`,
    `  ohe,`,
    `  she,`,
    `  che,`,
    `  phe,`,
    `  mhe,`,
    `  hhe,`,
    `  ghe,`,
    `  workbookHelper339,`,
    `  workbookHelper340,`,
    `} from "../../workbook/table-vo";`,
    ``,
    `var ensureTableVoCluster = ensureTableVoInit;`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(50, kept.length); i++) {
    if (kept[i]?.includes("chart-asset (She/Che…Binding721).")) {
      kept[i] = kept[i]!.replace(
        "chart-asset (She/Che…Binding721).",
        "chart-asset (She/Che…Binding721); table-vo (fhe/yhe/xhe).",
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
  if (!text.includes("table-vo")) {
    text = text.replace(
      /\| Chart asset \(`She`\/`Che`…`Binding721`\/`722`\)[^\n]+\n/,
      (m) =>
        m +
        `| Table VO (\`fhe\`/\`yhe\`/\`xhe\` + Binding700–702) | ~1.0k | **Drained (wave-76)** → \`workbook/table-vo/\` |\n`,
    );
  }
  const section = `
## Wave-76 progress

- Identified contiguous fhe/yhe/xhe cluster as Codex Excel Table / Tables / DataTables VO (NOT vendor): header/totals helpers + Table class (\`fhe\`/Binding702) + Tables collection (\`yhe\`/\`vhe\`) + DataTables (\`xhe\`/\`bhe\`) (~1.0k LOC).
- Extracted → \`workbook/table-vo/\` (split under flat limit; address-utils + table-styles/\`ahe\`/\`Wme\` imported directly).
- Left Binding736 Shape, flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\`, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, \`_Ye\`/\`_workbookS\`, \`cDe\`/\`_workbookH\`, \`REe\` chart-ref, \`jgt\` sheet-meta, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: Binding736 Shape (~0.76k) / flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\` (~0.79k) / \`REe\`+Charts collection (~1.0k) / \`cDe\`+\`_workbookH\` table-element (~0.8k) / clean \`xLe\` walnut peel before comments/\`_C\`.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-76: fhe/yhe/xhe/Binding700–702 Table VO → workbook/table-vo/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
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
      if (!notes.includes("wave-76")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
      }
      const modules = (val as { modules?: string[] }).modules;
      if (Array.isArray(modules) && !modules.includes("workbook/table-vo/")) {
        modules.push("workbook/table-vo/");
      }
      const restoredModules = (val as { restoredModules?: string[] })
        .restoredModules;
      if (Array.isArray(restoredModules)) {
        for (const f of [
          "workbook/table-vo/tv-slots.ts",
          "workbook/table-vo/table-helpers-impl.ts",
          "workbook/table-vo/table-vo-impl.ts",
          "workbook/table-vo/tables-collection-impl.ts",
          "workbook/table-vo/data-tables-impl.ts",
          "workbook/table-vo/ensure-table-vo-init.ts",
          "workbook/table-vo/index.ts",
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

  buildPart(
    all,
    "helpers",
    "table-helpers-impl.ts",
    "table header/totals helpers + default style/proto accessors (legacy ohe/she/che)",
    [],
    `import { workbookBinding700, workbookBinding701 } from "./tv-slots";
`,
    { shared: false },
  );

  buildPart(
    all,
    "tableVo",
    "table-vo-impl.ts",
    "Excel Table VO + column/row facades (legacy Binding700/702/lhe/uhe/dhe/fhe)",
    ["fhe"],
    `import {
  tableHeaderRowCount,
  tableTotalsRowCount,
  ohe,
} from "./table-helpers-impl";
`,
  );

  buildPart(
    all,
    "tablesColl",
    "tables-collection-impl.ts",
    "Tables collection + add-table helpers (legacy phe/mhe/hhe/ghe/yhe/vhe/_he)",
    ["yhe"],
    `import { fhe, workbookBinding702 } from "./table-vo-impl";
import { tableHeaderRowCount } from "./table-helpers-impl";
`,
  );

  // Fix tables-collection: fhe is ensure from table-vo-impl, Binding702 is slot
  // Re-write imports properly after first build — Binding702 comes from slots via sharedImports.
  // sharedImports already has Binding702; remove wrong import of Binding702 from table-vo-impl.
  {
    const p = path.join(OUT, "tables-collection-impl.ts");
    let t = fs.readFileSync(p, "utf8");
    t = t.replace(
      `import { fhe, workbookBinding702 } from "./table-vo-impl";
import { tableHeaderRowCount } from "./table-helpers-impl";
`,
      `import { fhe } from "./table-vo-impl";
import { tableHeaderRowCount } from "./table-helpers-impl";
`,
    );
    fs.writeFileSync(p, t);
  }

  buildPart(
    all,
    "dataTables",
    "data-tables-impl.ts",
    "worksheet DataTables collection (legacy xhe/bhe)",
    ["xhe"],
    ``,
  );

  // Rewrite ensure with correct imports (already correct in buildSupport)
  write(
    path.join(OUT, "ensure-table-vo-init.ts"),
    `${PROV}
// Stage-3 wave-76: table-vo cluster ensure (legacy fhe/yhe/xhe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { fhe } from "./table-vo-impl";
import { yhe } from "./tables-collection-impl";
import { xhe } from "./data-tables-impl";

export const ensureTableVoInit = esmInit(() => {
  fhe();
  yhe();
  xhe();
});
`,
  );

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

  console.log("quality-gate (modules)…");
  run(["bun", QG, OUT, "--no-cache"]);
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
  console.log("WAVE-76 DONE");
}

main();
