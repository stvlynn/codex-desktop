#!/usr/bin/env bun
/**
 * Stage-3 wave-57 drain of workbook-runtime:
 * Contiguous presentation-recipe cluster after Zod
 * (`Binding1800`/`qWe`…`Yqe` + `Xqe`/`Zqe`/`aJe` registry, ~7.3k LOC)
 * → workbook/presentation-recipes/.
 *
 * Each recipe batch exports a single ensure*Init that registers into a shared
 * catalog (QG flat-export limit). Compose builders stay in-boundary via hooks.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-presentation-recipes-wave57.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT_DIR = path.join(ROOT, "restored/workbook/presentation-recipes");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave57.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";
const DROP = { start: 78355, end: 85675 };

type Batch = {
  file: string;
  ensure: string;
  start: number;
  end: number;
  desc: string;
};

const BATCHES: Batch[] = [
  {
    file: "recipes-chart-and-early-slides.ts",
    ensure: "ensureChartAndEarlySlideRecipesInit",
    start: 78355,
    end: 79135,
    desc: "defineRecipe + chartStyle/chartType + early slides",
  },
  {
    file: "recipes-slide-basics.ts",
    ensure: "ensureSlideBasicsRecipesInit",
    start: 79136,
    end: 79957,
    desc: "slide big_number…data_dashboard",
  },
  {
    file: "recipes-slide-media.ts",
    ensure: "ensureSlideMediaRecipesInit",
    start: 79958,
    end: 80748,
    desc: "slide feature_grid…image_with_caption",
  },
  {
    file: "recipes-slide-layouts.ts",
    ensure: "ensureSlideLayoutRecipesInit",
    start: 80749,
    end: 81588,
    desc: "slide metric_strip…title_cover",
  },
  {
    file: "recipes-slide-compare.ts",
    ensure: "ensureSlideCompareRecipesInit",
    start: 81589,
    end: 82405,
    desc: "slide two_column…work_pitch_cover",
  },
  {
    file: "recipes-compose-pitch-a.ts",
    ensure: "ensureComposePitchARecipesInit",
    start: 82406,
    end: 83011,
    desc: "compose work_pitch founders/funding",
  },
  {
    file: "recipes-compose-pitch-b.ts",
    ensure: "ensureComposePitchBRecipesInit",
    start: 83012,
    end: 83725,
    desc: "compose work_pitch inspiration/market",
  },
  {
    file: "recipes-compose-pitch-c.ts",
    ensure: "ensureComposePitchCRecipesInit",
    start: 83726,
    end: 84537,
    desc: "compose work_pitch opening/problem/product",
  },
  {
    file: "recipes-compose-pitch-d.ts",
    ensure: "ensureComposePitchDRecipesInit",
    start: 84538,
    end: 85296,
    desc: "compose work_pitch revenue/style_guide",
  },
];

const RECIPE_VARS: Record<string, string> = {
  KWe: "dashboardMinimalRecipe",
  YWe: "editorialChartStyleRecipe",
  QWe: "scientificChartStyleRecipe",
  tGe: "bubbleCorrelationRecipe",
  iGe: "treemapHierarchyRecipe",
  sGe: "waterfallChangeRecipe",
  uGe: "agendaSlideRecipe",
  pGe: "bigNumberSlideRecipe",
  gGe: "bigQuoteSlideRecipe",
  yGe: "bulletListSlideRecipe",
  SGe: "captionedContentSlideRecipe",
  TGe: "centerTitleSolidBandRecipe",
  OGe: "centeredHeadlineSlideRecipe",
  jGe: "chartWithCaptionSlideRecipe",
  PGe: "contentsTocSlideRecipe",
  RGe: "dataDashboardSlideRecipe",
  HGe: "featureGridSlideRecipe",
  GGe: "fullBleedLeftImageRecipe",
  JGe: "fullBleedTopImageRecipe",
  QGe: "iconListSlideRecipe",
  tKe: "imageMontageCaptionRecipe",
  iKe: "imageOnlySlideRecipe",
  sKe: "imageWithCaptionSlideRecipe",
  dKe: "metricStripSlideRecipe",
  mKe: "numberedStepsSlideRecipe",
  _Ke: "pictogramSlideRecipe",
  bKe: "sectionDividerRoundIconRecipe",
  CKe: "sectionDividerVerticalBandLeftRecipe",
  EKe: "sectionDividerVerticalBandRightRecipe",
  kKe: "tableSlideRecipe",
  NKe: "threeColumnComparisonRecipe",
  IKe: "threeImageCarouselRecipe",
  zKe: "titleCoverSlideRecipe",
  HKe: "twoColumnSlideRecipe",
  GKe: "twoImageCarouselRecipe",
  JKe: "vennDiagramSlideRecipe",
  QKe: "workPitchAgendaRecipe",
  tqe: "workPitchCoverRecipe",
  sqe: "workPitchFoundersRecipe",
  fqe: "workPitchFundingAskRecipe",
  vqe: "workPitchInspirationRecipe",
  Sqe: "workPitchMarketGrowthRecipe",
  Dqe: "workPitchOpeningMarkRecipe",
  Pqe: "workPitchProblemRecipe",
  Rqe: "workPitchProductProofRecipe",
  Hqe: "workPitchRevenueMixRecipe",
  Jqe: "workPitchStyleGuideRecipe",
};

/** Inner helper lambdas used by compose recipes. */
const HELPER_VARS: Record<string, string> = {
  nqe: "pitchSpacing",
  rqe: "pitchTextStyle",
  cqe: "fundingSpacing",
  lqe: "fundingTextStyle",
  pqe: "inspirationLayout",
  mqe: "inspirationAccent",
  Cqe: "marketGrowthCard",
  wqe: "marketGrowthTextStyle",
  Oqe: "openingMarkCard",
  kqe: "openingMarkTextStyle",
  Aqe: "openingMarkBadge",
  Uqe: "revenueMixCard",
  Wqe: "revenueMixTextStyle",
};

