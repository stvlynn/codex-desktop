// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: stable-id cluster ensure (legacy Binding647 / rde).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureStableIdConstantsInit } from "./ensure-stable-id-constants";

/** Legacy `rde` — default hash id length. */
export let defaultHashIdLength: number;

/** Legacy `workbookBinding647`. */
export const ensureStableIdClusterInit = esmInit(() => {
  ensureStableIdConstantsInit();
  defaultHashIdLength = 8;
});
