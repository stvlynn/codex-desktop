// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: radar chart paint (legacy Txe).
// Stage-3 wave-95. Wave-89 chart-paint hook was misnamed paintBoxWhisker.

import { Vn, Bn } from "../presentation-protobuf";
import { scaleLinear as _AppInitialMat } from "../../vendor/d3-scale-linear";
import { color as appInitialXat } from "../../vendor/d3-color";
import { crH } from "./boundary-hooks";

void Vn;
void Bn;
void _AppInitialMat;
void appInitialXat;
void crH;

export function paintRadarChart(
  crIn213: any,
  crIn214: any,
  crIn215: any,
  crIn216: any,
  crIn217: any,
  crIn218: any,
) {
  let crBind3211 = crH.prepareRadarSeries(crIn214, crIn218),
    crBind3212 = crBind3211.categories;
  if (crBind3212.length === 0 || crBind3211.visibleSeries.length === 0) return;
  let crBind3213 = crIn215.x + crIn215.width / 2,
    crBind3214 = crIn215.y + crIn215.height / 2,
    crBind3215 = Math.min(crIn215.width, crIn215.height) / 2 - 12;
  if (crBind3215 <= 0) return;
  let [crBind3216, crBind3217] = crBind3211.domain,
    crBind3218 = _AppInitialMat()
      .domain([crBind3216, crBind3217])
      .range([0, crBind3215]),
    crBind3219 = crBind3218(crBind3217);
  if (!Number.isFinite(crBind3219) || crBind3219 <= 0) return;
  let crBind3220 = (crIn10867) => {
      let crBind21383 = crBind3212.length;
      return crBind21383 === 0
        ? -Math.PI / 2
        : -Math.PI / 2 + (crIn10867 * 2 * Math.PI) / crBind21383;
    },
    crBind3221 = (crIn14161) =>
      !Number.isFinite(crIn14161) || crIn14161 < crBind3216
        ? crBind3216
        : crIn14161 > crBind3217
          ? crBind3217
          : crIn14161,
    crBind3222 = crH.bh428(crIn214.xAxis, crIn216),
    crBind3223 =
      (crIn214.yAxis?.majorGridlines?.fill?.color
        ? workbookSt(crIn214.yAxis.majorGridlines.fill.color, crIn216)
        : undefined) ?? crBind1154,
    crBind3224 = Array.from(new Set([...crBind3218.ticks(5), crBind3217]))
      .filter(
        (item) =>
          Number.isFinite(item) && item > crBind3216 && item <= crBind3217,
      )
      .sort((crIn16524, crIn16525) => crIn16524 - crIn16525);
  crBind3224.length > 0 &&
    (crIn213.save(),
    (crIn213.strokeStyle = crBind3223),
    (crIn213.lineWidth = 1),
    crBind3224.forEach((item) => {
      let crBind15246 = crBind3218(item);
      !Number.isFinite(crBind15246) ||
        crBind15246 <= 0 ||
        (crIn213.beginPath(),
        crBind3212.forEach((_item, index) => {
          let crBind19596 = crBind3220(index),
            crBind19597 = crBind3213 + crBind15246 * Math.cos(crBind19596),
            crBind19598 = crBind3214 + crBind15246 * Math.sin(crBind19596);
          index === 0
            ? crIn213.moveTo(crBind19597, crBind19598)
            : crIn213.lineTo(crBind19597, crBind19598);
        }),
        crIn213.closePath(),
        crIn213.stroke());
    }),
    crIn213.restore());
  let crBind3225 = crIn214.yAxis?.line?.fill?.color
    ? workbookSt(crIn214.yAxis.line.fill.color, crIn216)
    : crBind1154;
  crIn213.save();
  crIn213.strokeStyle = crBind3225;
  crIn213.lineWidth = 1;
  crBind3212.forEach((item, index) => {
    let crBind19682 = crBind3220(index),
      crBind19683 = crBind3213 + crBind3219 * Math.cos(crBind19682),
      crBind19684 = crBind3214 + crBind3219 * Math.sin(crBind19682);
    crIn213.beginPath();
    crIn213.moveTo(crBind3213, crBind3214);
    crIn213.lineTo(crBind19683, crBind19684);
    crIn213.stroke();
  });
  crIn213.restore();
  crIn213.save();
  crIn213.font = crH.bh430(crBind3222);
  crIn213.fillStyle = crBind3222.textColor;
  let crBind3226 = crBind3219 + Math.max(crBind3222.fontSize, 10);
  crBind3212.forEach((item, index) => {
    let crBind13426 = crBind3220(index),
      crBind13427 = Math.cos(crBind13426),
      crBind13428 = Math.sin(crBind13426),
      crBind13429 = crBind3213 + crBind3226 * crBind13427,
      crBind13430 = crBind3214 + crBind3226 * crBind13428;
    crBind13427 > 0.25
      ? (crIn213.textAlign = "left")
      : crBind13427 < -0.25
        ? (crIn213.textAlign = "right")
        : (crIn213.textAlign = "center");
    crBind13428 > 0.25
      ? (crIn213.textBaseline = "top")
      : crBind13428 < -0.25
        ? (crIn213.textBaseline = "bottom")
        : (crIn213.textBaseline = "middle");
    crIn213.fillText(item, crBind13429, crBind13430);
  });
  crIn213.restore();
  let crBind3227 = crIn214.radarOptions?.style ?? Vn.RADAR_STYLE_STANDARD;
  crBind3211.layers.forEach((item) => {
    let crBind4934 = crIn214.series[item.seriesIndex];
    if (!crBind4934) return;
    let crBind4935 = crH.bh465(crBind4934, item.seriesIndex, crIn216);
    crBind4935 && (crIn213.strokeStyle = crBind4935);
    crIn213.lineWidth = 2;
    let crBind4936 = crBind3212.map((_item, index) => {
      let crBind18021 = item.values[index] ?? crBind3216,
        crBind18022 = crBind3221(crBind18021),
        crBind18023 = crBind3218(crBind18022),
        crBind18024 = crBind3220(index);
      return {
        x: crBind3213 + crBind18023 * Math.cos(crBind18024),
        y: crBind3214 + crBind18023 * Math.sin(crBind18024),
        value: crBind18022,
        idx: index,
      };
    });
    if (crBind4936.length === 0) return;
    if (
      (crIn213.beginPath(),
      crBind4936.forEach((_item, index) => {
        index === 0
          ? crIn213.moveTo(_item.x, _item.y)
          : crIn213.lineTo(_item.x, _item.y);
      }),
      crIn213.closePath(),
      crBind3227 === Vn.RADAR_STYLE_FILLED)
    ) {
      let crBind19743 = (() => {
        if (!crBind4935) return;
        let crBind21865 = appInitialXat(crBind4935);
        return crBind21865 ? crBind21865.formatRgb() : crBind4935;
      })();
      crBind19743 && ((crIn213.fillStyle = crBind19743), crIn213.fill());
    }
    crIn213.stroke();
    let crBind4937 = crBind4934.marker?.symbol;
    if (
      crBind3227 === Vn.RADAR_STYLE_MARKER &&
      crBind4937 !== undefined &&
      crBind4937 !== Bn.MARKER_SYMBOL_NONE &&
      crBind4937 !== Bn.MARKER_SYMBOL_UNSPECIFIED
    ) {
      let crBind11674 = crBind4934.marker?.size,
        crBind11675 =
          crBind11674 !== undefined && Number.isFinite(crBind11674)
            ? (crBind11674 * 96) / 72
            : 6,
        crBind11676 = Math.max(crBind11675 / 2, 1.5);
      crBind4936.forEach((_item) => {
        let crBind14174 = _item.idx,
          crBind14175 = crH.bh474(crBind4934, crBind14174),
          crBind14176 = crH.bh469(
            crBind4934,
            crBind14174,
            item.seriesIndex,
            crIn216,
          ),
          crBind14177 = crH.bh473(crBind4934, crBind14174, crIn216);
        if (
          (crIn213.beginPath(),
          crIn213.arc(_item.x, _item.y, crBind11676, 0, Math.PI * 2),
          !crBind14175)
        ) {
          let crBind22354 = crBind14176 ?? crBind4935;
          crBind22354 && ((crIn213.fillStyle = crBind22354), crIn213.fill());
        }
        let crBind14178 = crBind14177.color ?? crBind4935;
        crBind14178 &&
          ((crIn213.strokeStyle = crBind14178),
          (crIn213.lineWidth = crBind14177.widthPx ?? 1),
          crIn213.stroke());
      });
    }
    crIn217 &&
      crBind4936.forEach((_item) => {
        let crBind14763 = crBind3212[_item.idx],
          crBind14764 = crBind4934.values[_item.idx] ?? 0;
        crIn217.push({
          kind: "line-point",
          x: _item.x - 3,
          y: _item.y - 3,
          width: 6,
          height: 6,
          seriesName: crBind4934.name,
          category: crBind14763,
          value: crBind14764,
          color: crBind4935,
          anchorX: _item.x,
          anchorY: _item.y,
        });
      });
  });
}

/** Legacy alias. */
export const Txe = paintRadarChart;
