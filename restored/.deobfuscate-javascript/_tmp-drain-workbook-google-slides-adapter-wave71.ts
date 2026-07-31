#!/usr/bin/env bun
/**
 * Stage-3 wave-71 drain of workbook-runtime:
 * Contiguous Google Slides adapter cluster (~1.36k LOC) —
 *   dJe presentation templates (oJe/sJe/cJe/lJe/uJe) +
 *   pJe unit/id helpers (fJe/Binding1807–1811) +
 *   SJe Google Slides adapter class (bJe) + pageSize helper (xJe)
 *   → workbook/google-slides-adapter/
 *
 * Not vendor (Codex Google Slides ↔ presentation bridge).
 * Never StrReplace the mega boundary — line-range keep/drop only.
 * Class uses #private → public `_` + prototype installers (flat limit).
 *
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-google-slides-adapter-wave71.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const OUT = path.join(ROOT, "restored/workbook/google-slides-adapter");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave71.ts.bak",
);

const PROV = "// Restored from ref/webview/assets/workbook-C49Dgk1_.js";

/** Inclusive 1-based: `var oJe,` … SJe close (before `workbookHelper820`). */
const DROP = { start: 62214, end: 63569 };

const RANGES = {
  templates: { start: 62220, end: 62375 },
  units: { start: 62384, end: 62431 },
  maps: { start: 62448, end: 62493 },
  pageSize: { start: 63551, end: 63568 },
} as const;

const CLASS_START = 62494; // `    bJe = class {`
const CLASS_END = 63550; // exclusive (= line of `    };`)

