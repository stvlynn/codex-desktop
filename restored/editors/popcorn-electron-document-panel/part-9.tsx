// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 9/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
} from "../../boundaries/react-cjs-runtime";
import {
  __workbookT,
  _workbookT,
  workbookA,
  workbookB,
  workbookC,
  workbookD,
  workbookE,
  workbookF,
  workbookG,
  WorkbookI,
  workbookIt,
  workbookJ,
  workbookK,
  workbookL,
  workbookLt,
  workbookM,
  workbookN,
  workbookNt,
  workbookO,
  workbookOt,
  workbookP,
  workbookQ,
  WorkbookR,
  workbookRt,
  workbookS,
  workbookSt,
  workbookU,
  workbookUnderscore,
  workbookV,
  workbookW,
  WorkbookW,
  workbookX,
  workbookY,
  workbookZ,
} from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  getFeatureCatalogEntries,
  PopcornFindBar,
} from "../feature-catalog";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  ensureRemoteTextEditSessionInit,
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const _: any = undefined;
const acornR16: any = undefined;
const bravoR17: any = undefined;
const m: any = undefined;
const p: any = undefined;
const u: any = undefined;
const willowR21: any = undefined;

var hazelR21,
  topazR21,
  frostR21 = esmInit(() => {
    u();
    _();
    willowR21();
    acornR16();
    bravoR17();
    workbookM();
    __workbookT();
    workbookJ();
    __workbookT();
    hazelR21 = "openai.document.layout/v1";
    topazR21 = "application/vnd.openai.document-layout+json";
  }),
  questR21,
  elmR21 = esmInit(() => {
    questR21 = class {
      #e;
      #t;
      constructor(reefR7 = [], sageR7 = []) {
        this.#e = new Map();
        this.#t = new Map();
        for (let fernR14 of reefR7) this.define(fernR14);
        for (let ultraR14 of sageR7)
          this.assignParagraph(
            ultraR14.paragraphId,
            ultraR14.numId,
            ultraR14.level,
          );
      }
      get definitions() {
        return Array.from(this.#e.values());
      }
      get paragraphBindings() {
        return Array.from(this.#t.values());
      }
      define(gammaR10) {
        gammaR10?.numId &&
          this.#e.set(gammaR10.numId, {
            ...gammaR10,
            levels: [...(gammaR10.levels ?? [])],
          });
      }
      removeDefinition(ultraR12) {
        this.#e.delete(ultraR12);
      }
      assignParagraph(bravoR10, copperR10, deltaR10 = 0) {
        !bravoR10 ||
          !copperR10 ||
          this.#t.set(bravoR10, {
            paragraphId: bravoR10,
            numId: copperR10,
            level: deltaR10,
          });
      }
      clearParagraphBinding(daisyR12) {
        this.#t.delete(daisyR12);
      }
      toProto() {
        return {
          numberingDefinitions: this.definitions,
          paragraphNumberings: this.paragraphBindings,
        };
      }
    };
  }),
  gammaR22,
  riverR22,
  cedarR22,
  novaR22 = esmInit(() => {
    _();
    workbookD();
    gammaR22 = {
      insertion: p.REVIEW_MARK_TYPE_INSERTION,
      deletion: p.REVIEW_MARK_TYPE_DELETION,
    };
    riverR22 = class {
      #e;
      constructor(vaporR12) {
        this.#e = {
          ...vaporR12,
        };
      }
      get id() {
        return this.#e.id;
      }
      toProto() {
        return {
          ...this.#e,
        };
      }
    };
    cedarR22 = class {
      #e = [];
      constructor(yarnR11 = []) {
        this.#e = yarnR11.map((item) => new riverR22(item));
      }
      add(basaltR6) {
        let hillR23 = {
            id: workbookF(),
            type: gammaR22[basaltR6.type],
            author: basaltR6.author,
            initials: basaltR6.initials,
            createdAt: basaltR6.createdAt,
          },
          isleR23 = new riverR22(hillR23);
        return (this.#e.push(isleR23), isleR23);
      }
      toProto() {
        return this.#e.map((item) => item.toProto());
      }
    };
  }),
  zephyrR22,
  knollR22 = esmInit(() => {
    u();
    workbookB();
    zephyrR22 = class extends workbookZ {
      type = "text";
      constructor(nickelR9, onyxR9) {
        super(nickelR9, {
          ...(onyxR9 ?? {}),
          type: m.ELEMENT_TYPE_TEXT,
        });
        this.data.type = m.ELEMENT_TYPE_TEXT;
      }
      get id() {
        return this.data.id;
      }
      toProto() {
        return super.toProto();
      }
    };
  }),
  waveR22,
  bravoR23 = esmInit(() => {
    workbookK();
    waveR22 = class {
      #e;
      constructor(waveR12) {
        this.#e = waveR12;
      }
      add(amberR4 = {}) {
        let { text, style } = amberR4,
          honeyR21;
        if (
          (this.#t() && this.#e.clear(), text !== undefined && workbookQ(text))
        ) {
          let wheatR24 = workbookE(text);
          if (wheatR24.length === 0) honeyR21 = this.#e.add();
          else {
            honeyR21 = this.#e.append(wheatR24[0]);
            for (let eagleR14 = 1; eagleR14 < wheatR24.length; eagleR14 += 1)
              this.#e.append(wheatR24[eagleR14]);
          }
        } else {
          honeyR21 = this.#e.add();
          text !== undefined && honeyR21.setPlainText(String(text));
        }
        return (style && (honeyR21.style = style), honeyR21);
      }
      #t() {
        if (this.#e.length !== 1) return false;
        let knollR25 = this.#e.getItem(0);
        return knollR25
          ? knollR25.toPlainText().trim() === "Start writing here..."
          : false;
      }
    };
  }),
  marbleR23;

var marbleR23;

var xenonR23 = esmInit(() => {});
