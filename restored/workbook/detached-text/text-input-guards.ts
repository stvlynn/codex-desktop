// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: detached-text input type guards (legacy h276–h283 / _workbookQ).

import { normalizeMathDisplayMode } from "./math-display";

export function isRunLike(dtIn12867: any) {
  return !dtIn12867 || typeof dtIn12867 != "object"
    ? false
    : "run" in dtIn12867;
}

export function isLatexInline(dtIn11588: any) {
  return !dtIn11588 ||
    typeof dtIn11588 != "object" ||
    Array.isArray(dtIn11588)
    ? false
    : "latex" in dtIn11588;
}

export function isMathAstInline(dtIn11622: any) {
  return !dtIn11622 ||
    typeof dtIn11622 != "object" ||
    Array.isArray(dtIn11622)
    ? false
    : "math" in dtIn11622;
}

export function isMathNodeInline(dtIn11589: any) {
  return !dtIn11589 ||
    typeof dtIn11589 != "object" ||
    Array.isArray(dtIn11589)
    ? false
    : "node" in dtIn11589;
}

export function isMathInline(dtIn14513: any) {
  return (
    isLatexInline(dtIn14513) ||
    isMathAstInline(dtIn14513) ||
    isMathNodeInline(dtIn14513)
  );
}

export function isNonMathInline(dtIn15638: any) {
  return !isMathInline(dtIn15638);
}

export function mathInlineDisplayMode(dtIn9996: any) {
  return isLatexInline(dtIn9996)
    ? normalizeMathDisplayMode(dtIn9996.displayMode)
    : isMathAstInline(dtIn9996)
      ? normalizeMathDisplayMode(
          dtIn9996.displayMode,
          dtIn9996.math.displayMode,
        )
      : normalizeMathDisplayMode(dtIn9996.displayMode);
}

export function isPlainRunList(dtIn13769: any) {
  return (
    Array.isArray(dtIn13769) &&
    dtIn13769.every(isInlineAtom)
  );
}

export function isParagraphPartial(dtIn5911: any) {
  return !dtIn5911 ||
    typeof dtIn5911 != "object" ||
    Array.isArray(dtIn5911)
    ? false
    : "runs" in dtIn5911 ||
        "bulletCharacter" in dtIn5911 ||
        "marginLeft" in dtIn5911 ||
        "indent" in dtIn5911 ||
        "spaceBefore" in dtIn5911 ||
        "spaceAfter" in dtIn5911 ||
        "styleId" in dtIn5911 ||
        "paragraphStyle" in dtIn5911;
}

export function isParagraphOrRunList(dtIn15252: any) {
  return (
    isPlainRunList(dtIn15252) ||
    isParagraphPartial(dtIn15252)
  );
}

export function isMixedRunList(dtIn11623: any) {
  return (
    Array.isArray(dtIn11623) &&
    dtIn11623.every(isInlineAtom) &&
    dtIn11623.some(
      (item) => isRunLike(item) || isMathInline(item),
    )
  );
}

export function isInlineAtom(dtIn11590: any) {
  return typeof dtIn11590 == "string" ||
    typeof dtIn11590 == "number"
    ? true
    : isRunLike(dtIn11590) ||
        isMathInline(dtIn11590);
}

export function isDetachedTextPayload(dtIn11621: any) {
  return isParagraphPartial(dtIn11621)
    ? true
    : Array.isArray(dtIn11621)
      ? isMixedRunList(dtIn11621)
        ? true
        : dtIn11621.every(isParagraphOrRunList)
      : false;
}

