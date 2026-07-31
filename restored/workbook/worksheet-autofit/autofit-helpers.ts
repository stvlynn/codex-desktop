// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: format cache / table header / list-validation helpers (legacy Binding238–239 / Mle / Nle / Ple / Fle / jle).

import { cellPaddingForFontSize, lettersToColIndex, rowTokenToIndex } from "../../utils/spreadsheet-address-utils";
import { formatCellValueWithNumFmt } from "../cell-xf-format";
export function cachedFormatCellDisplay(afIn9582: unknown, afIn9583: unknown, afIn9584: unknown, afIn9585: unknown) {
  let afBind20113 = `${afIn9582.value ?? ""}__${afIn9585}`;
  if (afIn9584.has(afBind20113)) return afIn9584.get(afBind20113) ?? "";
  let afBind20114 = formatCellValueWithNumFmt(afIn9582, afIn9583, afIn9584, afIn9585);
  return afIn9584.set(afBind20113, afBind20114), afBind20114;
}
export function cellHasVisibleContent(afIn9422: unknown, afIn9423: unknown) {
  if (afIn9423 !== "") return true;
  for (let afBind21995 of afIn9422.paragraphs ?? []) for (let afBind22787 of afBind21995.runs ?? []) if (afBind22787.text !== "") return true;
  return false;
}
export function tableHeaderCellKeys(afIn6548: unknown) {
  let afBind16792 = new Set();
  for (let afBind18260 of afIn6548) {
    if (afBind18260.headerRows === 0) continue;
    let afBind18768 = afBind18260.startRow + afBind18260.headerRows - 1;
    for (let afBind21562 = afBind18260.startRow; afBind21562 <= afBind18768; afBind21562++) for (let afBind22668 = afBind18260.startCol; afBind22668 <= afBind18260.endCol; afBind22668++) afBind16792.add(`${afBind21562}:${afBind22668}`);
  }
  return afBind16792;
}
export function findTableResolverAt(afIn13287: unknown, afIn13288: unknown, afIn13289: unknown) {
  return afIn13287.find(item => item.contains(afIn13288, afIn13289));
}
export function filterButtonExtraWidth(afIn11074: unknown) {
  let {
    padLr
  } = cellPaddingForFontSize(afIn11074?.font?.size ?? 14.666666666666666);
  return Math.max(0, 22 - padLr);
}
export function listValidationBounds(afIn4425: unknown) {
  let afBind13652 = [];
  for (let afBind14545 of afIn4425) for (let afBind15012 of afBind14545.ranges) {
    let afBind15491 = afBind15012.startAddress,
      afBind15492 = afBind15012.endAddress;
    if (!afBind15491 || !afBind15492) continue;
    let afBind15493 = rowTokenToIndex(afBind15491),
      afBind15494 = rowTokenToIndex(afBind15492),
      afBind15495 = lettersToColIndex(afBind15491),
      afBind15496 = lettersToColIndex(afBind15492);
    afBind13652.push({
      startRow: Math.min(afBind15493, afBind15494),
      endRow: Math.max(afBind15493, afBind15494),
      startCol: Math.min(afBind15495, afBind15496),
      endCol: Math.max(afBind15495, afBind15496)
    });
  }
  return afBind13652;
}
export function isInListValidationRange(afIn10452: unknown, afIn10453: unknown, afIn10454: unknown) {
  return afIn10452.some(item => afIn10453 >= item.startRow && afIn10453 <= item.endRow && afIn10454 >= item.startCol && afIn10454 <= item.endCol);
}
