// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide artifacts collection (legacy Binding1304).
// Stage-3 wave-143.

import { j } from "../presentation-protobuf";
import { workbookBinding1302 } from "./slide-embedded-artifact-impl";

export class workbookBinding1304 {
  #e;
  #t;
  constructor(slIn9130, slIn9131) {
    this.#e = slIn9130;
    this.#t = [];
    slIn9131.forEach((item) => {
      this.add({
        proto: item,
      });
    });
  }
  get items() {
    return [...this.#t];
  }
  add(slIn10627) {
    let slBind21101 = new workbookBinding1302(this.#e, slIn10627.proto);
    return (
      this.#t.push(slBind21101),
      this.#e._register(slBind21101),
      slBind21101
    );
  }
  addWorkbook(slIn1298, slIn1299 = {}) {
    let slBind6989 = this.#e.getPresentation?.();
    if (!slBind6989)
      throw Error("slide.artifacts.addWorkbook requires a presentation.");
    let slBind6990 = slBind6989.artifacts.addWorkbook(slIn1298, {
        title: slIn1299.title,
      }),
      slBind6991 = this.#n(slIn1298, slIn1299),
      slBind6992 = {
        id: "",
        name: slIn1299.title,
        type: j.ELEMENT_TYPE_EMBEDDED_ARTIFACT,
        embeddedArtifact: {
          embeddedView: {
            artifact: {
              id: slBind6990.id,
              kind: _presentationDn.ARTIFACT_KIND_WORKBOOK,
              title: slIn1299.title,
            },
            workbook: slBind6991,
            preview: slIn1299.preview,
          },
          previewImageReference: slIn1299.previewImageReference,
        },
        paragraphs: [],
        effects: [],
        children: [],
        levelsStyles: [],
        citations: [],
      },
      slBind6993 = new workbookBinding1302(this.#e, slBind6992);
    return (
      slIn1299.position && (slBind6993.position = slIn1299.position),
      this.#t.push(slBind6993),
      this.#e._register(slBind6993),
      slBind6993
    );
  }
  getItem(slIn9132) {
    let slBind19711 = this.#t.find((item) => item.id === slIn9132);
    if (!slBind19711)
      throw Error(`Embedded artifact element ${slIn9132} not found.`);
    return slBind19711;
  }
  deleteById(slIn9707) {
    let slBind20229 = this.#t.findIndex((item) => item.id === slIn9707);
    slBind20229 !== -1 &&
      (this.#t.splice(slBind20229, 1), this.#e._unregister(slIn9707));
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
  #n(slIn5246, slIn5247) {
    let slBind14818 = slIn5247.view;
    return {
      sheetId: this.#r(slIn5246, slBind14818?.sheet, slBind14818?.sheetId),
      rangeA1: slBind14818?.rangeA1 ?? slBind14818?.range ?? "A1:D8",
      showGridlines: slBind14818?.showGridlines ?? true,
      showHeaders: slBind14818?.showHeaders ?? false,
      zoom: slBind14818?.zoom,
      backgroundFill: slBind14818?.backgroundFill,
    };
  }
  #r(slIn4588, slIn4589, slIn4590) {
    if (slIn4590 !== undefined) return slIn4590;
    if (slIn4589 !== undefined) {
      if (slIn4589.id === undefined)
        throw Error("Embedded workbook view sheet is missing an id.");
      return slIn4589.id;
    }
    let slBind13866 = slIn4588.worksheets.getActive();
    if (slBind13866.id === undefined)
      throw Error("Embedded workbook view sheet is missing an id.");
    return slBind13866.id;
  }
}
