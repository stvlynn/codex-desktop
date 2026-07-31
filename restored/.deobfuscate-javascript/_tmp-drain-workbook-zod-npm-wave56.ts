#!/usr/bin/env bun
/**
 * Stage-3 wave-56 drain of workbook-runtime:
 * Replace inlined Zod core + public API
 * (`helper789` / Binding1751… / `$Zod*` / Binding1790…Binding1799, ~6.4k LOC)
 * with the existing `vendor/zod` npm shim (`zod@^4.4.3`).
 *
 * Binding1790's ~8.0k var chain is NOT pure Zod — after Binding1799 it continues
 * into presentation-recipe schemas (`qWe`…`Yqe`, ~7k). Those stay in-boundary.
 * Recipe consumers only need thin aliases:
 *   helper816 → zodString (z.string)
 *   helper817 → zodNumber (z.number)
 *   helper818 → zodArray  (z.array)
 *   helper819 → zodObject (z.object)
 *   YUe       → zodEnum   (z.enum)
 *   Binding1799 → ensureZodRuntime (no-op init)
 *
 * Leaves Binding662/_C, gae/workbookEt, ooe, chart Zae/Qae, `_workbookEt`/`Qse`,
 * Binding1574/Cke.
 *
 * Never StrReplace the mega boundary body — line-range keep/drop only.
 * Stay in workbook boundary + vendor/zod only.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-zod-npm-wave56.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const VENDOR_ZOD = path.join(ROOT, "restored/vendor/zod.ts");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave56.ts.bak",
);

/** Inclusive 1-based: helper789 … Binding1799 esmInit close. */
const DROP = { start: 78339, end: 84723 };

