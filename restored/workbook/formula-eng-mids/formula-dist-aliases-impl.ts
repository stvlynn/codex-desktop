// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: FDIST/FINV aliases + GROWTH wrapper (legacy W3e/$3e/T6e/E6e/zot).
// Stage-3 wave-135.

import {
  workbookBinding1849,
  workbookBinding1856,
  b2e,
  x2e,
} from "../formula-stats";
import { s2e } from "./formula-eng-mids-impl";

export function W3e(
  femIn13638: any,
  femIn13639: any,
  femIn13640: any,
  femIn13641: any,
  femIn13642: any,
) {
  return workbookBinding1849.INV(
    femIn13638,
    femIn13639,
    femIn13640,
    femIn13641,
    femIn13642,
  );
}
export function $3e(
  femIn13556: any,
  femIn13557: any,
  femIn13558: any,
  femIn13559: any,
  femIn13560: any,
) {
  return workbookBinding1856.DIST(
    femIn13556,
    femIn13557,
    femIn13558,
    femIn13559,
    femIn13560,
  );
}
export function T6e(
  femIn13856: any,
  femIn13857: any,
  femIn13858: any,
  femIn13859: any,
  femIn13860: any,
) {
  return b2e(femIn13856, femIn13857, femIn13858, femIn13859, femIn13860);
}
export function E6e(
  femIn13861: any,
  femIn13862: any,
  femIn13863: any,
  femIn13864: any,
  femIn13865: any,
) {
  return x2e(femIn13861, femIn13862, femIn13863, femIn13864, femIn13865);
}
export function zot(
  femIn12953: any,
  femIn12954: any,
  femIn12955: any,
  femIn12956: any,
  femIn12957: any,
  ...femIn12958: any[]
) {
  return s2e(
    femIn12953,
    femIn12954,
    femIn12955,
    femIn12956,
    femIn12957,
    ...femIn12958,
  );
}
