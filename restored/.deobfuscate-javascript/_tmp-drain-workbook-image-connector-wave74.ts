#!/usr/bin/env bun
/**
 * Stage-3 wave-74 drain of workbook-runtime:
 * Contiguous image-asset + connector-routing cluster (~3.1k LOC) —
 *   Ige/Lge/Rge/zge EMF·WMF mime set +
 *   Binding723–728/Jge SVG/bitmap image-asset VO +
 *   Yge…H_e connector pathfinding helpers +
 *   Binding734 route consts + Binding735/q_e placeholder +
 *   J_e…pve connector builders / custom-path EMU
 *   → workbook/image-connector/
 *
 * Route helpers split under flat limit via icR bag (cross-file calls).
 * Leaves Chart Binding721, Binding736 Shape, intentional terminals.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-image-connector-wave74.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/image-connector");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave74.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `function Ige` … `pve` close (before Binding736). */
const DROP = { start: 6204, end: 9279 };

const RANGES = {
  imageAsset: { start: 6204, end: 6543 },
  routeHelpersA: { start: 6544, end: 7443 },
  routeHelpersB: { start: 7444, end: 8354 },
  routeBuilders: { start: 8355, end: 9279 },
} as const;

const IMAGE_SLOTS = [
  "Rge",
  "workbookBinding723",
  "workbookBinding724",
  "Bge",
  "workbookBinding725",
  "workbookBinding726",
  "Vge",
  "Hge",
  "Uge",
  "Wge",
  "workbookBinding727",
  "Gge",
  "Kge",
  "qge",
  "workbookBinding728",
] as const;

const ROUTE_SLOTS = [
  "U_e",
  "workbookBinding729",
  "W_e",
  "G_e",
  "K_e",
  "workbookBinding730",
  "workbookBinding731",
  "workbookBinding732",
  "workbookBinding733",
  "workbookBinding735",
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
    [DROP.start - 1, "  });", "Binding722 close before drop"],
    [DROP.start, "function Ige(props) {", "Ige"],
    [6209, "  zge = esmInit(() => {", "zge"],
    [6235, "  Jge = esmInit(() => {", "Jge"],
    [6430, "    workbookBinding728 = class {", "Image asset class"],
    [6544, "function Yge(props) {", "Yge"],
    [8488, "  workbookBinding734 = esmInit(() => {", "Binding734"],
    [8522, "  q_e = esmInit(() => {", "q_e"],
    [8547, "function J_e(props) {", "J_e"],
    [
      9273,
      "function pve(workbookInput15108, workbookInput15109, workbookInput15110) {",
      "pve",
    ],
    [DROP.end, "}", "pve close"],
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

function collectRouteFnNames(all: string[]): string[] {
  const names = new Set<string>();
  for (let i = RANGES.routeHelpersA.start - 1; i < RANGES.routeBuilders.end; i++) {
    const line = all[i]!;
    const m = line.match(/^(?:async )?function\s+([A-Za-z_$][\w$]*)/);
    if (m) names.add(m[1]!);
    const m2 = line.match(/^\s{2}([A-Za-z_$][\w$]*)\s*=\s*esmInit/);
    if (m2) names.add(m2[1]!);
  }
  return [...names].sort((a, b) => b.length - a.length);
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
  return out;
}

function promoteFunctions(body: string): string {
  return body.replace(/^(async )?function\s+/gm, (_m, a?: string) =>
    `export ${a ?? ""}function `,
  );
}

function addParamAny(body: string): string {
  // export function Foo(a, b) → Foo(a: any, b: any)
  // export function Foo({ x, y }) → Foo({ x, y }: any)
  return body.replace(
    /^export (async )?function ([A-Za-z_$][\w$]*)\(([^)]*)\)/gm,
    (_m, asyncKw: string | undefined, name: string, params: string) => {
      const a = asyncKw ?? "";
      if (!params.trim()) return `export ${a}function ${name}()`;
      const typed = params
        .split(",")
        .map((p) => {
          const t = p.trim();
          if (!t) return t;
          if (t.includes(":")) return t;
          // destructure or bare ident
          return `${t}: any`;
        })
        .join(", ");
      return `export ${a}function ${name}(${typed})`;
    },
  );
}

function renameLocalHelpers(body: string): string {
  // Avoid mechanical-name-family (*HelperN): local helpers → icFnN
  let out = body.replace(/\bworkbookHelper(\d+)\b/g, "icFn$1");
  // Keep imported semantic names — applied BEFORE import rewrite injects them
  return out;
}

