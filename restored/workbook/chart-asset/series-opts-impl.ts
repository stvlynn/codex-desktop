// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series fill/stroke VO + chart option VOs (legacy Binding718/vge…Ege).
// Stage-3 wave-75 cohesive chart-asset impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { qn } from "../presentation-protobuf";
import {
  ensureChartProtoNameMapsInit as workbookBinding404,
  areaGroupingNameToProto as vie,
  areaGroupingProtoToName as workbookBinding389,
  layoutTargetNameToProto as _ie,
  layoutModeNameToProto as workbookBinding386,
} from "../chart-proto-name-maps";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  applyTextStylePatch as workbookYt,
  parseTextStyleInput,
  parseFontSizePx,
} from "../text-style";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../stable-id";
import {
  WorkbookColor as workbookBinding382,
  ensureWorkbookColorInit as workbookBinding383,
} from "../theme-color";
import {
  The,
  workbookBinding703,
  Ehe,
  workbookBinding704,
  Dhe,
  workbookBinding705,
  Ohe,
  khe,
  jhe,
  Nhe,
  workbookBinding706,
  workbookBinding707,
  workbookBinding708,
  workbookBinding709,
  Lhe,
  workbookBinding710,
  Ahe,
  Mhe,
  Phe,
  Fhe,
  Ihe,
  Rhe,
  zhe,
  Bhe,
  workbookBinding711,
  workbookBinding712,
  Vhe,
  Uhe,
  workbookBinding713,
  Khe,
  workbookBinding714,
  Hhe,
  Whe,
  Ghe,
  qhe,
  Jhe,
  workbookBinding715,
  Xhe,
  Qhe,
  workbookBinding716,
  tge,
  Yhe,
  Zhe,
  $he,
  ege,
  nge,
  workbookBinding717,
  ige,
} from "../chart-elements";
import { caH } from "./boundary-hooks";
import {
  She,
  oge,
  mge,
  hge,
  gge,
  _ge,
  workbookBinding719,
  yge,
  xge,
  Cge,
  Tge,
  workbookBinding721,
} from "./ca-slots";

/** No-op leave-behind (legacy Binding433). */
const workbookBinding433 = (): void => {};

import { sge, cge, uge, caFn346, caFn347 } from "./prelude-impl";

