// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map legend ramp colors from base (legacy helper466).
// Stage-3 wave-135.

import { color as appInitialXat } from "../../vendor/d3-color";

export function workbookHelper466(cllIn6968: any) {
  let cllBind17323 = cllIn6968 ? appInitialXat(cllIn6968) : null;
  return cllBind17323
    ? {
        start: cllBind17323.brighter(1.8).formatHex(),
        end: cllBind17323.darker(0.6).formatHex(),
        fallback: "#d6dbe1",
      }
    : {
        start: "#c1e4ff",
        end: "#0f5aad",
        fallback: "#d6dbe1",
      };
}
