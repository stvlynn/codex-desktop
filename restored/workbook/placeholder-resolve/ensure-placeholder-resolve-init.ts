// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: idempotent ensures for placeholder-resolve + theme typeface cluster.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureDocumentStylesInit,
  ensureThemeStyleMapsInit,
} from "../document-style";
import { ensureTypographyUnitsInit } from "../font-stack";
import { ensureSlidePlaceholderRolesInit } from "../presentation-theme";

/** Legacy `_workbookTt` — theme style maps + typography units. */
export const ensurePlaceholderResolveThemeInit = esmInit(() => {
  ensureThemeStyleMapsInit();
  ensureTypographyUnitsInit();
});

/** Legacy `workbookBinding521` — document styles + slide placeholder roles. */
export const ensurePlaceholderResolveDepsInit = esmInit(() => {
  ensureDocumentStylesInit();
  ensureSlidePlaceholderRolesInit();
});

/** Legacy `workbookBinding522` — placeholder for theme-typeface side effects. */
export const ensureThemeTypefaceInit = esmInit(() => {});

let clusterReady = false;

/** Combined ensure for the wave-17 placeholder-resolve cluster. */
export const ensurePlaceholderResolveClusterInit = esmInit(() => {
  if (clusterReady) return;
  ensurePlaceholderResolveThemeInit();
  ensurePlaceholderResolveDepsInit();
  ensureThemeTypefaceInit();
  clusterReady = true;
});
