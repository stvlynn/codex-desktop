// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paint CF rating bars (legacy workbookHelper595).
// Stage-3 wave-124.

import { Swe } from "../shape-path";

export function paintRatingBars(
  ispIn3755: any,
  ispIn3756: any,
  ispIn3757: any,
  ispIn3758: any,
) {
  let ispBind12482 = ispIn3756 > 1 ? 2 : 0,
    ispBind12483 =
      (ispIn3758.width - ispBind12482 * (ispIn3756 - 1)) / ispIn3756;
  for (let ispBind13984 = 0; ispBind13984 < ispIn3756; ispBind13984 += 1) {
    let ispBind14579 = ispBind13984 < ispIn3757,
      ispBind14580 =
        ispIn3758.height * (0.34 + ((ispBind13984 + 1) / ispIn3756) * 0.56),
      ispBind14581 = ispIn3758.x + ispBind13984 * (ispBind12483 + ispBind12482),
      ispBind14582 = ispIn3758.y + ispIn3758.height - ispBind14580;
    ispIn3755.fillStyle = ispBind14579
      ? "#4CAF50"
      : "rgba(203, 213, 225, 0.42)";
    ispIn3755.strokeStyle = ispBind14579
      ? "#2E7D32"
      : "rgba(107, 114, 128, 0.55)";
    ispIn3755.lineWidth = Math.max(1, ispBind12483 * 0.18);
    Swe(
      ispIn3755,
      ispBind14581,
      ispBind14582,
      ispBind12483,
      ispBind14580,
      ispBind12483 * 0.25,
    );
    ispIn3755.fill();
    ispIn3755.stroke();
  }
}

/** Legacy alias (wave-124). */
export const workbookHelper595 = paintRatingBars;
