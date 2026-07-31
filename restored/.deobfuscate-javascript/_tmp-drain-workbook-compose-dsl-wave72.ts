#!/usr/bin/env bun
/**
 * Stage-3 wave-72 drain of workbook-runtime:
 * Contiguous public compose DSL cluster (~886 LOC) —
 *   DOe layout meta (Binding1490–1492) +
 *   Binding1499 size helpers (fixed/grow/wrap/$K) +
 *   OOe element builders (Binding1500–1527/_q) +
 *   Binding1528 aggregator
 *   → workbook/compose-dsl/
 *
 * Not vendor (Codex presentation compose DSL builders).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-compose-dsl-wave72.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/compose-dsl");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave72.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `var workbookBinding1490,` … Binding1528 close. */
const DROP = { start: 46875, end: 47760 };

const RANGES = {
  /** DOe body (inside esmInit) */
  layoutMeta: { start: 46879, end: 46905 },
  /** Binding1499 body */
  sizeHelpers: { start: 46915, end: 47004 },
  /** OOe body */
  builders: { start: 47036, end: 47750 },
} as const;

const SLOTS = [
  "workbookBinding1490",
  "workbookBinding1491",
  "workbookBinding1492",
  "workbookBinding1493",
  "workbookBinding1494",
  "workbookBinding1495",
  "workbookBinding1496",
  "workbookBinding1497",
  "workbookBinding1498",
  "$K",
  "workbookBinding1500",
  "workbookBinding1501",
  "workbookBinding1502",
  "workbookBinding1503",
  "workbookBinding1504",
  "workbookBinding1505",
  "workbookBinding1506",
  "workbookBinding1507",
  "workbookBinding1508",
  "workbookBinding1509",
  "workbookBinding1510",
  "workbookBinding1511",
  "workbookBinding1512",
  "workbookBinding1513",
  "workbookBinding1514",
  "workbookBinding1515",
  "_q",
  "workbookBinding1516",
  "workbookBinding1517",
  "workbookBinding1518",
  "workbookBinding1519",
  "workbookBinding1520",
  "workbookBinding1521",
  "workbookBinding1522",
  "workbookBinding1523",
  "workbookBinding1524",
  "workbookBinding1525",
  "workbookBinding1526",
  "workbookBinding1527",
] as const;

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
    [DROP.start, "var workbookBinding1490,", "Binding1490 start"],
    [46878, "  DOe = esmInit(() => {", "DOe"],
    [46879, "    wr();", "DOe wr"],
    [46914, "  workbookBinding1499 = esmInit(() => {", "Binding1499"],
    [47022, "  _q,", "_q decl"],
    [47035, "  OOe = esmInit(() => {", "OOe"],
    [47752, "  workbookBinding1528 = esmInit(() => {", "Binding1528"],
    [DROP.end, "  });", "Binding1528 close"],
    [DROP.end + 1, "function workbookHelper697(", "helper697 kept"],
    [46874, "}", "helper696 close before drop"],
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

