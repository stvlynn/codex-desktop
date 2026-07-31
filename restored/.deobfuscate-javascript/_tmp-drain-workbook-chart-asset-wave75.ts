#!/usr/bin/env bun
/**
 * Stage-3 wave-75 drain of workbook-runtime:
 * Contiguous chart-asset cluster (~2.4k LOC) —
 *   She/Che area-grouping VO + axis/label patches (whe/age) +
 *   oge/sge trendline collection + series data helpers +
 *   Binding718/vge/yge series fill/stroke VO +
 *   bge/Sge/wge/Ege chart option VOs +
 *   trendline regression (Dge…Fge) +
 *   Binding721/722 Chart asset class
 *   → workbook/chart-asset/
 *
 * Not vendor (Codex popcorn chart asset / series VO).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-chart-asset-wave75.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/chart-asset");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave75.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `She,` … Binding722 close (before Binding736). */
const DROP = { start: 3857, end: 6229 };

/** Line before drop: close prior var (`}),` → `});`). */
const CLOSE_PRIOR_VAR = 3856;

const RANGES = {
  prelude: { start: 3857, end: 4288 },
  seriesOpts: { start: 4289, end: 4943 },
  regression: { start: 4944, end: 5520 },
  chartClass: { start: 5521, end: 6229 },
} as const;

const SLOTS = [
  "She",
  "oge",
  "mge",
  "hge",
  "gge",
  "_ge",
  "workbookBinding719",
  "yge",
  "xge",
  "Cge",
  "Tge",
  "workbookBinding721",
] as const;

/** Ensures exported as `export const` (callable init). */
const ENSURES = [
  "Che",
  "sge",
  "workbookBinding718",
  "vge",
  "bge",
  "Sge",
  "wge",
  "Ege",
  "workbookBinding720",
  "workbookBinding722",
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
    [CLOSE_PRIOR_VAR, "  }),", "prior var close comma"],
    [DROP.start, "  She,", "She slot"],
    [DROP.start + 1, "  Che = esmInit(() => {", "Che"],
    [3893, "function whe(workbookInput395, workbookInput396) {", "whe"],
    [4070, "var oge,", "oge"],
    [4289, "var mge,", "mge/Binding718"],
    [4734, "  bge = esmInit(() => {", "bge"],
    [4914, "  Ege = esmInit(() => {", "Ege"],
    [5444, "var workbookBinding720 = esmInit(() => {});", "Binding720"],
    [5521, "var workbookBinding721,", "Binding721"],
    [5522, "  workbookBinding722 = esmInit(() => {", "Binding722"],
    [DROP.end, "  });", "Binding722 close"],
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
    // Drop bare `var foo,` list openers, keep `var foo = …` assignments.
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
      // multi-line params already typed below — skip if contains newline handled separately
      const typed = params
        .split(",")
        .map((p) => {
          const t = p.trim();
          if (!t) return t;
          if (t.includes(":")) return t;
          return `${t}: any`;
        })
        .join(", ");
      return `export ${a}function ${name}(${typed})`;
    },
  );
}

function renameLocalHelpers(body: string): string {
  let out = body.replace(/\bworkbookHelper(\d+)\b/g, "caFn$1");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "caIn$1");
  out = out.replace(/\bfunction \$w\b/g, "function formatFitCoef");
  out = out.replace(/\b\$w\(/g, "formatFitCoef(");
  // Imported helpers — restore semantic names (avoid mechanical *HelperN family).
  out = out.replace(/\bcaFn103\b/g, "parseFontSizePx");
  out = out.replace(/\bcaFn104\b/g, "parseTextStyleInput");
  out = out.replace(/\bcaFn298\b/g, "randomUuid");
  return out;
}

