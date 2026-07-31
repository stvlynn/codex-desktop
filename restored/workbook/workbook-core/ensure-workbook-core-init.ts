// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN ensure — peels resolve after env wire.

import { esmInit } from "../../runtime/rolldown-runtime";
import { getWorkbookOps } from "./ops";

/**
 * Builds peeled-ops registry. Boundary WorkbookN must wireWorkbookCoreEnv()
 * before this; Workbook class is constructed in the boundary stub.
 */
export const ensureWorkbookCoreInit = esmInit(() => {
  getWorkbookOps();
});