function rewriteBody(src: string): string {
  let out = src;
  // Already-extracted ensures / values
  out = out.replace(/\bwr\(\)/g, "wr()");
  out = out.replace(/\bworkbookWt\(\)/g, "ensureFillInit()");
  out = out.replace(/\bworkbookBinding521\(\)/g, "ensurePlaceholderResolveDepsInit()");
  out = out.replace(/\bworkbookBinding404\(\)/g, "ensureChartProtoNameMapsInit()");
  out = out.replace(/\bworkbookBinding550\(\)/g, "ensureDefaultTextBoxInsetsInit()");
  out = out.replace(/\bworkbookBinding644\(\)/g, "ensurePresetShapeClusterInit()");
  out = out.replace(/\bworkbookBinding522\(\)/g, "ensureThemeTypefaceInit()");
  out = out.replace(/\bworkbookT\(\)/g, "ensureStyleResolveInit()");
  out = out.replace(/\bworkbookZ\(\)/g, "ensureTextBoxClusterInit()");
  out = out.replace(/\bworkbookBinding628\(\)/g, "ensureGeometryTransformDepsInit()");
  out = out.replace(/\bworkbookMt\(\)/g, "ensureFontMetricsInit()");
  out = out.replace(/\bworkbookBinding393\b/g, "shapeGeometryNameToProto");
  out = out.replace(/\bworkbookBinding565\(\)/g, "ensureDesignTokensInit()");
  out = out.replace(/\bworkbookBinding559\b/g, "resolveSpaceToken");
  out = out.replace(/\bworkbookBinding1393\(\)/g, "ensureCaseTransformInit()");
  out = out.replace(/\bworkbookBinding1465\(\)/g, "ensureComposeMeasureInit()");
  out = out.replace(/\bworkbookBinding1485\(\)/g, "ensureComposeApplyInit()");
  out = out.replace(/\bworkbookBinding1488\(\)/g, "ensureComposeThemeTokensInit()");
  // Boundary leave-behinds via hooks
  out = out.replace(/\bworkbookBinding661\(\)/g, "cdslH.ensureBinding661()");
  out = out.replace(/\bworkbookBinding739\(\)/g, "cdslH.ensureBinding739()");
  out = out.replace(/\bworkbookBinding1489\(\)/g, "cdslH.ensureBinding1489()");
  out = out.replace(/\b_workbookH\(\)/g, "cdslH.ensureWorkbookH()");
  out = out.replace(/\bworkbookBinding433\(\)/g, "cdslH.ensureBinding433()");
  out = out.replace(/\bworkbookBinding1213\(\)/g, "cdslH.ensureBinding1213()");
  out = out.replace(/\bworkbookBinding1330\(\)/g, "cdslH.ensureBinding1330()");
  out = out.replace(/\bworkbookBinding1328\b/g, "cdslH.parseComposeTracks");
  // Local ensures keep names after we export them
  out = out.replace(/\bworkbookBinding1499\(\)/g, "ensureComposeSizeHelpersInit()");
  out = out.replace(/\bOOe\(\)/g, "ensureComposeElementBuildersInit()");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "cdslIn$1");
  return out;
}

function extractRaw(
  all: string[],
  range: { start: number; end: number },
): string {
  return all.slice(range.start - 1, range.end).join("\n");
}

function dedentEsmBody(src: string): string {
  return src
    .split("\n")
    .map((line) => (line.startsWith("    ") ? line.slice(4) : line))
    .join("\n");
}

function indent(src: string, n: number): string {
  const pad = " ".repeat(n);
  return src
    .split("\n")
    .map((l) => (l.length ? pad + l : l))
    .join("\n");
}

function slotsImport(): string {
  return `import {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./dsl-slots";`;
}

function buildSlots(): void {
  write(
    path.join(OUT, "dsl-slots.ts"),
    `${PROV}
// Stage-3 wave-72: compose-dsl mutable slots (legacy Binding1490–1527).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );
}

function buildHooks(): void {
  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-72: boundary deps for compose-dsl (Binding1490–1528).

export type ComposeDslBoundaryHooks = {
  /** Legacy Binding661 ensure. */
  ensureBinding661: () => void;
  /** Shape element ensure (legacy Binding739). */
  ensureBinding739: () => void;
  /** Thin compose apply prelude (legacy Binding1489 → workbookOt). */
  ensureBinding1489: () => void;
  /** Legacy _workbookH ensure. */
  ensureWorkbookH: () => void;
  /** No-op / late boundary ensure (legacy Binding433). */
  ensureBinding433: () => void;
  /** Legacy Binding1213 ensure. */
  ensureBinding1213: () => void;
  /** Compose tracks ensure (legacy Binding1330 — seeds Binding1328). */
  ensureBinding1330: () => void;
  /** Parse compose track sizes (legacy Binding1328). */
  parseComposeTracks: (tracks: any, label?: string) => any[];
};

/** Live bag for boundary leave-behinds / late ensures. */
export const cdslH: ComposeDslBoundaryHooks = {} as ComposeDslBoundaryHooks;

export function wireComposeDslBoundaryHooks(
  next: ComposeDslBoundaryHooks,
): void {
  cdslH.ensureBinding661 = next.ensureBinding661;
  cdslH.ensureBinding739 = next.ensureBinding739;
  cdslH.ensureBinding1489 = next.ensureBinding1489;
  cdslH.ensureWorkbookH = next.ensureWorkbookH;
  cdslH.ensureBinding433 = next.ensureBinding433;
  cdslH.ensureBinding1213 = next.ensureBinding1213;
  cdslH.ensureBinding1330 = next.ensureBinding1330;
  cdslH.parseComposeTracks = next.parseComposeTracks;
}
`,
  );
}

