// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: MathML codec barrel (AST ↔ MathML + document round-trip).

export {
  DATA_GRANOLA_STYLE,
  DATA_GRANOLA_PARAGRAPH_PROPERTIES,
  DATA_GRANOLA_TOKEN_KIND,
  DATA_GRANOLA_NODE_KIND,
  DATA_GRANOLA_FRACTION_KIND,
  DATA_GRANOLA_LIMIT_PLACEMENT,
  DATA_GRANOLA_HIDE_SUBSCRIPT,
  DATA_GRANOLA_HIDE_SUPERSCRIPT,
  DATA_GRANOLA_GROW,
  DATA_GRANOLA_SHAPE,
  DATA_GRANOLA_IMPLICIT_DELIMITERS,
  DATA_GRANOLA_BASE_JUSTIFICATION,
  DATA_GRANOLA_JUSTIFICATION,
  DATA_GRANOLA_SHOW,
  DATA_GRANOLA_ZERO_WIDTH,
  DATA_GRANOLA_ZERO_ASCENT,
  DATA_GRANOLA_ZERO_DESCENT,
  ensureMathMlInit,
} from "./math-ml-data-attrs";
export {
  createMathMlElement,
  wrapMathAstSequence,
  applyMathAstStyle,
  mathStyleToDataAttrs,
  mathStyleFromDataAttrs,
  parseJsonAttribute,
  isMathMlTokenTag,
  firstMathMlChild,
  parseOptionalIntAttr,
  parseOptionalBoolAttr,
  flattenMathAstChildren,
  mathMlLeafText,
  collectMathMlText,
} from "./math-ml-node";
export {
  isUnicodeLetterChar,
  isUnicodeNumberChar,
  isMathOperatorChar,
  isMathPunctuationChar,
  classifyCharTokenKind,
  canMergeTokenKinds,
  splitTokenTextByKind,
  splitMultiCharTokenNode,
} from "./math-token-classify";
export {
  tokenKindToMathMlTag,
  mathMlElementToTokenKind,
  fractionKindToAttr,
  fractionAttrToKind,
  limitPlacementToAttr,
  limitPlacementFromAttr,
  enclosureToNotationAttr,
  matrixColumnJustifyToAttr,
  matrixColumnAlignAttrToColumns,
} from "./math-ml-attr-maps";
export { mathAstNodeToMathMl } from "./math-ast-to-mathml";
export { mathMlElementToMathAst } from "./mathml-to-math-ast";
export { normalizeMathAstNode } from "./normalize-math-ast";
export {
  normalizeMathDocumentViaMathMl,
  mathDocumentToMathMlTree,
  mathMlTreeToMathDocument,
} from "./math-document-mathml";
