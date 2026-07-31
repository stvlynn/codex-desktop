// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sheet chart overlay painter (legacy zCe/BCe/VCe).
// Stage-3 wave-106. zCe is the paintCharts dispatcher (peelable, not glue).

import { pchH } from "./boundary-hooks-charts";

void pchH;

function normalizeSheetKey(name: any) {
  if (!name) return null;
  let trimmed = String(name).trim();
  return trimmed ? trimmed.toLowerCase() : null;
}

export function paintCharts(
  pchIn1447: any,
  pchIn1448: any,
  pchIn1449: any,
  pchIn1450: any,
  pchIn1451: any,
  pchIn1452: any,
  pchIn1453: any,
  pchIn1454: any,
  pchIn1455: any,
  pchIn1456: any,
  pchIn1457: any,
  pchIn1458: any,
  pchIn1459: any,
  pchIn1460: any,
  pchIn1461: any,
) {
  let pchBind7367 = pchIn1448.charts.items;
  if (pchBind7367.length === 0) return;
  let pchBind7368 = sheetMapByName(pchIn1449);
  for (let pchBind8134 of pchBind7367) {
    let pchBind8255 = pchBind8134.toDrawingProto({
      preferPreview: true,
    });
    if (!pchBind8255.chart || !pchBind8255.fromAnchor) continue;
    hydrateChartSeries(pchBind8255.chart, pchIn1448, pchBind7368);
    let pchBind8256 = pchBind8134.resolveBoundsPx(
      {
        columnOffsets: pchIn1450,
        rowOffsets: pchIn1451,
      },
      {
        preferPreview: true,
      },
    );
    if (!pchBind8256) continue;
    let pchBind8257 = 40 + pchBind8256.x - pchIn1452,
      pchBind8258 = 20 + pchBind8256.y - pchIn1453,
      pchBind8259 = pchBind8257 + pchBind8256.width,
      pchBind8260 = pchBind8258 + pchBind8256.height;
    if (
      pchBind8259 < 0 ||
      pchBind8260 < 0 ||
      pchBind8257 > pchIn1454 ||
      pchBind8258 > pchIn1455
    )
      continue;
    let pchBind8261 = {
      x: pchBind8257,
      y: pchBind8258,
      width: pchBind8256.width,
      height: pchBind8256.height,
    };
    pchBind8261.width <= 0 ||
      pchBind8261.height <= 0 ||
      (pchIn1447.save(),
      pchIn1447.beginPath(),
      pchIn1447.rect(
        pchBind8261.x,
        pchBind8261.y,
        pchBind8261.width,
        pchBind8261.height,
      ),
      pchIn1447.clip(),
      pchHelper584(pchIn1447, pchBind8255.chart, pchBind8261, {
        themeMap: pchIn1456,
        excelDefaults: true,
        textLayoutCollector: pchIn1458,
        chartHoverTargets: pchIn1459,
        elementId: pchBind8255.chart?.id ?? undefined,
        titleBlockId: pchBind8255.chart?.id
          ? `chartTitle:${pchBind8255.chart.id}`
          : undefined,
        mapCtx: pchIn1460 ?? undefined,
        onMapViewport: pchIn1461,
      }),
      pchIn1447.restore());
  }
}
export function hydrateChartSeries(
  pchIn2787: any,
  pchIn2788: any,
  pchIn2789: any,
) {
  if (!(!pchIn2787 || !Array.isArray(pchIn2787.series))) {
    for (let pchBind16097 of pchIn2787.series)
      if (pchBind16097) {
        if (pchBind16097.formula) {
          let pchBind22053 = pchH.evalSeriesFormula(
            pchBind16097.formula,
            pchIn2789,
            pchIn2788,
          );
          pchBind22053.length > 0 && (pchBind16097.values = pchBind22053);
        }
        if (pchBind16097.categoryFormula) {
          let pchBind21681 = pchHelper586(
            pchBind16097.categoryFormula,
            pchIn2789,
            pchIn2788,
          );
          pchBind21681.length > 0 && (pchBind16097.categories = pchBind21681);
        }
      }
    if (pchIn2787.categories.length === 0) {
      let pchBind17212 =
        pchIn2787.series.find((item) => item.categories.length > 0)
          ?.categories ??
        (() => {
          let pchBind21682 = pchIn2787.series[0]?.categoryFormula;
          return pchBind21682
            ? pchHelper586(pchBind21682, pchIn2789, pchIn2788)
            : [];
        })();
      pchBind17212.length > 0 && (pchIn2787.categories = [...pchBind17212]);
    }
  }
}
export function sheetMapByName(props: any) {
  let pchBind20823 = new Map();
  for (let pchBind22483 of props.sheets) {
    let pchBind22875 = normalizeSheetKey(pchBind22483?.name);
    pchBind22875 && pchBind20823.set(pchBind22875, pchBind22483);
  }
  return pchBind20823;
}

/** Legacy aliases. */
export const zCe = paintCharts;
export const BCe = hydrateChartSeries;
export const VCe = sheetMapByName;
