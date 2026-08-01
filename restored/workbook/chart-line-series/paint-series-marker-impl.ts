// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series marker paint (legacy helper #480).
// Stage-3 wave-109.

import { clnH } from "./boundary-hooks";

void clnH;

export function paintSeriesMarker(
  clnIn2642: any,
  clnIn2643: any,
  clnIn2644: any,
  clnIn2645: any,
  clnIn2646: any,
  clnIn2647: any,
) {
  let clnBind10122 = clnIn2643.marker?.size,
    clnBind10123 =
      clnBind10122 !== undefined && Number.isFinite(clnBind10122)
        ? (clnBind10122 * 96) / 72
        : 6,
    clnBind10124 = Math.min(clnIn2647 ?? 1 / 0, Math.max(clnBind10123, 3)),
    clnBind10125 = clnBind10124 / 2,
    clnBind10126 = {
      x: clnIn2645.x - clnBind10125,
      y: clnIn2645.y - clnBind10125,
      width: clnBind10124,
      height: clnBind10124,
    },
    clnBind10127 = clnIn2643.marker?.fill,
    clnBind10128 = clnBind10127
      ? clnH.bh464(
          clnIn2642,
          clnBind10126,
          clnBind10127,
          clnIn2644,
          "transparent",
        )
      : clnIn2646,
    clnBind10129 = clnIn2643.marker?.stroke,
    clnBind10130 = clnBind10129?.fill?.color
      ? clnH.bh463(clnBind10129.fill.color, clnIn2644)
      : undefined,
    clnBind10131 =
      clnBind10129?.widthEmu === undefined
        ? undefined
        : clnBind10129.widthEmu * clnH.emuToPx;
  clnIn2642.save();
  clnIn2642.setLineDash([]);
  clnIn2642.beginPath();
  clnIn2642.arc(clnIn2645.x, clnIn2645.y, clnBind10125, 0, Math.PI * 2);
  clnBind10128 !== "transparent" &&
    ((clnIn2642.fillStyle = clnBind10128), clnIn2642.fill());
  clnBind10130 &&
    clnBind10131 !== 0 &&
    ((clnIn2642.strokeStyle = clnBind10130),
    (clnIn2642.lineWidth = clnBind10131 ?? 1),
    clnIn2642.stroke());
  clnIn2642.restore();
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookHelper480 = paintSeriesMarker;
