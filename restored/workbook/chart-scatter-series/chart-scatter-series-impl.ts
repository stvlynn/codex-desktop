// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: scatter series + trendlines paint (legacy nCe + uxe).
// Stage-3 wave-96. Wave-89 chart-paint hook was misnamed paintLine.

import {
  Bn as _presentationBn,
  Hn as _presentationHn,
  Kn,
} from "../presentation-protobuf";
import { line as d3Line } from "../../vendor/d3-shape-line-pie-stack";
import {
  curveCardinal as d3CurveCardinal,
  curveLinear as d3CurveLinear,
} from "../../vendor/d3-shape-curves";
import { workbookGt as EMU_TO_CSS_PX } from "../text-style";
import { cssH } from "./boundary-hooks";

/** Legacy Binding1145 — default trendline type name. */
const DEFAULT_TRENDLINE_TYPE = "linear";
/** Legacy Binding1146 — protobuf trendline type → name. */
const TRENDLINE_TYPE_PROTO_TO_NAME: Record<number, string> = {
  [Kn.TRENDLINE_TYPE_LINEAR]: "linear",
  [Kn.TRENDLINE_TYPE_EXPONENTIAL]: "exponential",
  [Kn.TRENDLINE_TYPE_LOGARITHMIC]: "logarithmic",
  [Kn.TRENDLINE_TYPE_POLYNOMIAL]: "polynomial",
  [Kn.TRENDLINE_TYPE_POWER]: "power",
  [Kn.TRENDLINE_TYPE_MOVING_AVERAGE]: "movingAverage",
};

void _presentationBn;
void _presentationHn;
void Kn;
void d3Line;
void d3CurveCardinal;
void d3CurveLinear;
void EMU_TO_CSS_PX;
void cssH;
void DEFAULT_TRENDLINE_TYPE;
void TRENDLINE_TYPE_PROTO_TO_NAME;

