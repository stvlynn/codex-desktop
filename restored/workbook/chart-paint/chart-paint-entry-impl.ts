// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart canvas paint entry (legacy chart element entry).
// Stage-3 wave-89; kept flat under maxFlatLines.

import { ensureChartAssetInit, workbookBinding721 } from "../chart-asset";
import { paintChart } from "./paint-chart-impl";
import { cpH } from "./boundary-hooks";

export function paintChartElement(
  cpIn2074: any,
  cpIn2075: any,
  cpIn2076: any,
  cpIn2077: any,
  cpIn2078: any,
  cpIn2079: any,
  cpIn2080: any,
  cpIn2081: any,
  cpIn2082: any,
  cpIn2083: any,
  cpIn2084: any,
  cpIn2085: any,
  cpIn2086: any,
  cpIn2087: any,
) {
  let cpBind8966 = cpIn2087 ?? cpH.bh286(cpIn2074, cpIn2076, cpIn2077),
    cpBind8967 = cpIn2074.chartReference?.id,
    cpBind8968 =
      cpIn2086 ??
      (cpBind8967 ? cpIn2076.charts.getById(cpBind8967) : undefined),
    cpBind8969 = cpBind8968?.toProto() ?? null,
    cpBind8970 = cpBind8968?.buildTrendlineRenderCache();
  !cpBind8969 ||
    !cpBind8968 ||
    paintChart(cpIn2075, cpBind8969, cpBind8966, {
      themeMap: cpIn2078 ?? cpIn2077.resolveRenderContext().themeMap,
      chartHoverTargets: cpIn2079,
      hiddenSeriesIndices: cpIn2080,
      elementId:
        cpIn2074.id && cpIn2074.id.length > 0
          ? cpIn2074.id
          : `${Math.round(cpBind8966.x)}:${Math.round(cpBind8966.y)}:${Math.round(cpBind8966.width)}:${Math.round(cpBind8966.height)}`,
      elementZIndex: cpIn2074.zIndex ?? 0,
      mapCtx: cpIn2081 ?? undefined,
      threeCtx: cpIn2082 ?? undefined,
      on3DViewport: cpIn2083,
      onMapViewport: cpIn2084,
      textLayoutCollector: cpIn2085,
      titleBlockId: cpBind8969?.id ? `chartTitle:${cpBind8969.id}` : undefined,
      chartModel: cpBind8968,
      trendlineRenderCache: cpBind8970,
    });
}
export function paintChartFromProto(
  cpIn6729: any,
  cpIn6730: any,
  cpIn6731: any,
  cpIn6732: any = {},
) {
  ensureChartAssetInit();
  let cpBind17022 = cpIn6732.themeMap ?? {
      colorMap: {},
      effectMap: {},
      lineStyleMap: {},
    },
    cpBind17023 = new workbookBinding721(cpIn6730);
  paintChart(cpIn6729, cpIn6730, cpIn6731, {
    ...cpIn6732,
    themeMap: cpBind17022,
    mapCtx: cpIn6732.mapCtx ?? undefined,
    threeCtx: cpIn6732.threeCtx ?? undefined,
    chartModel: cpBind17023,
  });
}
