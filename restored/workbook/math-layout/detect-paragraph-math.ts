// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Detect sole-math paragraphs + align/font-size helpers (legacy lse cluster).

import { Jn } from "../presentation-protobuf";
import { MathJustification } from "../math-plain-text/math-proto-enums";
import { mathAstToPlainText } from "../math-plain-text";
import { hundredthsPointToCssPx } from "../font-stack";
export function paragraphIsPureMath(mathIn10741: unknown) {
  return !mathIn10741.paragraphs || mathIn10741.paragraphs.length !== 1 ? false : extractSoleMathParagraph(mathIn10741.paragraphs[0]) !== undefined;
}
export function extractSoleMathParagraph(mathIn8294: unknown) {
  if (!mathIn8294?.inlineNodes?.length) return;
  let workbookBinding18796 = mathIn8294.inlineNodes.some(item => item.textRun !== undefined),
    workbookBinding18797 = mathIn8294.inlineNodes.some(item => item.math !== undefined);
  if (!(workbookBinding18796 || !workbookBinding18797)) return mathIn8294;
}
export function mergeInlineMathDocuments(mathIn4551: unknown) {
  let workbookBinding13824 = mathIn4551.inlineNodes?.map(mathIn16592 => mathIn16592.math).filter(mathIn16347 => mathIn16347 !== undefined);
  if (workbookBinding13824?.length) return workbookBinding13824.length === 1 ? workbookBinding13824[0] : {
    displayMode: workbookBinding13824[0]?.displayMode,
    paragraphProperties: workbookBinding13824[0]?.paragraphProperties,
    root: {
      sequence: {
        children: workbookBinding13824.map(item => item.root).filter(item => item !== undefined)
      }
    }
  };
}
export function resolveMathParagraphAlign(mathIn4854: unknown, mathIn4855: unknown) {
  let workbookBinding14239 = mathIn4854.paragraphProperties?.justification;
  return workbookBinding14239 === MathJustification.MATH_JUSTIFICATION_CENTER || workbookBinding14239 === MathJustification.MATH_JUSTIFICATION_CENTER_GROUP ? "center" : workbookBinding14239 === MathJustification.MATH_JUSTIFICATION_RIGHT ? "right" : mathIn4855.alignment === Jn.ALIGNMENT_TYPE_CENTER ? "center" : mathIn4855.alignment === Jn.ALIGNMENT_TYPE_RIGHT ? "right" : "left";
}
export function textStyleFontSizePx(mathIn12908: unknown, mathIn12909: unknown) {
  return mathIn12908.fontSize ? hundredthsPointToCssPx(mathIn12908.fontSize, mathIn12909) : undefined;
}
export function mathAstHasExplicitFontSize(mathIn1681: unknown) {
  return mathIn1681 ? !!(mathIn1681.style?.fontSize !== undefined || mathIn1681.sequence?.children?.some(mathIn16613 => mathAstHasExplicitFontSize(mathIn16613)) || mathAstHasExplicitFontSize(mathIn1681.fraction?.numerator) || mathAstHasExplicitFontSize(mathIn1681.fraction?.denominator) || mathAstHasExplicitFontSize(mathIn1681.radical?.degree) || mathAstHasExplicitFontSize(mathIn1681.radical?.radicand) || mathAstHasExplicitFontSize(mathIn1681.scripts?.base) || mathAstHasExplicitFontSize(mathIn1681.scripts?.subscript) || mathAstHasExplicitFontSize(mathIn1681.scripts?.superscript) || mathAstHasExplicitFontSize(mathIn1681.scripts?.presubscript) || mathAstHasExplicitFontSize(mathIn1681.scripts?.presuperscript) || mathAstHasExplicitFontSize(mathIn1681.nary?.lowerLimit) || mathAstHasExplicitFontSize(mathIn1681.nary?.upperLimit) || mathAstHasExplicitFontSize(mathIn1681.nary?.body) || mathIn1681.delimited?.items?.some(mathIn16614 => mathAstHasExplicitFontSize(mathIn16614)) || mathAstHasExplicitFontSize(mathIn1681.function?.name) || mathAstHasExplicitFontSize(mathIn1681.function?.argument) || mathIn1681.matrix?.rows?.some(mathIn15787 => mathIn15787.cells?.some(mathIn16615 => mathAstHasExplicitFontSize(mathIn16615))) || mathAstHasExplicitFontSize(mathIn1681.accent?.base) || mathAstHasExplicitFontSize(mathIn1681.bar?.base) || mathAstHasExplicitFontSize(mathIn1681.enclosure?.body) || mathAstHasExplicitFontSize(mathIn1681.limit?.base) || mathAstHasExplicitFontSize(mathIn1681.limit?.limit) || mathAstHasExplicitFontSize(mathIn1681.phantom?.body) || mathIn1681.equationArray?.rows?.some(mathIn16616 => mathAstHasExplicitFontSize(mathIn16616))) : false;
}
export function firstMathTokenAsTextRun(mathIn12003: unknown) {
  return {
    id: "",
    text: mathAstToPlainText(mathIn12003),
    citations: [],
    reviewMarkIds: []
  };
}
