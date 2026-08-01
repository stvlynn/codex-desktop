// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: built-in placeholder text styles + registry (legacy pDe/mDe).
// Stage-3 wave-148.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  alignmentProtoToName,
  alignmentNameToProto,
} from "../text-style";
import {
  WorkbookColor as workbookBinding382,
  ensureWorkbookColorInit as workbookBinding383,
} from "../theme-color";

const workbookBinding433 = (): void => {};

export class workbookBinding1347 {
  #e;
  #t;
  #n = "text";
  #r;
  #i;
  #a;
  constructor(psIn7628: any) {
    this.#t = psIn7628.name;
    this.#r = psIn7628.isBuiltIn ?? false;
    this.#i = psIn7628.description;
    this.#a = psIn7628.usageHint;
    this.#e = new workbookVt(psIn7628.textStyle);
  }
  get name() {
    return this.#t;
  }
  get kind() {
    return this.#n;
  }
  get isBuiltIn() {
    return this.#r;
  }
  get description() {
    return this.#i;
  }
  set description(psIn14544: any) {
    this.#i = psIn14544;
  }
  get usageHint() {
    return this.#a;
  }
  set usageHint(psIn14720: any) {
    this.#a = psIn14720;
  }
  get bold() {
    return this.#e.bold;
  }
  set bold(psIn14721: any) {
    this.#e.bold = psIn14721;
  }
  get italic() {
    return this.#e.italic;
  }
  set italic(psIn14317: any) {
    this.#e.italic = psIn14317;
  }
  get fontSize() {
    return this.#e.fontSize;
  }
  set fontSize(psIn13942: any) {
    this.#e.fontSize = psIn13942;
  }
  get underline() {
    return this.#e.underline;
  }
  set underline(psIn13735: any) {
    this.#e.underline = psIn13735;
  }
  get alignment() {
    return alignmentProtoToName(this.#e.alignment);
  }
  set alignment(psIn12561: any) {
    this.#e.alignment = psIn12561 ? alignmentNameToProto(psIn12561) : undefined;
  }
  get color() {
    return this.#o(this.#e.fill);
  }
  set color(psIn14619: any) {
    this.#e.fill = psIn14619;
  }
  get textStyle() {
    return this.#e;
  }
  describe() {
    return {
      name: this.#t,
      kind: this.#n,
      description: this.#i,
      usageHint: this.#a,
      isBuiltIn: this.#r,
    };
  }
  #o(psIn10091: any) {
    if (!psIn10091) return;
    let psBind20572 = psIn10091.color.toProto();
    if (psBind20572)
      return new workbookBinding382({
        type: "proto",
        proto: psBind20572,
      });
  }
}

export const pDe = esmInit(() => {
  workbookBinding383();
  workbookBt();
  workbookBinding433();
});

export const workbookBinding1348 = [
  {
    options: {
      name: "title",
      isBuiltIn: true,
      description: "Primary slide title",
      usageHint:
        "Use 'title' for the main slide heading, usually once per slide.",
    },
    configure: (style: any) => {
      style.bold = true;
      style.fontSize = 36;
      style.alignment = "center";
    },
  },
  {
    options: {
      name: "heading1",
      isBuiltIn: true,
      description: "Section heading inside slides",
      usageHint: "Use 'heading1' for major sections or standout headings.",
    },
    configure: (style: any) => {
      style.bold = true;
      style.fontSize = 28;
      style.alignment = "left";
    },
  },
  {
    options: {
      name: "heading2",
      isBuiltIn: true,
      description: "Sub-heading within content blocks",
      usageHint: "Use 'heading2' for secondary headings beneath a heading1.",
    },
    configure: (style: any) => {
      style.bold = true;
      style.fontSize = 22;
      style.alignment = "left";
    },
  },
  {
    options: {
      name: "body",
      isBuiltIn: true,
      description: "Default body copy",
      usageHint: "Use 'body' for standard paragraphs and descriptive text.",
    },
    configure: (style: any) => {
      style.fontSize = 18;
      style.alignment = "left";
    },
  },
  {
    options: {
      name: "list",
      isBuiltIn: true,
      description: "Bulleted list formatting",
      usageHint: "Use 'list' for bulleted bodies when enumerating items.",
    },
    configure: (style: any) => {
      style.fontSize = 18;
      style.alignment = "left";
    },
  },
  {
    options: {
      name: "numberedList",
      isBuiltIn: true,
      description: "Numbered list formatting",
      usageHint:
        "Use 'numberedList' for ordered lists or step-wise instructions.",
    },
    configure: (style: any) => {
      style.fontSize = 18;
      style.alignment = "left";
    },
  },
];

export class workbookBinding1349 {
  #e;
  constructor() {
    this.#e = new Map();
    this.#t();
  }
  get(psIn10245: any) {
    let psBind20705 = this.#e.get(psIn10245);
    if (!psBind20705) throw Error(`Style '${psIn10245}' does not exist.`);
    return psBind20705;
  }
  add(psIn8993: any) {
    let psBind19529 = this.#e.get(psIn8993);
    if (psBind19529) return psBind19529;
    let psBind19530 = new workbookBinding1347({
      name: psIn8993,
      isBuiltIn: false,
    });
    return (this.#e.set(psIn8993, psBind19530), psBind19530);
  }
  describe(psIn9197: any) {
    return typeof psIn9197 == "string"
      ? this.get(psIn9197).describe()
      : Array.from(this.#e.values()).map((item) => item.describe());
  }
  resolveTextStyle(psIn12743: any) {
    return this.#e.get(psIn12743)?.textStyle;
  }
  #t() {
    for (let psBind20990 of workbookBinding1348) {
      let psBind21574 = new workbookBinding1347(psBind20990.options);
      psBind20990.configure?.(psBind21574);
      this.#e.set(psBind21574.name, psBind21574);
    }
  }
}

export const mDe = esmInit(() => {
  pDe();
});

export function getPlaceholderStyleClass(): typeof workbookBinding1347 {
  pDe();
  return workbookBinding1347;
}

export function getPlaceholderStyleCatalog(): typeof workbookBinding1348 {
  mDe();
  return workbookBinding1348;
}

export function getPlaceholderStyleRegistryClass(): typeof workbookBinding1349 {
  mDe();
  return workbookBinding1349;
}

export const ensurePlaceholderStylesInit = mDe;
