// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: TeX atom-class spacing + italic correction (legacy kse/Ase/jse cluster).

import { MathTokenKind } from "../math-plain-text/math-proto-enums";
import {
  isBinaryOperatorToken,
  isCloseDelimiterToken,
  isMathVariantGlyphText,
  isNamedMathOperatorToken,
  isOpenDelimiterToken,
  isOperatorLikeToken,
  isPunctuationToken,
  isRelationToken,
} from "./math-token-classifiers";
export function normalizeBinAtomClasses(props: unknown) {
  let workbookBinding12582 = [...props],
    workbookBinding12583;
  for (
    let workbookBinding17527 = 0;
    workbookBinding17527 < workbookBinding12582.length;
    workbookBinding17527 += 1
  ) {
    workbookBinding12582[workbookBinding17527] === "bin" &&
      (workbookBinding12583 === undefined ||
        workbookBinding12583 === "bin" ||
        workbookBinding12583 === "op" ||
        workbookBinding12583 === "rel" ||
        workbookBinding12583 === "open" ||
        workbookBinding12583 === "punct") &&
      (workbookBinding12582[workbookBinding17527] = "ord");
    workbookBinding12583 = workbookBinding12582[workbookBinding17527];
  }
  let workbookBinding12584;
  for (
    let workbookBinding19473 = workbookBinding12582.length - 1;
    workbookBinding19473 >= 0;
    --workbookBinding19473
  ) {
    workbookBinding12582[workbookBinding19473] === "bin" &&
      (workbookBinding12584 === undefined ||
        workbookBinding12584 === "rel" ||
        workbookBinding12584 === "close" ||
        workbookBinding12584 === "punct") &&
      (workbookBinding12582[workbookBinding19473] = "ord");
    workbookBinding12584 = workbookBinding12582[workbookBinding19473];
  }
  return workbookBinding12582;
}
export function measureStyledGlyphBox(mathIn3081: unknown) {
  if (mathIn3081.token) return atomClassForToken(mathIn3081.token);
  if (mathIn3081.function || mathIn3081.nary) return "op";
  if (
    mathIn3081.fraction ||
    mathIn3081.radical ||
    mathIn3081.delimited ||
    mathIn3081.matrix ||
    mathIn3081.equationArray
  )
    return "inner";
  if (mathIn3081.scripts?.base)
    return measureStyledGlyphBox(mathIn3081.scripts.base);
  if (mathIn3081.limit?.base)
    return measureStyledGlyphBox(mathIn3081.limit.base);
  if (mathIn3081.accent?.base)
    return measureStyledGlyphBox(mathIn3081.accent.base);
  if (mathIn3081.bar?.base) return measureStyledGlyphBox(mathIn3081.bar.base);
  if (mathIn3081.enclosure?.body)
    return measureStyledGlyphBox(mathIn3081.enclosure.body);
  if (mathIn3081.phantom?.body)
    return measureStyledGlyphBox(mathIn3081.phantom.body);
  if (mathIn3081.sequence?.children?.length) {
    let workbookBinding22613 = mathIn3081.sequence.children[0];
    if (workbookBinding22613)
      return measureStyledGlyphBox(workbookBinding22613);
  }
  return "ord";
}
export function atomClassForToken(props: unknown) {
  return isOpenDelimiterToken(props)
    ? "open"
    : isCloseDelimiterToken(props)
      ? "close"
      : isPunctuationToken(props)
        ? "punct"
        : isRelationToken(props)
          ? "rel"
          : isBinaryOperatorToken(props)
            ? "bin"
            : props.kind === MathTokenKind.MATH_TOKEN_KIND_OPERATOR ||
                isNamedMathOperatorToken(props)
              ? "op"
              : "ord";
}
export function isItalicOrdinaryAtom(mathIn3000: unknown) {
  if (mathIn3000.token && isOperatorLikeToken(mathIn3000.token)) return false;
  if (mathIn3000.token && isMathVariantGlyphText(mathIn3000.token.text))
    return true;
  if (mathIn3000.style?.italic === false) return false;
  if (mathIn3000.style?.italic === true) return true;
  if (mathIn3000.token)
    return (
      !isNamedMathOperatorToken(mathIn3000.token) &&
      (mathIn3000.token.kind === undefined ||
        mathIn3000.token.kind === MathTokenKind.MATH_TOKEN_KIND_UNSPECIFIED ||
        mathIn3000.token.kind === MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER ||
        mathIn3000.token.kind === MathTokenKind.MATH_TOKEN_KIND_SYMBOL)
    );
  if (mathIn3000.scripts?.base)
    return isItalicOrdinaryAtom(mathIn3000.scripts.base);
  if (mathIn3000.delimited?.items.length === 1) {
    let workbookBinding22667 = mathIn3000.delimited.items[0];
    if (workbookBinding22667) return isItalicOrdinaryAtom(workbookBinding22667);
  }
  return false;
}
export function leftmostMathAtomNode(mathIn3787: unknown) {
  if (mathIn3787)
    return mathIn3787.sequence?.children.length
      ? leftmostMathAtomNode(mathIn3787.sequence.children[0])
      : mathIn3787.scripts?.base
        ? leftmostMathAtomNode(mathIn3787.scripts.base)
        : mathIn3787.limit?.base
          ? leftmostMathAtomNode(mathIn3787.limit.base)
          : mathIn3787.accent?.base
            ? leftmostMathAtomNode(mathIn3787.accent.base)
            : mathIn3787.bar?.base
              ? leftmostMathAtomNode(mathIn3787.bar.base)
              : mathIn3787.enclosure?.body
                ? leftmostMathAtomNode(mathIn3787.enclosure.body)
                : mathIn3787.phantom?.body
                  ? leftmostMathAtomNode(mathIn3787.phantom.body)
                  : mathIn3787;
}
export function rightmostMathAtomNode(mathIn3585: unknown) {
  if (mathIn3585)
    return mathIn3585.sequence?.children.length
      ? rightmostMathAtomNode(
          mathIn3585.sequence.children[mathIn3585.sequence.children.length - 1],
        )
      : mathIn3585.scripts?.base
        ? rightmostMathAtomNode(mathIn3585.scripts.base)
        : mathIn3585.limit?.base
          ? rightmostMathAtomNode(mathIn3585.limit.base)
          : mathIn3585.accent?.base
            ? rightmostMathAtomNode(mathIn3585.accent.base)
            : mathIn3585.bar?.base
              ? rightmostMathAtomNode(mathIn3585.bar.base)
              : mathIn3585.enclosure?.body
                ? rightmostMathAtomNode(mathIn3585.enclosure.body)
                : mathIn3585.phantom?.body
                  ? rightmostMathAtomNode(mathIn3585.phantom.body)
                  : mathIn3585;
}
export function atomClassPair(mathIn13463: unknown, mathIn13464: unknown) {
  return {
    token: {
      text: mathIn13463,
      kind: mathIn13464,
    },
  };
}
