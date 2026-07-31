// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: missing-font warn once.

import {
  checkFontFamilyAvailable,
  ensureCssFontStackInit,
  warnedMissingFontFamilies,
} from "./css-font-stack";
import {
  normalizeFontFamilyKey,
  stripCssFontFamilyQuotes,
} from "./normalize-font-family";

export type WarnMissingFontFamilyArgs = {
  family: string | undefined;
  sourceTypeface?: string;
};

/** Warn once when a family fails the availability check. */
export function warnMissingFontFamily({
  family,
  sourceTypeface,
}: WarnMissingFontFamilyArgs): void {
  if (family === undefined || checkFontFamilyAvailable === undefined) return;
  ensureCssFontStackInit();
  const display = stripCssFontFamilyQuotes(family);
  if (!display || checkFontFamilyAvailable(display) !== false) return;
  const key = normalizeFontFamilyKey(display);
  if (warnedMissingFontFamilies.has(key)) return;
  warnedMissingFontFamilies.add(key);
  const from =
    sourceTypeface !== undefined && sourceTypeface !== family
      ? ` resolved from "${sourceTypeface}"`
      : "";
  console.warn(
    `[granola] Missing font family "${display}"${from}; text rendering will use the configured fallback stack.`,
  );
}
