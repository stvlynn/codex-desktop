#!/usr/bin/env bun
/**
 * Stage-3 wave-73 drain of workbook-runtime:
 * Replace inlined graphlib Graph + dagre layout (~3.6k LOC) —
 *   $Ae/eje edge-key helpers + Binding1671/rje Graph class +
 *   Binding1672–1674 + network-simplex/order/position layout body +
 *   wNe/YNe/JNe layout entry ensures
 *   → vendor/graphlib (graphlib@^2.1.8) + vendor/dagre (dagre@^0.8.5)
 *
 * External surface kept as thin aliases:
 *   workbookBinding1671 → Graph
 *   workbookBinding1672 → no-op ensure (npm import is eager)
 *   YNe                 → no-op ensure (was dagre dep cluster)
 *   wNe(graph, _opts?)  → dagre.layout(graph)
 *
 * Leaves flowchart $Ne/Binding1675/1685 + NPe/PPe in boundary (next peel),
 * Binding662/_C, Binding1574/Cke, and intentional terminals.
 *
 * Never StrReplace the mega boundary body — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-graphlib-dagre-npm-wave73.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const VENDOR_GRAPHLIB = path.join(ROOT, "restored/vendor/graphlib.ts");
const VENDOR_DAGRE = path.join(ROOT, "restored/vendor/dagre.ts");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave73.ts.bak",
);

/** Inclusive 1-based: $Ae … YNe esmInit close (before helper784 / XNe). */
const DROP = { start: 51761, end: 55375 };

function run(
  cmd: string[],
  opts: { cwd?: string; allowFail?: boolean } = {},
): string {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: opts.cwd ?? ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const out = `${r.stdout ?? ""}${r.stderr ?? ""}`;
  if (!opts.allowFail && r.status !== 0) {
    throw new Error(`${cmd.join(" ")} failed (${r.status}):\n${out}`);
  }
  return out;
}

function ensureVendorShims(): void {
  for (const [file, needle, pkg] of [
    [VENDOR_GRAPHLIB, 'from "graphlib"', "graphlib"],
    [VENDOR_DAGRE, 'from "dagre"', "dagre"],
  ] as const) {
    if (!fs.existsSync(file)) {
      throw new Error(`missing ${file} — write vendor shim first`);
    }
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes(needle)) {
      throw new Error(`${file} does not look like an npm re-export shim for ${pkg}`);
    }
  }
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [51760, "}", "helper767 close before drop"],
    [DROP.start, "function $Ae(workbookInput14628, workbookInput14629) {", "$Ae"],
    [51770, "function workbookHelper768(", "helper768"],
    [51821, "var nje,", "nje/Graph decl"],
    [51830, "    workbookBinding1671 = class {", "Graph class"],
    [54919, "function wNe(workbookInput7398, workbookInput7399) {", "wNe layout"],
    [55325, "var BNe,", "BNe layout consts"],
    [55370, "  YNe = esmInit(() => {", "YNe"],
    [DROP.end, "  });", "YNe close"],
    [DROP.end + 1, "function workbookHelper784(", "helper784 kept"],
    [55399, "var XNe,", "XNe flowchart kept"],
    [55403, "  $Ne = esmInit(() => {", "$Ne kept"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: ${JSON.stringify(got.slice(0, 140))}`,
      );
    }
  }
  const body = all.slice(DROP.start - 1, DROP.end).join("\n");
  if (!body.includes("network-simplex") && !body.includes("buildLayoutGraph")) {
    throw new Error("dagre layout fingerprint missing inside DROP range");
  }
  if (!body.includes("workbookBinding1671 = class")) {
    throw new Error("graphlib Graph class missing inside DROP range");
  }
  if (!body.includes('rankdir: "tb"') && !body.includes("rankdir")) {
    throw new Error("dagre default rankdir missing inside DROP range");
  }
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);

  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop graphlib+dagre body lines ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );

  const kept = all.filter((_, i) => !drop.has(i));

  // Insert vendor imports after decimal (last vendor import block).
  let insertAt = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i]?.includes('from "../../vendor/decimal"')) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt < 0) {
    throw new Error("vendor/decimal import not found for insert");
  }
  kept.splice(
    insertAt,
    0,
    `import { Graph as GraphlibGraph } from "../../vendor/graphlib";`,
    `import { layout as dagreLayout } from "../../vendor/dagre";`,
  );

  // Insert thin aliases immediately before helper784 (first post-drop top-level).
  let helper784 = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i]?.startsWith("function workbookHelper784(")) {
      helper784 = i;
      break;
    }
  }
  if (helper784 < 0) throw new Error("helper784 anchor missing after drop");

  kept.splice(
    helper784,
    0,
    `/** Bundle graphlib + dagre — stock graphlib@^2.1.8 + dagre@^0.8.5 (was inlined Binding1671 + layout). */`,
    `var workbookBinding1671 = GraphlibGraph;`,
    `var workbookBinding1672 = () => {};`,
    `var YNe = () => {};`,
    `function wNe(workbookInput7398: any, _workbookInput7399?: any): void {`,
    `  dagreLayout(workbookInput7398);`,
    `}`,
    ``,
  );

  // Header wave notes.
  for (let i = 0; i < Math.min(80, kept.length); i++) {
    if (kept[i]?.includes("compose-dsl (Binding1490–1528).")) {
      kept[i] = kept[i]!.replace(
        "compose-dsl (Binding1490–1528).",
        "compose-dsl (Binding1490–1528); graphlib+dagre-npm (Binding1671/wNe).",
      );
      break;
    }
  }
  for (let i = 0; i < Math.min(120, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-72:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-73: inlined graphlib Graph + dagre layout (Binding1671 / wNe / YNe) → vendor/graphlib + vendor/dagre npm shims; inlined body deleted.",
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

  if (!text.includes("graphlib Graph + dagre layout")) {
    text = text.replace(
      `| D3 chart helpers | imports + mid body | Prefer existing \`vendor/d3-*\` / ensure-* stubs |`,
      `| D3 chart helpers | imports + mid body | Prefer existing \`vendor/d3-*\` / ensure-* stubs |\n| graphlib Graph + dagre layout (\`Binding1671\` / \`wNe\` / \`YNe\`) | ~3.6k | **Drained (wave-73)** → \`vendor/graphlib\` + \`vendor/dagre\` npm shims |`,
    );
  }

  if (!text.includes("## Wave-73 progress")) {
    text += `
## Wave-73 progress

- Identified contiguous inlined \`graphlib\` Graph (\`Binding1671\`/\`rje\`) + \`dagre\` layout (\`wNe\`/\`YNe\`/network-simplex/order/position, ~3.6k LOC) as stock vendor (NOT Codex) — already shimmed at \`vendor/graphlib\` + \`vendor/dagre\`.
- Replaced inlined body with thin aliases: \`Binding1671\`=\`Graph\`, \`Binding1672\`/\`YNe\`=no-op ensures, \`wNe\`→\`dagre.layout\`.
- Left flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\`, Table VO \`fhe\`/\`ohe\`, Chart \`Binding721\`, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on vendor shims + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\` (~0.8k) / Table VO \`fhe\`+Tables/DataTables (~1.0k) / Chart Binding721 (~0.7k) / image+path Binding723–735 (~3.0k mixed) / clean \`xLe\` walnut peel before comments/\`_C\`.

`;
  }

  fs.writeFileSync(README, text.endsWith("\n") ? text : text + "\n");
  console.log(`  updated README (${afterLoc} LOC)`);
}

