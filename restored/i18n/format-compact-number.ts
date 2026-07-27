// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `XZl` / export `Zi`.

/** Format a count with compact notation (e.g. 1.2K). */
export function formatCompactNumber(
  intl: {
    formatNumber: (value: number, options: Intl.NumberFormatOptions) => string;
  },
  value: number | null | undefined,
): string {
  return intl.formatNumber(Math.max(0, Math.round(value ?? 0)), {
    maximumFractionDigits: 1,
    notation: "compact",
  });
}
