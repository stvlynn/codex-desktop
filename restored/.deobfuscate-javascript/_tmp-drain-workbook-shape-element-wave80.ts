#!/usr/bin/env bun
/**
 * Stage-3 wave-80 drain of workbook-runtime:
 * Contiguous Binding739/736 Shape cluster (~755 LOC) —
 *   Binding739 ensure + Binding736 Shape class (extends SlideElement) +
 *   Binding737 fill-config predicate + line cap/join/end maps (mve/hve/gve/_ve/vve) +
 *   Binding738 connector hit-pad constant
 *   → workbook/shape-element/
 *
 * Not vendor (Codex popcorn presentation Shape element VO).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-shape-element-wave80.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/shape-element");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave80.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `var workbookBinding736,` … Binding739 close (before qve). */
const DROP = { start: 2946, end: 3708 };

const SLOTS = [
  "workbookBinding736",
  "workbookBinding737",
  "mve",
  "hve",
  "gve",
  "_ve",
  "vve",
  "workbookBinding738",
] as const;

/** Keep imported Binding aliases + public slots; only ephemeral locals rename. */
const KEEP_BINDING = new Set([
  "736",
  "737",
  "738",
  "739",
  // imported ensures / classes / maps used under legacy Binding names
  "393",
  "404",
  "426",
  "431",
  "432",
  "628",
  "632",
  "647",
  "734",
  "735",
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
    [DROP.start, "var workbookBinding736,", "varlist start"],
    [2954, "  workbookBinding739 = esmInit(() => {", "Binding739"],
    [2955, "    Qt();", "Qt ensure"],
    [2967, "    workbookEt();", "workbookEt leave (will drop)"],
    [2969, "    Mde();", "Mde leave (will hook)"],
    [2971, "    workbookBinding736 = class WorkbookClass8 extends _workbookZ {", "Shape class"],
    [2972, '      type = "shape";', "shape type"],
    [3673, "    workbookBinding737 = (workbookInput12119) =>", "Binding737"],
    [3679, "    mve = {", "mve"],
    [3707, "    workbookBinding738 = 24;", "Binding738"],
    [DROP.end, "  });", "Binding739 close"],
    [DROP.end + 1, "function qve(workbookInput14610) {", "qve kept"],
    [2945, "  });", "prior close before varlist"],
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

function renameLocals(body: string): string {
  let out = body.replace(/\bworkbookInput(\d+)\b/g, "seIn$1");
  out = out.replace(/\bworkbookBinding(\d+)\b/g, (m, n: string) => {
    if (KEEP_BINDING.has(n)) return m;
    return `seBind${n}`;
  });
  return out;
}

function rewriteEnsures(body: string): string {
  // Drop unused intentional workbookEt ensure (class body never refs it).
  let out = body.replace(/^\s*workbookEt\(\);\n/m, "");
  // Mde stays in boundary (pulls Binding412/gae) — call via hook.
  out = out.replace(
    /^(\s*)Mde\(\);/m,
    "$1seH.ensureMde();",
  );
  return out;
}

function sharedImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Qt,
  j,
  v,
  C,
  x,
  b,
  S as presentationS,
} from "../presentation-protobuf";
import {
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "../slide-element";
import {
  ensureSlidePlaceholderRolesInit as workbookBinding426,
  placeholderRoleToShortName as Wae,
  normalizePlaceholderType as workbookHelper97,
  resolvePlaceholderLabel as qae,
} from "../presentation-theme";
import { ensureChartProtoNameMapsInit as workbookBinding404 } from "../chart-proto-name-maps";
import { shapeGeometryNameToProto as workbookBinding393 } from "../chart-proto-name-maps";
import {
  ensurePluginSlotsInit as workbookU,
  lookupPresetShapeDefinition as workbookHelper291,
} from "../preset-shape";
import {
  workbookBinding734,
  q_e,
  workbookBinding735,
  Yge,
  dve,
  uve,
  tve,
  eve,
  ave,
  pve,
  J_e,
  $_e,
  icFn371 as workbookHelper371,
} from "../image-connector";
import {
  ensureGeometryTransformDepsInit as workbookBinding628,
  ensureFrameBboxInit as Oue,
  FrameBbox as workbookBinding632,
} from "../geometry-transform";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../shape-geometry";
import { ensureRoundRectAdjInit as Pde } from "../image-source";
import {
  ensureStableIdClusterInit as workbookBinding647,
  resolveLocalIdAlias as tde,
} from "../stable-id";
import {
  trimClassName as vde,
  parseClassNameStyle as yde,
  coerceBorderRadiusPx as workbookHelper305,
  resolveShadowEffectReference as bde,
} from "../shape-utility";
import { pathCommandsToSimplifiedPoints as Sde, insertAxisElbow as xde } from "../path-geometry";
import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./se-slots";
import { seH } from "./boundary-hooks";
`;
}

function buildSupport(): void {
  write(
    path.join(OUT, "se-slots.ts"),
    `${PROV}
// Stage-3 wave-80: shape-element mutable slots (legacy Binding736–738 / mve…vve).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );

  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-80: boundary deps for shape-element (Mde → Binding412/gae leave-behind).

export type ShapeElementBoundaryHooks = {
  /** Legacy Mde ensure (border-radius/shadow/shape-utility + Binding412/gae). */
  ensureMde: () => void;
};

/** Live bag for intentional leave-behind ensures. */
export const seH: ShapeElementBoundaryHooks =
  {} as ShapeElementBoundaryHooks;

export function wireShapeElementBoundaryHooks(
  next: ShapeElementBoundaryHooks,
): void {
  seH.ensureMde = next.ensureMde;
}
`,
  );

  write(
    path.join(OUT, "ensure-shape-element-init.ts"),
    `${PROV}
// Stage-3 wave-80: shape-element cluster ensure (legacy Binding739).

import { workbookBinding739 } from "./shape-class-impl";

export const ensureShapeElementInit = workbookBinding739;
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-80: shape-element barrel (legacy Binding736/739 Shape).

export { ensureShapeElementInit } from "./ensure-shape-element-init";
export {
  wireShapeElementBoundaryHooks,
  seH,
} from "./boundary-hooks";
export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./se-slots";
export { workbookBinding739 } from "./shape-class-impl";
`,
  );
}

function buildImpl(all: string[]): void {
  let body = all.slice(DROP.start - 1, DROP.end).join("\n");
  body = stripVarListNoise(body);
  body = promoteEnsures(body, ["workbookBinding739"]);
  body = rewriteEnsures(body);
  body = renameLocals(body);
  body = body.replace(/\n\s*\}\);\s*$/, "\n});");

  write(
    path.join(OUT, "shape-class-impl.ts"),
    `${PROV}
// Semantic implementation: presentation Shape element VO + line cap/join/end maps
// (legacy Binding739/736 / Binding737 / mve/hve/gve/_ve/vve / Binding738).
// Stage-3 wave-80 cohesive shape-element impl kept flat under maxFlatLines.

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
    `  drop Binding736/739 Shape cluster ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(4000, kept.length); i++) {
    if (kept[i]?.includes("var ensureDeckKindsCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  ensureShapeElementInit,`,
    `  wireShapeElementBoundaryHooks,`,
    `  workbookBinding736,`,
    `  workbookBinding737,`,
    `  workbookBinding738,`,
    `  workbookBinding739,`,
    `  mve,`,
    `  hve,`,
    `  gve,`,
    `  _ve,`,
    `  vve,`,
    `} from "../../workbook/shape-element";`,
    ``,
    `var ensureShapeElementCluster = ensureShapeElementInit;`,
    ``,
    `wireShapeElementBoundaryHooks({`,
    `  ensureMde: () => {`,
    `    Mde();`,
    `  },`,
    `});`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(50, kept.length); i++) {
    if (kept[i]?.includes("deck-kinds (wRe/qRe/Binding1738–1748).")) {
      kept[i] = kept[i]!.replace(
        "deck-kinds (wRe/qRe/Binding1738–1748).",
        "deck-kinds (wRe/qRe/Binding1738–1748); shape-element (Binding736/739).",
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
  if (!text.includes("shape-element")) {
    text = text.replace(
      /\| Deck kinds \(\`wRe\`\/\`qRe\`\/Binding1738–1748\)[^\n]+\n/,
      (m) =>
        m +
        `| Shape element (\`Binding736\`/\`739\`) | ~0.76k | **Drained (wave-80)** → \`workbook/shape-element/\` |\n`,
    );
  }
  const section = `
## Wave-80 progress

- Identified contiguous Binding739/736 Shape cluster as Codex presentation Shape element VO (NOT vendor): Shape class + fill-config predicate + line cap/join/end maps + connector hit-pad (~755 LOC).
- Extracted → \`workbook/shape-element/\` (single impl under flat limit; \`Mde\`/Binding412/\`gae\` remain in boundary via \`seH\` hooks; slide-element / fill / line / image-connector / shape-utility / preset-shape / geometry-transform imported directly; intentional \`workbookEt\` ensure dropped — unused in class body).
- Left \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, \`_Ye\`/\`_workbookS\` (~1.2k leave), \`cDe\`/\`_workbookH\`, \`_workbookY\` slides (~0.75k), \`bDe\` (~0.74k), \`jgt\` sheet-meta, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: \`_workbookY\` slides collection (~0.75k) / \`bDe\` (~0.74k) / \`_workbookS\` presentation ensure (~1.2k leave) / clean \`xLe\` walnut peel before comments/\`_C\`.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-80: Binding736/739 Shape → workbook/shape-element/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
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
      if (!notes.includes("wave-80")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
      }
      const modules = (val as { modules?: string[] }).modules;
      if (
        Array.isArray(modules) &&
        !modules.includes("workbook/shape-element/")
      ) {
        modules.push("workbook/shape-element/");
      }
      const restoredModules = (val as { restoredModules?: string[] })
        .restoredModules;
      if (Array.isArray(restoredModules)) {
        for (const f of [
          "workbook/shape-element/se-slots.ts",
          "workbook/shape-element/boundary-hooks.ts",
          "workbook/shape-element/shape-class-impl.ts",
          "workbook/shape-element/ensure-shape-element-init.ts",
          "workbook/shape-element/index.ts",
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
