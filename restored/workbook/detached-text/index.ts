// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText barrel (legacy h272–h285 / Binding624–627).

export type {
  DetachedTextHost,
  DetachedTextOptions,
  DetachedTextStyleHost,
  DetachedTextStyleApplyHost,
} from "./types";
export {
  normalizeMathDisplayMode,
  mathDocumentFromNodeInput,
  cloneMathAst,
  cloneMathRoot,
  ensureMathDisplayHelpersInit,
} from "./math-display";
export { FONT_SIZE_UNIT_RE, parseFontSizeUnitString } from "./font-size-unit";
export {
  isRunLike,
  isLatexInline,
  isMathAstInline,
  isMathNodeInline,
  isMathInline,
  isNonMathInline,
  mathInlineDisplayMode,
  isPlainRunList,
  isParagraphPartial,
  isParagraphOrRunList,
  isMixedRunList,
  isInlineAtom,
  isDetachedTextPayload,
} from "./text-input-guards";
export {
  coerceFillOrColor,
  textStyleProtoFromPartial,
  coerceRunLike,
  cloneTextRunFields,
  textRunFromRunLike,
  mathDocumentFromInline,
  normalizeInlineRuns,
  paragraphFromRunList,
  paragraphFromPartial,
  normalizeParagraphInputs,
} from "./text-input-build";
export {
  colorConfigWithoutProto,
  patternConfigWithoutProto,
  fillConfigWithoutProto,
  outlineConfigWithoutProto,
  hasParagraphChrome,
  runToConfig,
  paragraphToConfig,
} from "./text-input-serialize";
export { ensureDetachedTextHelpersInit } from "./ensure-detached-text-helpers-init";
export { DETACHED_TEXT_HOST } from "./detached-text-host";
export { DetachedText } from "./detached-text";
export { ensureDetachedTextInit } from "./ensure-detached-text-init";
