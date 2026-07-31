// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-23: WorkbookTheme + default scheme/text styles (legacy workbookJ / Binding566–568).

import { esmInit } from "../../runtime/rolldown-runtime";
import { WorkbookColor, ensureWorkbookColorInit } from "../theme-color";
import { chatgptThemeWarm, ensureChatgptThemeWarmInit } from "../presentation-theme";
import { applyTextStylePatch, ensureTextStyleInit } from "../text-style";
import { DEFAULT_FONT_SIZE_TOKENS, resolveTextStyleTokens, ensureDesignTokensInit } from "./design-token-resolvers";
export var DEFAULT_SCHEME_COLORS,
  DEFAULT_THEME_TEXT_STYLES,
  WorkbookTheme,
  assertThemeTextStyleName,
  nonEmptyStringOrUndefined,
  themeProtoDisplayName,
  ensureWorkbookThemeInit = esmInit(() => {
    ensureChatgptThemeWarmInit();
    ensureWorkbookColorInit();
    ensureTextStyleInit();
    ensureDesignTokensInit();
    DEFAULT_SCHEME_COLORS = {
      accent1: new WorkbookColor("#156082"),
      accent2: new WorkbookColor("#E97132"),
      accent3: new WorkbookColor("#196B24"),
      accent4: new WorkbookColor("#0F9ED5"),
      accent5: new WorkbookColor("#A02B93"),
      accent6: new WorkbookColor("#4EA72E"),
      bg1: new WorkbookColor("#FFFFFF"),
      bg2: new WorkbookColor("#000000"),
      tx1: new WorkbookColor("#1F1F1F"),
      tx2: new WorkbookColor("#FFFFFF"),
      dk1: new WorkbookColor("#000000"),
      lt1: new WorkbookColor("#FFFFFF"),
      dk2: new WorkbookColor("#0E2841"),
      lt2: new WorkbookColor("#E8E8E8"),
      hlink: new WorkbookColor("#467886"),
      folHlink: new WorkbookColor("#96607D")
    };
    DEFAULT_THEME_TEXT_STYLES = {
      display: {
        fontSize: "text-display",
        bold: true,
        alignment: "center",
        wrap: "none"
      },
      subtitle: {
        fontSize: "text-subtitle",
        italic: true,
        alignment: "center",
        wrap: "none"
      },
      section: {
        fontSize: "text-section",
        bold: true,
        alignment: "left",
        wrap: "none"
      },
      body: {
        fontSize: "text-body",
        alignment: "left",
        wrap: "square"
      },
      caption: {
        fontSize: "text-caption",
        alignment: "left",
        wrap: "none"
      }
    };
    WorkbookTheme = class {
      #e;
      #t;
      #n;
      #r;
      #i;
      #a;
      constructor(dtIn1828: unknown, dtIn1829: unknown, dtIn1830: unknown) {
        this.#e = dtIn1828;
        this.#e;
        this.#a = dtIn1830;
        let dtBind8405 = dtIn1829?.colorScheme?.colors?.reduce((dtIn10514, dtIn10515) => (dtIn10514[dtIn10515.name] = new WorkbookColor({
            type: "proto",
            proto: dtIn10515.color
          }, dtIn1830), dtIn10514), {}) ?? DEFAULT_SCHEME_COLORS,
          dtBind8406 = nonEmptyStringOrUndefined(dtIn1829?.colorScheme?.name) ?? "ChatGPT";
        this.#r = nonEmptyStringOrUndefined(themeProtoDisplayName(dtIn1829)) ?? dtBind8406;
        this.#t = {
          name: dtBind8406,
          themeColors: dtBind8405
        };
        this.#n = {
          fillStyleList: dtIn1829?.fillStyleList ?? chatgptThemeWarm.fillStyleList,
          backgroundFillStyleList: dtIn1829?.backgroundFillStyleList ?? chatgptThemeWarm.backgroundFillStyleList,
          lineStyleList: dtIn1829?.lineStyleList ?? chatgptThemeWarm.lineStyleList,
          effectStyleList: dtIn1829?.effectStyleList ?? chatgptThemeWarm.effectStyleList
        };
        this.#i = dtIn1829?.fontScheme;
        this.#o() && this.textStyles();
      }
      replaceFromProto(dtIn1903: unknown) {
        let dtBind8569 = dtIn1903?.colorScheme?.colors?.reduce((dtIn8446, dtIn8447) => (dtIn8446[dtIn8447.name] = new WorkbookColor({
            type: "proto",
            proto: dtIn8447.color
          }, this.#a), dtIn8446), {}) ?? DEFAULT_SCHEME_COLORS,
          dtBind8570 = nonEmptyStringOrUndefined(dtIn1903?.colorScheme?.name) ?? "ChatGPT";
        this.#r = nonEmptyStringOrUndefined(themeProtoDisplayName(dtIn1903)) ?? dtBind8570;
        this.#t = {
          name: dtBind8570,
          themeColors: dtBind8569
        };
        this.#n = {
          fillStyleList: dtIn1903?.fillStyleList ?? chatgptThemeWarm.fillStyleList,
          backgroundFillStyleList: dtIn1903?.backgroundFillStyleList ?? chatgptThemeWarm.backgroundFillStyleList,
          lineStyleList: dtIn1903?.lineStyleList ?? chatgptThemeWarm.lineStyleList,
          effectStyleList: dtIn1903?.effectStyleList ?? chatgptThemeWarm.effectStyleList
        };
        this.#i = dtIn1903?.fontScheme;
      }
      get lineStyleList() {
        return this.#n.lineStyleList;
      }
      get effectStyleList() {
        return this.#n.effectStyleList;
      }
      get backgroundFillStyleList() {
        return this.#n.backgroundFillStyleList;
      }
      get fillStyleList() {
        return this.#n.fillStyleList;
      }
      get fontScheme() {
        return this.#i;
      }
      get name() {
        return this.#r;
      }
      set name(dtIn11896) {
        this.#r = dtIn11896;
        this.#e.queueCollaborativePublish?.();
      }
      set colorScheme(dtIn5965) {
        this.#t = {
          name: dtIn5965.name,
          themeColors: Object.entries(dtIn5965.themeColors).reduce((accumulator, [dtIn15175, dtIn15176]) => (accumulator[dtIn15175] = new WorkbookColor(dtIn15176, this.#a), accumulator), {})
        };
        this.#e.queueCollaborativePublish?.();
      }
      get colorScheme() {
        return this.#t;
      }
      get hexColorMap() {
        return Object.fromEntries(Object.entries(this.#t.themeColors).map(([dtIn12913, dtIn12914]) => [dtIn12913, dtIn12914?.hex ?? ""]));
      }
      resolveThemeColorHex(dtIn11036: unknown) {
        let dtBind21561 = this.#t.themeColors[dtIn11036];
        if (dtBind21561) return dtBind21561.hex;
      }
      ensureEffectStyle(dtIn4863: unknown) {
        let dtBind14267 = JSON.stringify(dtIn4863),
          dtBind14268 = this.#n.effectStyleList.findIndex(item => JSON.stringify(item) === dtBind14267);
        return dtBind14268 >= 0 ? String(dtBind14268 + 1) : (this.#n.effectStyleList.push(dtIn4863), this.#e.queueCollaborativePublish?.(), String(this.#n.effectStyleList.length));
      }
      textStyles(dtIn3172: unknown) {
        let dtBind11328 = dtIn3172 ?? DEFAULT_THEME_TEXT_STYLES;
        if (!this.#o()) throw Error("presentation.theme.textStyles(...) requires a presentation-backed theme context.");
        let dtBind11329 = {};
        for (let [dtBind15804, dtBind15805] of Object.entries(dtBind11328)) {
          let dtBind16694 = assertThemeTextStyleName(dtBind15804);
          applyTextStylePatch(this.#e.addTextStyle(dtBind16694), resolveTextStyleTokens(dtBind15805, {
            fontSizeTokens: DEFAULT_FONT_SIZE_TOKENS,
            name: `presentation.theme.textStyles(${dtBind16694})`
          }));
          dtBind11329[dtBind15804] = dtBind16694;
        }
        return dtBind11329;
      }
      toProto() {
        return {
          name: this.#r,
          colorScheme: {
            name: this.#t.name,
            colors: Object.entries(this.#t.themeColors).map(([dtIn11722, dtIn11723]) => ({
              name: dtIn11722,
              color: dtIn11723.toProto()
            }))
          },
          fillStyleList: this.#n.fillStyleList,
          backgroundFillStyleList: this.#n.backgroundFillStyleList,
          lineStyleList: this.#n.lineStyleList,
          effectStyleList: this.#n.effectStyleList,
          fontScheme: this.#i
        };
      }
      #o() {
        return typeof this.#e.addTextStyle == "function" && typeof this.#e.resolveTextStyle == "function";
      }
    };
    assertThemeTextStyleName = dtIn9553 => {
      let dtBind20080 = dtIn9553.trim();
      if (dtBind20080.length === 0) throw Error("theme text style names must be non-empty.");
      return dtBind20080;
    };
    nonEmptyStringOrUndefined = dtIn14784 => dtIn14784 !== undefined && dtIn14784.length > 0 ? dtIn14784 : undefined;
    themeProtoDisplayName = dtIn16583 => dtIn16583?.name;
  });