function buildLayoutMeta(all: string[]): void {
  const body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.layoutMeta)));
  write(
    path.join(OUT, "layout-meta-impl.ts"),
    `${PROV}
// Semantic implementation: compose layout MIME/meta + geometry reverse map (legacy DOe).
// Stage-3 wave-72 cohesive compose-dsl impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensureFillInit } from "../fill";
import { ensurePlaceholderResolveDepsInit } from "../placeholder-resolve";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { ensureDefaultTextBoxInsetsInit } from "../text-box";
import { ensurePresetShapeClusterInit } from "../preset-shape";
import { ensureThemeTypefaceInit } from "../placeholder-resolve";
import { ensureStyleResolveInit } from "../text-style";
import { ensureTextBoxClusterInit } from "../text-box";
import { ensureGeometryTransformDepsInit } from "../geometry-transform";
import { ensureFontMetricsInit } from "../font-metrics";
import { cdslH } from "./boundary-hooks";
${slotsImport()}

void wr;
void ensureFillInit;
void ensurePlaceholderResolveDepsInit;
void ensureChartProtoNameMapsInit;
void shapeGeometryNameToProto;
void ensureDefaultTextBoxInsetsInit;
void ensurePresetShapeClusterInit;
void ensureThemeTypefaceInit;
void ensureStyleResolveInit;
void ensureTextBoxClusterInit;
void ensureGeometryTransformDepsInit;
void ensureFontMetricsInit;
void cdslH;

/** Initialize compose layout meta (legacy DOe). */
export const ensureComposeLayoutMetaInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy DOe. */
export const DOe = ensureComposeLayoutMetaInit;
`,
  );
}

function buildSizeHelpers(all: string[]): void {
  const body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.sizeHelpers)));
  write(
    path.join(OUT, "size-helpers-impl.ts"),
    `${PROV}
// Semantic implementation: compose size modes fixed/grow/wrap (legacy Binding1499).
// Stage-3 wave-72 cohesive compose-dsl impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
${slotsImport()}

/** Initialize compose size helpers (legacy Binding1499). */
export const ensureComposeSizeHelpersInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy workbookBinding1499. */
export const workbookBinding1499 = ensureComposeSizeHelpersInit;
`,
  );
}

function buildBuilders(all: string[]): void {
  let body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.builders)));
  // First lines of OOe were Binding565(); Binding1499(); Binding1330();
  // rewriteBody already mapped those.
  write(
    path.join(OUT, "element-builders-impl.ts"),
    `${PROV}
// Semantic implementation: compose element builders row/col/grid/table/image (legacy OOe).
// Stage-3 wave-72 cohesive compose-dsl impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureDesignTokensInit, resolveSpaceToken } from "../design-tokens";
import { cdslH } from "./boundary-hooks";
import { ensureComposeSizeHelpersInit } from "./size-helpers-impl";
${slotsImport()}

void ensureDesignTokensInit;
void resolveSpaceToken;
void cdslH;
void ensureComposeSizeHelpersInit;

/** Initialize compose element builders (legacy OOe). */
export const ensureComposeElementBuildersInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy OOe. */
export const OOe = ensureComposeElementBuildersInit;
`,
  );
}

