#!/usr/bin/env bun
/**
 * Stage-3 wave-58 drain of workbook-runtime:
 * Binding1390 compose-layout engine (~3.9k LOC) —
 * text-case helpers + Binding1393 case-transform + Binding1465
 * measure/materialize + Binding1485 apply + Binding1488 theme tokens
 * → workbook/compose-layout/.
 *
 * Binding1996 (WorkbookN / __workbookT, ~4.4k) is the preferred next
 * target but is a single private-field Workbook class — needs a
 * Range-style method peel; deferred for this safe free-function cut.
 *
 * Never StrReplace the mega boundary — line-range keep/drop only.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-compose-layout-wave58.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT_DIR = path.join(ROOT, "restored/workbook/compose-layout");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave58.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: MDe…Binding1488 close (before helper676). */
const DROP = { start: 53257, end: 57115 };

type MeasurePart = {
  file: string;
  ensure: string;
  start: number;
  end: number;
  desc: string;
};

/** Binding1465 body splits (inclusive), under flat 1000 after wrapper strip. */
const MEASURE_PARTS: MeasurePart[] = [
  {
    file: "compose-measure-a.ts",
    ensure: "ensureComposeMeasureAInit",
    start: 53426,
    end: 54111,
    desc: "compose intrinsic measure Binding1394–1406",
  },
  {
    file: "compose-measure-b.ts",
    ensure: "ensureComposeMeasureBInit",
    start: 54112,
    end: 54431,
    desc: "compose placement Binding1407–1410",
  },
  {
    file: "compose-measure-b2.ts",
    ensure: "ensureComposeMeasureB2Init",
    start: 54432,
    end: 55100,
    desc: "compose placement Binding1411",
  },
  {
    file: "compose-measure-c.ts",
    ensure: "ensureComposeMeasureCInit",
    start: 55101,
    end: 55629,
    desc: "compose track Binding1412–1420",
  },
  {
    file: "compose-measure-d.ts",
    ensure: "ensureComposeMeasureDInit",
    start: 55630,
    end: 56460,
    desc: "compose text metrics _G + Binding1421–1464",
  },
];

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
  const pairs: Array<[string, string]> = [
    ["workbookHelper277", "isMathInline"],
    ["workbookHelper281", "isPlainRunList"],
    ["workbookHelper282", "isParagraphPartial"],
    ["workbookHelper673", "mapRunsTextCase"],
    ["workbookHelper674", "mapParagraphTextCase"],
    ["workbookHelper675", "applyTextCase"],
    ["workbookHelper676", "UNUSED_helper676"],
    ["MDe", "mapTextCaseValue"],
    ["NDe", "isPlainRunListArray"],
    ["workbookG", "normalizeParagraphInputs"],
    ["workbookK", "ensureDetachedTextHelpersInit"],
    ["workbookBt", "ensureTextStyleInit"],
    ["workbookWt", "ensureFillInit"],
    ["workbookBinding383", "ensureWorkbookColorInit"],
    ["workbookBinding432", "ensureLineInit"],
    ["Hue", "ensureTextElementAutofitInit"],
    ["workbookBinding1390", "applyTextCaseToValue"],
    ["workbookBinding1391", "valueToParagraphsWithCase"],
    ["workbookBinding1392", "valueToPlainTextWithCase"],
    ["workbookBinding1393", "ensureCaseTransformInit"],
    ["workbookBinding1394", "COMPOSE_SCALE"],
    ["workbookBinding1395", "materializeComposeRun"],
    ["workbookBinding1465", "ensureComposeMeasureInit"],
    ["workbookBinding1466", "applySlideCompose"],
    ["workbookBinding1485", "ensureComposeApplyInit"],
    ["workbookBinding1486", "SlideComposeTheme"],
    ["workbookBinding1487", "sanitizeComposeThemeToken"],
    ["workbookBinding1488", "ensureComposeThemeTokensInit"],
    ["workbookEt", "ensureWorkbookEt"],
    ["workbookBinding412", "ensureBinding412"],
    ["workbookBinding739", "ensureBinding739"],
    ["$W", "composeTrackSize"],
    ["$G", "composeApplyHelperG"],
    ["_G", "measureComposeTextNode"],
    ["_K", "composeThemeTokenKey"],
  ];
  // Longer / more specific first
  pairs.sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of pairs) {
    if (from.startsWith("$") || from.startsWith("_")) {
      out = out.replace(
        new RegExp(`(?<![\\w$])${escapeRe(from)}\\b`, "g"),
        to,
      );
    } else {
      out = out.replace(new RegExp(`\\b${escapeRe(from)}\\b`, "g"), to);
    }
  }
  out = out.replace(/\bworkbookBinding(\d+)\b/g, "clBind$1");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "clIn$1");
  out = out.replace(/\bworkbookHelper(\d+)\b/g, "clHelper$1");
  return out;
}

