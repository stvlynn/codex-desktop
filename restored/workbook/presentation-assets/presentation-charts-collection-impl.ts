// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation charts collection VO (legacy workbookD/workbookE).
// Stage-3 wave-148.

import { esmInit } from "../../runtime/rolldown-runtime";
import { qn, Vn as _presentationVn } from "../presentation-protobuf";
import {
  workbookBinding721,
  workbookBinding722,
  ensureChartAssetInit,
} from "../chart-asset";
import {
  chartTypeNameToProto as workbookBinding388,
  ensureChartProtoNameMapsInit as workbookBinding404,
} from "../chart-proto-name-maps";

export const workbookBinding1291 = new Set([
  "pie",
  "pie3D",
  "doughnut",
  "treemap",
  "sunburst",
  "map",
  "funnel",
  "ofPie",
]);

export const workbookBinding1292 = "#D4D4D4";

export const workbookBinding1293 = "#666666";

export class workbookE {
  #e;
  #t;
  #n;
  constructor(pacIn7305, pacIn7306) {
    this.#e = pacIn7305;
    this.#t = (pacIn7306 ?? []).map(
      (item) => new workbookBinding721(item ?? {}, this.#e.fontFamilyCache),
    );
    this.#n = new Map(this.#t.map((item) => [item.id, item]));
  }
  get items() {
    return [...this.#t];
  }
  getById(pacIn13681) {
    if (pacIn13681) return this.#n.get(pacIn13681);
  }
  add(pacIn2201) {
    let pacBind9215 = new workbookBinding721(
      {
        type: workbookBinding388[pacIn2201],
      },
      this.#e.fontFamilyCache,
    );
    return (
      (pacBind9215.hasLegend = true),
      (pacBind9215.legend.position = "bottom"),
      workbookBinding1291.has(pacIn2201) ||
        ((pacBind9215.xAxis.line.width = 1),
        (pacBind9215.xAxis.line.style = "solid"),
        (pacBind9215.xAxis.line.fill = workbookBinding1292),
        (pacBind9215.xAxis.textStyle.fill = workbookBinding1293),
        (pacBind9215.yAxis.line.width = 1),
        (pacBind9215.yAxis.line.style = "solid"),
        (pacBind9215.yAxis.line.fill = workbookBinding1292),
        (pacBind9215.yAxis.textStyle.fill = workbookBinding1293),
        (pacBind9215.yAxis.deleted = true)),
      pacIn2201 === "scatter" &&
        pacBind9215.scatterOptions.style === undefined &&
        (pacBind9215.scatterOptions.style = "marker"),
      this.#t.push(pacBind9215),
      this.#n.set(pacBind9215.id, pacBind9215),
      pacBind9215
    );
  }
  attach(pacIn10431) {
    return (
      this.#n.get(pacIn10431.id) ||
      (this.#t.push(pacIn10431),
      this.#n.set(pacIn10431.id, pacIn10431),
      pacIn10431)
    );
  }
  replace(pacIn8258) {
    this.#t = (pacIn8258 ?? []).map(
      (item) => new workbookBinding721(item ?? {}, this.#e.fontFamilyCache),
    );
    this.#n = new Map(this.#t.map((item) => [item.id, item]));
  }
  toProto() {
    return this.#t
      .map((item) => item.toProto())
      .filter((item) => !!item)
      .map((item) => ({
        ...item,
        barDirection:
          item.barDirection ?? _presentationVn.BAR_DIRECTION_UNSPECIFIED,
      }));
  }
}

export const workbookD = esmInit(() => {
  qn();
  workbookBinding722();
  workbookBinding404();
  ensureChartAssetInit();
});

export function getPresentationChartsCollectionClass(): typeof workbookE {
  workbookD();
  return workbookE;
}

export const ensurePresentationChartsCollectionInit = workbookD;