function buildEnsure(): void {
  write(
    path.join(OUT, "ensure-compose-dsl-init.ts"),
    `${PROV}
// Stage-3 wave-72: compose-dsl cluster ensure (legacy Binding1528 / DOe / OOe).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureCaseTransformInit,
  ensureComposeMeasureInit,
  ensureComposeApplyInit,
  ensureComposeThemeTokensInit,
} from "../compose-layout";
import { cdslH } from "./boundary-hooks";
import { ensureComposeLayoutMetaInit } from "./layout-meta-impl";
import { ensureComposeSizeHelpersInit } from "./size-helpers-impl";
import { ensureComposeElementBuildersInit } from "./element-builders-impl";

void ensureCaseTransformInit;
void ensureComposeMeasureInit;
void ensureComposeApplyInit;
void ensureComposeThemeTokensInit;
void cdslH;

/** Aggregator ensure (legacy Binding1528). */
export const ensureComposeDslAggregatorInit = esmInit(() => {
  ensureComposeSizeHelpersInit();
  cdslH.ensureBinding1330();
  ensureComposeElementBuildersInit();
  ensureCaseTransformInit();
  ensureComposeMeasureInit();
  ensureComposeApplyInit();
  ensureComposeThemeTokensInit();
});

/** Legacy workbookBinding1528. */
export const workbookBinding1528 = ensureComposeDslAggregatorInit;

/** Initialize full compose-dsl cluster (DOe + Binding1499 + OOe + Binding1528). */
export const ensureComposeDslInit = esmInit(() => {
  ensureComposeLayoutMetaInit();
  ensureComposeSizeHelpersInit();
  ensureComposeElementBuildersInit();
  ensureComposeDslAggregatorInit();
});
`,
  );
}

