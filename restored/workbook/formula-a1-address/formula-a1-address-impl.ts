// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: A1/R1C1 address formatter (legacy Mst).
// Stage-3 wave-128.

import { nct, rct, ict, buildSortIndex } from "../formula-sort-filter";
import { colIndexToLetters } from "../../utils/spreadsheet-address-utils";
import { workbookBinding1835 as valueError } from "../formula-stats";
import { faaH } from "./boundary-hooks";

export function formatA1Address(
  faaIn3388: any,
  faaIn3389: any,
  faaIn3390: any,
  faaIn3391: any,
  faaIn3392: any,
) {
  let faaBind11756 = nct(faaIn3388);
  if (faaH.isErrorValue(faaBind11756)) return faaBind11756;
  let faaBind11757 = nct(faaIn3389);
  if (faaH.isErrorValue(faaBind11757)) return faaBind11757;
  let faaBind11758 = rct(faaIn3390);
  if (faaH.isErrorValue(faaBind11758)) return faaBind11758;
  let faaBind11759 = true;
  if (faaIn3391 !== undefined) {
    let faaBind22762 = buildSortIndex(faaIn3391);
    if (faaH.isErrorValue(faaBind22762)) return faaBind22762;
    faaBind11759 = faaBind22762;
  }
  let faaBind11760 = ict(faaIn3392);
  if (faaH.isErrorValue(faaBind11760)) return faaBind11760;
  let faaBind11761 = faaBind11760,
    faaBind11762 = faaBind11757 - 1;
  if (faaBind11762 < 0) return valueError;
  let faaBind11763 = colIndexToLetters(faaBind11762),
    faaBind11764 = faaBind11758 === 1 || faaBind11758 === 3,
    faaBind11765 = faaBind11758 === 1 || faaBind11758 === 2;
  return faaBind11759
    ? `${faaBind11761}${faaBind11764 ? `$${faaBind11763}` : faaBind11763}${faaBind11765 ? `$${faaBind11756}` : String(faaBind11756)}`
    : `${faaBind11761}${faaBind11765 ? `R${faaBind11756}` : `R[${faaBind11756}]`}${faaBind11764 ? `C${faaBind11757}` : `C[${faaBind11757}]`}`;
}

export const Mst = formatA1Address;
