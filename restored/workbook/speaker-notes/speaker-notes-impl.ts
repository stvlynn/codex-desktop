// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: speaker-notes TextFrame + NotesSlide (legacy Binding1389/1387/1388).
// Stage-3 wave-153.

import { esmInit } from "../../runtime/rolldown-runtime";
import { j, Qt } from "../presentation-protobuf";
import { Paragraphs, ensureParagraphsInit } from "../text-run";
import { DetachedText, ensureDetachedTextInit } from "../detached-text";

export let workbookBinding1387: any;
export let workbookBinding1388: any;

export const workbookBinding1389 = esmInit(() => {
  Qt();
  ensureParagraphsInit();
  ensureDetachedTextInit();
  snBind1387 = class {
    #e;
    #t;
    constructor(snIn12998: any, snIn12999: any) {
      this.#e = snIn12998;
      this.#t = snIn12999;
    }
    get paragraphs() {
      return this.#e;
    }
    setText(snIn14965: any) {
      this.#t.set(snIn14965);
    }
    append(snIn15125: any) {
      this.#t.add(snIn15125);
    }
    clear() {
      this.#t.set("");
    }
  };
  snBind1388 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(snIn4201: any, snIn4202: any) {
      this.#e = snIn4201;
      this.#e;
      this.#a = snIn4201.getSlideId?.();
      let snBind13248 =
        snIn4202?.elements?.find(
          (snIn12061) =>
            snIn12061?.placeholderType === "body" ||
            snIn12061?.placeholderType === "notes",
        )?.paragraphs ?? [];
      this.#t = new Paragraphs(this.#l(), snBind13248);
      this.#i = new DetachedText(this.#t);
      this.#r = new snBind1387(this.#t, this.#i);
      this.#n = true;
    }
    get paragraphs() {
      return this.#t;
    }
    get textFrame() {
      return this.#r;
    }
    get text() {
      return this.#i.toString();
    }
    set text(snIn13610) {
      this.#i.set(snIn13610);
      this.#u(snIn13610);
    }
    get slideId() {
      return this.#a;
    }
    toSnapshot(snIn11130: any) {
      return {
        aid: `nt/${snIn11130}`,
        kind: "notes",
        slideId: snIn11130,
        text: this.text,
      };
    }
    setText(snIn13319: any) {
      this.#r.setText(snIn13319);
      this.#u(snIn13319);
    }
    append(snIn14824: any) {
      this.#r.append(snIn14824);
    }
    setVisible(snIn14966: any) {
      this.#n = snIn14966;
    }
    isVisible() {
      return this.#n;
    }
    clear() {
      this.#r.clear();
      this.#u("");
    }
    toProto() {
      let snBind15619 = this.text;
      if (!(!this.#n && snBind15619.length === 0))
        return {
          id: "",
          elements: [this.#o(), this.#s(), this.#c()],
          index: 0,
          useLayoutId: "",
          widthEmu: 0,
          heightEmu: 0,
        };
    }
    #o() {
      return {
        id: "",
        name: "Slide Image Placeholder 1",
        type: j.ELEMENT_TYPE_UNSPECIFIED,
        placeholderIndex: 0,
        placeholderType: "sldImg",
        zIndex: 0,
        paragraphs: [],
        effects: [],
        children: [],
        levelsStyles: [],
        citations: [],
      };
    }
    #s() {
      let snBind11613 = this.#t.toProto();
      return {
        id: "",
        name: "Notes Placeholder 2",
        type: j.ELEMENT_TYPE_TEXT,
        placeholderIndex: 1,
        placeholderType: "body",
        zIndex: 0,
        textStyle: {},
        paragraphs:
          snBind11613.length > 0
            ? snBind11613
            : [
                {
                  id: "",
                  runs: [],
                  inlineNodes: [],
                  textStyle: {},
                },
              ],
        effects: [],
        children: [],
        levelsStyles: [],
        citations: [],
      };
    }
    #c() {
      return {
        id: "",
        name: "Slide Number Placeholder 3",
        type: j.ELEMENT_TYPE_TEXT,
        placeholderIndex: 5,
        placeholderType: "sldNum",
        zIndex: 0,
        textStyle: {},
        paragraphs: [
          {
            id: "",
            runs: [],
            inlineNodes: [],
            textStyle: {},
          },
        ],
        effects: [],
        children: [],
        levelsStyles: [],
        citations: [],
      };
    }
    #l() {
      return {
        fontFamilyCache: this.#e.fontFamilyCache,
        stub: () => {},
        attachChartAsset: (snIn9891) => {
          throw Error(
            "attachChartAsset is not available in speaker notes context.",
          );
        },
        getImageById: () => undefined,
        createImageAsset: () => {
          throw Error(
            "createImageAsset is not available in speaker notes context.",
          );
        },
        getChartById: () => undefined,
        createChartAsset: () => {
          throw Error(
            "createChartAsset is not available in speaker notes context.",
          );
        },
        getTextStyleByName: () => undefined,
      };
    }
    #u(snIn6985: any) {
      let snBind17340 = this.#e.recordOp;
      if (!snBind17340) return;
      let snBind17341 = this.#a;
      if (!snBind17341) return;
      let snBind17342 =
        snIn6985 instanceof DetachedText ? snIn6985.toString() : snIn6985;
      snBind17340({
        op: "notes.set",
        target: `nt/${snBind17341}`,
        value: snBind17342,
      });
    }
  };
});

export function ensureSpeakerNotesInit(): void {
  workbookBinding1389();
}

export const NotesSlide = {
  get TextFrame() {
    return workbookBinding1387;
  },
  get Notes() {
    return workbookBinding1388;
  },
};
