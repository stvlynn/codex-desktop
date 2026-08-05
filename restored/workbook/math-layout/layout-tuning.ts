// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Math-layout font/spacing tuning constants + ensure (legacy Binding cluster / Hse).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensurePresentationMathEnumsInit } from "../math-plain-text/math-proto-enums";
import { ensureMathPlainTextInit } from "../math-plain-text";
import { ensureMathMlInit } from "../math-ml";
import {
  ensureCssFontStackInit,
  ensureMathFontStackInit,
  ensureMathLayoutConstantsInit,
  ensureTypographyUnitsInit,
} from "../font-stack";
import { ensureStyleResolveInit } from "../text-style";
import { ensureFontMetricsInit } from "../font-metrics";
import { ensureCssNamedColorsInit } from "../presentation-theme";
export let MATH_LAYOUT_MAX_FONT_PX: number;
export let MATH_LAYOUT_MIN_FONT_PX: number;
export let MATH_AUTOFIT_MAX_SCALE: number;
export let MATH_SCRIPT_MIN_GAP_PX: number;
export let MATH_SCRIPT_SIZE_FACTOR: number;
export let MATH_SCRIPT_SCRIPT_SIZE_FACTOR: number;
export let MATH_RADICAL_DEGREE_SIZE_FACTOR: number;
export let MATH_LIMIT_SIZE_FACTOR: number;
export let MATH_ACCENT_CLEARANCE_FACTOR: number;
export let MATH_BAR_CLEARANCE_FACTOR: number;
export let MATH_DELIMITER_GAP_FACTOR: number;
export let TEX_THIN_MUSKIP_FACTOR: number;
export let TEX_MED_MUSKIP_FACTOR: number;
export let TEX_THICK_MUSKIP_FACTOR: number;
export let MATH_ITALIC_CORRECTION_MIN_FACTOR: number;
export let MATH_NARY_LIMIT_GAP_FACTOR: number;
export let MATH_FRACTION_RULE_OVERLAP_FACTOR: number;
export let MATH_MATRIX_CELL_PAD_FACTOR: number;
export let MATH_EQARRAY_LINE_GAP_FACTOR: number;
export let MATH_PHANTOM_MIN_SIZE_FACTOR: number;
export let ensureMathLayoutEngineInit = esmInit(() => {
  wr();
  ensurePresentationMathEnumsInit();
  ensureMathPlainTextInit();
  ensureMathMlInit();
  ensureCssNamedColorsInit();
  ensureFontMetricsInit();
  ensureCssFontStackInit();
  ensureMathFontStackInit();
  ensureMathLayoutConstantsInit();
  ensureTypographyUnitsInit();
  ensureStyleResolveInit();
  MATH_LAYOUT_MAX_FONT_PX = 32;
  MATH_LAYOUT_MIN_FONT_PX = 18;
  MATH_AUTOFIT_MAX_SCALE = 2.4;
  MATH_SCRIPT_MIN_GAP_PX = 4;
  MATH_SCRIPT_SIZE_FACTOR = 0.72;
  MATH_SCRIPT_SCRIPT_SIZE_FACTOR = 0.58;
  MATH_RADICAL_DEGREE_SIZE_FACTOR = 0.88;
  MATH_LIMIT_SIZE_FACTOR = 0.72;
  MATH_ACCENT_CLEARANCE_FACTOR = 0.14;
  MATH_BAR_CLEARANCE_FACTOR = 0.08;
  MATH_DELIMITER_GAP_FACTOR = 0.08;
  TEX_THIN_MUSKIP_FACTOR = 0.16666666666666666;
  TEX_MED_MUSKIP_FACTOR = 0.2222222222222222;
  TEX_THICK_MUSKIP_FACTOR = 0.2777777777777778;
  MATH_ITALIC_CORRECTION_MIN_FACTOR = 0.06;
  MATH_NARY_LIMIT_GAP_FACTOR = 0.1;
  MATH_FRACTION_RULE_OVERLAP_FACTOR = 0.44;
  MATH_MATRIX_CELL_PAD_FACTOR = 0.18;
  MATH_EQARRAY_LINE_GAP_FACTOR = 1.2;
  MATH_PHANTOM_MIN_SIZE_FACTOR = 0.24;
});
