// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: Unicode token char classifiers + multi-char token splitters.

import { MathTokenKind } from "../math-plain-text/math-proto-enums";
export function isUnicodeLetterChar(mathIn15092: unknown) {
  return /^\p{L}$/u.test(mathIn15092);
}
export function isUnicodeNumberChar(mathIn15093: unknown) {
  return /^\p{N}$/u.test(mathIn15093);
}
export function isMathOperatorChar(mathIn12105: unknown) {
  return /^[=<>≤≥≠≈∼±∓+\-−×÷·∧∨∪∩∘⊗⊕∫∑∏(){}\[\]|⌈⌉⌊⌋]$/u.test(mathIn12105);
}
export function isMathPunctuationChar(mathIn14860: unknown) {
  return /^[,;:!]$/u.test(mathIn14860);
}
export function classifyCharTokenKind(mathIn5710: unknown, mathIn5711: unknown) {
  return isUnicodeNumberChar(mathIn5710) ? MathTokenKind.MATH_TOKEN_KIND_NUMBER : isMathOperatorChar(mathIn5710) || isMathPunctuationChar(mathIn5710) ? MathTokenKind.MATH_TOKEN_KIND_OPERATOR : mathIn5711 === MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER && isUnicodeLetterChar(mathIn5710) ? MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER : isUnicodeLetterChar(mathIn5710) ? MathTokenKind.MATH_TOKEN_KIND_SYMBOL : mathIn5711 ?? MathTokenKind.MATH_TOKEN_KIND_SYMBOL;
}
export function canMergeTokenKinds(mathIn8471: unknown, mathIn8472: unknown, mathIn8473: unknown) {
  return mathIn8471 === mathIn8472 ? mathIn8472 === MathTokenKind.MATH_TOKEN_KIND_NUMBER ? true : mathIn8472 === MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER && mathIn8473 === MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER : false;
}
export function splitTokenTextByKind(mathIn3769: unknown, mathIn3770: unknown) {
  let workbookBinding12498 = Array.from(mathIn3769);
  if (workbookBinding12498.length <= 1 || mathIn3770 === MathTokenKind.MATH_TOKEN_KIND_TEXT || mathIn3770 === MathTokenKind.MATH_TOKEN_KIND_NUMBER && workbookBinding12498.every(item => isUnicodeNumberChar(item)) || mathIn3770 === MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER && workbookBinding12498.every(item => isUnicodeLetterChar(item))) return [{
    text: mathIn3769,
    kind: mathIn3770
  }];
  let workbookBinding12499 = [];
  for (let workbookBinding19332 of workbookBinding12498) {
    let workbookBinding19836 = classifyCharTokenKind(workbookBinding19332, mathIn3770),
      workbookBinding19837 = workbookBinding12499[workbookBinding12499.length - 1];
    if (workbookBinding19837 && canMergeTokenKinds(workbookBinding19837.kind, workbookBinding19836, mathIn3770)) {
      workbookBinding19837.text += workbookBinding19332;
      continue;
    }
    workbookBinding12499.push({
      text: workbookBinding19332,
      kind: workbookBinding19836
    });
  }
  return workbookBinding12499;
}
export function splitMultiCharTokenNode(props: unknown) {
  let workbookBinding17581 = props.token;
  if (!workbookBinding17581) return props;
  let workbookBinding17582 = splitTokenTextByKind(workbookBinding17581.text, workbookBinding17581.kind);
  return workbookBinding17582.length === 1 ? props : {
    style: props.style,
    sequence: {
      children: workbookBinding17582.map(item => ({
        style: props.style,
        token: item
      }))
    }
  };
}
