// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide background fill/ref VO (legacy Binding1294 / xEe / SEe).
// Stage-3 wave-142.

import { Fill as workbookCt } from "../fill";

export const workbookBinding1295 = ":";

export function xEe(slIn8391: any) {
  let slBind18901 = Number(slIn8391.index),
    slBind18902 = slIn8391.schemeColor?.trim();
  if (Number.isFinite(slBind18901) && slBind18902)
    return `${slBind18901}${workbookBinding1295}${slBind18902}`;
  if (slBind18902) return slBind18902;
  if (Number.isFinite(slBind18901)) return String(slBind18901);
}
export function SEe(props: any) {
  return !props || typeof props != "object"
    ? true
    : !("type" in props && props.type === "proto");
}
export class workbookBinding1294 {
  #e;
  #t;
  #n;
  constructor(slIn9287: any, slIn9288: any) {
    this.#e = slIn9287;
    this.#n = new workbookCt({
      type: "proto",
      proto: slIn9288?.fill,
    });
    this.#t = {
      ref: slIn9288?.ref,
    };
  }
  get isSet() {
    return this.#n.isSet || this.#t.ref !== undefined;
  }
  get fill() {
    return this.#n;
  }
  get ref() {
    return this.#t.ref;
  }
  set ref(slIn12833) {
    this.#t.ref = slIn12833;
    this.#r({
      ref: slIn12833,
    });
  }
  set fill(slIn12435) {
    this.#n = new workbookCt(slIn12435);
    this.#r({
      fill: slIn12435,
    });
  }
  toProto() {
    if (this.isSet)
      return {
        fill: this.#n.toProto(),
        ref: this.#t.ref,
      };
  }
  #r(slIn3652) {
    let slBind12224 = this.#e.recordOp,
      slBind12225 = this.#e.getTargetRef?.();
    if (!slBind12224 || !slBind12225) return;
    let slBind12226 = {};
    if (slIn3652.fill !== undefined) {
      let slBind22024 = this.#n.toConfig();
      slBind22024 && SEe(slBind22024) && (slBind12226.fill = slBind22024);
    }
    if (slIn3652.ref !== undefined) {
      let slBind22271 = xEe(slIn3652.ref);
      slBind22271 !== undefined && (slBind12226.ref = slBind22271);
    }
    (slBind12226.fill === undefined && slBind12226.ref === undefined) ||
      slBind12224({
        op: "slide.background.set",
        target: slBind12225,
        ...slBind12226,
      });
  }
}
