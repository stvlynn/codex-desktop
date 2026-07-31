// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat border edge proxy (legacy Binding593).

import { Fill } from "../fill";
import { fillFromConfigOrUndefined } from "./format-clone-helpers";
import { borderSidePartialFromEdge, fillSolidColorFromFill } from "./border-alignment-helpers";
export class RangeFormatBorderEdge {
  #e;
  #t;
  constructor(rfIn12978, rfIn12979) {
    this.#e = rfIn12978;
    this.#t = rfIn12979;
  }
  get style() {
    return this.#n()?.style;
  }
  set style(rfIn10643) {
    let rfBind21126 = {
      ...(this.#n() ?? {}),
      style: rfIn10643
    };
    this.#e.setEdgeState(this.#t, rfBind21126);
  }
  get color() {
    let rfBind21828 = this.#n()?.color;
    return rfBind21828 ? rfBind21828.clone() : undefined;
  }
  set color(rfIn10518) {
    let rfBind20982 = {
      ...(this.#n() ?? {}),
      color: rfIn10518
    };
    this.#e.setEdgeState(this.#t, borderSidePartialFromEdge(rfBind20982));
  }
  get fill() {
    let rfBind17204 = this.#n()?.color;
    if (!rfBind17204) return;
    let rfBind17205 = rfBind17204.toProto();
    if (rfBind17205) return new Fill({
      type: "solid",
      color: {
        type: "proto",
        proto: rfBind17205
      }
    });
  }
  set fill(rfIn10957) {
    let rfBind21459 = fillFromConfigOrUndefined(rfIn10957),
      rfBind21460 = rfBind21459 ? fillSolidColorFromFill(rfBind21459) : undefined;
    this.color = rfBind21460;
  }
  get weight() {
    return this.#n()?.weight;
  }
  set weight(rfIn10584) {
    let rfBind21055 = {
      ...(this.#n() ?? {}),
      weight: rfIn10584
    };
    this.#e.setEdgeState(this.#t, rfBind21055);
  }
  #n() {
    return this.#e.getEdgeState(this.#t);
  }
}
