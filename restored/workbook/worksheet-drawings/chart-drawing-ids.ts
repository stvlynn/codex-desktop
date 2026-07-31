// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: chart drawing id helpers (clone/hash/hydrate/materialize).

import { hashToBase36Id, randomBase36Id } from "../stable-id";

export function cloneDrawingJson(value: unknown): any {
  return JSON.parse(JSON.stringify(value));
}
export function hashWorksheetChartId(drawing: unknown, index: unknown): string {
  let cloned = cloneDrawingJson(drawing);
  return (
    cloned.chart && (cloned.chart.id = ""),
    hashToBase36Id(`worksheet-chart:${index}:${JSON.stringify(cloned)}`, 8)
  );
}
export function newChartSeriesId(): string {
  return `series-${randomBase36Id()}`;
}
export function hydrateChartDrawingSeries(
  drawing: any,
  options: any,
  index: number = 0,
): {
  id: string;
  drawing: any;
  seriesById: Record<string, any>;
  seriesOrder: string[];
} {
  let cloned = cloneDrawingJson(drawing),
    chart = cloned.chart ?? {},
    id = chart.id?.trim() ? chart.id : hashWorksheetChartId(drawing, index);
  chart.id = id;
  chart.series ??= [];
  let seriesOrder: string[] = [],
    seriesById: Record<string, any> = {},
    series = [...(chart.series ?? [])],
    preferred = options?.seriesOrder ?? [];
  for (let i = 0; i < series.length; i += 1) {
    let item = series[i];
    if (!item) continue;
    let seriesId = preferred[i] ?? newChartSeriesId();
    seriesOrder.push(seriesId);
    seriesById[seriesId] = item;
  }
  return (
    (chart.series = []),
    (cloned.chart = chart),
    {
      id,
      drawing: cloned,
      seriesById,
      seriesOrder,
    }
  );
}
export function materializeChartDrawing(state: {
  drawing: any;
  seriesOrder: string[];
  seriesById: Record<string, any>;
}): any {
  let drawing = cloneDrawingJson(state.drawing);
  if (!drawing.chart) return drawing;
  let series = state.seriesOrder
    .map((item) => state.seriesById[item])
    .filter((item) => !!item);
  return ((drawing.chart.series = series), drawing);
}
