// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: TeX-style math layout constants + design-unit → px scale.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureMathFontStackInit } from "./math-font-stack";

/** OpenType / TeX math layout constants (design units; scale via unitsPerEm). */
export type MathLayoutConstants = {
  unitsPerEm: number;
  axisHeight: number;
  delimitedSubFormulaMinHeight: number;
  minConnectorOverlap: number;
  fractionRuleThickness: number;
  fractionNumeratorShiftUp: number;
  fractionNumeratorDisplayStyleShiftUp: number;
  fractionNumeratorGapMin: number;
  fractionNumeratorDisplayStyleGapMin: number;
  fractionDenominatorShiftDown: number;
  fractionDenominatorDisplayStyleShiftDown: number;
  fractionDenominatorGapMin: number;
  fractionDenominatorDisplayStyleGapMin: number;
  stackTopShiftUp: number;
  stackTopDisplayStyleShiftUp: number;
  stackBottomShiftDown: number;
  stackBottomDisplayStyleShiftDown: number;
  stackGapMin: number;
  stackDisplayStyleGapMin: number;
  radicalRuleThickness: number;
  radicalVerticalGap: number;
  radicalDisplayStyleVerticalGap: number;
  radicalExtraAscender: number;
  subscriptShiftDown: number;
  subscriptTopMax: number;
  subscriptBaselineDropMin: number;
  superscriptShiftUp: number;
  superscriptBottomMin: number;
  superscriptBaselineDropMax: number;
  superscriptBottomMaxWithSubscript: number;
  subSuperscriptGapMin: number;
  spaceAfterScript: number;
};

/** Legacy `_h`. */
export let mathLayoutConstants: MathLayoutConstants;

export let ensureMathLayoutConstantsInit: () => void = esmInit(() => {
  ensureMathFontStackInit();
  mathLayoutConstants = {
    unitsPerEm: 1e3,
    axisHeight: 258,
    delimitedSubFormulaMinHeight: 1325,
    minConnectorOverlap: 100,
    fractionRuleThickness: 68,
    fractionNumeratorShiftUp: 585,
    fractionNumeratorDisplayStyleShiftUp: 640,
    fractionNumeratorGapMin: 68,
    fractionNumeratorDisplayStyleGapMin: 150,
    fractionDenominatorShiftDown: 585,
    fractionDenominatorDisplayStyleShiftDown: 640,
    fractionDenominatorGapMin: 68,
    fractionDenominatorDisplayStyleGapMin: 150,
    stackTopShiftUp: 470,
    stackTopDisplayStyleShiftUp: 780,
    stackBottomShiftDown: 385,
    stackBottomDisplayStyleShiftDown: 690,
    stackGapMin: 150,
    stackDisplayStyleGapMin: 300,
    radicalRuleThickness: 68,
    radicalVerticalGap: 85,
    radicalDisplayStyleVerticalGap: 170,
    radicalExtraAscender: 78,
    subscriptShiftDown: 210,
    subscriptTopMax: 368,
    subscriptBaselineDropMin: 160,
    superscriptShiftUp: 360,
    superscriptBottomMin: 120,
    superscriptBaselineDropMax: 230,
    superscriptBottomMaxWithSubscript: 380,
    subSuperscriptGapMin: 150,
    spaceAfterScript: 40,
  };
});

/**
 * Returns TeX math layout constants.
 * Boundary body used a comma-operator form that always returned `_h`;
 * typeface is retained for call-site compatibility.
 */
export function getMathLayoutConstants(
  _typeface?: string | null,
): MathLayoutConstants {
  ensureMathLayoutConstantsInit();
  return mathLayoutConstants;
}

/** Scale a design-unit constant to CSS px. */
export function scaleMathConstantToPx(
  designUnits: number,
  fontPx: number,
  constants: Pick<MathLayoutConstants, "unitsPerEm">,
): number {
  return (designUnits / constants.unitsPerEm) * fontPx;
}
