// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: UNIQUE-by-bool matrix (legacy pst/Est/Tst).
// Stage-3 wave-134.

import { createArrayValue, isArrayValue } from "../formula-array";
import { Ost } from "./formula-unique-impl";
import { Dst } from "./unique-rows-impl";

export function pst(fupIn7882: any, fupIn7883: any, fupIn7884: any) {
  let fupBind18365 = Tst(fupIn7882);
  if (!fupBind18365)
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fupBind18366 = Est(fupIn7883),
    fupBind18367 = Est(fupIn7884),
    fupBind18368 = fupBind18366
      ? Ost(fupBind18365, fupBind18367)
      : Dst(fupBind18365, fupBind18367);
  return fupBind18368.length === 0
    ? createArrayValue([[null]])
    : createArrayValue(fupBind18368);
}
export function Tst(props: any) {
  if (Array.isArray(props)) return props.map((item) => (item ? [...item] : []));
  if (props === undefined) return null;
  let fupBind19276 = props;
  return isArrayValue(fupBind19276)
    ? fupBind19276.values.map((item) => [...item])
    : [[fupBind19276]];
}
export function Est(props: any) {
  if (props === undefined) return false;
  let fupBind13470 = Array.isArray(props) ? props[0]?.[0] : props;
  if (fupBind13470 == null) return false;
  if (typeof fupBind13470 == "boolean") return fupBind13470;
  if (typeof fupBind13470 == "number") return fupBind13470 !== 0;
  if (typeof fupBind13470 == "string") {
    let fupBind19236 = fupBind13470.trim().toLowerCase();
    if (fupBind19236 === "true") return true;
    if (fupBind19236 === "false") return false;
    let fupBind19237 = Number(fupBind13470);
    return Number.isFinite(fupBind19237)
      ? fupBind19237 !== 0
      : fupBind19236 === "y";
  }
  return false;
}
