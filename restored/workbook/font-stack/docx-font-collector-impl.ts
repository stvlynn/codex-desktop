// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: DOCX complex/east-asia font family collector.
// Stage-3 wave-145 (legacy Binding _workbookC / ensure _workbookL).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookHelper822,
  sYe,
  DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX,
  DOCX_EAST_ASIA_TYPEFACE_PREFIX,
} from "./font-scheme-parse-impl";
import { expandThemeTypefaceAlias } from "../placeholder-resolve/resolve-theme-typeface";

/** Lowercase font-family key (legacy workbookHelper823). */
export function normalizeFontFamilyKeyLower(family: any): string {
  return family.toLowerCase();
}

export const workbookHelper823 = normalizeFontFamilyKeyLower;

/** True for DOCX math-font scheme tokens like +mj-lt / +mn-ea. */
export function isDocxMathFontSchemeToken(token: any): boolean {
  return /^\+(?:mj|mn)-(?:lt|ea|cs)$/i.test(token);
}

export const cYe = isDocxMathFontSchemeToken;

export const lYe = DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX;
export const uYe = DOCX_EAST_ASIA_TYPEFACE_PREFIX;

export class DocxFontFamilyCollector {
  #e = new Map();
  #t = new Map();
  #n: any[] = [];
  #r: any;
  addFamily(family: any) {
    let normalized = workbookHelper822(family);
    if (!normalized) return;
    let key = normalizeFontFamilyKeyLower(normalized);
    if (isDocxMathFontSchemeToken(normalized)) {
      if (!this.#t.has(key)) {
        this.#t.set(key, normalized);
        for (let scheme of this.#n) this.#a(normalized, scheme);
      }
      return;
    }
    this.#i(normalized);
  }
  addTextStyle(textStyle: any) {
    this.addFamily(sYe(textStyle));
  }
  addLevelStyles(levelStyles: any) {
    for (let level of levelStyles ?? []) this.addTextStyle(level.textStyle);
  }
  addElement(element: any) {
    element &&
      (this.addTextStyle(element.textStyle),
      this.addLevelStyles(element.levelsStyles),
      this.addParagraphs(element.paragraphs),
      this.addElements(element.children));
  }
  addElements(elements: any) {
    for (let element of elements ?? []) this.addElement(element);
  }
  addParagraphs(paragraphs: any) {
    for (let paragraph of paragraphs ?? []) {
      this.addTextStyle(paragraph.textStyle);
      for (let run of paragraph.runs ?? []) this.addTextStyle(run.textStyle);
      for (let inlineNode of paragraph.inlineNodes ?? [])
        this.addTextStyle(inlineNode.textRun?.textStyle);
    }
  }
  addThemeFontScheme(fontScheme: any) {
    if (fontScheme) {
      this.#n.push(fontScheme);
      for (let mathFamily of this.#t.values()) this.#a(mathFamily, fontScheme);
    }
  }
  get fontFamilies() {
    return (
      (this.#r ||= [...this.#e.values()].sort((a: any, b: any) => {
        let ka = normalizeFontFamilyKeyLower(a),
          kb = normalizeFontFamilyKeyLower(b);
        return ka < kb ? -1 : +(ka > kb);
      })),
      [...this.#r]
    );
  }
  #i(family: any) {
    let key = normalizeFontFamilyKeyLower(family);
    this.#e.has(key) || (this.#e.set(key, family), (this.#r = undefined));
  }
  #a(mathToken: any, fontScheme: any) {
    let resolved = workbookHelper822(
      expandThemeTypefaceAlias(mathToken.toLowerCase(), fontScheme),
    );
    resolved && this.#i(resolved);
  }
}

export const _workbookC = DocxFontFamilyCollector;

export const _workbookL = esmInit(() => {});

export function getDocxFontCollectorClass(): typeof DocxFontFamilyCollector {
  _workbookL();
  return DocxFontFamilyCollector;
}

export const ensureDocxFontCollectorInit = _workbookL;
