// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: DataField summarize-by / show-as helpers.
import { PivotSummarizeBy, PivotShowAsCalculation } from "./pivot-field-enums";

let __summarizeByToProto: Record<string, any> = {};
let protoToSummarizeByToken: Record<string | number, string> = {};
let summarizeByAliasToProto: Record<string, any> = {};
export function wireSummarizeByToProto(map: Record<string, any>): void {
  __summarizeByToProto = map;
}
export function wireDataFieldTokenMaps(maps: {
  protoToSummarizeByToken: Record<string | number, string>;
  summarizeByAliasToProto: Record<string, any>;
}): void {
  protoToSummarizeByToken = maps.protoToSummarizeByToken;
  summarizeByAliasToProto = maps.summarizeByAliasToProto;
}
export function protoToSummarizeBy(pivotIn11345: any) {
  for (let [pivotBind22715, pivotBind22716] of Object.entries(
    __summarizeByToProto,
  ))
    if (pivotBind22716 === pivotIn11345) return pivotBind22715;
  return PivotSummarizeBy.sum;
}
export function normalizeSummarizeAlias(pivotIn13459: any) {
  return pivotIn13459.replace(/\s+/g, "").toLowerCase();
}
export function isPercentShowAs(props: any) {
  if (!props) return;
  let pivotBind22042 = props.trim();
  if (pivotBind22042.length !== 0)
    return normalizeSummarizeAlias(pivotBind22042);
}
export function needsShowAsBaseField(pivotIn8896: any) {
  return (
    pivotIn8896 === PivotShowAsCalculation.percentOfColumnTotal ||
    pivotIn8896 === PivotShowAsCalculation.percentOfRowTotal ||
    pivotIn8896 === PivotShowAsCalculation.percentOfGrandTotal ||
    pivotIn8896 === PivotShowAsCalculation.percentDifferenceFrom
  );
}
export function getDataFieldSubtotal(pivotIn4770: any) {
  if (pivotIn4770.subtotalEnum !== undefined) return pivotIn4770.subtotalEnum;
  let pivotBind14118 = pivotIn4770.subtotal;
  if (typeof pivotBind14118 == "number")
    return cloneDataFieldShowAs(pivotIn4770, pivotBind14118);
  if (typeof pivotBind14118 == "string") {
    let pivotBind17924 = Number(pivotBind14118);
    if (Number.isFinite(pivotBind17924)) {
      let pivotBind22637 = cloneDataFieldShowAs(pivotIn4770, pivotBind17924);
      if (pivotBind22637 !== undefined) return pivotBind22637;
    }
    let pivotBind17925 = isPercentShowAs(pivotBind14118);
    if (pivotBind17925) {
      let pivotBind22503 = summarizeByAliasToProto[pivotBind17925];
      if (pivotBind22503 !== undefined)
        return (
          setDataFieldSubtotal(pivotIn4770, pivotBind22503),
          pivotBind22503
        );
    }
  }
}
export function setDataFieldSubtotal(pivotIn12472: any, pivotIn12473: any) {
  pivotIn12472.subtotalEnum = pivotIn12473;
  pivotIn12472.subtotal = protoToSummarizeByToken[pivotIn12473] ?? undefined;
}
export function cloneDataFieldShowAs(pivotIn10659: any, pivotIn10660: any) {
  let pivotBind21161 = pivotIn10660,
    pivotBind21162 = protoToSummarizeByToken[pivotBind21161];
  if (pivotBind21162 !== undefined)
    return (
      (pivotIn10659.subtotalEnum = pivotBind21161),
      (pivotIn10659.subtotal = pivotBind21162),
      pivotBind21161
    );
}
