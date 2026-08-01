// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: end-of-day + EOMONTH (legacy A9e/936).
// Stage-3 wave-136.

import { workbookHelper931 } from "./date-construct-impl";

export function A9e(fdmIn11934: any, fdmIn11935: any) {
  let fdmBind22194 = workbookHelper931(fdmIn11934, fdmIn11935?.in);
  return (fdmBind22194.setHours(23, 59, 59, 999), fdmBind22194);
}
var j9e = esmInit(() => {
  fdmBind1886();
});
export function workbookHelper936(fdmIn9181: any, fdmIn9182: any) {
  let fdmBind19748 = workbookHelper931(fdmIn9181, fdmIn9182?.in),
    fdmBind19749 = fdmBind19748.getMonth();
  return (
    fdmBind19748.setFullYear(fdmBind19748.getFullYear(), fdmBind19749 + 1, 0),
    fdmBind19748.setHours(23, 59, 59, 999),
    fdmBind19748
  );
}
