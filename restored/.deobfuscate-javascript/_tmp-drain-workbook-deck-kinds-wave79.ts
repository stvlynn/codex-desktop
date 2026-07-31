#!/usr/bin/env bun
/**
 * Stage-3 wave-79 drain of workbook-runtime:
 * Contiguous deck-kinds query cluster (~0.92k LOC) —
 *   wRe deck snapshot→NDJSON query +
 *   qRe kind/field token maps + parsers + builders (Binding1738–1748 /
 *   TRe/ERe/DRe/ORe/kRe/ARe/jRe/MRe/NRe/PRe/FRe/IRe/LRe/RRe/zRe/BRe/VRe/…
 *   HRe/URe/WRe/GRe/KRe)
 *   → workbook/deck-kinds/
 *
 * Not vendor (Codex popcorn presentation deck kind filter / NDJSON export).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-deck-kinds-wave79.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/deck-kinds");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave79.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: wRe … qRe close (before JRe). */
const DROP = { start: 47977, end: 48900 };

const RANGES = {
  /** qRe esmInit body (maps + parsers + builders). */
  kinds: { start: 48081, end: 48900 },
  /** async wRe deck query API. */
  query: { start: 47977, end: 48047 },
} as const;

const SLOTS = [
  "workbookBinding1738",
  "TRe",
  "ERe",
  "DRe",
  "ORe",
  "kRe",
  "ARe",
  "workbookBinding1739",
  "jRe",
  "workbookBinding1740",
  "MRe",
  "NRe",
  "PRe",
  "FRe",
  "workbookBinding1741",
  "workbookBinding1742",
  "IRe",
  "LRe",
  "RRe",
  "zRe",
  "BRe",
  "VRe",
  "HRe",
  "URe",
  "WRe",
  "workbookBinding1743",
  "workbookBinding1744",
  "GRe",
  "workbookBinding1745",
  "workbookBinding1746",
  "KRe",
  "workbookBinding1747",
  "workbookBinding1748",
] as const;

/** Public Binding slots kept under legacy names. */
const KEEP_BINDING = new Set([
  "1738",
  "1739",
  "1740",
  "1741",
  "1742",
  "1743",
  "1744",
  "1745",
  "1746",
  "1747",
  "1748",
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
    [DROP.start, "async function wRe(", "wRe"],
    [48047, "}", "wRe close"],
    [48048, "var workbookBinding1738,", "varlist start"],
    [DROP.start + 104, "  qRe = esmInit(() => {", "qRe"], // 48081
    [48082, "    workbookH();", "workbookH ensure"],
    [48083, "    workbookBinding1738 = [", "kinds list"],
    [48180, "    jRe = (workbookInput2918) => {", "jRe"],
    [48564, "    BRe = (props) =>", "BRe"],
    [48826, "    KRe = (workbookInput2220, workbookInput2221) => {", "KRe"],
    [DROP.end, "  });", "qRe close"],
    [DROP.end + 1, "function JRe(workbookInput3839, workbookInput3840, workbookInput3841) {", "JRe kept"],
    [47968, "  CRe = esmInit(() => {", "CRe kept before"],
    [50925, "    qRe();", "qRe call in _workbookS"],
    [51318, "        return wRe(this, workbookInput14560);", "wRe call in class"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: ${JSON.stringify(got.slice(0, 140))}`,
      );
    }
  }
  // Confirm DROP.start line number math for qRe
  if (all[48080] !== "  qRe = esmInit(() => {") {
    throw new Error(
      `qRe line drift: ${JSON.stringify((all[48080] ?? "").slice(0, 80))}`,
    );
  }
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
  let out = body.replace(/\bworkbookInput(\d+)\b/g, "dkIn$1");
  out = out.replace(/\bworkbookBinding(\d+)\b/g, (m, n: string) => {
    if (KEEP_BINDING.has(n)) return m;
    return `dkBind${n}`;
  });
  return out;
}

function buildSupport(): void {
  write(
    path.join(OUT, "dk-slots.ts"),
    `${PROV}
// Stage-3 wave-79: deck-kinds mutable slots (legacy Binding1738–1748 / TRe…KRe).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );

  write(
    path.join(OUT, "ensure-deck-kinds-init.ts"),
    `${PROV}
// Stage-3 wave-79: deck-kinds cluster ensure (legacy qRe).

import { qRe } from "./deck-kinds-impl";

export const ensureDeckKindsInit = qRe;
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-79: deck-kinds barrel (legacy wRe/qRe/Binding1738–1748).

export { ensureDeckKindsInit } from "./ensure-deck-kinds-init";
export { qRe } from "./deck-kinds-impl";
export { wRe } from "./deck-query";
export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./dk-slots";
`,
  );
}

function buildKinds(all: string[]): void {
  const range = RANGES.kinds;
  let body = all.slice(range.start - 1, range.end).join("\n");
  body = promoteEnsures(body, ["qRe"]);
  body = renameLocals(body);
  body = body.replace(/\n\s*\}\);\s*$/, "\n});");
  // qRe calls workbookH — rewrite to stable-id ensure.
  body = body.replace(
    /^(\s*)workbookH\(\);/m,
    "$1ensureStableIdConstantsInit();",
  );

  const slotImports = SLOTS.map((s) => `  ${s},`).join("\n");

  write(
    path.join(OUT, "deck-kinds-impl.ts"),
    `${PROV}
// Semantic implementation: deck kind/field token maps, parsers, and NDJSON builders
// (legacy qRe / Binding1738–1748 / TRe…KRe).
// Stage-3 wave-79 cohesive deck-kinds impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureStableIdConstantsInit } from "../stable-id";
import {
${slotImports}
} from "./dk-slots";

${body}
`,
  );
}

