// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: ChartReference slide element + REe aid (legacy REe/Binding1297–1299).
// Stage-3 wave-77 cohesive charts-collection impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { j, Qt } from "../presentation-protobuf";
import {
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "../slide-element";
import {
  composeScopedId,
  ensureStableIdClusterInit as workbookBinding647,
} from "../stable-id";
import { frameUnitToEmu as workbookTt } from "../geometry-transform";
import { ensureTextStyleInit as workbookBt } from "../text-style";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  Ohe,
  Fhe,
  Ghe,
  Ihe,
  workbookBinding705,
  workbookBinding706,
  workbookBinding707,
  workbookBinding708,
  workbookBinding709,
  workbookBinding711,
  workbookBinding712,
  workbookBinding713,
} from "../chart-elements";
import {
  CEe,
  wEe,
  TEe,
  EEe,
  DEe,
  OEe,
  kEe,
  AEe,
  jEe,
  MEe,
  NEe,
  PEe,
  FEe,
  IEe,
  LEe,
  applyChartTextStylePatch,
  applyChartAxisPatch,
  applyChartLinePatch,
  applyHistogramOptionsPatch,
} from "./chart-opts-impl";
import {
  workbookBinding1297,
  workbookBinding1298,
  workbookS,
} from "./cc-slots";

