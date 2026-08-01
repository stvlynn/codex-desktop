// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart area-series paint (legacy helper529).
// Stage-3 wave-100.

import { tr } from "../presentation-protobuf";
import { color as d3Color } from "../../vendor/d3-color";
import { casH } from "./boundary-hooks";

void tr;
void d3Color;
void casH;

export function paintAreaSeries(
  casIn691: any,
  casIn692: any,
  casIn693: any,
  casIn694: any,
  casIn695: any,
  casIn696: any,
  casIn697: any,
) {
  let casBind4968 = casIn693.x,
    casBind4969 = casIn693.y,
    casBind4970 = casH.stackAreaLayers(
      casIn692,
      casIn697 ? new Set(casIn697) : undefined,
    ),
    casBind4971 = casBind4970.categories;
  casIn691.save();
  casIn691.beginPath();
  casIn691.rect(casIn695.x, casIn695.y, casIn695.width, casIn695.height);
  casIn691.clip();
  casBind4970.layers.forEach((item) => {
    let casBind5432 = item.seriesIndex,
      casBind5433 = casIn692.series[casBind5432];
    if (!casBind5433) return;
    let casBind5434 = casBind5433.stroke?.fill,
      casBind5435 =
        casBind5434?.type === tr.FILL_TYPE_UNSPECIFIED &&
        casBind5434.color === undefined,
      casBind5436 = casH.bh465(casBind5433, casBind5432, casIn694),
      casBind5437 = (() => {
        if (!casBind5436) return;
        let casBind21593 = d3Color(casBind5436);
        return casBind21593 ? casBind21593.formatRgb() : casBind5436;
      })();
    casBind5433.fill &&
      (casBind5437 = casH.bh464(
        casIn691,
        casIn695,
        casBind5433.fill,
        casIn694,
      ));
    casBind5437 && (casIn691.fillStyle = casBind5437);
    casBind5436 && (casIn691.strokeStyle = casBind5436);
    casIn691.lineWidth = 1;
    casIn691.beginPath();
    let casBind5438 = false;
    for (
      let casBind17536 = 0;
      casBind17536 < casBind4971.length;
      casBind17536++
    ) {
      let casBind18528 = casBind4971[casBind17536],
        casBind18529 = casH.bh425(casBind4968, casBind18528);
      if (casBind18529 === undefined) continue;
      let casBind18530 = item.tuples[casBind17536]?.end ?? 0,
        casBind18531 = casBind4969(casBind18530);
      casBind5438
        ? casIn691.lineTo(casBind18529, casBind18531)
        : (casIn691.moveTo(casBind18529, casBind18531), (casBind5438 = true));
    }
    if (!casBind5438) {
      casIn691.closePath();
      return;
    }
    for (
      let casBind18281 = casBind4971.length - 1;
      casBind18281 >= 0;
      casBind18281--
    ) {
      let casBind19476 = casBind4971[casBind18281],
        casBind19477 = casH.bh425(casBind4968, casBind19476);
      if (casBind19477 === undefined) continue;
      let casBind19478 = item.tuples[casBind18281]?.start ?? 0,
        casBind19479 = casBind4969(casBind19478);
      casIn691.lineTo(casBind19477, casBind19479);
    }
    casIn691.closePath();
    casIn691.fill();
    casBind5435 || casIn691.stroke();
    casIn696 &&
      casBind4971.forEach((_item, index) => {
        let casBind12248 = casH.bh425(casBind4968, _item);
        if (casBind12248 === undefined) return;
        let casBind12249 = item.tuples[index]?.end ?? 0,
          casBind12250 = casBind4969(casBind12249);
        casIn696.push({
          kind: "area-point",
          x: casBind12248 - 3,
          y: casBind12250 - 3,
          width: 6,
          height: 6,
          seriesName: casBind5433.name,
          category: _item,
          value: casBind5433.values[index] ?? 0,
          color: casBind5436,
          anchorX: casBind12248,
          anchorY: casBind12250,
        });
      });
  });
  casIn691.restore();
}

/** Legacy alias. */
export const workbookHelper529 = paintAreaSeries;
