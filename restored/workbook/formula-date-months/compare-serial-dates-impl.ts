// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compare date serials (legacy 934).
// Stage-3 wave-139.

import { workbookHelper931 } from "./date-construct-impl";

export function workbookHelper934(fdmIn12220: any, fdmIn12221: any) {
  let fdmBind22328 =
    workbookHelper931(fdmIn12220) - +workbookHelper931(fdmIn12221);
  return fdmBind22328 < 0 ? -1 : fdmBind22328 > 0 ? 1 : fdmBind22328;
}
