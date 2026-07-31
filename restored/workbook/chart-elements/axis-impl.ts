// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart Axis + number-format VO (legacy The/Ohe/Binding705).
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

export let The: any;
export let workbookBinding703: any;
export let Ehe: any;
export let workbookBinding704: any;
export let Dhe: any;
export let workbookBinding705: any;

export const Ohe = esmInit(() => {
  qn();
  workbookBinding432();
  workbookBt();
  workbookBinding404();
  The = class {
    #e;
    constructor(ceIn14875) {
      this.#e = ceIn14875;
    }
    get numberFormat() {
      return this.#e.numberFormatCode;
    }
    set numberFormat(ceIn12984) {
      this.#e.numberFormatCode = ceIn12984;
    }
  };
  workbookBinding703 = (ceIn14302) =>
    typeof ceIn14302 == "object" && !!ceIn14302 && !Array.isArray(ceIn14302);
  Ehe = (ceIn8791) => {
    if (
      ceIn8791 !== undefined &&
      (!Number.isFinite(ceIn8791) || ceIn8791 < 2 || ceIn8791 > 1e3)
    )
      throw Error("Logarithmic axis base must be from 2 through 1000");
    return ceIn8791;
  };
  workbookBinding704 = (ceIn3406) => {
    if (typeof ceIn3406 != "string") return ceIn3406;
    let workbookBinding11799 = ceIn3406.trim();
    if (workbookBinding11799)
      switch (workbookBinding11799.toLowerCase()) {
        case "nextto":
          return "nextTo";
        case "nexttoaxis":
        case "next_to_axis":
        case "next-to-axis":
          return "nextTo";
        case "high":
          return "high";
        case "low":
          return "low";
        case "none":
          return "none";
        default:
          return workbookBinding11799;
      }
  };
  Dhe = class {
    #e;
    constructor(ceIn14876) {
      this.#e = ceIn14876;
    }
    get text() {
      return this.#e.getText();
    }
    set text(ceIn13593) {
      this.#e.setText(ceIn13593 ?? undefined);
    }
    get textStyle() {
      return this.#e.textStyle;
    }
  };
  workbookBinding705 = class {
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
    #d;
    #f;
    #p;
    #m;
    #h;
    #g;
    #_;
    #v;
    #y;
    #b;
    #x = false;
    #S;
    #C;
    #w;
    #T;
    #E;
    #D;
    #O;
    #k;
    #A;
    #j;
    #M;
    #N;
    #P;
    #F;
    #I;
    #L() {
      this.#x = false;
    }
    constructor(ceIn488, ceIn489) {
      this.#t = ceIn488?.id;
      this.#n = ceIn488?.kind;
      this.#r = ceIn488?.crossingAxisId;
      this.#i = ceIn488?.categoryGapWidth;
      this.#a = ceIn488?.unit;
      this.#o = ceIn488?.baseTimeUnit;
      this.#s = ceIn488?.majorTimeUnit;
      this.#c = ceIn488?.minorTimeUnit;
      this.#e =
        ceIn488?.kind === _presentationGn.AXIS_KIND_DATE
          ? "dateAxis"
          : ceIn488?.kind === _presentationGn.AXIS_KIND_CATEGORY
            ? "textAxis"
            : undefined;
      this.#f = ceIn488?.title;
      this.#p = ceIn488?.titleManualLayout
        ? structuredClone(ceIn488.titleManualLayout)
        : undefined;
      this.#m = ceIn488?.numberFormatCode;
      this.#h = ceIn488?.numberFormatSourceLinked;
      this.#g = ceIn488?.min;
      this.#_ = ceIn488?.max;
      this.#v = ceIn488?.logBase;
      this.#y = ceIn488?.majorUnit;
      this.#b = ceIn488?.minorUnit;
      this.#e = ceIn488?.axisType;
      this.#l = ceIn488?.tickLabelInterval;
      this.#u = ceIn488?.tickMarkInterval;
      this.#d = ceIn488?.tickLabelDistanceFromAxis;
      this.#x = ceIn488?.deleted ?? false;
      ceIn489?.addTextStyle(ceIn488?.titleTextStyle);
      this.#S = new workbookVt(ceIn488?.titleTextStyle);
      this.#C = new Dhe({
        getText: () => this.#f,
        setText: (ceIn11626) => {
          this.#f = ceIn11626 ?? undefined;
          ceIn11626 !== undefined && this.#L();
        },
        textStyle: this.#S,
      });
      ceIn489?.addTextStyle(ceIn488?.textStyle);
      this.#w = new workbookVt(ceIn488?.textStyle);
      this.#T = new workbookBinding431({
        type: "proto",
        proto: ceIn488?.line,
      });
      this.#T.setChangeHandler(() => this.#L());
      this.#E = new workbookBinding431({
        type: "proto",
        proto: ceIn488?.majorGridlines,
      });
      this.#D = new workbookBinding431({
        type: "proto",
        proto: ceIn488?.minorGridlines,
      });
      this.#O = ceIn488?.position ? wie[ceIn488.position] : undefined;
      this.#k = ceIn488?.orientation ? Eie[ceIn488.orientation] : undefined;
      this.#A = ceIn488?.majorTickMark
        ? workbookBinding397[ceIn488.majorTickMark]
        : undefined;
      this.#j = ceIn488?.minorTickMark
        ? workbookBinding397[ceIn488.minorTickMark]
        : undefined;
      this.#M = ceIn488?.tickLabelPosition
        ? Die[ceIn488.tickLabelPosition]
        : undefined;
      this.#N = ceIn488?.crossBetween ? kie[ceIn488.crossBetween] : undefined;
      this.#P = ceIn488?.crosses ? jie[ceIn488.crosses] : undefined;
      this.#F = ceIn488?.crossValue;
      this.#I = new The(this);
    }
    get format() {
      return this.#I;
    }
    get axisType() {
      return this.#e;
    }
    set axisType(ceIn6054) {
      this.#e = ceIn6054 ?? undefined;
      this.#n =
        ceIn6054 === "dateAxis"
          ? _presentationGn.AXIS_KIND_DATE
          : ceIn6054 === "textAxis"
            ? _presentationGn.AXIS_KIND_CATEGORY
            : undefined;
      ceIn6054 !== undefined && this.#L();
    }
    get tickLabelInterval() {
      return this.#l;
    }
    set tickLabelInterval(ceIn11358) {
      this.#l = ceIn11358 ?? undefined;
      ceIn11358 !== undefined && this.#L();
    }
    get tickMarkInterval() {
      return this.#u;
    }
    set tickMarkInterval(ceIn11404) {
      this.#u = ceIn11404 ?? undefined;
      ceIn11404 !== undefined && this.#L();
    }
    get tickLabelDistanceFromAxis() {
      return this.#d;
    }
    set tickLabelDistanceFromAxis(ceIn11040) {
      this.#d = ceIn11040 ?? undefined;
      ceIn11040 !== undefined && this.#L();
    }
    get line() {
      return this.#T;
    }
    set line(ceIn11188) {
      this.#T = ceIn11188;
      this.#T.setChangeHandler(() => this.#L());
      this.#L();
    }
    get title() {
      return this.#C;
    }
    get titleManualLayout() {
      return this.#p;
    }
    set title(ceIn3294) {
      if (typeof ceIn3294 == "string") {
        this.#C.text = ceIn3294;
        return;
      }
      if (ceIn3294 == null) {
        this.#C.text = undefined;
        return;
      }
      if (workbookBinding703(ceIn3294)) {
        if ((this.#L(), "text" in ceIn3294)) {
          let workbookBinding21543 = ceIn3294.text;
          this.#C.text =
            typeof workbookBinding21543 == "string"
              ? workbookBinding21543
              : undefined;
        }
        if ("textStyle" in ceIn3294) {
          let workbookBinding21128 = ceIn3294.textStyle,
            workbookBinding21129 = workbookHelper104(workbookBinding21128);
          workbookBinding21129 &&
            workbookYt(this.#C.textStyle, workbookBinding21129);
        }
      }
    }
    get numberFormatCode() {
      return this.#m;
    }
    set numberFormatCode(ceIn11405) {
      this.#m = ceIn11405 ?? undefined;
      ceIn11405 !== undefined && this.#L();
    }
    get numberFormatSourceLinked() {
      return this.#h;
    }
    set numberFormatSourceLinked(ceIn10610) {
      this.#h = ceIn10610 === undefined ? undefined : !!ceIn10610;
      ceIn10610 !== undefined && this.#L();
    }
    get min() {
      return this.#g;
    }
    get textStyle() {
      return this.#w;
    }
    set textStyle(ceIn13298) {
      this.#w = ceIn13298;
      this.#L();
    }
    get majorGridlines() {
      return this.#E;
    }
    set majorGridlines(ceIn12116) {
      ceIn12116 ? (this.#E = ceIn12116) : (this.#E = new workbookBinding431());
    }
    get minorGridlines() {
      return this.#D;
    }
    set minorGridlines(ceIn13160) {
      this.#D = ceIn13160 ?? new workbookBinding431();
    }
    get position() {
      return this.#O;
    }
    set position(ceIn11790) {
      this.#O = ceIn11790 ?? undefined;
      ceIn11790 !== undefined && this.#L();
    }
    get orientation() {
      return this.#k;
    }
    set orientation(ceIn11627) {
      this.#k = ceIn11627 ?? undefined;
      ceIn11627 !== undefined && this.#L();
    }
    get majorTickMark() {
      return this.#A;
    }
    set majorTickMark(ceIn11564) {
      this.#A = ceIn11564 ?? undefined;
      ceIn11564 !== undefined && this.#L();
    }
    get minorTickMark() {
      return this.#j;
    }
    set minorTickMark(ceIn11565) {
      this.#j = ceIn11565 ?? undefined;
      ceIn11565 !== undefined && this.#L();
    }
    get tickLabelPosition() {
      return this.#M;
    }
    set tickLabelPosition(ceIn9763) {
      let workbookBinding20303 =
        ceIn9763 === undefined ? undefined : workbookBinding704(ceIn9763);
      this.#M = workbookBinding20303 ?? undefined;
      ceIn9763 !== undefined && this.#L();
    }
    get crossBetween() {
      return this.#N;
    }
    set crossBetween(ceIn11591) {
      this.#N = ceIn11591 ?? undefined;
      ceIn11591 !== undefined && this.#L();
    }
    get crosses() {
      return this.#P;
    }
    set crosses(ceIn9600) {
      this.#P = ceIn9600 ?? undefined;
      this.#P !== "at" && (this.#F = undefined);
      ceIn9600 !== undefined && this.#L();
    }
    get crossesAt() {
      return this.#F;
    }
    set crossesAt(ceIn10385) {
      this.#F = ceIn10385 ?? undefined;
      this.#F !== undefined && ((this.#P = "at"), this.#L());
    }
    set min(ceIn12046) {
      this.#g = ceIn12046 ?? undefined;
      ceIn12046 !== undefined && this.#L();
    }
    get max() {
      return this.#_;
    }
    set max(ceIn12047) {
      this.#_ = ceIn12047 ?? undefined;
      ceIn12047 !== undefined && this.#L();
    }
    get logBase() {
      return this.#v;
    }
    set logBase(ceIn12117) {
      this.#v = Ehe(ceIn12117);
      ceIn12117 !== undefined && this.#L();
    }
    get majorUnit() {
      return this.#y;
    }
    set majorUnit(ceIn11724) {
      this.#y = ceIn11724 ?? undefined;
      ceIn11724 !== undefined && this.#L();
    }
    get minorUnit() {
      return this.#b;
    }
    set minorUnit(ceIn11725) {
      this.#b = ceIn11725 ?? undefined;
      ceIn11725 !== undefined && this.#L();
    }
    get deleted() {
      return this.#x;
    }
    set deleted(ceIn14706) {
      this.#x = !!ceIn14706;
    }
    get visible() {
      return !this.#x;
    }
    set visible(ceIn14794) {
      this.#x = !ceIn14794;
    }
    toProto() {
      let workbookBinding4429 = {};
      this.#t !== undefined && (workbookBinding4429.id = this.#t);
      this.#n !== undefined && (workbookBinding4429.kind = this.#n);
      this.#r !== undefined && (workbookBinding4429.crossingAxisId = this.#r);
      this.#i !== undefined && (workbookBinding4429.categoryGapWidth = this.#i);
      this.#a !== undefined && (workbookBinding4429.unit = this.#a);
      this.#o !== undefined && (workbookBinding4429.baseTimeUnit = this.#o);
      this.#s !== undefined && (workbookBinding4429.majorTimeUnit = this.#s);
      this.#c !== undefined && (workbookBinding4429.minorTimeUnit = this.#c);
      this.#f && (workbookBinding4429.title = this.#f);
      this.#p &&
        (workbookBinding4429.titleManualLayout = structuredClone(this.#p));
      this.#m && (workbookBinding4429.numberFormatCode = this.#m);
      this.#h !== undefined &&
        (workbookBinding4429.numberFormatSourceLinked = this.#h);
      this.#g !== undefined && (workbookBinding4429.min = this.#g);
      this.#_ !== undefined && (workbookBinding4429.max = this.#_);
      this.#v !== undefined && (workbookBinding4429.logBase = this.#v);
      this.#y !== undefined && (workbookBinding4429.majorUnit = this.#y);
      this.#b !== undefined && (workbookBinding4429.minorUnit = this.#b);
      let workbookBinding4430 = this.#w.toProto();
      this.#w.isSet && (workbookBinding4429.textStyle = workbookBinding4430);
      let workbookBinding4431 = this.#S.toProto();
      this.#S.isSet &&
        (workbookBinding4429.titleTextStyle = workbookBinding4431);
      let workbookBinding4432 = this.#T.toProto();
      workbookBinding4432 && (workbookBinding4429.line = workbookBinding4432);
      let workbookBinding4433 = this.#E.toProto();
      workbookBinding4433 &&
        (workbookBinding4429.majorGridlines = workbookBinding4433);
      let workbookBinding4434 = this.#D.toProto();
      return (
        workbookBinding4434 &&
          (workbookBinding4429.minorGridlines = workbookBinding4434),
        this.#O && (workbookBinding4429.position = Cie[this.#O]),
        this.#k && (workbookBinding4429.orientation = Tie[this.#k]),
        this.#A &&
          (workbookBinding4429.majorTickMark = workbookBinding396[this.#A]),
        this.#j &&
          (workbookBinding4429.minorTickMark = workbookBinding396[this.#j]),
        this.#M &&
          this.#M in workbookBinding398 &&
          (workbookBinding4429.tickLabelPosition = workbookBinding398[this.#M]),
        this.#N && (workbookBinding4429.crossBetween = Oie[this.#N]),
        this.#P && (workbookBinding4429.crosses = Aie[this.#P]),
        this.#F !== undefined && (workbookBinding4429.crossValue = this.#F),
        this.#x && (workbookBinding4429.deleted = true),
        this.#l !== undefined &&
          (workbookBinding4429.tickLabelInterval = this.#l),
        this.#u !== undefined &&
          (workbookBinding4429.tickMarkInterval = this.#u),
        this.#e && (workbookBinding4429.axisType = this.#e),
        this.#d !== undefined &&
          (workbookBinding4429.tickLabelDistanceFromAxis = this.#d),
        Object.keys(workbookBinding4429).length > 0
          ? workbookBinding4429
          : undefined
      );
    }
  };
});
