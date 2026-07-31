// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: Calibri/Carlito CSS fallback stacks (Binding483–489).

import { esmInit } from "../../runtime/rolldown-runtime";
import { normalizeFontFamilyKey } from "./normalize-font-family";

/** Legacy `workbookBinding483` — default UI / presentation stack. */
export let DEFAULT_UI_FONT_STACK: string;
/** Legacy `workbookBinding484` — spreadsheet default (Carlito-first). */
export let SPREADSHEET_DEFAULT_FONT_STACK: string;
/** Legacy `workbookBinding485` — after Carlito insert for Aptos/Calibri-like faces. */
export let SPREADSHEET_FALLBACK_AFTER_CARLITO: string;
/** Legacy `workbookBinding486` — families that get Carlito inserted in spreadsheet mode. */
export let SPREADSHEET_CARLITO_COMPAT_FAMILIES: Set<string>;
/** Legacy `workbookBinding487` — unset in this dump; warn path is a no-op until wired. */
export let checkFontFamilyAvailable:
  | ((family: string) => boolean | void)
  | undefined;
/** Legacy `workbookBinding488` — already-warned normalized family keys. */
export let warnedMissingFontFamilies: Set<string>;

/** Document surface that picks the default stack when no family is set. */
export type FontStackDocumentKind = "spreadsheet" | string;

export let ensureCssFontStackInit: () => void = esmInit(() => {
  DEFAULT_UI_FONT_STACK =
    "Calibri, Carlito, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
  SPREADSHEET_DEFAULT_FONT_STACK =
    "Carlito, Calibri, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
  SPREADSHEET_FALLBACK_AFTER_CARLITO =
    "Calibri, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
  SPREADSHEET_CARLITO_COMPAT_FAMILIES = new Set([
    "aptos",
    "aptos narrow",
    "arial",
    "calibri",
    "helvetica",
    "helvetica neue",
  ]);
  warnedMissingFontFamilies = new Set();
});

/**
 * Resolve a CSS `font-family` stack.
 * Spreadsheet mode inserts Carlito for Aptos/Calibri-compatible faces.
 */
export function resolveCssFontStack(
  family: string | null | undefined,
  documentKind: FontStackDocumentKind,
): string {
  ensureCssFontStackInit();
  if (family) {
    return documentKind === "spreadsheet" &&
      SPREADSHEET_CARLITO_COMPAT_FAMILIES.has(normalizeFontFamilyKey(family))
      ? `${family}, Carlito, ${SPREADSHEET_FALLBACK_AFTER_CARLITO}`
      : `${family}, ${DEFAULT_UI_FONT_STACK}`;
  }
  return documentKind === "spreadsheet"
    ? SPREADSHEET_DEFAULT_FONT_STACK
    : DEFAULT_UI_FONT_STACK;
}
