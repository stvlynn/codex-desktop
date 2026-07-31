// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: theme scheme color name predicate (legacy Yre).

import { themeSchemeColorNames } from "./theme-scheme-color-names";

export function isThemeSchemeColorName(name: string): boolean {
  return themeSchemeColorNames.has(name as never);
}

export function ensureThemeSchemeColorNamesInit(): void {}
