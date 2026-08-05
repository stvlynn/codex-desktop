// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: chart.add / chart.set mutation builders (legacy Qde/$de).

import type { ChartMutationProps, LooseBag } from "./types";
import { mapChartSeries } from "./chart-series-serialize";
import {
  serializeDataLabels,
  serializeBarOptions,
  serializePieOptions,
  serializeDoughnutOptions,
  serializeChartAreaStyle,
} from "./chart-options-serialize";

export function buildChartAddOp(props: ChartMutationProps): LooseBag | null {
  let { sheet, chart, fallbackType, as: _as } = props,
    opBind17883 = chart.type ?? fallbackType;
  if (!opBind17883) return null;
  let opBind17884 = {
    op: "chart.add",
    sheet,
    props: buildChartProps(chart, opBind17883, {
      includeId: true,
    }),
  };
  return (_as && (opBind17884.as = _as), opBind17884);
}
export function buildChartSetOp(opIn7508: ChartMutationProps): LooseBag | null {
  let { sheet, chart } = opIn7508,
    opBind17986 = chart.type;
  return opBind17986
    ? {
        op: "chart.set",
        target: {
          sheet,
          selector: buildChartSelector(chart),
        },
        props: buildChartProps(chart, opBind17986, {
          includeId: false,
        }),
      }
    : null;
}
export function buildChartProps(
  opIn2033: LooseBag,
  opIn2034: string,
  opIn2035?: { includeId?: boolean },
): LooseBag {
  let opBind8873 = {
    chartType: opIn2034,
    anchor: cloneChartAnchor(opIn2033.anchor),
  };
  opIn2035?.includeId && (opBind8873.id = opIn2033.id);
  opIn2033.titleText !== undefined && (opBind8873.title = opIn2033.titleText);
  let opBind8874 = opIn2033.categories;
  opBind8874.length > 0 && (opBind8873.categories = [...opBind8874]);
  let opBind8875 = mapChartSeries(opIn2033.series.items);
  opBind8875.length > 0 && (opBind8873.series = opBind8875);
  opIn2033.hasLegend !== undefined &&
    (opBind8873.hasLegend = opIn2033.hasLegend);
  let opBind8876 = opIn2033.legend.position;
  opBind8876 !== undefined &&
    (opBind8873.legend = {
      position: opBind8876,
    });
  let opBind8877 = serializeDataLabels(opIn2033);
  opBind8877 && (opBind8873.dataLabels = opBind8877);
  opIn2033.displayBlanksAs !== undefined &&
    (opBind8873.displayBlanksAs = opIn2033.displayBlanksAs);
  let opBind8878 = serializeBarOptions(opIn2033);
  opBind8878 && (opBind8873.barOptions = opBind8878);
  let opBind8879 = serializePieOptions(opIn2033);
  opBind8879 && (opBind8873.pieOptions = opBind8879);
  let opBind8880 = serializeDoughnutOptions(opIn2033);
  opBind8880 && (opBind8873.doughnutOptions = opBind8880);
  let opBind8881 = serializeChartAreaStyle(
    opIn2033.plotAreaFill,
    opIn2033.plotAreaLine,
  );
  opBind8881 && (opBind8873.plotArea = opBind8881);
  let opBind8882 = serializeChartAreaStyle(
    opIn2033.chartFill,
    opIn2033.chartLine,
  );
  return (opBind8882 && (opBind8873.chartArea = opBind8882), opBind8873);
}
export function buildChartSelector(opIn8139: LooseBag): LooseBag {
  let opBind18641 = opIn8139.series.items.map((item) => item.name);
  return {
    anchor: cloneChartAnchor(opIn8139.anchor),
    chartType: opIn8139.type,
    title: opIn8139.titleText,
    ...(opBind18641.length > 0
      ? {
          seriesNames: opBind18641,
        }
      : {}),
  };
}
export function cloneChartAnchor(opIn9306: LooseBag): LooseBag {
  let opBind19873 = opIn9306.from,
    opBind19874 = opIn9306.to,
    opBind19875 = opIn9306.extent,
    opBind19876 = {
      from: {
        ...opBind19873,
      },
    };
  return (
    opBind19874 &&
      (opBind19876.to = {
        ...opBind19874,
      }),
    opBind19875 &&
      (opBind19876.extent = {
        ...opBind19875,
      }),
    opBind19876
  );
}
