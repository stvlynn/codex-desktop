#!/usr/bin/env bun
/**
 * Stage-3 wave-54 drain of workbook-runtime:
 * Replace inlined Three.js (`helper502`…`Ybe` MathUtils helpers +
 * `Binding929`/`Xbe` class dump, ~15.3k LOC) with vendor/three npm shim
 * (three@0.170.0).
 *
 * External surface kept as thin aliases:
 *   Binding957  → Vector3
 *   Binding1041 → Color
 *   Binding1060 → BufferGeometry
 *   Binding1099 → Line
 *   Binding1091 → LineBasicMaterial
 *   Binding1073 → Group
 *   Binding972  → Vector4
 *   Binding973  → Box3
 *   Binding954  → MathUtils
 *   Binding1103 → MeshPhysicalMaterial
 *   Binding1101 → CylinderGeometry
 *   Binding1100 → CanvasTexture
 *   Binding1090 → Sprite
 *   Binding1077 → SpriteMaterial
 *   Binding1072 → BoxGeometry
 *   Binding1135 → no-op init (npm import is eager)
 *
 * Leaves Binding662/_C, gae/workbookEt, ooe, chart Zae/Qae, `_workbookEt`/`Qse`.
 *
 * Never StrReplace the mega boundary body — line-range keep/drop only.
 * Stay in workbook boundary + vendor shims only.
 *
 * Usage:
 *   bun restored/.deobfuscate-javascript/_tmp-drain-workbook-three-npm-wave54.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOUNDARY = path.join(
  ROOT,
  "restored/boundaries/workbook-runtime/index.ts",
);
const VENDOR_THREE = path.join(ROOT, "restored/vendor/three.ts");
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
  "restored/.deobfuscate-javascript/_tmp-workbook-runtime-before-wave54.ts.bak",
);

/** Inclusive 1-based: helper502 … end of Xbe esmInit. */
const DROP = { start: 25929, end: 41238 };

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
    [25928, "});", "Binding928 esmInit close"],
    [25929, "function workbookHelper502() {", "helper502 / MathUtils.generateUUID"],
    [26726, "var workbookBinding929,", "Binding929 decl"],
    [26935, "  Xbe = esmInit(() => {", "Xbe esmInit"],
    [27037, "    workbookBinding955 = class WorkbookClass19 {", "Vector2"],
    [28086, "    workbookBinding957 = class WorkbookClass12 {", "Vector3"],
    [34271, "    workbookBinding1041 = class {", "Color"],
    [41230, "      vertexShader: workbookBinding1130.meshphysical_vert,", "meshphysical"],
    [41238, "  });", "Xbe esmInit close"],
    [41239, "function Zbe(workbookInput8088, workbookInput8089 = _I) {", "post-Three Zbe"],
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
  if (!body.includes("THREE.Object3D.add: object can't be added as a child of itself.")) {
    throw new Error("THREE.Object3D fingerprint missing inside DROP range");
  }
  if (!body.includes("meshphysical_frag")) {
    throw new Error("meshphysical_frag fingerprint missing inside DROP range");
  }
  if (!body.includes('workbookBinding942 = "srgb"')) {
    throw new Error("SRGBColorSpace fingerprint missing inside DROP range");
  }
}

function ensureVendorShim(): void {
  if (!fs.existsSync(VENDOR_THREE)) {
    throw new Error(`missing ${VENDOR_THREE} — write vendor/three.ts first`);
  }
  const text = fs.readFileSync(VENDOR_THREE, "utf8");
  if (!text.includes('from "three"') || !text.includes("MeshPhysicalMaterial")) {
    throw new Error("vendor/three.ts does not look like an npm re-export shim");
  }
}

