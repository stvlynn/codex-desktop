// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF icon-set 3Symbols/3Symbols2 paint (legacy helper #594).
// Stage-3 wave-101.

import { icsH } from "./boundary-hooks";

void icsH;

export function paintIconSetSymbols(
  icsIn837: any,
  icsIn838: any,
  icsIn839: any,
  icsIn840: any,
) {
  let icsBind5515 = icsIn840.x + icsIn840.width / 2,
    icsBind5516 = icsIn840.y + icsIn840.height / 2,
    icsBind5517 =
      Math.min(icsIn840.width, icsIn840.height) *
      (icsIn838 === "symbols2" ? 0.52 : 0.42),
    icsBind5518 = [icsH.redFill, icsH.yellowStroke, icsH.greenFill];
  if (icsIn838 !== "symbols2") {
    let icsBind16995 = [icsH.redFill, icsH.yellowFill, icsH.greenFill],
      icsBind16996 = [icsH.redStroke, icsH.yellowStroke, icsH.greenStroke];
    icsIn837.beginPath();
    icsIn837.arc(icsBind5515, icsBind5516, icsBind5517, 0, Math.PI * 2);
    icsIn837.fillStyle = icsBind16995[icsIn839] ?? icsH.yellowFill;
    icsIn837.fill();
    icsIn837.lineWidth = Math.max(1, icsBind5517 * 0.12);
    icsIn837.strokeStyle = icsBind16996[icsIn839] ?? icsH.yellowStroke;
    icsIn837.stroke();
  }
  if (
    ((icsIn837.strokeStyle =
      icsIn838 === "symbols2"
        ? (icsBind5518[icsIn839] ?? icsH.yellowStroke)
        : icsH.lightFill),
    (icsIn837.fillStyle =
      icsIn838 === "symbols2"
        ? (icsBind5518[icsIn839] ?? icsH.yellowStroke)
        : icsH.lightFill),
    (icsIn837.lineWidth = Math.max(
      1.2,
      icsBind5517 * (icsIn838 === "symbols2" ? 0.24 : 0.18),
    )),
    (icsIn837.lineCap = "round"),
    (icsIn837.lineJoin = "round"),
    icsIn839 === 2)
  ) {
    icsIn837.beginPath();
    icsIn837.moveTo(
      icsBind5515 - icsBind5517 * 0.52,
      icsBind5516 + icsBind5517 * 0.04,
    );
    icsIn837.lineTo(
      icsBind5515 - icsBind5517 * 0.16,
      icsBind5516 + icsBind5517 * 0.4,
    );
    icsIn837.lineTo(
      icsBind5515 + icsBind5517 * 0.54,
      icsBind5516 - icsBind5517 * 0.36,
    );
    icsIn837.stroke();
    return;
  }
  if (icsIn839 === 1) {
    icsIn837.beginPath();
    icsIn837.moveTo(icsBind5515, icsBind5516 - icsBind5517 * 0.52);
    icsIn837.lineTo(icsBind5515, icsBind5516 + icsBind5517 * 0.16);
    icsIn837.stroke();
    icsIn837.beginPath();
    icsIn837.arc(
      icsBind5515,
      icsBind5516 + icsBind5517 * 0.42,
      icsBind5517 * 0.1,
      0,
      Math.PI * 2,
    );
    icsIn837.fill();
    return;
  }
  if (icsIn838 === "symbols2") {
    icsIn837.beginPath();
    icsIn837.moveTo(
      icsBind5515 - icsBind5517 * 0.42,
      icsBind5516 - icsBind5517 * 0.42,
    );
    icsIn837.lineTo(
      icsBind5515 + icsBind5517 * 0.42,
      icsBind5516 + icsBind5517 * 0.42,
    );
    icsIn837.moveTo(
      icsBind5515 + icsBind5517 * 0.42,
      icsBind5516 - icsBind5517 * 0.42,
    );
    icsIn837.lineTo(
      icsBind5515 - icsBind5517 * 0.42,
      icsBind5516 + icsBind5517 * 0.42,
    );
    icsIn837.stroke();
    return;
  }
  icsIn837.beginPath();
  icsIn837.moveTo(
    icsBind5515 - icsBind5517 * 0.28,
    icsBind5516 - icsBind5517 * 0.28,
  );
  icsIn837.lineTo(
    icsBind5515 + icsBind5517 * 0.28,
    icsBind5516 + icsBind5517 * 0.28,
  );
  icsIn837.moveTo(
    icsBind5515 + icsBind5517 * 0.28,
    icsBind5516 - icsBind5517 * 0.28,
  );
  icsIn837.lineTo(
    icsBind5515 - icsBind5517 * 0.28,
    icsBind5516 + icsBind5517 * 0.28,
  );
  icsIn837.stroke();
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookHelper594 = paintIconSetSymbols;
