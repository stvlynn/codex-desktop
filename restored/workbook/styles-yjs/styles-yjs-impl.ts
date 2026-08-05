// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: collaborative style branch on Yjs (legacy kgt/Ogt).
// Stage-3 wave-91; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Fill, ensureFillInit } from "../fill";
import { SpreadsheetFont, Borders, ensureStylesheetInit } from "../stylesheet";
import { Array as YArray, Map as YMap } from "../../vendor/yjs";

export function styleEntryToProtoParts(syIn3887: any) {
  let syBind12743 = syIn3887.fill?.toProto(),
    syBind12744 = syIn3887.font?.toProto(),
    syBind12745 = syIn3887.border?.toProto();
  return {
    fillProto: syBind12743 ? deepCloneJson(syBind12743) : undefined,
    fontProto: syBind12744 ? deepCloneJson(syBind12744) : undefined,
    borderProto: syBind12745 ? deepCloneJson(syBind12745) : undefined,
    numberFormatCode: syIn3887.numberFormatCode,
    numberFormatId: syIn3887.numberFormatId,
    wrapText: syIn3887.wrapText,
    horizontalAlignment: syIn3887.horizontalAlignment,
    verticalAlignment: syIn3887.verticalAlignment,
    featurePropertyBagIndex: syIn3887.featurePropertyBagIndex,
  };
}
export function styleProtoPartsToEntry(props: any) {
  return {
    fill: props.fillProto
      ? new Fill({
          type: "proto",
          proto: deepCloneJson(props.fillProto),
        })
      : undefined,
    font: props.fontProto
      ? new SpreadsheetFont(deepCloneJson(props.fontProto))
      : undefined,
    border: props.borderProto
      ? new Borders(deepCloneJson(props.borderProto))
      : undefined,
    numberFormatCode: props.numberFormatCode,
    numberFormatId: props.numberFormatId,
    wrapText: props.wrapText,
    horizontalAlignment: props.horizontalAlignment,
    verticalAlignment: props.verticalAlignment,
    featurePropertyBagIndex: props.featurePropertyBagIndex,
  };
}
export function deepCloneJson(syIn12859: any) {
  return syIn12859 == null ? syIn12859 : JSON.parse(JSON.stringify(syIn12859));
}
export function stableStyleSignature(syIn14852: any) {
  return JSON.stringify(sortKeysDeep(syIn14852));
}
export function sortKeysDeep(syIn7360: any) {
  if (Array.isArray(syIn7360))
    return syIn7360.map((item) => sortKeysDeep(item));
  if (syIn7360 && typeof syIn7360 == "object") {
    let syBind21254 = syIn7360,
      syBind21255 = {},
      syBind21256 = Object.keys(syBind21254).sort();
    for (let syBind23072 of syBind21256)
      syBind21255[syBind23072] = sortKeysDeep(syBind21254[syBind23072]);
    return syBind21255;
  }
  return syIn7360;
}
export function fnv1aBase36(props: any) {
  let syBind19545 = 2166136261;
  for (let syBind21947 = 0; syBind21947 < props.length; syBind21947 += 1) {
    syBind19545 ^= props.charCodeAt(syBind21947);
    syBind19545 = Math.imul(syBind19545, 16777619);
  }
  return (syBind19545 >>> 0).toString(36);
}
export let stylesYjsReadyFlag: any;
export let STYLES_ENTRIES_BY_ID: any;
export let STYLES_ENTRY_ORDER: any;
export let STYLES_SIGNATURE_TO_ID: any;
export let STYLES_META: any;
export let Ogt: any;
export const ensureStylesYjsInit = esmInit(() => {
  /* yjs ensure no-op */
  ensureFillInit();
  ensureStylesheetInit();
  stylesYjsReadyFlag = 1;
  STYLES_ENTRIES_BY_ID = "styles.entriesById";
  STYLES_ENTRY_ORDER = "styles.entryOrder";
  STYLES_SIGNATURE_TO_ID = "styles.signatureToId";
  STYLES_META = "styles.meta";
  Ogt = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c = false;
    #l;
    #u;
    #d;
    #f;
    constructor(syIn2247) {
      this.#e = syIn2247.isCollaborativeStateReady ?? (() => true);
      this.#t = syIn2247.runLocalTransaction;
      this.#n = syIn2247.styleRegistry;
      this.#r = syIn2247.doc.getMap("styles");
      this.#i = syIn2247.doc.getMap(STYLES_ENTRIES_BY_ID);
      this.#a = syIn2247.doc.getArray(STYLES_ENTRY_ORDER);
      this.#o = syIn2247.doc.getMap(STYLES_SIGNATURE_TO_ID);
      this.#s = syIn2247.doc.getMap(STYLES_META);
      this.#l = new Map();
      this.#u = new Map();
      this.#d = new Set();
      this.#f = (syIn14503, syIn14504) => {
        this.#x(syIn14503, syIn14504);
      };
      this.#i.observeDeep(this.#f);
      this.#a.observeDeep(this.#f);
      this.#o.observeDeep(this.#f);
      this.#s.observeDeep(this.#f);
      this.#S();
      this.#h();
    }
    subscribe(syIn9734) {
      return (
        this.#d.add(syIn9734),
        () => {
          this.#d.delete(syIn9734);
        }
      );
    }
    getOrCreateStyleIdForIndex(syIn3047) {
      let syBind11117 = this.#l.get(syIn3047);
      if (syBind11117) return syBind11117;
      if (!this.#e()) {
        let syBind22129 = `style-base-${syIn3047}`;
        return (this.#y(syBind22129, syIn3047), syBind22129);
      }
      this.#p();
      let syBind11118 = this.#o;
      if (!syBind11118)
        throw Error("Workbook style branch failed to initialize.");
      let syBind11119 = styleEntryToProtoParts(this.#n.describe(syIn3047)),
        syBind11120 = stableStyleSignature(syBind11119),
        syBind11121 = syBind11118.get(syBind11120);
      if (syBind11121)
        return (
          this.#y(syBind11121, syIn3047),
          this.#v(syBind11121, syBind11120, syBind11119),
          syBind11121
        );
      let syBind11122 = `style-${fnv1aBase36(syBind11120)}`;
      return (
        this.#v(syBind11122, syBind11120, syBind11119),
        syBind11118.set(syBind11120, syBind11122),
        this.#y(syBind11122, syIn3047),
        syBind11122
      );
    }
    getStyleIndexForId(syIn4047) {
      let syBind13003 = this.#u.get(syIn4047);
      if (syBind13003 !== undefined) return syBind13003;
      this.#m();
      this.#h();
      let syBind13004 = this.#i,
        syBind13005 = this.#o;
      if (!syBind13004 || !syBind13005) return;
      let syBind13006 = syBind13004.get(syIn4047);
      if (!syBind13006) return;
      let syBind13007 = this.#n.register(
        styleProtoPartsToEntry(syBind13006.style),
      );
      return (
        this.#y(syIn4047, syBind13007),
        syBind13005.has(syBind13006.signature) ||
          syBind13005.set(syBind13006.signature, syIn4047),
        syBind13007
      );
    }
    registerStyle(syIn1339) {
      if (!this.#e()) {
        let syBind20029 = this.#n.register(syIn1339),
          syBind20030 = `style-base-${syBind20029}`;
        return (
          this.#y(syBind20030, syBind20029),
          {
            styleId: syBind20030,
            styleIndex: syBind20029,
          }
        );
      }
      this.#p();
      let syBind7061 = this.#i,
        syBind7062 = this.#o;
      if (!syBind7061 || !syBind7062)
        throw Error("Workbook style branch failed to initialize.");
      let syBind7063 = this.#n.register(syIn1339),
        syBind7064 = styleEntryToProtoParts(this.#n.describe(syBind7063)),
        syBind7065 = stableStyleSignature(syBind7064),
        syBind7066 = syBind7062.get(syBind7065);
      if (syBind7066)
        return (
          this.#y(syBind7066, syBind7063),
          this.#v(syBind7066, syBind7065, syBind7064),
          {
            styleId: syBind7066,
            styleIndex: syBind7063,
          }
        );
      let syBind7067 = `style-${fnv1aBase36(syBind7065)}`;
      if (
        syBind7061.has(syBind7067) &&
        syBind7061.get(syBind7067)?.signature !== syBind7065
      ) {
        let syBind21392 = 1;
        for (; syBind7061.has(`${syBind7067}-${syBind21392}`); )
          syBind21392 += 1;
        syBind7067 = `${syBind7067}-${syBind21392}`;
      }
      return (
        this.#t(() => {
          syBind7061.set(syBind7067, {
            id: syBind7067,
            signature: syBind7065,
            style: deepCloneJson(syBind7064),
          });
          this.#a.push([syBind7067]);
          syBind7062.set(syBind7065, syBind7067);
        }),
        this.#y(syBind7067, syBind7063),
        {
          styleId: syBind7067,
          styleIndex: syBind7063,
        }
      );
    }
    hydrateFromStyleRegistry() {
      this.#e() && this.#p();
    }
    #p() {
      this.#b();
      this.#h();
      this.#i.size === 0 &&
        this.#a.length === 0 &&
        this.#o.size === 0 &&
        (this.#_(), (this.#c = true));
    }
    #m() {}
    #h() {
      if (!this.#c) {
        if (this.#a.length === 0 && this.#i.size === 0) {
          this.#c = true;
          return;
        }
        this.#g();
        this.#c = true;
      }
    }
    #g() {
      for (let syBind17199 of this.#O()) {
        let syBind17874 = this.#i.get(syBind17199);
        if (!syBind17874) continue;
        let syBind17875 = this.#n.register(
          styleProtoPartsToEntry(syBind17874.style),
        );
        this.#y(syBind17199, syBind17875);
        this.#o.has(syBind17874.signature) ||
          this.#o.set(syBind17874.signature, syBind17199);
      }
    }
    #_() {
      let syBind11131 = this.#i,
        syBind11132 = this.#a,
        syBind11133 = this.#o,
        syBind11134 = this.#s;
      this.#t(() => {
        for (
          let syBind15149 = 0;
          syBind15149 < this.#n.getStyleCount();
          syBind15149 += 1
        ) {
          let syBind16242 = styleEntryToProtoParts(
              this.#n.describe(syBind15149),
            ),
            syBind16243 = stableStyleSignature(syBind16242),
            syBind16244 = `style-base-${syBind15149}`;
          syBind11131.set(syBind16244, {
            id: syBind16244,
            signature: syBind16243,
            style: deepCloneJson(syBind16242),
          });
          syBind11132.push([syBind16244]);
          syBind11133.has(syBind16243) ||
            syBind11133.set(syBind16243, syBind16244);
          this.#y(syBind16244, syBind15149);
        }
        let syBind12903 = this.#l.get(0);
        syBind12903 &&
          syBind11134 &&
          syBind11134.set("defaultStyleId", syBind12903);
      });
    }
    #v(syIn7731, syIn7732, syIn7733) {
      let syBind18217 = this.#i,
        syBind18218 = this.#a;
      syBind18217.has(syIn7731) ||
        this.#t(() => {
          syBind18217.set(syIn7731, {
            id: syIn7731,
            signature: syIn7732,
            style: deepCloneJson(syIn7733),
          });
          syBind18218.push([syIn7731]);
        });
    }
    #y(syIn11999, syIn12000) {
      this.#u.set(syIn11999, syIn12000);
      this.#l.has(syIn12000) || this.#l.set(syIn12000, syIn11999);
    }
    #b() {
      this.#r.get("schemaVersion") !== stylesYjsReadyFlag &&
        this.#t(() => {
          this.#r.set("schemaVersion", stylesYjsReadyFlag);
        });
    }
    #x(syIn12646, syIn12647) {
      syIn12646.length !== 0 && ((this.#c = false), this.#C());
    }
    #S() {
      let syBind10910 = this.#w(),
        syBind10911 = this.#T(),
        syBind10912 = this.#E(),
        syBind10913 = this.#D();
      (!syBind10910 && !syBind10911 && !syBind10912 && !syBind10913) ||
        this.#i.size > 0 ||
        this.#a.length > 0 ||
        this.#o.size > 0 ||
        this.#s.size > 0 ||
        this.#t(() => {
          for (let [syBind22733, syBind22734] of syBind10910?.entries() ?? [])
            this.#i.set(syBind22733, deepCloneJson(syBind22734));
          for (let syBind22877 of syBind10911?.toArray() ?? [])
            this.#a.push([syBind22877]);
          for (let [syBind22798, syBind22799] of syBind10912?.entries() ?? [])
            this.#o.set(syBind22798, syBind22799);
          for (let [syBind22735, syBind22736] of syBind10913?.entries() ?? [])
            this.#s.set(syBind22735, deepCloneJson(syBind22736));
        });
    }
    #C() {
      for (let syBind23098 of this.#d) syBind23098();
    }
    #w() {
      let syBind21729 = this.#r.get("entriesById");
      if (syBind21729 instanceof YMap) return syBind21729;
    }
    #T() {
      let syBind21774 = this.#r.get("entryOrder");
      if (syBind21774 instanceof YArray) return syBind21774;
    }
    #E() {
      let syBind21665 = this.#r.get("signatureToId");
      if (syBind21665 instanceof YMap) return syBind21665;
    }
    #D() {
      let syBind21981 = this.#r.get("meta");
      if (syBind21981 instanceof YMap) return syBind21981;
    }
    #O() {
      let syBind16856 = new Set(),
        syBind16857 = [];
      for (let syBind21915 of this.#a.toArray())
        syBind16856.has(syBind21915) ||
          !this.#i.has(syBind21915) ||
          (syBind16856.add(syBind21915), syBind16857.push(syBind21915));
      for (let syBind22685 of this.#i.keys())
        syBind16856.has(syBind22685) ||
          (syBind16856.add(syBind22685), syBind16857.push(syBind22685));
      return syBind16857;
    }
  };
});

/** Legacy ensure alias (`kgt`). */
export const kgt = ensureStylesYjsInit;
