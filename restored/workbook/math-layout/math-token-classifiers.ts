// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: TeX atom-class spacing + italic correction (legacy kse/Ase/jse cluster).

import { MathTokenKind } from "../math-plain-text/math-proto-enums";
export function isNamedMathOperatorToken(mathIn9092: unknown) {
  return /^(arccos|arcsin|arctan|argmax|argmin|cos|cosh|cot|csc|det|dim|exp|inf|lim|ln|log|max|min|sec|sin|sinh|sup|tan|tanh)$/i.test(
    mathIn9092.text,
  );
}
export function isOperatorLikeToken(mathIn9581: unknown) {
  return (
    isNamedMathOperatorToken(mathIn9581) ||
    isRelationToken(mathIn9581) ||
    isBinaryOperatorToken(mathIn9581) ||
    isOpenDelimiterToken(mathIn9581) ||
    isCloseDelimiterToken(mathIn9581) ||
    isPunctuationToken(mathIn9581) ||
    mathIn9581.kind === MathTokenKind.MATH_TOKEN_KIND_OPERATOR
  );
}
export function isMathVariantGlyphText(mathIn7420: unknown) {
  let workbookBinding17880 = Array.from(mathIn7420, (mathIn16216) =>
    mathIn16216.codePointAt(0),
  );
  return (
    workbookBinding17880.length > 0 &&
    workbookBinding17880.every(
      (item) =>
        item !== undefined &&
        ((item >= 119808 && item <= 120831) ||
          (item >= 65024 && item <= 65039)),
    )
  );
}
export function isRelationToken(mathIn11665: unknown) {
  return /^(=|<|>|≤|≥|≠|≈|≡|∼|→|←|↔|⇒|⇐|⇔|∈|∉|⊂|⊆|⊃|⊇|∝|∥)$/.test(
    mathIn11665.text,
  );
}
export function isBinaryOperatorToken(mathIn12354: unknown) {
  return /^(\+|-|−|±|∓|×|÷|·|\*|∪|∩|∘|⊗|⊕|∧|∨)$/.test(mathIn12354.text);
}
export function isOpenDelimiterToken(mathIn13654: unknown) {
  return /^(\(|\[|\{|⌈|⌊|⟨)$/.test(mathIn13654.text);
}
export function isCloseDelimiterToken(mathIn13465: unknown) {
  return /^(\)|\]|\}|⌉|⌋|⟩|!)$/.test(mathIn13465.text);
}
export function isPunctuationToken(mathIn14510: unknown) {
  return /^(,|;|:)$/.test(mathIn14510.text);
}
