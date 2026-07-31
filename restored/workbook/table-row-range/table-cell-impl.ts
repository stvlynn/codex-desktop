// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation table cell VO
// (legacy JEe / Binding1315 / Binding1314; lineFromPartialProto + normalizeTableCellAnchor).
// Stage-3 wave-88 reunite with table-row-range; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import { Paragraphs, ensureParagraphsInit } from "../text-run";
import { TextStyle, ensureTextStyleInit } from "../text-style";
import { Fill, ensureFillInit } from "../fill";
import { Line, ensureLineInit } from "../line";
import { DetachedText, ensureDetachedTextInit } from "../detached-text";
import { emuToFrameUnit, frameUnitToEmu } from "../geometry-transform";
import { scH } from "../slides-collection";

/** Build a Line from a partial proto-ish bag (legacy `_workbookG`). */
export function lineFromPartialProto(partial: any): Line | undefined {
  if (!partial) return;
  let line = new Line();
  return (
    partial.width !== undefined && (line.width = partial.width),
    partial.style !== undefined && (line.style = partial.style),
    partial.compound !== undefined && (line.compound = partial.compound),
    partial.fill !== undefined && (line.fill = partial.fill),
    partial.color !== undefined && (line.fill.color = partial.color),
    line.toProto() ? line : undefined
  );
}
/** @deprecated Prefer `lineFromPartialProto` — legacy export alias. */
export const _workbookG = lineFromPartialProto;

