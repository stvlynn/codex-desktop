// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-7: color proto accessors + clamp (legacy Sae/Cae/wae + hex/value accessors).

import { Zn as colorTypeEnum } from "../presentation-protobuf";
import { WorkbookColor } from "../theme-color";

export type RgbaColor = { r: number; g: number; b: number; a: number };

/** Legacy `Sae` — clamp `value` into [min, max]. */
export function clampRange(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Legacy hex normalizer — `#RRGGBB` / `#AARRGGBB` → `#RRGGBB`.
 * Returns undefined when the hex length is not 6 or 8.
 */
export function normalizeRgbHex(
  hex: string | null | undefined,
): string | undefined {
  if (!hex) return;
  const digits = hex.replace(/^#/, "");
  if (!(digits.length !== 6 && digits.length !== 8))
    return `#${digits.length === 8 ? digits.slice(2) : digits}`;
}

/** True when value is a WorkbookColor instance (legacy color VO guard). */
export function isWorkbookColorInstance(
  value: unknown,
): value is WorkbookColor {
  return value instanceof WorkbookColor;
}

/** Legacy `Cae` — color transform bag on a WorkbookColor or proto-like object. */
export function colorTransformOf(
  color: { transform?: Record<string, number> | null } | null | undefined,
): Record<string, number> | null | undefined {
  return color?.transform;
}

/** Scheme/system/rgb color name or hex value (legacy color.value accessor). */
export function colorValueOf(
  color: { value?: string } | null | undefined,
): string | undefined {
  return color?.value;
}

/** Last resolved RGB hex on a WorkbookColor (legacy lastColor accessor). */
export function colorLastColorOf(color: unknown): string | undefined {
  isWorkbookColorInstance(color);
  return (color as { lastColor?: string } | null | undefined)?.lastColor;
}

/** Legacy `wae` — system color (WorkbookColor name or COLOR_TYPE_SYSTEM proto). */
export function isSystemColor(color: unknown): boolean {
  if (isWorkbookColorInstance(color)) return color.type === "system";
  return (
    !!color &&
    typeof color === "object" &&
    (color as { type?: number }).type === colorTypeEnum.COLOR_TYPE_SYSTEM
  );
}
