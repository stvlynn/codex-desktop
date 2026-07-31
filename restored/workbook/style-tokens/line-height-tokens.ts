// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: Tailwind leading-* utilities → line-height ratio (legacy eue / Binding615–618 / tue).

export type LineHeightResolveOptions = {
  fontSizePx?: number;
};

/** Legacy Binding615 — named leading ratios. */
export const LINE_HEIGHT_RATIO_UTILITIES: Readonly<Record<string, number>> = {
  "leading-none": 1,
  "leading-tight": 1.25,
  "leading-snug": 1.375,
  "leading-normal": 1.5,
  "leading-relaxed": 1.625,
  "leading-loose": 2,
};

/** Legacy Binding616 — fixed leading px sizes (converted via fontSizePx). */
export const LINE_HEIGHT_PX_UTILITIES: Readonly<Record<string, number>> = {
  "leading-3": 12,
  "leading-4": 16,
  "leading-5": 20,
  "leading-6": 24,
  "leading-7": 28,
  "leading-8": 32,
  "leading-9": 36,
  "leading-10": 40,
};

/** Legacy Binding617 — leading-[N] / leading-[N%]. */
export function parseLeadingBracketRatio(raw: string): number | null {
  const ratioMatch = /^leading-\[([0-9]+(?:\.[0-9]+)?)\]$/.exec(raw);
  if (ratioMatch) {
    const n = Number(ratioMatch[1]);
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  const percentMatch = /^leading-\[([0-9]+(?:\.[0-9]+)?)%\]$/.exec(raw);
  if (percentMatch) {
    const n = Number(percentMatch[1]);
    return !Number.isFinite(n) || n <= 0 ? null : n / 100;
  }
  return null;
}

/** Legacy Binding618 — leading-[Npx] relative to fontSizePx (default 16). */
export function parseLeadingBracketPx(
  raw: string,
  fontSizePx?: number,
): number | null {
  const match = /^leading-\[([0-9]+(?:\.[0-9]+)?)px\]$/.exec(raw);
  if (!match) return null;
  const px = Number(match[1]);
  if (!Number.isFinite(px) || px <= 0) return null;
  const base =
    fontSizePx !== undefined && Number.isFinite(fontSizePx) && fontSizePx > 0
      ? fontSizePx
      : 16;
  return px / base;
}

/** Legacy eue — resolve a leading-* utility to a unitless line-height ratio. */
export function resolveLineHeightUtility(
  raw: string,
  options: LineHeightResolveOptions = {},
): number | null {
  const token = raw.trim().toLowerCase();
  if (!token) return null;
  const named = LINE_HEIGHT_RATIO_UTILITIES[token];
  if (typeof named === "number") return named;
  const bracketRatio = parseLeadingBracketRatio(token);
  if (bracketRatio !== null) return bracketRatio;
  const bracketPx = parseLeadingBracketPx(token, options.fontSizePx);
  if (bracketPx !== null) return bracketPx;
  const fixedPx = LINE_HEIGHT_PX_UTILITIES[token];
  if (typeof fixedPx !== "number") return null;
  const base =
    options.fontSizePx !== undefined &&
    Number.isFinite(options.fontSizePx) &&
    options.fontSizePx > 0
      ? options.fontSizePx
      : 16;
  return fixedPx / base;
}

/** Legacy tue. */
export function ensureLineHeightTokensInit(): void {}
