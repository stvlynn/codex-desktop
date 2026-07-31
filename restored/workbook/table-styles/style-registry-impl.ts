// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table/pivot style registry (legacy ahe).
// Stage-3 wave-70 cohesive table-styles impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, tr } from "../presentation-protobuf";
import { ensureRegionNamesInit } from "./region-names-impl";
import { ensureUmePresetsInit } from "./ensure-ume-presets-init";
import {
  normalizeStyleNameKey,
  Wme,
  Gme,
  resolvePresetSchemeColor,
  Kme,
  qme,
  Jme,
  Yme,
  Xme,
  Zme,
  resolveTableStyleByName,
} from "./resolve-helpers";
import {
  workbookBinding688,
  Ame,
  jme,
  Mme,
  Pme,
  Fme,
  Ime,
  Lme,
  Rme,
  zme,
  Bme,
  Vme,
  Hme,
  workbookBinding689,
  workbookBinding690,
  _w,
  Qme,
  $me,
  ehe,
  workbookBinding691,
  workbookBinding692,
  workbookBinding693,
  workbookBinding694,
  workbookBinding695,
  workbookBinding696,
  workbookBinding697,
  the,
  nhe,
  rhe,
  ihe,
  workbookBinding698,
  workbookBinding699,
} from "./style-slots";

void tr;
void normalizeStyleNameKey;
void Wme;
void Gme;
void resolvePresetSchemeColor;
void Kme;
void qme;
void Jme;
void Yme;
void Xme;
void Zme;
void resolveTableStyleByName;

