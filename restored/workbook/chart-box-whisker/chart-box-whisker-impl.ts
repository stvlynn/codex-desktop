// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: box-whisker prepare/scales/paint (legacy ECe/OCe/jCe).
// Stage-3 wave-98. Wave-89 hooks misnamed paintHistogram/paintWaterfall/paintCombo.

import { Cn, Bn as _presentationBn } from "../presentation-protobuf";
import { quantile as appInitialEat } from "../../vendor/d3-array-stats";
import { scaleBand as AppInitialHat } from "../../vendor/d3-scale-band";
import { scaleLinear as _AppInitialMat } from "../../vendor/d3-scale-linear";
import { cbwH } from "./boundary-hooks";

void Cn;
void _presentationBn;
void appInitialEat;
void AppInitialHat;
void _AppInitialMat;
void cbwH;

function coerceFiniteNumber(cbwIn12510: any) {
  if (typeof cbwIn12510 == "number" && Number.isFinite(cbwIn12510))
    return cbwIn12510;
}
function resolveQuartileMethod(props: any) {
  return props.boxWhiskerOptions?.quartileMethod
    ? props.boxWhiskerOptions.quartileMethod
    : _presentationBn.QUARTILE_METHOD_EXCLUSIVE;
}
function exclusiveQuartile(cbwIn6535: any, cbwIn6536: any) {
  let cbwBind16770 = cbwIn6535.length;
  if (cbwBind16770 === 0) return NaN;
  if (cbwBind16770 === 1) return cbwIn6535[0] ?? NaN;
  let cbwBind16771 = (cbwBind16770 + 1) * cbwIn6536,
    cbwBind16772 = Math.floor(cbwBind16771),
    cbwBind16773 = cbwBind16771 - cbwBind16772;
  if (cbwBind16772 <= 0) return cbwIn6535[0];
  if (cbwBind16772 >= cbwBind16770) return cbwIn6535[cbwBind16770 - 1];
  let cbwBind16774 = cbwIn6535[cbwBind16772 - 1];
  return cbwBind16774 + cbwBind16773 * (cbwIn6535[cbwBind16772] - cbwBind16774);
}
function computeQuartile(cbwIn9973: any, cbwIn9974: any, cbwIn9975: any) {
  return cbwIn9973.length === 0
    ? NaN
    : cbwIn9975 === _presentationBn.QUARTILE_METHOD_INCLUSIVE
      ? (appInitialEat(cbwIn9973, cbwIn9974) ?? NaN)
      : exclusiveQuartile(cbwIn9973, cbwIn9974);
}
function pickCategoryValues(
  cbwIn10295: any,
  cbwIn10296: any,
  cbwIn10297: any,
  cbwIn10298: any,
) {
  let cbwBind20774 = cbwIn10295?.[cbwIn10297];
  if (cbwBind20774 && cbwBind20774.length > 0) return cbwBind20774;
  let cbwBind20775 = cbwIn10296[cbwIn10297];
  return cbwBind20775 && cbwBind20775.length > 0 ? cbwBind20775 : cbwIn10298;
}
export function prepareBoxWhiskerData(cbwIn476: any, cbwIn477: any = {}) {
  if (cbwIn476.type !== Cn.CHART_TYPE_BOX_WHISKER)
    throw Error("prepareBoxWhiskerData called for non box-whisker chart");
  let cbwBind4083 = cbwIn477.hiddenSeriesIndices,
    cbwBind4084 = resolveQuartileMethod(cbwIn476),
    cbwBind4085 = cbwH.bh348(cbwIn476),
    cbwBind4086 = [],
    cbwBind4087 = new Set(),
    cbwBind4088 = cbwIn476.series
      .map((item, index) => ({
        series: item,
        seriesIndex: index,
      }))
      .filter(({ seriesIndex }) => !cbwBind4083?.has(seriesIndex))
      .map(({ series, seriesIndex }) => {
        let cbwBind11620 = new Map(),
          cbwBind11621 = series.values?.length ?? 0,
          cbwBind11622 =
            series.name && series.name.length > 0
              ? series.name
              : `Series ${seriesIndex + 1}`,
          cbwBind11623 = cbwH.bh347(series, cbwIn476.categories);
        for (
          let cbwBind16610 = 0;
          cbwBind16610 < cbwBind11621;
          cbwBind16610++
        ) {
          let cbwBind17327 = coerceFiniteNumber(series.values?.[cbwBind16610]);
          if (cbwBind17327 === undefined) continue;
          let cbwBind17328 = pickCategoryValues(
            cbwBind11623,
            cbwBind4085,
            cbwBind16610,
            `${cbwBind11622} ${cbwBind16610 + 1}`,
          );
          cbwBind4087.has(cbwBind17328) ||
            (cbwBind4087.add(cbwBind17328), cbwBind4086.push(cbwBind17328));
          let cbwBind17329 = cbwBind11620.get(cbwBind17328);
          cbwBind17329
            ? cbwBind17329.push(cbwBind17327)
            : cbwBind11620.set(cbwBind17328, [cbwBind17327]);
        }
        return {
          seriesIndex,
          valuesByCategory: cbwBind11620,
        };
      });
  cbwBind4086.length === 0 &&
    cbwBind4085.length > 0 &&
    cbwBind4085.forEach((item) => {
      cbwBind4087.has(item) || (cbwBind4087.add(item), cbwBind4086.push(item));
    });
  let cbwBind4089 = [],
    cbwBind4090 = 1 / 0,
    cbwBind4091 = -1 / 0;
  return (
    cbwBind4086.forEach((item) => {
      let cbwBind6610 = [];
      cbwBind4088.forEach(({ seriesIndex, valuesByCategory }) => {
        let cbwBind6949 = valuesByCategory.get(item);
        if (!cbwBind6949 || cbwBind6949.length === 0) return;
        let cbwBind6950 = cbwBind6949
          .slice()
          .sort((cbwIn16532, cbwIn16533) => cbwIn16532 - cbwIn16533);
        if (cbwBind6950.length === 0) return;
        let cbwBind6951 = computeQuartile(cbwBind6950, 0.25, cbwBind4084),
          cbwBind6952 = computeQuartile(cbwBind6950, 0.5, cbwBind4084),
          cbwBind6953 = computeQuartile(cbwBind6950, 0.75, cbwBind4084),
          cbwBind6954 = cbwBind6953 - cbwBind6951,
          cbwBind6955 = cbwBind6951 - 1.5 * cbwBind6954,
          cbwBind6956 = cbwBind6953 + 1.5 * cbwBind6954,
          cbwBind6957 = [],
          cbwBind6958 = [];
        cbwBind6950.forEach((_item) => {
          _item < cbwBind6955 || _item > cbwBind6956
            ? cbwBind6957.push(_item)
            : cbwBind6958.push(_item);
        });
        let cbwBind6959 =
            cbwBind6958.length > 0 ? cbwBind6958[0] : cbwBind6950[0],
          cbwBind6960 =
            cbwBind6958.length > 0
              ? cbwBind6958[cbwBind6958.length - 1]
              : cbwBind6950[cbwBind6950.length - 1],
          cbwBind6961 = appInitialWat(cbwBind6950) ?? undefined,
          cbwBind6962 = {
            seriesIndex,
            categoryKey: item,
            valuesSorted: cbwBind6950,
            q1: cbwBind6951,
            median: cbwBind6952,
            q3: cbwBind6953,
            whiskerLow: cbwBind6959,
            whiskerHigh: cbwBind6960,
            min: cbwBind6950[0],
            max: cbwBind6950[cbwBind6950.length - 1],
            iqr: cbwBind6954,
            outliers: cbwBind6957,
            nonOutliers: cbwBind6958,
            mean: cbwBind6961,
          };
        cbwBind4090 = Math.min(
          cbwBind4090,
          cbwBind6962.min,
          cbwBind6962.whiskerLow,
          ...cbwBind6962.outliers,
        );
        cbwBind4091 = Math.max(
          cbwBind4091,
          cbwBind6962.max,
          cbwBind6962.whiskerHigh,
          ...cbwBind6962.outliers,
        );
        cbwBind6610.push(cbwBind6962);
      });
      cbwBind4089.push({
        key: item,
        series: cbwBind6610,
      });
    }),
    Number.isFinite(cbwBind4090) || (cbwBind4090 = 0),
    Number.isFinite(cbwBind4091) || (cbwBind4091 = 1),
    cbwBind4090 === cbwBind4091 && (--cbwBind4090, (cbwBind4091 += 1)),
    {
      categories: cbwBind4086,
      seriesOrder: cbwBind4088.map((item) => item.seriesIndex),
      byCategory: cbwBind4089,
      extents: {
        min: cbwBind4090,
        max: cbwBind4091,
      },
    }
  );
}