function run(
  cmd: string[],
  opts: { cwd?: string; allowFail?: boolean } = {},
): string {
  const r = spawnSync(cmd[0]!, cmd.slice(1), {
    cwd: opts.cwd ?? ROOT,
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

function verifyAnchors(all: string[]): void {
  const checks: Array<[number, string, string]> = [
    [78338, "  });", "Cze close before Zod"],
    [78339, "function workbookHelper789(", "helper789 Zod class factory"],
    [78414, "var workbookBinding1751,", "Binding1751 ZodEncodeError"],
    [78433, '        this.name = "ZodEncodeError";', "ZodEncodeError fingerprint"],
    [80358, "var workbookBinding1775,", "Binding1775 $ZodType"],
    [80414, '      "$ZodType",', "$ZodType fingerprint"],
    [83684, "var workbookBinding1790,", "Binding1790 ZodType public"],
    [83735, '      "ZodType",', "ZodType fingerprint"],
    [84642, '      "ZodPipe",', "ZodPipe fingerprint"],
    [84662, '      "ZodReadonly",', "ZodReadonly fingerprint"],
    [84720, "  workbookBinding1799 = esmInit(() => {", "Binding1799 zod namespace init"],
    [84723, "  }),", "Binding1799 close"],
    [84724, "  workbookBinding1800,", "Binding1800 recipe identity (kept)"],
    [84730, "  qWe = esmInit(() => {", "qWe first recipe (kept)"],
    [84733, "    GWe = workbookHelper819({", "recipe uses helper819"],
  ];
  for (const [line, prefix, label] of checks) {
    const got = all[line - 1] ?? "";
    if (!got.startsWith(prefix)) {
      throw new Error(
        `${label} miss at ${line}: got ${JSON.stringify(got.slice(0, 140))}`,
      );
    }
  }
  const body = all.slice(DROP.start - 1, DROP.end).join("\n");
  if (!body.includes("$ZodType")) {
    throw new Error("$ZodType fingerprint missing inside DROP");
  }
  if (!body.includes('"ZodPipe"') || !body.includes('"ZodReadonly"')) {
    throw new Error("ZodPipe/ZodReadonly fingerprints missing inside DROP");
  }
  if (!body.includes('"ZodObject"') || !body.includes('"ZodString"')) {
    throw new Error("ZodObject/ZodString fingerprints missing inside DROP");
  }
  // Recipes must NOT be in the drop range.
  if (body.includes("recipes.chartStyle.dashboard_minimal")) {
    throw new Error("recipe body leaked into DROP range");
  }
}

function ensureVendorShim(): void {
  if (!fs.existsSync(VENDOR_ZOD)) {
    throw new Error(`missing ${VENDOR_ZOD}`);
  }
  const text = fs.readFileSync(VENDOR_ZOD, "utf8");
  if (
    !text.includes('from "zod"') ||
    !text.includes("export const zodString") ||
    !text.includes("export function ensureZodRuntime")
  ) {
    throw new Error("vendor/zod.ts does not look like an npm re-export shim");
  }
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);

  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop Zod body lines ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );

  const kept = all.filter((_, i) => !drop.has(i));

  // Expand existing vendor/zod import.
  let zodImport = -1;
  for (let i = 0; i < kept.length; i++) {
    if (
      kept[i]?.includes('from "../../vendor/zod"') &&
      kept[i]?.includes("ensureZodRuntime")
    ) {
      zodImport = i;
      break;
    }
  }
  if (zodImport < 0) {
    throw new Error("existing vendor/zod import not found");
  }
  // Replace single-line import with multi-symbol import (may span prior single line).
  if (kept[zodImport]?.startsWith("import { ensureZodRuntime as appInitialBst }")) {
    kept.splice(
      zodImport,
      1,
      `import {`,
      `  ensureZodRuntime as appInitialBst,`,
      `  zodString,`,
      `  zodNumber,`,
      `  zodArray,`,
      `  zodObject,`,
      `  zodEnum,`,
      `} from "../../vendor/zod";`,
    );
  } else {
    throw new Error(
      `unexpected zod import shape: ${JSON.stringify(kept[zodImport]?.slice(0, 120))}`,
    );
  }

  // After drop, Binding1800 was mid-var (`  workbookBinding1800,`) — promote to var.
  let binding1800 = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i] === "  workbookBinding1800,") {
      const prev = kept[i - 1] ?? "";
      // Should sit right after Cze close now.
      if (prev === "  });" || prev.includes("workbookBinding1750")) {
        binding1800 = i;
        break;
      }
    }
  }
  if (binding1800 < 0) {
    for (let i = 0; i < kept.length; i++) {
      if (
        kept[i] === "  workbookBinding1800," &&
        (kept[i + 1] ?? "").startsWith("  workbookBinding1801 = esmInit")
      ) {
        binding1800 = i;
        break;
      }
    }
  }
  if (binding1800 < 0) {
    throw new Error("Binding1800 anchor missing after drop");
  }
  kept[binding1800] = "var workbookBinding1800,";

  // Insert thin Zod aliases immediately before Binding1800.
  kept.splice(
    binding1800,
    0,
    `/** Bundle Zod — stock zod@^4.4.3 via vendor/zod (was inlined helper789 / $Zod* / Binding1790–1799). */`,
    `var workbookHelper816 = zodString;`,
    `var workbookHelper817 = zodNumber;`,
    `var workbookHelper818 = zodArray;`,
    `var workbookHelper819 = zodObject;`,
    `var YUe = zodEnum;`,
    `var workbookBinding1799 = appInitialBst;`,
    ``,
  );

  // Header wave notes.
  for (let i = 0; i < Math.min(40, kept.length); i++) {
    if (
      kept[i]?.startsWith(
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme",
      )
    ) {
      kept[i] =
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm; three-npm; highlightjs-npm; zod-npm.";
    }
  }
  for (let i = 0; i < Math.min(120, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-55:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-56: inlined Zod (helper789 / Binding1751… / $Zod* / Binding1790–1799) → vendor/zod npm shim (zod@^4.4.3); recipe cluster qWe… kept with helper816–819/YUe/Binding1799 aliases; inlined Zod body deleted.",
      );
      break;
    }
  }

  // Post-drain sanity: recipes still reference aliases, no leftover ZodType factory.
  const text = kept.join("\n");
  if (text.includes('workbookHelper789(') || text.includes('"$ZodType"')) {
    throw new Error("Zod internals still present after drop");
  }
  if (!text.includes("var workbookHelper816 = zodString")) {
    throw new Error("helper816 alias missing");
  }
  if (!text.includes("recipes.chartStyle.dashboard_minimal")) {
    throw new Error("recipe cluster missing after drop");
  }

  return kept;
}