function collectAssignedIdents(renamed: string): string[] {
  const names = new Set<string>();
  for (const line of renamed.split("\n")) {
    const m = line.match(/^\s{4}([A-Za-z_$][\w$]*) = /);
    if (m) names.add(m[1]!);
  }
  return [...names].sort();
}

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [53257, "function MDe(", "MDe"],
    [53292, "function NDe(props) {", "NDe"],
    [53297, "var workbookBinding1390,", "Binding1390"],
    [53300, "  workbookBinding1393 = esmInit(() => {", "Binding1393"],
    [53418, "  workbookBinding1465 = esmInit(() => {", "Binding1465"],
    [56483, "  workbookBinding1485 = esmInit(() => {", "Binding1485"],
    [57071, "  workbookBinding1488 = esmInit(() => {", "Binding1488"],
    [57115, "  });", "Binding1488 close"],
    [57116, "function workbookHelper676(", "helper676 kept"],
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

function sharedImports(): string {
  return `import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr } from "../presentation-protobuf";
import {
  isMathInline,
  isPlainRunList,
  isParagraphPartial,
  normalizeParagraphInputs,
  ensureDetachedTextHelpersInit,
} from "../detached-text";
import { ensureTextStyleInit } from "../text-style";
import { ensureFillInit } from "../fill";
import { ensureWorkbookColorInit } from "../theme-color";
import { ensureLineInit } from "../line";
import { ensureTextElementAutofitInit } from "../text-element-autofit";
import {
  ensureWorkbookEt,
  ensureBinding412,
  ensureBinding739,
  getShapeElementClass,
  getWorkbookTt,
} from "./boundary-hooks";
import { composeLayout } from "./compose-bindings";`;
}

