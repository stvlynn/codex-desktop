// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: parse histogram bin label (legacy mSe).
// Stage-3 wave-134.

import { workbookHelper554 } from "../chart-bin-width";

export function mSe(chbIn5892: any) {
  let chbBind15868 = chbIn5892.match(
    /(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)[^\d\-+eE]+(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/,
  );
  if (chbBind15868) {
    let chbBind21268 = workbookHelper554(chbBind15868[1]),
      chbBind21269 = workbookHelper554(chbBind15868[2]);
    if (chbBind21268 !== undefined && chbBind21269 !== undefined)
      return chbBind21268 <= chbBind21269
        ? [chbBind21268, chbBind21269]
        : [chbBind21269, chbBind21268];
  }
  let chbBind15869 = workbookHelper554(chbIn5892);
  if (chbBind15869 !== undefined) return [chbBind15869, chbBind15869];
}