function drainBoundary(all: string[]): string[] {
  verifyAnchors(all);

  const drop = new Set<number>();
  for (let i = DROP.start; i <= DROP.end; i++) drop.add(i - 1);
  console.log(
    `  drop Three.js body lines ${DROP.start}-${DROP.end} (${DROP.end - DROP.start + 1} lines)`,
  );

  const kept = all.filter((_, i) => !drop.has(i));

  // Insert vendor import after yjs import block.
  let insertAt = -1;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i]?.includes('from "../../vendor/yjs"')) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt < 0) {
    throw new Error("vendor/yjs import not found for insert");
  }
  kept.splice(
    insertAt,
    0,
    `import {`,
    `  Box3 as ThreeBox3,`,
    `  BoxGeometry as ThreeBoxGeometry,`,
    `  BufferGeometry as ThreeBufferGeometry,`,
    `  CanvasTexture as ThreeCanvasTexture,`,
    `  Color as ThreeColor,`,
    `  CylinderGeometry as ThreeCylinderGeometry,`,
    `  Group as ThreeGroup,`,
    `  Line as ThreeLine,`,
    `  LineBasicMaterial as ThreeLineBasicMaterial,`,
    `  MathUtils as ThreeMathUtils,`,
    `  Mesh as ThreeMesh,`,
    `  MeshPhysicalMaterial as ThreeMeshPhysicalMaterial,`,
    `  Sprite as ThreeSprite,`,
    `  SpriteMaterial as ThreeSpriteMaterial,`,
    `  Vector3 as ThreeVector3,`,
    `  Vector4 as ThreeVector4,`,
    `} from "../../vendor/three";`,
  );

  // Insert thin aliases immediately before Zbe (first post-drop top-level).
  let zbe = -1;
  for (let i = 0; i < kept.length; i++) {
    if (
      kept[i]?.startsWith(
        "function Zbe(workbookInput8088, workbookInput8089 = _I) {",
      )
    ) {
      zbe = i;
      break;
    }
  }
  if (zbe < 0) throw new Error("Zbe anchor missing after drop");

  kept.splice(
    zbe,
    0,
    `/** Bundle Three.js — stock three@0.170.0 (was inlined Binding929/Xbe + MathUtils helpers). */`,
    `var workbookBinding957 = ThreeVector3;`,
    `var workbookBinding972 = ThreeVector4;`,
    `var workbookBinding973 = ThreeBox3;`,
    `var workbookBinding954 = ThreeMathUtils;`,
    `var workbookBinding1041 = ThreeColor;`,
    `var workbookBinding1060 = ThreeBufferGeometry;`,
    `var workbookBinding1072 = ThreeBoxGeometry;`,
    `var $P = ThreeMesh;`,
    `var workbookBinding1073 = ThreeGroup;`,
    `var workbookBinding1077 = ThreeSpriteMaterial;`,
    `var workbookBinding1090 = ThreeSprite;`,
    `var workbookBinding1091 = ThreeLineBasicMaterial;`,
    `var workbookBinding1099 = ThreeLine;`,
    `var workbookBinding1100 = ThreeCanvasTexture;`,
    `var workbookBinding1101 = ThreeCylinderGeometry;`,
    `var workbookBinding1103 = ThreeMeshPhysicalMaterial;`,
    `var workbookBinding1135 = () => {};`,
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
        "// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm; three-npm.";
    }
  }
  for (let i = 0; i < Math.min(120, kept.length); i++) {
    if (kept[i]?.includes("Stage-3 wave-53:")) {
      kept.splice(
        i + 1,
        0,
        "// Stage-3 wave-54: inlined Three.js (Binding929/Xbe + helper502–Ybe) → vendor/three npm shim (three@0.170.0); inlined body deleted.",
      );
      break;
    }
  }

  return kept;
}