export function REe(ccIn15118: any, ccIn15119: any, ccIn15120: any) {
  return composeScopedId(ccIn15118, ccIn15119, ccIn15120);
}
export const workbookBinding1299 = esmInit(() => {
  Qt();
  workbookB();
  workbookBinding712();
  workbookBinding707();
  Ohe();
  Fhe();
  Ghe();
  Ihe();
  workbookBinding432();
  workbookBt();
  workbookBinding647();
  workbookBinding1297 = {
    left: 60,
    top: 80,
    width: 640,
    height: 360,
  };
  workbookBinding1298 = class extends _workbookZ {
    type = "chart";
    #e;
    constructor(ccIn3374, ccIn3375) {
      super(ccIn3374, CEe(ccIn3375));
      (this.data.type === undefined ||
        this.data.type === j.ELEMENT_TYPE_UNSPECIFIED) &&
        (this.data.type = j.ELEMENT_TYPE_CHART_REFERENCE);
      let ccBind11719 = ccIn3375.chartReference?.id
        ? this.context.getChartById(ccIn3375.chartReference.id)
        : undefined;
      ccBind11719
        ? ((this.#e = ccBind11719),
          (this.data.chartReference = {
            id: ccBind11719.id,
          }))
        : ccIn3375.chartReference?.id &&
          (this.data.chartReference = {
            id: ccIn3375.chartReference.id,
          });
    }
    get id() {
      return this.data.id;
    }
    toSnapshot() {
      let ccBind15005 = this.slideId,
        ccBind15006 = this.id;
      return {
        aid: REe("ch", ccBind15005, ccBind15006),
        kind: "chart",
        id: ccBind15006,
        slideId: ccBind15005,
        name: this.name,
        title: this.title ?? "",
        chartType: this.chartType,
        frame: this.frame,
      };
    }
    get chart() {
      return this.#e ?? this.#t();
    }
    get chartType() {
      return this.#n().type;
    }
    set chartType(ccIn14037) {
      this.#n().type = ccIn14037;
    }
    get title() {
      return this.#n().title;
    }
    set title(ccIn14313) {
      this.#n().title = ccIn14313;
    }
    get titleTextStyle() {
      return this.#n().titleTextStyle;
    }
    get titlePlacement() {
      return this.#n().titlePlacement;
    }
    set titlePlacement(ccIn12888) {
      this.#n().titlePlacement = ccIn12888;
    }
    get styleIndex() {
      return this.#n().styleIndex;
    }
    set styleIndex(ccIn13410) {
      this.#n().styleIndex = ccIn13410;
    }
    get categories() {
      return this.#n().categories;
    }
    set categories(ccIn13411) {
      this.#n().categories = ccIn13411;
    }
    get hasLegend() {
      return this.#n().hasLegend;
    }
    set hasLegend(ccIn13606) {
      this.#n().hasLegend = ccIn13606;
    }
    get displayBlanksAs() {
      return this.#n().displayBlanksAs;
    }
    set displayBlanksAs(ccIn12741) {
      this.#n().displayBlanksAs = ccIn12741;
    }
    get showDlblsOverMax() {
      return this.#n().showDlblsOverMax;
    }
    set showDlblsOverMax(ccIn12615) {
      this.#n().showDlblsOverMax = ccIn12615;
    }
    get style() {
      return this.#n().style;
    }
    get chartFill() {
      return this.#n().chartFill;
    }
    set chartFill(ccIn13607) {
      this.#n().chartFill = ccIn13607;
    }
    get chartLine() {
      return this.#n().chartLine;
    }
    get plotAreaFill() {
      return this.#n().plotAreaFill;
    }
    set plotAreaFill(ccIn13122) {
      this.#n().plotAreaFill = ccIn13122;
    }
    get plotAreaManualLayout() {
      return this.#n().plotAreaManualLayout;
    }
    set plotAreaManualLayout(ccIn12133) {
      this.#n().plotAreaManualLayout = ccIn12133;
    }
    get plotAreaLine() {
      return this.#n().plotAreaLine;
    }
    get legend() {
      return this.#n().legend;
    }
    set legend(ccIn9009) {
      let ccBind19561 = this.#n();
      if (ccIn9009 instanceof workbookBinding711) {
        ccBind19561.legend = ccIn9009;
        return;
      }
      wEe(ccBind19561.legend, ccIn9009);
    }
    get dataLabels() {
      return this.#n().dataLabels;
    }
    set dataLabels(ccIn8692) {
      let ccBind19194 = this.#n();
      if (ccIn8692 instanceof workbookBinding706) {
        ccBind19194.dataLabels = ccIn8692;
        return;
      }
      TEe(ccBind19194.dataLabels, ccIn8692);
    }
    get dataTable() {
      return this.#n().dataTable;
    }
    set dataTable(ccIn8773) {
      let ccBind19299 = this.#n();
      if (ccIn8773 instanceof workbookBinding708) {
        ccBind19299.dataTable = ccIn8773;
        return;
      }
      EEe(ccBind19299.dataTable, ccIn8773);
    }
    get xAxis() {
      return this.#n().xAxis;
    }
    set xAxis(ccIn9124) {
      let ccBind19709 = this.#n();
      if (ccIn9124 instanceof workbookBinding705) {
        ccBind19709.xAxis = ccIn9124;
        return;
      }
      applyChartAxisPatch(ccBind19709.xAxis, ccIn9124);
    }
    get yAxis() {
      return this.#n().yAxis;
    }
    set yAxis(ccIn9125) {
      let ccBind19710 = this.#n();
      if (ccIn9125 instanceof workbookBinding705) {
        ccBind19710.yAxis = ccIn9125;
        return;
      }
      applyChartAxisPatch(ccBind19710.yAxis, ccIn9125);
    }
    get barOptions() {
      return this.#n().barOptions;
    }
    get lineOptions() {
      return this.#n().lineOptions;
    }
    get areaOptions() {
      return this.#n().areaOptions;
    }
    get scatterOptions() {
      return this.#n().scatterOptions;
    }
    get pieOptions() {
      return this.#n().pieOptions;
    }
    set pieOptions(ccIn8693) {
      let ccBind19195 = this.#n();
      if (ccIn8693 instanceof workbookBinding713) {
        ccBind19195.pieOptions = ccIn8693;
        return;
      }
      jEe(ccBind19195.pieOptions, ccIn8693);
    }
    get doughnutOptions() {
      return this.#n().doughnutOptions;
    }
    set doughnutOptions(ccIn8236) {
      let ccBind18752 = this.#n();
      if (ccIn8236 instanceof workbookBinding709) {
        ccBind18752.doughnutOptions = ccIn8236;
        return;
      }
      FEe(ccBind18752.doughnutOptions, ccIn8236);
    }
    get treemapOptions() {
      return this.#n().treemapOptions;
    }
    get mapOptions() {
      return this.#n().mapOptions;
    }
    get funnelOptions() {
      return this.#n().funnelOptions;
    }
    get boxWhiskerOptions() {
      return this.#n().boxWhiskerOptions;
    }
    get histogramOptions() {
      return this.#n().histogramOptions;
    }
    set histogramOptions(ccIn13608) {
      applyHistogramOptionsPatch(this.#n(), ccIn13608);
    }
    get series() {
      return this.#n().series;
    }
    get view3d() {
      return this.#n().view3d;
    }
    set view3d(ccIn14162) {
      this.#n().view3d = ccIn14162;
    }
    setChartReference(ccIn9291) {
      this.data.chartReference = ccIn9291
        ? {
            id: ccIn9291,
          }
        : undefined;
      this.#e = ccIn9291 ? this.context.getChartById(ccIn9291) : undefined;
    }
    apply(ccIn74) {
      if (ccIn74) {
        if (
          (!ccIn74.position &&
            this.frame === undefined &&
            (this.position = workbookBinding1297),
          ccIn74.position && (this.position = ccIn74.position),
          ccIn74.title !== undefined && (this.title = ccIn74.title),
          ccIn74.titlePlacement !== undefined &&
            (this.titlePlacement = ccIn74.titlePlacement),
          ccIn74.titleTextStyle &&
            applyChartTextStylePatch(
              this.titleTextStyle,
              ccIn74.titleTextStyle,
            ),
          ccIn74.styleIndex !== undefined &&
            (this.styleIndex = ccIn74.styleIndex),
          ccIn74.displayBlanksAs !== undefined &&
            (this.displayBlanksAs = ccIn74.displayBlanksAs),
          ccIn74.showDlblsOverMax !== undefined &&
            (this.showDlblsOverMax = ccIn74.showDlblsOverMax),
          ccIn74.chartFill !== undefined && (this.chartFill = ccIn74.chartFill),
          ccIn74.chartLine !== undefined &&
            applyChartLinePatch(this.chartLine, ccIn74.chartLine),
          ccIn74.plotAreaFill !== undefined &&
            (this.plotAreaFill = ccIn74.plotAreaFill),
          ccIn74.plotAreaLine !== undefined &&
            applyChartLinePatch(this.plotAreaLine, ccIn74.plotAreaLine),
          ccIn74.plotAreaManualLayout !== undefined &&
            (this.plotAreaManualLayout = ccIn74.plotAreaManualLayout),
          ccIn74.categories && (this.categories = [...ccIn74.categories]),
          ccIn74.series)
        ) {
          this.series.clear();
          for (let ccBind2833 of ccIn74.series) {
            let ccBind2834 = this.series.add(ccBind2833.name);
            if (
              (ccBind2833.values !== undefined &&
                (ccBind2834.values = ccBind2833.values),
              ccBind2833.xValues !== undefined &&
                (ccBind2834.xValues = ccBind2833.xValues),
              ccBind2833.bubbleSizes !== undefined &&
                (ccBind2834.bubbleSizes = ccBind2833.bubbleSizes),
              ccBind2833.categoryPaths !== undefined &&
                (ccBind2834.categoryPaths = ccBind2833.categoryPaths),
              ccBind2833.categories
                ? (ccBind2834.categories = ccBind2833.categories)
                : ccIn74.categories &&
                  (ccBind2834.categories = this.categories),
              ccBind2833.fill !== undefined &&
                (ccBind2834.fill = ccBind2833.fill),
              ccBind2833.line === undefined
                ? ccBind2833.stroke !== undefined &&
                  (ccBind2834.stroke = ccBind2833.stroke)
                : (ccBind2834.stroke = ccBind2833.line),
              ccBind2833.valuesFormatCode !== undefined &&
                (ccBind2834.valuesFormatCode = ccBind2833.valuesFormatCode),
              ccBind2833.xValuesFormatCode !== undefined &&
                (ccBind2834.xValuesFormatCode = ccBind2833.xValuesFormatCode),
              ccBind2833.explosion !== undefined &&
                (ccBind2834.explosion = ccBind2833.explosion),
              ccBind2833.marker?.symbol !== undefined &&
                (ccBind2834.marker.symbol = ccBind2833.marker.symbol),
              ccBind2833.marker?.size !== undefined &&
                (ccBind2834.marker.size = ccBind2833.marker.size),
              ccBind2833.points)
            )
              for (let ccBind15798 of ccBind2833.points) {
                let ccBind16324 = ccBind2834.points.add(ccBind15798.idx);
                ccBind15798.fill !== undefined &&
                  (ccBind16324.fill = ccBind15798.fill);
                ccBind15798.line === undefined
                  ? ccBind15798.stroke !== undefined &&
                    (ccBind16324.stroke = ccBind15798.stroke)
                  : (ccBind16324.stroke = ccBind15798.line);
              }
            if (ccBind2833.dataLabelOverrides)
              for (let ccBind6820 of ccBind2833.dataLabelOverrides) {
                let ccBind7021 = ccBind2834.dataLabelOverrides.add(
                  ccBind6820.idx,
                );
                ccBind6820.text !== undefined &&
                  (ccBind7021.text = ccBind6820.text);
                ccBind6820.position !== undefined &&
                  (ccBind7021.position = ccBind6820.position);
                ccBind6820.fill !== undefined &&
                  (ccBind7021.fill = ccBind6820.fill);
                ccBind6820.line === undefined
                  ? ccBind6820.stroke !== undefined &&
                    (ccBind7021.stroke = ccBind6820.stroke)
                  : (ccBind7021.stroke = ccBind6820.line);
                ccBind6820.showValue !== undefined &&
                  (ccBind7021.showValue = ccBind6820.showValue);
                ccBind6820.showSeriesName !== undefined &&
                  (ccBind7021.showSeriesName = ccBind6820.showSeriesName);
                ccBind6820.showCategoryName !== undefined &&
                  (ccBind7021.showCategoryName = ccBind6820.showCategoryName);
                ccBind6820.showLegendKey !== undefined &&
                  (ccBind7021.showLegendKey = ccBind6820.showLegendKey);
                ccBind6820.showPercent !== undefined &&
                  (ccBind7021.showPercent = ccBind6820.showPercent);
                ccBind6820.showBubbleSize !== undefined &&
                  (ccBind7021.showBubbleSize = ccBind6820.showBubbleSize);
                ccBind6820.textStyle &&
                  applyChartTextStylePatch(
                    ccBind7021.textStyle,
                    ccBind6820.textStyle,
                  );
              }
            if (ccBind2833.trendlines)
              for (let ccBind4101 of ccBind2833.trendlines) {
                let ccBind4177 = ccBind4101.type ?? "linear",
                  ccBind4178 = ccBind2834.trendlines.add(ccBind4177);
                ccBind4101.name !== undefined &&
                  (ccBind4178.name = ccBind4101.name);
                ccBind4101.polynomialOrder !== undefined &&
                  (ccBind4178.polynomialOrder = ccBind4101.polynomialOrder);
                ccBind4101.movingAveragePeriod !== undefined &&
                  (ccBind4178.movingAveragePeriod =
                    ccBind4101.movingAveragePeriod);
                ccBind4101.forecastForward !== undefined &&
                  (ccBind4178.forecastForward = ccBind4101.forecastForward);
                ccBind4101.forecastBackward !== undefined &&
                  (ccBind4178.forecastBackward = ccBind4101.forecastBackward);
                ccBind4101.intercept !== undefined &&
                  (ccBind4178.intercept = ccBind4101.intercept);
                ccBind4101.displayEquation !== undefined &&
                  (ccBind4178.displayEquation = ccBind4101.displayEquation);
                ccBind4101.displayRSquared !== undefined &&
                  (ccBind4178.displayRSquared = ccBind4101.displayRSquared);
                ccBind4101.line === undefined
                  ? ccBind4101.stroke !== undefined &&
                    (ccBind4178.stroke = ccBind4101.stroke)
                  : (ccBind4178.stroke = ccBind4101.line);
                ccBind4101.label &&
                  (ccBind4101.label.text !== undefined &&
                    (ccBind4178.label.text = ccBind4101.label.text),
                  ccBind4101.label.numberFormatCode !== undefined &&
                    (ccBind4178.label.numberFormatCode =
                      ccBind4101.label.numberFormatCode),
                  ccBind4101.label.numberFormatSourceLinked !== undefined &&
                    (ccBind4178.label.numberFormatSourceLinked =
                      ccBind4101.label.numberFormatSourceLinked),
                  ccBind4101.label.manualLayout !== undefined &&
                    (ccBind4178.label.manualLayout = {
                      x: ccBind4101.label.manualLayout.x,
                      y: ccBind4101.label.manualLayout.y,
                      w: ccBind4101.label.manualLayout.w,
                      h: ccBind4101.label.manualLayout.h,
                    }),
                  ccBind4101.label.textStyle &&
                    applyChartTextStylePatch(
                      ccBind4178.label.textStyle,
                      ccBind4101.label.textStyle,
                    ),
                  ccBind4101.label.fill !== undefined &&
                    (ccBind4178.label.fill = ccBind4101.label.fill),
                  ccBind4101.label.line === undefined
                    ? ccBind4101.label.stroke !== undefined &&
                      (ccBind4178.label.stroke = ccBind4101.label.stroke)
                    : (ccBind4178.label.stroke = ccBind4101.label.line),
                  ccBind4101.label.textRuns !== undefined &&
                    (ccBind4178.label.textRuns = ccBind4101.label.textRuns));
              }
            ccBind2833.errorBars &&
              (ccBind2833.errorBars.type !== undefined &&
                (ccBind2834.errorBars.type = ccBind2833.errorBars.type),
              ccBind2833.errorBars.value !== undefined &&
                (ccBind2834.errorBars.value = ccBind2833.errorBars.value),
              ccBind2833.errorBars.endStyle !== undefined &&
                (ccBind2834.errorBars.endStyle = ccBind2833.errorBars.endStyle),
              ccBind2833.errorBars.line !== undefined &&
                (ccBind2834.errorBars.line = ccBind2833.errorBars.line));
          }
        }
        ccIn74.hasLegend === undefined
          ? ccIn74.legend && (this.hasLegend = true)
          : (this.hasLegend = ccIn74.hasLegend);
        ccIn74.legend && (this.legend = ccIn74.legend);
        ccIn74.dataLabels && (this.dataLabels = ccIn74.dataLabels);
        ccIn74.dataTable && (this.dataTable = ccIn74.dataTable);
        ccIn74.xAxis && (this.xAxis = ccIn74.xAxis);
        ccIn74.yAxis && (this.yAxis = ccIn74.yAxis);
        ccIn74.lineOptions && OEe(this.lineOptions, ccIn74.lineOptions);
        ccIn74.areaOptions && kEe(this.areaOptions, ccIn74.areaOptions);
        ccIn74.scatterOptions &&
          AEe(this.scatterOptions, ccIn74.scatterOptions);
        ccIn74.pieOptions && (this.pieOptions = ccIn74.pieOptions);
        ccIn74.doughnutOptions &&
          (this.doughnutOptions = ccIn74.doughnutOptions);
        ccIn74.treemapOptions &&
          MEe(this.treemapOptions, ccIn74.treemapOptions);
        ccIn74.mapOptions && NEe(this.mapOptions, ccIn74.mapOptions);
        ccIn74.view3d && PEe(this.view3d, ccIn74.view3d);
        ccIn74.funnelOptions && IEe(this.funnelOptions, ccIn74.funnelOptions);
        ccIn74.boxWhiskerOptions &&
          LEe(this.boxWhiskerOptions, ccIn74.boxWhiskerOptions);
        ccIn74.barOptions && DEe(this.barOptions, ccIn74.barOptions);
        ccIn74.histogramOptions &&
          applyHistogramOptionsPatch(this.#n(), ccIn74.histogramOptions);
      }
    }
    toProto() {
      let ccBind13260 = super.toProto();
      ccBind13260.bbox ||= {
        xEmu: workbookTt(workbookBinding1297.left ?? 0),
        yEmu: workbookTt(workbookBinding1297.top ?? 0),
        widthEmu: workbookTt(workbookBinding1297.width ?? 0),
        heightEmu: workbookTt(workbookBinding1297.height ?? 0),
      };
      let ccBind13261 = this.#e ?? this.#t();
      if (ccBind13261) {
        let ccBind21304 = {
          id: ccBind13261.id,
        };
        ccBind13260.chartReference = ccBind21304;
        this.data.chartReference = ccBind21304;
      }
      return ccBind13260;
    }
    #t() {
      let ccBind19300 = this.data.chartReference?.id;
      if (!ccBind19300) return;
      let ccBind19301 = this.context.getChartById(ccBind19300);
      if (ccBind19301) return ((this.#e = ccBind19301), ccBind19301);
    }
    #n() {
      let ccBind18462 = this.#t();
      if (ccBind18462) return ccBind18462;
      let ccBind18463 = this.context.createChartAsset("line");
      return (
        (this.data.chartReference = {
          id: ccBind18463.id,
        }),
        (this.#e = ccBind18463),
        ccBind18463
      );
    }
  };
});
