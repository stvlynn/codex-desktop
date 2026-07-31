// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart option patch helpers + default chart bbox (legacy CEe/*Ee + text/axis/line/histogram patches).
// Stage-3 wave-77 cohesive charts-collection impl kept flat under maxFlatLines.

import { Line as workbookBinding431 } from "../line";
import { parseFontSizePx } from "../text-style";
import { frameUnitToEmu as workbookTt } from "../geometry-transform";
import { workbookBinding1297 } from "./cc-slots";

export function CEe(props: any) {
  return props.bbox !== undefined ||
    props.placeholderIndex !== undefined ||
    props.placeholderType !== undefined
    ? props
    : {
        ...props,
        bbox: {
          xEmu: workbookTt(workbookBinding1297.left),
          yEmu: workbookTt(workbookBinding1297.top),
          widthEmu: workbookTt(workbookBinding1297.width),
          heightEmu: workbookTt(workbookBinding1297.height),
        },
      };
}
export function applyChartTextStylePatch(ccIn2775: any, ccIn2776: any) {
  ccIn2776 &&
    (ccIn2776.fontSize !== undefined &&
      (ccIn2775.fontSize = parseFontSizePx(ccIn2776.fontSize)),
    ccIn2776.fontSizePt !== undefined &&
      (ccIn2775.fontSize = (ccIn2776.fontSizePt * 96) / 72),
    ccIn2776.rotation !== undefined && (ccIn2775.rotation = ccIn2776.rotation),
    ccIn2776.fill !== undefined && (ccIn2775.fill = ccIn2776.fill),
    ccIn2776.color !== undefined && (ccIn2775.color = ccIn2776.color),
    ccIn2776.bold !== undefined && (ccIn2775.bold = ccIn2776.bold),
    ccIn2776.italic !== undefined && (ccIn2775.italic = ccIn2776.italic),
    ccIn2776.underline !== undefined &&
      (ccIn2775.underline = ccIn2776.underline),
    ccIn2776.name !== undefined && (ccIn2775.name = ccIn2776.name),
    ccIn2776.typeface !== undefined && (ccIn2775.typeface = ccIn2776.typeface),
    ccIn2776.family !== undefined && (ccIn2775.family = ccIn2776.family),
    ccIn2776.alignment !== undefined &&
      (ccIn2775.alignment = ccIn2776.alignment));
}
export function wEe(ccIn5555: any, ccIn5556: any) {
  ccIn5556 &&
    (ccIn5556.position !== undefined && (ccIn5555.position = ccIn5556.position),
    ccIn5556.overlay !== undefined && (ccIn5555.overlay = ccIn5556.overlay),
    ccIn5556.fill !== undefined && (ccIn5555.fill = ccIn5556.fill),
    ccIn5556.line === undefined
      ? ccIn5556.stroke !== undefined && (ccIn5555.stroke = ccIn5556.stroke)
      : (ccIn5555.stroke = ccIn5556.line),
    ccIn5556.textStyle &&
      applyChartTextStylePatch(ccIn5555.textStyle, ccIn5556.textStyle));
}
export function TEe(ccIn2907: any, ccIn2908: any) {
  ccIn2908 &&
    (ccIn2908.position !== undefined && (ccIn2907.position = ccIn2908.position),
    ccIn2908.showValue !== undefined &&
      (ccIn2907.showValue = ccIn2908.showValue),
    ccIn2908.showSeriesName !== undefined &&
      (ccIn2907.showSeriesName = ccIn2908.showSeriesName),
    ccIn2908.showCategoryName !== undefined &&
      (ccIn2907.showCategoryName = ccIn2908.showCategoryName),
    ccIn2908.showPercent !== undefined &&
      (ccIn2907.showPercent = ccIn2908.showPercent),
    ccIn2908.showLeaderLines !== undefined &&
      (ccIn2907.showLeaderLines = ccIn2908.showLeaderLines),
    ccIn2908.fill !== undefined && (ccIn2907.fill = ccIn2908.fill),
    ccIn2908.line === undefined
      ? ccIn2908.stroke !== undefined && (ccIn2907.stroke = ccIn2908.stroke)
      : (ccIn2907.stroke = ccIn2908.line),
    ccIn2908.textStyle &&
      applyChartTextStylePatch(ccIn2907.textStyle, ccIn2908.textStyle));
}
export function applyChartAxisPatch(ccIn565: any, ccIn566: any) {
  if (!ccIn566) return;
  let ccBind4524 =
      typeof ccIn566.deleted == "boolean" ||
      typeof ccIn566.visible == "boolean",
    ccBind4525 = Object.keys(ccIn566).some(
      (item) => item !== "deleted" && item !== "visible",
    );
  !ccBind4524 && ccBind4525 && (ccIn565.deleted = false);
  ccIn566.axisType !== undefined && (ccIn565.axisType = ccIn566.axisType);
  ccIn566.title !== undefined &&
    (typeof ccIn566.title == "string"
      ? (ccIn565.title.text = ccIn566.title)
      : (ccIn566.title.text !== undefined &&
          (ccIn565.title.text = ccIn566.title.text),
        ccIn566.title.textStyle &&
          applyChartTextStylePatch(
            ccIn565.title.textStyle,
            ccIn566.title.textStyle,
          )));
  ccIn566.numberFormatCode !== undefined &&
    (ccIn565.numberFormatCode = ccIn566.numberFormatCode);
  ccIn566.numberFormatSourceLinked !== undefined &&
    (ccIn565.numberFormatSourceLinked = ccIn566.numberFormatSourceLinked);
  ccIn566.min !== undefined && (ccIn565.min = ccIn566.min);
  ccIn566.max !== undefined && (ccIn565.max = ccIn566.max);
  ccIn566.logBase !== undefined && (ccIn565.logBase = ccIn566.logBase);
  ccIn566.majorUnit !== undefined && (ccIn565.majorUnit = ccIn566.majorUnit);
  ccIn566.minorUnit !== undefined && (ccIn565.minorUnit = ccIn566.minorUnit);
  ccIn566.deleted !== undefined && (ccIn565.deleted = ccIn566.deleted);
  ccIn566.position !== undefined && (ccIn565.position = ccIn566.position);
  ccIn566.orientation !== undefined &&
    (ccIn565.orientation = ccIn566.orientation);
  ccIn566.majorTickMark !== undefined &&
    (ccIn565.majorTickMark = ccIn566.majorTickMark);
  ccIn566.minorTickMark !== undefined &&
    (ccIn565.minorTickMark = ccIn566.minorTickMark);
  ccIn566.tickLabelPosition !== undefined &&
    (ccIn565.tickLabelPosition = ccIn566.tickLabelPosition);
  ccIn566.tickLabelInterval !== undefined &&
    (ccIn565.tickLabelInterval = ccIn566.tickLabelInterval);
  ccIn566.tickMarkInterval !== undefined &&
    (ccIn565.tickMarkInterval = ccIn566.tickMarkInterval);
  ccIn566.tickLabelDistanceFromAxis !== undefined &&
    (ccIn565.tickLabelDistanceFromAxis = ccIn566.tickLabelDistanceFromAxis);
  ccIn566.crossBetween !== undefined &&
    (ccIn565.crossBetween = ccIn566.crossBetween);
  ccIn566.crosses !== undefined && (ccIn565.crosses = ccIn566.crosses);
  ccIn566.crossesAt !== undefined && (ccIn565.crossesAt = ccIn566.crossesAt);
  ccIn566.line !== undefined &&
    (ccIn565.line = new workbookBinding431(ccIn566.line));
  ccIn566.majorGridlines !== undefined &&
    (ccIn565.majorGridlines =
      ccIn566.majorGridlines === null
        ? undefined
        : new workbookBinding431(ccIn566.majorGridlines));
  ccIn566.minorGridlines !== undefined &&
    (ccIn565.minorGridlines =
      ccIn566.minorGridlines === null
        ? undefined
        : new workbookBinding431(ccIn566.minorGridlines));
  ccIn566.textStyle &&
    applyChartTextStylePatch(ccIn565.textStyle, ccIn566.textStyle);
}
export function EEe(ccIn5336: any, ccIn5337: any) {
  ccIn5337 &&
    (ccIn5337.visible !== undefined && (ccIn5336.visible = ccIn5337.visible),
    ccIn5337.showLegendKey !== undefined &&
      (ccIn5336.showLegendKey = ccIn5337.showLegendKey),
    ccIn5337.fill !== undefined && (ccIn5336.fill = ccIn5337.fill),
    ccIn5337.line === undefined
      ? ccIn5337.stroke !== undefined && (ccIn5336.stroke = ccIn5337.stroke)
      : (ccIn5336.stroke = ccIn5337.line),
    ccIn5337.textStyle &&
      applyChartTextStylePatch(ccIn5336.textStyle, ccIn5337.textStyle));
}
export function applyChartLinePatch(ccIn10215: any, ccIn10216: any) {
  if (!ccIn10216) return;
  let ccBind20682 = new workbookBinding431(ccIn10216);
  ccIn10215.width = ccBind20682.width;
  ccIn10215.fill = ccBind20682.fill.toConfig();
  ccIn10215.style = ccBind20682.style;
}
export function DEe(ccIn4387: any, ccIn4388: any) {
  ccIn4388.direction !== undefined && (ccIn4387.direction = ccIn4388.direction);
  ccIn4388.grouping !== undefined && (ccIn4387.grouping = ccIn4388.grouping);
  ccIn4388.varyColors !== undefined &&
    (ccIn4387.varyColors = ccIn4388.varyColors);
  ccIn4388.gapWidth !== undefined && (ccIn4387.gapWidth = ccIn4388.gapWidth);
  ccIn4388.gapDepth !== undefined && (ccIn4387.gapDepth = ccIn4388.gapDepth);
  ccIn4388.overlap !== undefined && (ccIn4387.overlap = ccIn4388.overlap);
  ccIn4388.bar3dShape !== undefined &&
    (ccIn4387.bar3dShape = ccIn4388.bar3dShape);
}
export function OEe(ccIn8259: any, ccIn8260: any) {
  ccIn8260 &&
    (ccIn8260.grouping !== undefined && (ccIn8259.grouping = ccIn8260.grouping),
    ccIn8260.smooth !== undefined && (ccIn8259.smooth = ccIn8260.smooth),
    ccIn8260.varyColors !== undefined &&
      (ccIn8259.varyColors = ccIn8260.varyColors));
}
export function kEe(ccIn9772: any, ccIn9773: any) {
  ccIn9773 &&
    (ccIn9773.grouping !== undefined && (ccIn9772.grouping = ccIn9773.grouping),
    ccIn9773.varyColors !== undefined &&
      (ccIn9772.varyColors = ccIn9773.varyColors));
}
export function AEe(ccIn10089: any, ccIn10090: any) {
  ccIn10090 &&
    (ccIn10090.style !== undefined && (ccIn10089.style = ccIn10090.style),
    ccIn10090.varyColors !== undefined &&
      (ccIn10089.varyColors = ccIn10090.varyColors));
}
export function jEe(ccIn11285: any, ccIn11286: any) {
  ccIn11286 &&
    ccIn11286.firstSliceAngle !== undefined &&
    (ccIn11285.firstSliceAngle = ccIn11286.firstSliceAngle);
}
export function MEe(ccIn10806: any, ccIn10807: any) {
  ccIn10807 &&
    ccIn10807.parentLabelLayout !== undefined &&
    (ccIn10806.parentLabelLayout = ccIn10807.parentLabelLayout);
}
export function NEe(ccIn4349: any, ccIn4350: any) {
  ccIn4350 &&
    (ccIn4350.mapArea !== undefined && (ccIn4349.mapArea = ccIn4350.mapArea),
    ccIn4350.projection !== undefined &&
      (ccIn4349.projection = ccIn4350.projection),
    ccIn4350.labelLayout !== undefined &&
      (ccIn4349.labelLayout = ccIn4350.labelLayout),
    ccIn4350.dataLevel !== undefined &&
      (ccIn4349.dataLevel = ccIn4350.dataLevel),
    ccIn4350.showUnknown !== undefined &&
      (ccIn4349.showUnknown = ccIn4350.showUnknown),
    ccIn4350.onlyRegionsWithData !== undefined &&
      (ccIn4349.onlyRegionsWithData = ccIn4350.onlyRegionsWithData));
}
export function PEe(ccIn6811: any, ccIn6812: any) {
  ccIn6812 &&
    (ccIn6812.rotX !== undefined && (ccIn6811.rotX = ccIn6812.rotX),
    ccIn6812.rotY !== undefined && (ccIn6811.rotY = ccIn6812.rotY),
    ccIn6812.perspective !== undefined &&
      (ccIn6811.perspective = ccIn6812.perspective),
    ccIn6812.rightAngleAxes !== undefined &&
      (ccIn6811.rightAngleAxes = ccIn6812.rightAngleAxes));
}
export function FEe(ccIn9289: any, ccIn9290: any) {
  ccIn9290 &&
    (ccIn9290.holeSize !== undefined && (ccIn9289.holeSize = ccIn9290.holeSize),
    ccIn9290.firstSliceAngle !== undefined &&
      (ccIn9289.firstSliceAngle = ccIn9290.firstSliceAngle));
}
export function IEe(ccIn12371: any, ccIn12372: any) {
  ccIn12372 &&
    ccIn12372.gapWidth !== undefined &&
    (ccIn12371.gapWidth = ccIn12372.gapWidth);
}
export function LEe(ccIn4845: any, ccIn4846: any) {
  ccIn4846 &&
    (ccIn4846.showMeanLine !== undefined &&
      (ccIn4845.showMeanLine = ccIn4846.showMeanLine),
    ccIn4846.showMeanMarker !== undefined &&
      (ccIn4845.showMeanMarker = ccIn4846.showMeanMarker),
    ccIn4846.showNonOutliers !== undefined &&
      (ccIn4845.showNonOutliers = ccIn4846.showNonOutliers),
    ccIn4846.showOutliers !== undefined &&
      (ccIn4845.showOutliers = ccIn4846.showOutliers),
    ccIn4846.quartileMethod !== undefined &&
      (ccIn4845.quartileMethod = ccIn4846.quartileMethod));
}
export function applyHistogramOptionsPatch(ccIn3244: any, ccIn3245: any) {
  if (!ccIn3245) return;
  let ccBind11447 = {
      ...(ccIn3244.histogramOptions ?? {}),
    },
    ccBind11448 = false;
  ccIn3245.binWidth !== undefined &&
    ((ccBind11447.binWidth = ccIn3245.binWidth), (ccBind11448 = true));
  ccIn3245.binCount !== undefined &&
    ((ccBind11447.binCount = ccIn3245.binCount), (ccBind11448 = true));
  ccIn3245.underflow !== undefined &&
    ((ccBind11447.underflow = ccIn3245.underflow), (ccBind11448 = true));
  ccIn3245.overflow !== undefined &&
    ((ccBind11447.overflow = ccIn3245.overflow), (ccBind11448 = true));
  ccIn3245.intervalClosed !== undefined &&
    ((ccBind11447.intervalClosed = ccIn3245.intervalClosed),
    (ccBind11448 = true));
  ccIn3245.aggregated !== undefined &&
    ((ccBind11447.aggregated = ccIn3245.aggregated), (ccBind11448 = true));
  ccBind11448 && (ccIn3244.histogramOptions = ccBind11447);
}
