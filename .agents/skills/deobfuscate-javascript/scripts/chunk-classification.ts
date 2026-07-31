export type ChunkClassificationHint = {
  restored?: string;
  /** IMPORT_MAP may record a single family or a multi-package list. */
  vendor?: string | readonly string[];
  note?: string;
  boundary?: boolean;
  dependencyBoundary?: string;
};

/** Coerce hint text fields; IMPORT_MAP occasionally stores string[]. */
function hintText(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.filter((part): part is string => typeof part === "string").join(" ");
  }
  return "";
}

/**
 * JavaScript built-in globals a generated name must not collide with. Used both
 * to keep the renamer from emitting `_Array`/`__Array` (a stem that pascal-cases
 * onto a global gets underscore-prefixed by the collision-safe applier) and to
 * let the quality gate flag any `_Global` that still slipped through.
 */
export const JS_GLOBALS: ReadonlySet<string> = new Set([
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Symbol",
  "BigInt",
  "Function",
  "Promise",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "Date",
  "RegExp",
  "Error",
  "TypeError",
  "RangeError",
  "JSON",
  "Math",
  "Reflect",
  "Proxy",
  "Iterator",
  "ArrayBuffer",
  "DataView",
  "Int8Array",
  "Uint8Array",
  "Float32Array",
  "Float64Array",
]);

export type VendorDataMatch = {
  /** npm package the bundled data belongs to. */
  package: string;
  /** Bare import specifier consumers should point at instead of the hash chunk. */
  specifier: string;
  /** Why we matched — for manifest notes / debugging. */
  reason:
    | "shiki-grammar"
    | "shiki-theme"
    | "shiki-stub"
    | "data-lib"
    | "lucide-icon"
    | "locale-messages";
};

/** Optional helpers for classifiers that need sibling chunk bodies (e.g. Shiki stubs). */
export type ClassifyVendorDataOptions = {
  /** Read another chunk's source by basename (no `.js`). Returns null if missing. */
  readSiblingSource?: (basename: string) => string | null;
};

// Standalone data libraries that ship as one big single-export chunk. Keep this
// conservative — only well-known, unambiguously-vendored stems belong here.
const DATA_LIB_STEMS: Record<string, string> = {
  "3dmol": "3dmol",
  "3Dmol": "3dmol",
};

// These chunks ship as `JSON.parse(`{"scopeName":...}`)`, so keys are quoted
// (`"scopeName":`). Match the JSON-key form as well as a bare object-literal key
// (`scopeName:`) so both bundler shapes are recognised.
const SHIKI_GRAMMAR_SCOPE_RE = /(?:"scopeName"|\bscopeName)\s*:/;
const SHIKI_GRAMMAR_BODY_RE =
  /(?:"(?:patterns|repository)"|\b(?:patterns|repository))\s*:/;
