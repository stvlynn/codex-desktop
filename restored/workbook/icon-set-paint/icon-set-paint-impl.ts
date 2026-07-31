// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF icon-set glyph dispatcher + painters (legacy uwe…ywe).
// Stage-3 wave-104.

import { lookupIconSet } from "../icon-set";
import { paintIconSetSymbols } from "../icon-set-symbols";
import { ispH } from "./boundary-hooks";

void lookupIconSet;
void paintIconSetSymbols;
void ispH;

export function paintIconSetGlyph(ispIn1426: any, ispIn1427: any) {
  let ispBind7294 = lookupIconSet(ispIn1427.iconSetName);
  if (!ispBind7294) return;
  let ispBind7295 = Math.max(
    0,
    Math.min(
      ispBind7294.iconCount - 1,
      Math.round(ispIn1427.iconIndex),
    ),
  );
  switch ((ispIn1426.save(), ispBind7294.name)) {
    case "3Arrows":
    case "3ArrowsGray":
    case "4Arrows":
    case "4ArrowsGray":
    case "5Arrows":
    case "5ArrowsGray":
      paintIconArrows(
        ispIn1426,
        ispBind7294.name,
        ispBind7295,
        ispIn1427,
      );
      break;
    case "3Triangles":
      paintIconTriangles(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "3TrafficLights1":
    case "3TrafficLights2":
    case "4TrafficLights":
      paintIconTrafficLights(
        ispIn1426,
        ispBind7294.name,
        ispBind7295,
        ispIn1427,
      );
      break;
    case "3Signs":
      paintIconSigns(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "4RedToBlack":
      paintIconRedToBlack(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "3Symbols":
      paintIconSetSymbols(
        ispIn1426,
        "symbols",
        ispBind7295,
        ispIn1427,
      );
      break;
    case "3Symbols2":
      paintIconSetSymbols(
        ispIn1426,
        "symbols2",
        ispBind7295,
        ispIn1427,
      );
      break;
    case "3Flags":
      paintIconFlags(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "3Stars":
      paintIconStars(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "5Quarters":
      paintIconQuarters(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "5Boxes":
      paintIconBoxes(ispIn1426, ispBind7295, ispIn1427);
      break;
    case "4Rating":
      ispH.paintRatingBars(
        ispIn1426,
        4,
        ispBind7295 + 1,
        ispIn1427,
      );
      break;
    case "5Rating":
      ispH.paintRatingBars(
        ispIn1426,
        4,
        ispBind7295,
        ispIn1427,
      );
      break;
  }
  ispIn1426.restore();
}
export function paintIconArrows(ispIn2119: any, ispIn2120: any, ispIn2121: any, ispIn2122: any, ) {
  let ispBind9032 = ispIn2120.includes("Gray"),
    ispBind9033 = ispBind9032
      ? ["#D7DCE3", "#B6BEC8", "#8F98A3", "#697380", "#47505C"]
      : ispIn2120 === "5Arrows"
        ? [
            ispBind1247,
            ispBind1245,
            ispBind1243,
            ispBind1243,
            ispBind1241,
          ]
        : ispIn2120 === "4Arrows"
          ? [
              ispBind1247,
              ispBind1243,
              "#93C54B",
              ispBind1241,
            ]
          : [ispBind1247, ispBind1243, ispBind1241],
    ispBind9034 = ispBind9032
      ? ["#9EA7B2", "#7F8995", "#5F6875", "#434B57", "#2F3640"]
      : ispIn2120 === "5Arrows"
        ? [
            ispBind1248,
            ispBind1246,
            ispBind1244,
            ispBind1244,
            ispBind1242,
          ]
        : ispIn2120 === "4Arrows"
          ? [
              ispBind1248,
              ispBind1244,
              "#5E8D2A",
              ispBind1242,
            ]
          : [ispBind1248, ispBind1244, ispBind1242];
  bwe(
    ispIn2119,
    ispIn2122,
    (ispIn2120 === "4Arrows" || ispIn2120 === "4ArrowsGray"
      ? ["down", "diagDown", "diagUp", "up"]
      : ispIn2120 === "5Arrows" || ispIn2120 === "5ArrowsGray"
        ? ["down", "diagDown", "right", "diagUp", "up"]
        : ["down", "right", "up"])[ispIn2121] ?? "right",
    ispBind9033[ispIn2121] ??
      ispBind9033[ispBind9033.length - 1] ??
      ispBind1241,
    ispBind9034[ispIn2121] ??
      ispBind9034[ispBind9034.length - 1] ??
      ispBind1242,
  );
}
export function paintIconTriangles(ispIn4324: any, ispIn4325: any, ispIn4326: any) {
  if (ispIn4325 === 1) {
    let ispBind15733 = ispIn4326.width * 0.72,
      ispBind15734 = ispIn4326.height * 0.3,
      ispBind15735 =
        ispIn4326.x +
        (ispIn4326.width - ispBind15733) / 2,
      ispBind15736 =
        ispIn4326.y +
        (ispIn4326.height - ispBind15734) / 2;
    ispIn4324.fillStyle = ispBind1243;
    ispIn4324.fillRect(
      ispBind15735,
      ispBind15736,
      ispBind15733,
      ispBind15734,
    );
    ispIn4324.lineWidth = Math.max(
      1,
      Math.min(ispBind15733, ispBind15734) * 0.14,
    );
    ispIn4324.strokeStyle = ispBind1244;
    ispIn4324.strokeRect(
      ispBind15735,
      ispBind15736,
      ispBind15733,
      ispBind15734,
    );
    return;
  }
  ispH.strokeIconPath(
    ispIn4324,
    ispIn4326,
    ispIn4325 === 0 ? "down" : "up",
    ispIn4325 === 0 ? ispBind1247 : ispBind1241,
    ispIn4325 === 0 ? ispBind1248 : ispBind1242,
  );
}
export function paintIconTrafficLights(ispIn1776: any, ispIn1777: any, ispIn1778: any, ispIn1779: any, ) {
  let ispBind8282 =
      ispIn1777 === "4TrafficLights"
        ? [
            ispBind1247,
            ispBind1245,
            ispBind1243,
            ispBind1241,
          ]
        : [ispBind1247, ispBind1243, ispBind1241],
    ispBind8283 =
      ispBind8282[ispIn1778] ?? ispBind1243,
    ispBind8284 =
      ispIn1777 === "4TrafficLights" && ispIn1778 === 1
        ? ispBind1246
        : ispIn1778 === 0
          ? ispBind1248
          : ispIn1778 === ispBind8282.length - 1
            ? ispBind1242
            : ispBind1244,
    ispBind8285 = ispIn1777 !== "3TrafficLights1",
    ispBind8286 = ispIn1779.x + ispIn1779.width / 2,
    ispBind8287 = ispIn1779.y + ispIn1779.height / 2,
    ispBind8288 =
      Math.min(ispIn1779.width, ispIn1779.height) * 0.34;
  ispBind8285 &&
    (ispIn1776.beginPath(),
    ispIn1776.arc(
      ispBind8286,
      ispBind8287,
      ispBind8288 * 1.18,
      0,
      Math.PI * 2,
    ),
    (ispIn1776.fillStyle = "rgba(17, 24, 39, 0.1)"),
    ispIn1776.fill(),
    (ispIn1776.lineWidth = Math.max(1, ispBind8288 * 0.22)),
    (ispIn1776.strokeStyle = $z),
    ispIn1776.stroke());
  ispIn1776.beginPath();
  ispIn1776.arc(
    ispBind8286,
    ispBind8287,
    ispBind8288,
    0,
    Math.PI * 2,
  );
  ispIn1776.fillStyle = ispBind8283;
  ispIn1776.fill();
  ispIn1776.lineWidth = Math.max(1, ispBind8288 * 0.12);
  ispIn1776.strokeStyle = ispBind8284;
  ispIn1776.stroke();
  ispIn1776.beginPath();
  ispIn1776.arc(
    ispBind8286 - ispBind8288 * 0.22,
    ispBind8287 - ispBind8288 * 0.22,
    ispBind8288 * 0.3,
    0,
    Math.PI * 2,
  );
  ispIn1776.fillStyle = "rgba(255,255,255,0.28)";
  ispIn1776.fill();
}
export function paintIconSigns(ispIn9345: any, ispIn9346: any, ispIn9347: any) {
  if (ispIn9346 === 2) {
    xwe(
      ispIn9345,
      ispIn9347,
      ispBind1241,
      ispBind1242,
    );
    return;
  }
  if (ispIn9346 === 1) {
    ispH.strokeIconPath(
      ispIn9345,
      ispIn9347,
      "up",
      ispBind1243,
      ispBind1244,
    );
    return;
  }
  ispH.fillIconShape(
    ispIn9345,
    ispIn9347,
    ispBind1247,
    ispBind1248,
  );
}
export function paintIconRedToBlack(ispIn9397: any, ispIn9398: any, ispIn9399: any) {
  ispH.fillIconShape(
    ispIn9397,
    ispIn9399,
    ["#E05555", "#B91C1C", "#5B4C4C", $z][ispIn9398] ?? $z,
    ["#8D2B2A", "#7F1D1D", "#3F3A3A", "#111111"][ispIn9398] ?? $z,
  );
}
export function paintIconFlags(ispIn2904: any, ispIn2905: any, ispIn2906: any) {
  let ispBind10778 = [
      ispBind1247,
      ispBind1243,
      ispBind1241,
    ],
    ispBind10779 = [
      ispBind1248,
      ispBind1244,
      ispBind1242,
    ],
    ispBind10780 = ispIn2906.x + ispIn2906.width * 0.26,
    ispBind10781 =
      ispIn2906.y + ispIn2906.height * 0.14,
    ispBind10782 =
      ispIn2906.y + ispIn2906.height * 0.86;
  ispIn2904.lineWidth = Math.max(1, ispIn2906.width * 0.07);
  ispIn2904.strokeStyle = "#4B5563";
  ispIn2904.beginPath();
  ispIn2904.moveTo(ispBind10780, ispBind10781);
  ispIn2904.lineTo(ispBind10780, ispBind10782);
  ispIn2904.stroke();
  ispIn2904.beginPath();
  ispIn2904.moveTo(
    ispBind10780,
    ispBind10781 + ispIn2906.height * 0.03,
  );
  ispIn2904.lineTo(
    ispIn2906.x + ispIn2906.width * 0.82,
    ispIn2906.y + ispIn2906.height * 0.24,
  );
  ispIn2904.lineTo(
    ispBind10780,
    ispIn2906.y + ispIn2906.height * 0.46,
  );
  ispIn2904.closePath();
  ispIn2904.fillStyle =
    ispBind10778[ispIn2905] ?? ispBind1243;
  ispIn2904.fill();
  ispIn2904.lineWidth = Math.max(1, ispIn2906.width * 0.06);
  ispIn2904.strokeStyle =
    ispBind10779[ispIn2905] ?? ispBind1244;
  ispIn2904.stroke();
}
export function paintIconStars(ispIn2994: any, ispIn2995: any, ispIn2996: any) {
  let ispBind10994 = [0, 0.5, 1][ispIn2995] ?? 0;
  ispH.withIconClip(ispIn2994, ispIn2996, () => {
    ispH.endIconClip(ispIn2994);
    ispIn2994.fillStyle = "rgba(203, 213, 225, 0.65)";
    ispIn2994.fill();
    ispH.endIconClip(ispIn2994);
    ispIn2994.lineWidth = 0.08;
    ispIn2994.strokeStyle = "rgba(107, 114, 128, 0.75)";
    ispIn2994.lineJoin = "round";
    ispIn2994.stroke();
    ispBind10994 > 0 &&
      (ispIn2994.save(),
      ispIn2994.beginPath(),
      ispIn2994.rect(0, 0, ispBind10994, 1),
      ispIn2994.clip(),
      ispH.endIconClip(ispIn2994),
      (ispIn2994.fillStyle = ispBind1243),
      ispIn2994.fill(),
      ispH.endIconClip(ispIn2994),
      (ispIn2994.lineWidth = 0.08),
      (ispIn2994.strokeStyle = ispBind1244),
      (ispIn2994.lineJoin = "round"),
      ispIn2994.stroke(),
      ispIn2994.restore());
  });
}
export function paintIconQuarters(ispIn2534: any, ispIn2535: any, ispIn2536: any) {
  let ispBind9906 = ispIn2536.x + ispIn2536.width / 2,
    ispBind9907 = ispIn2536.y + ispIn2536.height / 2,
    ispBind9908 =
      Math.min(ispIn2536.width, ispIn2536.height) * 0.42,
    ispBind9909 = [0, 0.25, 0.5, 0.75, 1][ispIn2535] ?? 0;
  ispIn2534.beginPath();
  ispIn2534.arc(
    ispBind9906,
    ispBind9907,
    ispBind9908,
    0,
    Math.PI * 2,
  );
  ispIn2534.fillStyle = ispBind1251;
  ispIn2534.fill();
  ispBind9909 >= 1
    ? (ispIn2534.beginPath(),
      ispIn2534.arc(
        ispBind9906,
        ispBind9907,
        ispBind9908,
        0,
        Math.PI * 2,
      ),
      (ispIn2534.fillStyle = $z),
      ispIn2534.fill())
    : ispBind9909 > 0 &&
      (ispIn2534.beginPath(),
      ispIn2534.moveTo(ispBind9906, ispBind9907),
      ispIn2534.arc(
        ispBind9906,
        ispBind9907,
        ispBind9908,
        -Math.PI / 2,
        -Math.PI / 2 + Math.PI * 2 * ispBind9909,
      ),
      ispIn2534.closePath(),
      (ispIn2534.fillStyle = $z),
      ispIn2534.fill());
  ispIn2534.lineWidth = Math.max(1, ispBind9908 * 0.12);
  ispIn2534.strokeStyle = $z;
  ispIn2534.beginPath();
  ispIn2534.arc(
    ispBind9906,
    ispBind9907,
    ispBind9908,
    0,
    Math.PI * 2,
  );
  ispIn2534.stroke();
}
export function paintIconBoxes(ispIn2320: any, ispIn2321: any, ispIn2322: any) {
  let ispBind9443 = [
      [false, false, false, false],
      [false, false, true, false],
      [false, false, true, true],
      [true, false, true, true],
      [true, true, true, true],
    ],
    ispBind9444 = ispBind9443[ispIn2321] ??
      ispBind9443[0] ?? [false, false, false, false],
    ispBind9445 = Math.min(
      (ispIn2322.width - 1) / 2,
      (ispIn2322.height - 1) / 2,
    ),
    ispBind9446 = ispBind9445 * 2 + 1,
    ispBind9447 = ispBind9445 * 2 + 1,
    ispBind9448 =
      ispIn2322.x + (ispIn2322.width - ispBind9446) / 2,
    ispBind9449 =
      ispIn2322.y +
      (ispIn2322.height - ispBind9447) / 2,
    ispBind9450 = [
      {
        x: ispBind9448,
        y: ispBind9449,
      },
      {
        x: ispBind9448 + ispBind9445 + 1,
        y: ispBind9449,
      },
      {
        x: ispBind9448,
        y: ispBind9449 + ispBind9445 + 1,
      },
      {
        x: ispBind9448 + ispBind9445 + 1,
        y: ispBind9449 + ispBind9445 + 1,
      },
    ];
  for (
    let ispBind16638 = 0;
    ispBind16638 < ispBind9450.length;
    ispBind16638 += 1
  ) {
    let ispBind17628 = ispBind9450[ispBind16638];
    ispBind17628 &&
      ((ispIn2320.fillStyle = ispBind9444[ispBind16638]
        ? ispBind1249
        : "rgba(203, 213, 225, 0.58)"),
      (ispIn2320.strokeStyle = ispBind1250),
      (ispIn2320.lineWidth = Math.max(1, ispBind9445 * 0.1)),
      ispIn2320.fillRect(
        ispBind17628.x,
        ispBind17628.y,
        ispBind9445,
        ispBind9445,
      ),
      ispIn2320.strokeRect(
        ispBind17628.x,
        ispBind17628.y,
        ispBind9445,
        ispBind9445,
      ));
  }
}

/** Legacy aliases. */
export const uwe = paintIconSetGlyph;
export const dwe = paintIconArrows;
export const fwe = paintIconTriangles;
export const pwe = paintIconTrafficLights;
export const mwe = paintIconSigns;
export const hwe = paintIconRedToBlack;
export const gwe = paintIconFlags;
export const _we = paintIconStars;
export const vwe = paintIconQuarters;
export const ywe = paintIconBoxes;
