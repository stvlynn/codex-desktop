// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Chart asset class (legacy Binding721/722).
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

import { Che, whe, uge } from "./prelude-impl";
import {
  workbookBinding718,
  vge,
  bge,
  Sge,
  wge,
  Ege,
} from "./series-opts-impl";
import { workbookBinding720, caFn352, Nge, Pge, Fge } from "./regression-impl";

export const workbookBinding722 = esmInit(() => {
  qn();
  workbookWt();
  workbookBinding432();
  workbookBinding404();
  workbookBinding433();
  workbookH();
  Che();
  Ohe();
  Ahe();
  Mhe();
  Phe();
  workbookBinding707();
  Fhe();
  Ihe();
  Rhe();
  zhe();
  workbookBinding712();
  Hhe();
  Whe();
  Ghe();
  qhe();
  bge();
  Sge();
  wge();
  Ege();
  workbookBinding718();
  workbookBinding720();
  workbookBt();
  workbookBinding721 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c = [];
    #l;
    #u;
    #d = false;
    #f;
    #p;
    #m;
    #h;
    #g;
    #_ = [];
    #v = [];
    #y;
    #b;
    #x;
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
    #L;
    #R;
    #z;
    #B;
    #V;
    #H;
    #U;
    constructor(caIn391, caIn392) {
      Nge(caIn391, caIn392);
      this.#e = caIn391?.id ?? randomUuid();
      this.#t = caIn391?.type ? workbookBinding391[caIn391.type] : undefined;
      this.#l = caIn391?.hasLegend;
      let workbookBinding3819 =
        caIn391?.series?.length === 1 && caIn391.titleTextStyle !== undefined
          ? caIn391.series[0]?.name
          : undefined;
      this.#n = caIn391?.title || workbookBinding3819;
      this.#o = caIn391?.titlePlacement;
      this.#r = structuredClone(caIn391?.titleParagraphs ?? []);
      this.#i = caIn391?.titleManualLayout
        ? structuredClone(caIn391.titleManualLayout)
        : undefined;
      this.#a = caIn391?.autoTitleDeleted;
      this.#s = caIn391?.styleIndex;
      this.#c = caIn391?.categories ?? [];
      this.#b = new xge(caIn391?.style);
      this.#x = new workbookBinding431({
        type: "proto",
        proto: caIn391?.chartLine,
      });
      this.#S = new workbookBinding431({
        type: "proto",
        proto: caIn391?.chartSpaceLine,
      });
      this.#f = caIn391?.chartFill
        ? new workbookCt({
            type: "proto",
            proto: caIn391.chartFill,
          })
        : undefined;
      this.#p = caIn391?.chartSpaceFill
        ? new workbookCt({
            type: "proto",
            proto: caIn391.chartSpaceFill,
          })
        : undefined;
      this.#m = caIn391?.plotAreaFill
        ? new workbookCt({
            type: "proto",
            proto: caIn391.plotAreaFill,
          })
        : undefined;
      this.#h = Pge(caIn391?.plotAreaManualLayout);
      this.#g = new workbookBinding710(caIn391?.histogramOptions);
      this.#_ = structuredClone(caIn391?.axes ?? []);
      for (let workbookBinding21588 of caIn391?.axes ?? []) {
        caIn392?.addTextStyle(workbookBinding21588.textStyle);
        caIn392?.addTextStyle(workbookBinding21588.titleTextStyle);
      }
      this.#v = structuredClone(caIn391?.chartGroups ?? []);
      this.#w = caIn391?.roundedCorners;
      this.#C = new workbookBinding431({
        type: "proto",
        proto: caIn391?.plotAreaLine,
      });
      this.#T = new workbookBinding711(
        caIn391?.legend,
        {
          getHasLegend: () => this.#l,
          setHasLegend: (caIn14157) => {
            this.#l = caIn14157;
          },
        },
        caIn392,
      );
      this.#E = new workbookBinding706(caIn391?.dataLabels, caIn392);
      this.#D = new workbookBinding708(caIn391?.dataTable, caIn392);
      caIn392?.addTextStyle(caIn391?.titleTextStyle);
      this.#O = new workbookVt(caIn391?.titleTextStyle);
      this.#k = new workbookBinding705(caIn391?.xAxis, caIn392);
      this.#A = new workbookBinding705(caIn391?.yAxis, caIn392);
      this.#j = new khe(caIn391?.barOptions);
      this.#M = new Vhe(caIn391?.lineOptions);
      this.#N = new She(caIn391?.areaOptions);
      this.#P = new Khe(caIn391?.scatterOptions);
      this.#F = new Nhe(caIn391?.bubbleOptions);
      this.#I = new workbookBinding713(caIn391?.pieOptions);
      this.#L = new jhe(caIn391?.boxWhiskerOptions);
      this.#R = new workbookBinding709(caIn391?.doughnutOptions);
      this.#z = new Lhe(caIn391?.funnelOptions);
      this.#B = new Cge(caIn391?.treemapOptions);
      this.#V = new Uhe(caIn391?.mapOptions);
      this.#H = new Tge(caIn391?.view3d);
      this.#U = new yge(caIn391?.series, undefined, caIn392);
    }
    get id() {
      return this.#e;
    }
    get type() {
      return this.#t;
    }
    set type(caIn13396) {
      this.#t !== caIn13396 && (this.#t = caIn13396);
    }
    get funnelOptions() {
      return this.#z;
    }
    set funnelOptions(caIn14307) {
      this.#z = caIn14307;
    }
    get title() {
      return this.#n;
    }
    set title(caIn13235) {
      this.#n = caIn13235;
      this.#r = [];
    }
    get titleParagraphs() {
      return this.#r;
    }
    get titleManualLayout() {
      return this.#i;
    }
    get autoTitleDeleted() {
      return this.#a;
    }
    get titlePlacement() {
      return this.#o;
    }
    set titlePlacement(caIn13301) {
      this.#o = caIn13301 ?? undefined;
    }
    get styleIndex() {
      return this.#s;
    }
    set styleIndex(caIn13667) {
      this.#s = caIn13667 ?? undefined;
    }
    get categories() {
      return [...this.#c];
    }
    resolveCategories(caIn5280) {
      if (this.#c.length > 0) return [...this.#c];
      let workbookBinding14891 = this.#U.items;
      if (caIn5280 !== undefined)
        return workbookBinding14891[caIn5280]?.resolveCategories() ?? [];
      let workbookBinding14892 = [];
      for (let workbookBinding21294 of workbookBinding14891) {
        let workbookBinding21836 = workbookBinding21294.resolveCategories();
        workbookBinding21836.length > workbookBinding14892.length &&
          (workbookBinding14892 = workbookBinding21836);
      }
      return workbookBinding14892;
    }
    getCategories(caIn12918) {
      return this.resolveCategories(caIn12918);
    }
    resolveSeriesCategories(caIn9171) {
      return (
        this.#U.items[caIn9171]?.resolveCategories(this.#c) ??
        this.resolveCategories(caIn9171)
      );
    }
    resolveSeriesValues(caIn11727) {
      return this.#U.items[caIn11727]?.resolveValues() ?? [];
    }
    set categories(caIn12599) {
      this.#c = uge(caIn12599, "Chart.categories");
    }
    get chartGroups() {
      return structuredClone(this.#v);
    }
    set chartGroups(caIn11359) {
      this.#v = structuredClone(caIn11359 ?? []);
      this.#y = undefined;
    }
    get comboRenderGroups() {
      return ((this.#y ||= this.#W()), this.#y);
    }
    get yAxis() {
      return this.#A;
    }
    get valueAxis() {
      return this.#A;
    }
    set yAxis(caIn9095) {
      if (caIn9095 instanceof workbookBinding705) {
        this.#A = caIn9095;
        return;
      }
      caIn9095 && typeof caIn9095 == "object" && whe(this.#A, caIn9095);
    }
    get barOptions() {
      return this.#j;
    }
    set barOptions(caIn14606) {
      this.#j = caIn14606;
    }
    get lineOptions() {
      return this.#M;
    }
    set lineOptions(caIn14526) {
      this.#M = caIn14526;
    }
    get areaOptions() {
      return this.#N;
    }
    set areaOptions(caIn14527) {
      this.#N = caIn14527;
    }
    get scatterOptions() {
      return this.#P;
    }
    set scatterOptions(caIn14214) {
      this.#P = caIn14214;
    }
    get bubbleOptions() {
      return this.#F;
    }
    set bubbleOptions(caIn14308) {
      this.#F = caIn14308;
    }
    get pieOptions() {
      return this.#I;
    }
    set pieOptions(caIn14607) {
      this.#I = caIn14607;
    }
    get boxWhiskerOptions() {
      return this.#L;
    }
    set boxWhiskerOptions(caIn13938) {
      this.#L = caIn13938;
    }
    get doughnutOptions() {
      return this.#R;
    }
    set doughnutOptions(caIn14158) {
      this.#R = caIn14158;
    }
    get xAxis() {
      return this.#k;
    }
    get categoryAxis() {
      return this.#k;
    }
    set xAxis(caIn9096) {
      if (caIn9096 instanceof workbookBinding705) {
        this.#k = caIn9096;
        return;
      }
      caIn9096 && typeof caIn9096 == "object" && whe(this.#k, caIn9096);
    }
    get legend() {
      return this.#T;
    }
    set legend(caIn14955) {
      this.#T = caIn14955;
    }
    get hasLegend() {
      return this.#l;
    }
    get mapOptions() {
      return this.#V;
    }
    set mapOptions(caIn14608) {
      this.#V = caIn14608;
    }
    get dataLabels() {
      return this.#E;
    }
    set dataLabels(caIn14609) {
      this.#E = caIn14609;
    }
    get dataTable() {
      return this.#D;
    }
    set dataTable(caIn14713) {
      this.#D = caIn14713;
    }
    get titleTextStyle() {
      return this.#O;
    }
    get style() {
      return this.#b;
    }
    get chartLine() {
      return this.#x;
    }
    get chartSpaceLine() {
      return this.#S;
    }
    get treemapOptions() {
      return this.#B;
    }
    set chartLine(caIn14714) {
      this.#x = caIn14714;
    }
    set chartSpaceLine(caIn14215) {
      this.#S = caIn14215;
    }
    get plotAreaLine() {
      return this.#C;
    }
    set hasLegend(caIn14715) {
      this.#l = caIn14715;
    }
    set titleTextStyle(caIn14216) {
      this.#O = caIn14216;
    }
    get displayBlanksAs() {
      return this.#u;
    }
    set displayBlanksAs(caIn13236) {
      this.#u = caIn13236 ?? undefined;
    }
    get showDlblsOverMax() {
      return this.#d;
    }
    set showDlblsOverMax(caIn13778) {
      this.#d = !!caIn13778;
    }
    get chartFill() {
      return this.#f;
    }
    set chartFill(caIn13939) {
      this.#f = new workbookCt(caIn13939);
    }
    get chartSpaceFill() {
      return this.#p;
    }
    set chartSpaceFill(caIn13496) {
      this.#p = new workbookCt(caIn13496);
    }
    get plotAreaFill() {
      return this.#m;
    }
    set plotAreaFill(caIn13668) {
      this.#m = new workbookCt(caIn13668);
    }
    get plotAreaManualLayout() {
      return this.#h
        ? {
            ...this.#h,
          }
        : undefined;
    }
    set plotAreaManualLayout(caIn12288) {
      this.#h = caIn12288
        ? {
            ...caIn12288,
          }
        : undefined;
    }
    get histogramOptions() {
      return this.#g.toProto();
    }
    set histogramOptions(caIn13302) {
      this.#g = new workbookBinding710(caIn13302);
    }
    get series() {
      return this.#U;
    }
    get roundedCorners() {
      return this.#w;
    }
    set roundedCorners(caIn13303) {
      this.#w = caIn13303 ?? undefined;
    }
    buildTrendlineRenderCache() {
      let workbookBinding5232 = new Map(),
        workbookBinding5233 = this.#t === "scatter" || this.#t === "bubble",
        workbookBinding5234 = this.#U.items;
      for (
        let workbookBinding5671 = 0;
        workbookBinding5671 < workbookBinding5234.length;
        workbookBinding5671++
      ) {
        let workbookBinding5753 = workbookBinding5234[workbookBinding5671],
          workbookBinding5754 = workbookBinding5753.trendlines.items;
        if (workbookBinding5754.length === 0) continue;
        let workbookBinding5755 = (() => {
            if (workbookBinding5233) {
              let workbookBinding13008 = workbookBinding5753.xValues ?? [],
                workbookBinding13009 = workbookBinding5753.values ?? [];
              return workbookBinding13008
                .map((item, index) => ({
                  x: item,
                  y: workbookBinding13009[index],
                }))
                .filter((item) => typeof item.y == "number")
                .filter(
                  (item) => Number.isFinite(item.x) && Number.isFinite(item.y),
                )
                .map((item) => ({
                  x: item.x,
                  y: item.y,
                }))
                .slice()
                .sort((caIn16350, caIn16351) => caIn16350.x - caIn16351.x);
            }
            return (workbookBinding5753.values ?? [])
              .map((item, index) => ({
                x: index,
                y: item,
              }))
              .filter((item) => typeof item.y == "number")
              .filter(
                (item) => Number.isFinite(item.x) && Number.isFinite(item.y),
              )
              .map((item) => ({
                x: item.x,
                y: item.y,
              }));
          })(),
          workbookBinding5756 = workbookBinding5754.map((item) =>
            caFn352({
              type: item.type ?? "linear",
              points: workbookBinding5755,
              polynomialOrder: item.polynomialOrder,
              movingAveragePeriod: item.movingAveragePeriod,
              forecastForward: item.forecastForward,
              forecastBackward: item.forecastBackward,
              intercept: item.intercept,
              displayEquation: item.displayEquation,
              displayRSquared: item.displayRSquared,
            }),
          );
        workbookBinding5756.some((item) => item !== null) &&
          workbookBinding5232.set(workbookBinding5671, workbookBinding5756);
      }
      return {
        bySeriesIndex: workbookBinding5232,
      };
    }
    get view3d() {
      return this.#H;
    }
    set view3d(caIn14956) {
      this.#H = caIn14956;
    }
    #W() {
      if (this.#t !== "combo" || this.#v.length === 0) return [];
      let workbookBinding6671 = new Map(
          this.#_.flatMap((item) =>
            item.id === undefined ? [] : [[item.id, item]],
          ),
        ),
        workbookBinding6672 = this.#k.toProto(),
        workbookBinding6673 = this.#A.toProto(),
        workbookBinding6674 = 0;
      return this.#v.map((item, index) => {
        let workbookBinding8432 = item.axisIds.flatMap((_item) => {
            let workbookBinding21997 = workbookBinding6671.get(_item);
            return workbookBinding21997 ? [workbookBinding21997] : [];
          }),
          workbookBinding8433 = item.axisIds.length > 0,
          workbookBinding8434 =
            workbookBinding8432.find(
              (_item) =>
                _item.kind === _presentationGn.AXIS_KIND_CATEGORY ||
                _item.kind === _presentationGn.AXIS_KIND_DATE,
            ) ??
            (workbookBinding8433
              ? workbookBinding8432[0]
              : workbookBinding6672),
          workbookBinding8435 =
            workbookBinding8432.find(
              (_item) =>
                _item.kind === _presentationGn.AXIS_KIND_VALUE &&
                _item !== workbookBinding8434,
            ) ??
            (workbookBinding8433
              ? workbookBinding8432[1]
              : workbookBinding6673),
          workbookBinding8436 =
            workbookBinding8435?.id !== undefined &&
            workbookBinding6673?.id !== undefined
              ? workbookBinding8435.id === workbookBinding6673.id
              : workbookBinding8435 === workbookBinding6673 || index === 0,
          workbookBinding8437 = {
            group: item,
            xAxis: workbookBinding8434,
            yAxis: workbookBinding8435,
            firstSeriesIndex: workbookBinding6674,
            isPrimaryValueAxis: workbookBinding8436,
          };
        return (
          (workbookBinding6674 += item.series.length),
          workbookBinding8437
        );
      });
    }
    toProto() {
      let workbookBinding3693 = [...this.#c],
        workbookBinding3694 = this.#U.toProto(),
        workbookBinding3695 = this.#b.toProto(),
        workbookBinding3696 = this.#T.toProto(),
        workbookBinding3697 = this.#E.toProto(),
        workbookBinding3698 = this.#O.toProto(),
        workbookBinding3699 = this.#k.toProto(),
        workbookBinding3700 = this.#A.toProto(),
        workbookBinding3701 = this.#f?.toProto(),
        workbookBinding3702 = this.#p?.toProto(),
        workbookBinding3703 = this.#m?.toProto(),
        workbookBinding3704 = this.#x.toProto(),
        workbookBinding3705 = this.#S.toProto(),
        workbookBinding3706 = this.#C.toProto(),
        workbookBinding3707 = this.#j.toProto(),
        workbookBinding3708 = this.#M.toProto(),
        workbookBinding3709 = this.#N.toProto(),
        workbookBinding3710 = this.#P.toProto(),
        workbookBinding3711 = this.#F.toProto(),
        workbookBinding3712 = this.#I.toProto(),
        workbookBinding3713 = this.#L.toProto(),
        workbookBinding3714 = this.#R.toProto(),
        workbookBinding3715 = this.#z.toProto(),
        workbookBinding3716 = this.#B.toProto(),
        workbookBinding3717 = this.#g.toProto(),
        workbookBinding3718 = this.#V.toProto(),
        workbookBinding3719 = this.#H.toProto(),
        workbookBinding3720 = this.#t ? workbookBinding388[this.#t] : undefined;
      if (workbookBinding3720 === undefined) return;
      let workbookBinding3721 = {
        id: this.#e,
        title: this.#n ?? "",
        categories: workbookBinding3693,
        series: workbookBinding3694,
        type: workbookBinding3720,
        barDirection: this.barOptions.direction
          ? workbookBinding400[this.barOptions.direction]
          : _presentationVn.BAR_DIRECTION_UNSPECIFIED,
        styleIndex: this.#s ?? 0,
        hasLegend: this.#l ?? false,
        pivotFormats: [],
        titleParagraphs: structuredClone(this.#r),
        bbox: undefined,
        xAxis: workbookBinding3699,
        yAxis: workbookBinding3700,
        axes: structuredClone(this.#_),
        chartGroups: structuredClone(this.#v),
        userShapes: [],
        legend: workbookBinding3696,
      };
      this.#o && (workbookBinding3721.titlePlacement = this.#o);
      let workbookBinding3722 = this.#D.toProto();
      workbookBinding3722 &&
        (workbookBinding3721.dataTable = workbookBinding3722);
      let workbookBinding3723 = this.#h ? Fge(this.#h) : undefined;
      return (
        workbookBinding3723 &&
          (workbookBinding3721.plotAreaManualLayout = workbookBinding3723),
        this.#i &&
          (workbookBinding3721.titleManualLayout = structuredClone(this.#i)),
        this.#a !== undefined &&
          (workbookBinding3721.autoTitleDeleted = this.#a),
        workbookBinding3697 &&
          (workbookBinding3721.dataLabels = workbookBinding3697),
        this.#O.isSet &&
          (workbookBinding3721.titleTextStyle = workbookBinding3698),
        workbookBinding3701 &&
          (workbookBinding3721.chartFill = workbookBinding3701),
        workbookBinding3704 &&
          (workbookBinding3721.chartLine = workbookBinding3704),
        workbookBinding3702 &&
          (workbookBinding3721.chartSpaceFill = workbookBinding3702),
        workbookBinding3705 &&
          (workbookBinding3721.chartSpaceLine = workbookBinding3705),
        this.#w !== undefined && (workbookBinding3721.roundedCorners = this.#w),
        workbookBinding3703 &&
          (workbookBinding3721.plotAreaFill = workbookBinding3703),
        workbookBinding3706 &&
          (workbookBinding3721.plotAreaLine = workbookBinding3706),
        workbookBinding3718 &&
          (workbookBinding3721.mapOptions = workbookBinding3718),
        workbookBinding3695 &&
          (workbookBinding3721.style = workbookBinding3695),
        this.#u !== undefined &&
          (workbookBinding3721.displayBlanksAs = caH.mapDisplayBlanksAs(
            this.#u,
          )),
        this.#d && (workbookBinding3721.showDlblsOverMax = true),
        workbookBinding3719 &&
          (workbookBinding3721.view3d = workbookBinding3719),
        workbookBinding3707 &&
          (workbookBinding3721.barOptions = workbookBinding3707),
        workbookBinding3708 &&
          (workbookBinding3721.lineOptions = workbookBinding3708),
        workbookBinding3709 &&
          (workbookBinding3721.areaOptions = workbookBinding3709),
        workbookBinding3712 &&
          (workbookBinding3721.pieOptions = workbookBinding3712),
        workbookBinding3713 &&
          (workbookBinding3721.boxWhiskerOptions = workbookBinding3713),
        workbookBinding3714 &&
          (workbookBinding3721.doughnutOptions = workbookBinding3714),
        workbookBinding3715 &&
          (workbookBinding3721.funnelOptions = workbookBinding3715),
        workbookBinding3710 &&
          (workbookBinding3721.scatterOptions = workbookBinding3710),
        workbookBinding3711 &&
          (workbookBinding3721.bubbleOptions = workbookBinding3711),
        workbookBinding3716 &&
          (workbookBinding3721.treemapOptions = workbookBinding3716),
        workbookBinding3717 &&
          (workbookBinding3721.histogramOptions = workbookBinding3717),
        workbookBinding3721
      );
    }
  };
});