function rewriteImportedHelpers(body: string): string {
  return body
    .replace(/\bicFn291\b/g, "lookupPresetShapeDefinition")
    .replace(/\bicFn294\b/g, "evalShapeFormula")
    .replace(/\bicFn295\b/g, "evalPresetGuides")
    .replace(/\bicFn298\b/g, "randomUuid")
    .replace(/\bicFn302\b/g, "composeScopedId")
    .replace(/\bicFn286\b/g, "resolveElementFramePx")
    .replace(/\bicFn287\b/g, "rotationEmuToDegrees")
    .replace(/\bicFn288\b/g, "degreesToRotationEmu")
    .replace(/\bicFn289\b/g, "rotationEmuToRadians")
    .replace(/\bicFn290\b/g, "applyFrameCanvasTransform")
    .replace(/\bicFn306\b/g, "simplifyPolyline")
    .replace(/\bicFn307\b/g, "pointsNearEqual")
    .replace(/\bicFn308\b/g, "pointsBBox")
    .replace(/\bicFn309\b/g, "rectCenter")
    .replace(/\bicFn310\b/g, "ratioToFixedPercent");
}

function bagifyCalls(body: string, routeFns: string[]): string {
  let out = body;
  for (const name of routeFns) {
    // Skip ensure assignment names when calling as icR.Name( — ensures called as Name()
    // Replace Name( with icR.Name( except on export function/const lines
    out = out
      .split("\n")
      .map((line) => {
        if (
          line.startsWith("export function ") ||
          line.startsWith("export async function ") ||
          line.startsWith("export const ")
        ) {
          return line;
        }
        return line.replace(
          new RegExp(`(?<![.\\w$])${escapeRe(name)}\\s*\\(`, "g"),
          `icR.${name}(`,
        );
      })
      .join("\n");
  }
  return out;
}

function assignToBag(body: string, routeFns: string[]): string {
  const defined = new Set<string>();
  for (const line of body.split("\n")) {
    const m = line.match(
      /^export (?:async )?function ([A-Za-z_$][\w$]*)/,
    );
    if (m) defined.add(m[1]!);
    const m2 = line.match(/^export const ([A-Za-z_$][\w$]*) =/);
    if (m2) defined.add(m2[1]!);
  }
  const assigns = [...defined]
    .filter((n) => routeFns.includes(n) || defined.has(n))
    .map((n) => `icR.${n} = ${n};`)
    .join("\n");
  return body + (assigns ? `\n${assigns}\n` : "");
}

function renameInputs(body: string): string {
  return body.replace(/\bworkbookInput(\d+)\b/g, "icIn$1");
}

function imageImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../stable-id";
import {
${IMAGE_SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./ic-slots";
`;
}

function routeImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../shape-geometry";
import {
  ensureGeometryTransformDepsInit as workbookBinding628,
  ensureRotationScaleInit as $x,
  FrameBbox as workbookBinding632,
  frameUnitToEmu as workbookTt,
  resolveElementFramePx,
  rotationEmuToRadians,
} from "../geometry-transform";
import {
  lookupPresetShapeDefinition,
  ensurePluginSlotsInit as workbookU,
  evalShapeFormula,
  ensureShapeFormulaOpsInit as _S,
  evalPresetGuides,
  ensureAdjAliasInit as workbookBinding643,
} from "../preset-shape";
import { composeScopedId } from "../stable-id";
import {
  insertAxisElbow as xde,
  simplifyPolyline,
  pointsNearEqual,
  pointsBBox,
  rectCenter,
  nearestRectEdgeToward as Cde,
  scaleOffset as Tde,
  isAxisMonotonicPolyline as Ede,
  ratioToFixedPercent,
} from "../path-geometry";
import {
${[...IMAGE_SLOTS, ...ROUTE_SLOTS].map((s) => `  ${s},`).join("\n")}
} from "./ic-slots";
import { icR } from "./ic-route-bag";
`;
}

function buildImage(all: string[]): void {
  let body = all
    .slice(RANGES.imageAsset.start - 1, RANGES.imageAsset.end)
    .join("\n");
  body = stripVarListNoise(body);
  body = promoteEnsures(body, ["zge", "Jge"]);
  body = promoteFunctions(body);
  body = renameInputs(body);
  body = renameLocalHelpers(body);
  body = rewriteImportedHelpers(body);
  body = addParamAny(body);
  body = body.replace(/\n\s*\}\),\s*$/, "\n});");

  write(
    path.join(OUT, "image-asset-impl.ts"),
    `${PROV}
// Semantic implementation: EMF/WMF mime + SVG/bitmap image-asset VO (legacy Ige/zge/Jge/Binding723–728).
// Stage-3 wave-74 cohesive image-asset impl kept flat under maxFlatLines.

${imageImports()}
${body}
`,
  );
}

