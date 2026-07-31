// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart legend + plot extras (legacy Binding712…Jhe).
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

export let Bhe: any;
export let workbookBinding711: any;
export let Vhe: any;
export let Uhe: any;
export let workbookBinding713: any;
export let Khe: any;
export let workbookBinding714: any;

export const workbookBinding712 = esmInit(() => {
  workbookWt();
  workbookBinding432();
  workbookBinding404();
  workbookBt();
  Bhe = (props) => {
    if (typeof props != "string") return props;
    let workbookBinding11879 = props.trim();
    if (workbookBinding11879)
      switch (workbookBinding11879.toLowerCase()) {
        case "left":
          return "left";
        case "top":
          return "top";
        case "topright":
        case "top_right":
        case "top-right":
          return "topRight";
        case "right":
          return "right";
        case "bottom":
          return "bottom";
        default:
          return;
      }
  };
  workbookBinding711 = class {
    #e;
    #t = false;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(ceIn3518, ceIn3519, ceIn3520) {
      this.#e = ceIn3518?.position ? Sie[ceIn3518.position] : undefined;
      this.#t = ceIn3518?.overlay ?? false;
      this.#n = new workbookCt({
        type: "proto",
        proto: ceIn3518?.fill,
      });
      ceIn3520?.addTextStyle(ceIn3518?.textStyle);
      this.#r = new workbookVt(ceIn3518?.textStyle);
      this.#i = new workbookBinding431();
      this.#a = ceIn3518?.manualLayout
        ? {
            ...ceIn3518.manualLayout,
          }
        : undefined;
      this.#o = ceIn3518?.deletedEntryIndices ?? [];
      this.#s = ceIn3519;
      Object.preventExtensions(this);
    }
    get position() {
      return this.#e;
    }
    set position(ceIn9665) {
      let workbookBinding20199 = Bhe(ceIn9665);
      if (!workbookBinding20199)
        throw Error(`Unsupported legend position: ${String(ceIn9665)}`);
      this.#e = workbookBinding20199;
    }
    get overlay() {
      return this.#t;
    }
    get textStyle() {
      return this.#r;
    }
    set overlay(ceIn14709) {
      this.#t = !!ceIn14709;
    }
    get fill() {
      return this.#n;
    }
    set fill(ceIn14365) {
      this.#n = new workbookCt(ceIn14365);
    }
    get stroke() {
      return this.#i;
    }
    set stroke(ceIn14205) {
      this.#i = new workbookBinding431(ceIn14205);
    }
    get line() {
      return this.stroke;
    }
    set line(ceIn14801) {
      this.stroke = ceIn14801;
    }
    get manualLayout() {
      return this.#a;
    }
    set manualLayout(ceIn14366) {
      this.#a = ceIn14366;
    }
    get deletedEntryIndices() {
      return this.#o;
    }
    get visible() {
      return !!this.#s?.getHasLegend();
    }
    set visible(ceIn6135) {
      if (!this.#s)
        throw Error("legend.visible is not available without a chart host.");
      if (typeof ceIn6135 != "boolean")
        throw Error("legend.visible must be a boolean.");
      this.#s.setHasLegend(ceIn6135);
    }
    toProto() {
      let workbookBinding9656 = {};
      workbookBinding9656.position = (this.#e ? xie[this.#e] : undefined) ?? 0;
      workbookBinding9656.overlay = this.#t;
      workbookBinding9656.textStyle = this.textStyle.toProto();
      let workbookBinding9657 = this.#n?.toProto();
      workbookBinding9657 && (workbookBinding9656.fill = workbookBinding9657);
      let workbookBinding9658 = this.#i.toProto();
      if (
        (workbookBinding9658 &&
          (workbookBinding9656.stroke = workbookBinding9658),
        this.#a &&
          (workbookBinding9656.manualLayout = {
            ...this.#a,
          }),
        (workbookBinding9656.deletedEntryIndices = [...this.#o]),
        !(
          workbookBinding9656.position === undefined &&
          workbookBinding9656.overlay === undefined &&
          !workbookBinding9656.textStyle &&
          !workbookBinding9656.fill &&
          !workbookBinding9656.stroke &&
          !workbookBinding9656.manualLayout &&
          this.#o.length === 0
        ))
      )
        return workbookBinding9656;
    }
  };
});
export const Hhe = esmInit(() => {
  workbookBinding404();
  Vhe = class {
    #e;
    #t = false;
    #n = false;
    constructor(ceIn8944) {
      this.#e = ceIn8944?.grouping
        ? workbookBinding390[ceIn8944.grouping]
        : undefined;
      this.#t = ceIn8944?.smooth ?? false;
      this.#n = ceIn8944?.varyColors ?? false;
    }
    get grouping() {
      return this.#e;
    }
    set grouping(ceIn14802) {
      this.#e = ceIn14802;
    }
    get smooth() {
      return this.#t;
    }
    set smooth(ceIn14952) {
      this.#t = ceIn14952;
    }
    get varyColors() {
      return this.#n;
    }
    set varyColors(ceIn14603) {
      this.#n = ceIn14603;
    }
    toProto() {
      let workbookBinding16762 = {};
      return (
        this.#e && (workbookBinding16762.grouping = yie[this.#e]),
        this.#t && (workbookBinding16762.smooth = this.#t),
        this.#n && (workbookBinding16762.varyColors = this.#n),
        Object.keys(workbookBinding16762).length > 0
          ? workbookBinding16762
          : undefined
      );
    }
  };
});
export const Whe = esmInit(() => {
  qn();
  workbookBinding404();
  Uhe = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(ceIn4990) {
      this.#e = ceIn4990?.mapArea ? sie[ceIn4990.mapArea] : undefined;
      this.#t = ceIn4990?.projection ? pie[ceIn4990.projection] : undefined;
      this.#n = ceIn4990?.labelLayout ? die[ceIn4990.labelLayout] : undefined;
      this.#r = ceIn4990?.dataLevel ? lie[ceIn4990.dataLevel] : undefined;
      this.#i = ceIn4990?.showUnknown;
      this.#a = ceIn4990?.onlyRegionsWithData;
    }
    get mapArea() {
      return this.#e;
    }
    set mapArea(ceIn14879) {
      this.#e = ceIn14879;
    }
    get projection() {
      return this.#t;
    }
    set projection(ceIn14604) {
      this.#t = ceIn14604;
    }
    get labelLayout() {
      return this.#n;
    }
    set labelLayout(ceIn14521) {
      this.#n = ceIn14521;
    }
    get dataLevel() {
      return this.#r;
    }
    set dataLevel(ceIn14710) {
      this.#r = ceIn14710;
    }
    get showUnknown() {
      return this.#i;
    }
    set showUnknown(ceIn14522) {
      this.#i = ceIn14522;
    }
    get onlyRegionsWithData() {
      return this.#a;
    }
    set onlyRegionsWithData(ceIn13722) {
      this.#a = ceIn13722;
    }
    toProto() {
      let workbookBinding8230 = this.#e ? oie[this.#e] : undefined,
        workbookBinding8231 = this.#t ? fie[this.#t] : undefined,
        workbookBinding8232 = this.#n ? uie[this.#n] : undefined,
        workbookBinding8233 = this.#r ? cie[this.#r] : undefined,
        workbookBinding8234 = {
          colorScale: [],
        },
        workbookBinding8235 =
          workbookBinding8230 !== undefined &&
          workbookBinding8230 !== In.MAP_AREA_UNSPECIFIED,
        workbookBinding8236 =
          workbookBinding8231 !== undefined &&
          workbookBinding8231 !== _presentationZn.MAP_PROJECTION_UNSPECIFIED,
        workbookBinding8237 =
          workbookBinding8232 !== undefined &&
          workbookBinding8232 !== Rn.MAP_LABEL_LAYOUT_UNSPECIFIED,
        workbookBinding8238 =
          workbookBinding8233 !== undefined &&
          workbookBinding8233 !== Ln.MAP_DATA_LEVEL_UNSPECIFIED;
      return (
        workbookBinding8235 &&
          (workbookBinding8234.mapArea = workbookBinding8230),
        workbookBinding8236 &&
          (workbookBinding8234.projection = workbookBinding8231),
        workbookBinding8237 &&
          (workbookBinding8234.labelLayout = workbookBinding8232),
        workbookBinding8238 &&
          (workbookBinding8234.dataLevel = workbookBinding8233),
        this.#i !== undefined && (workbookBinding8234.showUnknown = this.#i),
        this.#a !== undefined &&
          (workbookBinding8234.onlyRegionsWithData = this.#a),
        workbookBinding8235 ||
        workbookBinding8236 ||
        workbookBinding8237 ||
        workbookBinding8238 ||
        this.#i !== undefined ||
        this.#a !== undefined
          ? workbookBinding8234
          : undefined
      );
    }
  };
});
export const Ghe = esmInit(() => {
  workbookBinding713 = class {
    #e;
    constructor(ceIn13666) {
      this.#e = ceIn13666?.firstSliceAngle;
    }
    get firstSliceAngle() {
      return this.#e;
    }
    set firstSliceAngle(ceIn14523) {
      this.#e = ceIn14523;
    }
    toProto() {
      if (this.#e !== undefined)
        return {
          firstSliceAngle: this.#e,
        };
    }
  };
});
export const qhe = esmInit(() => {
  workbookBinding404();
  Khe = class {
    #e;
    #t;
    constructor(ceIn10423) {
      this.#e = ceIn10423?.style ? Bie[ceIn10423.style] : undefined;
      this.#t = ceIn10423?.varyColors ?? false;
    }
    get style() {
      return this.#e;
    }
    set style(ceIn15105) {
      this.#e = ceIn15105;
    }
    get varyColors() {
      return this.#t;
    }
    set varyColors(ceIn14605) {
      this.#t = ceIn14605;
    }
    toProto() {
      let workbookBinding16895 = {},
        workbookBinding16896 = this.#e ? zie[this.#e] : undefined;
      return (
        workbookBinding16896 !== undefined &&
          (workbookBinding16895.style = workbookBinding16896),
        this.#t && (workbookBinding16895.varyColors = this.#t),
        Object.keys(workbookBinding16895).length > 0
          ? workbookBinding16895
          : undefined
      );
    }
  };
});
export const Jhe = esmInit(() => {
  workbookBinding432();
  qn();
  workbookBinding404();
  workbookBinding714 = class {
    #e = "none";
    #t;
    #n;
    #r;
    constructor(ceIn4332) {
      let workbookBinding13455 = ceIn4332?.find(
        (ceIn15808) => workbookBinding399[ceIn15808.valueType] !== undefined,
      );
      this.#e = workbookBinding13455
        ? (workbookBinding399[workbookBinding13455.valueType] ?? "none")
        : "none";
      this.#t = workbookBinding13455?.value;
      this.#n =
        workbookBinding13455?.noEndCap === true
          ? "noCap"
          : workbookBinding13455?.noEndCap === false
            ? "cap"
            : undefined;
      this.#r = new workbookBinding431({
        type: "proto",
        proto: workbookBinding13455?.stroke,
      });
    }
    get type() {
      return this.#e;
    }
    set type(ceIn15184) {
      this.#e = ceIn15184;
    }
    get value() {
      return this.#t;
    }
    set value(ceIn14155) {
      this.#t = ceIn14155 ?? undefined;
    }
    get endStyle() {
      return this.#n;
    }
    set endStyle(ceIn13773) {
      this.#n = ceIn13773 ?? undefined;
    }
    get line() {
      return this.#r;
    }
    set line(ceIn14367) {
      this.#r = new workbookBinding431(ceIn14367);
    }
    toProto() {
      let workbookBinding13567 = this.#e;
      if (workbookBinding13567 === "none") return;
      let workbookBinding13568 = this.#r.toProto();
      return [
        {
          direction: On.ERROR_BAR_DIRECTION_Y,
          type: _presentationKn.ERROR_BAR_TYPE_BOTH,
          valueType: Pie[workbookBinding13567],
          noEndCap: this.#n === "noCap" ? true : undefined,
          value: this.#t,
          stroke: workbookBinding13568,
        },
      ];
    }
  };
});
