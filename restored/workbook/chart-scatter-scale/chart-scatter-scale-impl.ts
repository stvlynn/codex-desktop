// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: scatter/bubble axis scale builder (legacy helper #540).
// Stage-3 wave-97.

import {
  Cn as _presentationCn,
  Mn as _presentationMn,
  xn as _presentationXn,
} from "../presentation-protobuf";
import {
  scaleLinear as d3ScaleLinear,
  scaleSqrt as d3ScaleSqrt,
} from "../../vendor/d3-scale-linear";
import { csscH } from "./boundary-hooks";

/** Legacy Binding1157 — bubble radius as fraction of min plot side. */
const BUBBLE_RADIUS_FRACTION = 0.25;

void _presentationCn;
void _presentationMn;
void _presentationXn;
void d3ScaleLinear;
void d3ScaleSqrt;
void csscH;
void BUBBLE_RADIUS_FRACTION;

export function buildScatterScale(
  csscIn428: any,
  csscIn429: any,
  csscIn430: any,
  csscIn431: any,
) {
  let csscBind3882 = csscIn428.xAxis ?? csscIn428.yAxis,
    csscBind3883 = csscIn428.yAxis ?? csscIn428.xAxis,
    csscBind3884 = csscIn430.extents.size,
    csscBind3885 = csscIn428.type === _presentationCn.CHART_TYPE_BUBBLE,
    csscBind3886;
  if (csscBind3884 !== undefined) {
    let csscBind16446 = csscBind3884[1],
      csscBind16447 =
        (Math.min(csscIn429.width, csscIn429.height) * BUBBLE_RADIUS_FRACTION) /
        2;
    csscBind3886 =
      csscBind16446 <= 0 || csscBind16447 <= 0
        ? () => 0
        : csscIn428.bubbleOptions?.sizeRepresents ===
            _presentationXn.SIZE_REPRESENTS_WIDTH
          ? d3ScaleLinear().domain([0, csscBind16446]).range([0, csscBind16447])
          : d3ScaleSqrt().domain([0, csscBind16446]).range([0, csscBind16447]);
  }
  let csscBind3887 = [
      csscBind3882?.min ?? csscIn430.extents.x[0],
      csscBind3882?.max ?? csscIn430.extents.x[1],
    ],
    csscBind3888 = [
      csscBind3883?.min ?? csscIn430.extents.y[0],
      csscBind3883?.max ?? csscIn430.extents.y[1],
    ],
    csscBind3889 = csscH.bh538(csscBind3887),
    csscBind3890 = csscH.bh538(csscBind3888),
    csscBind3891 = [csscIn429.x, csscIn429.x + csscIn429.width],
    csscBind3892 = [csscIn429.y + csscIn429.height, csscIn429.y];
  csscBind3882?.orientation === _presentationMn.AXIS_ORIENTATION_MAX_MIN &&
    csscBind3891.reverse();
  csscBind3883?.orientation === _presentationMn.AXIS_ORIENTATION_MAX_MIN &&
    csscBind3892.reverse();
  let { xTickCount, yTickCount } = csscH.tickCounts(csscIn429),
    csscBind3893 = csscIn431?.niceXDomain ?? true,
    csscBind3894 = csscIn430.series.flatMap(({ points }) =>
      points.map((item) => item.x),
    ),
    csscBind3895 = csscIn430.series.flatMap(({ points }) =>
      points.map((item) => item.y),
    ),
    csscBind3896 = csscIn430.series.flatMap((item) => item.points),
    csscBind3897 = csscH.bh533(csscIn428.bubbleOptions?.scale),
    csscBind3898 = csscH.bh537(csscBind3882, csscBind3889[1]),
    csscBind3899 = csscH.bh537(csscBind3883, csscBind3890[1]),
    csscBind3900;
  if (csscBind3885)
    csscBind3900 = csscH.niceAxisDomain({
      automaticMin: csscBind3889[0],
      automaticMax: csscBind3889[1],
      automaticPositiveMin: csscH.bh400(csscBind3894),
      range: csscBind3891,
      axis: csscBind3882,
      expandWideValuesToZero: false,
      expandNarrowValuesTowardZero: false,
      maximumAutoMainIncrementCount: csscH.bh535(csscBind3882, csscBind3898),
      minimumAutomaticMax: csscBind3898,
    });
  else {
    let csscBind18233 = false;
    csscBind3893 && (csscBind18233 = xTickCount);
    csscBind3900 = csscH.bh398({
      automaticMin: csscBind3889[0],
      automaticMax: csscBind3889[1],
      automaticPositiveMin: csscH.bh400(csscBind3894),
      range: csscBind3891,
      axis: csscBind3882,
      niceCount: csscBind18233,
    });
  }
  let csscBind3901;
  csscBind3886 !== undefined &&
    (csscBind3901 = csscH.Oxe({
      axis: csscBind3883,
      extent: csscBind3890,
      points: csscBind3896,
      value: (csscIn16637) => csscIn16637.y,
      radiusScale: csscBind3886,
      scaleMultiplier: csscBind3897,
      rangeSpan: Math.abs(csscBind3892[1] - csscBind3892[0]),
    }));
  let csscBind3902;
  return (
    (csscBind3902 = csscBind3885
      ? csscH.niceAxisDomain({
          automaticMin: csscBind3890[0],
          automaticMax: csscBind3890[1],
          automaticPositiveMin: csscH.bh400(csscBind3895),
          range: csscBind3892,
          axis: csscBind3883,
          maximumAutoMainIncrementCount: csscH.bh535(
            csscBind3883,
            csscBind3899,
          ),
          minimumAutomaticMax: csscBind3899,
          automaticMajorUnit: csscBind3901,
        })
      : csscH.bh398({
          automaticMin: csscBind3890[0],
          automaticMax: csscBind3890[1],
          automaticPositiveMin: csscH.bh400(csscBind3895),
          range: csscBind3892,
          axis: csscBind3883,
          niceCount: yTickCount,
        })),
    csscBind3885 &&
      csscBind3886 !== undefined &&
      (csscH.bh536(csscBind3900, csscBind3882, csscBind3898, csscBind3889[1]),
      csscH.bh536(csscBind3902, csscBind3883, csscBind3899, csscBind3890[1]),
      csscH.bh539({
        scale: csscBind3900,
        axis: csscBind3882,
        points: csscBind3896,
        value: (csscIn16638) => csscIn16638.x,
        radiusScale: csscBind3886,
        scaleMultiplier: csscBind3897,
      }),
      csscH.bh539({
        scale: csscBind3902,
        axis: csscBind3883,
        points: csscBind3896,
        value: (csscIn16639) => csscIn16639.y,
        radiusScale: csscBind3886,
        scaleMultiplier: csscBind3897,
      })),
    {
      x: csscBind3900,
      y: csscBind3902,
      r: csscBind3886,
    }
  );
}
