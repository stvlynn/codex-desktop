// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: trendline VO (legacy ige/Binding717).
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

export let rge: any;
export let workbookBinding717: any;

export const ige = esmInit(() => {
  workbookWt();
  workbookBinding432();
  workbookBt();
  workbookBinding404();
  rge = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(ceIn2015, ceIn2016) {
      this.#e = ceIn2015?.text ?? undefined;
      this.#t = ceIn2015?.numberFormatCode ?? undefined;
      this.#n = ceIn2015?.numberFormatSourceLinked ?? undefined;
      this.#r = ceIn2015?.manualLayout ?? undefined;
      ceIn2016?.addTextStyle(ceIn2015?.textStyle);
      this.#i = new workbookVt(ceIn2015?.textStyle);
      this.#a = ceIn2015?.fill
        ? new workbookCt({
            type: "proto",
            proto: ceIn2015.fill,
          })
        : undefined;
      this.#o = ceIn2015?.stroke
        ? new workbookBinding431({
            type: "proto",
            proto: ceIn2015.stroke,
          })
        : undefined;
      this.#s = (ceIn2015?.textRuns ?? []).map(
        (item) => (
          ceIn2016?.addTextStyle(item.textStyle),
          {
            text: item.text ?? "",
            textStyle: item.textStyle
              ? new workbookVt(item.textStyle)
              : undefined,
          }
        ),
      );
    }
    get text() {
      return this.#e;
    }
    set text(ceIn14209) {
      this.#e = ceIn14209 ?? undefined;
    }
    get numberFormatCode() {
      return this.#t;
    }
    set numberFormatCode(ceIn13162) {
      this.#t = ceIn13162 ?? undefined;
    }
    get numberFormatSourceLinked() {
      return this.#n;
    }
    set numberFormatSourceLinked(ceIn11726) {
      this.#n = ceIn11726 === undefined ? undefined : !!ceIn11726;
    }
    get manualLayout() {
      return this.#r;
    }
    set manualLayout(ceIn13494) {
      this.#r = ceIn13494 ?? undefined;
    }
    get textStyle() {
      return this.#i;
    }
    set textStyle(ceIn14711) {
      this.#i = ceIn14711;
    }
    get fill() {
      return this.#a;
    }
    set fill(ceIn13232) {
      this.#a = ceIn13232 ? new workbookCt(ceIn13232) : undefined;
    }
    get stroke() {
      return this.#o;
    }
    set stroke(ceIn13110) {
      this.#o = ceIn13110 ? new workbookBinding431(ceIn13110) : undefined;
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14805) {
      this.stroke = ceIn14805;
    }
    get textRuns() {
      return this.#s.map((item) => ({
        text: item.text,
        textStyle: item.textStyle
          ? new workbookVt(item.textStyle.toProto())
          : undefined,
      }));
    }
    set textRuns(ceIn2198) {
      let workbookBinding9214 = ceIn2198 ?? [];
      this.#s = workbookBinding9214.map((item) => {
        let workbookBinding9890 = item.text ?? "",
          workbookBinding9891 = new workbookVt(),
          workbookBinding9892 = item.textStyle;
        return (
          workbookBinding9892 &&
            (workbookBinding9892.fontSize !== undefined &&
              (workbookBinding9891.fontSize = workbookHelper103(
                workbookBinding9892.fontSize,
              )),
            workbookBinding9892.fill !== undefined &&
              (workbookBinding9891.fill = workbookBinding9892.fill),
            workbookBinding9892.bold !== undefined &&
              (workbookBinding9891.bold = workbookBinding9892.bold),
            workbookBinding9892.italic !== undefined &&
              (workbookBinding9891.italic = workbookBinding9892.italic),
            workbookBinding9892.underline !== undefined &&
              (workbookBinding9891.underline = workbookBinding9892.underline),
            workbookBinding9892.name !== undefined &&
              (workbookBinding9891.name = workbookBinding9892.name),
            workbookBinding9892.family !== undefined &&
              (workbookBinding9891.family = workbookBinding9892.family),
            workbookBinding9892.alignment !== undefined &&
              (workbookBinding9891.alignment = workbookBinding9892.alignment)),
          {
            text: workbookBinding9890,
            textStyle: workbookBinding9892 ? workbookBinding9891 : undefined,
          }
        );
      });
    }
    toProto() {
      let workbookBinding6775 = this.#i.toProto(),
        workbookBinding6776 = this.#a?.toProto(),
        workbookBinding6777 = this.#o?.toProto(),
        workbookBinding6778 = this.#s
          .map((item) => {
            let workbookBinding17385 = item.text ?? "",
              workbookBinding17386 = item.textStyle?.toProto();
            if (!workbookBinding17385.trim() && !workbookBinding17386)
              return null;
            let workbookBinding17387 = {
              text: workbookBinding17385,
            };
            return (
              workbookBinding17386 &&
                (workbookBinding17387.textStyle = workbookBinding17386),
              workbookBinding17387
            );
          })
          .filter((item) => item !== null);
      if (
        !(
          this.#e !== undefined ||
          this.#t !== undefined ||
          this.#n !== undefined ||
          this.#r !== undefined ||
          workbookBinding6775 ||
          workbookBinding6776 ||
          workbookBinding6777 ||
          workbookBinding6778.length > 0
        )
      )
        return;
      let workbookBinding6779 = {
        textRuns: workbookBinding6778,
      };
      return (
        this.#e !== undefined && (workbookBinding6779.text = this.#e),
        this.#t !== undefined &&
          (workbookBinding6779.numberFormatCode = this.#t),
        this.#n !== undefined &&
          (workbookBinding6779.numberFormatSourceLinked = this.#n),
        this.#r !== undefined && (workbookBinding6779.manualLayout = this.#r),
        workbookBinding6775 &&
          (workbookBinding6779.textStyle = workbookBinding6775),
        workbookBinding6776 && (workbookBinding6779.fill = workbookBinding6776),
        workbookBinding6777 &&
          (workbookBinding6779.stroke = workbookBinding6777),
        workbookBinding6779
      );
    }
  };
  workbookBinding717 = class {
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
    #u;
    constructor(ceIn2950, ceIn2951) {
      this.#e = ceIn2950?.type ? Nie[ceIn2950.type] : undefined;
      this.#t = ceIn2950?.name ?? undefined;
      this.#n = ceIn2950?.order ?? undefined;
      this.#r = ceIn2950?.period ?? undefined;
      this.#i = ceIn2950?.forward ?? undefined;
      this.#a = ceIn2950?.backward ?? undefined;
      this.#o = ceIn2950?.intercept ?? undefined;
      this.#s = ceIn2950?.displayEquation ?? undefined;
      this.#c = ceIn2950?.displayRSquared ?? undefined;
      this.#l = ceIn2950?.stroke
        ? new workbookBinding431({
            type: "proto",
            proto: ceIn2950.stroke,
          })
        : undefined;
      this.#u = new rge(ceIn2950?.label, ceIn2951);
    }
    get type() {
      return this.#e;
    }
    set type(ceIn14210) {
      this.#e = ceIn14210 ?? undefined;
    }
    get name() {
      return this.#t;
    }
    set name(ceIn14211) {
      this.#t = ceIn14211 ?? undefined;
    }
    get polynomialOrder() {
      return this.#n;
    }
    set polynomialOrder(ceIn13233) {
      this.#n = ceIn13233 ?? undefined;
    }
    get movingAveragePeriod() {
      return this.#r;
    }
    set movingAveragePeriod(ceIn12985) {
      this.#r = ceIn12985 ?? undefined;
    }
    get forecastForward() {
      return this.#i;
    }
    set forecastForward(ceIn13234) {
      this.#i = ceIn13234 ?? undefined;
    }
    get forecastBackward() {
      return this.#a;
    }
    set forecastBackward(ceIn13163) {
      this.#a = ceIn13163 ?? undefined;
    }
    get intercept() {
      return this.#o;
    }
    set intercept(ceIn13723) {
      this.#o = ceIn13723 ?? undefined;
    }
    get displayEquation() {
      return this.#s;
    }
    set displayEquation(ceIn12246) {
      this.#s = ceIn12246 === undefined ? undefined : !!ceIn12246;
    }
    get displayRSquared() {
      return this.#c;
    }
    set displayRSquared(ceIn12247) {
      this.#c = ceIn12247 === undefined ? undefined : !!ceIn12247;
    }
    get stroke() {
      return ((this.#l ||= new workbookBinding431()), this.#l);
    }
    set stroke(ceIn14212) {
      this.#l = new workbookBinding431(ceIn14212);
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14806) {
      this.stroke = ceIn14806;
    }
    get label() {
      return this.#u;
    }
    set label(ceIn15106) {
      this.#u = ceIn15106;
    }
    toProto() {
      if (!this.#e) return;
      let workbookBinding9728 = this.#l?.toProto(),
        workbookBinding9729 = this.#u.toProto(),
        workbookBinding9730 = {
          type: Mie[this.#e],
        };
      return (
        this.#t !== undefined && (workbookBinding9730.name = this.#t),
        this.#n !== undefined && (workbookBinding9730.order = this.#n),
        this.#r !== undefined && (workbookBinding9730.period = this.#r),
        this.#i !== undefined && (workbookBinding9730.forward = this.#i),
        this.#a !== undefined && (workbookBinding9730.backward = this.#a),
        this.#o !== undefined && (workbookBinding9730.intercept = this.#o),
        this.#s !== undefined &&
          (workbookBinding9730.displayEquation = this.#s),
        this.#c !== undefined &&
          (workbookBinding9730.displayRSquared = this.#c),
        workbookBinding9728 &&
          (workbookBinding9730.stroke = workbookBinding9728),
        workbookBinding9729 &&
          (workbookBinding9730.label = workbookBinding9729),
        workbookBinding9730
      );
    }
  };
});