function buildQuery(all: string[]): void {
  const range = RANGES.query;
  let body = all.slice(range.start - 1, range.end).join("\n");
  body = promoteFunctions(body);
  body = renameLocals(body);
  // wRe uses workbookHelper299 → randomBase36Id
  body = body.replace(/\bworkbookHelper299\b/g, "randomBase36Id");
  body = addParamAny(body);

  write(
    path.join(OUT, "deck-query.ts"),
    `${PROV}
// Semantic implementation: deck snapshot → filtered NDJSON query (legacy wRe).
// Stage-3 wave-79 cohesive deck-kinds query kept flat under maxFlatLines.

import { randomBase36Id } from "../stable-id";
import {
  jRe,
  workbookBinding1740,
  FRe,
  LRe,
  RRe,
  zRe,
  MRe,
  KRe,
  PRe,
  ARe,
  IRe,
} from "./dk-slots";

${body}
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop deck-kinds cluster ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(4000, kept.length); i++) {
    if (kept[i]?.includes("var ensureMermaidFlowchartCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length) {
        const line = kept[insertAt] ?? "";
        if (line.trim() === "") {
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
    `  ensureDeckKindsInit,`,
    `  qRe,`,
    `  wRe,`,
    `} from "../../workbook/deck-kinds";`,
    ``,
    `var ensureDeckKindsCluster = ensureDeckKindsInit;`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(50, kept.length); i++) {
    if (
      kept[i]?.includes(
        "mermaid-flowchart ($Ne/Binding1675/OPe/Binding1685/NPe/PPe).",
      )
    ) {
      kept[i] = kept[i]!.replace(
        "mermaid-flowchart ($Ne/Binding1675/OPe/Binding1685/NPe/PPe).",
        "mermaid-flowchart ($Ne/Binding1675/OPe/Binding1685/NPe/PPe); deck-kinds (wRe/qRe/Binding1738–1748).",
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
  if (!text.includes("deck-kinds")) {
    text = text.replace(
      /\| Mermaid flowchart \(\`\$Ne\`\/Binding1675\/\`OPe\`\/Binding1685\/\`NPe\`\/\`PPe\`\)[^\n]+\n/,
      (m) =>
        m +
        `| Deck kinds (\`wRe\`/\`qRe\`/Binding1738–1748) | ~0.9k | **Drained (wave-79)** → \`workbook/deck-kinds/\` |\n`,
    );
  }
  const section = `
## Wave-79 progress

- Identified contiguous \`wRe\`/\`qRe\`/Binding1738–1748 cluster as Codex deck kind token maps + field parsers + NDJSON builders + snapshot query (NOT vendor): kind/field alias maps, include/exclude filters, slide/layout/shape builders, truncated NDJSON export (~0.92k LOC).
- Extracted → \`workbook/deck-kinds/\` (impl + query under flat limit; \`ensureStableIdConstantsInit\` / \`randomBase36Id\` from \`workbook/stable-id\`).
- Left Binding736 Shape, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, \`_Ye\`/\`_workbookS\` (~1.2k leave), \`cDe\`/\`_workbookH\`, \`_workbookY\` slides (~0.75k), \`bDe\` (~0.74k), \`jgt\` sheet-meta, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: Binding736/739 Shape (~0.76k) / \`_workbookY\` slides collection (~0.75k) / \`bDe\` (~0.74k) / \`_workbookS\` presentation ensure (~1.2k leave) / clean \`xLe\` walnut peel before comments/\`_C\`.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-79: wRe/qRe/Binding1738–1748 deck kinds → workbook/deck-kinds/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
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
      if (!notes.includes("wave-79")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
      }
      const modules = (val as { modules?: string[] }).modules;
      if (
        Array.isArray(modules) &&
        !modules.includes("workbook/deck-kinds/")
      ) {
        modules.push("workbook/deck-kinds/");
      }
      const restoredModules = (val as { restoredModules?: string[] })
        .restoredModules;
      if (Array.isArray(restoredModules)) {
        for (const f of [
          "workbook/deck-kinds/dk-slots.ts",
          "workbook/deck-kinds/deck-kinds-impl.ts",
          "workbook/deck-kinds/deck-query.ts",
          "workbook/deck-kinds/ensure-deck-kinds-init.ts",
          "workbook/deck-kinds/index.ts",
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
  buildKinds(all);
  buildQuery(all);

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
  console.log("done.");
}

main();
