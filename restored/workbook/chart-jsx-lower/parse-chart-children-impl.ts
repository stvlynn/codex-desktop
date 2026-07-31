// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: parse <chart> children (legacy parse-chart-children).

import {
  isPresentationJsxElement,
  PRESENTATION_JSX_FRAGMENT,
} from "./jsx-symbols";
import {
  workbookBinding1549,
  workbookBinding1550,
  workbookBinding1551,
  workbookBinding1552,
  workbookBinding1553,
  workbookBinding1554,
  workbookBinding1555,
  workbookBinding1556,
  $J,
  workbookBinding1557,
  workbookBinding1558,
  workbookBinding1559,
  workbookBinding1560,
  workbookBinding1561,
  workbookBinding1562,
  workbookBinding1563,
  workbookBinding1564,
  workbookBinding1565,
  workbookBinding1566,
  workbookBinding1567,
  workbookBinding1568,
  workbookBinding1569,
  workbookBinding1570,
  workbookBinding1571,
  workbookBinding1572,
  workbookBinding1573,
  _Y,
} from "./prop-allowlists";
import {
  lowerLegendProps,
  lowerAxisProps,
  lowerSeriesProps,
  resolveElementName,
  lowerLegendConfig,
  lowerAxisConfig,
  mergeAxisChildren,
  lowerTitleChild,
  lowerSeriesChildren,
  lowerTrendlineProps,
  lowerDataLabelProps,
  pickAllowedProps,
  mergeChartType,
  mergeChartConfig,
  mergeDefined,
  assignIfDefined,
  omitUndefined,
  normalizeAxisOptions,
  coerceLineConfig,
  assertAllowedProps,
  assertNoChildren,
  omitKeys,
  toChildArray,
  isFormattingWhitespace,
} from "./chart-config-helpers-impl";

void isPresentationJsxElement;
void PRESENTATION_JSX_FRAGMENT;
void workbookBinding1549;
void workbookBinding1550;
void workbookBinding1551;
void workbookBinding1552;
void workbookBinding1553;
void workbookBinding1554;
void workbookBinding1555;
void workbookBinding1556;
void $J;
void workbookBinding1557;
void workbookBinding1558;
void workbookBinding1559;
void workbookBinding1560;
void workbookBinding1561;
void workbookBinding1562;
void workbookBinding1563;
void workbookBinding1564;
void workbookBinding1565;
void workbookBinding1566;
void workbookBinding1567;
void workbookBinding1568;
void workbookBinding1569;
void workbookBinding1570;
void workbookBinding1571;
void workbookBinding1572;
void workbookBinding1573;
void _Y;
void lowerLegendProps;
void lowerAxisProps;
void lowerSeriesProps;
void resolveElementName;
void lowerLegendConfig;
void lowerAxisConfig;
void mergeAxisChildren;
void lowerTitleChild;
void lowerSeriesChildren;
void lowerTrendlineProps;
void lowerDataLabelProps;
void pickAllowedProps;
void mergeChartType;
void mergeChartConfig;
void mergeDefined;
void assignIfDefined;
void omitUndefined;
void normalizeAxisOptions;
void coerceLineConfig;
void assertAllowedProps;
void assertNoChildren;
void omitKeys;
void toChildArray;
void isFormattingWhitespace;