export const workbookBinding718 = esmInit(() => {
  mge = "​";
});
export const vge = esmInit(() => {
  workbookWt();
  workbookBinding432();
  Jhe();
  workbookBinding707();
  Zhe();
  $he();
  nge();
  sge();
  workbookBinding718();
  hge = class {
    #e;
    constructor(caIn14880) {
      this.#e = caIn14880;
    }
    clear() {
      this.#e.fill = {
        type: "none",
      };
    }
    setSolidColor(caIn14213) {
      this.#e.fill = caIn14213;
    }
    get color() {
      let workbookBinding21217 = this.#e.fill?.toConfig();
      return typeof workbookBinding21217 == "string"
        ? workbookBinding21217
        : undefined;
    }
    set color(caIn11233) {
      typeof caIn11233 != "string" ||
        caIn11233.trim().length === 0 ||
        (this.#e.fill = caIn11233);
    }
  };
  gge = class {
    #e;
    constructor(caIn14881) {
      this.#e = caIn14881;
    }
    get visible() {
      return this.#e.stroke.visible;
    }
    set visible(caIn13495) {
      this.#e.stroke.visible = caIn13495;
    }
    get color() {
      return this.#e.stroke.color;
    }
    set color(caIn13776) {
      this.#e.stroke.color = caIn13776;
    }
    get style() {
      return this.#e.stroke.style;
    }
    set style(caIn13777) {
      this.#e.stroke.style = caIn13777;
    }
    get weight() {
      return this.#e.stroke.width;
    }
    set weight(caIn13724) {
      this.#e.stroke.width = caIn13724;
    }
  };
  _ge = class {
    #e;
    #t;
    #n;
    constructor(caIn11326) {
      this.#e = caIn11326;
      this.#t = new hge(caIn11326);
      this.#n = new gge(caIn11326);
    }
    get fill() {
      return this.#t;
    }
    set fill(caIn14712) {
      this.#e.fill = caIn14712;
    }
    get line() {
      return this.#n;
    }
    set line(caIn14525) {
      this.#e.stroke = caIn14525;
    }
  };
  workbookBinding719 = class {
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
    #x;
    #S;
    #C;
    #w;
    #T;
    #E;
    #D;
    #O = false;
    #k;
    constructor(caIn1103, caIn1104, caIn1105) {
      this.#e = caIn1103?.name ?? "";
      this.#t = caIn1103?.values;
      this.#n = caIn1103?.valueIndices;
      this.#r = caIn1103?.valuePointCount;
      this.#i = caIn1103?.categories;
      this.#a = caIn1103?.categoryIndices;
      this.#o = caIn1103?.categoryPointCount;
      this.#s = caIn1103?.xValues;
      this.#c = caIn1103?.xFormula;
      this.#l = caIn1103?.bubbleSizes;
      this.#u =
        caIn1103?.categoryPaths?.map((caIn16512) => caIn16512.levels) ?? [];
      this.#d = caIn1103?.valuesFormatCode;
      this.#f = caIn1103?.xValuesFormatCode;
      this.#p = caIn1103?.fill
        ? new workbookCt({
            type: "proto",
            proto: caIn1103.fill,
          })
        : undefined;
      this.#m = caIn1103?.explosion;
      this.#h = caIn1103?.smooth;
      this.#_ = new workbookBinding431({
        type: "proto",
        proto: caIn1103?.stroke,
      });
      this.#y = new Qhe(caIn1103?.marker);
      this.#b = new workbookBinding706(caIn1103?.dataLabels, caIn1105);
      this.#x = new tge(caIn1103?.points);
      this.#S = new Xhe(caIn1103?.dataLabelOverrides, caIn1105);
      this.#C = new oge(caIn1103?.trendlines, caIn1105);
      this.#w = new workbookBinding714(caIn1103?.errorBars);
      this.#T = caIn1103?.formula;
      this.#E = caIn1103?.stringCache;
      this.#D = caIn1103?.categoryFormula;
      this.#k = caIn1104;
    }
    setChangeHandler(caIn14369) {
      this.#k = caIn14369;
    }
    get name() {
      return this.#e;
    }
    set name(caIn13594) {
      this.#e = caIn13594;
      this.#k?.();
    }
    get values() {
      if (this.#t) return this.resolveValues();
    }
    set values(caIn11155) {
      this.#t = caIn11155;
      this.#n = undefined;
      this.#r = undefined;
      this.#k?.();
    }
    resolveValues() {
      return cge(this.#A);
    }
    get categories() {
      return caFn346(this.#A);
    }
    set categories(caIn9601) {
      this.#i = this.#j(caIn9601);
      this.#a = undefined;
      this.#o = undefined;
      this.#k?.();
    }
    resolveCategories(caIn13393) {
      return caFn347(this.#A, caIn13393);
    }
    get #A() {
      return {
        categories: this.#i,
        categoryIndices: this.#a,
        categoryPointCount: this.#o,
        values: this.#t,
        valueIndices: this.#n,
        valuePointCount: this.#r,
      };
    }
    get xValues() {
      return this.#s;
    }
    set xValues(caIn13300) {
      this.#s = caIn13300;
      this.#k?.();
    }
    get xFormula() {
      return this.#c;
    }
    set xFormula(caIn12597) {
      this.#c = caIn12597 ?? undefined;
      this.#k?.();
    }
    get categoryPaths() {
      return this.#u?.map((caIn16595) => [...caIn16595]) ?? [];
    }
    get marker() {
      return this.#y;
    }
    set marker(caIn14954) {
      this.#y = caIn14954;
    }
    set categoryPaths(caIn11082) {
      this.#u = (caIn11082 ?? []).map((item) => [...(item ?? [])]);
      this.#k?.();
    }
    get bubbleSizes() {
      return this.#l;
    }
    set bubbleSizes(caIn13049) {
      this.#l = caIn13049;
      this.#k?.();
    }
    get valuesFormatCode() {
      return this.#d;
    }
    set valuesFormatCode(caIn12118) {
      this.#d = caIn12118 ?? undefined;
      this.#k?.();
    }
    get xValuesFormatCode() {
      return this.#f;
    }
    set xValuesFormatCode(caIn12048) {
      this.#f = caIn12048 ?? undefined;
      this.#k?.();
    }
    get fill() {
      return this.#p;
    }
    set fill(caIn12174) {
      this.#p = caIn12174 ? new workbookCt(caIn12174) : undefined;
      this.#k?.();
    }
    get format() {
      return ((this.#v ||= new _ge(this)), this.#v);
    }
    get explosion() {
      return this.#m;
    }
    set explosion(caIn12537) {
      this.#m = caIn12537 ?? undefined;
      this.#k?.();
    }
    get smooth() {
      return this.#h;
    }
    set smooth(caIn13394) {
      this.#h = caIn13394;
      this.#k?.();
    }
    get stroke() {
      return this.#_;
    }
    set stroke(caIn12872) {
      this.#_ = new workbookBinding431(caIn12872);
      this.#k?.();
    }
    get line() {
      return this.stroke;
    }
    set line(caIn14807) {
      this.stroke = caIn14807;
    }
    setCategoryNormalizer(caIn9789) {
      this.#g = caIn9789;
      caIn9789 && (this.#i = this.#i ? caIn9789(this.#i) : undefined);
      this.#k?.();
    }
    #j(caIn10709) {
      let workbookBinding21218 = uge(caIn10709, "ChartSeries.categories");
      return [
        ...(this.#g ? this.#g(workbookBinding21218) : workbookBinding21218),
      ];
    }
    get dataLabelOverrides() {
      return this.#S;
    }
    get dataLabels() {
      return this.#b;
    }
    set dataLabels(caIn13111) {
      this.#b = caIn13111;
      this.#k?.();
    }
    set dataLabelOverrides(caIn12598) {
      this.#S = caIn12598;
      this.#k?.();
    }
    get trendlines() {
      return this.#C;
    }
    set trendlines(caIn13112) {
      this.#C = caIn13112;
      this.#k?.();
    }
    get errorBars() {
      return this.#w;
    }
    set errorBars(caIn4649) {
      if (caIn4649 instanceof workbookBinding714) {
        this.#w = caIn4649;
        this.#k?.();
        return;
      }
      caIn4649.type !== undefined && (this.#w.type = caIn4649.type);
      caIn4649.value !== undefined && (this.#w.value = caIn4649.value);
      caIn4649.endStyle !== undefined && (this.#w.endStyle = caIn4649.endStyle);
      caIn4649.line !== undefined && (this.#w.line = caIn4649.line);
      this.#k?.();
    }
    get points() {
      return this.#x;
    }
    set points(caIn13395) {
      this.#x = caIn13395;
      this.#k?.();
    }
    get formula() {
      return this.#T;
    }
    set formula(caIn12666) {
      this.#T = caIn12666 ?? undefined;
      this.#k?.();
    }
    get categoryFormula() {
      return this.#D;
    }
    set categoryFormula(caIn12175) {
      this.#D = caIn12175 ?? undefined;
      this.#k?.();
    }
    get isNullObject() {
      return false;
    }
    delete() {
      this.#O = true;
      this.#k?.();
    }
    __isDeleted() {
      return this.#O;
    }
    toProto() {
      if (this.#O) return;
      let workbookBinding5573 =
          this.#i && this.#i.length > 0 ? [...this.#i] : [],
        workbookBinding5574 = this.#y.toProto(),
        workbookBinding5575 = this.#p?.toProto(),
        workbookBinding5576 = this.#_.toProto(),
        workbookBinding5577 = this.#b.toProto(),
        workbookBinding5578 = this.#x.toProto(),
        workbookBinding5579 = this.#S.toProto(),
        workbookBinding5580 = this.#C.toProto(),
        workbookBinding5581 = this.#w.toProto(),
        workbookBinding5582 = this.#u?.map((caIn16261) => ({
          levels: caIn16261,
        })),
        workbookBinding5583 = {
          name: this.#e ?? "",
          values: this.#t ?? [],
          xFormula: this.#c ?? "",
          categories: workbookBinding5573,
          valuesFormatCode: this.#d,
          xValues: this.#s ?? [],
          xValuesFormatCode: this.#f,
          bubbleSizes: this.#l ?? [],
          bubbleSizeFormula: "",
          categoryPaths: workbookBinding5582 ?? [],
          dataLabels: workbookBinding5577,
          dataLabelOverrides: workbookBinding5579,
          trendlines: workbookBinding5580,
          errorBars: workbookBinding5581 ?? [],
          axisIds: [],
          categoryIndices: this.#a ?? [],
          valueIndices: this.#n ?? [],
          points: workbookBinding5578,
          explosion: this.#m,
          smooth: this.#h,
          fill: workbookBinding5575,
          stroke: workbookBinding5576,
          marker: workbookBinding5574,
          formula: this.#T ?? "",
          stringCache: this.#E ?? "",
          categoryFormula: this.#D ?? "",
        };
      return (
        this.#r !== undefined &&
          (workbookBinding5583.valuePointCount = this.#r),
        this.#o !== undefined &&
          (workbookBinding5583.categoryPointCount = this.#o),
        workbookBinding5583
      );
    }
  };
});
export const bge = esmInit(() => {
  vge();
  yge = class {
    #e;
    #t;
    #n;
    constructor(caIn8415, caIn8416, caIn8417) {
      this.#t = caIn8416;
      this.#n = caIn8417;
      this.#e = [];
      caIn8415 &&
        (this.#e = caIn8415.map((item) =>
          this.#r(new workbookBinding719(item, undefined, this.#n)),
        ));
    }
    add(caIn10242) {
      let workbookBinding20703 = this.#r(
        new workbookBinding719(
          {
            name: caIn10242,
          },
          undefined,
          this.#n,
        ),
      );
      return (
        this.#e.push(workbookBinding20703),
        this.#t?.(),
        workbookBinding20703
      );
    }
    setChangeHandler(caIn10522) {
      this.#t = caIn10522;
      for (let workbookBinding22722 of this.#e)
        workbookBinding22722.setChangeHandler(() => this.#t?.());
    }
    getItemAt(caIn8903) {
      let workbookBinding19453 = this.#e.filter((item) => !item.__isDeleted())[
        caIn8903
      ];
      if (!workbookBinding19453)
        throw Error(`Chart series at index ${caIn8903} not found`);
      return workbookBinding19453;
    }
    deleteAt(caIn13725) {
      this.getItemAt(caIn13725).delete();
    }
    get items() {
      return this.#e.filter((item) => !item.__isDeleted());
    }
    clear() {
      this.#e.length !== 0 && ((this.#e = []), this.#t?.());
    }
    deleteAll() {
      this.clear();
    }
    toProto() {
      return this.#e.map((item) => item.toProto()).filter((item) => !!item);
    }
    get length() {
      return this.#e.filter((item) => !item.__isDeleted()).length;
    }
    #r(caIn12538) {
      return (caIn12538.setChangeHandler(() => this.#t?.()), caIn12538);
    }
  };
});
export const Sge = esmInit(() => {
  workbookBinding383();
  xge = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(caIn3734) {
      this.#e = caIn3734?.styleId;
      this.#t = caIn3734?.colorStyleId;
      this.#n =
        caIn3734?.palette.map(
          (caIn15490) =>
            new workbookBinding382({
              type: "proto",
              proto: caIn15490,
            }),
        ) ?? [];
      this.#r = caIn3734?.themeName;
      this.#i = caIn3734?.colorStyleMethod;
      this.#a = structuredClone(caIn3734?.chartStyleEntries ?? []);
      this.#o = structuredClone(caIn3734?.chartStyleMarkerLayout);
      this.#s = structuredClone(caIn3734?.colorStyleVariations ?? []);
    }
    get styleId() {
      return this.#e;
    }
    set styleId(caIn14882) {
      this.#e = caIn14882;
    }
    get colorStyleId() {
      return this.#t;
    }
    set colorStyleId(caIn14370) {
      this.#t = caIn14370;
    }
    set palette(caIn14883) {
      this.#n = caIn14883;
    }
    get themeName() {
      return this.#r;
    }
    get colorStyleMethod() {
      return this.#i;
    }
    set colorStyleMethod(caIn14012) {
      this.#i = caIn14012;
    }
    toProto() {
      if (
        !(
          this.#e === undefined &&
          this.#t === undefined &&
          this.#r === undefined &&
          this.#i === undefined &&
          this.#n.length === 0 &&
          this.#a.length === 0 &&
          this.#o === undefined &&
          this.#s.length === 0
        )
      )
        return {
          styleId: this.#e,
          colorStyleId: this.#t,
          palette: this.#n.map((item) => item.toProto()),
          themeName: this.#r,
          colorStyleMethod: this.#i,
          chartStyleEntries: structuredClone(this.#a),
          chartStyleMarkerLayout: structuredClone(this.#o),
          colorStyleVariations: structuredClone(this.#s),
        };
    }
  };
});
export const wge = esmInit(() => {
  workbookBinding433();
  qn();
  workbookBinding404();
  Cge = class {
    #e;
    constructor(caIn11189) {
      this.#e = caIn11189?.parentLabelLayout
        ? mie[caIn11189.parentLabelLayout]
        : undefined;
    }
    get parentLabelLayout() {
      return this.#e;
    }
    set parentLabelLayout(caIn13937) {
      this.#e = caIn13937;
    }
    toProto() {
      if (!this.#e) return;
      let workbookBinding19157 = caH.mapParentLabelLayout(this.#e);
      if (workbookBinding19157 !== Gn.PARENT_LABEL_LAYOUT_UNSPECIFIED)
        return {
          parentLabelLayout: workbookBinding19157,
        };
    }
  };
});
export const Ege = esmInit(() => {
  Tge = class {
    rotX;
    rotY;
    perspective;
    rightAngleAxes;
    constructor(caIn8532) {
      this.rotX = caIn8532?.rotX;
      this.rotY = caIn8532?.rotY;
      this.perspective = caIn8532?.perspective;
      this.rightAngleAxes = caIn8532?.rightAngleAxes;
    }
    toProto() {
      if (
        !(
          this.rotX === undefined &&
          this.rotY === undefined &&
          this.perspective === undefined &&
          this.rightAngleAxes === undefined
        )
      )
        return {
          rotX: this.rotX,
          rotY: this.rotY,
          perspective: this.perspective,
          rightAngleAxes: this.rightAngleAxes,
        };
    }
  };
});