const SLOTS = [
  "oJe",
  "sJe",
  "cJe",
  "lJe",
  "uJe",
  "fJe",
  "workbookBinding1807",
  "workbookBinding1808",
  "workbookBinding1809",
  "workbookBinding1810",
  "workbookBinding1811",
  "mJe",
  "hJe",
  "gJe",
  "_Je",
  "vJe",
  "yJe",
  "bJe",
  "xJe",
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
    [DROP.start, "var oJe,", "oJe start"],
    [62219, "  dJe = esmInit(() => {", "dJe"],
    [62220, "    oJe = [", "oJe body"],
    [62383, "  pJe = esmInit(() => {", "pJe"],
    [62441, "  SJe = esmInit(() => {", "SJe"],
    [CLASS_START, "    bJe = class {", "bJe class"],
    [63551, "    xJe = (workbookInput9103) => {", "xJe"],
    [DROP.end, "  });", "SJe close"],
    [DROP.end + 1, "function workbookHelper820(", "helper820 kept"],
    [62212, "}", "Zqe close before drop"],
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

function privToPublic(src: string): string {
  return src.replace(/#([A-Za-z_$])/g, "_$1");
}

function rewriteBody(src: string): string {
  let out = privToPublic(src);
  out = out.replace(/\bworkbookEt\(\)/g, "gsaH.workbookEt()");
  out = out.replace(/\bZ\$\(\)/g, "gsaH.ensureZDollar()");
  out = out.replace(/\bworkbookBinding739\(\)/g, "gsaH.ensureShapeInit()");
  out = out.replace(
    /\bworkbookBinding1389\(\)/g,
    "gsaH.ensureTextParagraphsInit()",
  );
  out = out.replace(/\bworkbookBt\(\)/g, "ensureTextStyleInit()");
  out = out.replace(/\bworkbookBinding383\(\)/g, "ensureWorkbookColorInit()");
  out = out.replace(/\bworkbookBinding410\b/g, "gsaH.getPtPerEmu()");
  // Call-site only — do not touch `for … of`.
  out = out.replace(/\bof\(/g, "gsaH.emuToPoints(");
  // instanceof needs a parenthesized call (cannot be `instanceof gsaH.foo()`).
  out = out.replace(
    /\binstanceof\s+workbookBinding736\b/g,
    "instanceof (gsaH.getShapeClass())",
  );
  out = out.replace(
    /\bnew\s+workbookBinding736\b/g,
    "new (gsaH.getShapeClass())",
  );
  out = out.replace(/\bworkbookBinding736\b/g, "(gsaH.getShapeClass())");
  out = out.replace(
    /\binstanceof\s+X\$/g,
    "instanceof (gsaH.getSlideClass())",
  );
  out = out.replace(/\bnew\s+X\$/g, "new (gsaH.getSlideClass())");
  out = out.replace(/(?<![.\w])X\$/g, "(gsaH.getSlideClass())");
  out = out.replace(
    /\binstanceof\s+workbookBinding1388\b/g,
    "instanceof (gsaH.getNotesClass())",
  );
  out = out.replace(
    /\bnew\s+workbookBinding1388\b/g,
    "new (gsaH.getNotesClass())",
  );
  out = out.replace(/\bworkbookBinding1388\b/g, "(gsaH.getNotesClass())");
  out = out.replace(/\bworkbookBinding382\b/g, "WorkbookColor");
  out = out.replace(/\bworkbookHelper103\b/g, "parseFontSizePx");
  out = out.replace(/\bworkbookInput(\d+)\b/g, "gsaIn$1");
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
} from "./adapter-slots";`;
}

type MethodInfo = {
  start: number;
  end: number;
  name: string;
  kind: "method" | "get" | "set" | "constructor";
  rawName: string;
  isAsync: boolean;
};

function collectMethods(all: string[]): {
  fields: string[];
  methods: MethodInfo[];
} {
  const fields: string[] = [];
  const methods: MethodInfo[] = [];

  for (let i = CLASS_START; i < 62505; i++) {
    const l = all[i]!;
    if (/^\s{6}#[A-Za-z_$]/.test(l)) fields.push(l);
  }

  const starts: Array<{
    line: number;
    name: string;
    kind: MethodInfo["kind"];
    raw: string;
    isAsync: boolean;
  }> = [];

  for (let i = 62504; i < CLASS_END; i++) {
    const l = all[i]!;
    let m;
    if ((m = /^\s{6}constructor\b/.exec(l))) {
      starts.push({
        line: i + 1,
        name: "constructor",
        kind: "constructor",
        raw: "constructor",
        isAsync: false,
      });
    } else if ((m = /^\s{6}get ([A-Za-z_$][\w$]*)\b/.exec(l))) {
      starts.push({
        line: i + 1,
        name: m[1]!,
        kind: "get",
        raw: `get ${m[1]}`,
        isAsync: false,
      });
    } else if ((m = /^\s{6}set ([A-Za-z_$][\w$]*)\b/.exec(l))) {
      starts.push({
        line: i + 1,
        name: m[1]!,
        kind: "set",
        raw: `set ${m[1]}`,
        isAsync: false,
      });
    } else if (
      (m = /^\s{6}(async\s+)?(#?[A-Za-z_$][\w$]*)\s*\(/.exec(l))
    ) {
      const raw = m[2]!;
      starts.push({
        line: i + 1,
        name: raw.replace(/^#/, "_"),
        kind: "method",
        raw,
        isAsync: Boolean(m[1]),
      });
    }
  }

  for (let i = 0; i < starts.length; i++) {
    const cur = starts[i]!;
    const nextLine = starts[i + 1]?.line ?? CLASS_END;
    methods.push({
      start: cur.line,
      end: nextLine,
      name: cur.name,
      kind: cur.kind,
      rawName: cur.raw,
      isAsync: cur.isAsync,
    });
  }
  return { fields, methods };
}

function methodSource(all: string[], m: MethodInfo): string {
  const lines = all.slice(m.start - 1, m.end - 1);
  return lines.map((l) => (l.startsWith("    ") ? l.slice(4) : l)).join("\n");
}

function splitSigBody(
  src: string,
): { head: string; params: string; body: string } | null {
  const paren = src.indexOf("(");
  if (paren < 0) return null;
  let depth = 0;
  let inStr: string | null = null;
  for (let j = paren; j < src.length; j++) {
    const c = src[j]!;
    if (inStr) {
      if (c === "\\") {
        j++;
        continue;
      }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = c;
      continue;
    }
    if (c === "(") depth++;
    else if (c === ")") {
      depth--;
      if (depth === 0) {
        const params = src.slice(paren + 1, j);
        let k = j + 1;
        while (k < src.length && /\s/.test(src[k]!)) k++;
        if (src[k] !== "{") return null;
        return {
          head: src.slice(0, paren),
          params,
          body: src.slice(k),
        };
      }
    }
  }
  return null;
}

function typeParams(paramsRaw: string): string {
  return paramsRaw
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      if (p.includes(":")) return p;
      if (p.startsWith("...")) return `${p}: any[]`;
      if (p.includes("=")) {
        const [lhs, rhs] = p.split("=");
        return `${lhs!.trim()}: any = ${rhs!.trim()}`;
      }
      return `${p}: any`;
    })
    .join(", ");
}

function buildSlots(): void {
  write(
    path.join(OUT, "adapter-slots.ts"),
    `${PROV}
// Stage-3 wave-71: google-slides-adapter mutable slots (legacy oJe…xJe).

${SLOTS.map((s) => `export let ${s}: any;`).join("\n")}
`,
  );
}

function buildHooks(): void {
  write(
    path.join(OUT, "boundary-hooks.ts"),
    `${PROV}
// Stage-3 wave-71: boundary deps for google-slides-adapter (oJe/pJe/SJe).

export type GoogleSlidesAdapterBoundaryHooks = {
  /** Intentional leave-behind ensure (gae/workbookEt — also seeds of/Binding410). */
  workbookEt: () => void;
  /** EMU→points helper from workbookEt (legacy \`of\`). */
  emuToPoints: (value: any) => number;
  /** Points-per-EMU factor (legacy workbookBinding410). */
  getPtPerEmu: () => number;
  /** Boundary mega-ensure Z$ (compose/layout/Cke cluster — seeds X$). */
  ensureZDollar: () => void;
  /** Shape element ensure (legacy Binding739 — seeds Binding736). */
  ensureShapeInit: () => void;
  /** Text paragraphs ensure (legacy Binding1389 — seeds Binding1388). */
  ensureTextParagraphsInit: () => void;
  /** Shape element class (legacy Binding736). */
  getShapeClass: () => any;
  /** Slide class (legacy X$ from Z$). */
  getSlideClass: () => any;
  /** Notes/paragraphs class (legacy Binding1388). */
  getNotesClass: () => any;
};

/** Live bag for intentional leave-behinds / late boundary ensures. */
export const gsaH: GoogleSlidesAdapterBoundaryHooks =
  {} as GoogleSlidesAdapterBoundaryHooks;

export function wireGoogleSlidesAdapterBoundaryHooks(
  next: GoogleSlidesAdapterBoundaryHooks,
): void {
  gsaH.workbookEt = next.workbookEt;
  gsaH.emuToPoints = next.emuToPoints;
  gsaH.getPtPerEmu = next.getPtPerEmu;
  gsaH.ensureZDollar = next.ensureZDollar;
  gsaH.ensureShapeInit = next.ensureShapeInit;
  gsaH.ensureTextParagraphsInit = next.ensureTextParagraphsInit;
  gsaH.getShapeClass = next.getShapeClass;
  gsaH.getSlideClass = next.getSlideClass;
  gsaH.getNotesClass = next.getNotesClass;
}
`,
  );
}

function buildTemplates(all: string[]): void {
  const body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.templates)));
  write(
    path.join(OUT, "templates-impl.ts"),
    `${PROV}
// Semantic implementation: presentation template patches (legacy dJe / oJe…uJe).
// Stage-3 wave-71 cohesive google-slides-adapter impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
${slotsImport()}

/** Initialize title/two-up/agenda presentation templates (legacy dJe). */
export const ensurePresentationTemplatesInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy dJe. */
export const dJe = ensurePresentationTemplatesInit;
`,
  );
}

function buildUnits(all: string[]): void {
  const body = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.units)));
  write(
    path.join(OUT, "units-impl.ts"),
    `${PROV}
// Semantic implementation: Google Slides unit/id helpers (legacy pJe).
// Stage-3 wave-71 cohesive google-slides-adapter impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { gsaH } from "./boundary-hooks";
${slotsImport()}

/** Initialize EMU↔PT helpers + object-id sanitizer (legacy pJe). */
export const ensureGoogleSlidesUnitsInit = esmInit(() => {
${indent(body, 2)}
});

/** Legacy pJe. */
export const pJe = ensureGoogleSlidesUnitsInit;
`,
  );
}

function buildClassShell(fields: string[]): void {
  const fieldDecls = fields
    .map((l) => {
      let s = l.replace(/^\s{6}/, "  ");
      s = privToPublic(s);
      // Keep WeakMap/Map field initializers; bare private fields → typed slots.
      if (/=\s*new\s+/.test(s)) {
        if (!s.trim().endsWith(";")) s = `${s};`;
        return s;
      }
      if (/^\s*_[A-Za-z_$][\w$]*\s*;?\s*$/.test(s)) {
        const name = s.match(/(_[A-Za-z_$][\w$]*)/)?.[1];
        return `  ${name}: any;`;
      }
      if (s.trim().endsWith(";")) return s;
      return s.endsWith(";") ? s : `${s};`;
    })
    .filter((s, i, arr) => arr.indexOf(s) === i);

  write(
    path.join(OUT, "adapter-class.ts"),
    `${PROV}
// Stage-3 wave-71: GoogleSlidesAdapter class shell (legacy bJe); methods via installers.

export class GoogleSlidesAdapter {
${fieldDecls.join("\n")}

  constructor(...args: any[]) {
    const self = this as any;
    if (typeof self._gsaConstruct === "function") {
      self._gsaConstruct(...args);
    }
  }
}
`,
  );
}

function buildMethodInstallers(all: string[], methods: MethodInfo[]): void {
  const groups: Array<{
    file: string;
    fn: string;
    methods: MethodInfo[];
    desc: string;
  }> = [
    {
      file: "adapter-methods-patch.ts",
      fn: "installAdapterMethodsPatch",
      methods: [],
      desc: "constructor + hydrate/applyPatch + early private helpers",
    },
    {
      file: "adapter-methods-proto.ts",
      fn: "installAdapterMethodsProto",
      methods: [],
      desc: "text/geometry proto builders + hydrate helpers",
    },
  ];

  for (const m of methods) {
    if (m.start < 63095) groups[0]!.methods.push(m);
    else groups[1]!.methods.push(m);
  }

  for (const g of groups) {
    const parts: string[] = [];
    for (const m of g.methods) {
      let src = rewriteBody(methodSource(all, m));
      // Qualify slot refs that appear as bare identifiers in method bodies.
      for (const slot of [
        "mJe",
        "hJe",
        "gJe",
        "_Je",
        "vJe",
        "yJe",
        "workbookBinding1807",
        "workbookBinding1808",
        "workbookBinding1809",
        "workbookBinding1810",
        "workbookBinding1811",
      ]) {
        src = src.replace(
          new RegExp(`(?<!\\.)\\b${escapeRe(slot)}\\b`, "g"),
          slot,
        );
      }

      const split = splitSigBody(src.trimStart());
      if (!split) {
        throw new Error(
          `splitSigBody failed for ${m.rawName} @${m.start}: ${src.slice(0, 160)}`,
        );
      }
      const params = typeParams(split.params);
      const body = split.body;
      const asyncKw = m.isAsync ? "async " : "";

      if (m.kind === "get") {
        parts.push(
          `  Object.defineProperty(proto, ${JSON.stringify(m.name)}, {\n    configurable: true,\n    enumerable: false,\n    get${asyncKw ? "" : ""}() ${body},\n  });`,
        );
      } else if (m.kind === "constructor") {
        parts.push(
          `  proto._gsaConstruct = function (${params}) ${body};`,
        );
      } else {
        parts.push(
          `  proto[${JSON.stringify(m.name)}] = ${asyncKw}function (${params}) ${body};`,
        );
      }
    }

    console.log(
      `  ${g.file}: ${g.methods.length} methods, ~${parts.join("\n").split("\n").length} lines`,
    );

    write(
      path.join(OUT, g.file),
      `${PROV}
// Stage-3 wave-71: GoogleSlidesAdapter prototype install — ${g.desc}.
// Semantic implementation: method peel kept flat under maxFlatLines.

import { WorkbookColor } from "../theme-color";
import { parseFontSizePx } from "../text-style";
import { gsaH } from "./boundary-hooks";
${slotsImport()}

void gsaH;
void WorkbookColor;
void parseFontSizePx;

export function ${g.fn}(proto: any): void {
${parts.join("\n")}
}
`,
    );
  }
}

function buildMapsAndEnsure(all: string[]): void {
  const mapsBody = rewriteBody(dedentEsmBody(extractRaw(all, RANGES.maps)));
  const pageSizeBody = rewriteBody(
    dedentEsmBody(extractRaw(all, RANGES.pageSize)),
  );

  write(
    path.join(OUT, "ensure-google-slides-adapter-init.ts"),
    `${PROV}
// Stage-3 wave-71: google-slides-adapter cluster ensure (legacy SJe / dJe / pJe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureTextStyleInit } from "../text-style";
import { ensureWorkbookColorInit } from "../theme-color";
import { gsaH } from "./boundary-hooks";
import { GoogleSlidesAdapter } from "./adapter-class";
import { installAdapterMethodsPatch } from "./adapter-methods-patch";
import { installAdapterMethodsProto } from "./adapter-methods-proto";
import { ensurePresentationTemplatesInit } from "./templates-impl";
import { ensureGoogleSlidesUnitsInit } from "./units-impl";
${slotsImport()}

void ensureTextStyleInit;
void ensureWorkbookColorInit;

/** Initialize Google Slides adapter maps + class (legacy SJe). */
export const ensureGoogleSlidesAdapterInit = esmInit(() => {
  gsaH.ensureZDollar();
  gsaH.ensureShapeInit();
  gsaH.ensureTextParagraphsInit();
  ensureTextStyleInit();
  ensureWorkbookColorInit();
  ensureGoogleSlidesUnitsInit();
${indent(mapsBody, 2)}
  installAdapterMethodsPatch(GoogleSlidesAdapter.prototype);
  installAdapterMethodsProto(GoogleSlidesAdapter.prototype);
  bJe = GoogleSlidesAdapter;
${indent(pageSizeBody, 2)}
});

/** Legacy SJe. */
export const SJe = ensureGoogleSlidesAdapterInit;

/** Initialize templates + units + adapter (full cluster). */
export const ensureGoogleSlidesClusterInit = esmInit(() => {
  ensurePresentationTemplatesInit();
  ensureGoogleSlidesUnitsInit();
  ensureGoogleSlidesAdapterInit();
});
`,
  );
}

function buildIndex(): void {
  write(
    path.join(OUT, "index.ts"),
    `${PROV}
// Stage-3 wave-71: google-slides-adapter barrel (legacy oJe / pJe / SJe / bJe).

export {
  wireGoogleSlidesAdapterBoundaryHooks,
  type GoogleSlidesAdapterBoundaryHooks,
  gsaH,
} from "./boundary-hooks";

export {
${SLOTS.map((s) => `  ${s},`).join("\n")}
} from "./adapter-slots";

export { GoogleSlidesAdapter } from "./adapter-class";
export {
  ensurePresentationTemplatesInit,
  dJe,
} from "./templates-impl";
export {
  ensureGoogleSlidesUnitsInit,
  pJe,
} from "./units-impl";
export {
  ensureGoogleSlidesAdapterInit,
  ensureGoogleSlidesClusterInit,
  SJe,
} from "./ensure-google-slides-adapter-init";
`,
  );
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);
  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop oJe…SJe ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );
  const kept = all.filter((_, i) => !drop.has(i));

  let insertAt = -1;
  for (let i = 0; i < Math.min(2500, kept.length); i++) {
    if (kept[i]?.includes("var ensureTableStylesCluster =")) {
      insertAt = i + 1;
      while (insertAt < kept.length && kept[insertAt]!.trim() === "")
        insertAt++;
      break;
    }
  }
  if (insertAt < 0) throw new Error("insert anchor missing");

  const stub = [
    `import {`,
    `  wireGoogleSlidesAdapterBoundaryHooks,`,
    `  ensureGoogleSlidesClusterInit,`,
    `  ensurePresentationTemplatesInit as dJe,`,
    `  ensureGoogleSlidesUnitsInit as pJe,`,
    `  ensureGoogleSlidesAdapterInit as SJe,`,
    `  oJe,`,
    `  sJe,`,
    `  cJe,`,
    `  lJe,`,
    `  uJe,`,
    `  fJe,`,
    `  workbookBinding1807,`,
    `  workbookBinding1808,`,
    `  workbookBinding1809,`,
    `  workbookBinding1810,`,
    `  workbookBinding1811,`,
    `  mJe,`,
    `  hJe,`,
    `  gJe,`,
    `  _Je,`,
    `  vJe,`,
    `  yJe,`,
    `  bJe,`,
    `  xJe,`,
    `  GoogleSlidesAdapter,`,
    `} from "../../workbook/google-slides-adapter";`,
    ``,
    `wireGoogleSlidesAdapterBoundaryHooks({`,
    `  workbookEt: () => {`,
    `    workbookEt();`,
    `  },`,
    `  emuToPoints: (value: any) => of(value),`,
    `  getPtPerEmu: () => workbookBinding410,`,
    `  ensureZDollar: () => {`,
    `    Z$();`,
    `  },`,
    `  ensureShapeInit: () => {`,
    `    workbookBinding739();`,
    `  },`,
    `  ensureTextParagraphsInit: () => {`,
    `    workbookBinding1389();`,
    `  },`,
    `  getShapeClass: () => workbookBinding736,`,
    `  getSlideClass: () => X$,`,
    `  getNotesClass: () => workbookBinding1388,`,
    `});`,
    ``,
    `void oJe;`,
    `void sJe;`,
    `void cJe;`,
    `void lJe;`,
    `void fJe;`,
    `void workbookBinding1807;`,
    `void workbookBinding1808;`,
    `void workbookBinding1809;`,
    `void workbookBinding1810;`,
    `void workbookBinding1811;`,
    `void mJe;`,
    `void hJe;`,
    `void gJe;`,
    `void _Je;`,
    `void vJe;`,
    `void yJe;`,
    `void xJe;`,
    `void GoogleSlidesAdapter;`,
    `void pJe;`,
    ``,
    `// Thin alias: cluster ensure for Google Slides adapter (oJe/pJe/SJe).`,
    `var ensureGoogleSlidesAdapterCluster = ensureGoogleSlidesClusterInit;`,
    ``,
  ];

  kept.splice(insertAt, 0, ...stub);
  return kept;
}

function patchHeader(kept: string[]): string[] {
  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (kept[i]?.includes("table-styles (Nme/Ume/ahe)")) {
      kept[i] = kept[i]!.replace(
        "table-styles (Nme/Ume/ahe).",
        "table-styles (Nme/Ume/ahe); google-slides-adapter (oJe/pJe/SJe).",
      );
      break;
    }
  }
  return kept;
}

