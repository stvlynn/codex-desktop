// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: default text-box insets + EMU/px side resolvers (legacy ble / Binding548 cluster).

import { esmInit } from "../../runtime/rolldown-runtime";
import { emuToPoints } from "../line";
export const DEFAULT_TEXT_BOX_INSETS_EMU = {
  bottomInset: 45720,
  leftInset: 91440,
  rightInset: 91440,
  topInset: 45720,
};

export const ensureDefaultTextInsetsValuesInit = esmInit(() => {
  void DEFAULT_TEXT_BOX_INSETS_EMU;
});
export function resolveTextBoxInsetsPx(tbIn3500: unknown) {
  return {
    top: resolveInsetSidePx({
      insetPx: tbIn3500?.insets?.top,
      insetEmu: tbIn3500?.topInset,
      defaultInsetEmu: defaultTextBoxInsetsEmu.topInset,
    }),
    right: resolveInsetSidePx({
      insetPx: tbIn3500?.insets?.right,
      insetEmu: tbIn3500?.rightInset,
      defaultInsetEmu: defaultTextBoxInsetsEmu.rightInset,
    }),
    bottom: resolveInsetSidePx({
      insetPx: tbIn3500?.insets?.bottom,
      insetEmu: tbIn3500?.bottomInset,
      defaultInsetEmu: defaultTextBoxInsetsEmu.bottomInset,
    }),
    left: resolveInsetSidePx({
      insetPx: tbIn3500?.insets?.left,
      insetEmu: tbIn3500?.leftInset,
      defaultInsetEmu: defaultTextBoxInsetsEmu.leftInset,
    }),
  };
}
export function resolveOptionalTextBoxInsetsPx(tbIn6247: unknown) {
  let tbBind16358 = {
    top: resolveOptionalInsetSidePx(tbIn6247?.insets?.top, tbIn6247?.topInset),
    right: resolveOptionalInsetSidePx(
      tbIn6247?.insets?.right,
      tbIn6247?.rightInset,
    ),
    bottom: resolveOptionalInsetSidePx(
      tbIn6247?.insets?.bottom,
      tbIn6247?.bottomInset,
    ),
    left: resolveOptionalInsetSidePx(
      tbIn6247?.insets?.left,
      tbIn6247?.leftInset,
    ),
  };
  return Object.values(tbBind16358).some((item) => item !== undefined)
    ? tbBind16358
    : undefined;
}
export function resolveInsetSidePx({
  insetPx,
  insetEmu,
  defaultInsetEmu,
}: unknown) {
  return insetPx === undefined
    ? emuToPoints(insetEmu === undefined ? defaultInsetEmu : insetEmu)
    : insetPx;
}
export function resolveOptionalInsetSidePx(
  tbIn12110: unknown,
  tbIn12111: unknown,
) {
  if (tbIn12110 !== undefined) return tbIn12110;
  if (tbIn12111 !== undefined) return emuToPoints(tbIn12111);
}
export const defaultTextBoxInsetsEmu = DEFAULT_TEXT_BOX_INSETS_EMU;

export const ensureDefaultTextBoxInsetsInit = esmInit(() => {
  ensureDefaultTextInsetsValuesInit();
  void defaultTextBoxInsetsEmu;
});
