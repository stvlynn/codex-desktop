// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: column/bar series paint (legacy workbook bar-series painter).
// Stage-3 wave-95/103 (computeBarSegments / helper #421).

import { Yn } from "../presentation-protobuf";
import {
  stack,
  stackOrderNone,
  stackOffsetExpand,
  stackOffsetNone,
} from "../../vendor/d3-shape-line-pie-stack";
import { cbsH } from "./boundary-hooks";

void Yn;
void stack;
void stackOrderNone;
void stackOffsetExpand;
void stackOffsetNone;

void cbsH;

export function paintBarSeries(
  cbsIn294: any,
  cbsIn295: any,
  cbsIn296: any,
  cbsIn297: any,
  cbsIn298: any,
  cbsIn299: any,
) {
  if (!cbsH.bh424(cbsIn296.x)) return;
  let cbsBind3508 = cbsIn296.x,
    cbsBind3509 = cbsIn296.y,
    cbsBind3510 = computeBarSegments(cbsIn295, cbsIn299),
    cbsBind3511 = cbsBind3510.categories,
    cbsBind3512 = cbsBind3510.mode === "clustered",
    cbsBind3513 = new Map(
      cbsBind3510.visibleSeries.map((item, index) => [item, index]),
    );
  cbsBind3511.forEach((item, index) => {
    let cbsBind3596 = cbsBind3508(item);
    if (cbsBind3596 === undefined) return;
    let cbsBind3597 = cbsBind3510.segmentsByCategory[index],
      cbsBind3598 =
        cbsBind3512 || cbsBind3597?.length === 0
          ? undefined
          : cbsBind3597?.reduce((cbsIn7759, cbsIn7760, cbsIn7761) => {
              if (!cbsIn7760.hasValue || cbsIn7760.end < cbsIn7760.start)
                return cbsIn7759;
              if (cbsIn7759 === undefined) return cbsIn7761;
              let cbsBind18248 = cbsBind3597[cbsIn7759];
              return cbsBind18248 && cbsBind18248.end < cbsIn7760.end
                ? cbsIn7761
                : cbsIn7759;
            }, undefined),
      cbsBind3599 =
        cbsBind3512 || cbsBind3597?.length === 0
          ? undefined
          : cbsBind3597?.reduce((cbsIn7745, cbsIn7746, cbsIn7747) => {
              if (!cbsIn7746.hasValue || cbsIn7746.end >= cbsIn7746.start)
                return cbsIn7745;
              if (cbsIn7745 === undefined) return cbsIn7747;
              let cbsBind18231 = cbsBind3597[cbsIn7745];
              return cbsBind18231 && cbsBind18231.end > cbsIn7746.end
                ? cbsIn7747
                : cbsIn7745;
            }, undefined);
    cbsBind3597?.forEach((cbsIn486, cbsIn487) => {
      if (!cbsIn486.hasValue) return;
      let cbsBind4142 = cbsIn295.series[cbsIn486.seriesIndex];
      if (!cbsBind4142) return;
      let cbsBind4143 = cbsIn486.valueRaw,
        cbsBind4144 = cbsH.bh474(cbsBind4142, index),
        cbsBind4145 = cbsH.bh469(
          cbsBind4142,
          index,
          cbsIn486.seriesIndex,
          cbsIn297,
          {
            chartStyleIndex: cbsIn295.styleIndex,
          },
        ),
        cbsBind4146 = cbsBind3513.get(cbsIn486.seriesIndex);
      if (cbsBind4146 === undefined) return;
      let cbsBind4147 = cbsBind3512
          ? cbsBind3508.bandwidth() *
            cbsH.bh394({
              orderIndex: cbsBind4146,
              seriesCount: cbsBind3510.visibleSeries.length,
              overlap: cbsIn295.barOptions?.overlap,
              reverse: $O(cbsIn295),
            })
          : 0,
        cbsBind4148 = cbsBind3512 ? cbsBind3596 + cbsBind4147 : cbsBind3596,
        cbsBind4149 = cbsBind3512
          ? cbsBind3508.bandwidth() *
            cbsH.bh393(
              cbsBind3510.visibleSeries.length,
              cbsIn295.barOptions?.overlap,
            )
          : cbsBind3508.bandwidth(),
        cbsBind4150 = cbsBind3509(cbsH.bh404(cbsBind3509, cbsIn486.start)),
        cbsBind4151 = cbsBind3509(cbsH.bh404(cbsBind3509, cbsIn486.end)),
        cbsBind4152 = Math.min(cbsBind4150, cbsBind4151),
        cbsBind4153 = Math.abs(cbsBind4151 - cbsBind4150),
        cbsBind4154 = cbsBind4152 + cbsBind4153,
        cbsBind4155 = cbsH.bh470(
          cbsIn294,
          {
            x: cbsBind4148,
            y: Math.min(cbsBind4152, cbsBind4154),
            width: cbsBind4149,
            height: cbsBind4153,
          },
          cbsBind4142,
          index,
          cbsIn486.seriesIndex,
          cbsIn297,
          {
            chartStyleIndex: cbsIn295.styleIndex,
          },
        ),
        cbsBind4156 = Math.max(0, Math.min(2, cbsBind4149 / 2, cbsBind4153)),
        cbsBind4157 =
          cbsBind3512 ||
          (cbsIn486.end >= cbsIn486.start
            ? cbsIn487 === cbsBind3598
            : cbsIn487 === cbsBind3599)
            ? cbsBind4156
            : 0;
      cbsIn294.beginPath();
      cbsBind4143 >= 0
        ? (cbsIn294.moveTo(cbsBind4148, cbsBind4154),
          cbsIn294.lineTo(cbsBind4148, cbsBind4152 + cbsBind4157),
          cbsIn294.arcTo(
            cbsBind4148,
            cbsBind4152,
            cbsBind4148 + cbsBind4157,
            cbsBind4152,
            cbsBind4157,
          ),
          cbsIn294.lineTo(cbsBind4148 + cbsBind4149 - cbsBind4157, cbsBind4152),
          cbsIn294.arcTo(
            cbsBind4148 + cbsBind4149,
            cbsBind4152,
            cbsBind4148 + cbsBind4149,
            cbsBind4152 + cbsBind4157,
            cbsBind4157,
          ),
          cbsIn294.lineTo(cbsBind4148 + cbsBind4149, cbsBind4154),
          cbsIn294.closePath())
        : (cbsIn294.moveTo(cbsBind4148, cbsBind4152),
          cbsIn294.lineTo(cbsBind4148, cbsBind4154 - cbsBind4157),
          cbsIn294.arcTo(
            cbsBind4148,
            cbsBind4154,
            cbsBind4148 + cbsBind4157,
            cbsBind4154,
            cbsBind4157,
          ),
          cbsIn294.lineTo(cbsBind4148 + cbsBind4149 - cbsBind4157, cbsBind4154),
          cbsIn294.arcTo(
            cbsBind4148 + cbsBind4149,
            cbsBind4154,
            cbsBind4148 + cbsBind4149,
            cbsBind4154 - cbsBind4157,
            cbsBind4157,
          ),
          cbsIn294.lineTo(cbsBind4148 + cbsBind4149, cbsBind4152),
          cbsIn294.closePath());
      !cbsBind4144 &&
        cbsBind4155 &&
        ((cbsIn294.fillStyle = cbsBind4155), cbsIn294.fill());
      let { color, widthPx } = cbsH.bh473(cbsBind4142, index, cbsIn297);
      if (
        (color &&
          ((cbsIn294.strokeStyle = color),
          (cbsIn294.lineWidth = widthPx ?? 1),
          cbsIn294.stroke()),
        cbsIn298)
      ) {
        let cbsBind15727 = Math.min(cbsBind4152, cbsBind4154);
        cbsIn298.push({
          kind: "bar-vertical",
          x: cbsBind4148,
          y: cbsBind4152,
          width: cbsBind4149,
          height: cbsBind4153,
          seriesName: cbsBind4142.name,
          category: item,
          value: cbsBind4143,
          color: cbsBind4145,
          anchorX: cbsBind4148 + cbsBind4149,
          anchorY: cbsBind15727,
        });
      }
      let cbsBind4158 = cbsH.bh495(cbsIn295, cbsBind4142, index, cbsBind4143);
      if (cbsBind4158.show && cbsBind4149 > 0) {
        let cbsBind15386 = cbsBind4143 >= 0;
        cbsH.bh500(
          cbsIn294,
          cbsBind4158.text,
          cbsBind4158.position,
          cbsBind4158.textStyle,
          cbsIn297,
          {
            x: cbsBind4148 + cbsBind4149 / 2,
            y: cbsBind4152,
          },
          {
            box: {
              x: cbsBind4148,
              y: Math.min(cbsBind4152, cbsBind4154),
              width: cbsBind4149,
              height: cbsBind4153,
            },
            isPositive: cbsBind15386,
            callout: cbsBind4158.callout,
          },
        );
      }
    });
  });
}