export function parseChartChildren(chIn81: any) {
  let chBind2656 = {
    config: {},
  };
  for (let chBind2657 of chIn81) {
    if (Array.isArray(chBind2657)) {
      let chBind20311 = parseChartChildren(chBind2657);
      chBind2656.chartType = mergeChartType(
        chBind2656.chartType,
        chBind20311.chartType,
      );
      chBind2656.config =
        mergeChartConfig(chBind2656.config, chBind20311.config) ?? {};
      continue;
    }
    if (
      !(
        chBind2657 == null ||
        typeof chBind2657 == "boolean" ||
        isFormattingWhitespace(chBind2657)
      )
    ) {
      if (!isPresentationJsxElement(chBind2657))
        throw Error(
          "<chart> only accepts chart configuration nodes as children.",
        );
      if (chBind2657.type === PRESENTATION_JSX_FRAGMENT) {
        let chBind19435 = parseChartChildren(
          toChildArray(chBind2657.props.children),
        );
        chBind2656.chartType = mergeChartType(
          chBind2656.chartType,
          chBind19435.chartType,
        );
        chBind2656.config =
          mergeChartConfig(chBind2656.config, chBind19435.config) ?? {};
        continue;
      }
      if (typeof chBind2657.type != "string")
        throw Error("<chart> contains an unsupported JSX child.");
      switch (chBind2657.type) {
        case "legend": {
          let chBind18840 = lowerLegendProps(chBind2657.props);
          chBind2656.config.legend = mergeDefined(
            chBind2656.config.legend,
            chBind18840.legend,
          );
          chBind18840.hasLegend !== undefined &&
            (chBind2656.config.hasLegend = chBind18840.hasLegend);
          break;
        }
        case "data-labels":
          chBind2656.config.dataLabels = mergeDefined(
            chBind2656.config.dataLabels,
            pickAllowedProps(
              "data-labels",
              chBind2657.props,
              workbookBinding1551,
            ),
          );
          break;
        case "data-table":
          chBind2656.config.dataTable = mergeDefined(
            chBind2656.config.dataTable,
            pickAllowedProps(
              "data-table",
              chBind2657.props,
              workbookBinding1552,
            ),
          );
          break;
        case "x-axis": {
          let chBind21229 = lowerAxisConfig("x-axis", chBind2657.props);
          chBind2656.config.xAxis = mergeDefined(
            chBind2656.config.xAxis,
            chBind21229,
          );
          break;
        }
        case "y-axis": {
          let chBind21230 = lowerAxisConfig("y-axis", chBind2657.props);
          chBind2656.config.yAxis = mergeDefined(
            chBind2656.config.yAxis,
            chBind21230,
          );
          break;
        }
        case "axis": {
          let chBind18408 = lowerAxisProps(chBind2657.props);
          chBind18408.dimension === "x"
            ? (chBind2656.config.xAxis = mergeDefined(
                chBind2656.config.xAxis,
                chBind18408.axis,
              ))
            : (chBind2656.config.yAxis = mergeDefined(
                chBind2656.config.yAxis,
                chBind18408.axis,
              ));
          break;
        }
        case "series":
          chBind2656.config.series = [
            ...(chBind2656.config.series ?? []),
            lowerSeriesProps(chBind2657.props),
          ];
          break;
        case "bar":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "bar");
          chBind2656.config.barOptions = mergeDefined(
            chBind2656.config.barOptions,
            pickAllowedProps("bar", chBind2657.props, workbookBinding1561),
          );
          break;
        case "line":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "line");
          chBind2656.config.lineOptions = mergeDefined(
            chBind2656.config.lineOptions,
            pickAllowedProps("line", chBind2657.props, workbookBinding1562),
          );
          break;
        case "area":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "area");
          chBind2656.config.areaOptions = mergeDefined(
            chBind2656.config.areaOptions,
            pickAllowedProps("area", chBind2657.props, workbookBinding1563),
          );
          break;
        case "scatter":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "scatter",
          );
          chBind2656.config.scatterOptions = mergeDefined(
            chBind2656.config.scatterOptions,
            pickAllowedProps("scatter", chBind2657.props, workbookBinding1564),
          );
          break;
        case "bubble":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "bubble");
          chBind2656.config.scatterOptions = mergeDefined(
            chBind2656.config.scatterOptions,
            pickAllowedProps("bubble", chBind2657.props, workbookBinding1564),
          );
          break;
        case "radar":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "radar");
          assertAllowedProps("radar", chBind2657.props, _Y);
          assertNoChildren("radar", chBind2657.props.children);
          break;
        case "pie":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "pie");
          chBind2656.config.pieOptions = mergeDefined(
            chBind2656.config.pieOptions,
            pickAllowedProps("pie", chBind2657.props, workbookBinding1565),
          );
          break;
        case "doughnut":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "doughnut",
          );
          chBind2656.config.doughnutOptions = mergeDefined(
            chBind2656.config.doughnutOptions,
            pickAllowedProps("doughnut", chBind2657.props, workbookBinding1566),
          );
          break;
        case "treemap":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "treemap",
          );
          chBind2656.config.treemapOptions = mergeDefined(
            chBind2656.config.treemapOptions,
            pickAllowedProps("treemap", chBind2657.props, workbookBinding1567),
          );
          break;
        case "sunburst":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "sunburst",
          );
          assertAllowedProps("sunburst", chBind2657.props, _Y);
          assertNoChildren("sunburst", chBind2657.props.children);
          break;
        case "map":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "map");
          chBind2656.config.mapOptions = mergeDefined(
            chBind2656.config.mapOptions,
            pickAllowedProps("map", chBind2657.props, workbookBinding1568),
          );
          break;
        case "waterfall":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "waterfall",
          );
          chBind2656.config.barOptions = mergeDefined(
            chBind2656.config.barOptions,
            pickAllowedProps(
              "waterfall",
              chBind2657.props,
              workbookBinding1561,
            ),
          );
          break;
        case "line3D":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "line3D");
          chBind2656.config.lineOptions = mergeDefined(
            chBind2656.config.lineOptions,
            pickAllowedProps("line3D", chBind2657.props, workbookBinding1562),
          );
          break;
        case "pie3D":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "pie3D");
          chBind2656.config.pieOptions = mergeDefined(
            chBind2656.config.pieOptions,
            pickAllowedProps("pie3D", chBind2657.props, workbookBinding1565),
          );
          break;
        case "area3D":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "area3D");
          chBind2656.config.areaOptions = mergeDefined(
            chBind2656.config.areaOptions,
            pickAllowedProps("area3D", chBind2657.props, workbookBinding1563),
          );
          break;
        case "bar3D":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "bar3D");
          chBind2656.config.barOptions = mergeDefined(
            chBind2656.config.barOptions,
            pickAllowedProps("bar3D", chBind2657.props, workbookBinding1561),
          );
          break;
        case "funnel":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "funnel");
          chBind2656.config.funnelOptions = mergeDefined(
            chBind2656.config.funnelOptions,
            pickAllowedProps("funnel", chBind2657.props, workbookBinding1570),
          );
          break;
        case "histogram":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "histogram",
          );
          chBind2656.config.histogramOptions = mergeDefined(
            chBind2656.config.histogramOptions,
            pickAllowedProps(
              "histogram",
              chBind2657.props,
              workbookBinding1572,
            ),
          );
          break;
        case "boxWhisker":
        case "box-whisker":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "boxWhisker",
          );
          chBind2656.config.boxWhiskerOptions = mergeDefined(
            chBind2656.config.boxWhiskerOptions,
            pickAllowedProps(
              chBind2657.type,
              chBind2657.props,
              workbookBinding1571,
            ),
          );
          break;
        case "stock":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "stock");
          assertAllowedProps("stock", chBind2657.props, _Y);
          assertNoChildren("stock", chBind2657.props.children);
          break;
        case "surface3D":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "surface3D",
          );
          assertAllowedProps("surface3D", chBind2657.props, _Y);
          assertNoChildren("surface3D", chBind2657.props.children);
          break;
        case "ofPie":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "ofPie");
          chBind2656.config.pieOptions = mergeDefined(
            chBind2656.config.pieOptions,
            pickAllowedProps("ofPie", chBind2657.props, workbookBinding1565),
          );
          break;
        case "surface":
          chBind2656.chartType = mergeChartType(
            chBind2656.chartType,
            "surface",
          );
          assertAllowedProps("surface", chBind2657.props, _Y);
          assertNoChildren("surface", chBind2657.props.children);
          break;
        case "pareto":
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "pareto");
          assertAllowedProps("pareto", chBind2657.props, _Y);
          assertNoChildren("pareto", chBind2657.props.children);
          break;
        case "combo": {
          chBind2656.chartType = mergeChartType(chBind2656.chartType, "combo");
          assertAllowedProps("combo", chBind2657.props, workbookBinding1573);
          assertNoChildren("combo", chBind2657.props.children);
          let chBind13253 = omitUndefined(
            omitKeys(chBind2657.props, ["children"]),
          );
          chBind2656.config.barOptions = mergeDefined(
            chBind2656.config.barOptions,
            chBind13253.barOptions,
          );
          chBind2656.config.lineOptions = mergeDefined(
            chBind2656.config.lineOptions,
            chBind13253.lineOptions,
          );
          chBind2656.config.areaOptions = mergeDefined(
            chBind2656.config.areaOptions,
            chBind13253.areaOptions,
          );
          break;
        }
        case "view-3d":
          chBind2656.config.view3d = mergeDefined(
            chBind2656.config.view3d,
            pickAllowedProps("view-3d", chBind2657.props, workbookBinding1569),
          );
          break;
        default:
          throw Error(`Unsupported <chart> child <${chBind2657.type}>.`);
      }
    }
  }
  return chBind2656;
}

export const parseChartChildren = parseChartChildren;
