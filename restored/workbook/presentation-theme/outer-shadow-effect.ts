// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-3: outer-shadow effect factory for presentation themes (legacy Binding556).

import { Zn as colorTypeEnum, D as effectTypeEnum } from "../presentation-protobuf";

// EMU-per-pixel (legacy workbookBinding408 / workbookTt).
const EMU_PER_PX = 9525;
function pxToEmu(px: number): number {
  return Math.round(px * EMU_PER_PX);
}

export function outerShadowEffect(
  opacity: number,
  blurPx: number,
  distancePx: number,
): Record<string, unknown> { return {
  effects: [
    {
      type: effectTypeEnum.EFFECT_TYPE_OUTER_SHADOW,
      shadow: {
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "000000",
          transform: {
            alpha: Math.round(opacity * 1e5),
          },
        },
        blurRadius: pxToEmu(blurPx),
        distance: pxToEmu(distancePx),
        direction: 54e5,
      },
    },
  ],
};
}
