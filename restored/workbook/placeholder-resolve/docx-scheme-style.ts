// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: DOCX scheme CSS readers for highlight/align/caps/fonts (_ce / cce / …).

import { _r as textCapitalizationEnum } from "../presentation-protobuf";
import {
  cssDeclarationPrefix,
  mergeSchemeCssDeclarations,
  readSchemeCssValue,
} from "../document-style";
import {
  A_,
  DOCX_ALIGN_PREFIX,
  DOCX_CAPS_PREFIX,
  DOCX_COMPLEX_SCRIPT_FONT_SIZE_PREFIX,
  DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX,
  DOCX_EAST_ASIA_TYPEFACE_PREFIX,
  DOCX_HIGHLIGHT_PREFIX,
  O_,
} from "./docx-scheme-constants";

// Re-export document-style scheme helpers under legacy boundary names.
export {
  cssDeclarationPrefix as sce,
  mergeSchemeCssDeclarations as t_,
  readSchemeCssValue as e_,
};

/** Legacy `oce` — alphanumeric-only lowercase color token key. */
export function normalizeColorTokenKey(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

/** Legacy `uce` — DOCX caps scheme flag is truthy (1/true/yes/on). */
export function schemeFlagEnabled(scheme: string | null | undefined): boolean {
  const raw = readSchemeCssValue(scheme, DOCX_CAPS_PREFIX);
  if (!raw) return false;
  const lower = raw.toLowerCase();
  return lower === "1" || lower === "true" || lower === "yes" || lower === "on";
}

/** Legacy `cce` — highlight color from scheme (hex or named). */
export function highlightColorFromScheme(
  scheme: string | null | undefined,
): string | undefined {
  const raw = readSchemeCssValue(scheme, DOCX_HIGHLIGHT_PREFIX);
  if (!raw) return;
  return raw.startsWith("#") ? raw : A_[normalizeColorTokenKey(raw)];
}

/** Legacy `lce` — text-align from scheme. */
export function alignmentFromScheme(
  scheme: string | null | undefined,
): "left" | "center" | "right" | "justify" | undefined {
  const raw = readSchemeCssValue(scheme, DOCX_ALIGN_PREFIX);
  if (!raw) return;
  const lower = raw.toLowerCase();
  if (lower === "justify" || lower === "justified") return "justify";
  if (lower === "center") return "center";
  if (lower === "right") return "right";
  return "left";
}

/** Legacy `dce` — uppercase when scheme caps flag set. */
export function applySchemeCaps(
  text: string,
  scheme: string | null | undefined,
): string {
  return schemeFlagEnabled(scheme) ? text.toUpperCase() : text;
}

/** Legacy `fce` — apply TextCapitalization proto to text. */
export function applyTextCapitalization(
  text: string,
  capitalization: unknown,
): string {
  return capitalization === textCapitalizationEnum.TEXT_CAPITALIZATION_ALL ||
    capitalization === textCapitalizationEnum.TEXT_CAPITALIZATION_SMALL
    ? text.toUpperCase()
    : text;
}

/** Legacy `pce` — scheme caps then capitalization proto. */
export function applyTextCaseTransforms(
  text: string,
  textStyle: { scheme?: string; capitalization?: unknown } | null | undefined,
): string {
  return applyTextCapitalization(
    applySchemeCaps(text, textStyle?.scheme),
    textStyle?.capitalization,
  );
}

/** Legacy `mce` — complex-script font size (half-points × 50 → hundredths-pt). */
export function complexScriptFontSizeFromScheme(
  scheme: string | null | undefined,
): number | undefined {
  const raw = readSchemeCssValue(scheme, DOCX_COMPLEX_SCRIPT_FONT_SIZE_PREFIX);
  if (!raw) return;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed * 50 : undefined;
}

/** Legacy `hce` — parse integer scheme property. */
export function intFromSchemeProperty(
  scheme: string | null | undefined,
  propertyPrefix: string,
): number | undefined {
  const raw = readSchemeCssValue(scheme, propertyPrefix);
  if (!raw) return;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

/** Legacy `gce` — complex-script or east-asia typeface from scheme. */
export function typefaceFromScheme(
  scheme: string | null | undefined,
): string | undefined {
  return (
    readSchemeCssValue(scheme, DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX) ??
    readSchemeCssValue(scheme, DOCX_EAST_ASIA_TYPEFACE_PREFIX)
  );
}

/** Legacy `n_` — fontSize from style or complex-script scheme. */
export function fontSizeFromStyleOrScheme(
  textStyle: { fontSize?: number; scheme?: string } | null | undefined,
): number | undefined {
  return (
    textStyle?.fontSize ?? complexScriptFontSizeFromScheme(textStyle?.scheme)
  );
}

/** Legacy `r_` — typeface from style fields or scheme. */
export function typefaceFromStyleOrScheme(
  textStyle:
    | { typeface?: string; name?: string; scheme?: string }
    | null
    | undefined,
): string | undefined {
  return (
    textStyle?.typeface ??
    textStyle?.name ??
    typefaceFromScheme(textStyle?.scheme)
  );
}

/** Legacy `_ce` — underline, defaulting to single when hyperlink and unset. */
export function underlineWithHyperlinkDefault(
  textStyle: { underline?: string } | null | undefined,
  isHyperlink: boolean | null | undefined,
): string | undefined {
  return isHyperlink &&
    (!textStyle?.underline || textStyle.underline === "none")
    ? O_
    : textStyle?.underline;
}