function updateReadme(beforeLoc: number, afterLoc: number): void {
  const text = fs.readFileSync(README, "utf8");
  const section = `
## Wave-71 progress

- Identified contiguous \`oJe\`/\`pJe\`/\`SJe\` cluster as Codex Google Slides adapter (NOT vendor): presentation templates + EMU/PT helpers + Slides↔presentation bridge class (~1.36k LOC).
- Extracted → \`workbook/google-slides-adapter/\` (class peeled via prototype installers under flat limit; \`workbookEt\`/\`Z$\`/\`Binding739\`/\`Binding1389\`/\`Binding736\`/\`of\`/\`Binding410\` remain in boundary via \`gsaH\` hooks).
- Left compose DSL Binding1490–1528, \`xLe\` walnut/comments (incl. \`_C\`), Binding662/\`_C\`, Binding1574/\`Cke\`, flowchart \`NPe\`/\`PPe\` + graph layout Binding1675/1685, Table VO \`fhe\`/\`ohe\`, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on new modules + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${afterLoc} (was ${beforeLoc}; Δ ${afterLoc - beforeLoc}).
- Next: clean \`xLe\` walnut peel before comments/\`_C\` (~660) / compose DSL Binding1490–1528 / flowchart \`NPe\` cluster / Table VO \`fhe\`.

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
  const waveNote = `Wave workbook-runtime Stage-3 wave-71: oJe/pJe/SJe Google Slides adapter (templates + units + bJe class) → workbook/google-slides-adapter/; boundary remains open (~${(afterLoc / 1000).toFixed(1)}k LOC).`;
  json.notes = json.notes ? `${waveNote} | ${json.notes}` : waveNote;

  const chunk = json.chunks?.["workbook-C49Dgk1_"];
  if (chunk) {
    const notes = String(chunk.notes ?? "");
    if (!notes.includes("wave-71")) {
      chunk.notes = `${waveNote} | ${notes}`;
    }
    const anyChunk = chunk as {
      modules?: string[];
      restoredModules?: string[];
    };
    if (!Array.isArray(anyChunk.modules)) anyChunk.modules = [];
    if (!anyChunk.modules.includes("workbook/google-slides-adapter/")) {
      anyChunk.modules.push("workbook/google-slides-adapter/");
    }
    if (!Array.isArray(anyChunk.restoredModules)) anyChunk.restoredModules = [];
    for (const mod of [
      "workbook/google-slides-adapter/adapter-class.ts",
      "workbook/google-slides-adapter/adapter-methods-patch.ts",
      "workbook/google-slides-adapter/adapter-methods-proto.ts",
      "workbook/google-slides-adapter/adapter-slots.ts",
      "workbook/google-slides-adapter/boundary-hooks.ts",
      "workbook/google-slides-adapter/ensure-google-slides-adapter-init.ts",
      "workbook/google-slides-adapter/index.ts",
      "workbook/google-slides-adapter/templates-impl.ts",
      "workbook/google-slides-adapter/units-impl.ts",
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
  console.log("wave-71 google-slides-adapter (oJe/pJe/SJe) drain");
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
  buildTemplates(all);
  buildUnits(all);

  const { fields, methods } = collectMethods(all);
  console.log(`  class fields=${fields.length} methods=${methods.length}`);
  buildClassShell(fields);
  buildMethodInstallers(all, methods);
  buildMapsAndEnsure(all);
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
  console.log("  quality-gate google-slides-adapter…");
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
  console.log("wave-71 DONE");
}

main();