function updateReadme(newLoc: number): void {
  let text = fs.readFileSync(README, "utf8");

  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(newLoc / 1000).toFixed(1)}k LOC remaining)`,
  );

  if (!text.includes("Zod (`helper789`")) {
    text = text.replace(
      `| highlight.js grammars (\`wke\`…\`aAe\` + \`oAe\`/\`sAe\`; contiguous after Binding1574/\`Cke\`) | ~7.9k | **Drained (wave-55)** → \`boundaries/highlight-js\` npm shim (\`highlight.js@^11.11.1\`) |`,
      `| highlight.js grammars (\`wke\`…\`aAe\` + \`oAe\`/\`sAe\`; contiguous after Binding1574/\`Cke\`) | ~7.9k | **Drained (wave-55)** → \`boundaries/highlight-js\` npm shim (\`highlight.js@^11.11.1\`)\n| Zod (\`helper789\` / \`$Zod*\` / Binding1790–1799; Binding1790 var tail = recipes kept) | ~6.4k | **Drained (wave-56)** → \`vendor/zod\` npm shim (\`zod@^4.4.3\`) |`,
    );
  }

  if (!text.includes("## Wave-56 progress")) {
    text += `
## Wave-56 progress

- Confirmed Binding1790 fingerprints as stock Zod (\`ZodType\` / \`ZodPipe\` / \`ZodReadonly\` / \`$Zod*\`). Binding1790's ~8.0k var chain is Zod public API (~1.0k) + presentation-recipe schemas (~7k) — only the Zod slice + preceding \`$Zod*\` core were cut.
- Replaced inlined Zod (\`helper789\` / Binding1751… / \`$Zod*\` / Binding1790–1799, ~6.4k LOC) with existing \`vendor/zod\` npm shim (\`zod@^4.4.3\`).
- Kept thin boundary aliases for recipe consumers: \`helper816\`=\`zodString\`, \`helper817\`=\`zodNumber\`, \`helper818\`=\`zodArray\`, \`helper819\`=\`zodObject\`, \`YUe\`=\`zodEnum\`, \`Binding1799\`=\`ensureZodRuntime\`. Recipe cluster \`qWe\`… retained.
- Left Binding662/\`_C\`, Binding1574/\`Cke\`, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on vendor shim + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${newLoc}.
- Next: Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or \`The\`/\`BYe\`; continue scanning for stock vendor fingerprints.

`;
  }

  fs.writeFileSync(README, text.endsWith("\n") ? text : text + "\n");
  console.log(`  updated README (${newLoc} LOC)`);
}

function updateImportMap(newLoc: number): void {
  const raw = fs.readFileSync(IMPORT_MAP, "utf8");
  const map = JSON.parse(raw) as {
    notes?: string;
    chunks?: Record<
      string,
      {
        notes?: string;
        related?: string[];
        restored?: string;
        [k: string]: unknown;
      }
    >;
  };

  const waveNote =
    "Wave workbook-runtime Stage-3 wave-56: inlined Zod helper789/$Zod*/Binding1790–1799 → vendor/zod npm shim (recipes kept).";
  if (typeof map.notes === "string" && !map.notes.includes("wave-56")) {
    map.notes = `${waveNote} | ${map.notes}`;
  }

  const entryKey = Object.keys(map.chunks ?? {}).find(
    (k) =>
      k.includes("workbook-C49Dgk1_") ||
      map.chunks?.[k]?.restored === "boundaries/workbook-runtime/index.ts",
  );
  if (entryKey && map.chunks?.[entryKey]) {
    const entry = map.chunks[entryKey]!;
    const note =
      ` | Stage-3 wave-56: Zod helper789/$Zod*/Binding1790–1799 → vendor/zod (zod@^4.4.3); recipe qWe… kept via helper816–819/YUe/Binding1799 aliases; boundary remains open (~${(newLoc / 1000).toFixed(1)}k LOC).`;
    if (!entry.notes?.includes("wave-56")) {
      entry.notes = (entry.notes ?? "") + note;
    }
    const related = new Set(entry.related ?? []);
    related.add("vendor/zod.ts");
    entry.related = [...related].sort();
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("  updated IMPORT_MAP.json");
}

function main(): void {
  console.log(
    "wave-56: Zod helper789/$Zod*/Binding1790–1799 → vendor/zod (recipes kept)",
  );
  ensureVendorShim();

  console.log("  vendor-npm preflight (directory + intent)…");
  run(["bun", PREFLIGHT, "restored/vendor"]);
  run([
    "bun",
    PREFLIGHT,
    "restored/vendor/zod.ts",
    "--decision",
    "--intent",
    "npm-shim",
  ]);

  const before = fs.readFileSync(BOUNDARY, "utf8");
  fs.writeFileSync(BACKUP, before);
  console.log(`  backup → ${path.relative(ROOT, BACKUP)}`);

  const all = before.split("\n");
  if (all.length && all[all.length - 1] === "") all.pop();
  const beforeLoc = all.length;
  console.log(`  boundary before: ${beforeLoc} lines`);

  const kept = drainBoundary(all);
  fs.writeFileSync(BOUNDARY, kept.join("\n") + "\n");
  const afterLoc = kept.length;
  console.log(
    `  boundary after: ${afterLoc} lines (Δ ${afterLoc - beforeLoc})`,
  );

  updateReadme(afterLoc);
  updateImportMap(afterLoc);

  console.log("  quality-gate vendor/zod…");
  run([
    "bun",
    QG,
    "restored/vendor/zod.ts",
    "--allow-flat",
    "--no-cache",
  ]);

  console.log("  quality-gate boundary (--allow-open-boundaries)…");
  run([
    "bun",
    QG,
    "restored/boundaries/workbook-runtime",
    "--no-cache",
    "--allow-open-boundaries",
  ]);

  console.log("  vendor-npm preflight (post)…");
  run(["bun", PREFLIGHT, "restored/vendor"]);

  console.log("DONE wave-56");
}

main();
