// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: canvas ctx.setLineDash applicator (legacy M_/N_).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, ur as lineStyleEnum } from "../presentation-protobuf";
export function applyCanvasLineDash(dashIn965: unknown, dashIn966: unknown, dashIn967: unknown) {
  switch (dashIn966) {
    case lineStyleEnum.LINE_STYLE_SOLID:
    case lineStyleEnum.LINE_STYLE_UNSPECIFIED:
      dashIn965.setLineDash([]);
      break;
    case lineStyleEnum.LINE_STYLE_DASHED:
      dashIn965.setLineDash([4 * dashIn967, 4 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_LARGE_DASH:
      dashIn965.setLineDash([8 * dashIn967, 4 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_SYSTEM_DASH:
      dashIn965.setLineDash([3 * dashIn967, 3 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_DOTTED:
      dashIn965.lineCap = "round";
      dashIn965.setLineDash([dashIn967, 2 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_DASH_DOT:
      dashIn965.lineCap = "round";
      dashIn965.setLineDash([4 * dashIn967, 2 * dashIn967, dashIn967, 2 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_SYSTEM_DOT:
      dashIn965.lineCap = "round";
      dashIn965.setLineDash([dashIn967, 2 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_DASH_DOT_DOT:
      dashIn965.lineCap = "round";
      dashIn965.setLineDash([4 * dashIn967, 2 * dashIn967, dashIn967, 2 * dashIn967, dashIn967, 2 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_LARGE_DASH_DOT:
      dashIn965.lineCap = "butt";
      dashIn965.setLineDash([8 * dashIn967, 3 * dashIn967, dashIn967, 3 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_SYSTEM_DASH_DOT:
      dashIn965.lineCap = "butt";
      dashIn965.setLineDash([3 * dashIn967, 2 * dashIn967, dashIn967, 2 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_LARGE_DASH_DOT_DOT:
      dashIn965.lineCap = "butt";
      dashIn965.setLineDash([8 * dashIn967, 3 * dashIn967, dashIn967, 2 * dashIn967, dashIn967, 3 * dashIn967]);
      break;
    case lineStyleEnum.LINE_STYLE_SYSTEM_DASH_DOT_DOT:
      dashIn965.lineCap = "butt";
      dashIn965.setLineDash([3 * dashIn967, 2 * dashIn967, dashIn967, 2 * dashIn967, dashIn967, 2 * dashIn967]);
      break;
    default:
      dashIn965.setLineDash([]);
  }
}
export const ensureCanvasLineDashInit = esmInit(() => {
  wr();
});
