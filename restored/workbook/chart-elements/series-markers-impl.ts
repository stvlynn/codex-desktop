// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series markers/points/label overrides (legacy Yhe…nge).
// Stage-3 wave-67 cohesive chart VO impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  qn,
  Gn as _presentationGn,
  En,
  In,
  Ln,
  On,
  Rn,
  Kn as _presentationKn,
  Vn as _presentationVn,
  Yn as _presentationYn,
  Zn as _presentationZn,
} from "../presentation-protobuf";
import {
  ensureChartProtoNameMapsInit as workbookBinding404,
  areaGroupingNameToProto as vie,
  legendPositionNameToProto as xie,
  legendPositionProtoToName as Sie,
  axisPositionNameToProto as Cie,
  axisPositionProtoToName as wie,
  axisOrientationMinNameToProto as Tie,
  axisOrientationMinProtoToName as Eie,
  tickMarkNameToProto as workbookBinding396,
  tickMarkProtoToName as workbookBinding397,
  tickLabelPositionNameToProto as workbookBinding398,
  tickLabelPositionProtoToName as Die,
  crossBetweenNameToProto as Oie,
  crossBetweenProtoToName as kie,
  crossesAutoNameToProto as Aie,
  crossesAutoProtoToName as jie,
  trendlineTypeNameToProto as Mie,
  trendlineTypeProtoToName as Nie,
  errorBarValueTypeStandardNameToProto as Pie,
  errorBarValueTypeStandardProtoToName as workbookBinding399,
  markerSymbolNameToProto as Fie,
  markerSymbolProtoToName as Iie,
  barDirectionNameToProto as workbookBinding400,
  barDirectionProtoToName as Lie,
  barGroupingNameToProto as Rie,
  barGroupingProtoToName as workbookBinding401,
  scatterStyleNameToProto as zie,
  scatterStyleProtoToName as Bie,
  dataLabelPositionNameToProto as workbookBinding394,
  dataLabelPositionProtoToName as workbookBinding395,
  lineGroupingNameToProto as yie,
  lineGroupingProtoToName as workbookBinding390,
  mapAreaNameToProto as oie,
  mapAreaProtoToName as sie,
  mapDataLevelCountryOrNameToProto as cie,
  mapDataLevelCountryOrProtoToName as lie,
  mapLabelLayoutNameToProto as uie,
  mapLabelLayoutProtoToName as die,
  mapProjectionNameToProto as fie,
  mapProjectionProtoToName as pie,
  quartileMethodNameToProto as hie,
  quartileMethodProtoToName as gie,
} from "../chart-proto-name-maps";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  applyTextStylePatch as workbookYt,
  parseTextStyleInput as workbookHelper104,
  parseFontSizePx as workbookHelper103,
} from "../text-style";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";

export let workbookBinding715: any;
export let Xhe: any;
export let Qhe: any;
export let workbookBinding716: any;
export let tge: any;

