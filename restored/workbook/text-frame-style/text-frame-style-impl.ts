// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: text-frame style from slide proto (legacy workbookHelper689 nest).
// Stage-3 wave-124.

import { alignmentProtoToName } from "../text-style";
import { resolveThemeTypefaceToken } from "../placeholder-resolve";
import { trimNonEmpty, round2 } from "../compose-element-snapshot";
import { resolveOptionalTextBoxInsetsPx } from "../text-box";

export function buildTextFrameStyle(
  tfsIn2195: any,
  tfsIn2196: any,
  tfsIn2197: any,
) {
  if (!tfsIn2195) return;
  let tfsBind9204 = {
    anchor: tfsIn2195.anchor,
    vertical: tfsIn2195.vertical,
    rotation: round2(tfsIn2195.rotation),
    fontSize: coerceFontSizePx(tfsIn2195.fontSize),
    name: trimNonEmpty(tfsIn2195.name),
    family: tfsIn2195.family,
    scheme: trimNonEmpty(tfsIn2195.scheme),
    typeface: resolveThemeTypefaceToken(
      tfsIn2195.typeface,
      tfsIn2196?.theme.fontScheme,
    ),
    color: resolveTextFrameColor(tfsIn2195),
    bold: tfsIn2195.bold === true ? true : undefined,
    italic: tfsIn2195.italic === true ? true : undefined,
    alignment: alignmentProtoToName(tfsIn2195.alignment),
    verticalAlignment: resolveVerticalAlignment(tfsIn2195.anchor),
    lineSpacing: round2(tfsIn2195.lineSpacing),
    textTransform: resolveTextTransform(tfsIn2195.capitalization),
    wrap: resolveTextWrap(tfsIn2195.wrap),
    autoFit: resolveAutoFitMode(tfsIn2195.autoFit),
    autoFitScale: resolveAutoFitScale(tfsIn2195),
    autoFitLineSpaceReduction: resolveAutoFitLineSpaceReduction(tfsIn2195),
    insets: resolveTextInsets(tfsIn2195, tfsIn2197),
    useParagraphSpacing:
      tfsIn2195.useParagraphSpacing === true ? true : undefined,
  };
  return Object.values(tfsBind9204).some((item) => item !== undefined)
    ? tfsBind9204
    : undefined;
}
export function resolveTextFrameColor(tfsIn7598: any) {
  let tfsBind18088 = tfsIn7598.color?.toConfig();
  if (tfsBind18088 !== undefined) return tfsBind18088;
  let tfsBind18089 = tfsIn7598.fill;
  if (tfsBind18089)
    return tfsBind18089 instanceof workbookCt
      ? tfsBind18089.color.toConfig()
      : new workbookCt({
          type: "proto",
          proto: tfsBind18089,
        }).color.toConfig();
}
export function resolveTextTransform(tfsIn8340: any) {
  if (tfsIn8340 === presentationR.TEXT_CAPITALIZATION_NONE) return "none";
  if (tfsIn8340 === presentationR.TEXT_CAPITALIZATION_ALL) return "uppercase";
  if (tfsIn8340 === presentationR.TEXT_CAPITALIZATION_SMALL) return "smallCaps";
}
export function resolveVerticalAlignment(tfsIn13944: any) {
  return tfsIn13944 === undefined ? undefined : tfsBind402[tfsIn13944];
}
export function resolveTextWrap(tfsIn11867: any) {
  if (tfsIn11867 !== undefined)
    return tfsIn11867 === "square" || tfsIn11867 === "none"
      ? tfsIn11867
      : tfsBind392[tfsIn11867];
}
export function resolveAutoFitMode(tfsIn6512: any) {
  if (tfsIn6512 !== undefined) {
    if (
      tfsIn6512 === "none" ||
      tfsIn6512 === "shrinkText" ||
      tfsIn6512 === "resizeShapeToFitText"
    )
      return tfsIn6512;
    if (tfsIn6512.noAutofit) return "none";
    if (tfsIn6512.normalAutoFit) return "shrinkText";
    if (tfsIn6512.shapeAutoFit) return "resizeShapeToFitText";
  }
}
export function resolveAutoFitScale(tfsIn5948: any) {
  if (tfsIn5948.autoFitScale !== undefined)
    return round2(tfsIn5948.autoFitScale);
  let tfsBind15969 = tfsIn5948.autoFit;
  if (
    tfsBind15969 === undefined ||
    tfsBind15969 === "none" ||
    tfsBind15969 === "shrinkText" ||
    tfsBind15969 === "resizeShapeToFitText"
  )
    return;
  let tfsBind15970 = tfsBind15969.normalAutoFit?.fontScale;
  return tfsBind15970 === undefined ? undefined : round2(tfsBind15970 / 1e5);
}
export function resolveAutoFitLineSpaceReduction(tfsIn5851: any) {
  if (tfsIn5851.autoFitLineSpaceReduction !== undefined)
    return round2(tfsIn5851.autoFitLineSpaceReduction);
  let tfsBind15811 = tfsIn5851.autoFit;
  if (
    !(
      tfsBind15811 === undefined ||
      tfsBind15811 === "none" ||
      tfsBind15811 === "shrinkText" ||
      tfsBind15811 === "resizeShapeToFitText"
    )
  )
    return round2(tfsBind15811.normalAutoFit?.lineSpaceReduction);
}
export function resolveTextInsets(tfsIn8035: any, tfsIn8036: any) {
  let tfsBind18539 = tfsIn8036?.includeTextFrameDefaults
    ? workbookHelper215(tfsIn8035)
    : resolveOptionalTextBoxInsetsPx(tfsIn8035);
  if (tfsBind18539)
    return {
      top: round2(tfsBind18539.top),
      right: round2(tfsBind18539.right),
      bottom: round2(tfsBind18539.bottom),
      left: round2(tfsBind18539.left),
    };
}
export function coerceFontSizePx(tfsIn10565: any) {
  if (!(typeof tfsIn10565 != "number" || !Number.isFinite(tfsIn10565)))
    return round2(
      tfsIn10565 > 200 ? (tfsIn10565 / 100) * 1.3333333333333333 : tfsIn10565,
    );
}

/** Legacy aliases (wave-124). */
export const workbookHelper689 = buildTextFrameStyle;
export const cOe = resolveTextFrameColor;
export const lOe = resolveTextTransform;
export const uOe = resolveVerticalAlignment;
export const dOe = resolveTextWrap;
export const fOe = resolveAutoFitMode;
export const pOe = resolveAutoFitScale;
export const mOe = resolveAutoFitLineSpaceReduction;
export const hOe = resolveTextInsets;
export const EOe = coerceFontSizePx;
