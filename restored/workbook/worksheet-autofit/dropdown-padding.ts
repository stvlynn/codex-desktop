// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: list-validation dropdown padding (legacy Ele / Binding233 / Binding588).

import { esmInit } from "../../runtime/rolldown-runtime";
import { I, Vn as spreadsheetVn } from "../spreadsheet-protobuf";
export function isListValidationWithoutDropdown(props: unknown) {
  return (
    props.type === I.DATA_VALIDATION_TYPE_LIST && props.showDropDown !== true
  );
}
export function clampDropdownInsetPx(afIn13768: unknown) {
  return Math.min(8, Math.max(0, afIn13768 - 8));
}
export function dropdownExtraWidthForRowHeight(afIn13580: unknown) {
  let afBind22687 = clampDropdownInsetPx(afIn13580);
  return afBind22687 > 0 ? afBind22687 + 8 : 0;
}
export var ensureDropdownPaddingInit = esmInit(() => {
  spreadsheetVn();
});
