// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: TeX atom-class spacing + italic correction (legacy kse/Ase/jse cluster).

import {
  MATH_ITALIC_CORRECTION_MIN_FACTOR,
  TEX_MED_MUSKIP_FACTOR,
  TEX_THICK_MUSKIP_FACTOR,
  TEX_THIN_MUSKIP_FACTOR,
} from "./layout-tuning";
import { isItalicOrdinaryAtom } from "./math-atom-classes";
export function texAtomSpacingPx(
  mathIn12479: unknown,
  mathIn12480: unknown,
  mathIn12481: unknown,
  mathIn12482: unknown,
  mathIn12483: unknown,
  mathIn12484: unknown,
) {
  return (
    atomSpacingForClasses(mathIn12482, mathIn12483, mathIn12484) +
    italicCorrectionGapPx(
      mathIn12479,
      mathIn12480,
      mathIn12481,
      mathIn12482,
      mathIn12483,
      mathIn12484,
    )
  );
}
export function atomSpacingForClasses(
  mathIn9064: unknown,
  mathIn9065: unknown,
  mathIn9066: unknown,
) {
  let workbookBinding19636 = texAtomSpacingClass(mathIn9064, mathIn9065);
  return workbookBinding19636 === 1
    ? mathIn9066.fontPx * TEX_THIN_MUSKIP_FACTOR
    : workbookBinding19636 === 2
      ? mathIn9066.fontPx * TEX_MED_MUSKIP_FACTOR
      : workbookBinding19636 === 3
        ? mathIn9066.fontPx * TEX_THICK_MUSKIP_FACTOR
        : 0;
}
export function texAtomSpacingClass(mathIn1347: unknown, mathIn1348: unknown) {
  return (mathIn1347 === "ord" && mathIn1348 === "op") ||
    (mathIn1347 === "ord" && mathIn1348 === "inner") ||
    (mathIn1347 === "op" && mathIn1348 === "ord") ||
    (mathIn1347 === "op" && mathIn1348 === "op") ||
    (mathIn1347 === "op" && mathIn1348 === "inner") ||
    (mathIn1347 === "close" && mathIn1348 === "op") ||
    (mathIn1347 === "close" && mathIn1348 === "inner") ||
    (mathIn1347 === "punct" &&
      (mathIn1348 === "ord" ||
        mathIn1348 === "op" ||
        mathIn1348 === "rel" ||
        mathIn1348 === "open" ||
        mathIn1348 === "close" ||
        mathIn1348 === "punct" ||
        mathIn1348 === "inner")) ||
    (mathIn1347 === "inner" &&
      (mathIn1348 === "ord" ||
        mathIn1348 === "op" ||
        mathIn1348 === "open" ||
        mathIn1348 === "punct" ||
        mathIn1348 === "inner"))
    ? 1
    : (mathIn1347 === "ord" && mathIn1348 === "bin") ||
        (mathIn1347 === "bin" &&
          (mathIn1348 === "ord" ||
            mathIn1348 === "op" ||
            mathIn1348 === "open" ||
            mathIn1348 === "inner")) ||
        (mathIn1347 === "close" && mathIn1348 === "bin") ||
        (mathIn1347 === "inner" && mathIn1348 === "bin")
      ? 2
      : (mathIn1347 === "ord" && mathIn1348 === "rel") ||
          (mathIn1347 === "op" && mathIn1348 === "rel") ||
          (mathIn1347 === "rel" &&
            (mathIn1348 === "ord" ||
              mathIn1348 === "op" ||
              mathIn1348 === "open" ||
              mathIn1348 === "inner")) ||
          (mathIn1347 === "close" && mathIn1348 === "rel") ||
          (mathIn1347 === "inner" && mathIn1348 === "rel")
        ? 3
        : 0;
}
export function italicCorrectionGapPx(
  mathIn6801: unknown,
  mathIn6802: unknown,
  mathIn6803: unknown,
  mathIn6804: unknown,
  mathIn6805: unknown,
  mathIn6806: unknown,
) {
  return mathIn6804 !== "ord" ||
    (mathIn6805 !== "op" && mathIn6805 !== "open" && mathIn6805 !== "inner") ||
    !isItalicOrdinaryAtom(mathIn6801) ||
    mathIn6803.widthPx <= 0 ||
    mathIn6802.token?.text === "|" ||
    mathIn6801.token?.text === "|"
    ? 0
    : Math.max(
        mathIn6806.fontPx * MATH_ITALIC_CORRECTION_MIN_FACTOR,
        mathIn6803.widthPx * 0.02,
      );
}
