// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide placeholder accessor (legacy Binding1342).
// Stage-3 wave-142.

import { normalizePlaceholderLabel as workbookHelper99 } from "../presentation-theme";

export class workbookBinding1342 {
  #e;
  #t;
  #n;
  constructor(slIn11194: any, slIn11195: any = "slide", slIn11196: any = {}) {
    this.#e = slIn11194;
    this.#t = slIn11195;
    this.#n = slIn11196;
  }
  summary() {
    return this.#a().map((item) => ({
      name: item.placeholderType ?? this.#l(item) ?? item.name,
      type: item.placeholderType,
      text: item.text?.toString() ?? "",
    }));
  }
  getItem(slIn3873) {
    let slBind12740 = workbookHelper99(slIn3873),
      slBind12741 = this.#r().find((item) => {
        let slBind21756 = this.#l(item);
        return slBind21756 !== undefined && slBind21756 === slBind12740;
      });
    if (slBind12741) return slBind12741;
    let slBind12742 = this.#i().find((item) => {
      let slBind21962 = this.#l(item);
      return slBind21962 !== undefined && slBind21962 === slBind12740;
    });
    if (slBind12742)
      return this.#n.materializeInheritedShape?.(slBind12742) ?? slBind12742;
    throw Error(`Placeholder "${slIn3873}" not found on ${this.#t}.`);
  }
  getAll() {
    return this.#a();
  }
  add(slIn1805, slIn1806) {
    if (typeof slIn1805 == "string") {
      let slBind21384 = this.#e.addPlaceholder(slIn1805);
      return (
        slIn1806 && (slBind21384.placeholderType = slIn1806),
        slBind21384
      );
    }
    let slBind8330 = slIn1805,
      slBind8331 = slBind8330.name ?? `placeholder_${this.#r().length + 1}`,
      slBind8332 =
        slBind8330.geometry !== undefined &&
        slBind8330.geometry !== "custom" &&
        slBind8330.geometry !== "connector"
          ? this.#e.add({
              geometry:
                slBind8330.geometry === "textbox"
                  ? "rect"
                  : slBind8330.geometry,
              fill: slBind8330.fill,
              line: slBind8330.line,
              position: slBind8330.position,
            })
          : this.#e.addPlaceholder(slBind8331);
    return (
      (slBind8332.name = slBind8331),
      (slBind8332.placeholderIndex =
        slBind8330.index ?? slBind8332.placeholderIndex ?? this.#c()),
      slBind8330.type && (slBind8332.placeholderType = slBind8330.type),
      slBind8330.text !== undefined && (slBind8332.text = slBind8330.text),
      slBind8332
    );
  }
  #r() {
    return this.#e.items.filter((item) => item.isPlaceholder());
  }
  #i() {
    return this.#n.inheritedShapes?.() ?? [];
  }
  #a() {
    let slBind20345 = this.#r(),
      slBind20346 = this.#i().filter(
        (item) => !slBind20345.some((_item) => this.#o(_item, item)),
      );
    return [...slBind20345, ...slBind20346];
  }
  #o(slIn13317, slIn13318) {
    return Kae(this.#s(slIn13317), this.#s(slIn13318));
  }
  #s(slIn5991) {
    let slBind16020 = slIn5991.placeholderTypeCandidates;
    if (slBind16020.length === 0) {
      let slBind22319 = this.#l(slIn5991);
      slBind22319 !== undefined && (slBind16020 = [slBind22319]);
    }
    return {
      placeholderIndex: slIn5991.placeholderIndex,
      placeholderTypeCandidates: slBind16020,
    };
  }
  #c() {
    let slBind19109 = this.#r()
      .map((item) => item.placeholderIndex)
      .filter((item) => item !== undefined);
    return slBind19109.length === 0 ? 0 : Math.max(...slBind19109) + 1;
  }
  #l(slIn11922) {
    return (
      slIn11922.placeholderKey() ??
      qae({
        name: slIn11922.name,
      }) ??
      undefined
    );
  }
}