export const Yhe = esmInit(() => {
  qn();
  workbookWt();
  workbookBinding432();
  workbookBinding404();
  workbookBt();
  workbookBinding715 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c;
    #l;
    textStyle;
    #u;
    constructor(ceIn2370, ceIn2371) {
      this.#e = ceIn2370?.idx;
      ceIn2371?.addTextStyle(ceIn2370?.textStyle);
      this.textStyle = new workbookVt(ceIn2370?.textStyle);
      this.#u = new workbookBinding431({
        type: "proto",
        proto: ceIn2370?.stroke,
      });
      ceIn2370?.kind === "dataCallout"
        ? (this.#n = "dataCallout")
        : (this.#n = ceIn2370?.position
            ? workbookBinding395[ceIn2370.position]
            : undefined);
      this.#t = ceIn2370?.text;
      this.#r = ceIn2370?.fill
        ? new workbookCt({
            type: "proto",
            proto: ceIn2370.fill,
          })
        : undefined;
      this.#i = ceIn2370?.showValue;
      this.#a = ceIn2370?.showSeriesName;
      this.#o = ceIn2370?.showCategoryName;
      this.#s = ceIn2370?.showLegendKey;
      this.#c = ceIn2370?.showPercent;
      this.#l = ceIn2370?.showBubbleSize;
    }
    get idx() {
      return this.#e;
    }
    set idx(ceIn14304) {
      this.#e = ceIn14304 ?? undefined;
    }
    get text() {
      return this.#t;
    }
    set text(ceIn14206) {
      this.#t = ceIn14206 ?? undefined;
    }
    get position() {
      return this.#n;
    }
    set position(ceIn13774) {
      this.#n = ceIn13774 ?? undefined;
    }
    get fill() {
      return this.#r;
    }
    set fill(ceIn13231) {
      this.#r = ceIn13231 ? new workbookCt(ceIn13231) : undefined;
    }
    get stroke() {
      return this.#u;
    }
    set stroke(ceIn14207) {
      this.#u = new workbookBinding431(ceIn14207);
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14803) {
      this.stroke = ceIn14803;
    }
    get showValue() {
      return this.#i ?? false;
    }
    set showValue(ceIn14524) {
      this.#i = !!ceIn14524;
    }
    get showSeriesName() {
      return this.#a ?? false;
    }
    set showSeriesName(ceIn14010) {
      this.#a = !!ceIn14010;
    }
    get showCategoryName() {
      return this.#o ?? false;
    }
    set showCategoryName(ceIn13775) {
      this.#o = !!ceIn13775;
    }
    get showLegendKey() {
      return this.#s ?? false;
    }
    set showLegendKey(ceIn14156) {
      this.#s = !!ceIn14156;
    }
    get showPercent() {
      return this.#c ?? false;
    }
    set showPercent(ceIn14305) {
      this.#c = !!ceIn14305;
    }
    get showBubbleSize() {
      return this.#l ?? false;
    }
    set showBubbleSize(ceIn14011) {
      this.#l = !!ceIn14011;
    }
    toProto() {
      let workbookBinding6675 = this.#e;
      if (workbookBinding6675 == null) return;
      let workbookBinding6676 = this.textStyle.toProto(),
        workbookBinding6677 = this.#r?.toProto(),
        workbookBinding6678 = this.#u.toProto(),
        workbookBinding6679 =
          this.#n !== undefined && this.#n !== "dataCallout"
            ? workbookBinding394[this.#n]
            : undefined,
        workbookBinding6680 = {
          idx: workbookBinding6675,
        };
      return (
        this.#t !== undefined && (workbookBinding6680.text = this.#t),
        workbookBinding6679 !== undefined &&
          workbookBinding6679 !== En.DATA_LABEL_POSITION_UNSPECIFIED &&
          (workbookBinding6680.position = workbookBinding6679),
        this.#n &&
          !(this.#n in workbookBinding394) &&
          ((workbookBinding6680.positionName = this.#n),
          this.#n === "dataCallout" &&
            (workbookBinding6680.kind = "dataCallout")),
        this.#i !== undefined && (workbookBinding6680.showValue = this.#i),
        this.#a !== undefined && (workbookBinding6680.showSeriesName = this.#a),
        this.#o !== undefined &&
          (workbookBinding6680.showCategoryName = this.#o),
        this.#s !== undefined && (workbookBinding6680.showLegendKey = this.#s),
        this.#c !== undefined && (workbookBinding6680.showPercent = this.#c),
        this.#l !== undefined && (workbookBinding6680.showBubbleSize = this.#l),
        this.textStyle.isSet &&
          (workbookBinding6680.textStyle = workbookBinding6676),
        workbookBinding6677 && (workbookBinding6680.fill = workbookBinding6677),
        workbookBinding6678 &&
          (workbookBinding6680.stroke = workbookBinding6678),
        workbookBinding6680
      );
    }
  };
});
export const Zhe = esmInit(() => {
  Yhe();
  Xhe = class {
    #e;
    #t;
    constructor(ceIn6221, ceIn6222) {
      if (((this.#t = ceIn6222), (this.#e = []), ceIn6221))
        for (let workbookBinding18806 of ceIn6221) {
          let workbookBinding19341 = new workbookBinding715(
              workbookBinding18806,
              this.#t,
            ),
            workbookBinding19342 = this.#e.findIndex(
              (item) => item.idx === workbookBinding19341.idx,
            );
          workbookBinding19342 === -1
            ? this.#e.push(workbookBinding19341)
            : (this.#e[workbookBinding19342] = workbookBinding19341);
        }
    }
    add(ceIn4193) {
      let workbookBinding13237 = this.#e.find((item) => item.idx === ceIn4193);
      if (workbookBinding13237) return workbookBinding13237;
      let workbookBinding13238 = new workbookBinding715(
        {
          idx: ceIn4193,
          showValue: false,
          showSeriesName: false,
          showCategoryName: false,
          showLegendKey: false,
          showPercent: false,
          showBubbleSize: false,
        },
        this.#t,
      );
      return (this.#e.push(workbookBinding13238), workbookBinding13238);
    }
    get length() {
      return this.#e.length;
    }
    toProto() {
      return this.#e.map((item) => item.toProto()).filter((item) => !!item);
    }
  };
});
export const $he = esmInit(() => {
  workbookBinding404();
  Qhe = class {
    #e;
    #t;
    #n;
    #r;
    constructor(ceIn7637) {
      this.#e = ceIn7637?.symbol ? Iie[ceIn7637.symbol] : undefined;
      this.#t = ceIn7637?.size;
      this.#n = structuredClone(ceIn7637?.fill);
      this.#r = structuredClone(ceIn7637?.stroke);
    }
    get symbol() {
      return this.#e;
    }
    set symbol(ceIn14953) {
      this.#e = ceIn14953;
    }
    get size() {
      return this.#t;
    }
    set size(ceIn15185) {
      this.#t = ceIn15185;
    }
    toProto() {
      let workbookBinding15599 = this.#e ? Fie[this.#e] : undefined,
        workbookBinding15600 = this.#t,
        workbookBinding15601 = structuredClone(this.#n),
        workbookBinding15602 = structuredClone(this.#r);
      if (
        !(
          workbookBinding15599 === undefined &&
          workbookBinding15600 === undefined &&
          workbookBinding15601 === undefined &&
          workbookBinding15602 === undefined
        )
      )
        return {
          symbol: workbookBinding15599,
          size: workbookBinding15600,
          fill: workbookBinding15601,
          stroke: workbookBinding15602,
        };
    }
  };
});
export const ege = esmInit(() => {
  workbookWt();
  workbookBinding432();
  workbookBinding716 = class {
    #e;
    #t;
    #n;
    constructor(ceIn7226) {
      this.#e = ceIn7226?.idx;
      this.#t = ceIn7226?.fill
        ? new workbookCt({
            type: "proto",
            proto: ceIn7226.fill,
          })
        : undefined;
      this.#n = new workbookBinding431({
        type: "proto",
        proto: ceIn7226?.stroke,
      });
    }
    get idx() {
      return this.#e;
    }
    set idx(ceIn14306) {
      this.#e = ceIn14306 ?? undefined;
    }
    get fill() {
      return this.#t;
    }
    set fill(ceIn14368) {
      this.#t = new workbookCt(ceIn14368);
    }
    get stroke() {
      return this.#n;
    }
    set stroke(ceIn14208) {
      this.#n = new workbookBinding431(ceIn14208);
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14804) {
      this.stroke = ceIn14804;
    }
    toProto() {
      let workbookBinding18175 = this.#e;
      if (workbookBinding18175 == null) return;
      let workbookBinding18176 = this.#t?.toProto(),
        workbookBinding18177 = this.#n.toProto();
      if (!(!workbookBinding18176 && !workbookBinding18177))
        return {
          idx: workbookBinding18175,
          fill: workbookBinding18176,
          stroke: workbookBinding18177,
        };
    }
  };
});
export const nge = esmInit(() => {
  ege();
  tge = class {
    #e;
    constructor(ceIn11566) {
      this.#e = [];
      ceIn11566 &&
        (this.#e = ceIn11566.map((item) => new workbookBinding716(item)));
    }
    get items() {
      return [...this.#e];
    }
    add(ceIn10559) {
      let workbookBinding21018 = new workbookBinding716({
        idx: ceIn10559,
        fill: undefined,
        stroke: undefined,
      });
      return (this.#e.push(workbookBinding21018), workbookBinding21018);
    }
    toProto() {
      return this.#e.map((item) => item.toProto()).filter((item) => !!item);
    }
  };
});
