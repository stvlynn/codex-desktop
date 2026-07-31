// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: shape-utility cluster ensure (legacy Binding655).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFillInit } from "../fill";
import { ensureShadowCssParseInit } from "../text-style";
import { ensureBorderRadiusTokensInit } from "./border-radius-tokens";

/**
 * Legacy `workbookBinding655` — touch fill + named-color noop + radius + shadow.
 * Named-color Binding379 is already a boundary no-op.
 */
export const ensureShapeUtilityInit = esmInit(() => {
  ensureFillInit();
  ensureBorderRadiusTokensInit();
  ensureShadowCssParseInit();
});
