// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: MATCH/FIND/SEARCH text helpers (legacy mst/hst/gst nest).
// Stage-3 wave-134.

import { isArrayValue } from "../formula-array";
import { xZe, wZe, jZe } from "../formula-scalar-funcs";

/** Legacy Binding1938 — MATCH warn counter. */
export let MATCH_WARN = 0;
/** Legacy Binding1937 — FIND warn counter. */
export let FIND_WARN = 0;

export function mst(
  fltIn9544: any,
  fltIn9545: any,
  fltIn9546: any,
  ...fltIn9547: any[]
) {
  let fltBind20068 = xZe(
      workbookHelper966(fltIn9544),
      fltIn9545,
      fltIn9546,
      ...fltIn9547,
    ),
    fltBind20069 = Cst(fltBind20068);
  return fltBind20069 === undefined
    ? (fltBind20068 instanceof Error && MATCH_WARN < 5 && (MATCH_WARN += 1),
      fltBind20068)
    : fltBind20069;
}
export function hst(
  fltIn10814: any,
  fltIn10815: any,
  fltIn10816: any,
  fltIn10817: any,
) {
  let fltBind21339 = wZe(
    workbookHelper966(fltIn10814),
    fltIn10815,
    fltIn10816,
    fltIn10817,
  );
  return (
    fltBind21339 instanceof Error && FIND_WARN < 5 && (FIND_WARN += 1),
    fltBind21339
  );
}
export function gst(
  fltIn8755: any,
  fltIn8756: any,
  fltIn8757: any,
  fltIn8758: any,
) {
  let fltBind19273 = workbookHelper966(fltIn8755),
    fltBind19274 = yst(fltIn8758),
    fltBind19275 = vst(fltIn8756);
  return jZe(
    fltBind19274 && typeof fltBind19273 == "string"
      ? fltBind19273.toLowerCase()
      : fltBind19273,
    fltBind19274 ? bst(fltBind19275) : fltBind19275,
    fltIn8757,
    fltIn8758,
  );
}
export function workbookHelper966(fltIn13372: any) {
  return _st(Array.isArray(fltIn13372) ? fltIn13372[0]?.[0] : fltIn13372);
}
export function _st(fltIn8727: any) {
  if (fltIn8727 == null || typeof fltIn8727 != "string") return fltIn8727;
  if (fltIn8727 === "") return 0;
  if (fltIn8727.trim() === "") return fltIn8727;
  let fltBind19235 = Number(fltIn8727);
  return Number.isNaN(fltBind19235) ? fltIn8727 : fltBind19235;
}
export function vst(fltIn10343: any) {
  if (Array.isArray(fltIn10343) || fltIn10343 === undefined) return fltIn10343;
  let fltBind20805 = fltIn10343;
  return isArrayValue(fltBind20805)
    ? fltBind20805.values.map((item) => [...item])
    : fltIn10343;
}
export function yst(fltIn5298: any) {
  if (fltIn5298 === undefined) return false;
  let fltBind14921 = Array.isArray(fltIn5298) ? Cst(fltIn5298) : fltIn5298;
  if (fltBind14921 == null) return false;
  if (typeof fltBind14921 == "boolean") return fltBind14921 === false;
  if (typeof fltBind14921 == "number")
    return Number.isFinite(fltBind14921) ? fltBind14921 === 0 : false;
  if (typeof fltBind14921 == "string") {
    let fltBind22416 = fltBind14921.trim().toLowerCase();
    return fltBind22416 === "false" || fltBind22416 === "0";
  }
  return false;
}
export function bst(fltIn12902: any) {
  return Array.isArray(fltIn12902)
    ? fltIn12902.map((item) => xst(item))
    : fltIn12902;
}
export function xst(fltIn10252: any) {
  if (!fltIn10252 || fltIn10252.length === 0) return [];
  let fltBind20721 = fltIn10252.map((item) => item ?? null);
  return ((fltBind20721[0] = Sst(fltIn10252[0]) ?? null), fltBind20721);
}
export function Sst(props: any) {
  return typeof props == "string" ? props.toLowerCase() : props;
}
export function Cst(props: any) {
  if (!Array.isArray(props) || props.length !== 1) return;
  let [fltBind20216] = props;
  if (!(!Array.isArray(fltBind20216) || fltBind20216.length !== 1))
    return fltBind20216[0] ?? null;
}
export function wst(fltIn12959: any) {
  return fltIn12959 instanceof Error && fltIn12959.message === "#N/A";
}
