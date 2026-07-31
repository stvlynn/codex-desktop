// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: lower <chart> element (legacy dke/fke).

import { workbookBinding1549 } from "./prop-allowlists";
import { parseChartChildren } from "./parse-chart-children-impl";
import {
  resolveElementName,
  lowerLegendConfig,
  mergeChartType,
  mergeChartConfig,
  assignIfDefined,
  omitUndefined,
  normalizeAxisOptions,
  assertAllowedProps,
  toChildArray,
} from "./chart-config-helpers-impl";

void workbookBinding1549;
void parseChartChildren;
void resolveElementName;
void lowerLegendConfig;
void mergeChartType;
void mergeChartConfig;
void assignIfDefined;
void omitUndefined;
void normalizeAxisOptions;
void assertAllowedProps;
void toChildArray;

export function lowerChartElement(chIn2430: any) {
  if (chIn2430.type !== "chart")
    throw Error("Chart lowering expects a <chart> element.");
  let chBind9661 = chIn2430.props;
  assertAllowedProps("chart", chBind9661, workbookBinding1549);
  let chBind9662 =
      chBind9661.chartType === undefined ? undefined : chBind9661.chartType,
    chBind9663 = mergeChartConfig(undefined, chBind9661.config);
  chBind9663 = mergeChartConfig(chBind9663, chartPropsToConfig(chBind9661));
  let chBind9664 = parseChartChildren(toChildArray(chBind9661.children));
  chBind9663 = mergeChartConfig(chBind9663, chBind9664.config);
  let chBind9665 = mergeChartType(chBind9662, chBind9664.chartType);
  if (!chBind9665)
    throw Error(
      "<chart> requires a `chartType` prop or a dedicated chart-type child such as <bar>, <bubble>, <sunburst>, <waterfall>, <line3D>, or <combo>.",
    );
  return {
    name: resolveElementName(chBind9661),
    width: chBind9661.width,
    height: chBind9661.height,
    position: chBind9661.position,
    columnSpan: chBind9661.columnSpan,
    rowSpan: chBind9661.rowSpan,
    chartType: chBind9665,
    config:
      chBind9663 && Object.keys(chBind9663).length > 0 ? chBind9663 : undefined,
  };
}
export function chartPropsToConfig(chIn909: any) {
  let chBind5757 = {};
  assignIfDefined(chBind5757, "title", chIn909.title);
  assignIfDefined(chBind5757, "titlePlacement", chIn909.titlePlacement);
  assignIfDefined(chBind5757, "titleTextStyle", chIn909.titleTextStyle);
  assignIfDefined(chBind5757, "styleIndex", chIn909.styleIndex);
  assignIfDefined(chBind5757, "displayBlanksAs", chIn909.displayBlanksAs);
  assignIfDefined(chBind5757, "showDlblsOverMax", chIn909.showDlblsOverMax);
  assignIfDefined(chBind5757, "chartFill", chIn909.chartFill);
  assignIfDefined(chBind5757, "chartLine", chIn909.chartLine);
  assignIfDefined(chBind5757, "plotAreaFill", chIn909.plotAreaFill);
  assignIfDefined(chBind5757, "plotAreaLine", chIn909.plotAreaLine);
  assignIfDefined(
    chBind5757,
    "plotAreaManualLayout",
    chIn909.plotAreaManualLayout,
  );
  assignIfDefined(chBind5757, "categories", chIn909.categories);
  assignIfDefined(chBind5757, "series", chIn909.series);
  assignIfDefined(chBind5757, "hasLegend", chIn909.hasLegend);
  assignIfDefined(chBind5757, "dataLabels", chIn909.dataLabels);
  assignIfDefined(chBind5757, "dataTable", chIn909.dataTable);
  let chBind5758 = normalizeAxisOptions(chIn909.xAxis),
    chBind5759 = normalizeAxisOptions(chIn909.yAxis);
  chBind5758 && (chBind5757.xAxis = chBind5758);
  chBind5759 && (chBind5757.yAxis = chBind5759);
  assignIfDefined(chBind5757, "barOptions", chIn909.barOptions);
  assignIfDefined(chBind5757, "lineOptions", chIn909.lineOptions);
  assignIfDefined(chBind5757, "areaOptions", chIn909.areaOptions);
  assignIfDefined(chBind5757, "scatterOptions", chIn909.scatterOptions);
  assignIfDefined(chBind5757, "pieOptions", chIn909.pieOptions);
  assignIfDefined(chBind5757, "doughnutOptions", chIn909.doughnutOptions);
  assignIfDefined(chBind5757, "treemapOptions", chIn909.treemapOptions);
  assignIfDefined(chBind5757, "mapOptions", chIn909.mapOptions);
  assignIfDefined(chBind5757, "view3d", chIn909.view3d);
  assignIfDefined(chBind5757, "funnelOptions", chIn909.funnelOptions);
  assignIfDefined(chBind5757, "boxWhiskerOptions", chIn909.boxWhiskerOptions);
  assignIfDefined(chBind5757, "histogramOptions", chIn909.histogramOptions);
  let chBind5760 = chIn909.legend;
  if (chBind5760) {
    let chBind20993 = lowerLegendConfig(chBind5760);
    chBind20993.legend && (chBind5757.legend = chBind20993.legend);
    chBind20993.hasLegend !== undefined &&
      (chBind5757.hasLegend = chBind20993.hasLegend);
  }
  return Object.keys(chBind5757).length > 0 ? chBind5757 : undefined;
}
