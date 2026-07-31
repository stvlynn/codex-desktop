// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: preset-shape cluster ensure (legacy Binding644).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensurePluginSlotsInit } from "./plugin-slots";
import { ensureAdjAliasInit } from "./evaluate-guides";
import { ensureShapeFormulaOpsInit } from "./shape-formula";

/** Legacy `workbookBinding644`. */
export const ensurePresetShapeClusterInit = esmInit(() => {
  ensurePluginSlotsInit();
  ensureAdjAliasInit();
  ensureShapeFormulaOpsInit();
});
