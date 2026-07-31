// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: TextRun VO (legacy Binding598).

import { TextStyle } from "../text-style";
import { DEFAULT_HYPERLINK_ACTION } from "./hyperlink-defaults";
export class TextRun {
  #e;
  #t;
  #n;
  constructor(trIn3393, trIn3394) {
    this.#e = trIn3393;
    this.#e.fontFamilyCache?.addTextStyle(trIn3394.textStyle);
    this.#t = {
      id: trIn3394.id ?? "",
      text: trIn3394.text ?? "",
      styleId: trIn3394.styleId,
      fieldType: trIn3394.fieldType,
      hyperlink: trIn3394.hyperlink
        ? {
            ...trIn3394.hyperlink,
          }
        : undefined,
      citations: [...(trIn3394.citations ?? [])],
      reviewMarkIds: [...(trIn3394.reviewMarkIds ?? [])],
    };
    this.#n = trIn3394.textStyle
      ? new TextStyle(trIn3394.textStyle)
      : undefined;
  }
  get id() {
    return this.#t.id;
  }
  set id(trIn15096) {
    this.#t.id = trIn15096;
  }
  get text() {
    return this.#t.text;
  }
  set text(trIn14694) {
    this.#t.text = trIn14694;
  }
  get styleId() {
    return this.#t.styleId;
  }
  set styleId(trIn14149) {
    this.#t.styleId = trIn14149;
  }
  get textStyle() {
    return this.#n;
  }
  set textStyle(trIn14695) {
    this.#n = trIn14695;
  }
  get resolvedTextStyle() {
    let trBind20354 = this.#e.getParagraph?.();
    if (trBind20354)
      return this.#e.getResolvedRunTextStyle?.(trBind20354, this);
  }
  get citations() {
    return [...this.#t.citations];
  }
  set citations(trIn13290) {
    this.#t.citations = [...trIn13290];
  }
  addCitation(trIn13581) {
    this.#t.citations.push(trIn13581);
  }
  clearCitations() {
    this.#t.citations = [];
  }
  get reviewMarkIds() {
    return [...this.#t.reviewMarkIds];
  }
  set reviewMarkIds(trIn12803) {
    this.#t.reviewMarkIds = [...trIn12803];
  }
  get hyperlink() {
    return this.#t.hyperlink
      ? {
          ...this.#t.hyperlink,
        }
      : undefined;
  }
  set hyperlink(trIn8531) {
    if (!trIn8531) {
      this.#t.hyperlink = undefined;
      return;
    }
    let trBind19044 = this.#r(trIn8531);
    this.#t.hyperlink = {
      ...trBind19044,
    };
  }
  toProto() {
    return {
      id: this.#t.id,
      text: this.#t.text,
      styleId: this.#t.styleId,
      fieldType: this.#t.fieldType,
      textStyle: this.#n?.toProto(),
      hyperlink: this.#t.hyperlink
        ? {
            ...this.#t.hyperlink,
          }
        : undefined,
      citations: [...this.#t.citations],
      reviewMarkIds: [...this.#t.reviewMarkIds],
    };
  }
  #r(trIn6053) {
    let trBind16090 = this.#t.hyperlink,
      trBind16091 = trIn6053?.uri ?? trBind16090?.uri ?? "",
      trBind16092 =
        trIn6053?.isExternal ??
        trIn6053?.isExternal ??
        trBind16090?.isExternal ??
        false,
      trBind16093 =
        trIn6053?.action ??
        trIn6053?.action ??
        trBind16090?.action ??
        DEFAULT_HYPERLINK_ACTION;
    return {
      ...(trBind16090 ?? {}),
      ...trIn6053,
      uri: trBind16091,
      isExternal: trBind16092,
      action: trBind16093,
    };
  }
}