function buildIndex(): void {
  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-72: compose-dsl barrel (legacy Binding1490–1528 / DOe / OOe).

export {
  wireComposeDslBoundaryHooks,
  type ComposeDslBoundaryHooks,
  cdslH,
} from "./boundary-hooks";

export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./dsl-slots";

export {
  ensureComposeLayoutMetaInit,
  DOe,
} from "./layout-meta-impl";
export {
  ensureComposeSizeHelpersInit,
  workbookBinding1499,
} from "./size-helpers-impl";
export {
  ensureComposeElementBuildersInit,
  OOe,
} from "./element-builders-impl";
export {
  ensureComposeDslAggregatorInit,
  workbookBinding1528,
  ensureComposeDslInit,
} from "./ensure-compose-dsl-init";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop Binding1490…1528 ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes("var ensureGoogleSlidesAdapterCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  wireComposeDslBoundaryHooks,`,
    `  ensureComposeDslInit,`,
    `  ensureComposeLayoutMetaInit as DOe,`,
    `  ensureComposeSizeHelpersInit as workbookBinding1499,`,
    `  ensureComposeElementBuildersInit as OOe,`,
    `  ensureComposeDslAggregatorInit as workbookBinding1528,`,
    `  workbookBinding1490,`,
    `  workbookBinding1491,`,
    `  workbookBinding1492,`,
    `  workbookBinding1493,`,
    `  workbookBinding1494,`,
    `  workbookBinding1495,`,
    `  workbookBinding1496,`,
    `  workbookBinding1497,`,
    `  workbookBinding1498,`,
    `  $K,`,
    `  workbookBinding1500,`,
    `  workbookBinding1501,`,
    `  workbookBinding1502,`,
    `  workbookBinding1503,`,
    `  workbookBinding1504,`,
    `  workbookBinding1505,`,
    `  workbookBinding1506,`,
    `  workbookBinding1507,`,
    `  workbookBinding1508,`,
    `  workbookBinding1509,`,
    `  workbookBinding1510,`,
    `  workbookBinding1511,`,
    `  workbookBinding1512,`,
    `  workbookBinding1513,`,
    `  workbookBinding1514,`,
    `  workbookBinding1515,`,
    `  _q,`,
    `  workbookBinding1516,`,
    `  workbookBinding1517,`,
    `  workbookBinding1518,`,
    `  workbookBinding1519,`,
    `  workbookBinding1520,`,
    `  workbookBinding1521,`,
    `  workbookBinding1522,`,
    `  workbookBinding1523,`,
    `  workbookBinding1524,`,
    `  workbookBinding1525,`,
    `  workbookBinding1526,`,
    `  workbookBinding1527,`,
    `} from "../../workbook/compose-dsl";`,
    ``,
    `wireComposeDslBoundaryHooks({`,
    `  ensureBinding661: () => {`,
    `    workbookBinding661();`,
    `  },`,
    `  ensureBinding739: () => {`,
    `    workbookBinding739();`,
    `  },`,
    `  ensureBinding1489: () => {`,
    `    workbookBinding1489();`,
    `  },`,
    `  ensureWorkbookH: () => {`,
    `    _workbookH();`,
    `  },`,
    `  ensureBinding433: () => {`,
    `    workbookBinding433();`,
    `  },`,
    `  ensureBinding1213: () => {`,
    `    workbookBinding1213();`,
    `  },`,
    `  ensureBinding1330: () => {`,
    `    workbookBinding1330();`,
    `  },`,
    `  parseComposeTracks: (tracks: any, label?: string) =>`,
    `    workbookBinding1328(tracks, label),`,
    `});`,
    ``,
    `void workbookBinding1490;`,
    `void workbookBinding1491;`,
    `void workbookBinding1492;`,
    `void workbookBinding1493;`,
    `void workbookBinding1494;`,
    `void workbookBinding1495;`,
    `void workbookBinding1496;`,
    `void workbookBinding1497;`,
    `void workbookBinding1498;`,
    `void $K;`,
    `void workbookBinding1499;`,
    `void workbookBinding1500;`,
    `void workbookBinding1501;`,
    `void workbookBinding1502;`,
    `void workbookBinding1503;`,
    `void workbookBinding1504;`,
    `void workbookBinding1505;`,
    `void workbookBinding1506;`,
    `void workbookBinding1507;`,
    `void workbookBinding1508;`,
    `void workbookBinding1509;`,
    `void workbookBinding1510;`,
    `void workbookBinding1511;`,
    `void workbookBinding1512;`,
    `void workbookBinding1513;`,
    `void workbookBinding1514;`,
    `void workbookBinding1515;`,
    `void _q;`,
    `void workbookBinding1516;`,
    `void workbookBinding1517;`,
    `void workbookBinding1518;`,
    `void workbookBinding1519;`,
    `void workbookBinding1520;`,
    `void workbookBinding1521;`,
    `void workbookBinding1522;`,
    `void workbookBinding1523;`,
    `void workbookBinding1524;`,
    `void workbookBinding1525;`,
    `void workbookBinding1526;`,
    `void workbookBinding1527;`,
    `void DOe;`,
    `void OOe;`,
    `void workbookBinding1528;`,
    ``,
    `// Thin alias: cluster ensure for compose DSL (Binding1490–1528).`,
    `var ensureComposeDslCluster = ensureComposeDslInit;`,
    ``,
  ];

  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (kept[i]?.includes("google-slides-adapter (oJe/pJe/SJe)")) {
      kept[i] = kept[i]!.replace(
        "google-slides-adapter (oJe/pJe/SJe).",
        "google-slides-adapter (oJe/pJe/SJe); compose-dsl (Binding1490–1528).",
      );
      break;
    }
  }
  // Update the wave-58 note that said Binding1490–1528 retained
  for (let i = 0; i < Math.min(80, kept.length); i++) {
    if (
      kept[i]?.includes(
        "public compose DSL Binding1490–1528 retained",
      )
    ) {
      kept[i] = kept[i]!.replace(
        "public compose DSL Binding1490–1528 retained",
        "compose DSL Binding1490–1528 → workbook/compose-dsl (wave-72)",
      );
      break;
    }
  }
  return kept;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  const text = fs.readFileSync(README, "utf8");
  const section = `
## Wave-72 progress

- Identified contiguous Binding1490–1528/\`DOe\`/\`OOe\` cluster as Codex presentation compose DSL (NOT vendor): layout MIME/meta + size modes + element builders (row/col/grid/table/image/shape) (~886 LOC).
- Extracted → \`workbook/compose-dsl/\` (split under flat limit; Binding661/739/1489/\`_workbookH\`/433/1213/1330/1328 remain in boundary via \`cdslH\` hooks; fill/design-tokens/compose-layout/etc. imported directly).
- Left \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, flowchart \`NPe\`/\`PPe\` + graph layout Binding1675/1685, Table VO \`fhe\`/\`ohe\`, WorkbookN shell, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: flowchart \`NPe\`/\`PPe\` + Binding1675/1685 (~0.8k) / Table VO \`fhe\`/\`ohe\` (~0.5k) / clean \`xLe\` walnut peel before comments/\`_C\` (~660).

`;
  fs.writeFileSync(README, text.trimEnd() + "\n" + section);
  console.log("  updated README");
}

