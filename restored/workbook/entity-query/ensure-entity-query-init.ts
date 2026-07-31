// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: cluster ensure (legacy R_t + B_t + J_t).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureEntityQueryKindsInit } from "./query-a";
import { ensureEntityQueryOpsInit } from "./query-b";
import {
  ensurePathSplitInit,
  ensureThreadCommentsInit,
} from "./thread-comments";

export const ensureEntityQueryInit = esmInit(() => {
  ensureEntityQueryKindsInit();
  ensureEntityQueryOpsInit();
  ensurePathSplitInit();
  ensureThreadCommentsInit();
});

export const R_t = ensureEntityQueryInit;
