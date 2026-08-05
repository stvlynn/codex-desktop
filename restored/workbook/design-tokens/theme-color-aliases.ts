// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-23: OOXML scheme color name aliases (legacy Binding569–570).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureThemeStyleMapsInit } from "../document-style";
import { ensureWorkbookThemeInit } from "./workbook-theme";
export var THEME_SCHEME_COLOR_ALIASES,
  ensureThemeSchemeColorAliasesInit = esmInit(() => {
    ensureThemeStyleMapsInit();
    ensureWorkbookThemeInit();
    THEME_SCHEME_COLOR_ALIASES = {
      accent1: "accent1",
      accent2: "accent2",
      accent3: "accent3",
      accent4: "accent4",
      accent5: "accent5",
      accent6: "accent6",
      bg1: "lt1",
      tx1: "dk1",
      bg2: "lt2",
      tx2: "dk2",
      hlink: "hlink",
      folHlink: "folHlink",
    };
  });
