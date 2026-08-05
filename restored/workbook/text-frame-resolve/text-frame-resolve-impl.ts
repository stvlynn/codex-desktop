// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: resolved text-frame style/font (legacy KDe/qDe/YDe/tOe).
// Stage-3 wave-127.

import {
  snapshotCellRuns,
  round2,
  trimNonEmpty,
} from "../compose-element-snapshot";
import { buildTextFrameStyle } from "../text-frame-style";
import { resolvePlaceholderTextStyle, mergeStyleLayers } from "../text-style";

export function resolvedFontSize(
  tfrIn3630: any,
  tfrIn3631: any,
  tfrIn3632: any,
) {
  let tfrBind12183 = tfrIn3631.getPresentation(),
    tfrBind12184 = snapshotCellRuns(tfrIn3630, tfrBind12183)
      .map((item) => item.fontSize)
      .filter((item) => typeof item == "number" && Number.isFinite(item));
  if (tfrBind12184.length > 0) return round2(Math.max(...tfrBind12184));
  if (!tfrIn3632?.paragraphs?.length || !tfrBind12183) return;
  let tfrBind12185 = resolvePlaceholderTextStyle(
      tfrIn3632,
      tfrBind12183,
      tfrIn3631,
    ),
    tfrBind12186 = tfrBind12185.fontSize;
  if (typeof tfrBind12186 != "number" || !Number.isFinite(tfrBind12186)) return;
  let tfrBind12187 = tfrBind12185.autoFit?.normalAutoFit?.fontScale,
    tfrBind12188 =
      typeof tfrBind12187 == "number" && Number.isFinite(tfrBind12187)
        ? tfrBind12187 / 1e5
        : 1;
  return round2((tfrBind12186 / 100) * 1.3333333333333333 * tfrBind12188);
}
export function resolvedTextStyle(
  tfrIn5503: any,
  tfrIn5504: any,
  tfrIn5505: any,
) {
  let tfrBind15301 = tfrIn5504.getPresentation(),
    tfrBind15302 = snapshotCellRuns(tfrIn5503, tfrBind15301).find((item) => {
      let tfrBind21939 = item.fontSize;
      return typeof tfrBind21939 == "number" && Number.isFinite(tfrBind21939);
    }),
    tfrBind15303 =
      tfrIn5505?.paragraphs?.length && tfrBind15301
        ? buildTextFrameStyle(
            resolvePlaceholderTextStyle(tfrIn5505, tfrBind15301, tfrIn5504),
            tfrBind15301,
            {
              includeTextFrameDefaults: true,
            },
          )
        : undefined;
  return tfrBind15302 && tfrBind15303
    ? mergeResolvedTextStyle(tfrBind15302, tfrBind15303)
    : (tfrBind15302 ?? tfrBind15303);
}
export function mergeResolvedTextStyle(tfrIn14903: any, tfrIn14904: any) {
  return patchTextFrameStyle(
    mergeStyleLayers(tfrIn14903, tfrIn14904),
    tfrIn14904,
  );
}
export function patchTextFrameStyle(tfrIn2472: any, tfrIn2473: any) {
  let tfrBind9789 = {
    ...tfrIn2472,
  };
  return (
    tfrIn2473.anchor !== undefined && (tfrBind9789.anchor = tfrIn2473.anchor),
    tfrIn2473.vertical !== undefined &&
      (tfrBind9789.vertical = tfrIn2473.vertical),
    tfrIn2473.rotation !== undefined &&
      (tfrBind9789.rotation = tfrIn2473.rotation),
    tfrIn2473.verticalAlignment !== undefined &&
      (tfrBind9789.verticalAlignment = tfrIn2473.verticalAlignment),
    tfrIn2473.wrap !== undefined && (tfrBind9789.wrap = tfrIn2473.wrap),
    tfrIn2473.autoFit !== undefined &&
      (tfrBind9789.autoFit = tfrIn2473.autoFit),
    tfrIn2473.autoFitScale !== undefined &&
      (tfrBind9789.autoFitScale = tfrIn2473.autoFitScale),
    tfrIn2473.autoFitLineSpaceReduction !== undefined &&
      (tfrBind9789.autoFitLineSpaceReduction =
        tfrIn2473.autoFitLineSpaceReduction),
    tfrIn2473.insets !== undefined && (tfrBind9789.insets = tfrIn2473.insets),
    tfrIn2473.useParagraphSpacing !== undefined &&
      (tfrBind9789.useParagraphSpacing = tfrIn2473.useParagraphSpacing),
    tfrBind9789
  );
}
export function applyParagraphTextOverrides(tfrIn4301: any, tfrIn4302: any) {
  return !tfrIn4301 || !tfrIn4302
    ? tfrIn4301
    : tfrIn4301.map((item) => {
        let tfrBind14583 = tfrIn4302.paragraphs?.[item.index - 1];
        if (!tfrBind14583) return item;
        let tfrBind14584 = item.runs
            .map((_item) => ({
              ..._item,
              text: tfrBind14583.runs?.[_item.index - 1]?.text ?? _item.text,
            }))
            .filter((_item) => _item.text.length > 0),
          tfrBind14585 = trimNonEmpty(
            (tfrBind14583.runs ?? []).map((_item) => _item.text).join(""),
          );
        return {
          ...item,
          ...(tfrBind14585 === undefined
            ? {}
            : {
                text: tfrBind14585,
              }),
          runs: tfrBind14584,
        };
      });
}

export const KDe = resolvedFontSize;
export const qDe = resolvedTextStyle;
export const JDe = mergeResolvedTextStyle;
export const YDe = patchTextFrameStyle;
export const tOe = applyParagraphTextOverrides;
