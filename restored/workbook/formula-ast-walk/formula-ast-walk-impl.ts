// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula AST walk / volatile detect / opcode counts.
// Stage-3 wave-129.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFormulaOpcodesInit, X_t } from "../formula-opcodes";

export function astContainsVolatileFn(props: any) {
  if (!props) return false;
  switch (props.kind) {
    case "FunctionCall":
      return volatileFnNames.has(props.name.toUpperCase())
        ? true
        : props.args.some((item) => astContainsVolatileFn(item));
    case "UnaryOp":
      return astContainsVolatileFn(props.expr);
    case "BinaryOp":
      return (
        astContainsVolatileFn(props.left) || astContainsVolatileFn(props.right)
      );
    case "ArrayLiteral":
      for (let fawBind22686 of props.elements)
        for (let fawBind23041 of fawBind22686)
          if (astContainsVolatileFn(fawBind23041)) return true;
      return false;
    default:
      return false;
  }
}
export function classifySubtotalAggregate(props: any) {
  if (!props || props.kind !== "FunctionCall") return null;
  let fawBind17169 = props.name.toUpperCase();
  return fawBind17169 === "SUBTOTAL" || fawBind17169 === "_XLFN.SUBTOTAL"
    ? "SUBTOTAL"
    : fawBind17169 === "AGGREGATE" || fawBind17169 === "_XLFN.AGGREGATE"
      ? "AGGREGATE"
      : null;
}
export function stripXlFnPrefix(fawIn11114: any) {
  if (!fawIn11114) return "";
  let fawBind21607 = fawIn11114;
  for (let fawBind23021 of xlFnPrefixRes)
    fawBind21607 = fawBind21607.replace(fawBind23021, "");
  return fawBind21607;
}
export function $_t(fawIn15531: any) {
  return xlUdfPrefixRe.test(fawIn15531);
}
export function countFormulaOpcodes(fawIn9757: any) {
  let fawBind20292 = new Map();
  for (let fawBind22946 of fawIn9757.parsed.values())
    walkFormulaAstOpcodes(fawBind22946.expr, fawBind20292);
  let fawBind20293 = {};
  for (let [fawBind23078, fawBind23079] of fawBind20292)
    fawBind20293[fawBind23078] = fawBind23079;
  return fawBind20293;
}
export function walkFormulaAstOpcodes(fawIn3424: any, fawIn3425: any) {
  if (fawIn3424)
    switch (fawIn3424.kind) {
      case "FunctionCall":
        bumpOpcodeCount(fawIn3424.name, fawIn3425);
        for (let fawBind23080 of fawIn3424.args)
          walkFormulaAstOpcodes(fawBind23080, fawIn3425);
        break;
      case "CallExpr":
        walkFormulaAstOpcodes(fawIn3424.callee, fawIn3425);
        for (let fawBind23081 of fawIn3424.args)
          walkFormulaAstOpcodes(fawBind23081, fawIn3425);
        break;
      case "UnaryOp":
        walkFormulaAstOpcodes(fawIn3424.expr, fawIn3425);
        break;
      case "BinaryOp":
        walkFormulaAstOpcodes(fawIn3424.left, fawIn3425);
        walkFormulaAstOpcodes(fawIn3424.right, fawIn3425);
        break;
      case "ArrayLiteral":
        for (let fawBind22878 of fawIn3424.elements)
          for (let fawBind23102 of fawBind22878)
            walkFormulaAstOpcodes(fawBind23102, fawIn3425);
        break;
      default:
        break;
    }
}
export function bumpOpcodeCount(fawIn9906: any, fawIn9907: any) {
  let fawBind20446 = stripXlFnPrefix(fawIn9906).trim().toUpperCase();
  if (!fawBind20446) return;
  let fawBind20447 = X_t[fawBind20446];
  fawBind20447 !== undefined &&
    fawIn9907.set(fawBind20447, (fawIn9907.get(fawBind20447) ?? 0) + 1);
}
export let volatileFnNames: Set<string>;
export let xlFnPrefixRes: RegExp[];
export let xlUdfPrefixRe: RegExp;
export const ensureFormulaAstWalkInit = esmInit(() => {
  ensureFormulaOpcodesInit();
  volatileFnNames = new Set([
    "NOW",
    "TODAY",
    "RAND",
    "RANDBETWEEN",
    "OFFSET",
    "INDIRECT",
    "CELL",
    "INFO",
    "AREAS",
  ]);
  xlFnPrefixRes = [/_xlfn\._xlws\./gi, /_xlfn\./gi, /_xlws\./gi, /_xlpm\./gi];
  xlUdfPrefixRe = /_xludf\./i;
});

export const isXlUdfPrefixed = $_t;
export const workbookHelper1036 = astContainsVolatileFn;
export const Q_t = classifySubtotalAggregate;
export const workbookHelper1037 = stripXlFnPrefix;
export const evt = countFormulaOpcodes;
export const workbookHelper1038 = walkFormulaAstOpcodes;
export const tvt = bumpOpcodeCount;
export const avt = ensureFormulaAstWalkInit;
export const nvt = volatileFnNames;
export const rvt = xlFnPrefixRes;
export const ivt = xlUdfPrefixRe;
