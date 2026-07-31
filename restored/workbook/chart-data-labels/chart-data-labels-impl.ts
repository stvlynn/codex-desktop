// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart data-label paint (legacy helper500).
// Stage-3 wave-98.

import { En } from "../presentation-protobuf";
import { cdlH } from "./boundary-hooks";

void En;
void cdlH;

export function paintChartDataLabel(
  cdlIn355: any,
  cdlIn356: any,
  cdlIn357: any,
  cdlIn358: any,
  cdlIn359: any,
  cdlIn360: any,
  cdlIn361: any = {},
) {
  let cdlBind3681 = cdlIn358?.fontSize ? cdlH.bh152(cdlIn358.fontSize) : 10,
    cdlBind3682 = cdlIn358?.fill?.color
      ? cdlH.resolveColor(cdlIn358.fill.color, cdlIn359)
      : cdlH.defaultMuted,
    cdlBind3683 = cdlIn358?.bold ?? true;
  cdlIn355.save();
  cdlIn355.fillStyle = cdlBind3682;
  cdlIn355.font = `${cdlBind3683 ? "bold " : ""}${cdlBind3681}px ${cdlH.chartFontFamily}`;
  cdlIn355.textBaseline = "middle";
  cdlIn355.textAlign = "center";
  let cdlBind3684 = cdlIn361.callout ?? false,
    cdlBind3685 = cdlIn355.measureText(cdlIn356).width + 8,
    cdlBind3686 = cdlBind3681 + 8,
    cdlBind3687 = cdlIn361.box,
    cdlBind3688 = cdlIn361.isPositive ?? true,
    cdlBind3689 = cdlIn361.orientation ?? "vertical",
    cdlBind3690 = cdlIn360.x,
    cdlBind3691 = cdlIn360.y,
    cdlBind3692 = cdlIn357 ?? En.DATA_LABEL_POSITION_OUT_END;
  if (cdlBind3687 && cdlBind3689 === "horizontal")
    switch (cdlBind3692) {
      case En.DATA_LABEL_POSITION_INSIDE_BASE:
        cdlBind3690 = cdlBind3688
          ? cdlBind3687.x + cdlBind3685 / 2 + 4
          : cdlBind3687.x + cdlBind3687.width - cdlBind3685 / 2 - 4;
        cdlBind3691 = cdlBind3687.y + cdlBind3687.height / 2;
        break;
      case En.DATA_LABEL_POSITION_IN_END:
        cdlBind3690 = cdlBind3688
          ? cdlBind3687.x + cdlBind3687.width - cdlBind3685 / 2 - 4
          : cdlBind3687.x + cdlBind3685 / 2 + 4;
        cdlBind3691 = cdlBind3687.y + cdlBind3687.height / 2;
        break;
      case En.DATA_LABEL_POSITION_CENTER:
        cdlBind3690 = cdlBind3687.x + cdlBind3687.width / 2;
        cdlBind3691 = cdlBind3687.y + cdlBind3687.height / 2;
        break;
      case En.DATA_LABEL_POSITION_OUT_END:
      default:
        cdlBind3690 = cdlBind3688
          ? cdlBind3687.x + cdlBind3687.width + cdlBind3685 / 2 + 4
          : cdlBind3687.x - cdlBind3685 / 2 - 4;
        cdlBind3691 = cdlBind3687.y + cdlBind3687.height / 2;
        break;
    }
  else if (cdlBind3687)
    switch (cdlBind3692) {
      case En.DATA_LABEL_POSITION_INSIDE_BASE:
        cdlBind3690 = cdlBind3687.x + cdlBind3687.width / 2;
        cdlBind3691 = cdlBind3688
          ? cdlBind3687.y + cdlBind3687.height - cdlBind3686 / 2
          : cdlBind3687.y + cdlBind3686 / 2;
        break;
      case En.DATA_LABEL_POSITION_IN_END:
        cdlBind3690 = cdlBind3687.x + cdlBind3687.width / 2;
        cdlBind3691 = cdlBind3688
          ? cdlBind3687.y + cdlBind3686 / 2
          : cdlBind3687.y + cdlBind3687.height - cdlBind3686 / 2;
        break;
      case En.DATA_LABEL_POSITION_CENTER:
        cdlBind3690 = cdlBind3687.x + cdlBind3687.width / 2;
        cdlBind3691 = cdlBind3687.y + cdlBind3687.height / 2;
        break;
      case En.DATA_LABEL_POSITION_OUT_END:
      default:
        cdlBind3690 = cdlBind3687.x + cdlBind3687.width / 2;
        cdlBind3691 = cdlBind3688
          ? cdlBind3687.y - cdlBind3686 / 2 - 4
          : cdlBind3687.y + cdlBind3687.height + cdlBind3686 / 2 + 4;
        break;
    }
  else
    switch (cdlBind3692) {
      case En.DATA_LABEL_POSITION_INSIDE_BASE:
      case En.DATA_LABEL_POSITION_IN_END:
        cdlBind3690 = cdlIn360.x;
        cdlBind3691 = cdlIn360.y + cdlBind3686 / 2 + 6;
        break;
      case En.DATA_LABEL_POSITION_CENTER:
        cdlBind3690 = cdlIn360.x;
        cdlBind3691 = cdlIn360.y;
        break;
      case En.DATA_LABEL_POSITION_OUT_END:
      default:
        cdlBind3690 = cdlIn360.x;
        cdlBind3691 = cdlIn360.y - cdlBind3686 / 2 - 6;
        break;
    }
  if (cdlBind3684) {
    let cdlBind8534 = cdlBind3690 - cdlBind3685 / 2,
      cdlBind8535 = cdlBind3691 - cdlBind3686 / 2;
    cdlIn355.save();
    cdlIn355.globalAlpha = 0.92;
    cdlIn355.fillStyle = "#ffffff";
    cdlIn355.beginPath();
    cdlIn355.moveTo(cdlBind8534 + 3, cdlBind8535);
    cdlIn355.lineTo(cdlBind8534 + cdlBind3685 - 3, cdlBind8535);
    cdlIn355.quadraticCurveTo(
      cdlBind8534 + cdlBind3685,
      cdlBind8535,
      cdlBind8534 + cdlBind3685,
      cdlBind8535 + 3,
    );
    cdlIn355.lineTo(cdlBind8534 + cdlBind3685, cdlBind8535 + cdlBind3686 - 3);
    cdlIn355.quadraticCurveTo(
      cdlBind8534 + cdlBind3685,
      cdlBind8535 + cdlBind3686,
      cdlBind8534 + cdlBind3685 - 3,
      cdlBind8535 + cdlBind3686,
    );
    cdlIn355.lineTo(cdlBind8534 + 3, cdlBind8535 + cdlBind3686);
    cdlIn355.quadraticCurveTo(
      cdlBind8534,
      cdlBind8535 + cdlBind3686,
      cdlBind8534,
      cdlBind8535 + cdlBind3686 - 3,
    );
    cdlIn355.lineTo(cdlBind8534, cdlBind8535 + 3);
    cdlIn355.quadraticCurveTo(
      cdlBind8534,
      cdlBind8535,
      cdlBind8534 + 3,
      cdlBind8535,
    );
    cdlIn355.closePath();
    cdlIn355.fill();
    cdlIn355.restore();
    cdlIn355.save();
    cdlIn355.strokeStyle = "#b0b0b0";
    cdlIn355.lineWidth = 0.75;
    cdlIn355.setLineDash([]);
    cdlIn355.stroke();
    cdlIn355.restore();
    cdlIn355.save();
    cdlIn355.strokeStyle = "#b0b0b0";
    cdlIn355.lineWidth = 0.75;
    cdlIn355.setLineDash([]);
    cdlIn355.beginPath();
    cdlIn355.moveTo(cdlIn360.x, cdlIn360.y);
    cdlIn355.lineTo(cdlBind3690, cdlBind3691);
    cdlIn355.stroke();
    cdlIn355.restore();
  }
  cdlIn355.fillStyle = cdlBind3682;
  cdlIn355.fillText(cdlIn356, cdlBind3690, cdlBind3691);
  cdlIn355.restore();
}

/** Legacy alias. */
export const workbookHelper500 = paintChartDataLabel;
