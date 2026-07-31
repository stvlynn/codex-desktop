// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: Tailwind-like border-radius token map (legacy gde/hde/_de).

import { esmInit } from "../../runtime/rolldown-runtime";

/** Legacy `gde` — rounded-* utility → px. */
export const borderRadiusTokens: Record<string, number> = {
  rounded: 4,
  "rounded-none": 0,
  "rounded-sm": 2,
  "rounded-md": 6,
  "rounded-lg": 8,
  "rounded-xl": 12,
  "rounded-2xl": 16,
  "rounded-3xl": 24,
  "rounded-full": 9999,
};

/** Legacy `hde` — resolve a border-radius utility token to px. */
export function resolveBorderRadiusToken(
  raw: string,
): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const value = borderRadiusTokens[trimmed.toLowerCase()];
  return typeof value == "number" ? value : null;
}

/** Legacy `_de` — touch border-radius token table. */
export const ensureBorderRadiusTokensInit = esmInit(() => {
  void borderRadiusTokens;
});
