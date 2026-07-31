// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: doc-op converters + alias WeakMap ensure
// (legacy Qht…ggt + Binding1964/_gt).
// Stage-3 wave-90; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { getAttachedWorksheet } from "../worksheet-attachment";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { doH } from "./boundary-hooks";

export function Qht(doIn3158: any, doIn3159: any) {
  doIn3159.fill !== undefined && (doIn3158.fill = doIn3159.fill);
  doIn3159.font && $ht(doIn3158.font, doIn3159.font);
  doIn3159.numberFormat !== undefined &&
    (doIn3158.numberFormat = doIn3159.numberFormat);
  doIn3159.wrapText !== undefined && (doIn3158.wrapText = doIn3159.wrapText);
  doIn3159.horizontalAlignment !== undefined &&
    (doIn3158.horizontalAlignment = doIn3159.horizontalAlignment);
  doIn3159.verticalAlignment !== undefined &&
    (doIn3158.verticalAlignment = doIn3159.verticalAlignment);
  doIn3159.rowHeight !== undefined && (doIn3158.rowHeight = doIn3159.rowHeight);
  doIn3159.columnWidth !== undefined &&
    (doIn3158.columnWidth = doIn3159.columnWidth);
  doIn3159.borders !== undefined && (doIn3158.borders = doIn3159.borders);
}
export function applyFontPatch(doIn6961: any, doIn6962: any) {
  doIn6962.bold !== undefined && (doIn6961.bold = doIn6962.bold);
  doIn6962.italic !== undefined && (doIn6961.italic = doIn6962.italic);
  doIn6962.size !== undefined && (doIn6961.size = doIn6962.size);
  doIn6962.name !== undefined && (doIn6961.name = doIn6962.name);
  doIn6962.color !== undefined && (doIn6961.color = doIn6962.color);
}
export function egt(doIn1752: any) {
  switch (doIn1752.type) {
    case "aboveAverage":
      return {
        ...doIn1752,
        format: doIn1752.format
          ? {
              ...doIn1752.format,
            }
          : undefined,
      };
    case "beginsWith":
    case "cellIs":
    case "containsText":
    case "endsWith":
    case "notContainsText":
      return (
        doIn1752.type,
        {
          ...doIn1752,
          format: doIn1752.format
            ? {
                ...doIn1752.format,
              }
            : undefined,
        }
      );
    case "colorScale":
      return {
        ...doIn1752,
        thresholds: doIn1752.thresholds?.map(mapCfThreshold),
      };
    case "dataBar":
      return {
        ...doIn1752,
        thresholds: doIn1752.thresholds?.map(mapCfThreshold),
      };
    case "containsBlanks":
    case "containsErrors":
    case "duplicateValues":
    case "notContainsBlanks":
    case "notContainsErrors":
    case "timePeriod":
    case "top10":
    case "uniqueValues":
      return {
        ...doIn1752,
        format: doIn1752.format
          ? {
              ...doIn1752.format,
            }
          : undefined,
      };
    case "iconSet":
      return {
        ...doIn1752,
        percent: doIn1752.percent,
        thresholds: doIn1752.thresholds?.map(mapCfThreshold),
      };
    case "expression":
      return {
        ...doIn1752,
        format: doIn1752.format
          ? {
              ...doIn1752.format,
            }
          : undefined,
      };
  }
}
export function mapCfThreshold(doIn11998: any) {
  return typeof doIn11998 == "string" || typeof doIn11998 == "number"
    ? doIn11998
    : {
        ...doIn11998,
      };
}
export function tgt(doIn4156: any) {
  if (typeof doIn4156 == "number") return doIn4156;
  if (typeof doIn4156 == "string")
    switch (doIn4156.toLowerCase()) {
      case "custom":
        return Sn.SPARKLINE_AXIS_MIN_MAX_CUSTOM;
      case "group":
        return Sn.SPARKLINE_AXIS_MIN_MAX_GROUP;
      case "individual":
        return Sn.SPARKLINE_AXIS_MIN_MAX_INDIVIDUAL;
      case "unspecified":
        return Sn.SPARKLINE_AXIS_MIN_MAX_UNSPECIFIED;
      default:
        return;
    }
}
export function ngt(doIn4157: any) {
  if (typeof doIn4157 == "number") return doIn4157;
  if (typeof doIn4157 == "string")
    switch (doIn4157.toLowerCase()) {
      case "gap":
        return spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_GAP;
      case "span":
        return spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_SPAN;
      case "zero":
        return spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_ZERO;
      case "unspecified":
        return spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_UNSPECIFIED;
      default:
        return;
    }
}
export function rgt(doIn11613: any) {
  if (doIn11613)
    return {
      ...doIn11613,
      minMode: tgt(doIn11613.minMode),
      maxMode: tgt(doIn11613.maxMode),
    };
}
export function igt(doIn13139: any) {
  return doIn13139.series.items.map((item) => item.name ?? "");
}
export function mapDeepTransform(doIn12785: any, doIn12786: any) {
  let doBind22502 = doIn12785.filter(doIn12786);
  return doBind22502.length > 0 ? doBind22502 : doIn12785;
}
export function agt(doIn1753: any, doIn1754: any, doIn1755: any) {
  let doBind8209 = doIn1754.selector;
  if (doBind8209) {
    let doBind10750 = [...doIn1753.charts.items];
    if (doBind8209.anchor) {
      let doBind21390 = JSON.stringify(doBind8209.anchor);
      doBind10750 = mapDeepTransform(
        doBind10750,
        (doIn15090) =>
          JSON.stringify(doIn15090.anchor.toConfig()) === doBind21390,
      );
    }
    if (
      (doBind8209.chartType !== undefined &&
        (doBind10750 = mapDeepTransform(
          doBind10750,
          (doIn15930) => doIn15930.type === doBind8209.chartType,
        )),
      doBind8209.title !== undefined &&
        (doBind10750 = mapDeepTransform(
          doBind10750,
          (doIn15882) => doIn15882.titleText === doBind8209.title,
        )),
      doBind8209.seriesNames &&
        doBind8209.seriesNames.length > 0 &&
        (doBind10750 = mapDeepTransform(
          doBind10750,
          (doIn13647) =>
            JSON.stringify(igt(doIn13647)) ===
            JSON.stringify(doBind8209.seriesNames),
        )),
      doBind8209.occurrence !== undefined)
    ) {
      let doBind22731 = doBind10750[doBind8209.occurrence];
      if (doBind22731) return doBind22731;
    } else if (doBind10750.length === 1) return doBind10750[0];
  }
  let doBind8210 = doIn1755(doIn1754.id);
  if (doBind8210) {
    if (doBind8210.startsWith("ch/")) {
      let doBind21819 = doBind8210.slice(3);
      return doIn1753.charts.items.find(
        (item) => item.aid === doBind8210 || item.id === doBind21819,
      );
    }
    let doBind18038 = `ch/${doBind8210}`;
    return doIn1753.charts.items.find(
      (item) => item.id === doBind8210 || item.aid === doBind18038,
    );
  }
}
export function ogt(doIn2481: any, doIn2482: any, doIn2483: any) {
  let doBind9804 = doIn2482.selector;
  if (doBind9804) {
    let doBind11116 = [...doIn2481.shapes.items];
    if (doBind9804.anchor) {
      let doBind21391 = JSON.stringify(doBind9804.anchor);
      doBind11116 = mapDeepTransform(
        doBind11116,
        (doIn15091) =>
          JSON.stringify(doIn15091.anchor.toConfig()) === doBind21391,
      );
    }
    if (doBind9804.geometry !== undefined) {
      let doBind19082 = shapeGeometryNameToProto[doBind9804.geometry];
      if (doBind19082 === undefined) return;
      doBind11116 = mapDeepTransform(doBind11116, (doIn11341) => {
        let doBind21820 = doIn11341.toProto().shape?.geometry;
        return doBind21820 !== undefined && doBind21820 === doBind19082;
      });
    }
    if (
      (doBind9804.name !== undefined &&
        (doBind11116 = mapDeepTransform(
          doBind11116,
          (doIn16193) => doIn16193.name === doBind9804.name,
        )),
      doBind9804.occurrence !== undefined)
    ) {
      let doBind22732 = doBind11116[doBind9804.occurrence];
      if (doBind22732) return doBind22732;
    } else if (doBind11116.length === 1) return doBind11116[0];
  }
  let doBind9805 = doIn2483(doIn2482.id);
  if (doBind9805)
    return doIn2481.shapes.items.find((item) => item.id === doBind9805);
}
export function sgt(doIn10636: any, doIn10637: any) {
  if (!doIn10637) return true;
  let doBind21119 = getAttachedWorksheet(doIn10636);
  return doBind21119
    ? doBind21119.name === doIn10637.sheet &&
        doIn10636.address === doIn10637.range
    : false;
}
export function cgt(doIn3261: any, doIn3262: any, doIn3263: any) {
  let doBind11489 = doIn3263(doIn3262.uid ?? doIn3262.id),
    doBind11490 = doIn3261.sparklineGroups.getAll();
  if (doBind11489) {
    let doBind21008 = doBind11490.find((item) => item.uid === doBind11489);
    if (doBind21008) return doBind21008;
    let doBind21009 = doBind11490.find((item) => item.id === doBind11489);
    if (doBind21009) return doBind21009;
  }
  let doBind11491 = doIn3262.selector;
  if (!doBind11491) return;
  let doBind11492 = doBind11490,
    doBind11493 = doIn3263(doBind11491.uid);
  return (
    doBind11493 &&
      (doBind11492 = mapDeepTransform(
        doBind11492,
        (doIn15841) =>
          doIn15841.uid === doBind11493 || doIn15841.id === doBind11493,
      )),
    (doBind11492 = mapDeepTransform(doBind11492, (doIn15482) =>
      sgt(doIn15482.locationRange, doBind11491.targetRange),
    )),
    (doBind11492 = mapDeepTransform(doBind11492, (doIn15619) =>
      sgt(doIn15619.sourceData, doBind11491.sourceData),
    )),
    doBind11491.occurrence === undefined
      ? doBind11492.length === 1
        ? doBind11492[0]
        : undefined
      : doBind11492[doBind11491.occurrence]
  );
}
export function findCommentThread(doIn1161: any, doIn1162: any, doIn1163: any) {
  let doBind6642 = doIn1163(doIn1162);
  if (doBind6642) {
    let doBind22635 = doIn1161.resolve(doBind6642);
    if (doBind22635 instanceof doH.commentThreadClass) return doBind22635;
  }
  if (typeof doIn1162 == "string") return;
  let doBind6643 = doIn1162.selector;
  if (!doBind6643) return;
  let doBind6644 = doIn1161.comments.threads.items,
    doBind6645 = doBind6643.target;
  if (doBind6645) {
    if ("cell" in doBind6645) {
      let { sheet, address } = doBind6645.cell;
      doBind6644 = doBind6644.filter(
        (item) =>
          item.target.spreadsheetCell?.sheetName === sheet &&
          item.target.spreadsheetCell?.address === address,
      );
    } else if ("range" in doBind6645) {
      let { sheet, range } = doBind6645.range;
      doBind6644 = doBind6644.filter((item) => {
        let doBind16957 = item.target.spreadsheetRange;
        if (!doBind16957 || doBind16957.sheetName !== sheet) return false;
        let doBind16958 = doBind16957.startAddress ?? doBind16957.endAddress,
          doBind16959 = doBind16957.endAddress ?? doBind16957.startAddress;
        return doBind16958
          ? (doBind16959 && doBind16959 !== doBind16958
              ? `${doBind16958}:${doBind16959}`
              : doBind16958) === range
          : false;
      });
    }
  }
  return (
    doBind6643.rootBody !== undefined &&
      (doBind6644 = doBind6644.filter(
        (item) => item.comments[0]?.text === doBind6643.rootBody,
      )),
    doBind6643.rootAuthorId !== undefined &&
      (doBind6644 = doBind6644.filter(
        (item) => item.comments[0]?.authorId === doBind6643.rootAuthorId,
      )),
    doBind6643.rootCreatedAt !== undefined &&
      (doBind6644 = doBind6644.filter(
        (item) => item.comments[0]?.createdAt === doBind6643.rootCreatedAt,
      )),
    doBind6643.occurrence === undefined
      ? doBind6644.length === 1
        ? doBind6644[0]
        : undefined
      : doBind6644[doBind6643.occurrence]
  );
}
export function findTableOnSheet(doIn7292: any, doIn7293: any, doIn7294: any) {
  if (doIn7294)
    return doIn7292.worksheets.getItem(doIn7294).tables.getItem(doIn7293);
  for (let doBind21422 of doIn7292.worksheets) {
    let doBind22307 = doBind21422.tables.getItemOrNullObject(doIn7293);
    if (!doBind22307.isNullObject) return doBind22307;
  }
  throw Error(`Table ${doIn7293} not found`);
}
export function lgt(doIn8354: any, doIn8355: any) {
  return "cell" in doIn8355
    ? {
        cell: doIn8354.worksheets
          .getItem(doIn8355.cell.sheet)
          .getRange(doIn8355.cell.address),
      }
    : {
        range: doIn8354.worksheets
          .getItem(doIn8355.range.sheet)
          .getRange(doIn8355.range.range),
      };
}
export function ugt(doIn772: any, doIn773: any, doIn774: any) {
  doIn772.type = doIn774.type;
  doIn772.locationRange = doIn773.worksheets
    .getItem(doIn774.targetRange.sheet)
    .getRange(doIn774.targetRange.range);
  doIn772.sourceData = doIn773.worksheets
    .getItem(doIn774.sourceData.sheet)
    .getRange(doIn774.sourceData.range);
  doIn772.dateAxisRange = doIn774.dateAxisRange
    ? doIn773.worksheets
        .getItem(doIn774.dateAxisRange.sheet)
        .getRange(doIn774.dateAxisRange.range)
    : undefined;
  doIn772.lineWeight = doIn774.lineWeight;
  doIn772.displayEmptyCellsAs = ngt(doIn774.displayEmptyCellsAs);
  doIn772.displayHidden = !!doIn774.displayHidden;
  doIn774.seriesColor !== undefined &&
    (doIn772.seriesColor = doIn774.seriesColor);
  doIn774.negativeColor !== undefined &&
    (doIn772.negativeColor = doIn774.negativeColor);
  doIn774.axisColor !== undefined && (doIn772.axisColor = doIn774.axisColor);
  doIn774.markersColor !== undefined &&
    (doIn772.markersColor = doIn774.markersColor);
  doIn774.firstMarkerColor !== undefined &&
    (doIn772.firstMarkerColor = doIn774.firstMarkerColor);
  doIn774.lastMarkerColor !== undefined &&
    (doIn772.lastMarkerColor = doIn774.lastMarkerColor);
  doIn774.highMarkerColor !== undefined &&
    (doIn772.highMarkerColor = doIn774.highMarkerColor);
  doIn774.lowMarkerColor !== undefined &&
    (doIn772.lowMarkerColor = doIn774.lowMarkerColor);
  doIn772.markers.show = !!doIn774.markers?.show;
  doIn772.markers.high = !!doIn774.markers?.high;
  doIn772.markers.low = !!doIn774.markers?.low;
  doIn772.markers.first = !!doIn774.markers?.first;
  doIn772.markers.last = !!doIn774.markers?.last;
  doIn772.markers.negative = !!doIn774.markers?.negative;
  let doBind5318 = rgt(doIn774.axis);
  doIn772.axis.manualMin = doBind5318?.manualMin;
  doIn772.axis.manualMax = doBind5318?.manualMax;
  doIn772.axis.minMode =
    doBind5318?.minMode ?? Sn.SPARKLINE_AXIS_MIN_MAX_UNSPECIFIED;
  doIn772.axis.maxMode =
    doBind5318?.maxMode ?? Sn.SPARKLINE_AXIS_MIN_MAX_UNSPECIFIED;
  doIn772.axis.showAxis = !!doBind5318?.showAxis;
  doIn772.axis.rightToLeft = !!doBind5318?.rightToLeft;
}
export function dgt(doIn375: any, doIn376: any) {
  if (
    ((doIn375.type = doIn376.chartType),
    mergeAnchorProps(doIn375.anchor, doIn376.anchor),
    (doIn375.title = doIn376.title ?? ""),
    (doIn375.categories = doIn376.categories ? [...doIn376.categories] : []),
    doIn375.series.clear(),
    doIn376.series)
  )
    for (let doBind8682 of doIn376.series) {
      let doBind8862 = doIn375.series.add(doBind8682.name);
      doBind8682.values && (doBind8862.values = [...doBind8682.values]);
      doBind8682.xValues && (doBind8862.xValues = [...doBind8682.xValues]);
      doBind8682.categories &&
        (doBind8862.categories = [...doBind8682.categories]);
      doBind8682.formula !== undefined &&
        (doBind8862.formula = doBind8682.formula);
      doBind8682.categoryFormula !== undefined &&
        (doBind8862.categoryFormula = doBind8682.categoryFormula);
      doBind8682.xFormula !== undefined &&
        (doBind8862.xFormula = doBind8682.xFormula);
      doBind8682.valuesFormatCode !== undefined &&
        (doBind8862.valuesFormatCode = doBind8682.valuesFormatCode);
      doBind8682.xValuesFormatCode !== undefined &&
        (doBind8862.xValuesFormatCode = doBind8682.xValuesFormatCode);
      doBind8682.fill !== undefined && (doBind8862.fill = doBind8682.fill);
      doBind8682.stroke && pgt(doBind8862.stroke, doBind8682.stroke);
      doBind8682.marker &&
        (doBind8682.marker.symbol !== undefined &&
          (doBind8862.marker.symbol = doBind8682.marker.symbol),
        doBind8682.marker.size !== undefined &&
          (doBind8862.marker.size = doBind8682.marker.size));
    }
  doIn376.hasLegend === undefined
    ? doIn376.legend !== undefined && (doIn375.hasLegend = true)
    : (doIn375.hasLegend = doIn376.hasLegend);
  doIn376.legend?.position !== undefined &&
    (doIn375.legend.position = doIn376.legend.position);
  doIn376.dataLabels?.position !== undefined &&
    (doIn375.dataLabels.position = doIn376.dataLabels.position);
  doIn375.dataLabels.showValue = !!doIn376.dataLabels?.showValue;
  doIn375.dataLabels.showSeriesName = !!doIn376.dataLabels?.showSeriesName;
  doIn375.dataLabels.showCategoryName = !!doIn376.dataLabels?.showCategoryName;
  doIn375.dataLabels.showPercent = !!doIn376.dataLabels?.showPercent;
  doIn375.dataLabels.showLeaderLines = !!doIn376.dataLabels?.showLeaderLines;
  doIn376.displayBlanksAs !== undefined &&
    (doIn375.displayBlanksAs = doIn376.displayBlanksAs);
  doIn376.barOptions &&
    (doIn376.barOptions.direction !== undefined &&
      (doIn375.barOptions.direction = doIn376.barOptions.direction),
    doIn376.barOptions.grouping !== undefined &&
      (doIn375.barOptions.grouping = doIn376.barOptions.grouping),
    doIn376.barOptions.varyColors !== undefined &&
      (doIn375.barOptions.varyColors = doIn376.barOptions.varyColors),
    doIn376.barOptions.gapWidth !== undefined &&
      (doIn375.barOptions.gapWidth = doIn376.barOptions.gapWidth),
    doIn376.barOptions.gapDepth !== undefined &&
      (doIn375.barOptions.gapDepth = doIn376.barOptions.gapDepth),
    doIn376.barOptions.overlap !== undefined &&
      (doIn375.barOptions.overlap = doIn376.barOptions.overlap),
    doIn376.barOptions.bar3dShape !== undefined &&
      (doIn375.barOptions.bar3dShape = doIn376.barOptions.bar3dShape));
  doIn376.pieOptions &&
    doIn376.pieOptions.firstSliceAngle !== undefined &&
    (doIn375.pieOptions.firstSliceAngle = doIn376.pieOptions.firstSliceAngle);
  doIn376.doughnutOptions &&
    (doIn376.doughnutOptions.holeSize !== undefined &&
      (doIn375.doughnutOptions.holeSize = doIn376.doughnutOptions.holeSize),
    doIn376.doughnutOptions.firstSliceAngle !== undefined &&
      (doIn375.doughnutOptions.firstSliceAngle =
        doIn376.doughnutOptions.firstSliceAngle));
  doIn376.plotArea && fgt(doIn375.plotArea.format, doIn376.plotArea);
  doIn376.chartArea && fgt(doIn375.chartArea.format, doIn376.chartArea);
}
export function fgt(doIn11555: any, doIn11556: any) {
  doIn11556.fill !== undefined && (doIn11555.fill = doIn11556.fill);
  doIn11556.line && pgt(doIn11555.line, doIn11556.line);
}
export function pgt(doIn7935: any, doIn7936: any) {
  doIn7936.fill === undefined
    ? doIn7936.color !== undefined && (doIn7935.color = doIn7936.color)
    : (doIn7935.fill = doIn7936.fill);
  doIn7936.style !== undefined && (doIn7935.style = doIn7936.style);
  doIn7936.width !== undefined && (doIn7935.width = doIn7936.width);
}
export function mgt(doIn3264: any, doIn3265: any) {
  doIn3265.name !== undefined && (doIn3264.name = doIn3265.name);
  doIn3265.zIndex !== undefined && (doIn3264.zIndex = doIn3265.zIndex);
  doIn3265.placeholderType !== undefined &&
    (doIn3264.placeholderType = doIn3265.placeholderType);
  doIn3265.placeholderIndex !== undefined &&
    (doIn3264.placeholderIndex = doIn3265.placeholderIndex);
  doIn3265.position && (doIn3264.position = doIn3265.position);
  doIn3265.fill !== undefined && (doIn3264.fill = doIn3265.fill);
  doIn3265.line &&
    (doIn3265.line.style !== undefined &&
      (doIn3264.line.style = doIn3265.line.style),
    doIn3265.line.width !== undefined &&
      (doIn3264.line.width = doIn3265.line.width),
    doIn3265.line.fill !== undefined &&
      (doIn3264.line.fill = doIn3265.line.fill));
}
export function mergeAnchorProps(doIn8226: any, doIn8227: any) {
  doIn8226.from = doIn8227.from;
  doIn8227.to === undefined
    ? (doIn8226.to = undefined)
    : (doIn8226.to = doIn8227.to);
  doIn8227.extent === undefined
    ? doIn8227.to === undefined && (doIn8226.extent = undefined)
    : (doIn8226.extent = doIn8227.extent);
}
export function hgt(doIn5981: any, doIn5982: any) {
  let doBind16008 = JSON.stringify(doIn5982.anchor),
    doBind16009 = doIn5981.images.items.find(
      (item) =>
        item.imageId === doIn5982.imageId &&
        JSON.stringify(item.anchor.toConfig()) === doBind16008,
    );
  if (doBind16009) return doBind16009;
  let doBind16010 = doIn5981.images.items.filter(
    (item) => item.imageId === doIn5982.imageId,
  );
  if (doBind16010.length === 1) return doBind16010[0];
}
export function ggt(doIn5657: any, doIn5658: any) {
  return doIn5658.dataUrl === undefined
    ? doIn5658.path === undefined
      ? doIn5658.uri === undefined
        ? doIn5658.prompt === undefined
          ? false
          : (doIn5657.replace({
              prompt: doIn5658.prompt,
            }),
            true)
        : (doIn5657.replace({
            uri: doIn5658.uri,
          }),
          true)
      : (doIn5657.replace({
          path: doIn5658.path,
        }),
        true)
    : (doIn5657.replace({
        dataUrl: doIn5658.dataUrl,
      }),
      true);
}
export let workbookBinding1964: WeakMap<object, Record<string, string>>;
export const ensureDocOpApplyInit = esmInit(() => {
  spreadsheetVn();
  doH.ensureCommentsInit();
  ensureChartProtoNameMapsInit();
  doH.ensureRangeClusterInit();
  workbookBinding1964 = new WeakMap();
});
