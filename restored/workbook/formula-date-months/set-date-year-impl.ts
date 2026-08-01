// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: set calendar year on coerced date (legacy Qnt).
// Stage-3 wave-140.

import { workbookHelper930, workbookHelper931 } from "./date-construct-impl";

export function Qnt(fdmIn10855: any, fdmIn10856: any, fdmIn10857: any) {
  let fdmBind21366 = workbookHelper931(fdmIn10855, fdmIn10857?.in);
  return isNaN(+fdmBind21366)
    ? workbookHelper930(fdmIn10857?.in || fdmIn10855, NaN)
    : (fdmBind21366.setFullYear(fdmIn10856), fdmBind21366);
}