const SHIKI_THEME_TOKENCOLORS_RE = /(?:"tokenColors"|\btokenColors)\s*:/;
const SHIKI_THEME_TYPE_RE = /(?:"type"|\btype)\s*:\s*["'](?:light|dark)["']/;
const SHIKI_THEME_COLORS_RE = /(?:"colors"|\bcolors)\s*:/;

/** Lucide icon modules import the shared `createLucideIcon-*` factory chunk. */
const LUCIDE_FACTORY_IMPORT_RE =
  /from\s*["']\.\/createLucideIcon-[A-Za-z0-9_-]+\.js["']/;
/** Lucide factory body stamps `lucide` / `lucide-${name}` class names. */
const LUCIDE_FACTORY_BODY_RE =
  /className:\s*[A-Za-z0-9_$]*\(\s*[`'"]lucide[`'"]/;

/**
 * BCP-47-ish locale id at the start of a chunk basename (`am`, `fr-FR`, `zh-CN`,
 * `es-419`). Used to recognise message-catalog data chunks.
 */
const LOCALE_STEM_RE =
  /^([a-z]{2,3}(?:-(?:[A-Z]{2}|[0-9]{3}|[A-Z][a-z]{3})){0,2})(?:-|$)/;

/** Codex locale catalogs always include this stable message key. */
const LOCALE_MESSAGE_KEY_RE = /["'`]CopyButton\.copyTooltip["'`]/;

/** Thin Rolldown re-export stubs stay under a few hundred bytes. */
const SHIKI_STUB_MAX_BYTES = 400;

/**
 * Recognise a chunk whose *content* is bundled vendor data rather than app code:
 * a Shiki TextMate language grammar, a Shiki/VSCode color theme, a Lucide icon,
 * a locale message catalog, a thin Shiki re-export stub, or a known standalone
 * data library. These are deliberately NOT restored as app code —
 * `build-import-graph.ts` marks them terminal `npm-leaf` and consumers import the
 * bare specifier (`@shikijs/langs/<id>`, `@shikijs/themes/<id>`, `lucide-react`,
 * `locales/<id>`, `3dmol`).
 *
 * `source` is the chunk's (minified) body. The grammar/theme fingerprints survive
 * minification because they are string object keys. The id half of the specifier
 * comes from the chunk stem (`rust-A1b2c3` → `rust`), which the bundler names
 * after the source module.
 */
export function classifyVendorDataChunk(
  basename: string,
  source: string,
  opts: ClassifyVendorDataOptions = {},
): VendorDataMatch | null {
  if (isLikelyAppChunk(basename)) return null;

  const stem = stripHashSuffix(basename);
  const libPackage = DATA_LIB_STEMS[stem] ?? DATA_LIB_STEMS[stem.toLowerCase()];
  if (libPackage) {
    return { package: libPackage, specifier: libPackage, reason: "data-lib" };
  }

  const lucide = classifyLucideChunk(basename, stem, source);
  if (lucide) return lucide;

  const locale = classifyLocaleMessagesChunk(basename, stem, source);
  if (locale) return locale;

  const shiki = classifyShikiDataChunk(stem, source);
  if (shiki) return shiki;

  const stub = classifyShikiReexportStub(basename, source, opts);
  if (stub) return stub;

  return null;
}

function classifyLucideChunk(
  basename: string,
  stem: string,
  source: string,
): VendorDataMatch | null {
  // Shared factory (`createLucideIcon-HASH`) or per-icon modules that depend on it.
  if (
    stem === "createLucideIcon" ||
    /^createLucideIcon(?:-|$)/.test(basename) ||
    LUCIDE_FACTORY_BODY_RE.test(source) ||
    LUCIDE_FACTORY_IMPORT_RE.test(source)
  ) {
    return {
      package: "lucide-react",
      specifier: "lucide-react",
      reason: "lucide-icon",
    };
  }
  return null;
}

/**
 * Extract a locale id from a chunk basename when it looks like `am-HASH` /
 * `fr-FR-HASH` / `es-419-HASH`. Returns null for non-locale stems.
 */
export function localeIdFromBasename(basename: string): string | null {
  const stem = stripHashSuffix(basename);
  if (
    /^[a-z]{2,3}(?:-(?:[A-Z]{2}|[0-9]{3}|[A-Z][a-z]{3})){0,2}$/.test(stem)
  ) {
    return stem;
  }
  const match = basename.match(LOCALE_STEM_RE);
  return match?.[1] ?? null;
}

/**
 * Locale message catalogs are pure data (`"CopyButton.copyTooltip": "…"` walls)
 * keyed by a locale-id basename. Terminal — do not restore as app feature code.
 */
export function isLocaleMessagesCatalog(
  basename: string,
  source: string,
): boolean {
  if (!localeIdFromBasename(basename)) return false;
  if (!LOCALE_MESSAGE_KEY_RE.test(source)) return false;
  // Guard against tiny modules that merely mention the key once.
  const keyHits = source.match(/["'`][A-Za-z][\w.-]+\.[\w.-]+["'`]\s*:/g);
  return (keyHits?.length ?? 0) >= 5;
}

function classifyLocaleMessagesChunk(
  basename: string,
  _stem: string,
  source: string,
): VendorDataMatch | null {
  const localeId = localeIdFromBasename(basename);
  if (!localeId || !isLocaleMessagesCatalog(basename, source)) return null;
  const id = localeId.toLowerCase();
  return {
    package: "locales",
    specifier: `locales/${id}`,
    reason: "locale-messages",
  };
}

function classifyShikiDataChunk(
  stem: string,
  source: string,
): VendorDataMatch | null {
  if (
    SHIKI_GRAMMAR_SCOPE_RE.test(source) &&
    SHIKI_GRAMMAR_BODY_RE.test(source)
  ) {
    return {
      package: "@shikijs/langs",
      specifier: `@shikijs/langs/${stem}`,
      reason: "shiki-grammar",
    };
  }
  if (
    SHIKI_THEME_TOKENCOLORS_RE.test(source) ||
    (SHIKI_THEME_COLORS_RE.test(source) && SHIKI_THEME_TYPE_RE.test(source))
  ) {
    return {
      package: "@shikijs/themes",
      specifier: `@shikijs/themes/${stem}`,
      reason: "shiki-theme",
    };
  }
  return null;
}

/**
 * Rolldown often emits a 3–4 line stub (`import … from "./rust-XXXX.js"; export
 * { t as default }`) in front of the real grammar/theme data chunk. Follow the
 * target's `@shikijs/langs|themes/<id>` specifier so the stub is also terminal.
 *
 * Must NOT match ordinary app dual-chunk wrappers (same-stem re-exports of large
 * local modules) — only when the sibling body is Shiki grammar/theme data.
 */
function classifyShikiReexportStub(
  basename: string,
  source: string,
  opts: ClassifyVendorDataOptions,
): VendorDataMatch | null {
  if (!opts.readSiblingSource) return null;
  if (source.length > SHIKI_STUB_MAX_BYTES) return null;

  const fromMatches = [
    ...source.matchAll(/from\s*["'](\.\/[^"']+)["']/g),
  ];
  if (fromMatches.length !== 1) return null;
  if (!/\bexport\s*\{/.test(source) && !/\bexport\s+default\b/.test(source)) {
    return null;
  }

  const rel = fromMatches[0]![1]!;
  const targetBasename = rel
    .replace(/^\.\//, "")
    .replace(/\.[mc]?[jt]sx?$/i, "");
  // Same language/theme id — stub stem matches target stem (hash stripped).
  if (stripHashSuffix(basename) !== stripHashSuffix(targetBasename)) {
    return null;
  }

  const targetSource = opts.readSiblingSource(targetBasename);
  if (!targetSource) return null;

  const target = classifyShikiDataChunk(
    stripHashSuffix(targetBasename),
    targetSource,
  );
  if (!target) return null;
  return {
    package: target.package,
    specifier: target.specifier,
    reason: "shiki-stub",
  };
}

export function stripHashSuffix(basename: string): string {
  // Anchor to Vite/Rolldown's 8-char hash first so multi-word stems survive
  // (`github-dark-Gg77Hh88` → `github-dark`); fall back to 10–12-char hashes.
  // Lucide icons sometimes carry a double hash (`zoom-out-a5N3YXaA-1KowjtDm`);
  // strip once for stem compares — callers that need the icon id strip again.
  const stripped = basename.replace(/-[A-Za-z0-9_-]{8}$/u, "");
  if (stripped !== basename) return stripped;
  return basename.replace(/-[A-Za-z0-9_-]{10,12}$/u, "");
}

const APP_PREFIXES = [
  "app-initial",
  "app-main",
  "app-shell",
  "app-prefetch",
  "app-preloader",
  "app-root",
  "app-server",
  "appgen",
  "automation",
  "automations",
  "browser-sidebar",
  "browser-use",
  "composer",
  "conversation",
  "local-conversation",
  "mcp",
  "native-app",
  "native-apps",
  "pets-settings",
  "plugin",
  "plugins",
  "project",
  "projects",
  "review",
  "settings",
  "thread",
];

const APP_SEGMENT_RE = /(?:^|[-_~])(?:page|panel|view|dialog)(?:[-_~]|$)/;

const VENDOR_PREFIXES = ["app-scope", "src", "statsig", "vscode-api", "zod"];

/**
 * Heuristic: does this chunk basename look like project/app code that deep/full
 * restoration must recursively restore rather than face as a dependency wall?
 *
 * Keep this conservative and product-biased. The explicit vendor prefixes below
 * are excluded first so runtime chunks such as `app-scope-*` do not get caught by
 * broad `app-*` matching.
 */
export function isLikelyAppChunk(basename: string): boolean {
  const normalized = basename.toLowerCase();
  if (VENDOR_PREFIXES.some((prefix) => hasChunkPrefix(normalized, prefix))) {
    return false;
  }
  return (
    APP_PREFIXES.some((prefix) => hasChunkPrefix(normalized, prefix)) ||
    APP_SEGMENT_RE.test(normalized)
  );
}

export function isKnownTerminalBoundaryChunk(
  basename: string,
  hint: ChunkClassificationHint = {},
): boolean {
  const normalized = basename.toLowerCase();
  const vendor = hintText(hint.vendor).toLowerCase();
  const note = hintText(hint.note).toLowerCase();
  const restored = hintText(hint.restored).toLowerCase();
  const boundary = hintText(hint.dependencyBoundary).toLowerCase();
  const text = `${vendor} ${note} ${restored} ${boundary}`;

  if (hasChunkPrefix(normalized, "app-scope")) return true;
  if (hasChunkPrefix(normalized, "src")) return true;
  if (hasChunkPrefix(normalized, "statsig")) return true;
  if (hasChunkPrefix(normalized, "vscode-api")) return true;
  // Intentional oversized vendor-runtime mega dumps (not stock npm shims).
  // Parked under boundaries/* until Stage-3 split into workbook/ / visualization/.
  if (hasChunkPrefix(normalized, "workbook")) return true;
  if (hasChunkPrefix(normalized, "chart-widget-stores")) return true;
  if (restored.includes("boundaries/workbook-runtime")) return true;
  if (restored.includes("boundaries/chart-widget-stores")) return true;
  if (text.includes("@pierre/")) return true;
  if (text.includes("codemirror")) return true;
  if (text.includes("prosemirror")) return true;
  if (text.includes("react-dom runtime")) return true;
  if (text.includes("rrule")) return true;
  if (text.includes("xterm")) return true;
  if (text.includes("zod")) return true;
  if (text.includes("statsig")) return true;
  if (text.includes("vscode") || text.includes("webview bridge")) return true;
  if (text.includes("dotlottie") || text.includes("@lottiefiles")) return true;
  if (restored.endsWith("assets/browser.ts") && vendor === "npm") return true;
  if (restored.includes("processbrowsershim")) return true;
  if (note.includes("bundler runtime") || note.includes("vite bundler")) {
    return true;
  }
  if (
    note.includes("intentional oversized vendor-runtime") ||
    note.includes("intentional vendored terminal")
  ) {
    return true;
  }

  return false;
}

function hasChunkPrefix(basename: string, prefix: string): boolean {
  return (
    basename === prefix ||
    basename.startsWith(`${prefix}-`) ||
    basename.startsWith(`${prefix}~`)
  );
}

/**
 * A boundary chunk is one of two kinds:
 *   vendor-npm     — a recognised third-party package. The deliverable is a thin
 *                    bare re-export shim (`make-facade --reexport <specifier>`);
 *                    it resolves to real `@types` and is DONE.
 *   vendor-runtime — genuine app/host runtime (app-scope, vscode bridge, rpc…).
 *                    Stays a typed facade or an opt-in ref-passthrough until it is
 *                    deep-restored OUT of boundaries/.
 *
 * The `vendor` field recorded in IMPORT_MAP is the primary signal: anything other
 * than the literal "runtime" marker names a real npm family.
 */
export type BoundaryKind = "vendor-npm" | "vendor-runtime";

/**
 * Vendor 'family' (as recorded in IMPORT_MAP `vendor`) → the npm specifier a
 * re-export shim should point at. Identity where the family already is the
 * package; a representative entry-point where it is a family the agent confirms.
 * Treat as a hint — verify the bundled chunk is stock (not a Codex fork) and the
 * specifier resolves before relying on it.
 */
export const VENDOR_NPM_SPECIFIERS: Record<string, string> = {
  cmdk: "cmdk",
  lodash: "lodash",
  "react-router": "react-router",
  "react-colorful": "react-colorful",
  "@tanstack/react-form": "@tanstack/react-form",
  "tanstack-react-form": "@tanstack/react-form",
  "@lottiefiles/dotlottie-react": "@lottiefiles/dotlottie-react",
  dotlottie: "@lottiefiles/dotlottie-react",
  "dotlottie-react": "@lottiefiles/dotlottie-react",
  dayjs: "dayjs",
  "react-is": "react-is",
  "react-dom": "react-dom",
  "react-dom/client": "react-dom/client",
  "use-sync-external-store": "use-sync-external-store/shim/with-selector",
  formatjs: "react-intl",
  "react-intl": "react-intl",
  "@braintree/sanitize-url": "@braintree/sanitize-url",
  "sanitize-url": "@braintree/sanitize-url",
  "mdast-util": "mdast-util-to-markdown",
  mdast: "mdast-util-to-markdown",
  "@pierre/diffs": "@pierre/diffs",
  zod: "zod",
  "framer-motion": "framer-motion",
  motion: "framer-motion",
  pdf: "pdfjs-dist",
  pdfjs: "pdfjs-dist",
  "pdfjs-dist": "pdfjs-dist",
  jotai: "jotai",
  "dnd-kit": "@dnd-kit/core",
  "@dnd-kit/core": "@dnd-kit/core",
  "@dnd-kit/sortable": "@dnd-kit/sortable",
  "@dnd-kit/utilities": "@dnd-kit/utilities",
  analytics: "@segment/analytics-next",
  segment: "@segment/analytics-next",
  mermaid: "mermaid",
  // @radix-ui resolves per-primitive (@radix-ui/react-menu, …) — agent picks.
};

export function classifyBoundary(
  basename: string,
  hint: ChunkClassificationHint = {},
): { kind: BoundaryKind; specifier?: string } {
  const vendor = hintText(hint.vendor).toLowerCase().trim();
  if (vendor && vendor !== "runtime") {
    // Prefer an exact map hit; for multi-package lists try the first token.
    const specifier =
      VENDOR_NPM_SPECIFIERS[vendor] ??
      VENDOR_NPM_SPECIFIERS[vendor.split(/\s+/)[0] ?? ""];
    return { kind: "vendor-npm", specifier };
  }
  const text =
    `${hintText(hint.note)} ${hintText(hint.restored)} ${hintText(hint.dependencyBoundary)}`.toLowerCase();
  // Radix primitives are bundled @radix-ui even when no vendor field is set.
  if (/\bradix\b/.test(text) || /radix/.test(basename.toLowerCase())) {
    return { kind: "vendor-npm" };
  }
  return { kind: "vendor-runtime" };
}
