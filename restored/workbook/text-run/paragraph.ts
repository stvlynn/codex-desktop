// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: Paragraph VO (legacy Binding601).

import { TextStyle } from "../text-style";
import { mixedRunsToPlainText } from "../math-plain-text";
import { TextRun } from "./text-run";
import { TextRuns } from "./text-runs";
import { cloneParagraphStyle } from "./clone-paragraph-style";
export class Paragraph {
  #e;
  #t;
  #n;
  #r;
  #i;
  constructor(trIn2499, trIn2500) {
    this.#e = trIn2499;
    this.#e.fontFamilyCache?.addTextStyle(trIn2500.textStyle);
    this.#t = {
      id: trIn2500.id ?? "",
      bulletCharacter: trIn2500.bulletCharacter,
      marginLeft: trIn2500.marginLeft,
      indent: trIn2500.indent,
      spaceAfter: trIn2500.spaceAfter,
      spaceBefore: trIn2500.spaceBefore,
      styleId: trIn2500.styleId,
      docxSectionBreakCarrier: trIn2500.docxSectionBreakCarrier,
      paragraphStyle: cloneParagraphStyle(trIn2500.paragraphStyle),
    };
    this.#i = structuredClone(trIn2500.inlineNodes ?? []);
    this.#n = new TextRuns(this.#a(), trIn2500.runs ?? []);
    this.#r = trIn2500.textStyle
      ? new TextStyle(trIn2500.textStyle)
      : undefined;
  }
  get id() {
    return this.#t.id;
  }
  set id(trIn15097) {
    this.#t.id = trIn15097;
  }
  get bulletCharacter() {
    return this.#t.bulletCharacter;
  }
  set bulletCharacter(trIn10975) {
    this.#t.bulletCharacter = trIn10975;
    this.#o({
      bulletCharacter: trIn10975,
    });
  }
  get marginLeft() {
    return this.#t.marginLeft;
  }
  set marginLeft(trIn11587) {
    this.#t.marginLeft = trIn11587;
    this.#o({
      marginLeft: trIn11587,
    });
  }
  get indent() {
    return this.#t.indent;
  }
  set indent(trIn12240) {
    this.#t.indent = trIn12240;
    this.#o({
      indent: trIn12240,
    });
  }
  get lineSpacingPercent() {
    return this.#t.paragraphStyle?.lineSpacingPercent;
  }
  set lineSpacingPercent(trIn12241) {
    this.#o({
      lineSpacingPercent: trIn12241,
    });
  }
  get spaceAfter() {
    return this.#t.spaceAfter;
  }
  set spaceAfter(trIn13582) {
    this.#t.spaceAfter = trIn13582;
  }
  get spaceBefore() {
    return this.#t.spaceBefore;
  }
  set spaceBefore(trIn13391) {
    this.#t.spaceBefore = trIn13391;
  }
  get style() {
    return {
      bulletCharacter: this.#t.bulletCharacter,
      marginLeft: this.#t.marginLeft,
      indent: this.#t.indent,
      spaceBefore: this.#t.spaceBefore,
      spaceAfter: this.#t.spaceAfter,
    };
  }
  set style(trIn4648) {
    trIn4648.bulletCharacter !== undefined &&
      (this.bulletCharacter = trIn4648.bulletCharacter);
    trIn4648.marginLeft !== undefined &&
      (this.marginLeft = trIn4648.marginLeft);
    trIn4648.indent !== undefined && (this.indent = trIn4648.indent);
    trIn4648.spaceBefore !== undefined &&
      (this.spaceBefore = trIn4648.spaceBefore);
    trIn4648.spaceAfter !== undefined &&
      (this.spaceAfter = trIn4648.spaceAfter);
  }
  get styleId() {
    return this.#t.styleId;
  }
  set styleId(trIn14150) {
    this.#t.styleId = trIn14150;
  }
  get docxSectionBreakCarrier() {
    return this.#t.docxSectionBreakCarrier === true;
  }
  get paragraphStyle() {
    return cloneParagraphStyle(this.#t.paragraphStyle);
  }
  set paragraphStyle(trIn12717) {
    this.#t.paragraphStyle = cloneParagraphStyle(trIn12717);
  }
  get resolvedTextStyle() {
    return this.#e.getResolvedParagraphTextStyle?.(this);
  }
  get resolvedParagraphStyle() {
    let trBind20532 = this.#e.getResolvedParagraphStyle?.(this);
    return trBind20532
      ? {
          ...trBind20532,
        }
      : undefined;
  }
  get runs() {
    return this.#n;
  }
  get inlineNodes() {
    return structuredClone(this.#i);
  }
  set inlineNodes(trIn13041) {
    this.#i = structuredClone(trIn13041);
  }
  addRun(trIn13928 = "") {
    return this.#n.add(trIn13928);
  }
  get textStyle() {
    return this.#r;
  }
  set textStyle(trIn14696) {
    this.#r = trIn14696;
  }
  toPlainText() {
    return this.#n.items.length === 0 && this.#i.length > 0
      ? mixedRunsToPlainText(this.#i)
      : this.#n.items.map((item) => item.text).join("");
  }
  setPlainText(trIn10238) {
    let trBind20696 = new TextRun(this.#a(), {
      id: "",
      text: trIn10238,
    });
    this.#n.replace([trBind20696]);
    this.#i = [];
  }
  toProto() {
    let trBind10012 = this.#i.some((item) => item.math !== undefined),
      trBind10013 =
        this.#n.items.length === 0 || trBind10012
          ? structuredClone(this.#i)
          : [];
    return {
      id: this.#t.id,
      runs: this.#n.toProto(),
      textStyle: this.#r?.toProto(),
      bulletCharacter: this.#t.bulletCharacter,
      marginLeft: this.#t.marginLeft,
      indent: this.#t.indent,
      spaceAfter: this.#t.spaceAfter,
      spaceBefore: this.#t.spaceBefore,
      styleId: this.#t.styleId,
      docxSectionBreakCarrier: this.#t.docxSectionBreakCarrier,
      inlineNodes: trBind10013,
      paragraphStyle: cloneParagraphStyle(this.#t.paragraphStyle),
    };
  }
  #a() {
    return {
      ...this.#e,
      getParagraph: () => this,
    };
  }
  #o(trIn6983) {
    let trBind17337 = cloneParagraphStyle(this.#t.paragraphStyle) ?? {};
    for (let [trBind22141, trBind22142] of Object.entries(trIn6983))
      trBind22142 === undefined
        ? delete trBind17337[trBind22141]
        : (trBind17337[trBind22141] = trBind22142);
    this.#t.paragraphStyle =
      Object.keys(trBind17337).length > 0
        ? cloneParagraphStyle(trBind17337)
        : undefined;
  }
}
