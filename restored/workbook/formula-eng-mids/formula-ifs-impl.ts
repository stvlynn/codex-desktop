// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: IFS pair-scan + unwrap (legacy n2e/Lot/Vot/Rot).
// Stage-3 wave-140.

import { workbookBinding1839 } from "../formula-stats";

export function n2e() {
  for (
    let femBind21812 = 0;
    femBind21812 < arguments.length / 2;
    femBind21812++
  )
    if (arguments[femBind21812 * 2]) return arguments[femBind21812 * 2 + 1];
  return workbookBinding1839;
}
export function Lot(femIn12639: any, femIn12640: any, ...femIn12641: any[]) {
  let femBind22468 = n2e(femIn12639, femIn12640, ...femIn12641);
  return Vot(femBind22468) ?? femBind22468;
}
export function Vot(props: any) {
  if (!Array.isArray(props) || props.length !== 1) return;
  let [femBind20215] = props;
  if (!(!Array.isArray(femBind20215) || femBind20215.length !== 1))
    return femBind20215[0] ?? null;
}
export function Rot(femIn14478: any, femIn14479: any, ...femIn14480: any[]) {
  return Lot(femIn14478, femIn14479, ...femIn14480);
}
