// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Math box hbox/scale/empty helpers (legacy yse/bse/xse cluster).

import { buildMeasureFontShorthand } from "../font-metrics";
import { layoutMathNode } from "./layout-math-node";
import { measureStyledGlyphBox, normalizeBinAtomClasses, texAtomSpacingPx } from "./math-atom-spacing";
import { mathRunFontDescriptor } from "./resolve-math-style";
export function hboxMathBoxes(mathIn2935: unknown, mathIn2936: unknown, mathIn2937: unknown = 0) {
  let workbookBinding10855 = mathIn2935.reduce((accumulator, current) => accumulator + current.widthPx, 0) + Math.max(0, mathIn2935.length - 1) * mathIn2937,
    workbookBinding10856 = mathIn2935.reduce((accumulator, current) => Math.max(accumulator, current.ascentPx), 0),
    workbookBinding10857 = mathIn2935.reduce((accumulator, current) => Math.max(accumulator, current.descentPx), 0),
    workbookBinding10858 = mathIn2935[0] ?? emptyMathBox(mathIn2936);
  return {
    widthPx: workbookBinding10855,
    ascentPx: workbookBinding10856,
    descentPx: workbookBinding10857,
    primaryFont: workbookBinding10858.primaryFont,
    primaryFontKey: workbookBinding10858.primaryFontKey,
    fontPx: workbookBinding10858.fontPx,
    fill: workbookBinding10858.fill,
    inkLeftPx: mathIn2935[0]?.inkLeftPx ?? 0,
    inkRightPx: workbookBinding10855,
    inkAscentPx: workbookBinding10856,
    inkDescentPx: workbookBinding10857,
    draw: (mathIn11316, mathIn11317, mathIn11318) => {
      let workbookBinding21784 = mathIn11317;
      for (let workbookBinding22786 of mathIn2935) {
        workbookBinding22786.draw(mathIn11316, workbookBinding21784, mathIn11318);
        workbookBinding21784 += workbookBinding22786.widthPx + mathIn2937;
      }
    }
  };
}
export function hboxMathBoxesWithGaps(mathIn2171: unknown, mathIn2172: unknown, mathIn2173: unknown) {
  if (mathIn2171.length === 0) return emptyMathBox(mathIn2173);
  let workbookBinding9161 = mathIn2171.reduce((accumulator, current) => accumulator + current.widthPx, 0) + mathIn2172.reduce((accumulator, current) => accumulator + current, 0),
    workbookBinding9162 = mathIn2171.reduce((accumulator, current) => Math.max(accumulator, current.ascentPx), 0),
    workbookBinding9163 = mathIn2171.reduce((accumulator, current) => Math.max(accumulator, current.descentPx), 0),
    workbookBinding9164 = mathIn2171[0];
  return workbookBinding9164 ? {
    widthPx: workbookBinding9161,
    ascentPx: workbookBinding9162,
    descentPx: workbookBinding9163,
    primaryFont: workbookBinding9164.primaryFont,
    primaryFontKey: workbookBinding9164.primaryFontKey,
    fontPx: workbookBinding9164.fontPx,
    fill: workbookBinding9164.fill,
    inkLeftPx: workbookBinding9164.inkLeftPx,
    inkRightPx: workbookBinding9161,
    inkAscentPx: workbookBinding9162,
    inkDescentPx: workbookBinding9163,
    draw: (mathIn8208, mathIn8209, mathIn8210) => {
      let workbookBinding18722 = mathIn8209;
      for (let workbookBinding20419 = 0; workbookBinding20419 < mathIn2171.length; workbookBinding20419 += 1) {
        let workbookBinding21585 = mathIn2171[workbookBinding20419];
        workbookBinding21585 && (workbookBinding21585.draw(mathIn8208, workbookBinding18722, mathIn8210), workbookBinding18722 += workbookBinding21585.widthPx + (mathIn2172[workbookBinding20419] ?? 0));
      }
    }
  } : emptyMathBox(mathIn2173);
}
export function layoutMathSequence(mathIn5526: unknown, mathIn5527: unknown, mathIn5528: unknown) {
  let workbookBinding15321 = mathIn5526.map(item => layoutMathNode(item, mathIn5527, mathIn5528)),
    workbookBinding15322 = normalizeBinAtomClasses(mathIn5526.map(item => measureStyledGlyphBox(item)));
  return hboxMathBoxesWithGaps(workbookBinding15321, mathIn5526.slice(0, -1).map((item, index) => texAtomSpacingPx(item, mathIn5526[index + 1] ?? item, workbookBinding15321[index] ?? emptyMathBox(mathIn5527), workbookBinding15322[index] ?? "ord", workbookBinding15322[index + 1] ?? "ord", mathIn5527)), mathIn5527);
}
export function emptyMathBox(mathIn4987: unknown) {
  let workbookBinding14404 = mathRunFontDescriptor(mathIn4987),
    workbookBinding14405 = buildMeasureFontShorthand(workbookBinding14404, mathIn4987.fontPx),
    workbookBinding14406 = `${workbookBinding14404.family}|${workbookBinding14404.style}|${workbookBinding14404.weight}`;
  return {
    widthPx: 0,
    ascentPx: mathIn4987.fontPx * 0.8,
    descentPx: mathIn4987.fontPx * 0.2,
    primaryFont: workbookBinding14405,
    primaryFontKey: workbookBinding14406,
    fontPx: mathIn4987.fontPx,
    fill: mathIn4987.fill,
    inkLeftPx: 0,
    inkRightPx: 0,
    inkAscentPx: 0,
    inkDescentPx: 0,
    draw: () => {}
  };
}
export function scaleMathBox(mathIn3506: unknown, mathIn3507: unknown) {
  return {
    widthPx: mathIn3506.widthPx * mathIn3507,
    ascentPx: mathIn3506.ascentPx * mathIn3507,
    descentPx: mathIn3506.descentPx * mathIn3507,
    primaryFont: mathIn3506.primaryFont,
    primaryFontKey: mathIn3506.primaryFontKey,
    fontPx: mathIn3506.fontPx * mathIn3507,
    fill: mathIn3506.fill,
    inkLeftPx: mathIn3506.inkLeftPx * mathIn3507,
    inkRightPx: mathIn3506.inkRightPx * mathIn3507,
    inkAscentPx: mathIn3506.inkAscentPx * mathIn3507,
    inkDescentPx: mathIn3506.inkDescentPx * mathIn3507,
    draw: (mathIn10258, mathIn10259, mathIn10260) => {
      mathIn10258.save();
      mathIn10258.translate(mathIn10259, mathIn10260);
      mathIn10258.scale(mathIn3507, mathIn3507);
      mathIn3506.draw(mathIn10258, 0, 0);
      mathIn10258.restore();
    }
  };
}
export function layoutMathNodeChild(mathIn12709: unknown, mathIn12710: unknown) {
  return {
    ...mathIn12709,
    fontPx: Math.max(8, mathIn12709.fontPx * mathIn12710)
  };
}