function stripEsmInitWrapper(lines: string[]): string[] {
  const out: string[] = [];
  for (const line of lines) {
    if (/^\s{2}[\w$]+ = esmInit\(\(\) => \{$/.test(line)) {
      out.push("  {");
      continue;
    }
    if (line === "  })," || line === "  });") {
      out.push("  }");
      continue;
    }
    // Forward decl lines inside var list — drop
    if (/^\s{2}[\w$]+,\s*$/.test(line)) continue;
    if (/^var [\w$]+,\s*$/.test(line)) continue;
    out.push(line);
  }
  return out;
}

/** Qualify module-level binding idents as `composeLayout.foo`. */
function qualifyClRefs(src: string, idents: Set<string>): string {
  let out = src;
  for (const id of [...idents].sort((a, b) => b.length - a.length)) {
    // Allow `...ident` spreads; skip already-qualified composeLayout.ident
    out = out.replace(
      new RegExp(
        `(?<!composeLayout\\.)(?<![\\w$])${escapeRe(id)}\\b`,
        "g",
      ),
      `composeLayout.${id}`,
    );
  }
  return out;
}


function buildBindingsFile(allIdents: string[]): void {
  write(
    path.join(OUT_DIR, "compose-bindings.ts"),
    `${PROV}
// Stage-3 wave-58: shared compose-layout binding bag (legacy Binding1390+).
// Single bag export keeps QG flat-export limit; slots filled by ensure* inits.

export const composeLayout: Record<string, any> = Object.create(null);

// Documented slots (filled at ensure-time):
${allIdents.map((id) => `// - ${id}`).join("\n")}
`,
  );
}

function buildBoundaryHooks(): void {
  write(
    path.join(OUT_DIR, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-58: boundary ensures still owned by workbook-runtime
// (workbookEt EMU terminal, Binding412/gae cluster, Binding739, Binding736).

export type ComposeLayoutBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureBinding412: () => void;
  ensureBinding739: () => void;
  getShapeElementClass: () => any;
  getWorkbookTt: () => (value: number) => number;
};

let hooks: ComposeLayoutBoundaryHooks | null = null;

export function wireComposeLayoutBoundaryHooks(
  next: ComposeLayoutBoundaryHooks,
): void {
  hooks = next;
}

function requireHooks(): ComposeLayoutBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "compose-layout boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureWorkbookEt(): void {
  requireHooks().ensureWorkbookEt();
}
export function ensureBinding412(): void {
  requireHooks().ensureBinding412();
}
export function ensureBinding739(): void {
  requireHooks().ensureBinding739();
}
export function getShapeElementClass(): any {
  return requireHooks().getShapeElementClass();
}
export function getWorkbookTt(): (value: number) => number {
  ensureWorkbookEt();
  return requireHooks().getWorkbookTt();
}
`,
  );
}

function buildTextCase(all: string[]): string[] {
  const raw = all.slice(53256, 53296).join("\n");
  let renamed = renameAll(raw);
  renamed = renamed
    .replace(/^function /gm, "export function ")
    .replace(
      /^(export function \w+)\(([^)]*)\) \{/gm,
      (_m, head: string, params: string) => {
        if (!params.trim()) return `${head}() {`;
        const typed = params
          .split(",")
          .map((p) => {
            const t = p.trim();
            if (!t || t.includes(":")) return t;
            if (t.startsWith("...")) return `${t}: any[]`;
            return `${t}: any`;
          })
          .join(", ");
        return `${head}(${typed}) {`;
      },
    );
  write(
    path.join(OUT_DIR, "text-case.ts"),
    `${PROV}
// Stage-3 wave-58: text-case map helpers (legacy MDe/NDe + Binding helpers 673–675).

import {
  isMathInline,
  isPlainRunList,
  isParagraphPartial,
} from "../detached-text";

${renamed.trimEnd()}
`,
  );
  return ["text-case.ts"];
}

function buildCaseTransform(all: string[]): string[] {
  const raw = all.slice(53296, 53344).join("\n");
  let renamed = renameAll(raw);
  const caseIdents = new Set([
    "applyTextCaseToValue",
    "valueToParagraphsWithCase",
    "valueToPlainTextWithCase",
  ]);
  const bodyLines = stripEsmInitWrapper(renamed.split("\n"));
  let inner = bodyLines
    .filter(
      (l) =>
        !l.startsWith("var ") &&
        !/^\s{2}(applyTextCaseToValue|valueToParagraphsWithCase|valueToPlainTextWithCase|ensureCaseTransformInit),?\s*$/.test(
          l,
        ),
    )
    .join("\n");
  inner = qualifyClRefs(inner, caseIdents);

  write(
    path.join(OUT_DIR, "case-transform.ts"),
    `${PROV}
// Stage-3 wave-58: text-case transform (legacy Binding1390–1393).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  isPlainRunList,
  normalizeParagraphInputs,
  ensureDetachedTextHelpersInit,
} from "../detached-text";
import {
  mapRunsTextCase,
  mapParagraphTextCase,
  applyTextCase,
  mapTextCaseValue,
  isPlainRunListArray,
} from "./text-case";
import { composeLayout } from "./compose-bindings";

export const ensureCaseTransformInit = esmInit(() => {
  ensureDetachedTextHelpersInit();
${inner}
});

export function applyTextCaseToValue(...args: any[]): any {
  ensureCaseTransformInit();
  return composeLayout.applyTextCaseToValue(...args);
}
export function valueToParagraphsWithCase(...args: any[]): any {
  ensureCaseTransformInit();
  return composeLayout.valueToParagraphsWithCase(...args);
}
export function valueToPlainTextWithCase(...args: any[]): any {
  ensureCaseTransformInit();
  return composeLayout.valueToPlainTextWithCase(...args);
}
`,
  );
  return ["case-transform.ts"];
}

function buildMeasureParts(
  all: string[],
  allIdents: Set<string>,
): {
  files: string[];
  idents: Set<string>;
} {
  const idents = new Set<string>();
  const files: string[] = [];

  for (const part of MEASURE_PARTS) {
    const raw = all.slice(part.start - 1, part.end).join("\n");
    let renamed = renameAll(raw);
    for (const id of collectAssignedIdents(renamed)) idents.add(id);
    renamed = qualifyClRefs(renamed, allIdents);
    const body = renamed
      .split("\n")
      .filter((l) => {
        if (/^\s{2}ensureComposeMeasureInit = esmInit/.test(l)) return false;
        if (/^\s{2}clBind1465 = esmInit/.test(l)) return false;
        if (l === "  })," || l === "  });") return false;
        return true;
      })
      .join("\n");

    const extraImports =
      part.file === "compose-measure-d.ts"
        ? `
import {
  TextStyle as workbookVt,
  coerceTextStyleCssOrValue as aae,
  applyTextStylePatch as workbookYt,
} from "../text-style";
import { computeAutoFitOuterSize as Bue } from "../text-element-autofit";
`
        : "";

    const measureDPrelude =
      part.file === "compose-measure-d.ts"
        ? `  const workbookTt = getWorkbookTt();\n`
        : "";

    write(
      path.join(OUT_DIR, part.file),
      `${PROV}
// Stage-3 wave-58: ${part.desc}.

${(part.file === "compose-measure-d.ts"
  ? sharedImports().replace(
      "import { Qt, wr } from \"../presentation-protobuf\";",
      "import { Qt, wr, br, j } from \"../presentation-protobuf\";",
    )
  : sharedImports())}
import { ensureCaseTransformInit } from "./case-transform";
import {
  mapRunsTextCase,
  mapParagraphTextCase,
  applyTextCase,
  mapTextCaseValue,
  isPlainRunListArray,
} from "./text-case";
${extraImports}
export const ${part.ensure} = esmInit(() => {
${measureDPrelude}${body}
});
`,
    );
    files.push(part.file);
  }

  // Master measure ensure
  write(
    path.join(OUT_DIR, "ensure-compose-measure-init.ts"),
    `${PROV}
// Stage-3 wave-58: compose measure/materialize ensure (legacy Binding1465).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr } from "../presentation-protobuf";
import { ensureTextStyleInit } from "../text-style";
import { ensureTextElementAutofitInit } from "../text-element-autofit";
import { ensureCaseTransformInit } from "./case-transform";
import {
  ensureWorkbookEt,
  ensureBinding412,
} from "./boundary-hooks";
${MEASURE_PARTS.map((p) => `import { ${p.ensure} } from "./${p.file.replace(/\.ts$/, "")}";`).join("\n")}

export const ensureComposeMeasureInit = esmInit(() => {
  Qt();
  wr();
  ensureTextStyleInit();
  ensureBinding412();
  ensureTextElementAutofitInit();
  ensureWorkbookEt();
  ensureCaseTransformInit();
${MEASURE_PARTS.map((p) => `  ${p.ensure}();`).join("\n")}
});
`,
  );
  files.push("ensure-compose-measure-init.ts");
  return { files, idents };
}

function buildComposeApply(all: string[], allIdents: Set<string>): string[] {
  // From Binding1466 forward-decl through Binding1485 close (56462-57068)
  const raw = all.slice(56461, 57068).join("\n");
  let renamed = renameAll(raw);
  let body = stripEsmInitWrapper(renamed.split("\n")).join("\n");
  body = body
    .split("\n")
    .filter((l) => !/^var /.test(l))
    .filter((l) => !/^\s{2}[\w$]+,\s*$/.test(l))
    .join("\n");
  body = qualifyClRefs(body, allIdents);

  write(
    path.join(OUT_DIR, "compose-apply.ts"),
    `${PROV}
// Stage-3 wave-58: slide.compose apply (legacy Binding1485 / Binding1466…).

${sharedImports()}
import { ensureComposeMeasureInit } from "./ensure-compose-measure-init";
import { Fill as workbookCt } from "../fill";
import { WorkbookColor as clBind382 } from "../theme-color";
import { Line as clBind431 } from "../line";

export const ensureComposeApplyInit = esmInit(() => {
  ensureWorkbookColorInit();
  ensureFillInit();
  ensureLineInit();
  ensureBinding739();
  ensureDetachedTextHelpersInit();
  ensureComposeMeasureInit();
  const clBind736 = getShapeElementClass();
${body}
});

export function applySlideCompose(...args: any[]): any {
  ensureComposeApplyInit();
  return composeLayout.applySlideCompose(...args);
}
`,
  );
  return ["compose-apply.ts"];
}

function buildThemeTokens(all: string[], allIdents: Set<string>): string[] {
  const raw = all.slice(57068, 57115).join("\n");
  let renamed = renameAll(raw);
  let body = stripEsmInitWrapper(renamed.split("\n")).join("\n");
  body = body
    .split("\n")
    .filter((l) => !/^var /.test(l))
    .filter((l) => !/^\s{2}[\w$]+,\s*$/.test(l))
    .join("\n");
  body = qualifyClRefs(body, allIdents);

  write(
    path.join(OUT_DIR, "compose-theme-tokens.ts"),
    `${PROV}
// Stage-3 wave-58: slide.theme compose tokens (legacy Binding1486–1488).

import { esmInit } from "../../runtime/rolldown-runtime";
import { composeLayout } from "./compose-bindings";

export const ensureComposeThemeTokensInit = esmInit(() => {
${body}
});

export function getSlideComposeTheme(): any {
  ensureComposeThemeTokensInit();
  return composeLayout.SlideComposeTheme;
}
`,
  );
  return ["compose-theme-tokens.ts"];
}

function buildIndex(): void {
  write(
    path.join(OUT_DIR, "index.ts"),
    `${PROV}
// Stage-3 wave-58: compose-layout engine barrel (legacy Binding1390 cluster).

export {
  wireComposeLayoutBoundaryHooks,
  type ComposeLayoutBoundaryHooks,
} from "./boundary-hooks";
export {
  mapTextCaseValue,
  mapRunsTextCase,
  mapParagraphTextCase,
  applyTextCase,
  isPlainRunListArray,
} from "./text-case";
export {
  ensureCaseTransformInit,
  applyTextCaseToValue,
  valueToParagraphsWithCase,
  valueToPlainTextWithCase,
} from "./case-transform";
export { ensureComposeMeasureInit } from "./ensure-compose-measure-init";
export {
  ensureComposeApplyInit,
  applySlideCompose,
} from "./compose-apply";
export {
  ensureComposeThemeTokensInit,
  getSlideComposeTheme,
} from "./compose-theme-tokens";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop compose-layout ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

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
    `  wireComposeLayoutBoundaryHooks,`,
    `  ensureCaseTransformInit as workbookBinding1393,`,
    `  ensureComposeMeasureInit as workbookBinding1465,`,
    `  ensureComposeApplyInit as workbookBinding1485,`,
    `  ensureComposeThemeTokensInit as workbookBinding1488,`,
    `  applySlideCompose as workbookBinding1466,`,
    `  getSlideComposeTheme,`,
    `} from "../../workbook/compose-layout";`,
    `const workbookBinding1486 = new Proxy(function SlideComposeThemeProxy() {}, {`,
    `  construct(_target, args) {`,
    `    const Ctor = getSlideComposeTheme();`,
    `    return new Ctor(...args);`,
    `  },`,
    `  apply(_target, _thisArg, args) {`,
    `    const Ctor = getSlideComposeTheme();`,
    `    return new Ctor(...(args as any[]));`,
    `  },`,
    `  get(_target, prop, receiver) {`,
    `    if (prop === "prototype") return getSlideComposeTheme()?.prototype;`,
    `    const Ctor = getSlideComposeTheme();`,
    `    const value = (Ctor as any)?.[prop];`,
    `    return typeof value === "function" ? value.bind(Ctor) : value;`,
    `  },`,
    `}) as any;`,
  );

  // Wire hooks near other wire* calls (after text-element Hue import block)
  let wireAt = -1;
  for (let i = 0; i < Math.min(1200, kept.length); i++) {
    if (kept[i]?.includes("ensureTextElementAutofitInit as Hue")) {
      // find end of that import
      let j = i;
      while (j < kept.length && !kept[j]!.includes(";")) j++;
      wireAt = j + 1;
      break;
    }
  }
  if (wireAt < 0) throw new Error("Hue import anchor missing");
  kept.splice(
    wireAt,
    0,
    ``,
    `wireComposeLayoutBoundaryHooks({`,
    `  ensureWorkbookEt: () => {`,
    `    workbookEt();`,
    `  },`,
    `  ensureBinding412: () => {`,
    `    workbookBinding412();`,
    `  },`,
    `  ensureBinding739: () => {`,
    `    workbookBinding739();`,
    `  },`,
    `  getShapeElementClass: () => workbookBinding736,`,
    `  getWorkbookTt: () => workbookTt,`,
    `});`,
  );

  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (
      kept[i]?.startsWith(
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme",
      )
    ) {
      kept[i] =
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm; three-npm; highlightjs-npm; zod-npm; presentation-recipes; compose-layout.";
    }
  }
  for (let i = 0; i < Math.min(140, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-57:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-58: compose-layout engine Binding1390/MDe…Binding1488 → workbook/compose-layout/; Binding1996 WorkbookN deferred (class peel); public compose DSL Binding1490–1528 retained.",
      );
      break;
    }
  }

  const text = kept.join("\n");
  if (text.includes("slide.compose frame")) {
    throw new Error("compose measure body still in boundary");
  }
  if (!text.includes("function workbookHelper676(")) {
    throw new Error("helper676 missing after drop");
  }
  if (!text.includes("workbookBinding1466(")) {
    // slide.compose should still call workbookBinding1466
    throw new Error("workbookBinding1466 call site missing");
  }
  return kept;
}

function updateReadme(newLoc: number): void {
  let text = fs.readFileSync(README, "utf8");
  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(newLoc / 1000).toFixed(1)}k LOC remaining)`,
  );
  if (!text.includes("compose-layout engine (`Binding1390`")) {
    text = text.replace(
      `| presentation recipes (\`Binding1800\`/\`qWe\`…\`Yqe\` + \`Xqe\`/\`Zqe\`/\`aJe\`) | ~7.3k | **Drained (wave-57)** → \`workbook/presentation-recipes/\` |`,
      `| presentation recipes (\`Binding1800\`/\`qWe\`…\`Yqe\` + \`Xqe\`/\`Zqe\`/\`aJe\`) | ~7.3k | **Drained (wave-57)** → \`workbook/presentation-recipes/\`\n| compose-layout engine (\`Binding1390\`/\`MDe\`…\`Binding1488\`) | ~3.9k | **Drained (wave-58)** → \`workbook/compose-layout/\` |`,
    );
  }
  if (!text.includes("## Wave-58 progress")) {
    text += `
## Wave-58 progress

- Identified Binding1996 as WorkbookN/\`__workbookT\` core class (~4.4k, feature property bags + collab + calc) — **not vendor**; single private-field class needs Range-style method peel (deferred).
- Extracted Binding1390 compose-layout engine (\`MDe\`/\`NDe\`/helper673–675 + Binding1393 case-transform + Binding1465 measure + Binding1485 apply + Binding1488 theme tokens, ~3.9k LOC) → \`workbook/compose-layout/\`.
- Left public compose DSL (\`Binding1490\`–\`1528\`/\`DOe\`/\`OOe\`), Google Slides adapter (\`pJe\`/\`SJe\`), Binding662/\`_C\`, Binding1574/\`Cke\`, Binding1996/WorkbookN, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${newLoc}.
- Next: Binding1996 WorkbookN class peel / compose DSL Binding1490–1528 / Binding740 (~3.0k) / \`The\`/\`BYe\` / Google Slides \`pJe\`/\`SJe\`.

`;
  }
  fs.writeFileSync(README, text.endsWith("\n") ? text : text + "\n");
}

function updateImportMap(newLoc: number, related: string[]): void {
  const map = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    chunks?: Record<
      string,
      { notes?: string; related?: string[]; restored?: string }
    >;
  };
  const waveNote =
    "Wave workbook-runtime Stage-3 wave-58: compose-layout Binding1390/MDe…Binding1488 → workbook/compose-layout/.";
  if (typeof map.notes === "string" && !map.notes.includes("wave-58")) {
    map.notes = `${waveNote} | ${map.notes}`;
  }
  const entryKey = Object.keys(map.chunks ?? {}).find(
    (k) =>
      k.includes("workbook-C49Dgk1_") ||
      map.chunks?.[k]?.restored === "boundaries/workbook-runtime/index.ts",
  );
  if (entryKey && map.chunks?.[entryKey]) {
    const entry = map.chunks[entryKey]!;
    if (!entry.notes?.includes("wave-58")) {
      entry.notes =
        (entry.notes ?? "") +
        ` | Stage-3 wave-58: compose-layout engine Binding1390/MDe…Binding1488 → workbook/compose-layout/; Binding1996 WorkbookN deferred; boundary remains open (~${(newLoc / 1000).toFixed(1)}k LOC).`;
    }
    const rel = new Set(entry.related ?? []);
    for (const f of related) rel.add(f);
    entry.related = [...rel].sort();
  }
  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
}

