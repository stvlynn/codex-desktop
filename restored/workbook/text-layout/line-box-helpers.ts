// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: line-box / tab / ink helpers (legacy Sce…Oce).

import { PRESENTATION_LINE_HEIGHT_FACTOR, COMPRESSED_LINE_CONTENT_FACTOR } from "./text-layout-constants";
export function presentationCompressedBaseline({
  contentHeightPx,
  lineFontPx,
  lineMultiple,
  naturalHeightPx
}: unknown) {
  return lineMultiple < 1 ? contentHeightPx * COMPRESSED_LINE_CONTENT_FACTOR : lineMultiple > 1 ? lineFontPx + (contentHeightPx - naturalHeightPx) : lineFontPx;
}
export function officeBaselineFromInk({
  contentHeightPx,
  ascentPx,
  descentPx
}: unknown) {
  if (!(!Number.isFinite(contentHeightPx) || !Number.isFinite(ascentPx) || !Number.isFinite(descentPx) || contentHeightPx <= 0 || ascentPx <= 0 || descentPx <= 0)) return contentHeightPx * ascentPx / (ascentPx + descentPx);
}
export function resolveLineBoxMetrics({
  baseAscentPx,
  baseDescentPx,
  officeAscentPx,
  officeDescentPx,
  lineFontPx,
  lineMultiple,
  lineSpacingPx,
  minimumContentHeightPx,
  model,
  usePresentationBaselineMetrics
}: unknown) {
  let workbookBinding8001 = model === "presentation" ? lineFontPx * PRESENTATION_LINE_HEIGHT_FACTOR : baseAscentPx + baseDescentPx,
    workbookBinding8002 = lineSpacingPx === undefined ? model === "presentation" || lineMultiple < 1 ? workbookBinding8001 * lineMultiple : Math.max(workbookBinding8001, lineFontPx * lineMultiple) : lineSpacingPx,
    workbookBinding8003 = minimumContentHeightPx === undefined ? workbookBinding8002 : Math.max(workbookBinding8002, minimumContentHeightPx),
    workbookBinding8004 = model === "presentation" && lineSpacingPx === undefined ? presentationCompressedBaseline({
      contentHeightPx: workbookBinding8003,
      lineFontPx,
      lineMultiple,
      naturalHeightPx: workbookBinding8001
    }) : baseAscentPx + (workbookBinding8003 - workbookBinding8001) / 2,
    workbookBinding8005 = (usePresentationBaselineMetrics && lineSpacingPx === undefined && officeAscentPx !== undefined && officeDescentPx !== undefined ? officeBaselineFromInk({
      contentHeightPx: workbookBinding8003,
      ascentPx: officeAscentPx,
      descentPx: officeDescentPx
    }) : undefined) ?? workbookBinding8004;
  return {
    naturalHeightPx: workbookBinding8001,
    contentHeightPx: workbookBinding8003,
    baselineOffsetPx: workbookBinding8005,
    leadingBeforePx: workbookBinding8005 - baseAscentPx,
    leadingAfterPx: workbookBinding8003 - workbookBinding8005 - baseDescentPx
  };
}
export function spacerSegmentFromReference(textIn6743: unknown, textIn6744: unknown) {
  return {
    ...textIn6743,
    text: "",
    widthPx: textIn6744,
    charEnd: textIn6743.charStart,
    advance: new Float32Array(1),
    inkLeftPx: 0,
    inkRightPx: 0,
    inkAscentPx: 0,
    inkDescentPx: 0,
    highlight: undefined,
    underline: undefined
  };
}
export function resolveNextTabStop({
  tabStops,
  defaultTabStopPx,
  offsetPx,
  currentWidthPx
}: unknown) {
  let workbookBinding14779 = tabStops.find(item => item.positionPx - offsetPx > currentWidthPx + 0.01);
  return workbookBinding14779 ? {
    positionPx: workbookBinding14779.positionPx - offsetPx,
    alignment: workbookBinding14779.alignment
  } : defaultTabStopPx > 0 ? {
    positionPx: Math.ceil((offsetPx + currentWidthPx + 0.01) / defaultTabStopPx) * defaultTabStopPx - offsetPx,
    alignment: "left"
  } : {
    positionPx: currentWidthPx,
    alignment: "left"
  };
}
export function tabAlignedWidth({
  tabTarget,
  currentWidthPx,
  fieldWidthPx
}: unknown) {
  switch (tabTarget.alignment) {
    case "center":
      return Math.max(currentWidthPx, tabTarget.positionPx - fieldWidthPx / 2);
    case "right":
    case "decimal":
      return Math.max(currentWidthPx, tabTarget.positionPx - fieldWidthPx);
    default:
      return Math.max(currentWidthPx, tabTarget.positionPx);
  }
}
export function resolveLayoutProfile(props: unknown) {
  return props.layoutProfile ? props.layoutProfile : props.paragraphSpacingUnit === "twips" ? "document" : "presentation";
}
export function resolveParagraphSpacingUnit(textIn11456: unknown, textIn11457: unknown) {
  return textIn11456.paragraphSpacingUnit ?? (textIn11457 === "document" ? "twips" : "points");
}
export function accumulateLineInkBounds(props: unknown) {
  if (props.segments.length === 0) return;
  let workbookBinding10870 = 0,
    workbookBinding10871 = 1 / 0,
    workbookBinding10872 = -1 / 0,
    workbookBinding10873 = 0,
    workbookBinding10874 = 0;
  props.segments.forEach(item => {
    (item.inkRightPx > 0 || item.inkAscentPx > 0 || item.inkDescentPx > 0) && (workbookBinding10871 = Math.min(workbookBinding10871, workbookBinding10870 - item.inkLeftPx), workbookBinding10872 = Math.max(workbookBinding10872, workbookBinding10870 + item.inkRightPx), workbookBinding10873 = Math.max(workbookBinding10873, item.inkAscentPx), workbookBinding10874 = Math.max(workbookBinding10874, item.inkDescentPx));
    workbookBinding10870 += item.widthPx;
  });
  !(!Number.isFinite(workbookBinding10871) || !Number.isFinite(workbookBinding10872)) && (Math.max(0, workbookBinding10872 - workbookBinding10871) <= 0 || (props.inkLeftPx = workbookBinding10871, props.inkRightPx = workbookBinding10872, props.inkAscentPx = workbookBinding10873, props.inkDescentPx = workbookBinding10874));
}
