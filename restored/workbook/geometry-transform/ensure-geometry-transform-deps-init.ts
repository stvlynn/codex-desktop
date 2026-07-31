// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: style-resolve + slide-placeholder deps (legacy Binding628).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureStyleResolveInit } from "../text-style";
import { ensureSlidePlaceholderRolesInit } from "../presentation-theme";

/** Legacy workbookBinding628. */
export const ensureGeometryTransformDepsInit = esmInit(() => {
  ensureStyleResolveInit();
  ensureSlidePlaceholderRolesInit();
});
