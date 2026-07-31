// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: MathML attribute ↔ protobuf enum maps (fraction/limit/matrix).

import { MathTokenKind, MathLimitPlacement, MathFractionKind, MathMatrixColumnJustification } from "../math-plain-text/math-proto-enums";
import { DATA_GRANOLA_FRACTION_KIND, DATA_GRANOLA_TOKEN_KIND } from "./math-ml-data-attrs";
import { parseOptionalIntAttr } from "./math-ml-node";
export function tokenKindToMathMlTag(mathIn8358: unknown) {
  return mathIn8358 === MathTokenKind.MATH_TOKEN_KIND_NUMBER ? "mn" : mathIn8358 === MathTokenKind.MATH_TOKEN_KIND_OPERATOR ? "mo" : mathIn8358 === MathTokenKind.MATH_TOKEN_KIND_TEXT ? "mtext" : "mi";
}
export function mathMlElementToTokenKind(props: unknown) {
  let workbookBinding15990 = parseOptionalIntAttr(props.attributes[DATA_GRANOLA_TOKEN_KIND]);
  return workbookBinding15990 === undefined ? props.tag === "mn" ? MathTokenKind.MATH_TOKEN_KIND_NUMBER : props.tag === "mo" ? MathTokenKind.MATH_TOKEN_KIND_OPERATOR : props.tag === "mtext" ? MathTokenKind.MATH_TOKEN_KIND_TEXT : MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER : workbookBinding15990;
}
export function fractionKindToAttr(mathIn6323: unknown) {
  return mathIn6323 === MathFractionKind.MATH_FRACTION_KIND_BAR ? "bar" : mathIn6323 === MathFractionKind.MATH_FRACTION_KIND_SKEWED ? "skewed" : mathIn6323 === MathFractionKind.MATH_FRACTION_KIND_LINEAR ? "linear" : mathIn6323 === MathFractionKind.MATH_FRACTION_KIND_NO_BAR ? "no-bar" : "unspecified";
}
export function fractionAttrToKind(props: unknown) {
  let workbookBinding13511 = props[DATA_GRANOLA_FRACTION_KIND];
  return workbookBinding13511 === "bar" ? MathFractionKind.MATH_FRACTION_KIND_BAR : workbookBinding13511 === "skewed" ? MathFractionKind.MATH_FRACTION_KIND_SKEWED : workbookBinding13511 === "linear" ? MathFractionKind.MATH_FRACTION_KIND_LINEAR : workbookBinding13511 === "no-bar" || props.linethickness === "0" ? MathFractionKind.MATH_FRACTION_KIND_NO_BAR : props.bevelled === "true" ? MathFractionKind.MATH_FRACTION_KIND_SKEWED : MathFractionKind.MATH_FRACTION_KIND_UNSPECIFIED;
}
export function limitPlacementToAttr(mathIn8999: unknown) {
  return mathIn8999 === MathLimitPlacement.MATH_LIMIT_PLACEMENT_UNDER_OVER ? "under-over" : mathIn8999 === MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP ? "sub-sup" : "unspecified";
}
export function limitPlacementFromAttr(mathIn9702: unknown) {
  if (mathIn9702 === "under-over") return MathLimitPlacement.MATH_LIMIT_PLACEMENT_UNDER_OVER;
  if (mathIn9702 === "sub-sup") return MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP;
}
export function enclosureToNotationAttr(mathIn4872: unknown) {
  let workbookBinding14282 = [];
  return (!mathIn4872.hideTop || !mathIn4872.hideRight || !mathIn4872.hideBottom || !mathIn4872.hideLeft) && workbookBinding14282.push("box"), mathIn4872.strikeHorizontal && workbookBinding14282.push("horizontalstrike"), mathIn4872.strikeVertical && workbookBinding14282.push("verticalstrike"), mathIn4872.strikeTopLeftToBottomRight && workbookBinding14282.push("downdiagonalstrike"), mathIn4872.strikeBottomLeftToTopRight && workbookBinding14282.push("updiagonalstrike"), workbookBinding14282.join(" ");
}
export function matrixColumnJustifyToAttr(mathIn8916: unknown) {
  return mathIn8916 === MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT ? "left" : mathIn8916 === MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT ? "right" : "center";
}
export function matrixColumnAlignAttrToColumns(mathIn4331: unknown) {
  return mathIn4331 ? mathIn4331.split(/\s+/).map(item => item.trim()).filter(item => item.length > 0).map(item => ({
    justification: item === "left" ? MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT : item === "right" ? MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT : MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_CENTER
  })) : [];
}