function updateReadme(newLoc: number): void {
  let text = fs.readFileSync(README, "utf8");

  text = text.replace(
    /\*\*Public path:\*\* `boundaries\/workbook-runtime\/index\.ts` \(~[\d.]+k LOC remaining\)/,
    `**Public path:** \`boundaries/workbook-runtime/index.ts\` (~${(newLoc / 1000).toFixed(1)}k LOC remaining)`,
  );

  if (!text.includes("Three.js (`Binding929`")) {
    text = text.replace(
      `| Yjs + lib0 (\`Binding1\`–\`331\` / \`no\` / \`Bte\`) | ~9.5k | **Drained (wave-53)** → \`vendor/yjs\` npm shim (\`yjs@13.6.27\`) |`,
      `| Yjs + lib0 (\`Binding1\`–\`331\` / \`no\` / \`Bte\`) | ~9.5k | **Drained (wave-53)** → \`vendor/yjs\` npm shim (\`yjs@13.6.27\`)\n| Three.js (\`Binding929\`/\`Xbe\` + MathUtils helpers) | ~15.3k | **Drained (wave-54)** → \`vendor/three\` npm shim (\`three@0.170.0\`) |`,
    );
  }

  if (!text.includes("## Wave-54 progress")) {
    text += `
## Wave-54 progress

- Replaced inlined Three.js (\`helper502\`…\`Ybe\` + \`Binding929\`/\`Xbe\`, ~15.3k LOC) with \`vendor/three\` npm shim (\`three@0.170.0\`).
- Kept thin boundary aliases for external 3D surface: \`Binding957\`=\`Vector3\`, \`Binding1041\`=\`Color\`, \`Binding1060\`=\`BufferGeometry\`, \`Binding1099\`=\`Line\`, \`Binding1091\`=\`LineBasicMaterial\`, \`Binding1073\`=\`Group\`, \`Binding972\`=\`Vector4\`, \`Binding973\`=\`Box3\`, \`Binding954\`=\`MathUtils\`, \`Binding1103\`=\`MeshPhysicalMaterial\`, \`Binding1101\`=\`CylinderGeometry\`, \`Binding1100\`=\`CanvasTexture\`, \`Binding1090\`=\`Sprite\`, \`Binding1077\`=\`SpriteMaterial\`, \`Binding1072\`=\`BoxGeometry\`, \`$P\`=\`Mesh\`, \`Binding1135\`=no-op init.
- Left Binding662/\`_C\`, and intentional terminals (\`gae\`/\`workbookEt\`, \`ooe\`, chart \`Zae\`/\`Qae\`, \`_workbookEt\`/\`Qse\`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); \`openBoundary\` kept.
- QG PASS on vendor shim + boundary \`--no-cache --allow-open-boundaries\`.
- Boundary LOC ≈ ${newLoc}.
- Next: Binding1574 (~8.2k) / Binding1790 (~8.0k) / Binding1996 (~4.5k), or Binding740 / \`The\` / \`BYe\`; continue scanning for stock vendor fingerprints.

`;
  }

  fs.writeFileSync(README, text.endsWith("\n") ? text : text + "\n");
  console.log(`  updated README (${newLoc} LOC)`);
}

function updateImportMap(newLoc: number): void {
  const raw = fs.readFileSync(IMPORT_MAP, "utf8");
  const map = JSON.parse(raw) as {
    notes?: string;
    files?: Record<
      string,
      {
        notes?: string;
        related?: string[];
        [k: string]: unknown;
      }
    >;
  };

  const waveNote =
    "Wave workbook-runtime Stage-3 wave-54: inlined Three.js Binding929/Xbe → vendor/three npm shim.";
  if (typeof map.notes === "string" && !map.notes.includes("wave-54")) {
    map.notes = `${waveNote} | ${map.notes}`;
  }

  const entryKey = Object.keys(map.files ?? {}).find(
    (k) =>
      k.includes("workbook-C49Dgk1_") ||
      (map.files?.[k] as { restored?: string } | undefined)?.restored ===
        "boundaries/workbook-runtime/index.ts",
  );
  if (entryKey && map.files?.[entryKey]) {
    const entry = map.files[entryKey]!;
    const note =
      ` | Stage-3 wave-54: Three.js Binding929/Xbe + MathUtils helpers → vendor/three (three@0.170.0); boundary remains open (~${(newLoc / 1000).toFixed(1)}k LOC).`;
    if (!entry.notes?.includes("wave-54")) {
      entry.notes = (entry.notes ?? "") + note;
    }
    const related = new Set(entry.related ?? []);
    related.add("vendor/three.ts");
    entry.related = [...related].sort();
  }

  fs.writeFileSync(IMPORT_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("  updated IMPORT_MAP.json");
}

function main(): void {
  console.log("wave-54: Three.js Binding929/Xbe → vendor/three npm shim");
  ensureVendorShim();

  console.log("  vendor-npm preflight (directory + intent)…");
  run(["bun", PREFLIGHT, "restored/vendor"]);
  run([
    "bun",
    PREFLIGHT,
    "restored/vendor/three.ts",
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

  console.log("  quality-gate vendor/three…");
  run(["bun", QG, "restored/vendor/three.ts", "--allow-flat", "--no-cache"]);

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

  console.log("DONE wave-54");
}

main();
