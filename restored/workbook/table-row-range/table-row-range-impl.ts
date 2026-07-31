// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation table row / range / columns / borders
// (legacy YEe / Binding1321 / QEe / $Ee / Binding1316–1324 / XEe / ZEe).
// Stage-3 wave-85 cohesive table-row-range impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  ensureStyleResolveInit as workbookT,
  workbookGt,
} from "../text-style";
import { ensureFillInit as workbookWt } from "../fill";
import { frameUnitToEmu as workbookTt } from "../geometry-transform";
import { ensureLineInit as workbookBinding432 } from "../line";
import { scH } from "../slides-collection";
import {
  workbookBinding1316,
  workbookBinding1317,
  workbookBinding1318,
  workbookBinding1319,
  workbookBinding1320,
  workbookBinding1322,
  workbookBinding1323,
  workbookBinding1324,
} from "./tr-slots";
import { trH } from "./boundary-hooks";

export const YEe = esmInit(() => {
  trH.ensureJEe();
  scH.ensureBinding1312();
  workbookT();
  workbookBinding1316 = class {
    #e;
    #t;
    #n;
    #r;
    constructor(trIn7643, trIn7644) {
      this.#r = trIn7644;
      this.#e =
        trIn7643?.cells?.map(
          (trIn16364) => new trH.Binding1315(trIn16364, trIn7644),
        ) ?? [];
      this.#t = trIn7643?.id ?? scH.allocateLocalId();
      this.#n = trIn7643?.heightEmu ? trIn7643.heightEmu * workbookGt : 0;
    }
    get cells() {
      return this.#e;
    }
    getCell(trIn11981) {
      if (!(trIn11981 < 0 || trIn11981 >= this.#e.length))
        return this.#e[trIn11981];
    }
    get id() {
      return this.#t;
    }
    get height() {
      return this.#n;
    }
    set height(trIn9348) {
      if (!Number.isFinite(trIn9348) || trIn9348 < 0)
        throw Error("Row height must be a non-negative number.");
      this.#n = trIn9348;
    }
    get margins() {
      return this.#e[0]?.margins;
    }
    set margins(trIn12834) {
      for (let trBind23043 of this.#e) trBind23043.margins = trIn12834;
    }
    ensureCellCount(trIn7193) {
      if (trIn7193 <= 0) {
        this.#e = [];
        return;
      }
      for (; this.#e.length < trIn7193; )
        this.#e.push(new trH.Binding1315(undefined, this.#r));
      this.#e.length > trIn7193 && this.#e.splice(trIn7193);
    }
    toProto() {
      return {
        id: this.#t,
        heightEmu: workbookTt(this.#n),
        cells: this.#e.map((item) => item.toProto()),
      };
    }
  };
});
export function XEe(trIn6566: any, trIn6567: any) {
  for (let trBind17452 of trIn6566.paragraphs.items) {
    let trBind18405 = trBind17452.textStyle;
    if (trBind18405) {
      trBind18405.alignment = trIn6567;
      trBind17452.textStyle = trBind18405;
      continue;
    }
    if (trIn6567 !== undefined) {
      let trBind22460 = new workbookVt();
      trBind22460.alignment = trIn6567;
      trBind17452.textStyle = trBind22460;
    }
  }
}
export function ZEe(trIn7626: any, trIn7627: any) {
  if (!trIn7626 && !trIn7627) return true;
  if (!trIn7626 || !trIn7627) return false;
  let trBind18115 = trIn7626.toProto(),
    trBind18116 = trIn7627.toProto();
  return !trBind18115 && !trBind18116
    ? true
    : !trBind18115 || !trBind18116
      ? false
      : JSON.stringify(trBind18115) === JSON.stringify(trBind18116);
}
export const workbookBinding1321 = esmInit(() => {
  workbookWt();
  workbookBt();
  workbookBinding432();
  workbookBinding1317 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(trIn2790, trIn2791) {
      if (trIn2791.row < 0 || trIn2791.column < 0)
        throw Error("Table range indices must be non-negative.");
      if (trIn2791.rowCount <= 0 || trIn2791.columnCount <= 0)
        throw Error("Table range dimensions must be positive.");
      if (trIn2791.row + trIn2791.rowCount > trIn2790.rowCount)
        throw Error("Table range rows exceed table bounds.");
      if (trIn2791.column + trIn2791.columnCount > trIn2790.columnCount)
        throw Error("Table range columns exceed table bounds.");
      this.#e = trIn2790;
      this.#t = trIn2791.row;
      this.#n = trIn2791.column;
      this.#r = trIn2791.rowCount;
      this.#i = trIn2791.columnCount;
    }
    get rowCount() {
      return this.#r;
    }
    get columnCount() {
      return this.#i;
    }
    get fill() {
      return ((this.#s ||= new workbookBinding1318(this)), this.#s);
    }
    set fill(trIn14618) {
      this.applyFill(trIn14618);
    }
    get textStyle() {
      return ((this.#a ||= new workbookBinding1319(this)), this.#a);
    }
    get borders() {
      return ((this.#o ||= new workbookBinding1320(this)), this.#o);
    }
    set borders(trIn14038) {
      this.applyBorders(trIn14038);
    }
    assign(trIn2862) {
      "fill" in trIn2862 && this.applyFill(trIn2862.fill);
      "textStyle" in trIn2862 &&
        trIn2862.textStyle !== undefined &&
        this.applyTextStyle(trIn2862.textStyle);
      "borders" in trIn2862 &&
        trIn2862.borders !== undefined &&
        this.applyBorders(trIn2862.borders);
      this.#l((trIn5723) => {
        "margins" in trIn2862 && (trIn5723.margins = trIn2862.margins);
        "anchor" in trIn2862 && (trIn5723.anchor = trIn2862.anchor);
        "anchorCenter" in trIn2862 &&
          (trIn5723.anchorCenter = trIn2862.anchorCenter);
        "horizontalOverflow" in trIn2862 &&
          (trIn5723.horizontalOverflow = trIn2862.horizontalOverflow);
      });
    }
    applyFill(trIn6568) {
      this.#l((trIn7543) => {
        if (trIn6568 instanceof workbookCt) {
          let trBind20363 = trIn6568.toProto();
          trIn7543.fill = trBind20363
            ? new workbookCt({
                type: "proto",
                proto: trBind20363,
              })
            : new workbookCt();
          return;
        }
        trIn7543.fill = trIn6568;
      });
    }
    applyTextStyle(trIn9890) {
      this.#l((trIn11596) => {
        workbookYt(trIn11596.textStyle, trIn9890);
        "alignment" in trIn9890 && XEe(trIn11596, trIn9890.alignment);
      });
    }
    applyBorders(trIn902) {
      let trBind5725 = {};
      trIn902.outside &&
        ((trBind5725.top ??= trIn902.outside),
        (trBind5725.bottom ??= trIn902.outside),
        (trBind5725.left ??= trIn902.outside),
        (trBind5725.right ??= trIn902.outside));
      trIn902.inside &&
        ((trBind5725.insideHorizontal ??= trIn902.inside),
        (trBind5725.insideVertical ??= trIn902.inside));
      trIn902.top && (trBind5725.top = trIn902.top);
      trIn902.bottom && (trBind5725.bottom = trIn902.bottom);
      trIn902.left && (trBind5725.left = trIn902.left);
      trIn902.right && (trBind5725.right = trIn902.right);
      trIn902.insideHorizontal &&
        (trBind5725.insideHorizontal = trIn902.insideHorizontal);
      trIn902.insideVertical &&
        (trBind5725.insideVertical = trIn902.insideVertical);
      trIn902.diagonalDown && (trBind5725.diagonalDown = trIn902.diagonalDown);
      trIn902.diagonalUp && (trBind5725.diagonalUp = trIn902.diagonalUp);
      this.#l((trIn2525, trIn2526, trIn2527) => {
        trBind5725.top &&
          trIn2526 === 0 &&
          this.#c(trIn2525, "top", trBind5725.top);
        trBind5725.bottom &&
          trIn2526 === this.#r - 1 &&
          this.#c(trIn2525, "bottom", trBind5725.bottom);
        trBind5725.left &&
          trIn2527 === 0 &&
          this.#c(trIn2525, "left", trBind5725.left);
        trBind5725.right &&
          trIn2527 === this.#i - 1 &&
          this.#c(trIn2525, "right", trBind5725.right);
        trBind5725.insideHorizontal &&
          trIn2526 < this.#r - 1 &&
          this.#c(trIn2525, "bottom", trBind5725.insideHorizontal);
        trBind5725.insideVertical &&
          trIn2527 < this.#i - 1 &&
          this.#c(trIn2525, "right", trBind5725.insideVertical);
        trBind5725.diagonalDown &&
          this.#c(trIn2525, "diagonalDown", trBind5725.diagonalDown);
        trBind5725.diagonalUp &&
          this.#c(trIn2525, "diagonalUp", trBind5725.diagonalUp);
      });
    }
    forEachCell(trIn14961) {
      this.#l(trIn14961);
    }
    #c(trIn12373, trIn12374, trIn12375) {
      let trBind22399 = _workbookG(trIn12375);
      trBind22399 && (trIn12373.lines[trIn12374] = trBind22399);
    }
    #l(trIn8856) {
      for (let trBind20230 = 0; trBind20230 < this.#r; trBind20230 += 1)
        for (let trBind21755 = 0; trBind21755 < this.#i; trBind21755 += 1)
          trIn8856(
            this.#e.getCell(this.#t + trBind20230, this.#n + trBind21755),
            trBind20230,
            trBind21755,
          );
    }
  };
  workbookBinding1318 = class {
    #e;
    constructor(trIn14894) {
      this.#e = trIn14894;
    }
    get color() {}
    set color(trIn8743) {
      if (trIn8743 === undefined) {
        this.#e.applyFill(undefined);
        return;
      }
      this.#e.applyFill({
        type: "solid",
        color: trIn8743,
      });
    }
  };
  workbookBinding1319 = class {
    #e;
    constructor(trIn14895) {
      this.#e = trIn14895;
    }
    get bold() {
      return this.#n((trIn16598) => trIn16598.bold);
    }
    set bold(trIn11982) {
      this.#t((trIn15259) => {
        trIn15259.bold = trIn11982;
      });
    }
    get italic() {
      return this.#n((trIn16537) => trIn16537.italic);
    }
    set italic(trIn11739) {
      this.#t((trIn15193) => {
        trIn15193.italic = trIn11739;
      });
    }
    get fontSize() {
      return this.#n((trIn16439) => trIn16439.fontSize);
    }
    set fontSize(trIn11571) {
      this.#t((trIn14962) => {
        trIn14962.fontSize = trIn11571;
      });
    }
    get underline() {
      return this.#n((trIn16388) => trIn16388.underline);
    }
    set underline(trIn11479) {
      this.#t((trIn14896) => {
        trIn14896.underline = trIn11479;
      });
    }
    get color() {
      return this.#n((trIn16587) => trIn16587.color, ZEe);
    }
    set color(trIn11866) {
      this.#t((trIn15227) => {
        trIn15227.color = trIn11866;
      });
    }
    get alignment() {
      return this.#n((trIn16389) => trIn16389.alignment);
    }
    set alignment(trIn12436) {
      this.#e.applyTextStyle({
        alignment: trIn12436,
      });
    }
    #t(trIn11480) {
      this.#e.forEachCell((trIn14963) => {
        trIn11480(trIn14963.textStyle);
      });
    }
    #n(trIn4403, trIn4404 = Object.is) {
      let trBind13609 = false,
        trBind13610,
        trBind13611 = false;
      return (
        this.#e.forEachCell((trIn7194) => {
          if (trBind13611) return;
          let trBind17561 = trIn4403(trIn7194.textStyle);
          if (!trBind13609) {
            trBind13609 = true;
            trBind13610 = trBind17561;
            return;
          }
          trIn4404(trBind13610, trBind17561) ||
            ((trBind13610 = undefined), (trBind13611 = true));
        }),
        trBind13611 ? undefined : trBind13610
      );
    }
  };
  workbookBinding1320 = class {
    #e;
    constructor(trIn14897) {
      this.#e = trIn14897;
    }
    assign(trIn14223) {
      this.#e.applyBorders(trIn14223);
    }
    set top(trIn12997) {
      trIn12997 &&
        this.#e.applyBorders({
          top: trIn12997,
        });
    }
    set bottom(trIn12616) {
      trIn12616 &&
        this.#e.applyBorders({
          bottom: trIn12616,
        });
    }
    set left(trIn12889) {
      trIn12889 &&
        this.#e.applyBorders({
          left: trIn12889,
        });
    }
    set right(trIn12742) {
      trIn12742 &&
        this.#e.applyBorders({
          right: trIn12742,
        });
    }
    set inside(trIn12617) {
      trIn12617 &&
        this.#e.applyBorders({
          inside: trIn12617,
        });
    }
    set outside(trIn12512) {
      trIn12512 &&
        this.#e.applyBorders({
          outside: trIn12512,
        });
    }
    set insideHorizontal(trIn11532) {
      trIn11532 &&
        this.#e.applyBorders({
          insideHorizontal: trIn11532,
        });
    }
    set insideVertical(trIn11690) {
      trIn11690 &&
        this.#e.applyBorders({
          insideVertical: trIn11690,
        });
    }
    set diagonalDown(trIn11921) {
      trIn11921 &&
        this.#e.applyBorders({
          diagonalDown: trIn11921,
        });
    }
    set diagonalUp(trIn12134) {
      trIn12134 &&
        this.#e.applyBorders({
          diagonalUp: trIn12134,
        });
    }
  };
});
export const QEe = esmInit(() => {
  workbookBinding1322 = class {
    #e;
    #t;
    constructor(trIn13251, trIn13252) {
      this.#e = trIn13251;
      this.#t = trIn13252;
    }
    get width() {
      let trBind18137 = this.#e.columnWidths;
      if (trBind18137.length > 0) return trBind18137[this.#t] ?? 0;
      let trBind18138 = this.#e.columnCount,
        trBind18139 = this.#e.frame?.width;
      return trBind18139 && trBind18138 > 0 ? trBind18139 / trBind18138 : 0;
    }
    set width(trIn3587) {
      if (!Number.isFinite(trIn3587) || trIn3587 <= 0)
        throw Error("Column width must be a positive number.");
      let trBind12100 = this.#e.columnCount,
        trBind12101 = this.#e.columnWidths,
        trBind12102 = [];
      if (trBind12101.length > 0)
        trBind12102 = trBind12101.slice(0, trBind12100);
      else {
        let trBind21102 = this.#e.frame?.width,
          trBind21103 =
            trBind21102 && trBind12100 > 0 ? trBind21102 / trBind12100 : 1;
        trBind12102 = Array(trBind12100).fill(trBind21103);
      }
      for (; trBind12102.length < trBind12100; )
        trBind12102.push(trBind12102[trBind12102.length - 1] ?? 1);
      trBind12102[this.#t] = trIn3587;
      this.#e.columnWidths = trBind12102;
    }
  };
  workbookBinding1323 = class {
    #e;
    constructor(trIn14898) {
      this.#e = trIn14898;
    }
    get(trIn8992) {
      if (trIn8992 < 0 || trIn8992 >= this.#e.columnCount)
        throw Error("Column index is outside the table bounds.");
      return new workbookBinding1322(this.#e, trIn8992);
    }
    get items() {
      let trBind19852 = [];
      for (
        let trBind22214 = 0;
        trBind22214 < this.#e.columnCount;
        trBind22214 += 1
      )
        trBind19852.push(new workbookBinding1322(this.#e, trBind22214));
      return trBind19852;
    }
  };
});
export const $Ee = esmInit(() => {
  workbookBinding1321();
  workbookBinding1324 = class {
    #e;
    constructor(trIn14899) {
      this.#e = trIn14899;
    }
    assign(trIn15307) {
      this.#t(trIn15307);
    }
    set outside(trIn13316) {
      trIn13316 &&
        this.#t({
          outside: trIn13316,
        });
    }
    set inside(trIn13537) {
      trIn13537 &&
        this.#t({
          inside: trIn13537,
        });
    }
    set insideHorizontal(trIn12190) {
      trIn12190 &&
        this.#t({
          insideHorizontal: trIn12190,
        });
    }
    set insideVertical(trIn12437) {
      trIn12437 &&
        this.#t({
          insideVertical: trIn12437,
        });
    }
    #t(trIn6178) {
      this.#e.rowCount === 0 ||
        this.#e.columnCount === 0 ||
        new workbookBinding1317(this.#e, {
          row: 0,
          column: 0,
          rowCount: this.#e.rowCount,
          columnCount: this.#e.columnCount,
        }).applyBorders(trIn6178);
    }
  };
});
