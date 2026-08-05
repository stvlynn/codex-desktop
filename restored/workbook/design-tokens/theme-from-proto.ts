// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-23: build theme style maps from a theme proto (legacy Binding222).

import { buildThemeStyleMaps } from "../document-style";
import { WorkbookTheme } from "./workbook-theme";
import { THEME_SCHEME_COLOR_ALIASES } from "./theme-color-aliases";
export function themeStyleMapsFromProto(dtIn13286: unknown) {
  return buildThemeStyleMaps(
    new WorkbookTheme(
      {
        stub: () => {},
      },
      dtIn13286,
    ),
    THEME_SCHEME_COLOR_ALIASES,
  );
}
