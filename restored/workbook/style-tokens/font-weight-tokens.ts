// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: Tailwind-like font-weight utility → bold boolean (legacy Qle / Binding613–614 / $le).

/** Legacy Binding613 — utilities that force bold=true. */
export const FONT_WEIGHT_BOLD_UTILITIES: ReadonlySet<string> = new Set([
  "font-bold",
  "font-semibold",
  "font-black",
]);

/** Legacy Binding614 — utilities that force bold=false. */
export const FONT_WEIGHT_NON_BOLD_UTILITIES: ReadonlySet<string> = new Set([
  "font-normal",
  "font-light",
  "font-medium",
  "font-thin",
  "font-extralight",
  "font-extrabold",
]);

/** Legacy Qle — map a single utility class to bold true/false, or null if unknown. */
export function resolveFontWeightUtilityBold(raw: string): boolean | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();
  if (FONT_WEIGHT_BOLD_UTILITIES.has(lower)) return true;
  if (FONT_WEIGHT_NON_BOLD_UTILITIES.has(lower)) return false;
  return null;
}

/** Legacy $le — tokens are eager; keep as touchable ensure. */
export function ensureFontWeightTokensInit(): void {}