function scatterShowsMarkers(cssIn8801: any) {
  return cssIn8801 === undefined
    ? true
    : cssIn8801 === _presentationHn.SCATTER_STYLE_MARKER ||
        cssIn8801 === _presentationHn.SCATTER_STYLE_LINE_MARKER ||
        cssIn8801 === _presentationHn.SCATTER_STYLE_SMOOTH_MARKER;
}
function scatterShowsLines(cssIn12509: any) {
  return cssIn12509 === undefined
    ? true
    : cssIn12509 !== _presentationHn.SCATTER_STYLE_MARKER;
}
function scatterUsesSmoothCurve(cssIn11415: any) {
  return (
    cssIn11415 === _presentationHn.SCATTER_STYLE_SMOOTH ||
    cssIn11415 === _presentationHn.SCATTER_STYLE_SMOOTH_MARKER
  );
}
function seriesStrokeWidthPx(cssIn9793: any) {
  let cssBind20342 = cssIn9793.stroke?.widthEmu;
  if (cssBind20342 == null) return;
  let cssBind20343 = Number(cssBind20342) * EMU_TO_CSS_PX;
  if (Number.isFinite(cssBind20343)) return Math.max(0, cssBind20343);
}
function paintScatterTrendlines(
  cssIn1608: any,
  cssIn1609: any,
  cssIn1610: any,
  cssIn1611: any,
  cssIn1612: any,
  cssIn1613: any,
  cssIn1614: any,
  cssIn1615: any,
  cssIn1616: any,
) {
  if (!cssIn1610.trendlines?.length) return;
  let cssBind7809 = cssIn1612.filter(
    (item) => Number.isFinite(item.x) && Number.isFinite(item.y),
  );
  cssBind7809.length < 2 ||
    cssIn1610.trendlines.forEach((item, index) => {
      cssH.bh523(cssIn1608, cssIn1609, cssIn1610, cssIn1611, item, cssIn1613);
      let cssBind9137 =
          TRENDLINE_TYPE_PROTO_TO_NAME[item.type] ?? DEFAULT_TRENDLINE_TYPE,
        cssBind9138 =
          cssIn1616?.[index] ??
          cssH.bh352({
            type: cssBind9137,
            points: cssBind7809,
            polynomialOrder: item.order,
            movingAveragePeriod: item.period,
            forecastForward: item.forward,
            forecastBackward: item.backward,
            intercept: item.intercept,
            displayEquation: item.displayEquation,
            displayRSquared: item.displayRSquared,
          });
      if (!cssBind9138 || cssBind9138.points.length < 2) return;
      cssIn1608.beginPath();
      let cssBind9139 = false;
      for (let cssBind18496 of cssBind9138.points) {
        let cssBind19225 = cssIn1614.x(cssBind18496.x),
          cssBind19226 = cssIn1614.y(cssBind18496.y);
        !Number.isFinite(cssBind19225) ||
          !Number.isFinite(cssBind19226) ||
          (cssBind9139
            ? cssIn1608.lineTo(cssBind19225, cssBind19226)
            : (cssIn1608.moveTo(cssBind19225, cssBind19226),
              (cssBind9139 = true)));
      }
      cssBind9139 && cssIn1608.stroke();
      cssH.bh524(cssIn1608, item, cssBind9138, cssIn1613, cssIn1615);
    });
}
export function paintScatterSeries(
  cssIn444: any,
  cssIn445: any,
  cssIn446: any,
  cssIn447: any,
  cssIn448: any,
  cssIn449: any,
  cssIn450: any,
  cssIn451: any,
  cssIn452: any,
) {
  let cssBind3998 = cssIn451 ?? cssH.bh556(cssIn445, cssIn450),
    cssBind3999 = cssIn445.scatterOptions?.style,
    cssBind4000 = scatterShowsLines(cssBind3999),
    cssBind4001 = scatterShowsMarkers(cssBind3999),
    cssBind4002 = scatterUsesSmoothCurve(cssBind3999)
      ? d3CurveCardinal
      : d3CurveLinear;
  cssBind3998.series.forEach(({ series, seriesIndex, points }) => {
    if (points.length === 0) return;
    let cssBind4201 = cssH.bh465(series, seriesIndex, cssIn448),
      cssBind4202 = cssBind4201 ?? cssIn444.strokeStyle;
    if (cssBind4000) {
      let cssBind14534 = seriesStrokeWidthPx(series);
      if (cssBind14534 !== 0) {
        cssIn444.save();
        cssIn444.strokeStyle = cssBind4202;
        cssIn444.lineWidth = cssBind14534 ?? 2;
        let cssBind15560 = d3Line()
          .defined(
            (cssIn14717) =>
              Number.isFinite(cssIn14717.x) && Number.isFinite(cssIn14717.y),
          )
          .x((cssIn16530) => cssIn447.x(cssIn16530.x))
          .y((cssIn16531) => cssIn447.y(cssIn16531.y))
          .curve(cssBind4002)
          .context(cssIn444);
        cssIn444.beginPath();
        cssBind15560(points);
        cssIn444.stroke();
        cssIn444.restore();
      }
    }
    if (series.trendlines?.length) {
      let cssBind18312 = cssIn452?.bySeriesIndex.get(seriesIndex);
      paintScatterTrendlines(
        cssIn444,
        cssIn445,
        series,
        seriesIndex,
        points.map((item) => ({
          x: item.x,
          y: item.y,
        })),
        cssIn448,
        {
          x: cssIn447.x,
          y: cssIn447.y,
        },
        cssIn446,
        cssBind18312,
      );
    }
    if (
      (series.errorBars?.length &&
        cssH.bh527(
          cssIn444,
          series,
          seriesIndex,
          cssIn448,
          points
            .map((item) => ({
              x: cssIn447.x(item.x),
              y: cssIn447.y(item.y),
              value: item.y,
            }))
            .filter(
              (item) => Number.isFinite(item.x) && Number.isFinite(item.y),
            ),
          {
            y: cssIn447.y,
          },
        ),
      !cssBind4001)
    )
      return;
    let cssBind4203 = series.marker?.symbol;
    if (
      !(
        cssBind4203 === undefined ||
        cssBind4203 === _presentationBn.MARKER_SYMBOL_UNSPECIFIED ||
        cssBind4203 !== _presentationBn.MARKER_SYMBOL_NONE
      )
    )
      return;
    let cssBind4204 = series.marker?.size,
      cssBind4205 =
        cssBind4204 !== undefined && Number.isFinite(cssBind4204)
          ? (cssBind4204 * 96) / 72
          : 6,
      cssBind4206 = Math.max(cssBind4205 / 2 - 1, 2);
    points.forEach((item) => {
      let cssBind7267 = cssIn447.x(item.x),
        cssBind7268 = cssIn447.y(item.y);
      if (!Number.isFinite(cssBind7267) || !Number.isFinite(cssBind7268))
        return;
      let cssBind7269 = cssH.bh474(series, item.idx)
          ? undefined
          : cssH.bh469(series, item.idx, seriesIndex, cssIn448),
        cssBind7270 = cssH.bh473(series, item.idx, cssIn448);
      cssIn444.save();
      cssIn444.beginPath();
      cssIn444.arc(cssBind7267, cssBind7268, cssBind4206, 0, Math.PI * 2);
      cssBind7269
        ? ((cssIn444.fillStyle = cssBind7269), cssIn444.fill())
        : ((cssIn444.fillStyle = cssBind4202), cssIn444.fill());
      let cssBind7271 = cssBind7270.color ?? cssBind4202;
      cssIn444.lineWidth =
        cssBind7270.widthPx === undefined
          ? Math.max(1, cssBind4206 / 3)
          : cssBind7270.widthPx;
      cssIn444.strokeStyle = cssBind7271;
      cssIn444.stroke();
      cssIn444.restore();
      cssIn449 &&
        cssIn449.push({
          kind: "scatter-point",
          x: cssBind7267 - cssBind4206,
          y: cssBind7268 - cssBind4206,
          width: cssBind4206 * 2,
          height: cssBind4206 * 2,
          seriesName: series.name,
          category: String(item.x),
          value: item.y,
          color: cssBind7269 ?? cssBind4201 ?? cssBind4202,
          anchorX: cssBind7267,
          anchorY: cssBind7268,
        });
      let cssBind7272 = cssH.bh495(cssIn445, series, item.idx, item.y);
      cssBind7272.show &&
        cssH.bh500(
          cssIn444,
          cssBind7272.text,
          cssBind7272.position,
          cssBind7272.textStyle,
          cssIn448,
          {
            x: cssBind7267,
            y: cssBind7268,
          },
          {
            callout: cssBind7272.callout,
          },
        );
    });
  });
}

/** Legacy alias. */
export const nCe = paintScatterSeries;