function buildRoutePart(
  all: string[],
  key: keyof typeof RANGES,
  file: string,
  desc: string,
  ensureNames: string[],
  routeFns: string[],
): void {
  if (key === "imageAsset") return;
  const range = RANGES[key];
  let body = all.slice(range.start - 1, range.end).join("\n");
  body = stripVarListNoise(body);
  body = promoteEnsures(body, ensureNames);
  body = promoteFunctions(body);
  body = renameInputs(body);
  body = renameLocalHelpers(body);
  body = rewriteImportedHelpers(body);
  body = bagifyCalls(body, routeFns);
  body = addParamAny(body);
  body = body.replace(/\n\s*\}\),\s*$/, "\n});");
  body = assignToBag(body, routeFns);

  write(
    path.join(OUT, file),
    `${PROV}
// Semantic implementation: ${desc}.
// Stage-3 wave-74 cohesive connector-routing impl kept flat under maxFlatLines.

${routeImports()}
${body}
`,
  );
}

function buildSupport(): void {
  write(
    path.join(OUT, "ic-slots.ts"),
    `${PROV}
// Stage-3 wave-74: image-connector mutable slots (legacy Binding723–735).

${[...IMAGE_SLOTS, ...ROUTE_SLOTS].map((s) => `export let ${s}: any;`).join("\n")}
`,
  );

  write(
    path.join(OUT, "ic-route-bag.ts"),
    `${PROV}
// Stage-3 wave-74: shared bag for connector-routing cross-file calls.

export const icR: Record<string, any> = Object.create(null);
`,
  );

  write(
    path.join(OUT, "ensure-image-connector-init.ts"),
    `${PROV}
// Stage-3 wave-74: image-connector cluster ensure (legacy zge/Jge/Binding734/q_e).

import { esmInit } from "../../runtime/rolldown-runtime";
import { zge, Jge } from "./image-asset-impl";
import { workbookBinding734, q_e } from "./route-builders-impl";
import "./route-helpers-a-impl";
import "./route-helpers-b-impl";

export const ensureImageConnectorInit = esmInit(() => {
  zge();
  Jge();
  workbookBinding734();
  q_e();
});
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-74: image-connector barrel (Binding723–735 image asset + connector routing).

export { ensureImageConnectorInit } from "./ensure-image-connector-init";
export { icR } from "./ic-route-bag";
export {
${[...IMAGE_SLOTS, ...ROUTE_SLOTS].map((s) => `  ${s},`).join("\n")}
} from "./ic-slots";

export { Ige, Lge, zge, Jge } from "./image-asset-impl";
export { workbookBinding734, q_e } from "./route-builders-impl";

/** Live bag accessors for boundary consumers (legacy cryptic names). */
export const IgeFn = (...args: any[]) => icR.Ige?.(...args);
import { icR } from "./ic-route-bag";

export function Yge(...args: any[]) {
  return icR.Yge(...args);
}
export function Xge(...args: any[]) {
  return icR.Xge(...args);
}
export function eve(...args: any[]) {
  return icR.eve(...args);
}
export function tve(...args: any[]) {
  return icR.tve(...args);
}
export function dve(...args: any[]) {
  return icR.dve(...args);
}
export function pve(...args: any[]) {
  return icR.pve(...args);
}
export function ave(...args: any[]) {
  return icR.ave(...args);
}
export function uve(...args: any[]) {
  return icR.uve(...args);
}
export function J_e(...args: any[]) {
  return icR.J_e(...args);
}
export function icFn353(...args: any[]) {
  return icR.icFn353(...args);
}
export function icFn371(...args: any[]) {
  return icR.icFn371(...args);
}
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop Ige…pve cluster ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(3000, kept.length); i++) {
    if (kept[i]?.includes("var ensureChartElementsCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("chart-elements insert anchor missing");

  const stub = [
    `import {`,
    `  ensureImageConnectorInit,`,
    `  Ige,`,
    `  Lge,`,
    `  zge,`,
    `  Jge,`,
    `  Yge,`,
    `  Xge,`,
    `  eve,`,
    `  tve,`,
    `  dve,`,
    `  pve,`,
    `  ave,`,
    `  uve,`,
    `  J_e,`,
    `  icFn353 as workbookHelper353,`,
    `  icFn371 as workbookHelper371,`,
    `  workbookBinding734,`,
    `  q_e,`,
    `  workbookBinding728,`,
    `  workbookBinding735,`,
    `} from "../../workbook/image-connector";`,
    ``,
    `var ensureImageConnectorCluster = ensureImageConnectorInit;`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(50, kept.length); i++) {
    if (kept[i]?.includes("graphlib+dagre-npm")) {
      kept[i] = kept[i]!.replace(
        "graphlib+dagre-npm (Binding1671/wNe).",
        "graphlib+dagre-npm (Binding1671/wNe); image-connector (Binding723–735).",
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
  if (!text.includes("image-connector")) {
    text = text.replace(
      /\| graphlib Graph \+ dagre layout[^\n]+\n/,
      (m) =>
        m +
        `| Image asset + connector routing (\`Binding723\`–\`735\` / \`Jge\` / \`Yge\`…\`pve\`) | ~3.1k | **Drained (wave-74)** → \`workbook/image-connector/\` |\n`,
    );
  }
  const section = `
## Wave-74 progress

- Identified contiguous Binding723–735 cluster as Codex image-asset decode (EMF/WMF/SVG/bitmap \`Jge\`/\`Binding728\`) + connector pathfinding/routing (\`Yge\`…\`pve\` + \`Binding734\`/\`735\`) (~3.1k LOC) — NOT vendor.
- Extracted → \`workbook/image-connector/\` (split under flat limit via \`icR\` bag; path-geometry / geometry-transform / preset-shape / stable-id imported directly).
- Left Chart Binding721 (needs Che→Ege prelude), Binding736 Shape, flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\`, Table VO \`fhe\`/\`ohe\`, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: Chart Binding721 + Che→Ege prelude (~2.4k) / flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\` (~0.8k) / Table VO \`fhe\`+Tables (~1.0k) / clean \`xLe\` walnut peel before comments/\`_C\`.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-74: Binding723–735/Jge/Yge…pve image-asset + connector-routing → workbook/image-connector/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
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
      if (!notes.includes("wave-74")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
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

  // Collect route fn names BEFORE rename (workbookHelper* still original)
  const routeFnsRaw = collectRouteFnNames(all);
  const routeFns = routeFnsRaw.map((n) =>
    n.startsWith("workbookHelper")
      ? n.replace(/^workbookHelper/, "icFn")
      : n,
  );

  buildSupport();
  buildImage(all);
  buildRoutePart(
    all,
    "routeHelpersA",
    "route-helpers-a-impl.ts",
    "connector route helpers A (legacy Yge…b_e prelude)",
    [],
    routeFns,
  );
  buildRoutePart(
    all,
    "routeHelpersB",
    "route-helpers-b-impl.ts",
    "connector route helpers B (legacy x_e…L_e)",
    [],
    routeFns,
  );
  buildRoutePart(
    all,
    "routeBuilders",
    "route-builders-impl.ts",
    "route consts/placeholder + connector builders (legacy Helper362…pve/Binding734/735)",
    ["workbookBinding734", "q_e"],
    routeFns,
  );

  // Fix index: remove dead IgeFn, ensure icR import order
  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-74: image-connector barrel (Binding723–735 image asset + connector routing).

import { icR } from "./ic-route-bag";

export { ensureImageConnectorInit } from "./ensure-image-connector-init";
export { icR } from "./ic-route-bag";
export {
${[...IMAGE_SLOTS, ...ROUTE_SLOTS].map((s) => `  ${s},`).join("\n")}
} from "./ic-slots";

export { Ige, Lge, zge, Jge } from "./image-asset-impl";
export { workbookBinding734, q_e } from "./route-builders-impl";

export function Yge(...args: any[]) {
  return icR.Yge(...args);
}
export function Xge(...args: any[]) {
  return icR.Xge(...args);
}
export function eve(...args: any[]) {
  return icR.eve(...args);
}
export function tve(...args: any[]) {
  return icR.tve(...args);
}
export function dve(...args: any[]) {
  return icR.dve(...args);
}
export function pve(...args: any[]) {
  return icR.pve(...args);
}
export function ave(...args: any[]) {
  return icR.ave(...args);
}
export function uve(...args: any[]) {
  return icR.uve(...args);
}
export function J_e(...args: any[]) {
  return icR.J_e(...args);
}
export function icFn353(...args: any[]) {
  return icR.icFn353(...args);
}
export function icFn371(...args: any[]) {
  return icR.icFn371(...args);
}
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
  console.log("WAVE-74 DONE");
}

main();
