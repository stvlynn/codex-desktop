// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: BESSELI/J/K/Y wrappers (legacy x1e/S1e/C1e/w1e).
// Stage-3 wave-136.

import { workbookBinding1832, workbookBinding1835 } from "../formula-stats";
import { hasFormulaError, flattenMatrixArgs } from "../formula-token-utils";

export function x1e(femIn11546: any, femIn11547: any) {
  return (
    (femIn11546 = flattenMatrixArgs(femIn11546)),
    (femIn11547 = flattenMatrixArgs(femIn11547)),
    hasFormulaError(femIn11546, femIn11547)
      ? workbookBinding1835
      : workbookBinding1832.default.besseli(femIn11546, femIn11547)
  );
}
export function S1e(femIn11548: any, femIn11549: any) {
  return (
    (femIn11548 = flattenMatrixArgs(femIn11548)),
    (femIn11549 = flattenMatrixArgs(femIn11549)),
    hasFormulaError(femIn11548, femIn11549)
      ? workbookBinding1835
      : workbookBinding1832.default.besselj(femIn11548, femIn11549)
  );
}
export function C1e(femIn11550: any, femIn11551: any) {
  return (
    (femIn11550 = flattenMatrixArgs(femIn11550)),
    (femIn11551 = flattenMatrixArgs(femIn11551)),
    hasFormulaError(femIn11550, femIn11551)
      ? workbookBinding1835
      : workbookBinding1832.default.besselk(femIn11550, femIn11551)
  );
}
export function w1e(femIn11552: any, femIn11553: any) {
  return (
    (femIn11552 = flattenMatrixArgs(femIn11552)),
    (femIn11553 = flattenMatrixArgs(femIn11553)),
    hasFormulaError(femIn11552, femIn11553)
      ? workbookBinding1835
      : workbookBinding1832.default.bessely(femIn11552, femIn11553)
  );
}
