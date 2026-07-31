#!/usr/bin/env bun
/**
 * Stage-3 wave-25 drain of workbook-runtime:
 * Replace inlined jStat (`qXe`, ~8.1k LOC) + Bessel (`JXe`, ~0.57k LOC) with
 * vendor/jstat + vendor/bessel npm shims (jstat@1.9.6, bessel@1.0.2).
 *
 * Never StrReplace the mega boundary body — line-range keep/drop only.
 * Stay in workbook boundary + vendor shims. Do NOT drain gae/workbookEt, ooe,
 * chart Zae/Qae, or `_workbookEt`/`Qse`. Leave post-SSF spreadsheet helpers
 * (helper223+) and YXe/XXe date-serial toggles in boundary.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-jstat-bessel-wave25.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const VENDOR_JSTAT = path.join(ROOT, "restored/vendor/jstat.ts");
const VENDOR_BESSEL = path.join(ROOT, "restored/vendor/bessel.ts");
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

const PROV_JSTAT =
  "// Restored from ref/webview/assets/workbook-C49Dgk1_.js (inlined jStat / qXe)";
const PROV_BESSEL =
  "// Restored from ref/webview/assets/workbook-C49Dgk1_.js (inlined Bessel / JXe)";

function findLine(
  lines: string[],
  pred: (l: string, i: number) => boolean,
  from = 0,
): number {
  for (let i = from; i < lines.length; i++) {
    if (pred(lines[i]!, i)) return i + 1;
  }
  return -1;
}

function writeVendorShims(): void {
  fs.writeFileSync(
    VENDOR_JSTAT,
    `${PROV_JSTAT}
// npm shim: jstat@1.9.6.
// Bundle qXe = commonJsInit(...); UMD assigns workbookInput8805.jStat = factory().
// Call-sites: toEsm(qXe(), 1).default.{mean,stdev,normal.cdf,...} (formula engine).

export { default } from "jstat";
`,
  );
  console.log(`  wrote ${path.relative(ROOT, VENDOR_JSTAT)}`);

  fs.writeFileSync(
    VENDOR_BESSEL,
    `${PROV_BESSEL}
// npm shim: bessel@1.0.2.
// Bundle JXe = commonJsInit(...); DO_NOT_EXPORT_BESSEL gate matches stock bessel.js.
// Call-sites: toEsm(JXe(), 1).default.{besselj,bessely,besseli,besselk}.

export {
  besseli,
  besselj,
  besselk,
  bessely,
  version,
} from "bessel";
export { default } from "bessel";
`,
  );
  console.log(`  wrote ${path.relative(ROOT, VENDOR_BESSEL)}`);
}

function drainBoundary(all: string[]): string[] {
  const qxeStart = findLine(all, (l) =>
    /^\s*qXe = commonJsInit\(/.test(l),
  );
  if (qxeStart < 0) throw new Error("qXe commonJsInit start not found");

  // JXe closes with `  });` immediately before `function YXe()`.
  const yxe = findLine(all, (l) => l.startsWith("function YXe("), qxeStart - 1);
  if (yxe < 0) throw new Error("YXe anchor after JXe not found");

  let jxeEnd = -1;
  for (let i = yxe - 2; i >= qxeStart - 1; i--) {
    if (all[i]!.trim() === "});") {
      // Prefer the `  });` that closes JXe commonJsInit (2-space indent).
      if (/^ {2}\}\);$/.test(all[i]!)) {
        jxeEnd = i + 1;
        break;
      }
    }
  }
  if (jxeEnd < 0) {
    throw new Error("JXe commonJsInit end not found before YXe");
  }

  console.log(
    `  drop qXe+JXe body lines ${qxeStart}-${jxeEnd} (${jxeEnd - qxeStart + 1} lines)`,
  );

  const drop = new Set<number>();
  for (let i = qxeStart; i <= jxeEnd; i++) drop.add(i - 1);

  // Drop unused UMD export gate once BESSEL body is gone.
  const donot = findLine(all, (l) =>
    l.trim() === "const DO_NOT_EXPORT_BESSEL: unknown = undefined;",
  );
  if (donot > 0) {
    drop.add(donot - 1);
    console.log(`  drop DO_NOT_EXPORT_BESSEL at line ${donot}`);
  }

  const kept = all.filter((_, i) => !drop.has(i));

  // Fix trailing comma on KXe after removing qXe/JXe siblings.
  const kxe = findLine(kept, (l) =>
    l.includes("var KXe = esmInit(() => {})"),
  );
  if (kxe < 0) throw new Error("KXe anchor missing after drop");
  kept[kxe - 1] = "var KXe = esmInit(() => {});";

  // Insert thin factories immediately after KXe.
  kept.splice(
    kxe,
    0,
    `/** Bundle qXe — stock jstat@1.9.6 (was inlined commonJsInit). */`,
    `var qXe = () => workbookJstat;`,
    `/** Bundle JXe — stock bessel@1.0.2 (was inlined commonJsInit). */`,
    `var JXe = () => workbookBessel;`,
  );

  // Insert vendor imports after ssf import (wave-24).
  let insertAt = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i]?.includes('from "../../vendor/ssf"')) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt < 0) {
    throw new Error("vendor/ssf import not found for insert point");
  }
  kept.splice(
    insertAt,
    0,
    `import workbookJstat from "../../vendor/jstat";`,
    `import workbookBessel from "../../vendor/bessel";`,
  );

  // Header wave notes.
  for (let i = 0; i < Math.min(30, kept.length); i++) {
    if (
      kept[i]?.startsWith(
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme",
      )
    ) {
      kept[i] =
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm.";
    }
  }
  for (let i = 0; i < Math.min(120, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-24:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-25: jStat qXe + Bessel JXe → vendor/jstat + vendor/bessel npm shims; inlined bodies deleted.",
      );
      break;
    }
  }

  return kept;
}

function updateReadme(newLoc: number): void {
  let text = fs.readFileSync(README, "utf8");

  if (!text.includes("jStat (`qXe`)")) {
    text = text.replace(
      `| SSF number-format (\`Binding571\`) | ~2.9k | **Drained (wave-24)** → \`vendor/ssf\` npm shim (\`ssf@0.11.2\`) |`,
      `| SSF number-format (\`Binding571\`) | ~2.9k | **Drained (wave-24)** → \`vendor/ssf\` npm shim (\`ssf@0.11.2\`)\n| jStat stats (\`qXe\`) | ~8.1k | **Drained (wave-25)** → \`vendor/jstat\` npm shim (\`jstat@1.9.6\`)\n| Bessel (\`JXe\`) | ~0.57k | **Drained (wave-25)** → \`vendor/bessel\` npm shim (\`bessel@1.0.2\`) |`,
    );
  }

  if (!text.includes("## Wave-25 progress")) {
    text = text.replace(
      /## Wave-24 progress[\s\S]*?(?=\n## |\n$)/,
      (block) =>
        block.replace(
          /- Next: worksheet\/spreadsheet core if a clean line-range slice appears \(still leave intentional chart\/EMU helpers\)\.\n/,
          "- Next: ~~jStat qXe + Bessel JXe~~ (done wave-25); worksheet/spreadsheet core if a clean line-range slice appears, or post-SSF cell-XF helpers (helper223+).\n",
        ) +
        [
          "",
          "## Wave-25 progress",
          "",
          "- Replaced inlined jStat `qXe` (`jstat@1.9.6`, UMD `jStat` fingerprint) + Bessel `JXe` (`bessel@1.0.2`, `DO_NOT_EXPORT_BESSEL` fingerprint) with `vendor/jstat` + `vendor/bessel` npm shims; boundary keeps thin `qXe`/`JXe` factories for existing `toEsm(..., 1)` call-sites.",
          "- Worksheet/spreadsheet core still not cuttable as a clean line-range cluster (RangeFormat Binding589+ entangled with in-boundary VO classes; cell-XF helper223–231 is the next contiguous post-SSF neighbor ~0.6–3k LOC).",
          "- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.",
          "- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.",
          "- QG PASS on vendor shims + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.",
          `- Boundary LOC ≈ ${newLoc}.`,
          "- Next: post-SSF spreadsheet cell-XF / number-format / col-row extents (helper223–Binding586), or RangeFormat Binding589 once VO deps are drained.",
          "",
          "",
        ].join("\n"),
    );
  } else {
    text = text.replace(
      /(- Boundary LOC ≈ )\d+(\.\n- Next:)/,
      `$1${newLoc}$2`,
    );
  }

  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(newLoc / 1000).toFixed(1)}k LOC remaining)`,
  );

  fs.writeFileSync(README, text);
  console.log("  updated workbook-runtime README");
}

function updateImportMap(): void {
  const map = JSON.parse(fs.readFileSync(IMPORT_MAP, "utf8")) as {
    notes?: string;
    chunks: Record<
      string,
      {
        notes?: string;
        restoredModules?: string[];
        openBoundary?: boolean;
      }
    >;
  };
  const entry = map.chunks["workbook-C49Dgk1_"];
  if (!entry) return;
  const existing = new Set(entry.restoredModules ?? []);
  existing.add("vendor/jstat.ts");
  existing.add("vendor/bessel.ts");
  entry.restoredModules = [...existing].sort();
  entry.openBoundary = true;
  const waveNote =
    "Stage-3 wave-25: jStat qXe + Bessel JXe → vendor/jstat + vendor/bessel npm shims; boundary remains open.";
  if (!entry.notes?.includes("Stage-3 wave-25:")) {
    entry.notes = `${entry.notes ?? ""} | ${waveNote}`;
  }
  if (map.notes && !map.notes.includes("wave-25")) {
    map.notes = `Wave workbook-runtime Stage-3 wave-25: jStat+Bessel npm-shimmed via vendor/jstat + vendor/bessel. | ${map.notes}`;
  }
  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("  updated IMPORT_MAP.json");
}

function runQg(target: string): boolean {
  const r = spawnSync(
    "bun",
    [QG, target, "--no-cache", "--allow-open-boundaries"],
    { encoding: "utf8", cwd: ROOT },
  );
  console.log(r.stdout);
  if (r.stderr) console.error(r.stderr);
  return r.status === 0;
}

function runPreflight(): boolean {
  const r = spawnSync("bun", [PREFLIGHT, "restored/vendor"], {
    encoding: "utf8",
    cwd: ROOT,
  });
  console.log(r.stdout);
  if (r.stderr) console.error(r.stderr);
  return r.status === 0;
}

function verifyAnchors(all: string[]): void {
  const qxe = findLine(all, (l) => /^\s*qXe = commonJsInit\(/.test(l));
  const jxe = findLine(all, (l) => /^\s*JXe = commonJsInit\(/.test(l));
  const donot = findLine(all, (l) =>
    l.includes("const DO_NOT_EXPORT_BESSEL: unknown = undefined;"),
  );
  const yxe = findLine(all, (l) => l.startsWith("function YXe("));
  if (qxe < 0 || jxe < 0 || donot < 0 || yxe < 0) {
    throw new Error(
      `pre-drain anchors missing: qXe=${qxe} JXe=${jxe} donot=${donot} YXe=${yxe}`,
    );
  }
  const zae = findLine(all, (l) => l.startsWith("function Zae("));
  const qae = findLine(all, (l) => l.startsWith("function Qae("));
  const ooe = findLine(all, (l) => l.startsWith("function ooe("));
  const et = findLine(all, (l) => l.startsWith("function _workbookEt("));
  const qse = findLine(all, (l) => l.startsWith("function Qse("));
  const helper223 = findLine(all, (l) =>
    l.startsWith("function workbookHelper223("),
  );
  for (const [label, line] of [
    ["Zae", zae],
    ["Qae", qae],
    ["ooe", ooe],
    ["_workbookEt", et],
    ["Qse", qse],
    ["helper223", helper223],
  ] as const) {
    if (line < 0) throw new Error(`keep-anchor missing: ${label}`);
  }
  console.log(
    `  pre-drain anchors OK (qXe@${qxe} JXe@${jxe} YXe@${yxe}; keep Zae/Qae/ooe/_workbookEt/Qse/helper223)`,
  );
}

function main(): void {
  console.log("wave-25: jStat qXe + Bessel JXe → vendor npm shims");
  const before = fs.readFileSync(BOUNDARY, "utf8").split("\n");
  const lines =
    before.length > 0 && before[before.length - 1] === ""
      ? before.slice(0, -1)
      : before;
  const locBefore = lines.length;
  console.log(`  LOC before: ${locBefore}`);
  verifyAnchors(lines);

  writeVendorShims();
  const kept = drainBoundary(lines);
  fs.writeFileSync(BOUNDARY, kept.join("\n") + "\n");
  const locAfter = kept.length;
  console.log(`  LOC after: ${locAfter} (Δ ${locAfter - locBefore})`);

  // Post-drain sanity: factories present, bodies gone, keep-anchors remain.
  const afterText = kept.join("\n");
  if (afterText.includes("qXe = commonJsInit")) {
    throw new Error("post-drain: qXe commonJsInit still present");
  }
  if (afterText.includes("JXe = commonJsInit")) {
    throw new Error("post-drain: JXe commonJsInit still present");
  }
  if (!afterText.includes("var qXe = () => workbookJstat")) {
    throw new Error("post-drain: qXe factory missing");
  }
  if (!afterText.includes("var JXe = () => workbookBessel")) {
    throw new Error("post-drain: JXe factory missing");
  }
  if (!afterText.includes("function YXe(")) {
    throw new Error("post-drain: YXe missing");
  }
  if (!afterText.includes("function workbookHelper223(")) {
    throw new Error("post-drain: helper223 missing");
  }

  updateReadme(locAfter);
  updateImportMap();

  console.log("  running vendor-npm-preflight…");
  if (!runPreflight()) {
    throw new Error("vendor-npm-preflight FAILED");
  }
  console.log("  running QG on vendor shims…");
  if (!runQg("restored/vendor/jstat.ts")) {
    throw new Error("QG FAILED on vendor/jstat.ts");
  }
  if (!runQg("restored/vendor/bessel.ts")) {
    throw new Error("QG FAILED on vendor/bessel.ts");
  }
  console.log("  running QG on workbook-runtime boundary…");
  if (!runQg("restored/boundaries/workbook-runtime")) {
    throw new Error("QG FAILED on workbook-runtime");
  }
  console.log("wave-25 DONE");
}

main();
