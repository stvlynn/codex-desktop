// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: fill/font/border clone helpers (legacy workbookHelper240–244).

import { Fill } from "../fill";
export function cloneFillFromValue(rfIn11267: unknown) {
  let rfBind21740 = rfIn11267.toProto();
  return rfBind21740
    ? new Fill({
        type: "proto",
        proto: rfBind21740,
      })
    : new Fill();
}
export function cloneFontOrUndefined(rfIn14692: unknown) {
  return rfIn14692 ? rfIn14692.clone() : undefined;
}
export function cloneBordersOrUndefined(rfIn14693: unknown) {
  return rfIn14693 ? rfIn14693.clone() : undefined;
}
export function borderSideConfigFromSide(rfIn6967: unknown) {
  if (!rfIn6967) return;
  let rfBind17321 = {};
  return (
    rfIn6967.style !== undefined && (rfBind17321.style = rfIn6967.style),
    rfIn6967.color && (rfBind17321.color = rfIn6967.color.clone()),
    rfIn6967.weight !== undefined && (rfBind17321.weight = rfIn6967.weight),
    Object.keys(rfBind17321).length > 0 ? rfBind17321 : undefined
  );
}
export function fillFromConfigOrUndefined(rfIn10662: unknown) {
  if (rfIn10662 == null) return;
  let rfBind21164 = rfIn10662 instanceof Fill ? rfIn10662 : new Fill(rfIn10662);
  return rfBind21164.toProto() ? rfBind21164 : undefined;
}