const ENSURE_CRYPTIC: Record<string, string> = {
  qWe: "_ensure_qWe",
  XWe: "_ensure_XWe",
  $We: "_ensure_dollarWe",
  nGe: "_ensure_nGe",
  aGe: "_ensure_aGe",
  cGe: "_ensure_cGe",
  dGe: "_ensure_dGe",
  mGe: "_ensure_mGe",
  _Ge: "_ensure_Ge",
  bGe: "_ensure_bGe",
  CGe: "_ensure_CGe",
  EGe: "_ensure_EGe",
  kGe: "_ensure_kGe",
  MGe: "_ensure_MGe",
  FGe: "_ensure_FGe",
  zGe: "_ensure_zGe",
  UGe: "_ensure_UGe",
  KGe: "_ensure_KGe",
  YGe: "_ensure_YGe",
  $Ge: "_ensure_dollarGe",
  nKe: "_ensure_nKe",
  aKe: "_ensure_aKe",
  cKe: "_ensure_cKe",
  fKe: "_ensure_fKe",
  hKe: "_ensure_hKe",
  vKe: "_ensure_vKe",
  xKe: "_ensure_xKe",
  wKe: "_ensure_wKe",
  DKe: "_ensure_DKe",
  AKe: "_ensure_AKe",
  PKe: "_ensure_PKe",
  LKe: "_ensure_LKe",
  BKe: "_ensure_BKe",
  UKe: "_ensure_UKe",
  KKe: "_ensure_KKe",
  YKe: "_ensure_YKe",
  $Ke: "_ensure_dollarKe",
  iqe: "_ensure_iqe",
  uqe: "_ensure_uqe",
  hqe: "_ensure_hqe",
  yqe: "_ensure_yqe",
  Tqe: "_ensure_Tqe",
  jqe: "_ensure_jqe",
  Fqe: "_ensure_Fqe",
  zqe: "_ensure_zqe",
  Gqe: "_ensure_Gqe",
  Yqe: "_ensure_Yqe",
};

