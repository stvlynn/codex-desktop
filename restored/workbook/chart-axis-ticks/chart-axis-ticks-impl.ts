// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart axis tick paint (legacy chart-axis peel).
// Stage-3 wave-94.

import { Hn as _presentationHn } from "../presentation-protobuf";
import { workbookHelper348 as chartSeriesColorFn } from "../chart-asset";
import { catH } from "./boundary-hooks";

/** Legacy Binding837 — chart axis font stack. */
export const CHART_AXIS_FONT_STACK =
  "Carlito, Segoe UI, Helvetica, Arial, sans-serif";
/** Legacy `$D` — muted axis stroke/fill. */
export const CHART_AXIS_MUTED = "#666";
/** Legacy Binding879 — tick inset (px). */
export const AXIS_TICK_INSET = 6;
/** Legacy Binding880 — axis label gap (px). */
export const AXIS_LABEL_GAP = 8;

export function paintChartAxisTicks(
  catIn110: any,
  catIn111: any,
  catIn112: any,
  catIn113: any,
  catIn114: any,
  catIn115: any,
  catIn116: any = "all",
  catIn117: any = catIn113,
) {
  let { x: __x, y: __y } = catIn112,
    catBind2756 = chartSeriesColorFn(catIn111),
    catBind2757 = catIn115?.tickCategories ?? catBind2756,
    catBind2758 =
      catIn115?.tickLabels ??
      catBind2757.map((item) => catH.bh446(item, catIn111.xAxis)),
    catBind2759 = catIn116 !== "foreground",
    catBind2760 = catIn116 !== "background",
    catBind2761 = catIn116 !== "foreground";
  catIn110.save();
  catIn110.font = `10px ${CHART_AXIS_FONT_STACK}`;
  catIn110.fillStyle = CHART_AXIS_MUTED;
  catIn110.strokeStyle = CHART_AXIS_MUTED;
  catIn110.lineWidth = 1;
  let catBind2762 = catH.bh428(catIn111.xAxis, catIn114),
    catBind2763 = __y(catH.bh405(catIn111.yAxis, __y));
  Number.isFinite(catBind2763) || (catBind2763 = catIn113.y + catIn113.height);
  let catBind2764 = catIn113.y + catIn113.height,
    catBind2765 = catIn113.y,
    catBind2766 =
      Math.abs(catBind2763 - catBind2764) <=
      Math.abs(catBind2763 - catBind2765),
    catBind2767 =
      catIn111.xAxis?.position === _presentationHn.AXIS_POSITION_BOTTOM
        ? true
        : catIn111.xAxis?.position === _presentationHn.AXIS_POSITION_TOP
          ? false
          : catBind2766,
    catBind2768 = catBind2767 ? 1 : -1,
    catBind2769 = catH.bh434(catIn111.xAxis),
    catBind2770 = catIn111.xAxis,
    catBind2771 = !!catBind2770?.deleted,
    catBind2772 = 0;
  if (!catBind2771) {
    let catBind3934 = catH.bh429(catBind2770);
    catBind2759 &&
      catBind3934 &&
      catBind2770?.line?.fill?.color &&
      ((catIn110.strokeStyle = catBind2762.lineColor),
      catIn110.beginPath(),
      catIn110.moveTo(catIn113.x, catBind2763),
      catIn110.lineTo(catIn113.x + catIn113.width, catBind2763),
      catIn110.stroke());
    catIn110.strokeStyle = catBind2762.lineColor;
    catIn110.lineWidth = 1;
    catIn110.font = catH.bh430(catBind2762);
    let catBind3935 = catH.bh431(catIn110, catBind2762.fontSize),
      catBind3936 = Number.isFinite(catBind3935) ? catBind3935 : 10,
      catBind3937 = catIn115?.tickLabelDistancePx ?? catH.bh435(catIn111.xAxis),
      catBind3938 = 6 + catBind3937,
      catBind3939 = catIn115?.rotationDeg ?? catH.bh432(catIn111.xAxis),
      catBind3940 = (catBind3939 * Math.PI) / 180;
    if (catIn115) catBind2772 = catIn115.labelBandHeight;
    else {
      let catBind18019 = 0;
      catBind2758.forEach((item) => {
        let catBind21640 = item ?? "",
          catBind21641 = catIn110.measureText(catBind21640).width;
        catBind21641 > catBind18019 && (catBind18019 = catBind21641);
      });
      let catBind18020 = catH.bh437(
        catBind18019,
        catBind2762.fontSize,
        catBind3940,
      );
      catBind2772 =
        catBind18019 > 0
          ? catBind18020.height + AXIS_TICK_INSET + catBind3937
          : 0;
    }
    catIn110.textAlign = "center";
    catIn110.textBaseline = catBind2767 ? "top" : "bottom";
    catIn110.fillStyle = catBind2762.textColor;
    let catBind3941 = catIn115?.hideTickLabels ?? catH.bh436(catIn111.xAxis),
      catBind3942 =
        catBind3934 &&
        catBind2770?.majorTickMark !== undefined &&
        catBind2770.majorTickMark !== Wn.TICK_MARK_UNSPECIFIED &&
        catBind2770.majorTickMark !== Wn.TICK_MARK_NONE,
      catBind3943 = !!catBind2770?.majorGridlines?.fill?.color,
      catBind3944 = catBind2770?.majorGridlines,
      catBind3945 = catBind2769.tickLabelInterval,
      catBind3946 =
        catIn115?.step ??
        (catBind3945 !== undefined && catBind3945 > 0
          ? Math.floor(catBind3945)
          : 1),
      catBind3947 = catBind2769.tickMarkInterval,
      catBind3948 =
        catBind3947 !== undefined && catBind3947 > 0
          ? Math.floor(catBind3947)
          : catBind3946,
      catBind3949 = catIn115 ? new Set(catIn115.visibleIndices) : undefined;
    catBind2757.forEach((item, index) => {
      let catBind6331 =
        catIn115?.tickPositionsPx?.[index] ?? catH.bh425(__x, item);
      if (catBind6331 === undefined) return;
      let catBind6332 =
          catBind3949 === undefined
            ? catBind3946 <= 1 || index % catBind3946 === 0
            : catBind3949.has(index),
        catBind6333 = catBind3948 <= 1 || index % catBind3948 === 0;
      catBind2759 &&
        catBind6333 &&
        catBind3943 &&
        catBind3944 &&
        (catIn110.save(),
        catH.bh433(catIn110, catBind3944, catIn114, {
          color: catBind2762.gridLineColor ?? catBind2762.lineColor,
          widthPx: 1,
        }),
        catH.bh461(catBind6331, catIn113.x) ||
          (catIn110.beginPath(),
          catIn110.moveTo(catBind6331, catIn113.y),
          catIn110.lineTo(catBind6331, catIn113.y + catIn113.height),
          catIn110.stroke()),
        catIn110.restore());
      catBind2759 &&
        catBind6333 &&
        catBind3942 &&
        (catIn110.beginPath(),
        catIn110.moveTo(catBind6331, catBind2763),
        catIn110.lineTo(catBind6331, catBind2763 + catBind2768 * 4),
        catIn110.stroke());
      let catBind6334 =
          catIn115?.labelMaxWidthPx ??
          (catH.bh424(__x)
            ? __x.step()
            : catIn113.width / Math.max(1, catBind2757.length)),
        catBind6335 = catH.bh427(
          catIn110,
          catBind2758[index] ?? item,
          catBind6334,
        ),
        catBind6336 = catIn115?.labelLinesByIndex[index] ?? [catBind6335];
      if (!(!catBind2760 || catBind3941 || !catBind6332))
        if (catBind3940 !== 0)
          catH.nye({
            ctx: catIn110,
            text: catBind6335,
            anchorX: catBind6331,
            anchorY: catBind2763 + catBind2768 * catBind3938,
            rotationDeg: catBind3939,
            fontSizePx: catBind2762.fontSize,
            side: catBind2767 ? "bottom" : "top",
          });
        else {
          let catBind17732 = catBind2763 + catBind2768 * catBind3938;
          catBind6336.forEach((_item, _index) => {
            let catBind19590 = catH.vye(
                catIn110,
                _item,
                catBind6331,
                catIn113.x,
                catIn113.x + catIn113.width,
              ),
              catBind19591 = catBind2767
                ? catBind17732 + _index * catBind3936
                : catBind17732 -
                  (catBind6336.length - 1 - _index) * catBind3936;
            catIn110.fillText(_item, catBind19590, catBind19591);
          });
        }
    });
  }
  let catBind2773 = catH.bh428(catIn111.yAxis, catIn114),
    catBind2774 = catIn111.yAxis,
    catBind2775 = !!catBind2774?.deleted,
    catBind2776 = 0,
    catBind2777 = !!catBind2774?.majorGridlines?.fill?.color,
    catBind2778 = !!catBind2774?.minorGridlines?.fill?.color;
  if (catBind2761 && (!catBind2775 || catBind2777 || catBind2778)) {
    let catBind4947 = !catBind2775 && catH.bh429(catBind2774);
    catBind4947 &&
      catBind2774?.line?.fill?.color &&
      ((catIn110.strokeStyle = catBind2773.lineColor),
      catIn110.beginPath(),
      catIn110.moveTo(catIn113.x, catIn113.y),
      catIn110.lineTo(catIn113.x, catIn113.y + catIn113.height),
      catIn110.stroke());
    catIn110.textAlign = "right";
    catIn110.textBaseline = "middle";
    catIn110.fillStyle = catBind2773.textColor;
    let catBind4948 = catH.bh440({
      ctx: catIn110,
      axis: catBind2774,
      scale: __y,
      preferredTickCount: catH.bh422(catIn111),
      themeMap: catIn114,
    });
    catBind2775 || (catBind2776 = catBind4948.labelBandWidth);
    let catBind4949 =
        catBind4947 &&
        !catBind2775 &&
        catBind2774?.majorTickMark !== undefined &&
        catBind2774.majorTickMark !== Wn.TICK_MARK_UNSPECIFIED &&
        catBind2774.majorTickMark !== Wn.TICK_MARK_NONE,
      catBind4950 = catBind4948.ticks,
      catBind4951 = catBind2778 ? catBind4948.minorTicks : [];
    catBind2778 &&
      catBind2774?.minorGridlines &&
      (catIn110.save(),
      catH.bh433(catIn110, catBind2774.minorGridlines, catIn114, {
        color: catBind2773.gridLineColor ?? catBind2773.lineColor,
        widthPx: 0.75,
      }),
      catBind4951.forEach((item) => {
        let catBind18308 = __y(item);
        Number.isFinite(catBind18308) &&
          (catH.bh461(catBind18308, catBind2763) ||
            (catIn110.beginPath(),
            catIn110.moveTo(catIn113.x, catBind18308),
            catIn110.lineTo(catIn113.x + catIn113.width, catBind18308),
            catIn110.stroke()));
      }),
      catIn110.restore());
    catBind4950.forEach((item) => {
      let catBind9433 = __y(item);
      if (
        (catBind2777 &&
          catBind2774?.majorGridlines &&
          (catIn110.save(),
          catH.bh433(catIn110, catBind2774.majorGridlines, catIn114, {
            color: catBind2773.gridLineColor ?? catBind2773.lineColor,
            widthPx: 1,
          }),
          catH.bh461(catBind9433, catBind2763) ||
            (catIn110.beginPath(),
            catIn110.moveTo(catIn113.x, catBind9433),
            catIn110.lineTo(catIn113.x + catIn113.width, catBind9433),
            catIn110.stroke()),
          catIn110.restore()),
        catBind4949 &&
          ((catIn110.strokeStyle = catBind2773.lineColor),
          catIn110.beginPath(),
          catIn110.moveTo(catIn113.x - 4, catBind9433),
          catIn110.lineTo(catIn113.x, catBind9433),
          catIn110.stroke()),
        !catBind2775 && !catBind4948.hideTickLabels)
      ) {
        catIn110.font = catH.bh430(catBind2773);
        let catBind20987 = catH.bh439(item, catIn111.yAxis?.numberFormatCode);
        catIn110.fillText(catBind20987, catIn113.x - 6, catBind9433);
      }
    });
  }
  let catBind2779 = catH.bh438(
      catIn114,
      catBind2770?.title,
      catBind2770?.titleTextStyle,
      catBind2762.fontSize,
      0,
    ),
    catBind2780 = catH.bh438(
      catIn114,
      catBind2774?.title,
      catBind2774?.titleTextStyle,
      catBind2773.fontSize,
      -90,
    );
  if (catBind2760 && catBind2779) {
    let catBind17259 = catBind2772 + AXIS_LABEL_GAP + catBind2779.height / 2,
      catBind17260 = catBind2763 + catBind2768 * catBind17259;
    catH.bh460({
      ctx: catIn110,
      axis: catBind2770,
      metrics: catBind2779,
      automaticCenter: {
        x: catIn113.x + catIn113.width / 2,
        y: catBind17260,
      },
      chartArea: catIn117,
      themeMap: catIn114,
      fallbackColor: catBind2762.textColor,
    });
  }
  catBind2761 &&
    catBind2780 &&
    catH.bh460({
      ctx: catIn110,
      axis: catBind2774,
      metrics: catBind2780,
      automaticCenter: {
        x: catIn113.x - catBind2776 - AXIS_LABEL_GAP - catBind2780.width / 2,
        y: catIn113.y + catIn113.height / 2,
      },
      chartArea: catIn117,
      themeMap: catIn114,
      fallbackColor: catBind2773.textColor,
    });
  catIn110.restore();
}
