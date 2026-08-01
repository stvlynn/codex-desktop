// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: parse A1 address to 0-based row/col (legacy 375).
// Stage-3 wave-136.

import { columnLettersToNumber } from "../formula/cell-ref";

export function workbookHelper375(faaIn6251: any) {
  if (!faaIn6251) return null;
  let faaBind16363 = /^(\$?[A-Za-z]+)(\$?\d+)$/.exec(faaIn6251);
  if (!faaBind16363) return null;
  let [, faaBind16364, faaBind16365] = faaBind16363;
  if (!faaBind16364 || !faaBind16365) return null;
  let faaBind16366 = columnLettersToNumber(faaBind16364.replace(/\$/g, "")),
    faaBind16367 = Number(faaBind16365.replace(/\$/g, ""));
  return !faaBind16366 || !faaBind16367
    ? null
    : {
        row: faaBind16367 - 1,
        col: faaBind16366 - 1,
      };
}
