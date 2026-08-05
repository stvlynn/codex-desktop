// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: math-layout engine barrel (paragraph detect + TeX box layout).

export {
  MATH_LAYOUT_MAX_FONT_PX,
  MATH_LAYOUT_MIN_FONT_PX,
  MATH_AUTOFIT_MAX_SCALE,
  ensureMathLayoutEngineInit,
} from "./layout-tuning";
export {
  paragraphIsPureMath,
  extractSoleMathParagraph,
  mergeInlineMathDocuments,
  resolveMathParagraphAlign,
  textStyleFontSizePx,
  mathAstHasExplicitFontSize,
  firstMathTokenAsTextRun,
} from "./detect-paragraph-math";
export {
  resolveMathNodeStyle,
  scaleMathRunStyle,
  measureMathGlyphBox,
  mathRunFontDescriptor,
  resolveMathFontFamilyStack,
  resolveMathTypeface,
  mathAxisHeightPx,
  effectiveInkAscentPx,
  effectiveInkDescentPx,
} from "./resolve-math-style";
export {
  hboxMathBoxes,
  hboxMathBoxesWithGaps,
  layoutMathSequence,
  emptyMathBox,
  scaleMathBox,
  layoutMathNodeChild,
} from "./math-box-ops";
export {
  texAtomSpacingPx,
  atomSpacingForClasses,
  texAtomSpacingClass,
  italicCorrectionGapPx,
} from "./math-atom-spacing";
export {
  normalizeBinAtomClasses,
  measureStyledGlyphBox,
  atomClassForToken,
} from "./math-atom-classes";
export { layoutMathToken } from "./layout-token";
export { layoutMathFraction } from "./layout-fraction";
export { layoutMathRadical } from "./layout-radical";
export { layoutMathScripts, placeMathScripts } from "./layout-scripts";
export { layoutMathDelimited, delimiterGapParams } from "./layout-delimited";
export { layoutMathFunction, layoutMathFunctionParts } from "./layout-function";
export { layoutMathNary } from "./layout-nary";
export {
  layoutMathLimit,
  layoutMathAccent,
  layoutMathBar,
} from "./layout-limit-accent-bar";
export {
  layoutMathMatrix,
  matrixCellGapPx,
  layoutMatrixRow,
  layoutEquationArray,
} from "./layout-matrix";
export { layoutMathNode } from "./layout-math-node";
export { layoutParagraphMath } from "./layout-paragraph-math";
