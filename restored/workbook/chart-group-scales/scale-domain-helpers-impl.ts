// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: combo/stack domain + nice continuous scale helpers.
// Stage-3 wave-113.

import { workbookHelper348 } from "../chart-asset";
import { workbookHelper389 } from "../chart-stacked-domain";
import {
  scaleLinear as _AppInitialMat,
  tickStep as AppInitialMat,
} from "../../vendor/d3-scale-linear";

const AUTO_DOMAIN_HEADROOM = 0.9523809523809523;

void workbookHelper348;
void workbookHelper389;
void _AppInitialMat;
void AppInitialMat;
void AUTO_DOMAIN_HEADROOM;

export function planComboValueDomains(cgsIn1312: any) {
  let cgsBind7008 = cgsIn1312.chartGroups,
    cgsBind7009 = cgsIn1312.resolveCategories();
  if (cgsIn1312.type === "combo" && cgsBind7008.length > 0) {
    let cgsBind9595 = 1 / 0,
      cgsBind9596 = -1 / 0;
    for (let cgsBind10798 of cgsBind7008) {
      let cgsBind10972 = workbookHelper389({
        type:
          cgsBind10798.type === undefined
            ? undefined
            : cgsBind391[cgsBind10798.type],
        categories: cgsBind7009,
        series: cgsBind10798.series.map((item) => ({
          values: cge(item),
        })),
        barGrouping:
          cgsBind10798.barOptions?.grouping === undefined
            ? undefined
            : cgsBind401[cgsBind10798.barOptions.grouping],
        areaGrouping:
          cgsBind10798.areaOptions?.grouping === undefined
            ? undefined
            : cgsBind389[cgsBind10798.areaOptions.grouping],
        lineGrouping:
          cgsBind10798.lineOptions?.grouping === undefined
            ? undefined
            : cgsBind390[cgsBind10798.lineOptions.grouping],
      });
      cgsBind9595 = Math.min(cgsBind9595, cgsBind10972.min);
      cgsBind9596 = Math.max(cgsBind9596, cgsBind10972.max);
    }
    return {
      min: Number.isFinite(cgsBind9595) ? cgsBind9595 : 0,
      max: Number.isFinite(cgsBind9596) ? cgsBind9596 : 0,
    };
  }
  return workbookHelper389({
    type: cgsIn1312.type,
    categories: cgsBind7009,
    series: cgsIn1312.series.items.map((item, index) => ({
      values: cgsIn1312.resolveSeriesValues(index),
    })),
    barGrouping: cgsIn1312.barOptions.grouping,
    areaGrouping: cgsIn1312.areaOptions.grouping,
    lineGrouping: cgsIn1312.lineOptions.grouping,
  });
}
export function stackSeriesExtents(cgsIn1184: any, cgsIn1185: any) {
  let cgsBind6702 = cgsIn1185 ?? new Set(),
    cgsBind6703 = cgsIn1184.series.findIndex(
      (item, index) => !cgsBind6702.has(index),
    );
  if (cgsBind6703 === -1)
    return {
      categories: [],
      seriesIndex: -1,
      segments: [],
      extents: {
        min: 0,
        max: 0,
      },
    };
  let cgsBind6704 = cgsIn1184.series[cgsBind6703],
    cgsBind6705 = cgsBind6704?.values ?? [],
    cgsBind6706 = workbookHelper348(cgsIn1184, cgsBind6703),
    cgsBind6707 = new Set(cgsIn1184.waterfallOptions?.subtotalIndices ?? []),
    cgsBind6708 = Math.max(cgsBind6705.length, cgsBind6706.length),
    cgsBind6709 = 0,
    cgsBind6710 = 0,
    cgsBind6711 = 0,
    cgsBind6712 = [];
  for (let cgsBind10730 = 0; cgsBind10730 < cgsBind6708; cgsBind10730++) {
    let cgsBind10996 = cgsBind6705[cgsBind10730] ?? 0,
      cgsBind10997 = cgsBind6707.has(cgsBind10730),
      cgsBind10998 =
        cgsBind6706[cgsBind10730] ??
        cgsBind6704?.categories?.[cgsBind10730] ??
        `Item ${cgsBind10730 + 1}`,
      cgsBind10999 = cgsBind6709,
      cgsBind11000,
      cgsBind11001,
      cgsBind11002,
      cgsBind11003;
    cgsBind10997
      ? ((cgsBind11000 = 0),
        (cgsBind11001 = cgsBind10996),
        (cgsBind11002 = cgsBind10996),
        (cgsBind11003 = "total"))
      : ((cgsBind11000 = cgsBind6709),
        (cgsBind11002 = cgsBind6709 + cgsBind10996),
        (cgsBind11001 = cgsBind11002),
        (cgsBind11003 = cgsBind10996 >= 0 ? "increase" : "decrease"));
    cgsBind6709 = cgsBind11002;
    cgsBind6710 = Math.min(cgsBind6710, cgsBind11000, cgsBind11001);
    cgsBind6711 = Math.max(cgsBind6711, cgsBind11000, cgsBind11001);
    cgsBind6712.push({
      index: cgsBind10730,
      category: cgsBind10998,
      value: cgsBind10996,
      start: cgsBind11000,
      end: cgsBind11001,
      cumulativeBefore: cgsBind10999,
      cumulativeAfter: cgsBind11002,
      isSubtotal: cgsBind10997,
      kind: cgsBind11003,
      labelValue: cgsBind10997 ? cgsBind11002 : cgsBind10996,
    });
  }
  return (
    (cgsBind6710 = Math.min(cgsBind6710, 0)),
    (cgsBind6711 = Math.max(cgsBind6711, 0)),
    {
      categories: cgsBind6706,
      seriesIndex: cgsBind6703,
      segments: cgsBind6712,
      extents: {
        min: cgsBind6710,
        max: cgsBind6711,
      },
    }
  );
}
export function applyNiceContinuousDomain(
  cgsIn2741: any,
  cgsIn2742: any,
  cgsIn2743: any,
) {
  cgsIn2741.domain([cgsIn2742.min, cgsIn2742.max]);
  (!cgsIn2742.hasExplicitMin || !cgsIn2742.hasExplicitMax) &&
    cgsIn2741.nice(cgsIn2743);
  let [cgsBind10364 = cgsIn2742.min, cgsBind10365 = cgsIn2742.max] =
    cgsIn2741.domain();
  cgsIn2742.hasExplicitMin && (cgsBind10364 = cgsIn2742.min);
  cgsIn2742.hasExplicitMax && (cgsBind10365 = cgsIn2742.max);
  cgsIn2742.includeZeroBaseline ||
    (!cgsIn2742.hasExplicitMin &&
      cgsIn2742.dataMin > 0 &&
      cgsBind10364 <= 0 &&
      (cgsBind10364 = cgsIn2742.min),
    !cgsIn2742.hasExplicitMax &&
      cgsIn2742.dataMax < 0 &&
      cgsBind10365 >= 0 &&
      (cgsBind10365 = cgsIn2742.max));
  let cgsBind10366 = niceTickStep(cgsBind10364, cgsBind10365, cgsIn2743);
  if (
    cgsIn2742.expandAutoBorderHeadroom &&
    cgsBind10366 > 0 &&
    cgsBind10365 > cgsBind10364
  ) {
    let cgsBind19475 = cgsBind10365 - cgsBind10364;
    !cgsIn2742.hasExplicitMin &&
      cgsBind10364 !== 0 &&
      (cgsBind10365 - cgsIn2742.dataMin) / cgsBind19475 >
        AUTO_DOMAIN_HEADROOM &&
      (cgsBind10364 -= cgsBind10366);
    !cgsIn2742.hasExplicitMax &&
      cgsBind10365 !== 0 &&
      (cgsIn2742.dataMax - cgsBind10364) / cgsBind19475 >
        AUTO_DOMAIN_HEADROOM &&
      (cgsBind10365 += cgsBind10366);
  }
  return (cgsIn2741.domain([cgsBind10364, cgsBind10365]), cgsIn2741);
}
export function niceTickStep(cgsIn5482: any, cgsIn5483: any, cgsIn5484: any) {
  let cgsBind15291 = _AppInitialMat()
    .domain([cgsIn5482, cgsIn5483])
    .ticks(cgsIn5484);
  for (
    let cgsBind18599 = 1;
    cgsBind18599 < cgsBind15291.length;
    cgsBind18599 += 1
  ) {
    let cgsBind19762 = cgsBind15291[cgsBind18599 - 1],
      cgsBind19763 = cgsBind15291[cgsBind18599];
    if (cgsBind19762 === undefined || cgsBind19763 === undefined) continue;
    let cgsBind19764 = Math.abs(cgsBind19763 - cgsBind19762);
    if (Number.isFinite(cgsBind19764) && cgsBind19764 > 0) return cgsBind19764;
  }
  let cgsBind15292 = Math.abs(AppInitialMat(cgsIn5482, cgsIn5483, cgsIn5484));
  return Number.isFinite(cgsBind15292) ? cgsBind15292 : 0;
}
export function expandForecastCategories(
  cgsIn3984: any,
  cgsIn3985: any,
  cgsIn3986: any,
) {
  if (cgsIn3984.length === 0 || (cgsIn3985 <= 0 && cgsIn3986 <= 0))
    return cgsIn3984;
  let cgsBind12882 = new Set(cgsIn3984),
    cgsBind12883 = (cgsIn11518) => {
      let cgsBind21926 = cgsIn11518;
      for (; cgsBind12882.has(cgsBind21926); )
        cgsBind21926 = `${cgsBind21926}_`;
      return (cgsBind12882.add(cgsBind21926), cgsBind21926);
    },
    cgsBind12884 =
      cgsIn3985 > 0
        ? Array.from(
            {
              length: cgsIn3985,
            },
            (cgsIn15302, cgsIn15303) =>
              cgsBind12883(`__trendpad_before_${cgsIn15303 + 1}__`),
          )
        : [],
    cgsBind12885 =
      cgsIn3986 > 0
        ? Array.from(
            {
              length: cgsIn3986,
            },
            (cgsIn15339, cgsIn15340) =>
              cgsBind12883(`__trendpad_after_${cgsIn15340 + 1}__`),
          )
        : [];
  return [...cgsBind12884, ...cgsIn3984, ...cgsBind12885];
}

export const Mye = expandForecastCategories;
