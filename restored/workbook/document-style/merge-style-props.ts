// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: shallow/defined-key merge for text + paragraph style protos (legacy Use / Lt / Ct).

import { mergeSchemeCssDeclarations } from "./scheme-css";

/** Defined-key overlay: overlay defined keys from primary onto fallback. */
export function mergeDefinedProps<T extends Record<string, unknown>>(
  primary: T | null | undefined,
  fallback: T | null | undefined,
): T | undefined {
  if (!primary && !fallback) return;
  const out: Record<string, unknown> = { ...(fallback ?? {}) };
  for (const [key, value] of Object.entries(primary ?? {})) {
    if (value !== undefined) out[key] = value;
  }
  return out as T;
}

/** Legacy `bg` — structuredClone or undefined. */
export function cloneOptional<T>(value: T | undefined): T | undefined {
  return value === undefined ? undefined : structuredClone(value);
}

export type BorderBox = {
  top?: unknown;
  right?: unknown;
  bottom?: unknown;
  left?: unknown;
};

/** Legacy `Use` — merge four-side border boxes; drop empty. */
export function mergeBorderBox(
  primary: BorderBox | null | undefined,
  fallback: BorderBox | null | undefined,
): BorderBox | undefined {
  if (!primary && !fallback) return;
  const out: BorderBox = {
    top: cloneOptional(primary?.top ?? fallback?.top),
    right: cloneOptional(primary?.right ?? fallback?.right),
    bottom: cloneOptional(primary?.bottom ?? fallback?.bottom),
    left: cloneOptional(primary?.left ?? fallback?.left),
  };
  return out.top || out.right || out.bottom || out.left ? out : undefined;
}

export type ParagraphStyleProto = Record<string, unknown> & {
  tabStops?: unknown[];
  borders?: BorderBox;
  fill?: unknown;
};

/** Legacy `workbookLt` — merge paragraph style with tabStops / borders / fill. */
export function mergeParagraphStyle(
  primary: ParagraphStyleProto | null | undefined,
  fallback: ParagraphStyleProto | null | undefined,
): ParagraphStyleProto | undefined {
  const out = mergeDefinedProps(primary, fallback);
  if (!out) return;
  const primaryTabs = primary?.tabStops ?? [];
  const fallbackTabs = fallback?.tabStops ?? [];
  if (primaryTabs.length > 0) {
    out.tabStops = primaryTabs.map((item) => structuredClone(item));
  } else if (fallbackTabs.length > 0) {
    out.tabStops = fallbackTabs.map((item) => structuredClone(item));
  } else {
    out.tabStops = [];
  }
  const borders = mergeBorderBox(primary?.borders, fallback?.borders);
  if (borders) out.borders = borders;
  if (primary?.fill) out.fill = structuredClone(primary.fill);
  else if (fallback?.fill) out.fill = structuredClone(fallback.fill);
  return out;
}

export type TextStyleProto = Record<string, unknown> & { scheme?: string };

/** Legacy `_workbookCt` — merge text style; scheme CSS merges fallback-then-primary. */
export function mergeTextStyle(
  primary: TextStyleProto | null | undefined,
  fallback: TextStyleProto | null | undefined,
): TextStyleProto | undefined {
  const out = mergeDefinedProps(primary, fallback);
  if (!out) return;
  const scheme = mergeSchemeCssDeclarations(fallback?.scheme, primary?.scheme);
  if (scheme) out.scheme = scheme;
  return out;
}