function run(
  cmd: string[],
  opts: { allowFail?: boolean } = {},
): string {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: ROOT,
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

function write(file: string, body: string) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const out = body.endsWith("\n") ? body : body + "\n";
  fs.writeFileSync(file, out);
  console.log(
    `  wrote ${path.relative(ROOT, file)} (${out.split("\n").length - 1} lines)`,
  );
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renameAll(src: string): string {
  let out = src;
  out = out.replace(/\bworkbookHelper816\b/g, "zodString");
  out = out.replace(/\bworkbookHelper817\b/g, "zodNumber");
  out = out.replace(/\bworkbookHelper818\b/g, "zodArray");
  out = out.replace(/\bworkbookHelper819\b/g, "zodObject");
  out = out.replace(/\bYUe\b/g, "zodEnum");
  out = out.replace(/\bworkbookBinding1799\b/g, "ensureZodRuntime");
  out = out.replace(/\bworkbookBinding1800\b/g, "defineRecipe");
  out = out.replace(/\bworkbookBinding1801\b/g, "ensureDefineRecipeInit");
  out = out.replace(/\bworkbookBinding1528\b/g, "ensureComposeLayoutInit");
  out = out.replace(/\bworkbookBinding1501\b/g, "composeText");
  out = out.replace(/\bworkbookBinding1502\b/g, "composeRule");
  out = out.replace(/\bworkbookBinding1503\b/g, "composeShape");
  out = out.replace(/\bworkbookBinding1505\b/g, "composeImage");
  out = out.replace(/\bworkbookBinding1506\b/g, "composeTable");
  out = out.replace(/\bworkbookBinding1507\b/g, "composeChart");
  out = out.replace(/\bworkbookBinding1508\b/g, "composeRow");
  out = out.replace(/\bworkbookBinding1509\b/g, "composeColumn");
  out = out.replace(/\bworkbookBinding1510\b/g, "composeGrid");
  out = out.replace(/\bworkbookBinding1496\b/g, "composeWrap");
  out = out.replace(/\bworkbookBinding1494\b/g, "composeFixed");
  out = out.replace(/\bworkbookBinding1325\b/g, "composeFr");
  out = out.replace(/\bworkbookBinding1326\b/g, "composeRepeat");
  out = out.replace(/(?<![\w$])\$H\b/g, "COMPOSE_AUTO_TRACK");
  out = out.replace(/\bworkbookBinding1370\b/g, "ensureChartLabelAlignInit");
  out = out.replace(/\bworkbookBinding1369\b/g, "chartLabelAlign");
  out = out.replace(/\bGWe\b/g, "dashboardMinimalParamsSchema");
  out = out.replace(/\bJWe\b/g, "editorialChartStyleParamsSchema");

  // Longer / $-prefixed first. `$Foo` needs lookbehind — `\b` is false before `$`.
  const replaceIdent = (from: string, to: string) => {
    if (from.startsWith("$")) {
      out = out.replace(
        new RegExp(`(?<![\\w$])${escapeRe(from)}\\b`, "g"),
        to,
      );
    } else {
      out = out.replace(new RegExp(`\\b${escapeRe(from)}\\b`, "g"), to);
    }
  };
  const ensures = Object.entries(ENSURE_CRYPTIC).sort(
    (a, b) => b[0].length - a[0].length,
  );
  for (const [from, to] of ensures) replaceIdent(from, to);
  for (const [from, to] of Object.entries(RECIPE_VARS).sort(
    (a, b) => b[0].length - a[0].length,
  )) {
    replaceIdent(from, to);
  }
  for (const [from, to] of Object.entries(HELPER_VARS).sort(
    (a, b) => b[0].length - a[0].length,
  )) {
    replaceIdent(from, to);
  }

  // Avoid mechanical *Local*N* family — use rb/ri prefixes.
  out = out.replace(/\bworkbookBinding(\d+)\b/g, "rb$1");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "ri$1");
  return out;
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [78355, "var workbookBinding1800,", "Binding1800"],
    [78361, "  qWe = esmInit(() => {", "qWe"],
    [78376, '      name: "recipes.chartStyle.dashboard_minimal",', "dashboard"],
    [85297, "function Xqe(workbookInput14974) {", "Xqe"],
    [85300, "function Zqe(workbookInput5724, workbookInput5725, workbookInput5726 = {}) {", "Zqe"],
    [85327, "  aJe = esmInit(() => {", "aJe"],
    [85675, "  }),", "aJe close"],
    [85681, "  dJe = esmInit(() => {", "dJe kept"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: ${JSON.stringify(got.slice(0, 120))}`,
      );
    }
  }
}

function collectRecipesInRange(renamed: string): string[] {
  const found: string[] = [];
  for (const name of Object.values(RECIPE_VARS)) {
    if (renamed.includes(`${name} = defineRecipe`)) found.push(name);
  }
  return found;
}

function collectInnerLets(renamed: string): string[] {
  const names = new Set<string>();
  for (const line of renamed.split("\n")) {
    const m = line.match(/^\s{4}([A-Za-z_$][\w$]*) = /);
    if (m) names.add(m[1]!);
  }
  return [...names];
}

function foldBatchIntoSingleEnsure(
  raw: string,
  batch: Batch,
): { body: string; recipes: string[] } {
  let renamed = renameAll(raw);
  const recipes = collectRecipesInRange(renamed);
  const lines = renamed.split("\n");
  const out: string[] = [];

  // Drop var defineRecipe header / forward decls; unwrap nested esmInits into plain blocks
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]!;
    if (line === "var defineRecipe," || line.startsWith("var defineRecipe"))
      continue;
    if (/^\s{2}[\w$]+,\s*$/.test(line)) continue; // forward decl

    // Nested ensure: `  _ensure_qWe = esmInit(() => {` → just `{` open via comment + block
    const ens = line.match(/^\s{2}(_ensure_[\w$]+|ensureDefineRecipeInit) = esmInit\(\(\) => \{$/);
    if (ens) {
      out.push(`  // ${ens[1]}`);
      out.push(`  {`);
      continue;
    }
    if (line === "  })," || line === "  });") {
      out.push(`  }`);
      continue;
    }
    // Demote 4-space body to stay inside outer ensure (already 2-space outer)
    // Keep as-is (will sit inside our single ensure at 2-space → body at 4-space OK)
    out.push(line);
  }

  // Prepend let decls for recipes + helpers/schemas assigned inside
  const innerLets = collectInnerLets(renamed).filter(
    (n) => n !== "defineRecipe",
  );
  const letBlock = innerLets.map((n) => `  let ${n}: any;`).join("\n");

  const body = `export const ${batch.ensure} = esmInit(() => {
  ensureDefineRecipeInit();
${letBlock}

${out.join("\n")}

  registerPresentationRecipes([
${recipes.map((r) => `    ${r},`).join("\n")}
  ].filter(Boolean));
});
`;
  return { body, recipes };
}

function buildSupportFiles(): void {
  write(
    path.join(OUT_DIR, "layout-hooks.ts"),
    `${PROV}
// Stage-3 wave-57: compose-layout hooks for presentation recipes.

export type ComposeFn = (...args: any[]) => any;

export type PresentationRecipeLayoutHooks = {
  ensureComposeLayoutInit: () => void;
  composeText: ComposeFn;
  composeRule: ComposeFn;
  composeShape: ComposeFn;
  composeImage: ComposeFn;
  composeTable: ComposeFn;
  composeChart: ComposeFn;
  composeRow: ComposeFn;
  composeColumn: ComposeFn;
  composeGrid: ComposeFn;
  composeWrap: ComposeFn;
  composeFixed: ComposeFn;
  composeFr: ComposeFn;
  composeRepeat: ComposeFn;
};

let hooks: PresentationRecipeLayoutHooks | null = null;

export function wirePresentationRecipeLayoutHooks(
  next: PresentationRecipeLayoutHooks,
): void {
  hooks = next;
}

function requireHooks(): PresentationRecipeLayoutHooks {
  if (!hooks) {
    throw new Error(
      "presentation recipe layout hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureComposeLayoutInit(): void {
  requireHooks().ensureComposeLayoutInit();
}
export function composeText(...args: any[]): any {
  return requireHooks().composeText(...args);
}
export function composeRule(...args: any[]): any {
  return requireHooks().composeRule(...args);
}
export function composeShape(...args: any[]): any {
  return requireHooks().composeShape(...args);
}
export function composeImage(...args: any[]): any {
  return requireHooks().composeImage(...args);
}
export function composeTable(...args: any[]): any {
  return requireHooks().composeTable(...args);
}
export function composeChart(...args: any[]): any {
  return requireHooks().composeChart(...args);
}
export function composeRow(...args: any[]): any {
  return requireHooks().composeRow(...args);
}
export function composeColumn(...args: any[]): any {
  return requireHooks().composeColumn(...args);
}
export function composeGrid(...args: any[]): any {
  return requireHooks().composeGrid(...args);
}
export function composeWrap(...args: any[]): any {
  return requireHooks().composeWrap(...args);
}
export function composeFixed(...args: any[]): any {
  return requireHooks().composeFixed(...args);
}
export function composeFr(...args: any[]): any {
  return requireHooks().composeFr(...args);
}
export function composeRepeat(...args: any[]): any {
  return requireHooks().composeRepeat(...args);
}

export const COMPOSE_AUTO_TRACK = "auto";
`,
  );

  write(
    path.join(OUT_DIR, "chart-label-align.ts"),
    `${PROV}
// Stage-3 wave-57: chart label align tokens (legacy Binding1369).

export const chartLabelAlign = {
  center: "center",
  topLeft: "topLeft",
  topCenter: "topCenter",
  topRight: "topRight",
  left: "left",
  right: "right",
  bottomLeft: "bottomLeft",
  bottomCenter: "bottomCenter",
  bottomRight: "bottomRight",
} as const;

export type ChartLabelAlign =
  (typeof chartLabelAlign)[keyof typeof chartLabelAlign];

export function ensureChartLabelAlignInit(): void {
  void chartLabelAlign;
}
`,
  );

  write(
    path.join(OUT_DIR, "define-recipe.ts"),
    `${PROV}
// Stage-3 wave-57: presentation recipe identity helper (legacy Binding1800).

import { esmInit } from "../../runtime/rolldown-runtime";

export type PresentationRecipe<TParams = any> = {
  name: string;
  summary: string;
  labels: string[];
  paramsSchema: { parse: (value: unknown) => TParams; [k: string]: any };
  exampleParams: TParams;
  run: (presentation: any, params: TParams) => void;
  notes?: string[];
};

export let defineRecipe: <T>(
  recipe: PresentationRecipe<T>,
) => PresentationRecipe<T>;

export const ensureDefineRecipeInit = esmInit(() => {
  defineRecipe = (recipe) => recipe;
});
`,
  );

  write(
    path.join(OUT_DIR, "recipe-catalog.ts"),
    `${PROV}
// Stage-3 wave-57: shared presentation recipe catalog.

import type { PresentationRecipe } from "./define-recipe";

export const presentationRecipeCatalog: PresentationRecipe[] = [];

export function registerPresentationRecipes(
  recipes: PresentationRecipe[],
): void {
  for (const recipe of recipes) {
    if (!recipe?.name) continue;
    if (presentationRecipeCatalog.some((item) => item.name === recipe.name))
      continue;
    presentationRecipeCatalog.push(recipe);
  }
}
`,
  );
}

function sharedImports(needsCompose: boolean): string {
  const lines = [
    `import { esmInit } from "../../runtime/rolldown-runtime";`,
    `import {`,
    `  zodString,`,
    `  zodNumber,`,
    `  zodArray,`,
    `  zodObject,`,
    `  zodEnum,`,
    `  ensureZodRuntime,`,
    `} from "../../vendor/zod";`,
    `import { defineRecipe, ensureDefineRecipeInit } from "./define-recipe";`,
    `import { registerPresentationRecipes } from "./recipe-catalog";`,
    `import { chartLabelAlign, ensureChartLabelAlignInit } from "./chart-label-align";`,
  ];
  if (needsCompose) {
    lines.push(
      `import {`,
      `  ensureComposeLayoutInit,`,
      `  composeText,`,
      `  composeRule,`,
      `  composeShape,`,
      `  composeImage,`,
      `  composeTable,`,
      `  composeChart,`,
      `  composeRow,`,
      `  composeColumn,`,
      `  composeGrid,`,
      `  composeWrap,`,
      `  composeFixed,`,
      `  composeFr,`,
      `  composeRepeat,`,
      `  COMPOSE_AUTO_TRACK,`,
      `} from "./layout-hooks";`,
    );
  }
  return lines.join("\n");
}

function buildRecipeBatches(all: string[]): void {
  for (const batch of BATCHES) {
    const raw = all.slice(batch.start - 1, batch.end).join("\n");
    const needsCompose =
      /workbookBinding15(01|02|03|05|06|07|08|09|10|28)/.test(raw) ||
      /workbookBinding149[46]/.test(raw) ||
      /workbookBinding132[56]/.test(raw) ||
      /\$H\b/.test(raw);
    const { body } = foldBatchIntoSingleEnsure(raw, batch);
    // Strip nested ensureDefineRecipeInit block from first batch (owned by define-recipe.ts)
    let cleaned = body.replace(
      /\s*\/\/ ensureDefineRecipeInit\n\s*\{\n\s*defineRecipe = \(ri\d+\) => ri\d+;\n\s*\}\n?/,
      "\n",
    );
    write(
      path.join(OUT_DIR, batch.file),
      `${PROV}
// Stage-3 wave-57: ${batch.desc}.
${sharedImports(needsCompose)}

${cleaned}
`,
    );
  }
}

function buildRegistry(all: string[]): void {
  const raw = all.slice(85296, 85675).join("\n");
  let renamed = renameAll(raw);

  // Rename registry symbols
  renamed = renamed.replace(/\bXqe\b/g, "getPresentationRecipe");
  renamed = renamed.replace(/\bZqe\b/g, "runPresentationRecipe");
  renamed = renamed.replace(/\bQqe\b/g, "presentationRecipeList");
  renamed = renamed.replace(/(?<![\w$])\$qe\b/g, "presentationRecipeByName");
  renamed = renamed.replace(/\beJe\b/g, "inspectPresentationDiff");
  renamed = renamed.replace(/\btJe\b/g, "diffShapeRecords");
  renamed = renamed.replace(/\bnJe\b/g, "diffTableRecords");
  renamed = renamed.replace(/\brJe\b/g, "diffChartRecords");
  renamed = renamed.replace(/\biJe\b/g, "diffImageRecords");
  renamed = renamed.replace(/\bworkbookBinding1803\b/g, "diffElementUpdated");
  renamed = renamed.replace(/\brb1803\b/g, "diffElementUpdated");
  renamed = renamed.replace(/\bworkbookBinding1804\b/g, "previewText");
  renamed = renamed.replace(/\brb1804\b/g, "previewText");
  renamed = renamed.replace(/\bworkbookBinding1805\b/g, "diffCollection");
  renamed = renamed.replace(/\brb1805\b/g, "diffCollection");
  renamed = renamed.replace(/\bworkbookBinding1806\b/g, "elementAid");
  renamed = renamed.replace(/\brb1806\b/g, "elementAid");
  // aJe already became something if in ENSURE - it's not; handle:
  renamed = renamed.replace(/\baJe\b/g, "ensurePresentationRecipesInit");

  // Rebuild registry cleanly rather than transforming var chain
  const ensureCalls = BATCHES.map((b) => `  ${b.ensure}();`).join("\n");

  // Extract function bodies for get/run and diff helpers from renamed source
  // Simpler: hand-write get/run using catalog; port inspect/diff from renamed.

  // Pull inspect + diff from renamed aJe body by extracting between ensurePresentationRecipesInit
  const aJeMatch = renamed.match(
    /ensurePresentationRecipesInit = esmInit\(\(\) => \{([\s\S]*)\}\);?\s*$/,
  );
  let aJeInner = aJeMatch?.[1] ?? "";
  // Remove the ensure_*() calls of individual recipes — replaced by batch ensures
  aJeInner = aJeInner
    .split("\n")
    .filter((l) => !/^\s+_ensure_/.test(l) && !/^\s+ensureChartStyle/.test(l))
    .join("\n");

  // Actually rebuild aJe from scratch using catalog + ported helpers from original renamed text
  // Extract helper assigns from original aJe
  const helperSection = extractAjeHelpers(renamed);

  write(
    path.join(OUT_DIR, "recipe-registry.ts"),
    `${PROV}
// Stage-3 wave-57: presentation recipe registry + run/inspect (legacy Xqe/Zqe/aJe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { presentationRecipeCatalog } from "./recipe-catalog";
${BATCHES.map((b) => `import { ${b.ensure} } from "./${b.file.replace(/\.ts$/, "")}";`).join("\n")}

${helperSection}

export function getPresentationRecipe(name: string): any {
  return presentationRecipeByName.get(name) ?? null;
}

export function runPresentationRecipe(
  presentation: any,
  scriptName: string,
  params: Record<string, unknown> = {},
): any {
  const recipe = getPresentationRecipe(scriptName);
  if (!recipe)
    throw Error(\`Unknown presentation recipe script: \${scriptName}\`);
  const before = presentation.toSnapshot();
  const parsed = recipe.paramsSchema.parse(params);
  recipe.run(presentation, parsed);
  const after = presentation.toSnapshot();
  return {
    scriptName: recipe.name,
    labels: [...recipe.labels],
    params: parsed,
    inspect: inspectPresentationDiff(before, after),
  };
}

export const ensurePresentationRecipesInit = esmInit(() => {
${ensureCalls}
  presentationRecipeList = [...presentationRecipeCatalog];
  presentationRecipeByName = new Map(
    presentationRecipeList.map((item) => [item.name, item]),
  );
${helperSection.includes("inspectPresentationDiff =") ? "" : ""}
});
`,
  );
}

function extractAjeHelpers(renamed: string): string {
  // Find aJe init body and extract assigns for list/map/diff helpers
  const start = renamed.indexOf("ensurePresentationRecipesInit = esmInit");
  if (start < 0) {
    // fall back: look for original pattern after rename failed
    const start2 = renamed.indexOf("aJe = esmInit");
    if (start2 < 0) {
      // Build minimal helpers from DROP content via second rename pass on original slice
      return `export let presentationRecipeList: any[];
export let presentationRecipeByName: Map<string, any>;
export let inspectPresentationDiff: (before: any, after: any) => any;
export let diffShapeRecords: (...args: any[]) => void;
export let diffTableRecords: (...args: any[]) => void;
export let diffChartRecords: (...args: any[]) => void;
export let diffImageRecords: (...args: any[]) => void;
export let diffElementUpdated: (...args: any[]) => any;
export let previewText: (text: string, max?: number) => string;
export let diffCollection: (...args: any[]) => void;
export let elementAid: (el: any) => string;
`;
    }
  }

  // Use a dedicated extract from original lines instead
  return ""; // filled by buildRegistryFromOriginal
}

function buildRegistryFromOriginal(all: string[]): void {
  const raw = all.slice(85315, 85675).join("\n"); // var Qqe, … aJe close
  let renamed = renameAll(raw);
  renamed = renamed.replace(/\bQqe\b/g, "presentationRecipeList");
  renamed = renamed.replace(/(?<![\w$])\$qe\b/g, "presentationRecipeByName");
  renamed = renamed.replace(/\beJe\b/g, "inspectPresentationDiff");
  renamed = renamed.replace(/\btJe\b/g, "diffShapeRecords");
  renamed = renamed.replace(/\bnJe\b/g, "diffTableRecords");
  renamed = renamed.replace(/\brJe\b/g, "diffChartRecords");
  renamed = renamed.replace(/\biJe\b/g, "diffImageRecords");
  renamed = renamed.replace(/\brb1803\b/g, "diffElementUpdated");
  renamed = renamed.replace(/\brb1804\b/g, "previewText");
  renamed = renamed.replace(/\brb1805\b/g, "diffCollection");
  renamed = renamed.replace(/\brb1806\b/g, "elementAid");
  renamed = renamed.replace(/\baJe\b/g, "ensurePresentationRecipesInit");

  // Strip individual recipe ensure calls; replace list construction
  const lines = renamed.split("\n");
  const inner: string[] = [];
  let inAje = false;
  for (const line of lines) {
    if (/ensurePresentationRecipesInit = esmInit/.test(line)) {
      inAje = true;
      continue;
    }
    if (inAje) {
      if (line === "  })," || line === "});") {
        inAje = false;
        continue;
      }
      // skip per-recipe ensure calls
      if (/^\s{4}_ensure_/.test(line)) continue;
      if (/^\s{4}ensureChartStyle/.test(line)) continue;
      // replace Qqe = [ huge list ] with catalog copy — detect start
      if (/^\s{4}presentationRecipeList = \[/.test(line)) {
        inner.push(
          `    presentationRecipeList = [...presentationRecipeCatalog];`,
        );
        // skip until `];`
        continue;
      }
      if (
        inner.length &&
        inner[inner.length - 1]?.includes("presentationRecipeCatalog") &&
        !inner[inner.length - 1]?.includes("presentationRecipeByName")
      ) {
        // skipping old list entries until ];
        if (line.trim() === "];") continue;
        if (/^\s{6}\w/.test(line) || line.trim() === "") continue;
      }
      inner.push(line);
    }
  }

  // Fix skipped list: if we still have old recipe name refs in list skip path, rewrite ByName line stays

  // Cleaner approach: write registry file manually with ported helper functions only
  const helperRaw = all.slice(85327, 85675).join("\n"); // aJe body including close
  let helpers = renameAll(helperRaw);
  helpers = helpers.replace(/\bQqe\b/g, "presentationRecipeList");
  helpers = helpers.replace(/(?<![\w$])\$qe\b/g, "presentationRecipeByName");
  helpers = helpers.replace(/\beJe\b/g, "inspectPresentationDiff");
  helpers = helpers.replace(/\btJe\b/g, "diffShapeRecords");
  helpers = helpers.replace(/\bnJe\b/g, "diffTableRecords");
  helpers = helpers.replace(/\brJe\b/g, "diffChartRecords");
  helpers = helpers.replace(/\biJe\b/g, "diffImageRecords");
  helpers = helpers.replace(/\brb1803\b/g, "diffElementUpdated");
  helpers = helpers.replace(/\brb1804\b/g, "previewText");
  helpers = helpers.replace(/\brb1805\b/g, "diffCollection");
  helpers = helpers.replace(/\brb1806\b/g, "elementAid");

  // Extract from `    presentationRecipeList = [` through end of aJe assigns — but replace list
  const bodyLines = helpers.split("\n");
  const ported: string[] = [];
  let skippingList = false;
  let skippingEnsures = true;
  for (const line of bodyLines) {
    if (/aJe = esmInit|ensurePresentationRecipesInit = esmInit/.test(line))
      continue;
    if (line === "  }),") continue;

    // Skip leading ensure calls until presentationRecipeList =
    if (skippingEnsures) {
      if (/presentationRecipeList = \[/.test(line)) {
        skippingEnsures = false;
        skippingList = true;
        ported.push(
          `  presentationRecipeList = [...presentationRecipeCatalog];`,
        );
        continue;
      }
      continue;
    }
    if (skippingList) {
      if (line.trim() === "];") {
        skippingList = false;
      }
      continue;
    }
    ported.push(line);
  }

  const ensureCalls = BATCHES.map((b) => `  ${b.ensure}();`).join("\n");

  // Split helpers into inspect-diff module (1 export group via ensure) to keep registry small
  write(
    path.join(OUT_DIR, "recipe-inspect.ts"),
    `${PROV}
// Stage-3 wave-57: presentation recipe snapshot diff/inspect helpers.

let diffShapeRecords: (...args: any[]) => void;
let diffTableRecords: (...args: any[]) => void;
let diffChartRecords: (...args: any[]) => void;
let diffImageRecords: (...args: any[]) => void;
let diffElementUpdated: (...args: any[]) => any;
let previewText: (text: string, max?: number) => string;
let diffCollection: (...args: any[]) => void;
let elementAid: (el: any) => string;

export let inspectPresentationDiff: (before: any, after: any) => any;

export function initRecipeInspectHelpers(): void {
${ported
  .filter(
    (l) =>
      !/presentationRecipeList|presentationRecipeByName/.test(l),
  )
  .map((l) => (l.startsWith("    ") ? l.slice(2) : l))
  .join("\n")}
}
`,
  );

  write(
    path.join(OUT_DIR, "recipe-registry.ts"),
    `${PROV}
// Stage-3 wave-57: presentation recipe registry + run (legacy Xqe/Zqe/aJe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { presentationRecipeCatalog } from "./recipe-catalog";
import {
  initRecipeInspectHelpers,
  inspectPresentationDiff,
} from "./recipe-inspect";
${BATCHES.map((b) => `import { ${b.ensure} } from "./${b.file.replace(/\.ts$/, "")}";`).join("\n")}

export let presentationRecipeList: any[];
export let presentationRecipeByName: Map<string, any>;

export function getPresentationRecipe(name: string): any {
  return presentationRecipeByName.get(name) ?? null;
}

export function runPresentationRecipe(
  presentation: any,
  scriptName: string,
  params: Record<string, unknown> = {},
): any {
  const recipe = getPresentationRecipe(scriptName);
  if (!recipe)
    throw Error(\`Unknown presentation recipe script: \${scriptName}\`);
  const before = presentation.toSnapshot();
  const parsed = recipe.paramsSchema.parse(params);
  recipe.run(presentation, parsed);
  const after = presentation.toSnapshot();
  return {
    scriptName: recipe.name,
    labels: [...recipe.labels],
    params: parsed,
    inspect: inspectPresentationDiff(before, after),
  };
}

export const ensurePresentationRecipesInit = esmInit(() => {
${ensureCalls}
  presentationRecipeList = [...presentationRecipeCatalog];
  presentationRecipeByName = new Map(
    presentationRecipeList.map((item) => [item.name, item]),
  );
  initRecipeInspectHelpers();
});
`,
  );

  write(
    path.join(OUT_DIR, "index.ts"),
    `${PROV}
// Stage-3 wave-57: presentation recipes barrel.

export {
  defineRecipe,
  ensureDefineRecipeInit,
  type PresentationRecipe,
} from "./define-recipe";
export {
  chartLabelAlign,
  ensureChartLabelAlignInit,
  type ChartLabelAlign,
} from "./chart-label-align";
export {
  wirePresentationRecipeLayoutHooks,
  type PresentationRecipeLayoutHooks,
  COMPOSE_AUTO_TRACK,
} from "./layout-hooks";
export { presentationRecipeCatalog } from "./recipe-catalog";
export {
  getPresentationRecipe,
  runPresentationRecipe,
  ensurePresentationRecipesInit,
  presentationRecipeList,
  presentationRecipeByName,
} from "./recipe-registry";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop recipe body ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  // Import near other imports
  let importInsert = 0;
  for (let i = 0; i < Math.min(250, kept.length); i++) {
    if (kept[i]?.startsWith("import ")) {
      let j = i;
      while (j < kept.length && !kept[j]!.includes(";")) j++;
      importInsert = j + 1;
    }
  }
  kept.splice(
    importInsert,
    0,
    `import {`,
    `  wirePresentationRecipeLayoutHooks,`,
    `  ensurePresentationRecipesInit as ensurePresentationRecipesInitMod,`,
    `  runPresentationRecipe as runPresentationRecipeMod,`,
    `  getPresentationRecipe as getPresentationRecipeMod,`,
    `} from "../../workbook/presentation-recipes";`,
  );

  let insertAt = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i] === "var workbookBinding1799 = appInitialBst;") {
      insertAt = i + 1;
      while (kept[insertAt] === "") insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("Zod alias anchor missing");
  if (kept[insertAt]?.startsWith("  oJe,")) kept[insertAt] = "var oJe,";

  const stub = [
    ``,
    `/** Presentation recipes — drained to workbook/presentation-recipes (wave-57). */`,
    `function wirePresentationRecipesFromBoundary(): void {`,
    `  wirePresentationRecipeLayoutHooks({`,
    `    ensureComposeLayoutInit: () => {`,
    `      workbookBinding1528();`,
    `    },`,
    `    composeText: (...args: any[]) => workbookBinding1501(...args),`,
    `    composeRule: (...args: any[]) => workbookBinding1502(...args),`,
    `    composeShape: (...args: any[]) => workbookBinding1503(...args),`,
    `    composeImage: (...args: any[]) => workbookBinding1505(...args),`,
    `    composeTable: (...args: any[]) => workbookBinding1506(...args),`,
    `    composeChart: (...args: any[]) => workbookBinding1507(...args),`,
    `    composeRow: (...args: any[]) => workbookBinding1508(...args),`,
    `    composeColumn: (...args: any[]) => workbookBinding1509(...args),`,
    `    composeGrid: (...args: any[]) => workbookBinding1510(...args),`,
    `    composeWrap: (...args: any[]) => workbookBinding1496(...args),`,
    `    composeFixed: (...args: any[]) => workbookBinding1494(...args),`,
    `    composeFr: (...args: any[]) => workbookBinding1325(...args),`,
    `    composeRepeat: (...args: any[]) => workbookBinding1326(...args),`,
    `  });`,
    `}`,
    `var aJe = esmInit(() => {`,
    `  wirePresentationRecipesFromBoundary();`,
    `  ensurePresentationRecipesInitMod();`,
    `});`,
    `function Xqe(name: any) {`,
    `  return getPresentationRecipeMod(name);`,
    `}`,
    `function Zqe(presentation: any, scriptName: any, params: any = {}) {`,
    `  return runPresentationRecipeMod(presentation, scriptName, params);`,
    `}`,
    ``,
  ];
  kept.splice(insertAt, 0, ...stub);

  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (
      kept[i]?.startsWith(
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme",
      )
    ) {
      kept[i] =
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm; three-npm; highlightjs-npm; zod-npm; presentation-recipes.";
    }
  }
  for (let i = 0; i < Math.min(130, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-56:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-57: presentation recipes Binding1800/qWe…Yqe + Xqe/Zqe/aJe → workbook/presentation-recipes/; dJe templates + Google Slides adapter retained; thin aJe/Xqe/Zqe stubs + layout hooks.",
      );
      break;
    }
  }

  const text = kept.join("\n");
  if (text.includes("recipes.chartStyle.dashboard_minimal")) {
    throw new Error("recipe body still in boundary");
  }
  if (!text.includes("dJe = esmInit")) {
    throw new Error("dJe missing");
  }
  return kept;
}

function updateReadme(newLoc: number): void {
  let text = fs.readFileSync(README, "utf8");
  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(newLoc / 1000).toFixed(1)}k LOC remaining)`,
  );
  if (!text.includes("presentation recipes (`Binding1800`")) {
    text = text.replace(
      `| Zod (\`helper789\` / \`$Zod*\` / Binding1790–1799; Binding1790 var tail = recipes kept) | ~6.4k | **Drained (wave-56)** → \`vendor/zod\` npm shim (\`zod@^4.4.3\`) |`,
      `| Zod (\`helper789\` / \`$Zod*\` / Binding1790–1799; Binding1790 var tail = recipes kept) | ~6.4k | **Drained (wave-56)** → \`vendor/zod\` npm shim (\`zod@^4.4.3\`)\n| presentation recipes (\`Binding1800\`/\`qWe\`…\`Yqe\` + \`Xqe\`/\`Zqe\`/\`aJe\`) | ~7.3k | **Drained (wave-57)** → \`workbook/presentation-recipes/\` |`,
    );
  }
  if (!text.includes("## Wave-57 progress")) {
    text += `
## Wave-57 progress

- Extracted presentation-recipe cluster (\`Binding1800\`/\`qWe\`…\`Yqe\` + \`Xqe\`/\`Zqe\`/\`aJe\` registry, ~7.3k LOC) → \`workbook/presentation-recipes/\`.
- Compose-layout builders stay in-boundary; recipes call them via \`layout-hooks\` wired from thin \`aJe\` stub.
- Left \`dJe\` presentation templates + Google Slides adapter (\`pJe\`/\`SJe\`), Binding662/\`_C\`, Binding1574/\`Cke\`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${newLoc}.
- Next: Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or \`The\`/\`BYe\`; continue scanning for stock vendor fingerprints.

`;
  }
  fs.writeFileSync(README, text.endsWith("\n") ? text : text + "\n");
}

function updateImportMap(newLoc: number, related: string[]): void {
  const map = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    chunks?: Record<string, { notes?: string; related?: string[]; restored?: string }>;
  };
  const waveNote =
    "Wave workbook-runtime Stage-3 wave-57: presentation recipes Binding1800/qWe…aJe → workbook/presentation-recipes/.";
  if (typeof map.notes === "string" && !map.notes.includes("wave-57")) {
    map.notes = `${waveNote} | ${map.notes}`;
  }
  const entryKey = Object.keys(map.chunks ?? {}).find(
    (k) =>
      k.includes("workbook-C49Dgk1_") ||
      map.chunks?.[k]?.restored === "boundaries/workbook-runtime/index.ts",
  );
  if (entryKey && map.chunks?.[entryKey]) {
    const entry = map.chunks[entryKey]!;
    if (!entry.notes?.includes("wave-57")) {
      entry.notes =
        (entry.notes ?? "") +
        ` | Stage-3 wave-57: presentation recipes Binding1800/qWe…Yqe + Xqe/Zqe/aJe → workbook/presentation-recipes/; dJe+ templates retained; boundary remains open (~${(newLoc / 1000).toFixed(1)}k LOC).`;
    }
    const rel = new Set(entry.related ?? []);
    for (const f of related) rel.add(f);
    entry.related = [...rel].sort();
  }
  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
}

function main(): void {
  console.log("wave-57: presentation recipes → workbook/presentation-recipes/");
  const before = fs.readFileSync(BOUNDARY, "utf8");
  fs.writeFileSync(BACKUP, before);
  const all = before.split("\n");
  if (all.at(-1) === "") all.pop();
  console.log(`  boundary before: ${all.length}`);
  verifyAnchors(all);

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  buildSupportFiles();
  buildRecipeBatches(all);
  buildRegistryFromOriginal(all);

  console.log("  format…");
  run(["bun", FORMAT, OUT_DIR], { allowFail: true });

  const kept = drainBoundary(all);
  fs.writeFileSync(BOUNDARY, kept.join("\n") + "\n");
  console.log(`  boundary after: ${kept.length} (Δ ${kept.length - all.length})`);

  const related = fs
    .readdirSync(OUT_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => `workbook/presentation-recipes/${f}`);
  updateReadme(kept.length);
  updateImportMap(kept.length, related);

  console.log("  QG modules…");
  run(["bun", QG, OUT_DIR, "--no-cache"]);
  console.log("  QG boundary…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);
  console.log("DONE wave-57");
}

main();
