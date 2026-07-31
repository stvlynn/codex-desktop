// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: DOCX scheme CSS merge + contextual-spacing helpers (Wse/Gse/At/Ot/qse).

import { esmInit } from "../../runtime/rolldown-runtime";

/** Legacy `workbookBinding517` — contextualSpacing tag. */
export let CONTEXTUAL_SPACING_TAG: string;
/** Legacy `workbookBinding518` — scheme key prefix. */
export let CONTEXTUAL_SPACING_SCHEME_PREFIX: string;
/** Legacy `workbookBinding519` — scheme declaration enabling contextual spacing. */
export let CONTEXTUAL_SPACING_SCHEME_TRUE: string;

/** Legacy `Wse` — property name prefix including colon (or whole token). */
export function cssDeclarationPrefix(declaration: string): string {
  const colon = declaration.indexOf(":");
  return colon >= 0 ? declaration.slice(0, colon + 1) : declaration;
}

/** Style token normalize: trim + lowercase token. */
export function normalizeStyleToken(
  raw: string | null | undefined,
): string | undefined {
  return raw?.trim().toLowerCase() || undefined;
}

/** Scheme CSS merge: merge ;-separated CSS decls; first-seen property wins order, last wins value. */
export function mergeSchemeCssDeclarations(
  ...schemes: Array<string | null | undefined>
): string | undefined {
  const order: string[] = [];
  const byPrefix = new Map<string, string>();
  for (const scheme of schemes) {
    if (!scheme) continue;
    for (const raw of scheme.split(";")) {
      const decl = raw.trim();
      if (!decl) continue;
      const prefix = cssDeclarationPrefix(decl).toLowerCase();
      if (!byPrefix.has(prefix)) order.push(prefix);
      byPrefix.set(prefix, decl);
    }
  }
  if (order.length === 0) return;
  return order.map((prefix) => byPrefix.get(prefix)!).join(";");
}

/** Legacy `Gse` — read value for a CSS property prefix from a scheme string. */
export function readSchemeCssValue(
  scheme: string | null | undefined,
  propertyPrefix: string,
): string | undefined {
  if (!scheme) return;
  const needle = propertyPrefix.toLowerCase();
  for (const raw of scheme.split(";")) {
    const decl = raw.trim();
    if (!decl || !decl.toLowerCase().startsWith(needle)) continue;
    const value = decl.slice(propertyPrefix.length).trim();
    if (value) return value;
  }
}

export const ensureContextualSpacingSchemeInit = esmInit(() => {
  CONTEXTUAL_SPACING_TAG = "docx:contextualSpacing";
  CONTEXTUAL_SPACING_SCHEME_PREFIX = "__docxContextualSpacing:";
  CONTEXTUAL_SPACING_SCHEME_TRUE = `${CONTEXTUAL_SPACING_SCHEME_PREFIX}true`;
});

/** Legacy `_workbookOt` — true when scheme enables contextual spacing. */
export function isContextualSpacingEnabled(
  textStyle: { scheme?: string } | null | undefined,
): boolean {
  ensureContextualSpacingSchemeInit();
  const raw = normalizeStyleToken(
    readSchemeCssValue(textStyle?.scheme, CONTEXTUAL_SPACING_SCHEME_PREFIX),
  );
  return raw === "1" || raw === "true" || raw === "yes" || raw === "on";
}

/** Legacy `WorkbookAt` — ensure scheme includes contextual-spacing true decl. */
export function ensureContextualSpacingScheme(
  textStyle: { scheme?: string } | null | undefined,
): { scheme?: string } | null | undefined {
  ensureContextualSpacingSchemeInit();
  const merged = mergeSchemeCssDeclarations(
    textStyle?.scheme,
    CONTEXTUAL_SPACING_SCHEME_TRUE,
  );
  return !merged || textStyle?.scheme === merged
    ? textStyle
    : { ...(textStyle ?? {}), scheme: merged };
}

/** Legacy `qse` — tags include contextualSpacing. */
export function hasContextualSpacingTag(
  tags: Array<string | null | undefined> | null | undefined,
): boolean {
  ensureContextualSpacingSchemeInit();
  return (tags ?? []).some(
    (tag) =>
      normalizeStyleToken(tag) === normalizeStyleToken(CONTEXTUAL_SPACING_TAG),
  );
}
