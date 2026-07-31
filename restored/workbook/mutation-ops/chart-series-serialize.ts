// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: chart series/stroke/marker serializers (legacy rfe/ife/ofe/sfe).

import type { LooseBag } from "./types";
import { fillToConfig } from "./chart-fill-config";

export function mapChartSeries(opIn12916: LooseBag[]): LooseBag[] {
  return opIn12916.length === 0
    ? []
    : opIn12916.map((item) => serializeChartSeriesItem(item));
}
export function serializeChartSeriesItem(opIn2436: LooseBag): LooseBag {
  let opBind9681 = {
      name: opIn2436.name,
    },
    opBind9682 = opIn2436.values;
  opBind9682 !== undefined &&
    (opBind9681.values = [...opBind9682]);
  let opBind9683 = opIn2436.xValues;
  opBind9683 !== undefined &&
    (opBind9681.xValues = [...opBind9683]);
  let opBind9684 = opIn2436.categories;
  opBind9684.length > 0 &&
    (opBind9681.categories = [...opBind9684]);
  opIn2436.formula !== undefined &&
    (opBind9681.formula = opIn2436.formula);
  opIn2436.categoryFormula !== undefined &&
    (opBind9681.categoryFormula = opIn2436.categoryFormula);
  opIn2436.xFormula !== undefined &&
    (opBind9681.xFormula = opIn2436.xFormula);
  opIn2436.valuesFormatCode !== undefined &&
    (opBind9681.valuesFormatCode = opIn2436.valuesFormatCode);
  opIn2436.xValuesFormatCode !== undefined &&
    (opBind9681.xValuesFormatCode =
      opIn2436.xValuesFormatCode);
  let opBind9685 = serializeChartStrokeAlias(opIn2436.stroke);
  opBind9685 && (opBind9681.stroke = opBind9685);
  let opBind9686 = serializeChartMarker(opIn2436.marker);
  opBind9686 && (opBind9681.marker = opBind9686);
  let opBind9687 = fillToConfig(opIn2436.fill);
  return (
    opBind9687 !== undefined &&
      (opBind9681.fill = opBind9687),
    opBind9681
  );
}
function serializeChartStrokeAlias(opIn15642: LooseBag): LooseBag | undefined {
  return serializeChartStroke(opIn15642);
}
export function serializeChartStrokeAlias(opIn15642: LooseBag): LooseBag | undefined {
  return serializeChartStroke(opIn15642);
}
export function serializeChartStroke(opIn3917: LooseBag): LooseBag | undefined {
  let opBind12799 = fillToConfig(opIn3917.fill),
    opBind12800 =
      opBind12799 === undefined &&
      typeof opIn3917.color == "string"
        ? opIn3917.color
        : undefined,
    opBind12801 =
      typeof opIn3917.style == "string"
        ? opIn3917.style
        : undefined,
    opBind12802 =
      typeof opIn3917.width == "number"
        ? opIn3917.width
        : undefined;
  if (
    opBind12799 === undefined &&
    opBind12800 === undefined &&
    opBind12801 === undefined &&
    opBind12802 === undefined
  )
    return;
  let opBind12803 = {};
  return (
    opBind12799 !== undefined &&
      (opBind12803.fill = opBind12799),
    opBind12800 !== undefined &&
      (opBind12803.color = opBind12800),
    opBind12801 !== undefined &&
      (opBind12803.style = opBind12801),
    opBind12802 !== undefined &&
      (opBind12803.width = opBind12802),
    opBind12803
  );
}
export function serializeChartMarker(opIn8563: LooseBag): LooseBag | undefined {
  let opBind19061 = opIn8563.symbol,
    opBind19062 = opIn8563.size;
  if (opBind19061 === undefined && opBind19062 === undefined)
    return;
  let opBind19063 = {};
  return (
    opBind19061 !== undefined &&
      (opBind19063.symbol = opBind19061),
    opBind19062 !== undefined &&
      (opBind19063.size = opBind19062),
    opBind19063
  );
}
