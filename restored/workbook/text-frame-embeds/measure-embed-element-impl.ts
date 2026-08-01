// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: measure embed element height (legacy NTe).
// Stage-3 wave-125.

import { meeH } from "./boundary-hooks-measure";

export function measureEmbedElement(
  meeIn3467: any,
  meeIn3468: any,
  meeIn3469: any,
  meeIn3470: any,
  meeIn3471: any,
) {
  let meeBind11909 = meeH.paintTextElement(
    {
      ...meeIn3467,
      bbox: {
        ...meeIn3467.bbox,
        xEmu: 0,
        yEmu: 0,
        widthEmu: Math.max(1, meeIn3470) * meeH.emuPerPx,
        heightEmu: 1e5 * meeH.emuPerPx,
      },
    },
    meeIn3468,
    meeIn3469,
    undefined,
    {
      mode: "layout",
      paddingPx: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      paragraphSpacingUnit: meeIn3471.paragraphSpacingUnit,
      masterDefaults: meeIn3471.masterDefaults,
      documentGridLinePitchTwips: meeIn3471.documentGridLinePitchTwips,
    },
  );
  return Math.max(0, meeBind11909?.height ?? 0);
}

/** Legacy alias (wave-125). */
export const NTe = measureEmbedElement;