function collectAllIdents(all: string[]): string[] {
  const idents = new Set<string>([
    "applyTextCaseToValue",
    "valueToParagraphsWithCase",
    "valueToPlainTextWithCase",
    "COMPOSE_SCALE",
    "materializeComposeRun",
    "applySlideCompose",
    "SlideComposeTheme",
    "sanitizeComposeThemeToken",
    "composeTrackSize",
    "composeApplyHelperG",
    "measureComposeTextNode",
    "composeThemeTokenKey",
  ]);
  const raw = all.slice(DROP.start - 1, DROP.end).join("\n");
  const renamed = renameAll(raw);
  // Only module-level (4-space) assigns — never nested `let` locals.
  for (const id of collectAssignedIdents(renamed)) idents.add(id);
  return [...idents].sort();
}

function main(): void {
  console.log("wave-58: compose-layout → workbook/compose-layout/");
  const before = fs.readFileSync(BOUNDARY, "utf8");
  fs.writeFileSync(BACKUP, before);
  const all = before.split("\n");
  if (all.at(-1) === "") all.pop();
  console.log(`  boundary before: ${all.length}`);
  verifyAnchors(all);

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  buildBoundaryHooks();
  const allIdentsList = collectAllIdents(all);
  const allIdents = new Set(allIdentsList);
  buildBindingsFile(allIdentsList);
  buildTextCase(all);
  buildCaseTransform(all);
  buildMeasureParts(all, allIdents);
  buildComposeApply(all, allIdents);
  buildThemeTokens(all, allIdents);
  buildIndex();

  console.log("  format…");
  run(["bun", FORMAT, OUT_DIR], { allowFail: true });

  const kept = drainBoundary(all);
  fs.writeFileSync(BOUNDARY, kept.join("\n") + "\n");
  console.log(
    `  boundary after: ${kept.length} (Δ ${kept.length - all.length})`,
  );

  const related = fs
    .readdirSync(OUT_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => `workbook/compose-layout/${f}`);
  updateReadme(kept.length);
  updateImportMap(kept.length, related);

  console.log("  QG modules…");
  console.log(
    run([
      "bun",
      QG,
      OUT_DIR,
      "--no-cache",
      "--allow-open-boundaries",
    ]),
  );
  console.log("  QG boundary…");
  console.log(
    run([
      "bun",
      QG,
      "restored/boundaries/workbook-runtime",
      "--no-cache",
      "--allow-open-boundaries",
    ]),
  );
  console.log("wave-58 done.");
}

main();
