// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: idempotent ensure for text-layout engine deps (legacy kce).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensureStyleResolveInit } from "../text-style";
import {
  ensureFontMetricsInit,
  ensureGlyphAdvanceCacheInit,
  ensureTextSegmenterInit,
} from "../font-metrics";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import {
  ensureCssFontStackInit,
  ensureTypographyUnitsInit,
} from "../font-stack";
import {
  ensureDocumentStylesInit,
  ensureThemeStyleMapsInit,
} from "../document-style";
import {
  ensurePlaceholderResolveThemeInit,
  ensurePlaceholderResolveDepsInit,
  ensureThemeTypefaceInit,
} from "../placeholder-resolve";

/** Legacy `kce` — touch text-layout dependency cluster once. */
export const ensureTextLayoutEngineInit = esmInit(() => {
  wr();
  ensureCssNamedColorsInit();
  ensureThemeStyleMapsInit();
  ensurePlaceholderResolveThemeInit();
  ensureStyleResolveInit();
  ensureDocumentStylesInit();
  ensurePlaceholderResolveDepsInit();
  ensureFontMetricsInit();
  ensureCssFontStackInit();
  ensureThemeTypefaceInit();
  ensureGlyphAdvanceCacheInit();
  ensureTypographyUnitsInit();
  ensureTextSegmenterInit();
});

export { ensureTextLayoutEngineInit as kce };