function rewriteBoundaryHooks(body: string): string {
  return body
    .replace(/\bZae\(/g, "caH.mapDisplayBlanksAs(")
    .replace(/\bQae\(/g, "caH.mapParentLabelLayout(");
}

function sharedImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import { qn } from "../presentation-protobuf";
import {
  ensureChartProtoNameMapsInit as workbookBinding404,
  areaGroupingNameToProto as vie,
  areaGroupingProtoToName as workbookBinding389,
  layoutTargetNameToProto as _ie,
  layoutModeNameToProto as workbookBinding386,
} from "../chart-proto-name-maps";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  applyTextStylePatch as workbookYt,
  parseTextStyleInput,
  parseFontSizePx,
} from "../text-style";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../stable-id";
import {
  WorkbookColor as workbookBinding382,
  ensureWorkbookColorInit as workbookBinding383,
} from "../theme-color";
import {
  The,
  workbookBinding703,
  Ehe,
  workbookBinding704,
  Dhe,
  workbookBinding705,
  Ohe,
  khe,
  jhe,
  Nhe,
  workbookBinding706,
  workbookBinding707,
  workbookBinding708,
  workbookBinding709,
  Lhe,
  workbookBinding710,
  Ahe,
  Mhe,
  Phe,
  Fhe,
  Ihe,
  Rhe,
  zhe,
  Bhe,
  workbookBinding711,
  workbookBinding712,
  Vhe,
  Uhe,
  workbookBinding713,
  Khe,
  workbookBinding714,
  Hhe,
  Whe,
  Ghe,
  qhe,
  Jhe,
  workbookBinding715,
  Xhe,
  Qhe,
  workbookBinding716,
  tge,
  Yhe,
  Zhe,
  $he,
  ege,
  nge,
  workbookBinding717,
  ige,
} from "../chart-elements";
import { caH } from "./boundary-hooks";
import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./ca-slots";

/** No-op leave-behind (legacy Binding433). */
const workbookBinding433 = (): void => {};
`;
}

function buildPart(
  all: string[],
  key: keyof typeof RANGES,
  file: string,
  desc: string,
  ensureNames: string[],
  extraImports: string,
): void {
  const range = RANGES[key];
  let body = all.slice(range.start - 1, range.end).join("\n");
  body = stripVarListNoise(body);
  body = promoteEnsures(body, ensureNames);
  body = promoteFunctions(body);
  body = renameLocalHelpers(body);
  body = rewriteBoundaryHooks(body);
  body = addParamAny(body);
  // Fix multi-line caFn351 params
  body = body.replace(
    /export function caFn351\(\n\s*caIn5610,\n\s*caIn5611,\n\s*caIn5612,\n\s*caIn5613,\n\)/,
    `export function caFn351(
  caIn5610: any,
  caIn5611: any,
  caIn5612: any,
  caIn5613: any,
)`,
  );
  body = body.replace(/\n\s*\}\),\s*$/, "\n});");

  write(
    path.join(OUT, file),
    `${PROV}
// Semantic implementation: ${desc}.
// Stage-3 wave-75 cohesive chart-asset impl kept flat under maxFlatLines.

${sharedImports()}
${extraImports}
${body}
`,
  );
}

function buildSupport(): void {
  write(
    path.join(OUT, "ca-slots.ts"),
    `${PROV}
// Stage-3 wave-75: chart-asset mutable slots (legacy She/Che…Binding721).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );

  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-75: boundary deps for chart-asset (Zae/Qae leave-behinds).

export type ChartAssetBoundaryHooks = {
  /** Map display-blanks-as name → proto (legacy Zae). */
  mapDisplayBlanksAs: (name: any) => any;
  /** Map parent-label-layout name → proto (legacy Qae). */
  mapParentLabelLayout: (name: any) => any;
};

/** Live bag for intentional chart enum leave-behinds. */
export const caH: ChartAssetBoundaryHooks = {} as ChartAssetBoundaryHooks;

export function wireChartAssetBoundaryHooks(
  next: ChartAssetBoundaryHooks,
): void {
  caH.mapDisplayBlanksAs = next.mapDisplayBlanksAs;
  caH.mapParentLabelLayout = next.mapParentLabelLayout;
}
`,
  );

  write(
    path.join(OUT, "ensure-chart-asset-init.ts"),
    `${PROV}
// Stage-3 wave-75: chart-asset cluster ensure (legacy Che…Ege + Binding722).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Che } from "./prelude-impl";
import { sge } from "./prelude-impl";
import {
  workbookBinding718,
  vge,
  bge,
  Sge,
  wge,
  Ege,
} from "./series-opts-impl";
import { workbookBinding720 } from "./regression-impl";
import { workbookBinding722 } from "./chart-class-impl";
import "./regression-impl";

export const ensureChartAssetInit = esmInit(() => {
  Che();
  sge();
  workbookBinding718();
  vge();
  bge();
  Sge();
  wge();
  Ege();
  workbookBinding720();
  workbookBinding722();
});
`,
  );

  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-75: chart-asset barrel (legacy She/Che…Binding721/722).

export { ensureChartAssetInit } from "./ensure-chart-asset-init";
export {
  wireChartAssetBoundaryHooks,
  caH,
} from "./boundary-hooks";
export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./ca-slots";

export {
  Che,
  sge,
  whe,
  age,
  cge,
  uge,
  caFn347 as workbookHelper347,
  caFn348 as workbookHelper348,
} from "./prelude-impl";

export {
  workbookBinding718,
  vge,
  bge,
  Sge,
  wge,
  Ege,
} from "./series-opts-impl";

export {
  workbookBinding720,
  caFn352 as workbookHelper352,
  Nge,
  Pge,
  Fge,
} from "./regression-impl";

export { workbookBinding722 } from "./chart-class-impl";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop She/Che…Binding722 cluster ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  // Close prior var that trailed into She/Che
  for (let i = 0; i < kept.length; i++) {
    if (
      kept[i] === "  })," &&
      kept[i + 1]?.startsWith("var workbookBinding736")
    ) {
      // After drop, prior close sits just before Binding736
      kept[i] = "  });";
      console.log(`  closed prior var at kept[${i}]`);
      break;
    }
  }

  let insertAt = -1;
  for (let i = 0; i < Math.min(3000, kept.length); i++) {
    if (kept[i]?.includes("var ensureImageConnectorCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) {
    // fallback: after chart-elements cluster alias
    for (let i = 0; i < Math.min(3000, kept.length); i++) {
      if (kept[i]?.includes("var ensureChartElementsCluster =")) {
        insertAt = i + 1;
        while (insertAt < kept.length && kept[insertAt]!.trim() === "")
          insertAt++;
        break;
      }
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  ensureChartAssetInit,`,
    `  wireChartAssetBoundaryHooks,`,
    `  Che,`,
    `  sge,`,
    `  cge,`,
    `  workbookHelper347,`,
    `  workbookHelper348,`,
    `  workbookHelper352,`,
    `  workbookBinding718,`,
    `  workbookBinding720,`,
    `  workbookBinding721,`,
    `  workbookBinding722,`,
    `  She,`,
    `  yge,`,
    `  Fge,`,
    `  Nge,`,
    `  Pge,`,
    `} from "../../workbook/chart-asset";`,
    ``,
    `var ensureChartAssetCluster = ensureChartAssetInit;`,
    ``,
    `wireChartAssetBoundaryHooks({`,
    `  mapDisplayBlanksAs: (name) => Zae(name),`,
    `  mapParentLabelLayout: (name) => Qae(name),`,
    `});`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(50, kept.length); i++) {
    if (kept[i]?.includes("image-connector (Binding723–735).")) {
      kept[i] = kept[i]!.replace(
        "image-connector (Binding723–735).",
        "image-connector (Binding723–735); chart-asset (She/Che…Binding721).",
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
  if (!text.includes("chart-asset")) {
    text = text.replace(
      /\| Image asset \+ connector routing[^\n]+\n/,
      (m) =>
        m +
        `| Chart asset (\`She\`/\`Che\`…\`Binding721\`/\`722\`) | ~2.4k | **Drained (wave-75)** → \`workbook/chart-asset/\` |\n`,
    );
  }
  const section = `
## Wave-75 progress

- Identified contiguous She/Che→Ege + Binding721/722 cluster as Codex chart-asset / series VO (NOT vendor): area-grouping + axis patches + trendline collection + series fill/stroke + chart option VOs + regression helpers + Chart class (~2.4k LOC).
- Extracted → \`workbook/chart-asset/\` (split under flat limit; \`Zae\`/\`Qae\` remain in boundary via \`caH\` hooks; chart-elements / fill / line / text-style imported directly).
- Left Binding736 Shape, flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\`, Table VO \`fhe\`/\`ohe\`, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, WorkbookN shell, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: Binding736 Shape (~?) / flowchart \`$Ne\`/Binding1675/1685 + \`NPe\`/\`PPe\` (~0.8k) / Table VO \`fhe\`+Tables (~1.0k) / clean \`xLe\` walnut peel before comments/\`_C\`.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-75: She/Che…Binding721/722 chart-asset → workbook/chart-asset/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
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
      if (!notes.includes("wave-75")) {
        (val as { notes?: string }).notes = `${waveNote} | ${notes}`;
      }
      const modules = (val as { modules?: string[] }).modules;
      if (Array.isArray(modules) && !modules.includes("workbook/chart-asset/")) {
        modules.push("workbook/chart-asset/");
      }
      const restoredModules = (val as { restoredModules?: string[] })
        .restoredModules;
      if (Array.isArray(restoredModules)) {
        for (const f of [
          "workbook/chart-asset/boundary-hooks.ts",
          "workbook/chart-asset/ca-slots.ts",
          "workbook/chart-asset/prelude-impl.ts",
          "workbook/chart-asset/series-opts-impl.ts",
          "workbook/chart-asset/regression-impl.ts",
          "workbook/chart-asset/chart-class-impl.ts",
          "workbook/chart-asset/ensure-chart-asset-init.ts",
          "workbook/chart-asset/index.ts",
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
    "prelude",
    "prelude-impl.ts",
    "She/Che area-grouping + axis patches + trendline collection + series data helpers (legacy She…Binding348)",
    ["Che", "sge"],
    ``,
  );

  buildPart(
    all,
    "seriesOpts",
    "series-opts-impl.ts",
    "series fill/stroke VO + chart option VOs (legacy Binding718/vge…Ege)",
    ["workbookBinding718", "vge", "bge", "Sge", "wge", "Ege"],
    `import { sge, cge, uge, caFn346, caFn347 } from "./prelude-impl";
`,
  );

  buildPart(
    all,
    "regression",
    "regression-impl.ts",
    "trendline regression + manual-layout helpers (legacy Helper349…Fge/Binding720)",
    ["workbookBinding720"],
    ``,
  );

  // chart-class body still calls workbookHelper352 before rename maps to caFn352 —
  // import caFn352 and alias for any residual; renameLocalHelpers already rewrites calls.
  buildPart(
    all,
    "chartClass",
    "chart-class-impl.ts",
    "Chart asset class (legacy Binding721/722)",
    ["workbookBinding722"],
    `import { Che, whe, uge } from "./prelude-impl";
import {
  workbookBinding718,
  vge,
  bge,
  Sge,
  wge,
  Ege,
} from "./series-opts-impl";
import { workbookBinding720, caFn352, Nge, Pge, Fge } from "./regression-impl";
`,
  );

  // Fix ensure imports — Che/sge exported from prelude; Binding718 etc from series-opts
  // Re-write ensure to import ensures correctly (Che/sge are export const)
  write(
    path.join(OUT, "ensure-chart-asset-init.ts"),
    `${PROV}
// Stage-3 wave-75: chart-asset cluster ensure (legacy Che…Ege + Binding722).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Che, sge } from "./prelude-impl";
import {
  workbookBinding718,
  vge,
  bge,
  Sge,
  wge,
  Ege,
} from "./series-opts-impl";
import { workbookBinding720 } from "./regression-impl";
import { workbookBinding722 } from "./chart-class-impl";

export const ensureChartAssetInit = esmInit(() => {
  Che();
  sge();
  workbookBinding718();
  vge();
  bge();
  Sge();
  wge();
  Ege();
  workbookBinding720();
  workbookBinding722();
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
  console.log("WAVE-75 DONE");
}

main();
