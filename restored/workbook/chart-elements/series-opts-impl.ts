// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart series option VOs (legacy Ahe…zhe).
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

export let khe: any;
export let jhe: any;
export let Nhe: any;
export let workbookBinding706: any;
export let workbookBinding708: any;
export let workbookBinding709: any;
export let Lhe: any;
export let workbookBinding710: any;

export const Ahe = esmInit(() => {
  workbookBinding404();
  qn();
  khe = class {
    #e;
    #t;
    #n = false;
    #r;
    #i;
    #a;
    #o;
    constructor(ceIn5367) {
      this.#e = ceIn5367?.direction ? Lie[ceIn5367.direction] : undefined;
      this.#t = ceIn5367?.grouping
        ? workbookBinding401[ceIn5367.grouping]
        : undefined;
      this.#n = ceIn5367?.varyColors ?? false;
      this.#r = ceIn5367?.gapWidth;
      this.#i = ceIn5367?.gapDepth;
      this.#a = ceIn5367?.overlap;
      this.#o = ceIn5367?.bar3dShape;
    }
    get grouping() {
      return this.#t;
    }
    set grouping(ceIn14795) {
      this.#t = ceIn14795;
    }
    get direction() {
      return this.#e;
    }
    set direction(ceIn14707) {
      this.#e = ceIn14707;
    }
    get varyColors() {
      return this.#n;
    }
    set varyColors(ceIn14600) {
      this.#n = ceIn14600;
    }
    get gapWidth() {
      return this.#r;
    }
    set gapWidth(ceIn14796) {
      this.#r = ceIn14796;
    }
    get gapDepth() {
      return this.#i;
    }
    set gapDepth(ceIn14797) {
      this.#i = ceIn14797;
    }
    get overlap() {
      return this.#a;
    }
    set overlap(ceIn14877) {
      this.#a = ceIn14877;
    }
    get bar3dShape() {
      return this.#o;
    }
    set bar3dShape(ceIn14601) {
      this.#o = ceIn14601;
    }
    toProto() {
      let workbookBinding8850 = {},
        workbookBinding8851 = this.#e ? workbookBinding400[this.#e] : undefined;
      workbookBinding8851 !== undefined &&
        workbookBinding8851 !== _presentationVn.BAR_DIRECTION_UNSPECIFIED &&
        (workbookBinding8850.direction = workbookBinding8851);
      let workbookBinding8852 = this.#t ? Rie[this.#t] : undefined;
      workbookBinding8852 !== undefined &&
        workbookBinding8852 !== _presentationYn.BAR_GROUPING_UNSPECIFIED &&
        (workbookBinding8850.grouping = workbookBinding8852);
      this.#n && (workbookBinding8850.varyColors = true);
      this.#r !== undefined && (workbookBinding8850.gapWidth = this.#r);
      this.#i !== undefined && (workbookBinding8850.gapDepth = this.#i);
      let workbookBinding8853 = this.#a;
      return (
        workbookBinding8853 === undefined &&
          (this.#t === "stacked" || this.#t === "percentStacked") &&
          (workbookBinding8853 = 100),
        workbookBinding8853 !== undefined &&
          (workbookBinding8850.overlap = workbookBinding8853),
        this.#o !== undefined && (workbookBinding8850.bar3dShape = this.#o),
        Object.keys(workbookBinding8850).length > 0
          ? workbookBinding8850
          : undefined
      );
    }
  };
});
export const Mhe = esmInit(() => {
  workbookBinding404();
  jhe = class {
    showMeanLine;
    showMeanMarker;
    showNonOutliers;
    showOutliers;
    #e;
    constructor(ceIn5803) {
      this.showMeanLine = ceIn5803?.showMeanLine;
      this.showMeanMarker = ceIn5803?.showMeanMarker;
      this.showNonOutliers = ceIn5803?.showNonOutliers;
      this.showOutliers = ceIn5803?.showOutliers;
      this.#e = ceIn5803?.quartileMethod
        ? gie[ceIn5803.quartileMethod]
        : undefined;
    }
    get quartileMethod() {
      return this.#e;
    }
    set quartileMethod(ceIn14203) {
      this.#e = ceIn14203;
    }
    toProto() {
      let workbookBinding11223 = {};
      return (
        this.showMeanLine !== undefined &&
          (workbookBinding11223.showMeanLine = this.showMeanLine),
        this.showMeanMarker !== undefined &&
          (workbookBinding11223.showMeanMarker = this.showMeanMarker),
        this.showNonOutliers !== undefined &&
          (workbookBinding11223.showNonOutliers = this.showNonOutliers),
        this.showOutliers !== undefined &&
          (workbookBinding11223.showOutliers = this.showOutliers),
        this.#e !== undefined &&
          (workbookBinding11223.quartileMethod = hie[this.#e]),
        Object.keys(workbookBinding11223).length > 0
          ? workbookBinding11223
          : undefined
      );
    }
  };
});
export const Phe = esmInit(() => {
  Nhe = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    constructor(ceIn8118) {
      this.#e = ceIn8118?.is3d;
      this.#t = ceIn8118?.scale;
      this.#n = ceIn8118?.showNegative;
      this.#r = ceIn8118?.sizeRepresents;
      this.#i = ceIn8118?.varyColors;
    }
    get is3d() {
      return this.#e;
    }
    set is3d(ceIn15337) {
      this.#e = ceIn15337;
    }
    get scale() {
      return this.#t;
    }
    set scale(ceIn15299) {
      this.#t = ceIn15299;
    }
    get showNegative() {
      return this.#n;
    }
    set showNegative(ceIn14798) {
      this.#n = ceIn14798;
    }
    get sizeRepresents() {
      return this.#r;
    }
    set sizeRepresents(ceIn14602) {
      this.#r = ceIn14602;
    }
    get varyColors() {
      return this.#i;
    }
    set varyColors(ceIn14951) {
      this.#i = ceIn14951;
    }
    toProto() {
      let workbookBinding13909 = {};
      if (
        (this.#e !== undefined && (workbookBinding13909.is3d = this.#e),
        this.#t !== undefined && (workbookBinding13909.scale = this.#t),
        this.#n !== undefined && (workbookBinding13909.showNegative = this.#n),
        this.#r !== undefined &&
          (workbookBinding13909.sizeRepresents = this.#r),
        this.#i !== undefined && (workbookBinding13909.varyColors = this.#i),
        Object.keys(workbookBinding13909).length !== 0)
      )
        return workbookBinding13909;
    }
  };
});
export const workbookBinding707 = esmInit(() => {
  qn();
  workbookWt();
  workbookBinding432();
  workbookBinding404();
  workbookBt();
  workbookBinding706 = class {
    #e;
    #t = false;
    #n;
    #r = false;
    #i = false;
    #a = false;
    #o = false;
    #s = false;
    #c = false;
    #l = false;
    #u;
    #d;
    #f;
    #p;
    textStyle;
    #m;
    constructor(ceIn1678, ceIn1679) {
      this.#t = ceIn1678 !== undefined;
      ceIn1679?.addTextStyle(ceIn1678?.textStyle);
      this.textStyle = new workbookVt(ceIn1678?.textStyle);
      this.#m = new workbookBinding431({
        type: "proto",
        proto: ceIn1678?.stroke,
      });
      ceIn1678?.kind === "dataCallout"
        ? (this.#e = "dataCallout")
        : (this.#e = ceIn1678?.position
            ? workbookBinding395[ceIn1678.position]
            : undefined);
      this.#p = ceIn1678?.fill
        ? new workbookCt({
            type: "proto",
            proto: ceIn1678.fill,
          })
        : undefined;
      this.#n = ceIn1678?.deleted;
      ceIn1678 !== undefined &&
        ((this.#r = ceIn1678.showValue),
        (this.#i = ceIn1678.showSeriesName),
        (this.#a = ceIn1678.showCategoryName),
        (this.#o = ceIn1678.showLegendKey),
        (this.#s = ceIn1678.showPercent),
        (this.#c = ceIn1678.showBubbleSize),
        (this.#l = ceIn1678.showLeaderLines));
      this.#u = ceIn1678?.numberFormatCode;
      this.#d = ceIn1678?.numberFormatSourceLinked;
      this.#f = ceIn1678?.separator;
    }
    get position() {
      return this.#e;
    }
    set position(ceIn13772) {
      this.#e = ceIn13772 ?? undefined;
    }
    get deleted() {
      return this.#n;
    }
    set deleted(ceIn14878) {
      this.#n = ceIn14878;
    }
    get showValue() {
      return this.#r ?? false;
    }
    set showValue(ceIn12871) {
      this.#t = true;
      this.#r = !!ceIn12871;
    }
    get showSeriesName() {
      return this.#i ?? false;
    }
    set showSeriesName(ceIn12536) {
      this.#t = true;
      this.#i = !!ceIn12536;
    }
    get showCategoryName() {
      return this.#a ?? false;
    }
    set showCategoryName(ceIn12408) {
      this.#t = true;
      this.#a = !!ceIn12408;
    }
    get showLegendKey() {
      return this.#o ?? false;
    }
    set showLegendKey(ceIn12719) {
      this.#t = true;
      this.#o = ceIn12719;
    }
    get showPercent() {
      return this.#s ?? false;
    }
    set showPercent(ceIn12720) {
      this.#t = true;
      this.#s = !!ceIn12720;
    }
    get showBubbleSize() {
      return this.#c ?? false;
    }
    set showBubbleSize(ceIn12665) {
      this.#t = true;
      this.#c = ceIn12665;
    }
    get showLeaderLines() {
      return this.#l ?? false;
    }
    set showLeaderLines(ceIn12496) {
      this.#t = true;
      this.#l = !!ceIn12496;
    }
    get numberFormatCode() {
      return this.#u;
    }
    set numberFormatCode(ceIn13161) {
      this.#u = ceIn13161 ?? undefined;
    }
    get numberFormatSourceLinked() {
      return this.#d;
    }
    set numberFormatSourceLinked(ceIn13299) {
      this.#d = ceIn13299;
    }
    get separator() {
      return this.#f;
    }
    set separator(ceIn13721) {
      this.#f = ceIn13721 ?? undefined;
    }
    get stroke() {
      return this.#m;
    }
    set stroke(ceIn14204) {
      this.#m = new workbookBinding431(ceIn14204);
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14799) {
      this.stroke = ceIn14799;
    }
    get fill() {
      return this.#p;
    }
    set fill(ceIn14364) {
      this.#p = new workbookCt(ceIn14364);
    }
    toProto() {
      let workbookBinding5179 =
          this.#e !== undefined && this.#e !== "dataCallout"
            ? workbookBinding394[this.#e]
            : undefined,
        workbookBinding5180 = this.textStyle.toProto(),
        workbookBinding5181 = this.textStyle.isSet,
        workbookBinding5182 = this.#p?.toProto(),
        workbookBinding5183 = this.#m.toProto();
      if (
        !(
          this.#t ||
          this.#n !== undefined ||
          this.#u !== undefined ||
          this.#d !== undefined ||
          this.#f !== undefined ||
          (workbookBinding5179 !== undefined &&
            workbookBinding5179 !== En.DATA_LABEL_POSITION_UNSPECIFIED) ||
          this.#e === "dataCallout" ||
          workbookBinding5181 ||
          workbookBinding5182 !== undefined ||
          workbookBinding5183 !== undefined
        )
      )
        return;
      let workbookBinding5184 = {
        position: workbookBinding5179 ?? En.DATA_LABEL_POSITION_UNSPECIFIED,
        textStyle: undefined,
        leaderLine: undefined,
        fill: workbookBinding5182 ?? undefined,
        stroke: workbookBinding5183 ?? undefined,
      };
      return (
        workbookBinding5181 &&
          (workbookBinding5184.textStyle = workbookBinding5180),
        this.#n !== undefined && (workbookBinding5184.deleted = this.#n),
        this.#r !== undefined && (workbookBinding5184.showValue = this.#r),
        this.#i !== undefined && (workbookBinding5184.showSeriesName = this.#i),
        this.#a !== undefined &&
          (workbookBinding5184.showCategoryName = this.#a),
        this.#s !== undefined && (workbookBinding5184.showPercent = this.#s),
        this.#o !== undefined && (workbookBinding5184.showLegendKey = this.#o),
        this.#c !== undefined && (workbookBinding5184.showBubbleSize = this.#c),
        this.#l !== undefined &&
          (workbookBinding5184.showLeaderLines = this.#l),
        this.#u !== undefined &&
          (workbookBinding5184.numberFormatCode = this.#u),
        this.#d !== undefined &&
          (workbookBinding5184.numberFormatSourceLinked = this.#d),
        this.#f !== undefined && (workbookBinding5184.separator = this.#f),
        this.#e === "dataCallout" && (workbookBinding5184.kind = "dataCallout"),
        workbookBinding5184
      );
    }
  };
});
export const Fhe = esmInit(() => {
  workbookWt();
  workbookBinding432();
  workbookBt();
  workbookBinding708 = class {
    #e = false;
    #t = false;
    #n;
    #r;
    #i;
    constructor(ceIn4279, ceIn4280) {
      this.#e = ceIn4279?.visible ?? false;
      this.#t = ceIn4279?.showLegendKey ?? false;
      this.#n = ceIn4279?.fill
        ? new workbookCt({
            type: "proto",
            proto: ceIn4279.fill,
          })
        : undefined;
      this.#r = ceIn4279?.stroke
        ? new workbookBinding431({
            type: "proto",
            proto: ceIn4279.stroke,
          })
        : undefined;
      ceIn4280?.addTextStyle(ceIn4279?.textStyle);
      this.#i = new workbookVt(ceIn4279?.textStyle);
    }
    get visible() {
      return this.#e;
    }
    set visible(ceIn14708) {
      this.#e = !!ceIn14708;
    }
    get showLegendKey() {
      return this.#t;
    }
    set showLegendKey(ceIn14154) {
      this.#t = !!ceIn14154;
    }
    get fill() {
      return this.#n;
    }
    set fill(ceIn13230) {
      this.#n = ceIn13230 ? new workbookCt(ceIn13230) : undefined;
    }
    get stroke() {
      return this.#r;
    }
    set stroke(ceIn13109) {
      this.#r = ceIn13109 ? new workbookBinding431(ceIn13109) : undefined;
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14800) {
      this.stroke = ceIn14800;
    }
    get textStyle() {
      return this.#i;
    }
    toProto() {
      let workbookBinding14810 = this.#i.toProto(),
        workbookBinding14811 = this.#n?.toProto(),
        workbookBinding14812 = this.#r?.toProto();
      if (
        this.#e ||
        this.#t ||
        workbookBinding14810 ||
        workbookBinding14811 ||
        workbookBinding14812
      )
        return {
          visible: this.#e,
          showLegendKey: this.#t,
          textStyle: workbookBinding14810,
          fill: workbookBinding14811,
          stroke: workbookBinding14812,
        };
    }
  };
});
export const Ihe = esmInit(() => {
  workbookBinding709 = class {
    #e;
    #t;
    constructor(ceIn11791) {
      this.#e = ceIn11791?.holeSize;
      this.#t = ceIn11791?.firstSliceAngle;
    }
    get holeSize() {
      return this.#e;
    }
    set holeSize(ceIn15182) {
      this.#e = ceIn15182;
    }
    get firstSliceAngle() {
      return this.#t;
    }
    set firstSliceAngle(ceIn14520) {
      this.#t = ceIn14520;
    }
    toProto() {
      let workbookBinding17730 = {};
      return (
        this.#e !== undefined && (workbookBinding17730.holeSize = this.#e),
        this.#t !== undefined &&
          (workbookBinding17730.firstSliceAngle = this.#t),
        Object.keys(workbookBinding17730).length > 0
          ? workbookBinding17730
          : undefined
      );
    }
  };
});
export const Rhe = esmInit(() => {
  Lhe = class {
    #e;
    constructor(ceIn14303) {
      this.#e = ceIn14303?.gapWidth;
    }
    get gapWidth() {
      return this.#e;
    }
    set gapWidth(ceIn15183) {
      this.#e = ceIn15183;
    }
    toProto() {
      if (this.#e !== undefined)
        return {
          gapWidth: this.#e,
        };
    }
  };
});
export const zhe = esmInit(() => {
  workbookBinding710 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(ceIn7152) {
      this.#e = ceIn7152?.intervalClosed;
      this.#t = ceIn7152?.binWidth;
      this.#n = ceIn7152?.binCount;
      this.#r = ceIn7152?.underflow;
      this.#i = ceIn7152?.overflow;
      this.#a = ceIn7152?.aggregated;
    }
    toProto() {
      let workbookBinding12933 = {};
      return (
        this.#e !== undefined &&
          (workbookBinding12933.intervalClosed = this.#e),
        this.#t !== undefined && (workbookBinding12933.binWidth = this.#t),
        this.#n !== undefined && (workbookBinding12933.binCount = this.#n),
        this.#r !== undefined && (workbookBinding12933.underflow = this.#r),
        this.#i !== undefined && (workbookBinding12933.overflow = this.#i),
        this.#a !== undefined && (workbookBinding12933.aggregated = this.#a),
        Object.keys(workbookBinding12933).length > 0
          ? workbookBinding12933
          : undefined
      );
    }
  };
});
