// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat.borders proxy (legacy Binding592).

import { borderSideConfigFromSide } from "./format-clone-helpers";
import { borderSideToConfig, borderPresetToConfig, bordersConfigFromRecord, borderSidePartialFromEdge, borderSideFromPartial, borderPresetEdges, normalizeBorderEdgeKey } from "./border-alignment-helpers";
import { RangeFormatBorderEdge } from "./range-format-border-edge";
export class RangeFormatBorders {
  #e;
  #t;
  constructor(rfIn12975, rfIn12976) {
    this.#e = rfIn12975;
    this.#t = rfIn12976;
  }
  get top() {
    return new RangeFormatBorderEdge(this, "top");
  }
  set top(rfIn13390) {
    this.setEdgeState("top", borderSidePartialFromEdge(rfIn13390));
  }
  get bottom() {
    return new RangeFormatBorderEdge(this, "bottom");
  }
  set bottom(rfIn12977) {
    this.setEdgeState("bottom", borderSidePartialFromEdge(rfIn12977));
  }
  get left() {
    return new RangeFormatBorderEdge(this, "left");
  }
  set left(rfIn13221) {
    this.setEdgeState("left", borderSidePartialFromEdge(rfIn13221));
  }
  get right() {
    return new RangeFormatBorderEdge(this, "right");
  }
  set right(rfIn13101) {
    this.setEdgeState("right", borderSidePartialFromEdge(rfIn13101));
  }
  get insideHorizontal() {
    return new RangeFormatBorderEdge(this, "insideHorizontal");
  }
  set insideHorizontal(rfIn11786) {
    this.setEdgeState("insideHorizontal", borderSidePartialFromEdge(rfIn11786));
  }
  get insideVertical() {
    return new RangeFormatBorderEdge(this, "insideVertical");
  }
  set insideVertical(rfIn12007) {
    this.setEdgeState("insideVertical", borderSidePartialFromEdge(rfIn12007));
  }
  get diagonalUp() {
    return new RangeFormatBorderEdge(this, "diagonalUp");
  }
  set diagonalUp(rfIn12490) {
    this.setEdgeState("diagonalUp", borderSidePartialFromEdge(rfIn12490));
  }
  get diagonalDown() {
    return new RangeFormatBorderEdge(this, "diagonalDown");
  }
  set diagonalDown(rfIn12239) {
    this.setEdgeState("diagonalDown", borderSidePartialFromEdge(rfIn12239));
  }
  assign(rfIn1481) {
    this.#e.updateBorders(rfIn1688 => {
      for (let [rfBind8206, rfBind8207] of Object.entries(rfIn1481)) {
        if (rfBind8206 === "inside") {
          let rfBind20254 = borderSidePartialFromEdge(rfBind8207);
          rfIn1688.insideHorizontal = borderSideConfigFromSide(rfBind20254);
          rfIn1688.insideVertical = borderSideConfigFromSide(rfBind20254);
          continue;
        }
        let rfBind8438 = normalizeBorderEdgeKey(rfBind8206);
        if (!rfBind8438) continue;
        if (rfBind8438 === "diagonalUp" || rfBind8438 === "diagonalDown") {
          let rfBind12177 = borderSidePartialFromEdge(rfBind8207);
          if (!rfBind12177) {
            rfBind8438 === "diagonalUp" ? rfIn1688.diagonalUp = false : rfIn1688.diagonalDown = false;
            !rfIn1688.diagonalUp && !rfIn1688.diagonalDown && (rfIn1688.diagonal = undefined);
            continue;
          }
          rfIn1688.diagonal = borderSideConfigFromSide(rfBind12177);
          rfBind8438 === "diagonalUp" ? rfIn1688.diagonalUp = true : rfIn1688.diagonalDown = true;
          continue;
        }
        let rfBind8439 = borderSidePartialFromEdge(rfBind8207);
        rfBind8439 ? rfIn1688[rfBind8438] = borderSideConfigFromSide(rfBind8439) : delete rfIn1688[rfBind8438];
      }
    });
    let rfBind7425 = bordersConfigFromRecord(rfIn1481);
    this.#n(rfBind7425);
  }
  getItem(rfIn9842) {
    let rfBind20388 = normalizeBorderEdgeKey(rfIn9842);
    if (!rfBind20388) throw Error(`Unsupported border edge "${rfIn9842}"`);
    return new RangeFormatBorderEdge(this, rfBind20388);
  }
  setPreset(rfIn2133) {
    this.#e.updateBorders(rfIn2521 => {
      if (rfIn2133 === "none") {
        let rfBind13523 = borderSidePartialFromEdge({
          style: "none"
        });
        rfIn2521.top = borderSideConfigFromSide(rfBind13523);
        rfIn2521.bottom = borderSideConfigFromSide(rfBind13523);
        rfIn2521.left = borderSideConfigFromSide(rfBind13523);
        rfIn2521.right = borderSideConfigFromSide(rfBind13523);
        rfIn2521.insideHorizontal = undefined;
        rfIn2521.insideVertical = undefined;
        rfIn2521.diagonal = undefined;
        rfIn2521.diagonalUp = false;
        rfIn2521.diagonalDown = false;
        return;
      }
      let rfBind9888 = borderPresetEdges(rfIn2133),
        rfBind9889 = borderSidePartialFromEdge({
          style: "thin"
        });
      for (let rfBind22075 of rfBind9888) rfBind22075 === "diagonalUp" || rfBind22075 === "diagonalDown" || (rfIn2521[rfBind22075] = borderSideConfigFromSide(rfBind9889));
      rfIn2133 === "doubleBottom" && (rfIn2521.bottom = borderSideConfigFromSide(borderSidePartialFromEdge({
        style: "double"
      })));
    });
    this.#n({
      preset: rfIn2133
    });
  }
  apply(rfIn2674) {
    this.#e.updateBorders(rfIn3143 => {
      if (rfIn2674.preset === "none") {
        Object.keys(rfIn3143).forEach(item => {
          delete rfIn3143[item];
        });
        rfIn3143.diagonalUp = false;
        rfIn3143.diagonalDown = false;
        return;
      }
      let rfBind11264 = borderPresetEdges(rfIn2674.preset);
      for (let rfBind19925 of rfBind11264) rfBind19925 === "diagonalUp" || rfBind19925 === "diagonalDown" || (rfIn3143[rfBind19925] = borderSideConfigFromSide(borderSidePartialFromEdge({
        style: rfIn2674.style,
        color: rfIn2674.color
      })));
      rfIn2674.preset === "doubleBottom" && (rfIn3143.bottom = borderSideConfigFromSide(borderSidePartialFromEdge({
        style: "double",
        color: rfIn2674.color
      })));
    });
    let rfBind10203 = borderPresetToConfig(rfIn2674);
    this.#n(rfBind10203);
  }
  setEdgeState(rfIn2166, rfIn2167) {
    this.#e.updateBorders(rfIn2836 => {
      if (rfIn2167 === undefined) {
        rfIn2166 === "diagonalUp" ? (rfIn2836.diagonalUp = false, rfIn2836.diagonalDown || (rfIn2836.diagonal = undefined)) : rfIn2166 === "diagonalDown" ? (rfIn2836.diagonalDown = false, rfIn2836.diagonalUp || (rfIn2836.diagonal = undefined)) : delete rfIn2836[rfIn2166];
        return;
      }
      if (rfIn2166 === "diagonalUp" || rfIn2166 === "diagonalDown") {
        rfIn2836.diagonal = borderSideConfigFromSide(rfIn2167);
        rfIn2166 === "diagonalUp" ? rfIn2836.diagonalUp = true : rfIn2836.diagonalDown = true;
        return;
      }
      rfIn2836[rfIn2166] = borderSideConfigFromSide(rfIn2167);
    });
    let rfBind9155 = rfIn2167 === undefined ? {
      style: "none"
    } : borderSideToConfig(rfIn2167);
    rfBind9155 && this.#n({
      [rfIn2166]: rfBind9155
    });
  }
  getEdgeState(rfIn6248) {
    let rfBind16360 = this.#e.getBorderBlueprintSnapshot();
    return rfIn6248 === "diagonalUp" || rfIn6248 === "diagonalDown" ? (rfIn6248 === "diagonalUp" ? rfBind16360.diagonalUp : rfBind16360.diagonalDown) ? borderSideConfigFromSide(rfBind16360.diagonal) : undefined : borderSideConfigFromSide(rfBind16360[rfIn6248]);
  }
  #n(rfIn11898) {
    !rfIn11898 || Object.keys(rfIn11898).length === 0 || this.#t({
      borders: rfIn11898
    });
  }
  toProto() {
    let rfBind11942 = this.#e.getBorderBlueprintSnapshot(),
      rfBind11943 = {},
      rfBind11944 = rfIn11458 => {
        let rfBind21891 = borderSideFromPartial(rfIn11458);
        return rfBind21891 ? rfBind21891.toProto() : undefined;
      };
    return rfBind11943.top = rfBind11944(rfBind11942.top), rfBind11943.bottom = rfBind11944(rfBind11942.bottom), rfBind11943.left = rfBind11944(rfBind11942.left), rfBind11943.right = rfBind11944(rfBind11942.right), rfBind11943.diagonal = rfBind11944(rfBind11942.diagonal), rfBind11943.diagonalUp = rfBind11942.diagonalUp, rfBind11943.diagonalDown = rfBind11942.diagonalDown, rfBind11943;
  }
}