export function buildBoxWhiskerScales(cbwIn4281: any, cbwIn4282: any) {
  let cbwBind13344 = AppInitialHat()
      .domain(cbwIn4281.categories)
      .range([cbwIn4282.x, cbwIn4282.x + cbwIn4282.width])
      .paddingInner(0.3)
      .paddingOuter(0.2),
    cbwBind13345 = Math.max(0, cbwBind13344.bandwidth());
  return {
    x: cbwBind13344,
    xSeries: AppInitialHat()
      .domain(cbwIn4281.seriesOrder)
      .range([0, cbwBind13345])
      .paddingInner(0.2)
      .paddingOuter(0.1),
    y: _AppInitialMat()
      .domain([cbwIn4281.extents.min, cbwIn4281.extents.max])
      .nice()
      .range([cbwIn4282.y + cbwIn4282.height, cbwIn4282.y]),
  };
}

function fillStrokeCircle(
  cbwIn6846: any,
  cbwIn6847: any,
  cbwIn6848: any,
  cbwIn6849: any,
  cbwIn6850: any,
  cbwIn6851: any,
  cbwIn6852: any,
) {
  !Number.isFinite(cbwIn6847) ||
    !Number.isFinite(cbwIn6848) ||
    (cbwIn6846.beginPath(),
    cbwIn6846.arc(cbwIn6847, cbwIn6848, cbwIn6849, 0, Math.PI * 2),
    cbwIn6850 && ((cbwIn6846.fillStyle = cbwIn6850), cbwIn6846.fill()),
    cbwIn6851 &&
      cbwIn6852 > 0 &&
      ((cbwIn6846.strokeStyle = cbwIn6851),
      (cbwIn6846.lineWidth = cbwIn6852),
      cbwIn6846.stroke()));
}
function resolveBoxSeriesStyle(
  cbwIn4519: any,
  cbwIn4520: any,
  cbwIn4521: any,
  cbwIn4522: any,
) {
  let cbwBind13773 = cbwIn4519.series[cbwIn4520.seriesIndex];
  if (!cbwBind13773)
    return {
      strokeWidth: 1,
      noFill: false,
    };
  let cbwBind13774 = cbwH.bh474(cbwBind13773, cbwIn4521),
    cbwBind13775 =
      cbwH.bh469(cbwBind13773, cbwIn4521, cbwIn4520.seriesIndex, cbwIn4522) ??
      cbwH.bh465(cbwBind13773, cbwIn4520.seriesIndex, cbwIn4522),
    cbwBind13776 = cbwH.bh473(cbwBind13773, cbwIn4521, cbwIn4522),
    cbwBind13777 =
      cbwBind13776.color ??
      (cbwBind13775 ||
        cbwH.bh465(cbwBind13773, cbwIn4520.seriesIndex, cbwIn4522)),
    cbwBind13778 = cbwBind13776.widthPx ?? 1;
  return {
    fillColor: cbwBind13774 ? undefined : cbwBind13775,
    strokeColor: cbwBind13777 ?? undefined,
    strokeWidth: cbwBind13778 > 0 ? cbwBind13778 : 1,
    noFill: cbwBind13774,
  };
}
export function paintBoxWhiskerChart(
  cbwIn140: any,
  cbwIn141: any,
  cbwIn142: any,
  cbwIn143: any,
  cbwIn144: any,
  cbwIn145: any = {},
) {
  let { chartHoverTargets } = cbwIn145,
    cbwBind2873 = cbwIn141.boxWhiskerOptions?.showMeanMarker ?? false,
    cbwBind2874 = cbwIn141.boxWhiskerOptions?.showMeanLine ?? false,
    cbwBind2875 = cbwIn141.boxWhiskerOptions?.showOutliers ?? true,
    cbwBind2876 = cbwIn141.boxWhiskerOptions?.showNonOutliers ?? false,
    cbwBind2877 = new Map(),
    cbwBind2878 = new Map();
  cbwIn143.categories.forEach((item, index) => {
    cbwIn142.x(item) !== undefined && cbwBind2878.set(item, index);
  });
  cbwIn143.byCategory.forEach((item) => {
    let cbwBind3095 = cbwIn142.x(item.key);
    if (cbwBind3095 === undefined) return;
    let cbwBind3096 = cbwBind2878.get(item.key) ?? 0,
      cbwBind3097 = cbwIn142.x.bandwidth(),
      cbwBind3098 = cbwIn142.xSeries.bandwidth();
    item.series.forEach((_item) => {
      let cbwBind3155 = cbwIn141.series[_item.seriesIndex];
      if (!cbwBind3155) return;
      let cbwBind3156 = cbwIn142.xSeries(_item.seriesIndex),
        cbwBind3157 =
          cbwBind3098 > 0
            ? cbwBind3098
            : Math.max(cbwBind3097 * 0.5, Math.min(cbwBind3097, 12)),
        cbwBind3158 =
          cbwBind3156 === undefined
            ? Math.max(0, (cbwBind3097 - cbwBind3157) / 2)
            : cbwBind3156,
        cbwBind3159 = cbwBind3095 + cbwBind3158,
        cbwBind3160 = cbwBind3159 + cbwBind3157,
        cbwBind3161 = cbwBind3159 + cbwBind3157 / 2,
        cbwBind3162 = cbwIn142.y(_item.q1),
        cbwBind3163 = cbwIn142.y(_item.q3),
        cbwBind3164 = cbwIn142.y(_item.median),
        cbwBind3165 = cbwIn142.y(_item.whiskerLow),
        cbwBind3166 = cbwIn142.y(_item.whiskerHigh);
      if (
        !Number.isFinite(cbwBind3162) ||
        !Number.isFinite(cbwBind3163) ||
        !Number.isFinite(cbwBind3164) ||
        !Number.isFinite(cbwBind3165) ||
        !Number.isFinite(cbwBind3166)
      )
        return;
      let cbwBind3167 = Math.min(cbwBind3162, cbwBind3163),
        cbwBind3168 = Math.max(Math.abs(cbwBind3163 - cbwBind3162), 1),
        cbwBind3169 = Math.min(cbwBind3157 * cbwBind1220, cbwBind3157) / 2,
        cbwBind3170 = resolveBoxSeriesStyle(
          cbwIn141,
          _item,
          cbwBind3096,
          cbwIn144,
        );
      if (
        (cbwIn140.beginPath(),
        cbwIn140.rect(cbwBind3159, cbwBind3167, cbwBind3157, cbwBind3168),
        cbwBind3170.fillColor &&
          ((cbwIn140.fillStyle = cbwBind3170.fillColor), cbwIn140.fill()),
        cbwBind3170.strokeColor &&
          ((cbwIn140.strokeStyle = cbwBind3170.strokeColor),
          (cbwIn140.lineWidth = cbwBind3170.strokeWidth),
          cbwIn140.stroke()),
        cbwBind3170.strokeColor &&
          (cbwIn140.beginPath(),
          (cbwIn140.strokeStyle = cbwBind3170.strokeColor),
          (cbwIn140.lineWidth = Math.max($R, cbwBind3170.strokeWidth)),
          cbwIn140.moveTo(cbwBind3159, cbwBind3164),
          cbwIn140.lineTo(cbwBind3160, cbwBind3164),
          cbwIn140.stroke()),
        cbwBind3170.strokeColor &&
          (cbwIn140.beginPath(),
          (cbwIn140.strokeStyle = cbwBind3170.strokeColor),
          (cbwIn140.lineWidth = cbwBind3170.strokeWidth),
          cbwIn140.moveTo(cbwBind3161, cbwBind3163),
          cbwIn140.lineTo(cbwBind3161, cbwBind3166),
          cbwIn140.moveTo(cbwBind3161 - cbwBind3169, cbwBind3166),
          cbwIn140.lineTo(cbwBind3161 + cbwBind3169, cbwBind3166),
          cbwIn140.moveTo(cbwBind3161, cbwBind3162),
          cbwIn140.lineTo(cbwBind3161, cbwBind3165),
          cbwIn140.moveTo(cbwBind3161 - cbwBind3169, cbwBind3165),
          cbwIn140.lineTo(cbwBind3161 + cbwBind3169, cbwBind3165),
          cbwIn140.stroke()),
        cbwBind2875 &&
          _item.outliers.forEach((__item) => {
            let cbwBind9454 = cbwIn142.y(__item);
            Number.isFinite(cbwBind9454) &&
              (fillStrokeCircle(
                cbwIn140,
                cbwBind3161,
                cbwBind9454,
                cbwBind1221,
                cbwBind3170.strokeColor ?? cbwBind3170.fillColor,
                cbwBind3170.strokeColor,
                cbwBind3170.strokeWidth,
              ),
              chartHoverTargets &&
                chartHoverTargets.push({
                  kind: "scatter-point",
                  anchorX: cbwBind3161,
                  anchorY: cbwBind9454,
                  seriesName: cbwBind3155.name ?? undefined,
                  category: item.key,
                  value: __item,
                  color:
                    cbwBind3170.fillColor ??
                    cbwBind3170.strokeColor ??
                    undefined,
                  elementId: cbwIn141.id ?? undefined,
                  seriesIndex: _item.seriesIndex,
                }));
          }),
        cbwBind2876 &&
          _item.nonOutliers.forEach((__item) => {
            let cbwBind15237 = cbwIn142.y(__item);
            Number.isFinite(cbwBind15237) &&
              fillStrokeCircle(
                cbwIn140,
                cbwBind3161,
                cbwBind15237,
                cbwBind1222,
                cbwBind3170.fillColor ?? cbwBind3170.strokeColor,
                cbwBind3170.strokeColor,
                Math.max(1, cbwBind3170.strokeWidth / 2),
              );
          }),
        cbwBind2873 && _item.mean !== undefined)
      ) {
        let cbwBind8372 = cbwIn142.y(_item.mean);
        Number.isFinite(cbwBind8372) &&
          (fillStrokeCircle(
            cbwIn140,
            cbwBind3161,
            cbwBind8372,
            cbwBind1223,
            cbwBind3170.strokeColor ?? cbwBind3170.fillColor,
            cbwBind3170.strokeColor,
            cbwBind3170.strokeWidth,
          ),
          chartHoverTargets &&
            chartHoverTargets.push({
              kind: "scatter-point",
              anchorX: cbwBind3161,
              anchorY: cbwBind8372,
              seriesName: cbwBind3155.name ?? undefined,
              category: item.key,
              value: _item.mean,
              color:
                cbwBind3170.fillColor ?? cbwBind3170.strokeColor ?? undefined,
              elementId: cbwIn141.id ?? undefined,
              seriesIndex: _item.seriesIndex,
            }),
          cbwBind2877.has(_item.seriesIndex) ||
            cbwBind2877.set(_item.seriesIndex, []),
          cbwBind2877.get(_item.seriesIndex).push({
            x: cbwBind3161,
            y: cbwBind8372,
            categoryIndex: cbwBind3096,
            color: cbwBind3170.strokeColor ?? cbwBind3170.fillColor,
          }));
      }
      chartHoverTargets &&
        chartHoverTargets.push({
          kind: "bar-vertical",
          x: cbwBind3159,
          y: cbwBind3167,
          width: cbwBind3157,
          height: cbwBind3168,
          seriesName: cbwBind3155.name ?? undefined,
          category: item.key,
          value: _item.median,
          color: cbwBind3170.fillColor ?? cbwBind3170.strokeColor ?? undefined,
          anchorX: cbwBind3161,
          anchorY: cbwBind3164,
          elementId: cbwIn141.id ?? undefined,
          seriesIndex: _item.seriesIndex,
        });
    });
  });
  cbwBind2874 &&
    cbwBind2877.forEach((item, index) => {
      let cbwBind11454 = item
        .filter((_item) => Number.isFinite(_item.x) && Number.isFinite(_item.y))
        .sort(
          (cbwIn15305, cbwIn15306) =>
            cbwIn15305.categoryIndex - cbwIn15306.categoryIndex,
        );
      if (cbwBind11454.length < 2) return;
      let cbwBind11455 = cbwIn141.series[index],
        cbwBind11456 = cbwBind11455
          ? cbwH.bh465(cbwBind11455, index, cbwIn144)
          : undefined,
        cbwBind11457 = cbwBind11454[0]?.color ?? cbwBind11456 ?? "#444444";
      cbwIn140.beginPath();
      cbwIn140.strokeStyle = cbwBind11457;
      cbwIn140.lineWidth = 1.5;
      cbwIn140.lineJoin = "round";
      cbwBind11454.forEach((_item, _index) => {
        _index === 0
          ? cbwIn140.moveTo(_item.x, _item.y)
          : cbwIn140.lineTo(_item.x, _item.y);
      });
      cbwIn140.stroke();
    });
}

/** Legacy aliases (also cover misnamed chart-paint hooks). */
export const ECe = prepareBoxWhiskerData;
export const OCe = buildBoxWhiskerScales;
export const jCe = paintBoxWhiskerChart;
