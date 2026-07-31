// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: SparklineGroup VO (legacy Binding813–815 / ensureSparklineGroupInit).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Cn as spreadsheetCn,
  d,
  En as spreadsheetEn,
  Sn,
  Vn as ensureSpreadsheetProtoInit,
} from "../spreadsheet-protobuf";
import { WorkbookColor, ensureWorkbookColorInit } from "../theme-color";
import {
  ensureStableIdConstantsInit,
  bracedUuidUpper,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  normalizeA1Token,
  parseSheetRef,
  boundsSize,
} from "../../utils/spreadsheet-address-utils";
import {
  buildSparklineSetOp,
  buildSparklineAddOp,
  buildSparklineSelector,
} from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import { sparklines } from "./sparkline-bindings";

import { ensureSparklinePreviewInit } from "./sparkline-preview";
import { ensureSparklineAxisInit } from "./sparkline-axis";
import { ensureSparklineMarkersInit } from "./sparkline-markers";
import { ensureSparklineTypeMapsInit } from "./sparkline-type-maps";
export const ensureSparklineGroupInit = esmInit(() => {
  ensureSpreadsheetProtoInit();
  ensureWorkbookColorInit();
  initAddressUtils();
  ensureSparklinePreviewInit();
  ensureSparklineAxisInit();
  ensureSparklineMarkersInit();
  ensureStableIdConstantsInit();
  ensureBinding662();
  ensureSparklineTypeMapsInit();
  ensureSparklinePreviewInit();
  ensureSparklineAxisInit();
  ensureSparklineMarkersInit();
  ensureSparklineTypeMapsInit();
  sparklines.hashSparklineSeed = (spIn8382: any) => {
    let spBind18890 = 2166136261;
    for (let spBind21703 = 0; spBind21703 < spIn8382.length; spBind21703 += 1) {
      spBind18890 ^= spIn8382.charCodeAt(spBind21703);
      spBind18890 = Math.imul(spBind18890, 16777619);
    }
    return (spBind18890 >>> 0).toString(36);
  };
  sparklines.sparklineGroupIdFromProto = (spIn5204: any) => {
    let spBind14735 = (spIn5204.sparklines ?? [])
      .map((item) => `${item.reference ?? ""}|${item.formula ?? ""}`)
      .filter((item) => item.length > 1);
    if (!spBind14735.length && !spIn5204.formula) return;
    let spBind14736 = JSON.stringify({
      type: spIn5204.type,
      formula: spIn5204.formula ?? "",
      sparklines: spBind14735,
    });
    return `spg_${sparklines.hashSparklineSeed(spBind14736)}`;
  };
  sparklines.SparklineGroup = class SparklineGroup {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s = 0;
    #c;
    #l;
    #u;
    #d;
    #f;
    #p;
    #m;
    constructor(spIn3014: any, spIn3015: any, spIn3016: any) {
      this.#e = spIn3014;
      this.#t = spIn3015;
      this.#n = spIn3016?.uid ?? spIn3015.uid ?? bracedUuidUpper();
      this.#t.uid = this.#n;
      this.#r =
        spIn3016?.id ??
        sparklines.sparklineGroupIdFromProto(spIn3015) ??
        randomBase36Id();
      this.#t.sparklines = spIn3015.sparklines ?? [];
      this.#t.type = spIn3015.type ?? spreadsheetEn.SPARKLINE_TYPE_LINE;
      this.#l = new Map();
      this.#w();
      this.#E();
      this.#u = new sparklines.SparklineMarkers(this.#t, () => this.#h());
      this.#d = new sparklines.SparklineAxis(this.#t, () => this.#h());
      this.#f = [];
      this.#m = spIn3016?.createdInRecorder;
    }
    get id() {
      return this.#r;
    }
    get uid() {
      return this.#n;
    }
    get type() {
      return (
        sparklines.sparklineTypeProtoToName[
          this.#t.type ?? spreadsheetEn.SPARKLINE_TYPE_LINE
        ] ?? "line"
      );
    }
    set type(spIn13051: any) {
      this.#t.type = sparklines.sparklineTypeNameToProto[spIn13051];
      this.#h();
    }
    get locationRange() {
      let spBind19474 = this.#i;
      if (!spBind19474)
        throw Error("Sparkline group has no target range assigned.");
      return this.#e.getRange(spBind19474);
    }
    set locationRange(spIn8845: any) {
      let spBind19389 = this.#x(spIn8845);
      if (!spBind19389) throw Error("Invalid sparkline location range.");
      this.#i = spBind19389;
      this.#_();
      this.#h();
    }
    get sourceData() {
      let spBind19552 = this.#a;
      if (!spBind19552)
        throw Error("Sparkline group has no source range assigned.");
      return this.#e.getRange(spBind19552);
    }
    set sourceData(spIn8028: any) {
      let spBind18522 = this.#S(spIn8028);
      if (!spBind18522.ref) throw Error("Invalid sparkline source range.");
      this.#a = spBind18522.ref;
      this.#c = spBind18522.sheetName;
      this.#_();
      this.#h();
    }
    get dateAxisRange() {
      if (this.#o) return this.#e.getRange(this.#o);
    }
    set dateAxisRange(spIn6861: any) {
      if (!spIn6861) {
        this.#o = undefined;
        this.#h();
        return;
      }
      let spBind17176 = this.#x(spIn6861);
      if (!spBind17176) throw Error("Invalid date axis range.");
      this.#o = spBind17176;
      this.#h();
    }
    get displayEmptyCellsAs() {
      return this.#t.displayEmptyCellsAs;
    }
    set displayEmptyCellsAs(spIn9222: any) {
      this.#t.displayEmptyCellsAs =
        spIn9222 ?? spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_UNSPECIFIED;
      this.#h();
    }
    get displayHidden() {
      return !!this.#t.displayHidden;
    }
    set displayHidden(spIn12051: any) {
      this.#t.displayHidden = !!spIn12051;
      this.#h();
    }
    get lineWeight() {
      return this.#t.lineWeight;
    }
    set lineWeight(spIn10293: any) {
      this.#t.lineWeight =
        spIn10293 === undefined || Number.isNaN(spIn10293)
          ? undefined
          : spIn10293;
      this.#h();
    }
    get seriesColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.seriesColor,
      });
    }
    set seriesColor(spIn11517: any) {
      this.#t.seriesColor = new WorkbookColor(spIn11517).toProto();
      this.#h();
    }
    get negativeColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.negativeColor,
      });
    }
    set negativeColor(spIn11330: any) {
      this.#t.negativeColor = new WorkbookColor(spIn11330).toProto();
      this.#h();
    }
    get axisColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.axisColor,
      });
    }
    set axisColor(spIn11674: any) {
      this.#t.axisColor = new WorkbookColor(spIn11674).toProto();
      this.#h();
    }
    get markersColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.markersColor,
      });
    }
    set markersColor(spIn11407: any) {
      this.#t.markersColor = new WorkbookColor(spIn11407).toProto();
      this.#h();
    }
    get firstMarkerColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.firstMarkerColor,
      });
    }
    set firstMarkerColor(spIn11084: any) {
      this.#t.firstMarkerColor = new WorkbookColor(spIn11084).toProto();
      this.#h();
    }
    get lastMarkerColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.lastMarkerColor,
      });
    }
    set lastMarkerColor(spIn11156: any) {
      this.#t.lastMarkerColor = new WorkbookColor(spIn11156).toProto();
      this.#h();
    }
    get highMarkerColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.highMarkerColor,
      });
    }
    set highMarkerColor(spIn11157: any) {
      this.#t.highMarkerColor = new WorkbookColor(spIn11157).toProto();
      this.#h();
    }
    get lowMarkerColor() {
      return new WorkbookColor({
        type: "proto",
        proto: this.#t.lowMarkerColor,
      });
    }
    set lowMarkerColor(spIn11238: any) {
      this.#t.lowMarkerColor = new WorkbookColor(spIn11238).toProto();
      this.#h();
    }
    get rightToLeft() {
      return this.axis.rightToLeft;
    }
    set rightToLeft(spIn13241: any) {
      this.axis.rightToLeft = spIn13241;
    }
    get displayXAxis() {
      return this.axis.showAxis;
    }
    set displayXAxis(spIn13399: any) {
      this.axis.showAxis = spIn13399;
    }
    get worksheet() {
      return this.#e;
    }
    get markers() {
      return this.#u;
    }
    get axis() {
      return this.#d;
    }
    get formula() {
      return this.#t.formula;
    }
    set formula(spIn12921: any) {
      this.#t.formula = spIn12921;
      this.#h();
    }
    get sparklineCount() {
      return this.#s;
    }
    get renderContext() {
      return this.#f;
    }
    setChangeHandler(spIn14376: any) {
      this.#p = spIn14376;
    }
    updateRenderContext() {
      let spBind5483 = [];
      for (let spBind5721 of this.#l.values()) {
        let spBind5802 = parseA1Range(spBind5721.reference);
        if (!spBind5802) continue;
        let spBind5803 = spBind5721.sourceSheet;
        if (!spBind5803) continue;
        let spBind5804 = this.#e.workbook.__getWorksheetByName(spBind5803);
        if (!spBind5804) continue;
        let spBind5805 =
            spBind5804.getRange(spBind5721.sourceAddress).values?.[0] ?? [],
          spBind5806 = this.#D(spBind5805),
          spBind5807 = this.#O(spBind5806),
          spBind5808 = this.#k(spBind5806),
          spBind5809 =
            this.displayEmptyCellsAs ===
            spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_SPAN;
        spBind5483.push({
          address: spBind5721.reference,
          row: spBind5802.bounds.startRow,
          col: spBind5802.bounds.startCol,
          type: this.type,
          values: spBind5806,
          displayEmptyCellsAs: this.displayEmptyCellsAs,
          connectGaps: spBind5809,
          rightToLeft: this.axis.rightToLeft,
          showAxis: this.axis.showAxis,
          lineWeight: this.lineWeight,
          domain: spBind5807,
          colors: {
            series: this.seriesColor?.toProto(),
            negative: this.negativeColor?.toProto(),
            axis: this.axisColor?.toProto(),
            markers: this.markersColor?.toProto(),
            first: this.firstMarkerColor?.toProto(),
            last: this.lastMarkerColor?.toProto(),
            high: this.highMarkerColor?.toProto(),
            low: this.lowMarkerColor?.toProto(),
          },
          markers: this.markers,
          pointMeta: spBind5808,
        });
      }
      this.#f = spBind5483;
    }
    containsCell(spIn11628: any) {
      let spBind22019 = normalizeA1Token(spIn11628);
      return spBind22019 ? this.#l.has(spBind22019) : false;
    }
    getSparkline(spIn9635: any) {
      let spBind20172 = normalizeA1Token(spIn9635);
      if (!spBind20172) return;
      let spBind20173 = this.#l.get(spBind20172);
      if (spBind20173)
        return new sparklines.SparklinePreview(this, spBind20173);
    }
    toProto() {
      return {
        ...this.#t,
        sparklines: this.#t.sparklines.map((item) => ({
          formula: item.formula,
          reference: item.reference,
        })),
        seriesColor: this.seriesColor?.toProto(),
        negativeColor: this.negativeColor?.toProto(),
        axisColor: this.axisColor?.toProto(),
        markersColor: this.markersColor?.toProto(),
        firstMarkerColor: this.firstMarkerColor?.toProto(),
        lastMarkerColor: this.lastMarkerColor?.toProto(),
        highMarkerColor: this.highMarkerColor?.toProto(),
        lowMarkerColor: this.lowMarkerColor?.toProto(),
      };
    }
    #h() {
      this.updateRenderContext();
      this.#g();
      this.#p?.(this);
    }
    #g() {
      let spBind17447 = this.#e.workbook.getRecorder();
      spBind17447 &&
        this.#m !== spBind17447 &&
        spBind17447.deferOnce(`sparkline.set:${this.uid}`, () =>
          buildSparklineSetOp({
            group: this,
            sheetName: this.#e.name,
          }),
        );
    }
    #_() {
      if (!(!this.#i || !this.#a)) {
        if (!this.#v()) {
          this.#f = [];
          return;
        }
        this.#y();
        this.updateRenderContext();
      }
    }
    #v() {
      if (!this.#i || !this.#a) return false;
      let spBind16985 = parseA1Range(this.#i),
        spBind16986 = parseA1Range(this.#a);
      if (!spBind16985 || !spBind16986) return false;
      let spBind16987 = this.#b(spBind16985.bounds),
        spBind16988 = boundsSize(spBind16986.bounds).rows;
      return spBind16987.length === spBind16988;
    }
    #y() {
      let spBind7547 = parseA1Range(this.#i),
        spBind7548 = parseA1Range(this.#a);
      if (!spBind7547 || !spBind7548) {
        this.#t.sparklines = [];
        this.#s = 0;
        this.#l.clear();
        return;
      }
      let spBind7549 = this.#b(spBind7547.bounds),
        spBind7550 = boundsSize(spBind7548.bounds);
      if (spBind7549.length !== spBind7550.rows) return;
      let spBind7551 = [],
        spBind7552 = new Map(),
        spBind7553 = this.#c ?? this.#e.name;
      for (
        let spBind11342 = 0;
        spBind11342 < spBind7549.length;
        spBind11342 += 1
      ) {
        let spBind11766 = formatA1Range({
            startRow: spBind7548.bounds.startRow + spBind11342,
            endRow: spBind7548.bounds.startRow + spBind11342,
            startCol: spBind7548.bounds.startCol,
            endCol: spBind7548.bounds.endCol,
          }),
          spBind11767 = this.#C(spBind11766, this.#c),
          spBind11768 = spBind7549[spBind11342];
        spBind11768 &&
          (spBind7551.push({
            formula: spBind11767,
            reference: spBind11768,
          }),
          spBind7552.set(normalizeA1Token(spBind11768), {
            formula: spBind11767,
            reference: spBind11768,
            sourceAddress: spBind11766,
            sourceSheet: spBind7553,
          }));
      }
      this.#t.sparklines = spBind7551;
      this.#s = spBind7551.length;
      this.#l = spBind7552;
    }
    #b(spIn8383: any) {
      let spBind18891 = [];
      for (
        let spBind21024 = spIn8383.startRow;
        spBind21024 <= spIn8383.endRow;
        spBind21024 += 1
      )
        for (
          let spBind22646 = spIn8383.startCol;
          spBind22646 <= spIn8383.endCol;
          spBind22646 += 1
        )
          spBind18891.push(formatA1(spBind21024, spBind22646));
      return spBind18891;
    }
    #x(spIn10243: any) {
      if (spIn10243)
        return parseA1Range(
          (typeof spIn10243 == "string"
            ? this.#e.getRange(spIn10243)
            : spIn10243
          ).address,
        )?.ref;
    }
    #S(spIn5327: any) {
      if (!spIn5327)
        return {
          ref: undefined,
          sheetName: undefined,
        };
      if (typeof spIn5327 == "string") {
        let spBind21862 = parseSheetRef(spIn5327);
        return {
          ref: spBind21862.ref,
          sheetName: spBind21862.sheetName,
        };
      }
      let spBind14997 = spIn5327;
      return {
        ref: parseA1Range(spBind14997.address)?.ref,
        sheetName: spBind14997.__getWorksheet()?.name,
      };
    }
    #C(spIn8945: any, spIn8946: any) {
      let spBind19498 = spIn8946 || this.#e.name || "";
      return spBind19498
        ? `${/[\s'!]/.test(spBind19498) ? `'${spBind19498.replace(/'/g, "''")}'` : spBind19498}!${spIn8945}`
        : spIn8945;
    }
    #w() {
      if (this.#t.sparklines.length > 0) {
        let spBind15384 = this.#T(
          this.#t.sparklines.map((item) => item.reference),
        );
        spBind15384?.ref && (this.#i = spBind15384.ref);
        let spBind15385 = this.#t.formula
          ? parseSheetRef(this.#t.formula)
          : this.#T(this.#t.sparklines.map((item) => item.formula));
        spBind15385?.ref &&
          ((this.#a = spBind15385.ref), (this.#c = spBind15385.sheetName));
      }
    }
    #T(spIn2764: any) {
      let spBind10405 = [],
        spBind10406;
      for (let spBind17959 of spIn2764) {
        if (!spBind17959) continue;
        let spBind18421 = parseSheetRef(spBind17959),
          spBind18422 = spBind18421.ref;
        if (!spBind18422) continue;
        let spBind18423 = parseA1Range(spBind18422);
        spBind18423 &&
          (spBind10405.push(spBind18423.bounds),
          (spBind10406 ??= spBind18421.sheetName));
      }
      if (spBind10405.length)
        return {
          ref: formatA1Range({
            startRow: Math.min(...spBind10405.map((item) => item.startRow)),
            startCol: Math.min(...spBind10405.map((item) => item.startCol)),
            endRow: Math.max(...spBind10405.map((item) => item.endRow)),
            endCol: Math.max(...spBind10405.map((item) => item.endCol)),
          }),
          sheetName: spBind10406,
        };
    }
    #E() {
      this.#l.clear();
      for (let spBind12649 of this.#t.sparklines) {
        let { ref } = parseSheetRef(spBind12649.reference ?? ""),
          spBind13085 = spBind12649.formula ?? "",
          spBind13086 = ref ? normalizeA1Token(ref) : null,
          { ref: _ref, sheetName } = parseSheetRef(spBind13085);
        !ref ||
          !spBind13086 ||
          !_ref ||
          (this.#l.set(spBind13086, {
            reference: ref,
            formula: spBind13085,
            sourceAddress: _ref,
            sourceSheet: sheetName,
          }),
          sheetName && (this.#c = sheetName));
      }
      this.#s = this.#t.sparklines.length;
    }
    #D(spIn7923: any) {
      return spIn7923.map((item) => {
        if (item == null) return null;
        let spBind19742 = typeof item == "number" ? item : Number(item);
        return Number.isFinite(spBind19742) ? spBind19742 : null;
      });
    }
    #O(spIn3466: any) {
      let spBind11906 = spIn3466.filter(
          (item) => item !== null && Number.isFinite(item),
        ),
        spBind11907 = spBind11906.length > 0 ? Math.min(...spBind11906) : 0,
        spBind11908 = spBind11906.length > 0 ? Math.max(...spBind11906) : 0;
      return (
        this.axis.manualMin !== undefined &&
          (spBind11907 = this.axis.manualMin),
        this.axis.manualMax !== undefined &&
          (spBind11908 = this.axis.manualMax),
        this.type !== "line" &&
          ((spBind11907 = Math.min(spBind11907, 0)),
          (spBind11908 = Math.max(spBind11908, 0))),
        spBind11907 === spBind11908 && (--spBind11907, (spBind11908 += 1)),
        {
          min: spBind11907,
          max: spBind11908,
        }
      );
    }
    #k(spIn2360: any) {
      let spBind9537 = null,
        spBind9538 = null,
        spBind9539 = -1 / 0,
        spBind9540 = 1 / 0,
        spBind9541 = new Set(),
        spBind9542 = new Set(),
        spBind9543 = new Set();
      return (
        spIn2360.forEach((item, index) => {
          item === null ||
            !Number.isFinite(item) ||
            (spBind9537 === null && (spBind9537 = index),
            (spBind9538 = index),
            item < 0 && spBind9543.add(index),
            item > spBind9539
              ? ((spBind9539 = item), spBind9541.clear(), spBind9541.add(index))
              : item === spBind9539 && spBind9541.add(index),
            item < spBind9540
              ? ((spBind9540 = item), spBind9542.clear(), spBind9542.add(index))
              : item === spBind9540 && spBind9542.add(index));
        }),
        {
          firstIndex: spBind9537,
          lastIndex: spBind9538,
          highIndices: spBind9541,
          lowIndices: spBind9542,
          negativeIndices: spBind9543,
        }
      );
    }
  };
});