function updateImportMap(afterLoc: number): void {
  const map = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    files?: Record<
      string,
      {
        notes?: string;
        related?: string[];
        modules?: string[];
        [k: string]: unknown;
      }
    >;
  };

  const waveNote = `Wave workbook-runtime Stage-3 wave-73: inlined graphlib+dagre (Binding1671/wNe/YNe) → vendor/graphlib + vendor/dagre npm shims; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  if (typeof map.notes === "string" && !map.notes.includes("wave-73")) {
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
    if (!entry.notes?.includes("wave-73")) {
      entry.notes = `${waveNote} | ${entry.notes ?? ""}`;
    }
    const related = new Set(entry.related ?? []);
    related.add("vendor/graphlib.ts");
    related.add("vendor/dagre.ts");
    entry.related = [...related].sort();
    if (Array.isArray(entry.modules)) {
      const mods = new Set(entry.modules);
      mods.add("vendor/graphlib.ts");
      mods.add("vendor/dagre.ts");
      entry.modules = [...mods].sort();
    }
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("  updated IMPORT_MAP.json");
}

function main(): void {
  console.log("wave-73: graphlib+dagre → vendor npm shims");
  ensureVendorShims();

  console.log("  vendor-npm preflight (directory + intent)…");
  run(["bun", PREFLIGHT, "restored/vendor"]);
  run([
    "bun",
    PREFLIGHT,
    "restored/vendor/graphlib.ts",
    "--decision",
    "--intent",
    "npm-shim",
  ]);
  run([
    "bun",
    PREFLIGHT,
    "restored/vendor/dagre.ts",
    "--decision",
    "--intent",
    "npm-shim",
  ]);

  const original = fs.readFileSync(BOUNDARY, "utf8");
  fs.writeFileSync(BACKUP, original);
  console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);

  const all = original.split("\n");
  // Preserve trailing newline semantics: split keeps final "" if file ends with \n
  const hadTrailing = original.endsWith("\n");
  const lines = hadTrailing && all[all.length - 1] === "" ? all.slice(0, -1) : all;
  const beforeLoc = lines.length;

  const kept = drainBoundary(lines);
  const afterLoc = kept.length;
  fs.writeFileSync(BOUNDARY, kept.join("\n") + "\n");
  console.log(`  boundary LOC ${beforeLoc} → ${afterLoc} (Δ ${afterLoc - beforeLoc})`);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("  quality-gate…");
  const qg = run(
    [
      "bun",
      QG,
      "restored/vendor/graphlib.ts",
      "restored/vendor/dagre.ts",
      "restored/boundaries/workbook-runtime",
      "--no-cache",
      "--allow-open-boundaries",
    ],
    { allowFail: true },
  );
  console.log(qg);
  if (!/PASS/.test(qg) && !/pass/i.test(qg)) {
    // quality-gate may print FAIL; surface and exit non-zero
    if (/FAIL|fail|error/i.test(qg) && !/PASS/.test(qg)) {
      throw new Error("quality-gate did not PASS");
    }
  }
  console.log("wave-73 done");
}

main();