export function computeBarSegments(cbsIn685: any, cbsIn686: any) {
  let cbsBind4953 = cbsH.bh419(cbsIn685),
    cbsBind4954 = cbsIn685.series
      .map((item, index) => index)
      .filter((item) => !cbsIn686?.has(item)),
    cbsBind4955 = cbsIn685.barOptions?.grouping,
    cbsBind4956 =
      cbsBind4955 === Yn.BAR_GROUPING_STACKED
        ? "stacked"
        : cbsBind4955 === Yn.BAR_GROUPING_PERCENT_STACKED
          ? "percent"
          : "clustered",
    cbsBind4957 = cbsBind4953.map(() => []);
  if (cbsBind4956 === "clustered" || cbsBind4954.length === 0) {
    let cbsBind11831 = cbsIn685.series.map(cbsH.bh420);
    return (
      cbsBind4953.forEach((item, index) => {
        cbsBind4954.forEach((_item) => {
          if (!cbsIn685.series[_item]) return;
          let cbsBind15046 = cbsBind11831[_item]?.get(index),
            cbsBind15047 = true;
          (cbsBind15046 === undefined || !Number.isFinite(cbsBind15046)) &&
            ((cbsBind15046 = 0), (cbsBind15047 = false));
          cbsBind4957[index]?.push({
            seriesIndex: _item,
            hasValue: cbsBind15047,
            valueRaw: cbsBind15046,
            start: 0,
            end: cbsBind15046,
          });
        });
      }),
      {
        categories: cbsBind4953,
        visibleSeries: cbsBind4954,
        mode: cbsBind4956,
        segmentsByCategory: cbsBind4957,
      }
    );
  }
  let cbsBind4958 = cbsIn685.series.map(cbsH.bh420),
    cbsBind4959 = cbsBind4953.map((item, index) => {
      let cbsBind18723 = {};
      return (
        cbsBind4954.forEach((_item) => {
          let cbsBind21466 = cbsIn685.series[_item];
          cbsBind18723[String(_item)] =
            cbsBind21466 && cbsBind4958[_item]
              ? (cbsBind4958[_item]?.get(index) ?? 0)
              : 0;
        }),
        cbsBind18723
      );
    }),
    cbsBind4960 = stack()
      .keys(cbsBind4954.map((item) => String(item)))
      .value((cbsIn16356, cbsIn16357) => cbsIn16356[cbsIn16357] ?? 0)
      .order(stackOrderNone);
  return (
    cbsBind4956 === "percent"
      ? cbsBind4960.offset(stackOffsetExpand)
      : cbsBind4960.offset(stackOffsetNone),
    cbsBind4960(cbsBind4959).forEach((item) => {
      let cbsBind11977 = item.key,
        cbsBind11978 = Number.parseInt(cbsBind11977, 10);
      cbsBind4953.forEach((_item, index) => {
        let cbsBind13337 = item[index];
        if (!cbsBind13337) return;
        let cbsBind13338 = Number.isFinite(cbsBind13337[0])
            ? cbsBind13337[0]
            : 0,
          cbsBind13339 = Number.isFinite(cbsBind13337[1]) ? cbsBind13337[1] : 0,
          cbsBind13340 = cbsBind4958[cbsBind11978]?.get(index),
          cbsBind13341 = true;
        (cbsBind13340 === undefined || !Number.isFinite(cbsBind13340)) &&
          ((cbsBind13340 = 0), (cbsBind13341 = false));
        cbsBind4957[index]?.push({
          seriesIndex: cbsBind11978,
          hasValue: cbsBind13341,
          valueRaw: cbsBind13340,
          start: cbsBind13338,
          end: cbsBind13339,
        });
      });
    }),
    {
      categories: cbsBind4953,
      visibleSeries: cbsBind4954,
      mode: cbsBind4956,
      segmentsByCategory: cbsBind4957,
    }
  );
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookHelper421 = paintBarSeries;
