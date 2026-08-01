// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: COALESCE/IFERROR/ROW/COLUMN/INDEX mids (legacy Cot…sst).
// Stage-3 wave-141.

import { isArrayValue } from "../formula-array";
import { act } from "../formula-sort-filter";
import { kQe, SZe } from "../formula-scalar-funcs";
import { workbookHelper966, wst } from "../formula-lookup-text";
import { matchLookup as DZe } from "../formula-match";

/** Legacy Binding1936 — #VALUE! error token. */
const ERR_VALUE = { kind: "Error", code: "#VALUE!" } as const;

export function Cot(femIn9543: any) {
  if (Array.isArray(femIn9543)) {
    for (let femBind22627 of femIn9543)
      if (!(!femBind22627 || femBind22627.length === 0))
        return femBind22627[0] ?? null;
    return null;
  }
  return femIn9543 ?? null;
}
export function Pot(femIn10250: any, femIn10251: any) {
  if (femIn10250 === undefined || femIn10251 === undefined) return ERR_VALUE;
  let femBind20720 = workbookHelper963(femIn10250);
  return Bot(femBind20720)
    ? (workbookHelper963(femIn10251) ?? null)
    : (femBind20720 ?? null);
}
export function Iot(femIn9863: any, femIn9864: any) {
  if (femIn9863 === undefined || femIn9864 === undefined) return ERR_VALUE;
  let femBind20409 = workbookHelper963(femIn9863);
  return Bot(femBind20409) === "#N/A"
    ? (workbookHelper963(femIn9864) ?? null)
    : (femBind20409 ?? null);
}
export function workbookHelper963(femIn11501: any) {
  return Array.isArray(femIn11501)
    ? femIn11501[0]?.[0]
    : isArrayValue(femIn11501)
      ? (femIn11501.values[0]?.[0] ?? null)
      : femIn11501;
}
export function Bot(event: any) {
  return event instanceof Error
    ? event.message || "#VALUE!"
    : workbookHelper965(event)
      ? event.code
      : null;
}
export function workbookHelper965(femIn12583: any) {
  return (
    typeof femIn12583 == "object" && !!femIn12583 && femIn12583.kind === "Error"
  );
}
export function rst(femIn12155: any) {
  let femBind22306 = act(femIn12155, (femIn16621) => femIn16621.row);
  return femBind22306 === null ? kQe(femIn12155) : femBind22306;
}
export function ist(femIn11940: any) {
  let femBind22195 = act(femIn11940, (femIn16487) => femIn16487.col + 1);
  return femBind22195 === null ? SZe(femIn11940) : femBind22195;
}
export function sst(femIn9954: any, femIn9955: any, femIn9956: any) {
  let femBind20474 = workbookHelper966(femIn9954);
  if (femIn9956 === undefined) {
    let femBind22781 = DZe(femBind20474, femIn9955, 0);
    if (!wst(femBind22781)) return femBind22781;
  }
  return DZe(femBind20474, femIn9955, femIn9956);
}
