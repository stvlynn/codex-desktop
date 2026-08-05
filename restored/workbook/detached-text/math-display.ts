// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: math displayMode normalize + document builders (legacy h272/oue/sue/cue).

import {
  MathDisplayMode,
  MathJustification,
  ensurePresentationMathEnumsInit,
  parseMathFromLatex,
  mathAstToPlainText,
} from "../math-plain-text";
import { normalizeMathDocumentViaMathMl } from "../math-ml";

export function normalizeMathDisplayMode(
  dtIn8976: any,
  dtIn8977: any = "inline",
) {
  let dtBind19520 = dtIn8976 ?? dtIn8977;
  return dtBind19520 === "block"
    ? MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
    : dtBind19520 === "inline"
      ? MathDisplayMode.MATH_DISPLAY_MODE_INLINE
      : dtBind19520;
}

export function mathDocumentFromNodeInput(dtIn6042: any) {
  let dtBind16073 = normalizeMathDisplayMode(dtIn6042.displayMode);
  return {
    id: dtIn6042.id,
    displayMode: dtBind16073,
    paragraphProperties:
      dtIn6042.paragraphProperties ??
      (dtBind16073 === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
        ? {
            justification: MathJustification.MATH_JUSTIFICATION_CENTER_GROUP,
          }
        : undefined),
    root: cloneMathRoot(dtIn6042.root),
  };
}

export function cloneMathAst(dtIn14945: any) {
  return structuredClone(dtIn14945);
}

export function cloneMathRoot(dtIn14946: any) {
  return structuredClone(dtIn14946);
}

let mathDisplayReady = false;

/** Legacy lue — touch presentation math enums. */
export function ensureMathDisplayHelpersInit(): void {
  if (mathDisplayReady) return;
  ensurePresentationMathEnumsInit();
  mathDisplayReady = true;
}
