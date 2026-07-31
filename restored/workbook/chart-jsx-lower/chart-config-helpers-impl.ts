// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart JSX config helpers (legacy lowerLegendProps/lowerAxisProps/lowerSeriesProps/resolveElementName + chart-config-helpers–742).

import { Line } from "../line";
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

void Line;
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

export function lowerLegendProps(chIn12195: any) {
  return (
    assertAllowedProps("legend", chIn12195, workbookBinding1550),
    assertNoChildren("legend", chIn12195.children),
    lowerLegendConfig(chIn12195)
  );
}
export function lowerLegendConfig(chIn8364: any) {
  let { visible, ...rest } = chIn8364,
    chBind18868 = omitUndefined(rest),
    chBind18869 =
      visible === undefined ? (Object.keys(chBind18868).length, true) : visible;
  return {
    legend: Object.keys(chBind18868).length > 0 ? chBind18868 : undefined,
    hasLegend: chBind18869,
  };
}
export function lowerAxisProps(chIn7876: any) {
  assertAllowedProps("axis", chIn7876, workbookBinding1553);
  let chBind18356 = chIn7876.dimension;
  if (chBind18356 !== "x" && chBind18356 !== "y")
    throw Error('<axis> requires `dimension="x"` or `dimension="y"`.');
  return {
    dimension: chBind18356,
    axis: lowerAxisConfig("axis", chIn7876),
  };
}
export function lowerAxisConfig(chIn1490: any, chIn1491: any) {
  assertAllowedProps(chIn1490, chIn1491, workbookBinding1553);
  let chBind7460 =
    normalizeAxisOptions(
      omitUndefined(omitKeys(chIn1491, ["children", "dimension"])),
    ) ?? {};
  for (let chBind8026 of toChildArray(chIn1491.children)) {
    if (Array.isArray(chBind8026)) {
      let chBind18654 = mergeAxisChildren(chIn1490, chBind8026);
      chBind18654.majorGridlines !== undefined &&
        (chBind7460.majorGridlines = chBind18654.majorGridlines);
      chBind18654.minorGridlines !== undefined &&
        (chBind7460.minorGridlines = chBind18654.minorGridlines);
      continue;
    }
    if (
      chBind8026 == null ||
      typeof chBind8026 == "boolean" ||
      isFormattingWhitespace(chBind8026)
    )
      continue;
    if (!isPresentationJsxElement(chBind8026))
      throw Error(
        `<${chIn1490}> only accepts gridline configuration children.`,
      );
    if (chBind8026.type === PRESENTATION_JSX_FRAGMENT) {
      let chBind18118 = mergeAxisChildren(
        chIn1490,
        toChildArray(chBind8026.props.children),
      );
      chBind18118.majorGridlines !== undefined &&
        (chBind7460.majorGridlines = chBind18118.majorGridlines);
      chBind18118.minorGridlines !== undefined &&
        (chBind7460.minorGridlines = chBind18118.minorGridlines);
      continue;
    }
    if (
      chBind8026.type !== "major-gridlines" &&
      chBind8026.type !== "minor-gridlines"
    )
      throw Error(
        `<${chIn1490}> only accepts <major-gridlines> and <minor-gridlines> children.`,
      );
    let chBind8289 = lowerTitleChild(chBind8026.type, chBind8026.props);
    chBind8026.type === "major-gridlines"
      ? (chBind7460.majorGridlines = chBind8289)
      : (chBind7460.minorGridlines = chBind8289);
  }
  return chBind7460;
}
export function mergeAxisChildren(chIn1644: any, chIn1645: any) {
  let chBind7876 = {};
  for (let chBind8147 of chIn1645) {
    if (Array.isArray(chBind8147)) {
      let chBind18655 = mergeAxisChildren(chIn1644, chBind8147);
      chBind18655.majorGridlines !== undefined &&
        (chBind7876.majorGridlines = chBind18655.majorGridlines);
      chBind18655.minorGridlines !== undefined &&
        (chBind7876.minorGridlines = chBind18655.minorGridlines);
      continue;
    }
    if (
      chBind8147 == null ||
      typeof chBind8147 == "boolean" ||
      isFormattingWhitespace(chBind8147)
    )
      continue;
    if (!isPresentationJsxElement(chBind8147))
      throw Error(
        `<${chIn1644}> only accepts gridline configuration children.`,
      );
    if (chBind8147.type === PRESENTATION_JSX_FRAGMENT) {
      let chBind18119 = mergeAxisChildren(
        chIn1644,
        toChildArray(chBind8147.props.children),
      );
      chBind18119.majorGridlines !== undefined &&
        (chBind7876.majorGridlines = chBind18119.majorGridlines);
      chBind18119.minorGridlines !== undefined &&
        (chBind7876.minorGridlines = chBind18119.minorGridlines);
      continue;
    }
    if (
      chBind8147.type !== "major-gridlines" &&
      chBind8147.type !== "minor-gridlines"
    )
      throw Error(
        `<${chIn1644}> only accepts <major-gridlines> and <minor-gridlines> children.`,
      );
    let chBind8290 = lowerTitleChild(chBind8147.type, chBind8147.props);
    chBind8147.type === "major-gridlines"
      ? (chBind7876.majorGridlines = chBind8290)
      : (chBind7876.minorGridlines = chBind8290);
  }
  return chBind7876;
}
export function lowerTitleChild(chIn5470: any, chIn5471: any) {
  return (
    assertAllowedProps(chIn5470, chIn5471, workbookBinding1560),
    assertNoChildren(chIn5470, chIn5471.children),
    chIn5471.visible === false
      ? null
      : chIn5471.line === undefined
        ? chIn5471.stroke === undefined
          ? {
              style: "solid",
            }
          : chIn5471.stroke === null
            ? null
            : coerceLineConfig(chIn5471.stroke)
        : chIn5471.line === null
          ? null
          : coerceLineConfig(chIn5471.line)
  );
}
export function lowerSeriesProps(chIn745: any) {
  assertAllowedProps("series", chIn745, workbookBinding1554);
  let chBind5222 = omitUndefined(omitKeys(chIn745, ["children"])),
    chBind5223 = [...(chBind5222.trendlines ?? [])],
    chBind5224 = [...(chBind5222.points ?? [])],
    chBind5225 = [...(chBind5222.dataLabelOverrides ?? [])],
    chBind5226 = chBind5222.marker,
    chBind5227 = chBind5222.errorBars;
  for (let chBind6281 of toChildArray(chIn745.children)) {
    if (Array.isArray(chBind6281)) {
      let chBind18376 = lowerSeriesChildren(chBind6281);
      chBind5226 = mergeDefined(chBind5226, chBind18376.marker);
      chBind5227 = mergeDefined(chBind5227, chBind18376.errorBars);
      chBind5223.push(...chBind18376.trendlines);
      chBind5224.push(...chBind18376.points);
      chBind5225.push(...chBind18376.dataLabelOverrides);
      continue;
    }
    if (
      !(
        chBind6281 == null ||
        typeof chBind6281 == "boolean" ||
        isFormattingWhitespace(chBind6281)
      )
    ) {
      if (!isPresentationJsxElement(chBind6281))
        throw Error(
          "<series> only accepts chart series configuration children.",
        );
      if (chBind6281.type === PRESENTATION_JSX_FRAGMENT) {
        let chBind17390 = lowerSeriesChildren(
          toChildArray(chBind6281.props.children),
        );
        chBind5226 = mergeDefined(chBind5226, chBind17390.marker);
        chBind5227 = mergeDefined(chBind5227, chBind17390.errorBars);
        chBind5223.push(...chBind17390.trendlines);
        chBind5224.push(...chBind17390.points);
        chBind5225.push(...chBind17390.dataLabelOverrides);
        continue;
      }
      switch (chBind6281.type) {
        case "marker":
          chBind5226 = mergeDefined(
            chBind5226,
            pickAllowedProps("marker", chBind6281.props, workbookBinding1555),
          );
          break;
        case "trendline":
          chBind5223.push(lowerTrendlineProps(chBind6281.props));
          break;
        case "error-bars":
          chBind5227 = mergeDefined(
            chBind5227,
            pickAllowedProps(
              "error-bars",
              chBind6281.props,
              workbookBinding1557,
            ),
          );
          break;
        case "point":
          chBind5224.push(
            pickAllowedProps("point", chBind6281.props, workbookBinding1558),
          );
          break;
        case "data-label":
          chBind5225.push(
            pickAllowedProps(
              "data-label",
              chBind6281.props,
              workbookBinding1559,
            ),
          );
          break;
        default:
          throw Error(
            "<series> only accepts <marker>, <trendline>, <error-bars>, <point>, and <data-label> children.",
          );
      }
    }
  }
  let chBind5228 = {
    ...chBind5222,
    marker: chBind5226,
    errorBars: chBind5227,
  };
  return (
    chBind5223.length > 0 && (chBind5228.trendlines = chBind5223),
    chBind5224.length > 0 && (chBind5228.points = chBind5224),
    chBind5225.length > 0 && (chBind5228.dataLabelOverrides = chBind5225),
    chBind5228
  );
}
export function lowerSeriesChildren(chIn812: any) {
  let chBind5448 = {
    trendlines: [],
    points: [],
    dataLabelOverrides: [],
  };
  for (let chBind5633 of chIn812) {
    if (Array.isArray(chBind5633)) {
      let chBind16494 = lowerSeriesChildren(chBind5633);
      chBind5448.marker = mergeDefined(chBind5448.marker, chBind16494.marker);
      chBind5448.errorBars = mergeDefined(
        chBind5448.errorBars,
        chBind16494.errorBars,
      );
      chBind5448.trendlines.push(...chBind16494.trendlines);
      chBind5448.points.push(...chBind16494.points);
      chBind5448.dataLabelOverrides.push(...chBind16494.dataLabelOverrides);
      continue;
    }
    if (
      !(
        chBind5633 == null ||
        typeof chBind5633 == "boolean" ||
        isFormattingWhitespace(chBind5633)
      )
    ) {
      if (!isPresentationJsxElement(chBind5633))
        throw Error(
          "<series> only accepts chart series configuration children.",
        );
      if (chBind5633.type === PRESENTATION_JSX_FRAGMENT) {
        let chBind15690 = lowerSeriesChildren(
          toChildArray(chBind5633.props.children),
        );
        chBind5448.marker = mergeDefined(chBind5448.marker, chBind15690.marker);
        chBind5448.errorBars = mergeDefined(
          chBind5448.errorBars,
          chBind15690.errorBars,
        );
        chBind5448.trendlines.push(...chBind15690.trendlines);
        chBind5448.points.push(...chBind15690.points);
        chBind5448.dataLabelOverrides.push(...chBind15690.dataLabelOverrides);
        continue;
      }
      switch (chBind5633.type) {
        case "marker":
          chBind5448.marker = mergeDefined(
            chBind5448.marker,
            pickAllowedProps("marker", chBind5633.props, workbookBinding1555),
          );
          break;
        case "trendline":
          chBind5448.trendlines.push(lowerTrendlineProps(chBind5633.props));
          break;
        case "error-bars":
          chBind5448.errorBars = mergeDefined(
            chBind5448.errorBars,
            pickAllowedProps(
              "error-bars",
              chBind5633.props,
              workbookBinding1557,
            ),
          );
          break;
        case "point":
          chBind5448.points.push(
            pickAllowedProps("point", chBind5633.props, workbookBinding1558),
          );
          break;
        case "data-label":
          chBind5448.dataLabelOverrides.push(
            pickAllowedProps(
              "data-label",
              chBind5633.props,
              workbookBinding1559,
            ),
          );
          break;
        default:
          throw Error(
            "<series> only accepts <marker>, <trendline>, <error-bars>, <point>, and <data-label> children.",
          );
      }
    }
  }
  return chBind5448;
}
export function lowerTrendlineProps(chIn2774: any) {
  assertAllowedProps("trendline", chIn2774, workbookBinding1556);
  let chBind10440 = omitUndefined(omitKeys(chIn2774, ["children"])),
    chBind10441 = chBind10440.label;
  for (let chBind11878 of toChildArray(chIn2774.children)) {
    if (Array.isArray(chBind11878)) {
      chBind10441 = mergeDefined(chBind10441, lowerDataLabelProps(chBind11878));
      continue;
    }
    if (
      !(
        chBind11878 == null ||
        typeof chBind11878 == "boolean" ||
        isFormattingWhitespace(chBind11878)
      )
    ) {
      if (!isPresentationJsxElement(chBind11878))
        throw Error("<trendline> only accepts <trendline-label> children.");
      if (chBind11878.type === PRESENTATION_JSX_FRAGMENT) {
        chBind10441 = mergeDefined(
          chBind10441,
          lowerDataLabelProps(toChildArray(chBind11878.props.children)),
        );
        continue;
      }
      if (chBind11878.type !== "trendline-label")
        throw Error("<trendline> only accepts <trendline-label> children.");
      chBind10441 = mergeDefined(
        chBind10441,
        pickAllowedProps("trendline-label", chBind11878.props, $J),
      );
    }
  }
  return chBind10441
    ? {
        ...chBind10440,
        label: chBind10441,
      }
    : chBind10440;
}
export function lowerDataLabelProps(chIn3283: any) {
  let chBind11522;
  for (let chBind12051 of chIn3283) {
    if (Array.isArray(chBind12051)) {
      chBind11522 = mergeDefined(chBind11522, lowerDataLabelProps(chBind12051));
      continue;
    }
    if (
      !(
        chBind12051 == null ||
        typeof chBind12051 == "boolean" ||
        isFormattingWhitespace(chBind12051)
      )
    ) {
      if (!isPresentationJsxElement(chBind12051))
        throw Error("<trendline> only accepts <trendline-label> children.");
      if (chBind12051.type === PRESENTATION_JSX_FRAGMENT) {
        chBind11522 = mergeDefined(
          chBind11522,
          lowerDataLabelProps(toChildArray(chBind12051.props.children)),
        );
        continue;
      }
      if (chBind12051.type !== "trendline-label")
        throw Error("<trendline> only accepts <trendline-label> children.");
      chBind11522 = mergeDefined(
        chBind11522,
        pickAllowedProps("trendline-label", chBind12051.props, $J),
      );
    }
  }
  return chBind11522;
}
export function pickAllowedProps(
  chIn11746: any,
  chIn11747: any,
  chIn11748: any,
) {
  return (
    assertAllowedProps(chIn11746, chIn11747, chIn11748),
    assertNoChildren(chIn11746, chIn11747.children),
    omitUndefined(omitKeys(chIn11747, ["children"]))
  );
}
export function mergeChartType(chIn8237: any, chIn8238: any) {
  if (!chIn8238) return chIn8237;
  if (!chIn8237) return chIn8238;
  if (chIn8237 !== chIn8238)
    throw Error(
      `Chart type is configured more than once with conflicting values: ${chIn8237} vs ${chIn8238}.`,
    );
  return chIn8237;
}
export function mergeChartConfig(chIn1515: any, chIn1516: any) {
  if (!chIn1515)
    return chIn1516
      ? {
          ...chIn1516,
        }
      : undefined;
  if (!chIn1516)
    return {
      ...chIn1515,
    };
  let chBind7566 = {
    ...chIn1515,
    ...chIn1516,
  };
  return (
    (chBind7566.legend = mergeDefined(chIn1515.legend, chIn1516.legend)),
    (chBind7566.dataLabels = mergeDefined(
      chIn1515.dataLabels,
      chIn1516.dataLabels,
    )),
    (chBind7566.dataTable = mergeDefined(
      chIn1515.dataTable,
      chIn1516.dataTable,
    )),
    (chBind7566.xAxis = mergeDefined(chIn1515.xAxis, chIn1516.xAxis)),
    (chBind7566.yAxis = mergeDefined(chIn1515.yAxis, chIn1516.yAxis)),
    (chBind7566.barOptions = mergeDefined(
      chIn1515.barOptions,
      chIn1516.barOptions,
    )),
    (chBind7566.lineOptions = mergeDefined(
      chIn1515.lineOptions,
      chIn1516.lineOptions,
    )),
    (chBind7566.areaOptions = mergeDefined(
      chIn1515.areaOptions,
      chIn1516.areaOptions,
    )),
    (chBind7566.scatterOptions = mergeDefined(
      chIn1515.scatterOptions,
      chIn1516.scatterOptions,
    )),
    (chBind7566.pieOptions = mergeDefined(
      chIn1515.pieOptions,
      chIn1516.pieOptions,
    )),
    (chBind7566.doughnutOptions = mergeDefined(
      chIn1515.doughnutOptions,
      chIn1516.doughnutOptions,
    )),
    (chBind7566.treemapOptions = mergeDefined(
      chIn1515.treemapOptions,
      chIn1516.treemapOptions,
    )),
    (chBind7566.mapOptions = mergeDefined(
      chIn1515.mapOptions,
      chIn1516.mapOptions,
    )),
    (chBind7566.view3d = mergeDefined(chIn1515.view3d, chIn1516.view3d)),
    (chBind7566.funnelOptions = mergeDefined(
      chIn1515.funnelOptions,
      chIn1516.funnelOptions,
    )),
    (chBind7566.boxWhiskerOptions = mergeDefined(
      chIn1515.boxWhiskerOptions,
      chIn1516.boxWhiskerOptions,
    )),
    (chBind7566.series = [
      ...(chIn1515.series ?? []),
      ...(chIn1516.series ?? []),
    ]),
    omitUndefined(chBind7566)
  );
}
export function mergeDefined(chIn11808: any, chIn11809: any) {
  return chIn11808
    ? chIn11809
      ? {
          ...chIn11808,
          ...chIn11809,
        }
      : {
          ...chIn11808,
        }
    : chIn11809
      ? {
          ...chIn11809,
        }
      : undefined;
}
export function assignIfDefined(
  chIn14397: any,
  chIn14398: any,
  chIn14399: any,
) {
  chIn14399 !== undefined && (chIn14397[chIn14398] = chIn14399);
}
export function omitUndefined(chIn10092: any) {
  let chBind20573 = {};
  return (
    Object.entries(chIn10092).forEach(([chIn14546, chIn14547]) => {
      chIn14547 !== undefined && (chBind20573[chIn14546] = chIn14547);
    }),
    chBind20573
  );
}
export function normalizeAxisOptions(chIn5817: any) {
  if (!chIn5817) return;
  let { title, majorGridlines, minorGridlines, ...rest } = chIn5817,
    chBind15750 = {
      ...rest,
    };
  return (
    title != null && (chBind15750.title = title),
    majorGridlines !== undefined &&
      (chBind15750.majorGridlines =
        majorGridlines === null ? null : coerceLineConfig(majorGridlines)),
    minorGridlines !== undefined &&
      (chBind15750.minorGridlines =
        minorGridlines === null ? null : coerceLineConfig(minorGridlines)),
    omitUndefined(chBind15750)
  );
}
export function coerceLineConfig(chIn12017: any) {
  return chIn12017 instanceof Line
    ? (chIn12017.toConfig() ?? {
        style: "solid",
      })
    : chIn12017;
}
export function assertAllowedProps(
  chIn10010: any,
  chIn10011: any,
  chIn10012: any,
) {
  Object.keys(chIn10011).forEach((item) => {
    if (!chIn10012.has(item))
      throw Error(`<${chIn10010}> does not support the \`${item}\` prop.`);
  });
}
export function assertNoChildren(chIn8857: any, chIn8858: any) {
  if (
    toChildArray(chIn8858)
      .filter((item) => !isFormattingWhitespace(item))
      .some((item) => item != null && typeof item != "boolean")
  )
    throw Error(`<${chIn8857}> does not accept children.`);
}
export function omitKeys(chIn9440: any, chIn9441: any) {
  let chBind19956 = {};
  return (
    Object.entries(chIn9440).forEach(([chIn13057, chIn13058]) => {
      chIn9441.includes(chIn13057) ||
        chIn13058 === undefined ||
        (chBind19956[chIn13057] = chIn13058);
    }),
    chBind19956
  );
}
export function resolveElementName(chIn8488: any) {
  let chBind19001 =
    typeof chIn8488.name == "string" && chIn8488.name.trim().length > 0
      ? chIn8488.name
      : chIn8488.id;
  if (typeof chBind19001 != "string") return;
  let chBind19002 = chBind19001.trim();
  return chBind19002.length > 0 ? chBind19002 : undefined;
}
export function toChildArray(chIn12746: any) {
  return chIn12746 === undefined
    ? []
    : Array.isArray(chIn12746)
      ? chIn12746
      : [chIn12746];
}
export function isFormattingWhitespace(chIn11574: any) {
  return (
    typeof chIn11574 == "string" &&
    chIn11574.trim().length === 0 &&
    /[\n\r\t]/.test(chIn11574)
  );
}
