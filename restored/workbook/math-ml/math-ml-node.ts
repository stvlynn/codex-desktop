// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: MathML element constructors + JSON/style/text helpers.

import { DATA_GRANOLA_STYLE } from "./math-ml-data-attrs";
export function createMathMlElement(mathIn12106: unknown, mathIn12107: unknown, mathIn12108: unknown, mathIn12109: unknown) {
  return {
    tag: mathIn12106,
    attributes: mathIn12107,
    children: mathIn12108,
    text: mathIn12109
  };
}
export function wrapMathAstSequence(mathIn11120: unknown) {
  if (mathIn11120.length !== 0) return mathIn11120.length === 1 ? mathIn11120[0] : {
    sequence: {
      children: mathIn11120
    }
  };
}
export function applyMathAstStyle(mathIn12656: unknown, mathIn12657: unknown) {
  return !mathIn12656 || !mathIn12657 ? mathIn12656 : {
    ...mathIn12656,
    style: mathIn12656.style ?? mathIn12657
  };
}
export function mathStyleToDataAttrs(mathIn13387: unknown) {
  return mathIn13387 ? {
    [DATA_GRANOLA_STYLE]: JSON.stringify(mathIn13387)
  } : {};
}
export function mathStyleFromDataAttrs(mathIn15594: unknown) {
  return parseJsonAttribute(mathIn15594[DATA_GRANOLA_STYLE]);
}
export function parseJsonAttribute(mathIn11398: unknown) {
  if (mathIn11398) try {
    return JSON.parse(mathIn11398);
  } catch {
    return;
  }
}
export function isMathMlTokenTag(mathIn12165: unknown) {
  return mathIn12165 === "mi" || mathIn12165 === "mn" || mathIn12165 === "mo" || mathIn12165 === "mtext";
}
export function firstMathMlChild(mathIn15333: unknown) {
  return mathIn15333.children[0];
}
export function parseOptionalIntAttr(mathIn10642: unknown) {
  if (mathIn10642 === undefined) return;
  let workbookBinding21125 = Number.parseInt(mathIn10642, 10);
  return Number.isFinite(workbookBinding21125) ? workbookBinding21125 : undefined;
}
export function parseOptionalBoolAttr(mathIn13925: unknown) {
  if (mathIn13925 !== undefined) return mathIn13925 === "true";
}
export function flattenMathAstChildren(mathIn13210: unknown) {
  return mathIn13210 ? mathIn13210.sequence?.children ?? [mathIn13210] : [];
}
export function mathMlLeafText(mathIn12800: unknown) {
  return mathIn12800 ? isMathMlTokenTag(mathIn12800.tag) ? mathIn12800.text ?? "" : collectMathMlText(mathIn12800) : "";
}
export function collectMathMlText(mathIn12044: unknown) {
  return `${mathIn12044.text ?? ""}${mathIn12044.children.map(item => collectMathMlText(item)).join("")}`;
}