/** Initialize table/pivot style registry (legacy ahe). */
export const ensureTableStyleRegistryInit = esmInit(() => {
  wr();
  ensureRegionNamesInit();
  ensureUmePresetsInit();
  _w = -1;
  Qme = new Map(
    Object.keys(workbookBinding689).map((item) => [
      normalizeStyleNameKey(item),
      item,
    ]),
  );
  $me = new Map(
    Object.keys(workbookBinding690).map((item) => [
      normalizeStyleNameKey(item),
      item,
    ]),
  );
  ehe = {
    type: tr.FILL_TYPE_UNSPECIFIED,
    color: undefined,
    gradientStops: [],
    pictureEffects: [],
  };
  workbookBinding691 = [];
  workbookBinding692 = [];
  workbookBinding693 = [];
  workbookBinding694 = [];
  workbookBinding695 = [];
  workbookBinding696 = [];
  workbookBinding697 = class {
    #e;
    #t;
    #n;
    #r;
    constructor(tsIn11076, tsIn11077, tsIn11078, tsIn11079) {
      this.#e = tsIn11076;
      this.#t = tsIn11077;
      this.#n = tsIn11078;
      this.#r = tsIn11079;
    }
    get name() {
      return this.#e;
    }
    get elementTypes() {
      return this.#i().map((item) => this.#r[item]);
    }
    getElement(tsIn5831) {
      let workbookBinding15770 = this.#i(),
        workbookBinding15771 = this.#a();
      for (
        let workbookBinding18078 = 0;
        workbookBinding18078 < workbookBinding15770.length;
        workbookBinding18078++
      ) {
        let workbookBinding19098 = workbookBinding15770[workbookBinding18078];
        if (
          workbookBinding19098 === undefined ||
          this.#r[workbookBinding19098] !== tsIn5831
        )
          continue;
        let workbookBinding19099 = workbookBinding15771[workbookBinding18078];
        return workbookBinding19099 === _w || workbookBinding19099 === undefined
          ? undefined
          : Xme(workbookBinding19099);
      }
    }
    templateAndDxfIds() {
      return {
        template: this.#i(),
        dxfIds: this.#a(),
      };
    }
    #i() {
      let workbookBinding18350 = this.#n[this.#t[0]];
      if (!workbookBinding18350)
        throw Error(
          `Unknown preset style template id: ${this.#t[0]} for ${this.#e}`,
        );
      return workbookBinding18350;
    }
    #a() {
      return this.#t.slice(1);
    }
  };
  the = class extends workbookBinding697 {
    #e;
    get wholeTable() {
      return this.getElement("wholeTable");
    }
    get headerRow() {
      return this.getElement("headerRow");
    }
    get totalRow() {
      return this.getElement("totalRow");
    }
    get firstColumn() {
      return this.getElement("firstColumn");
    }
    get lastColumn() {
      return this.getElement("lastColumn");
    }
    get firstRowStripe() {
      return this.getElement("firstRowStripe");
    }
    get secondRowStripe() {
      return this.getElement("secondRowStripe");
    }
    get firstColumnStripe() {
      return this.getElement("firstColumnStripe");
    }
    get secondColumnStripe() {
      return this.getElement("secondColumnStripe");
    }
    toTableStyle() {
      if (this.#e) return this.#e;
      let { template, dxfIds } = this.templateAndDxfIds(),
        workbookBinding12165 = [],
        workbookBinding12166 = {};
      for (
        let workbookBinding18683 = 0;
        workbookBinding18683 < template.length;
        workbookBinding18683++
      ) {
        let workbookBinding19757 = dxfIds[workbookBinding18683];
        if (workbookBinding19757 === _w || workbookBinding19757 === undefined)
          continue;
        let workbookBinding19758 =
          workbookBinding688[template[workbookBinding18683]];
        workbookBinding19758 &&
          (workbookBinding12166[workbookBinding19758] =
            workbookBinding12165.push(Xme(workbookBinding19757)) - 1);
      }
      return (
        (this.#e = {
          dxfs: workbookBinding12165,
          defaultTableStyle: Pme,
          tableStyles: workbookBinding12166,
        }),
        this.#e
      );
    }
  };
  nhe = class extends workbookBinding697 {
    get wholeTable() {
      return this.getElement("wholeTable");
    }
    get headerRow() {
      return this.getElement("headerRow");
    }
    get totalRow() {
      return this.getElement("totalRow");
    }
    get firstColumn() {
      return this.getElement("firstColumn");
    }
    get firstRowStripe() {
      return this.getElement("firstRowStripe");
    }
    get secondRowStripe() {
      return this.getElement("secondRowStripe");
    }
    get firstColumnStripe() {
      return this.getElement("firstColumnStripe");
    }
    get secondColumnStripe() {
      return this.getElement("secondColumnStripe");
    }
    get firstHeaderCell() {
      return this.getElement("firstHeaderCell");
    }
    get firstSubtotalColumn() {
      return this.getElement("firstSubtotalColumn");
    }
    get firstSubtotalRow() {
      return this.getElement("firstSubtotalRow");
    }
    get secondSubtotalRow() {
      return this.getElement("secondSubtotalRow");
    }
    get firstColumnSubheading() {
      return this.getElement("firstColumnSubheading");
    }
    get secondColumnSubheading() {
      return this.getElement("secondColumnSubheading");
    }
    get thirdColumnSubheading() {
      return this.getElement("thirdColumnSubheading");
    }
    get firstRowSubheading() {
      return this.getElement("firstRowSubheading");
    }
    get secondRowSubheading() {
      return this.getElement("secondRowSubheading");
    }
    get thirdRowSubheading() {
      return this.getElement("thirdRowSubheading");
    }
    get pageFieldLabels() {
      return this.getElement("pageFieldLabels");
    }
    get pageFieldValues() {
      return this.getElement("pageFieldValues");
    }
  };
  rhe = class {
    #e = new Map();
    getStyle(tsIn7255) {
      let workbookBinding17622 = Wme(tsIn7255);
      if (!workbookBinding17622) return;
      let workbookBinding17623 = this.#e.get(workbookBinding17622);
      if (workbookBinding17623) return workbookBinding17623;
      let workbookBinding17624 = workbookBinding689[workbookBinding17622];
      if (workbookBinding17624)
        return (
          (workbookBinding17623 = new the(
            workbookBinding17622,
            workbookBinding17624,
            Vme,
            workbookBinding688,
          )),
          this.#e.set(workbookBinding17622, workbookBinding17623),
          workbookBinding17623
        );
    }
    names() {
      return Object.keys(workbookBinding689);
    }
  };
  ihe = class {
    #e = new Map();
    getStyle(tsIn7225) {
      let workbookBinding17585 = Gme(tsIn7225);
      if (!workbookBinding17585) return;
      let workbookBinding17586 = this.#e.get(workbookBinding17585);
      if (workbookBinding17586) return workbookBinding17586;
      let workbookBinding17587 = workbookBinding690[workbookBinding17585];
      if (workbookBinding17587)
        return (
          (workbookBinding17586 = new nhe(
            workbookBinding17585,
            workbookBinding17587,
            Hme,
            Ame,
          )),
          this.#e.set(workbookBinding17585, workbookBinding17586),
          workbookBinding17586
        );
    }
    names() {
      return Object.keys(workbookBinding690);
    }
  };
  workbookBinding698 = new rhe();
  workbookBinding699 = new ihe();
  new Proxy(Object.create(null), {
    get(tsIn12982, tsIn12983) {
      if (typeof tsIn12983 == "string")
        return resolveTableStyleByName(tsIn12983);
    },
    has(tsIn12406, tsIn12407) {
      return (
        typeof tsIn12407 == "string" &&
        resolveTableStyleByName(tsIn12407) !== undefined
      );
    },
    ownKeys() {
      return workbookBinding698.names();
    },
    getOwnPropertyDescriptor(tsIn8736, tsIn8737) {
      if (typeof tsIn8737 != "string") return;
      let workbookBinding19250 = resolveTableStyleByName(tsIn8737);
      if (workbookBinding19250)
        return {
          enumerable: true,
          configurable: true,
          value: workbookBinding19250,
        };
    },
  });
});

/** Legacy ahe. */
export const ahe = ensureTableStyleRegistryInit;
