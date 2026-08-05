// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-42: sparkline.add/set mutation builders (legacy Sfe/Cfe/wfe/Tfe/sparklineRangeRef).

import type { LooseBag } from "./types";
import { colorInputToConfig } from "./fill-color-serialize";
import { getAttachedWorksheet } from "../worksheet-attachment";

export function buildSparklineSetOp(props: LooseBag) {
  let { group, sheetName, targetUid } = props;
  return {
    op: "sparkline.set",
    target: {
      sheet: sheetName,
      uid: targetUid ?? group.uid,
      selector: buildSparklineSelector(group, sheetName),
    },
    props: buildSparklineProps(group, sheetName, {
      includeUid: false,
    }),
  };
}
export function buildSparklineAddOp(props: LooseBag) {
  let { group, sheetName, as: _as } = props,
    opBind19782 = {
      op: "sparkline.add",
      props: buildSparklineProps(group, sheetName, {
        includeUid: true,
      }),
    };
  return (_as && (opBind19782.as = _as), opBind19782);
}
export function buildSparklineSelector(opIn10317: LooseBag, opIn10318: string) {
  return {
    uid: opIn10317.uid,
    targetRange: sparklineRangeRef(opIn10317.locationRange, opIn10318),
    sourceData: sparklineRangeRef(opIn10317.sourceData, opIn10318),
  };
}
export function buildSparklineProps(
  opIn899: LooseBag,
  opIn900: string,
  opIn901?: LooseBag,
) {
  let opBind5711 = {
    type: opIn899.type,
    targetRange: sparklineRangeRef(opIn899.locationRange, opIn900),
    sourceData: sparklineRangeRef(opIn899.sourceData, opIn900),
    lineWeight: opIn899.lineWeight,
    displayEmptyCellsAs: opIn899.displayEmptyCellsAs,
    displayHidden: opIn899.displayHidden,
    axis: {
      ...(opIn899.axis.manualMin === undefined
        ? {}
        : {
            manualMin: opIn899.axis.manualMin,
          }),
      ...(opIn899.axis.manualMax === undefined
        ? {}
        : {
            manualMax: opIn899.axis.manualMax,
          }),
      minMode: opIn899.axis.minMode,
      maxMode: opIn899.axis.maxMode,
      showAxis: opIn899.axis.showAxis,
      rightToLeft: opIn899.axis.rightToLeft,
    },
    markers: {
      show: opIn899.markers.show,
      high: opIn899.markers.high,
      low: opIn899.markers.low,
      first: opIn899.markers.first,
      last: opIn899.markers.last,
      negative: opIn899.markers.negative,
    },
  };
  opIn901?.includeUid && (opBind5711.uid = opIn899.uid);
  let opBind5712 = opIn899.dateAxisRange;
  opBind5712 &&
    (opBind5711.dateAxisRange = sparklineRangeRef(opBind5712, opIn900));
  let opBind5713 = colorInputToConfig(opIn899.seriesColor?.toConfig());
  opBind5713 !== undefined && (opBind5711.seriesColor = opBind5713);
  let opBind5714 = colorInputToConfig(opIn899.negativeColor?.toConfig());
  opBind5714 !== undefined && (opBind5711.negativeColor = opBind5714);
  let opBind5715 = colorInputToConfig(opIn899.axisColor?.toConfig());
  opBind5715 !== undefined && (opBind5711.axisColor = opBind5715);
  let opBind5716 = colorInputToConfig(opIn899.markersColor?.toConfig());
  opBind5716 !== undefined && (opBind5711.markersColor = opBind5716);
  let opBind5717 = colorInputToConfig(opIn899.firstMarkerColor?.toConfig());
  opBind5717 !== undefined && (opBind5711.firstMarkerColor = opBind5717);
  let opBind5718 = colorInputToConfig(opIn899.lastMarkerColor?.toConfig());
  opBind5718 !== undefined && (opBind5711.lastMarkerColor = opBind5718);
  let opBind5719 = colorInputToConfig(opIn899.highMarkerColor?.toConfig());
  opBind5719 !== undefined && (opBind5711.highMarkerColor = opBind5719);
  let opBind5720 = colorInputToConfig(opIn899.lowMarkerColor?.toConfig());
  return (
    opBind5720 !== undefined && (opBind5711.lowMarkerColor = opBind5720),
    opBind5711
  );
}
export function sparklineRangeRef(opIn9245: LooseBag, opIn9246: string) {
  let opBind19809 = getAttachedWorksheet(opIn9245);
  if (!opBind19809)
    throw Error("Sparkline ranges must be attached to a worksheet.");
  return {
    sheet: opBind19809.name || opIn9246,
    range: opIn9245.address,
  };
}
