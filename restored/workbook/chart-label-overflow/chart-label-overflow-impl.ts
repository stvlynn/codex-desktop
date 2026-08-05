// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: category label overflow/gap (legacy Rxe/Vxe; dead @ wave-127).
// Stage-3 wave-127.

import { cloH } from "./boundary-hooks";

const LABEL_OVERFLOW_PAD = 2;
const LABEL_GAP_PAD = 4;

export function categoryLabelOverflowPx(props: any) {
  let {
    categories,
    ctx,
    explicitRotation,
    labelMaxWidthPx,
    rotationDeg,
    visibleIndices,
  } = props;
  if (
    explicitRotation !== undefined ||
    rotationDeg !== 0 ||
    labelMaxWidthPx <= 0
  )
    return 0;
  let cloBind13546 = 0;
  for (let cloBind19685 of visibleIndices) {
    let cloBind20177 = categories[cloBind19685];
    if (!cloH.isNonEmptyCategory(cloBind20177) || /\s/.test(cloBind20177))
      continue;
    let cloBind20178 = ctx.measureText(cloBind20177).width;
    Number.isFinite(cloBind20178) &&
      (cloBind13546 = Math.max(cloBind13546, cloBind20178 - labelMaxWidthPx));
  }
  return Math.max(0, cloBind13546 - LABEL_OVERFLOW_PAD);
}
export function minCategoryLabelGapPx(
  cloIn5912: any,
  cloIn5913: any,
  cloIn5914: any,
  cloIn5915: any,
) {
  let cloBind15909 = 1 / 0,
    cloBind15910;
  for (let cloBind18916 of cloIn5914) {
    if (!cloH.isNonEmptyCategory(cloIn5913[cloBind18916])) continue;
    let cloBind19463 =
      cloIn5915?.[cloBind18916] ??
      cloH.measureCategoryAdvance(cloIn5912, cloIn5913[cloBind18916]);
    cloBind19463 === undefined ||
      !Number.isFinite(cloBind19463) ||
      (cloBind15910 !== undefined &&
        (cloBind15909 = Math.min(cloBind15909, cloBind19463 - cloBind15910)),
      (cloBind15910 = cloBind19463));
  }
  return Number.isFinite(cloBind15909)
    ? Math.max(0, cloBind15909 - LABEL_GAP_PAD)
    : 1 / 0;
}

export const Rxe = categoryLabelOverflowPx;
export const Vxe = minCategoryLabelGapPx;
