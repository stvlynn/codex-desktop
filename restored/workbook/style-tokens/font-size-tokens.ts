// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: Tailwind text-* size utilities → CSS px (legacy nue / Binding619 / rue).

/** Legacy Binding619 — named text size utilities in CSS px. */
export const FONT_SIZE_UTILITIES: Readonly<Record<string, number>> = {
  "text-xs": 12,
  "text-sm": 14,
  "text-base": 16,
  "text-lg": 18,
  "text-xl": 20,
  "text-2xl": 24,
  "text-3xl": 30,
  "text-4xl": 36,
  "text-5xl": 48,
  "text-6xl": 60,
};

/** Legacy nue — resolve text-* / text-[Npx] to CSS px. */
export function resolveFontSizeUtility(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();
  const named = FONT_SIZE_UTILITIES[lower];
  if (typeof named === "number") return named;
  const match = /^text-\[([0-9]+(?:\.[0-9]+)?)px\]$/.exec(lower);
  if (!match) return null;
  const px = Number(match[1]);
  return !Number.isFinite(px) || px <= 0 ? null : px;
}

/** Legacy rue. */
export function ensureFontSizeTokensInit(): void {}
