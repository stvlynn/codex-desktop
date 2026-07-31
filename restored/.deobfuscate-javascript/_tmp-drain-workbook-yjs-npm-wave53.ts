#!/usr/bin/env bun
/**
 * Stage-3 wave-53 drain of workbook-runtime:
 * Replace inlined Yjs + lib0 (`workbookBinding1`…`zte` + `Bte` + `no`/`Binding187`–`331`,
 * ~9.5k LOC) with vendor/yjs npm shim (yjs@13.6.27).
 *
 * External surface kept as thin aliases:
 *   _o              → Doc
 *   is              → UndoManager
 *   workbookBinding265 → Array
 *   workbookBinding266 → Map
 *   workbookBinding210 → applyUpdate
 *   workbookBinding211 → encodeStateAsUpdate
 *   os              → decodeUpdate
 *   workbookAt      → mergeUpdates
 *   workbookKt      → no-op init (npm import is eager)
 *
 * Leaves Binding662/_C, gae/workbookEt, ooe, chart Zae/Qae, `_workbookEt`/`Qse`.
 *
 * Never StrReplace the mega boundary body — line-range keep/drop only.
 * Stay in workbook boundary + vendor shims only.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-yjs-npm-wave53.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const VENDOR_YJS = path.join(ROOT, "restored/vendor/yjs.ts");
const README = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/README.md",
);
const IMPORT_MAP = path.join(ROOT, "restored/IMPORT_MAP.json");
const QG = path.join(
  ROOT,
  ".agents/skills/deobfuscate-javascript/scripts/quality-gate.ts",
);
const PREFLIGHT = path.join(
  ROOT,
  ".agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts",
);
const BACKUP = path.join(
  ROOT,
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave53.ts.bak",
);

/** Inclusive 1-based: Binding1 … end of Yjs `no` esmInit. */
const DROP = { start: 1344, end: 10834 };

function run(
  cmd: string[],
  opts: { cwd?: string; allowFail?: boolean } = {},
): string {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: opts.cwd ?? ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (!opts.allowFail && r.status !== 0) {
    throw new Error(
      `${cmd.join(" ")} failed (${r.status}):\n${r.stdout}\n${r.stderr}`,
    );
  }
  return (r.stdout ?? "") + (r.stderr ?? "");
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [1343, 'import { j as mergeJ, n as mergeN } from "../lodash-merge-internals";', "pre-Binding1 import"],
    [1344, "var workbookBinding1,", "Binding1"],
    [3829, "function* Bte(props) {", "Bte"],
    [3883, "var no,", "no/Yjs"],
    [10828, '    workbookBinding331 = "__ $YJS$ __";', "YJS marker"],
    [10834, "  });", "Yjs esmInit close"],
    [10835, "function workbookHelper24(workbookInput15285, workbookInput15286) {", "post-Yjs helper24"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: got ${JSON.stringify(got.slice(0, 140))}`,
      );
    }
  }
  const body = all.slice(DROP.start - 1, DROP.end).join("\n");
  if (!body.includes("Yjs was already imported")) {
    throw new Error("Yjs fingerprint missing inside DROP range");
  }
  if (!body.includes("__ $YJS$ __")) {
    throw new Error("YJS global marker missing inside DROP range");
  }
}

function ensureVendorShim(): void {
  if (!fs.existsSync(VENDOR_YJS)) {
    throw new Error(`missing ${VENDOR_YJS} — write vendor/yjs.ts first`);
  }
  const text = fs.readFileSync(VENDOR_YJS, "utf8");
  if (!text.includes('from "yjs"') || !text.includes("decodeUpdate")) {
    throw new Error("vendor/yjs.ts does not look like an npm re-export shim");
  }
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);

  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop Yjs+lib0 body lines ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );

  const kept = all.filter((_, i) => !drop.has(i));

  // Insert vendor import after bessel (or ssf) import.
  let insertAt = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i]?.includes('from "../../vendor/bessel"')) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt < 0) {
    for (let i = 0; i < kept.length; i++) {
      if (kept[i]?.includes('from "../../vendor/ssf"')) {
        insertAt = i + 1;
        break;
      }
    }
  }
  if (insertAt < 0) {
    throw new Error("vendor/ssf or vendor/bessel import not found for insert");
  }
  kept.splice(
    insertAt,
    0,
    `import {`,
    `  Array as YArray,`,
    `  Doc as YDoc,`,
    `  Map as YMap,`,
    `  UndoManager as YUndoManager,`,
    `  applyUpdate as yApplyUpdate,`,
    `  decodeUpdate as yDecodeUpdate,`,
    `  encodeStateAsUpdate as yEncodeStateAsUpdate,`,
    `  mergeUpdates as yMergeUpdates,`,
    `} from "../../vendor/yjs";`,
  );

  // Insert thin aliases immediately before helper24 (first post-drop top-level).
  let helper24 = -1;
  for (let i = 0; i < kept.length; i++) {
    if (
      kept[i]?.startsWith(
        "function workbookHelper24(workbookInput15285, workbookInput15286) {",
      )
    ) {
      helper24 = i;
      break;
    }
  }
  if (helper24 < 0) throw new Error("helper24 anchor missing after drop");

  kept.splice(
    helper24,
    0,
    `/** Bundle Yjs — stock yjs@13.6.27 (was inlined Binding1–331 / lib0+Yjs). */`,
    `var _o = YDoc;`,
    `var is = YUndoManager;`,
    `var workbookBinding265 = YArray;`,
    `var workbookBinding266 = YMap;`,
    `var workbookBinding210 = yApplyUpdate;`,
    `var workbookBinding211 = yEncodeStateAsUpdate;`,
    `var os = yDecodeUpdate;`,
    `var workbookAt = yMergeUpdates;`,
    `var workbookKt = () => {};`,
    ``,
  );

  // Header wave notes.
  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (
      kept[i]?.startsWith(
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme",
      )
    ) {
      kept[i] =
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm.";
    }
  }
  for (let i = 0; i < Math.min(120, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-52:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-53: inlined Yjs+lib0 (Binding1–331 / no / Bte) → vendor/yjs npm shim (yjs@13.6.27); inlined body deleted.",
      );
      break;
    }
  }

  return kept;
}

function updateReadme(newLoc: number): void {
  let text = fs.readFileSync(README, "utf8");

  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(newLoc / 1000).toFixed(1)}k LOC remaining)`,
  );

  if (!text.includes("Yjs (`Binding1`")) {
    text = text.replace(
      `| PivotLayout/cache hydrate (Binding334/wne + Cne/el/332/333 + helper24/hre) | ~0.37k | **Drained (wave-52)** → \`workbook/pivot-table/\` + \`workbook/pivot-caches/\` |`,
      `| PivotLayout/cache hydrate (Binding334/wne + Cne/el/332/333 + helper24/hre) | ~0.37k | **Drained (wave-52)** → \`workbook/pivot-table/\` + \`workbook/pivot-caches/\`\n| Yjs + lib0 (\`Binding1\`–\`331\` / \`no\` / \`Bte\`) | ~9.5k | **Drained (wave-53)** → \`vendor/yjs\` npm shim (\`yjs@13.6.27\`) |`,
    );
  }

  if (!text.includes("## Wave-53 progress")) {
    text += `
## Wave-53 progress

- Replaced inlined Yjs + lib0 (\`workbookBinding1\`…\`zte\` + \`Bte\` + \`no\`/\`Binding187\`–\`331\`, ~9.5k LOC) with \`vendor/yjs\` npm shim (\`yjs@13.6.27\`).
- Kept thin boundary aliases for external CRDT surface: \`_o\`=\`Doc\`, \`is\`=\`UndoManager\`, \`Binding265\`=\`Array\`, \`Binding266\`=\`Map\`, \`Binding210\`=\`applyUpdate\`, \`Binding211\`=\`encodeStateAsUpdate\`, \`os\`=\`decodeUpdate\`, \`workbookAt\`=\`mergeUpdates\`, \`workbookKt\`=no-op init.
- Left Binding662/\`_C\`, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on vendor shim + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${newLoc}.
- Next: contiguous post-gae residual / worksheet core / chart proto neighbors, or Binding662/\`_C\` when finally clean; continue scanning for stock vendor fingerprints (e.g. THREE remnants).

`;
  }

  fs.writeFileSync(README, text.endsWith("\n") ? text : text + "\n");
  console.log(`  updated README (${newLoc} LOC)`);
}