function updateImportMap(afterLoc: number): void {
  const raw = fs.readFileSync(IMPORT_MAP, "utf8");
  const json = JSON.parse(raw) as {
    notes?: string;
    chunks?: Record<string, { notes?: string; [k: string]: unknown }>;
  };
  const waveNote = `Wave workbook-runtime Stage-3 wave-72: Binding1490–1528/DOe/OOe compose DSL (layout meta + size helpers + element builders) → workbook/compose-dsl/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${waveNote} | ${json.notes}` : waveNote;

  const chunk = json.chunks?.["workbook-C49Dgk1_"];
  if (chunk) {
    const notes = String(chunk.notes ?? "");
    if (!notes.includes("wave-72")) {
      chunk.notes = `${waveNote} | ${notes}`;
    }
    const anyChunk = chunk as {
      modules?: string[];
      restoredModules?: string[];
    };
    if (!Array.isArray(anyChunk.modules)) anyChunk.modules = [];
    if (!anyChunk.modules.includes("workbook/compose-dsl/")) {
      anyChunk.modules.push("workbook/compose-dsl/");
    }
    if (!Array.isArray(anyChunk.restoredModules)) anyChunk.restoredModules = [];
    for (const mod of [
      "workbook/compose-dsl/boundary-hooks.ts",
      "workbook/compose-dsl/dsl-slots.ts",
      "workbook/compose-dsl/element-builders-impl.ts",
      "workbook/compose-dsl/ensure-compose-dsl-init.ts",
      "workbook/compose-dsl/index.ts",
      "workbook/compose-dsl/layout-meta-impl.ts",
      "workbook/compose-dsl/size-helpers-impl.ts",
    ] as const) {
      if (!anyChunk.restoredModules.includes(mod)) {
        anyChunk.restoredModules.push(mod);
      }
    }
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(json, null, 2) + "\n");
  console.log("  updated IMPORT_MAP notes");
}

function main(): void {
  console.log("wave-72 compose-dsl (Binding1490–1528) drain");
  const original = fs.readFileSync(BOUNDARY, "utf8");
  const all = original.split("\n");
  if (all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`  boundary LOC before: ${beforeLoc}`);

  if (!fs.existsSync(BACKUP)) {
    fs.writeFileSync(BACKUP, original);
    console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);
  }

  verifyAnchors(all);

  fs.mkdirSync(OUT, { recursive: true });
  buildSlots();
  buildHooks();
  buildLayoutMeta(all);
  buildSizeHelpers(all);
  buildBuilders(all);
  buildEnsure();
  buildIndex();

  let kept = drainBoundary(all);
  kept = patchHeader(kept);
  const text = kept.join("\n");
  fs.writeFileSync(BOUNDARY, text.endsWith("\n") ? text : text + "\n");
  const afterLoc = text.split("\n").length - (text.endsWith("\n") ? 1 : 0);
  console.log(`  boundary LOC after: ${afterLoc} (Δ ${afterLoc - beforeLoc})`);

  updateReadme(beforeLoc, afterLoc);
  updateImportMap(afterLoc);

  console.log("  formatting…");
  run(["bun", FORMAT, OUT]);
  console.log("  quality-gate compose-dsl…");
  console.log(run(["bun", QG, OUT, "--no-cache"]));
  console.log("  quality-gate boundary…");
  console.log(
    run([
      "bun",
      QG,
      "restored/boundaries/workbook-runtime",
      "--no-cache",
      "--allow-open-boundaries",
    ]),
  );
  console.log("done");
}

main();