export function normalizeTableCellAnchor(anchor: any): string | undefined {
  switch (anchor) {
    case undefined:
      return;
    case "t":
    case "top":
      return "t";
    case "ctr":
    case "middle":
    case "center":
      return "ctr";
    case "b":
    case "bottom":
      return "b";
    default:
      throw Error(
        `Unsupported table cell anchor: ${anchor}. Use "top", "middle", "bottom", "t", "ctr", or "b".`,
      );
  }
}
export let workbookBinding1314: {
  left: number;
  right: number;
  top: number;
  bottom: number;
};
export let workbookBinding1315: any;
export const JEe = esmInit(() => {
  ensureParagraphsInit();
  ensureFillInit();
  ensureLineInit();
  Qt();
  scH.ensureBinding1312();
  ensureDetachedTextInit();
  ensureTextStyleInit();
  workbookBinding1314 = {
    left: 9.600000000000001,
    right: 9.600000000000001,
    top: 4.800000000000001,
    bottom: 4.800000000000001,
  };
  workbookBinding1315 = class {
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
    constructor(tcIn599: any, tcIn600: any) {
      tcIn600.fontFamilyCache?.addTextStyle(tcIn599?.textStyle);
      tcIn600.fontFamilyCache?.addLevelStyles(tcIn599?.levelsStyles);
      tcIn600.fontFamilyCache?.addElements(tcIn599?.elements);
      this.#e = tcIn599?.id ?? scH.allocateLocalId();
      this.#t = new Paragraphs(tcIn600, tcIn599?.paragraphs ?? []);
      this.#r = tcIn599?.textStyle
        ? new TextStyle(tcIn599.textStyle)
        : undefined;
      this.#n = new DetachedText(this.#t, {
        getDefaultTextStyle: () => this.#r,
        setDefaultTextStyle: (tcIn13609) => {
          this.#r = tcIn13609 ?? undefined;
        },
        resolveTextStyle: (tcIn15868) => tcIn600.getTextStyleByName(tcIn15868),
      });
      this.#i = tcIn599?.levelsStyles ?? [];
      this.#a = new Fill({
        type: "proto",
        proto: tcIn599?.fill,
      });
      this.#o = {
        top: new Line({
          type: "proto",
          proto: tcIn599?.lines?.top,
        }),
        right: new Line({
          type: "proto",
          proto: tcIn599?.lines?.right,
        }),
        bottom: new Line({
          type: "proto",
          proto: tcIn599?.lines?.bottom,
        }),
        left: new Line({
          type: "proto",
          proto: tcIn599?.lines?.left,
        }),
        diagonalDown: new Line({
          type: "proto",
          proto: tcIn599?.lines?.diagonalDown,
        }),
        diagonalUp: new Line({
          type: "proto",
          proto: tcIn599?.lines?.diagonalUp,
        }),
      };
      this.#s = tcIn599?.gridSpan;
      this.#c = tcIn599?.rowSpan;
      this.#l = tcIn599?.horizontalMerge;
      this.#u = tcIn599?.verticalMerge;
      this.#d = tcIn599?.textDirection;
      this.#f =
        tcIn599?.marginLeft === undefined
          ? undefined
          : emuToFrameUnit(tcIn599.marginLeft);
      this.#p =
        tcIn599?.marginRight === undefined
          ? undefined
          : emuToFrameUnit(tcIn599.marginRight);
      this.#m =
        tcIn599?.marginTop === undefined
          ? undefined
          : emuToFrameUnit(tcIn599.marginTop);
      this.#h =
        tcIn599?.marginBottom === undefined
          ? undefined
          : emuToFrameUnit(tcIn599.marginBottom);
      this.#g = tcIn600.getPresentation !== undefined;
      this.#_ = normalizeTableCellAnchor(tcIn599?.anchor);
      this.#v = tcIn599?.anchorCenter;
      this.#y = tcIn599?.horizontalOverflow;
      this.#b = structuredClone(tcIn599?.elements ?? []);
    }
    get id() {
      return this.#e;
    }
    get paragraphs() {
      return this.#t;
    }
    get text() {
      return this.#n;
    }
    get value() {
      return this.#n.toString();
    }
    set value(tcIn9821) {
      if (tcIn9821 == null) {
        this.#n.set("");
        return;
      }
      this.#n.set(this.#x(tcIn9821));
    }
    get levelsStyles() {
      return this.#i;
    }
    get textStyle() {
      return ((this.#r ||= new TextStyle()), this.#r);
    }
    set textStyle(tcIn14719) {
      this.#r = tcIn14719;
    }
    get fill() {
      return this.#a;
    }
    set fill(tcIn7513) {
      if (tcIn7513 instanceof Fill) {
        let tcBind20570 = tcIn7513.toProto();
        this.#a = tcBind20570
          ? new Fill({
              type: "proto",
              proto: tcBind20570,
            })
          : new Fill();
        return;
      }
      this.#a = new Fill(tcIn7513);
    }
    get lines() {
      return this.#o;
    }
    set lines(tcIn4709) {
      tcIn4709.top && (this.#o.top = new Line(tcIn4709.top));
      tcIn4709.right && (this.#o.right = new Line(tcIn4709.right));
      tcIn4709.bottom && (this.#o.bottom = new Line(tcIn4709.bottom));
      tcIn4709.left && (this.#o.left = new Line(tcIn4709.left));
      tcIn4709.diagonalDown &&
        (this.#o.diagonalDown = new Line(tcIn4709.diagonalDown));
      tcIn4709.diagonalUp &&
        (this.#o.diagonalUp = new Line(tcIn4709.diagonalUp));
    }
    get borders() {
      return this.#o;
    }
    set borders(tcIn14960) {
      this.#E(tcIn14960);
    }
    get gridSpan() {
      return this.#s;
    }
    set gridSpan(tcIn14821) {
      this.#s = tcIn14821;
    }
    get rowSpan() {
      return this.#c;
    }
    set rowSpan(tcIn14893) {
      this.#c = tcIn14893;
    }
    get horizontalMerge() {
      return this.#l;
    }
    set horizontalMerge(tcIn14163) {
      this.#l = tcIn14163;
    }
    get verticalMerge() {
      return this.#u;
    }
    set verticalMerge(tcIn14314) {
      this.#u = tcIn14314;
    }
    get textDirection() {
      return this.#d;
    }
    set textDirection(tcIn14315) {
      this.#d = tcIn14315;
    }
    get margins() {
      if (
        !(
          this.#f === undefined &&
          this.#p === undefined &&
          this.#m === undefined &&
          this.#h === undefined
        )
      )
        return {
          left: this.#f,
          right: this.#p,
          top: this.#m,
          bottom: this.#h,
        };
    }
    set margins(tcIn9438) {
      this.#f = tcIn9438?.left;
      this.#p = tcIn9438?.right;
      this.#m = tcIn9438?.top;
      this.#h = tcIn9438?.bottom;
    }
    get anchor() {
      return this.#_;
    }
    set anchor(tcIn14617) {
      this.#_ = normalizeTableCellAnchor(tcIn14617);
    }
    get anchorCenter() {
      return this.#v;
    }
    set anchorCenter(tcIn14394) {
      this.#v = tcIn14394;
    }
    get horizontalOverflow() {
      return this.#y;
    }
    set horizontalOverflow(tcIn13783) {
      this.#y = tcIn13783;
    }
    get elements() {
      return structuredClone(this.#b);
    }
    set elements(tcIn13250) {
      this.#b = structuredClone(tcIn13250);
    }
    #x(tcIn8061) {
      return tcIn8061 instanceof tcBind626
        ? tcIn8061
        : typeof tcIn8061 == "number"
          ? String(tcIn8061)
          : (Array.isArray(tcIn8061) &&
              tcIn8061.every((item) => typeof item == "string"),
            tcIn8061);
    }
    toProto() {
      let tcBind7093 = this.#t.toProto();
      return {
        id: this.#e,
        paragraphs: tcBind7093,
        levelsStyles: this.#i,
        fill: this.#a.toProto(),
        text: this.value,
        textStyle: this.#r?.toProto(),
        lines: {
          left: this.#o.left?.toProto(),
          right: this.#o.right?.toProto(),
          top: this.#o.top?.toProto(),
          bottom: this.#o.bottom?.toProto(),
          diagonalDown: this.#o.diagonalDown?.toProto(),
          diagonalUp: this.#o.diagonalUp?.toProto(),
        },
        gridSpan: this.#s,
        rowSpan: this.#c,
        horizontalMerge: this.#l,
        verticalMerge: this.#u,
        textDirection: this.#d,
        marginLeft: this.#S(this.#f, workbookBinding1314.left),
        marginRight: this.#S(this.#p, workbookBinding1314.right),
        marginTop: this.#S(this.#m, workbookBinding1314.top),
        marginBottom: this.#S(this.#h, workbookBinding1314.bottom),
        anchor: this.#_,
        anchorCenter: this.#v,
        horizontalOverflow: this.#y,
        elements: this.#C(tcBind7093),
      };
    }
    #S(tcIn11979, tcIn11980) {
      return tcIn11979 === undefined
        ? this.#g
          ? frameUnitToEmu(tcIn11980)
          : undefined
        : frameUnitToEmu(tcIn11979);
    }
    #C(tcIn3777) {
      let tcBind12501 = this.#w(tcIn3777);
      if (this.#b.length === 0) return tcBind12501 ? [tcBind12501] : [];
      let tcBind12502 = [],
        tcBind12503 = false;
      for (let tcBind16325 of this.#b) {
        if (this.#T(tcBind16325)) {
          if (tcBind12501) {
            tcBind12503 ||= (tcBind12502.push(tcBind12501), true);
            continue;
          }
          tcBind12502.push(structuredClone(tcBind16325));
          continue;
        }
        tcBind12502.push(structuredClone(tcBind16325));
      }
      return (
        !tcBind12503 && tcBind12501 && tcBind12502.unshift(tcBind12501),
        tcBind12502
      );
    }
    #w(tcIn5338) {
      if (tcIn5338.length !== 0)
        return {
          id: `${this.#e}-text`,
          type: j.ELEMENT_TYPE_TEXT,
          paragraphs: tcIn5338,
          textStyle: this.#r?.toProto(),
          effects: [],
          children: [],
          levelsStyles: [],
          citations: [],
        };
    }
    #T(tcIn9851) {
      return (
        tcIn9851.type === j.ELEMENT_TYPE_TEXT ||
        tcIn9851.type === j.ELEMENT_TYPE_TEXT_GROUP
      );
    }
    #E(tcIn2670) {
      if (tcIn2670.top) {
        let tcBind22410 = lineFromPartialProto(tcIn2670.top);
        tcBind22410 && (this.#o.top = tcBind22410);
      }
      if (tcIn2670.right) {
        let tcBind22318 = lineFromPartialProto(tcIn2670.right);
        tcBind22318 && (this.#o.right = tcBind22318);
      }
      if (tcIn2670.bottom) {
        let tcBind22272 = lineFromPartialProto(tcIn2670.bottom);
        tcBind22272 && (this.#o.bottom = tcBind22272);
      }
      if (tcIn2670.left) {
        let tcBind22380 = lineFromPartialProto(tcIn2670.left);
        tcBind22380 && (this.#o.left = tcBind22380);
      }
      if (tcIn2670.diagonalDown) {
        let tcBind21903 = lineFromPartialProto(tcIn2670.diagonalDown);
        tcBind21903 && (this.#o.diagonalDown = tcBind21903);
      }
      if (tcIn2670.diagonalUp) {
        let tcBind22025 = lineFromPartialProto(tcIn2670.diagonalUp);
        tcBind22025 && (this.#o.diagonalUp = tcBind22025);
      }
    }
  };
});

/** Legacy workbookUnderscore — Line ensure alias. */
export const workbookUnderscore = ensureLineInit;