function updateImportMap(newLoc: number): void {
  const raw = fs.readFileSync(IMPORT_MAP, "utf8");
  const map = JSON.parse(raw) as {
    notes?: string;
    files?: Record<
      string,
      {
        notes?: string;
        related?: string[];
        [k: string]: unknown;
      }
    >;
  };

  const waveNote =
    "Wave workbook-runtime Stage-3 wave-53: inlined Yjs+lib0 → vendor/yjs npm shim.";
  if (typeof map.notes === "string" && !map.notes.includes("wave-53")) {
    map.notes = `${waveNote} | ${map.notes}`;
  }

  const entryKey = Object.keys(map.files ?? {}).find(
    (k) =>
      k.includes("workbook-C49Dgk1_") ||
      (map.files?.[k] as { restored?: string } | undefined)?.restored ===
        "boundaries/workbook-runtime/index.ts",
  );
  if (entryKey && map.files?.[entryKey]) {
    const entry = map.files[entryKey]!;
    const note =
      ` | Stage-3 wave-53: Yjs+lib0 Binding1–331/no/Bte → vendor/yjs (yjs@13.6.27); boundary remains open (~${(newLoc / 1000).toFixed(1)}k LOC).`;
    if (!entry.notes?.includes("wave-53")) {
      entry.notes = (entry.notes ?? "") + note;
    }
    const related = new Set(entry.related ?? []);
    related.add("vendor/yjs.ts");
    entry.related = [...related].sort();
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("  updated IMPORT_MAP.json");
}

function main(): void {
  console.log("wave-53: Yjs+lib0 → vendor/yjs npm shim");
  ensureVendorShim();

  console.log("  vendor-npm preflight (directory + intent)…");
  run(["bun", PREFLIGHT, "restored/vendor"]);
  run([
    "bun",
    PREFLIGHT,
    "restored/vendor/yjs.ts",
    "--decision",
    "--intent",
    "npm-shim",
  ]);

  const before = fs.readFileSync(BOUNDARY, "utf8");
  fs.writeFileSync(BACKUP, before);
  console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);

  const all = before.split("\n");
  // preserve trailing newline semantics
  if (all.length && all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`  boundary before: ${beforeLoc} lines`);

  const kept = drainBoundary(all);
  fs.writeFileSync(BOUNDARY, kept.join("\n") + "\n");
  const afterLoc = kept.length;
  console.log(
    `  boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`,
  );

  updateReadme(afterLoc);
  updateImportMap(afterLoc);

  console.log("  quality-gate vendor/yjs…");
  run(["bun", QG, "restored/vendor/yjs.ts", "--allow-flat", "--no-cache"]);

  console.log("  quality-gate boundary (--allow-open-boundaries)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("  vendor-npm preflight (post)…");
  run(["bun", PREFLIGHT, "restored/vendor"]);

  console.log("DONE wave-53");
}

main();
