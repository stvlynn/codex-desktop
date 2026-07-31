// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Cassowary/kiwi solver prelude
// (PairMap / Variable / Expression / Strength / Constraint).
// Stage-3 wave-83 cohesive prelude kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookBinding1350,
  workbookBinding1351,
  workbookBinding1353,
  workbookBinding1354,
  workbookBinding1356,
  workbookBinding1358,
  workbookBinding1360,
  workbookBinding1361,
  workbookBinding1362,
} from "./cs-slots";

export function createPairMap() {
  return new workbookBinding1350();
}
export const workbookBinding1352 = esmInit(() => {
  workbookBinding1350 = class WorkbookClass40 {
    index = {};
    array = [];
    size() {
      return this.array.length;
    }
    empty() {
      return this.array.length === 0;
    }
    itemAt(csIn14902) {
      return this.array[csIn14902];
    }
    contains(csIn13254) {
      return this.index[csIn13254.id()] !== undefined;
    }
    find(csIn11091) {
      let csBind21595 = this.index[csIn11091.id()];
      return csBind21595 === undefined ? undefined : this.array[csBind21595];
    }
    setDefault(csIn6179, csIn6180) {
      let csBind16250 = this.index[csIn6179.id()];
      if (csBind16250 === undefined) {
        let csBind19464 = new workbookBinding1351(csIn6179, csIn6180());
        return (
          (this.index[csIn6179.id()] = this.array.length),
          this.array.push(csBind19464),
          csBind19464
        );
      } else return this.array[csBind16250];
    }
    insert(csIn6751, csIn6752) {
      let csBind17062 = new workbookBinding1351(csIn6751, csIn6752),
        csBind17063 = this.index[csIn6751.id()];
      return (
        csBind17063 === undefined
          ? ((this.index[csIn6751.id()] = this.array.length),
            this.array.push(csBind17062))
          : (this.array[csBind17063] = csBind17062),
        csBind17062
      );
    }
    erase(csIn5975) {
      let csBind16000 = this.index[csIn5975.id()];
      if (csBind16000 === undefined) return;
      this.index[csIn5975.id()] = undefined;
      let csBind16001 = this.array[csBind16000],
        csBind16002 = this.array.pop();
      return (
        csBind16001 !== csBind16002 &&
          ((this.array[csBind16000] = csBind16002),
          (this.index[csBind16002.first.id()] = csBind16000)),
        csBind16001
      );
    }
    copy() {
      let csBind18117 = new WorkbookClass40();
      for (
        let csBind20145 = 0;
        csBind20145 < this.array.length;
        csBind20145++
      ) {
        let csBind21508 = this.array[csBind20145].copy();
        csBind18117.array[csBind20145] = csBind21508;
        csBind18117.index[csBind21508.first.id()] = csBind20145;
      }
      return csBind18117;
    }
  };
  workbookBinding1351 = class WorkbookClass59 {
    first;
    second;
    constructor(csIn12562, csIn12563) {
      this.first = csIn12562;
      this.second = csIn12563;
    }
    copy() {
      return new WorkbookClass59(this.first, this.second);
    }
  };
});
export const workbookBinding1355 = esmInit(() => {
  workbookBinding1357();
  workbookBinding1353 = class {
    constructor(csIn14165 = "") {
      this._name = csIn14165;
    }
    id() {
      return this._id;
    }
    name() {
      return this._name;
    }
    setName(csIn14964) {
      this._name = csIn14964;
    }
    context() {
      return this._context;
    }
    setContext(csIn14396) {
      this._context = csIn14396;
    }
    value() {
      return this._value;
    }
    setValue(csIn14823) {
      this._value = csIn14823;
    }
    plus(csIn14545) {
      return new workbookBinding1356(this, csIn14545);
    }
    minus(csIn11983) {
      return new workbookBinding1356(
        this,
        typeof csIn11983 == "number" ? -csIn11983 : [-1, csIn11983],
      );
    }
    multiply(csIn13943) {
      return new workbookBinding1356([csIn13943, this]);
    }
    divide(csIn13736) {
      return new workbookBinding1356([1 / csIn13736, this]);
    }
    toJSON() {
      return {
        name: this._name,
        value: this._value,
      };
    }
    toString() {
      return this._context + "[" + this._name + ":" + this._value + "]";
    }
    _name;
    _value = 0;
    _context = null;
    _id = workbookBinding1354++;
  };
  workbookBinding1354 = 0;
});
export function parseExpressionArgs(csIn1338: any) {
  let csBind7058 = 0,
    csBind7059 = () => 0,
    csBind7060 = createPairMap();
  for (
    let csBind7668 = 0, csBind7669 = csIn1338.length;
    csBind7668 < csBind7669;
    ++csBind7668
  ) {
    let csBind7894 = csIn1338[csBind7668];
    if (typeof csBind7894 == "number") csBind7058 += csBind7894;
    else if (csBind7894 instanceof workbookBinding1353)
      csBind7060.setDefault(csBind7894, csBind7059).second += 1;
    else if (csBind7894 instanceof workbookBinding1356) {
      csBind7058 += csBind7894.constant();
      let csBind18839 = csBind7894.terms();
      for (
        let csBind20776 = 0, csBind20777 = csBind18839.size();
        csBind20776 < csBind20777;
        csBind20776++
      ) {
        let csBind22113 = csBind18839.itemAt(csBind20776);
        csBind7060.setDefault(csBind22113.first, csBind7059).second +=
          csBind22113.second;
      }
    } else if (csBind7894 instanceof Array) {
      if (csBind7894.length !== 2) throw Error("array must have length 2");
      let csBind11477 = csBind7894[0],
        csBind11478 = csBind7894[1];
      if (typeof csBind11477 != "number")
        throw Error("array item 0 must be a number");
      if (csBind11478 instanceof workbookBinding1353)
        csBind7060.setDefault(csBind11478, csBind7059).second += csBind11477;
      else if (csBind11478 instanceof workbookBinding1356) {
        csBind7058 += csBind11478.constant() * csBind11477;
        let csBind18210 = csBind11478.terms();
        for (
          let csBind20487 = 0, csBind20488 = csBind18210.size();
          csBind20487 < csBind20488;
          csBind20487++
        ) {
          let csBind21795 = csBind18210.itemAt(csBind20487);
          csBind7060.setDefault(csBind21795.first, csBind7059).second +=
            csBind21795.second * csBind11477;
        }
      } else throw Error("array item 1 must be a variable or expression");
    } else throw Error("invalid Expression argument: " + csBind7894);
  }
  return {
    terms: csBind7060,
    constant: csBind7058,
  };
}
export const workbookBinding1357 = esmInit(() => {
  workbookBinding1352();
  workbookBinding1355();
  workbookBinding1356 = class WorkbookClass45 {
    constructor() {
      let csBind20962 = parseExpressionArgs(arguments);
      this._terms = csBind20962.terms;
      this._constant = csBind20962.constant;
    }
    terms() {
      return this._terms;
    }
    constant() {
      return this._constant;
    }
    value() {
      let csBind17688 = this._constant;
      for (
        let csBind20182 = 0, csBind20183 = this._terms.size();
        csBind20182 < csBind20183;
        csBind20182++
      ) {
        let csBind21796 = this._terms.itemAt(csBind20182);
        csBind17688 += csBind21796.first.value() * csBind21796.second;
      }
      return csBind17688;
    }
    plus(csIn14620) {
      return new WorkbookClass45(this, csIn14620);
    }
    minus(csIn12015) {
      return new WorkbookClass45(
        this,
        typeof csIn12015 == "number" ? -csIn12015 : [-1, csIn12015],
      );
    }
    multiply(csIn14039) {
      return new WorkbookClass45([csIn14039, this]);
    }
    divide(csIn13785) {
      return new WorkbookClass45([1 / csIn13785, this]);
    }
    isConstant() {
      return this._terms.size() == 0;
    }
    toString() {
      let csBind15247 = this._terms.array
        .map(function (item) {
          return item.second + "*" + item.first.toString();
        })
        .join(" + ");
      return (
        !this.isConstant() && this._constant !== 0 && (csBind15247 += " + "),
        (csBind15247 += this._constant),
        csBind15247
      );
    }
    _terms;
    _constant;
  };
});
export const workbookBinding1359 = esmInit(() => {
  workbookBinding1358 = class WorkbookClass58 {
    static create(csIn6635, csIn6636, csIn6637, csIn6638 = 1) {
      let csBind16932 = 0;
      return (
        (csBind16932 += Math.max(0, Math.min(1e3, csIn6635 * csIn6638)) * 1e6),
        (csBind16932 += Math.max(0, Math.min(1e3, csIn6636 * csIn6638)) * 1e3),
        (csBind16932 += Math.max(0, Math.min(1e3, csIn6637 * csIn6638))),
        csBind16932
      );
    }
    static required = WorkbookClass58.create(1e3, 1e3, 1e3);
    static strong = WorkbookClass58.create(1, 0, 0);
    static medium = WorkbookClass58.create(0, 1, 0);
    static weak = WorkbookClass58.create(0, 0, 1);
    static clip(csIn12623) {
      return Math.max(0, Math.min(WorkbookClass58.required, csIn12623));
    }
  };
});
export const workbookBinding1363 = esmInit(() => {
  workbookBinding1357();
  workbookBinding1359();
  (function (csIn10592) {
    csIn10592[(csIn10592.Le = 0)] = "Le";
    csIn10592[(csIn10592.Ge = 1)] = "Ge";
    csIn10592[(csIn10592.Eq = 2)] = "Eq";
  })((workbookBinding1360 ||= {}));
  workbookBinding1361 = class {
    constructor(
      csIn6813,
      csIn6814,
      csIn6815,
      csIn6816 = workbookBinding1358.required,
    ) {
      this._operator = csIn6814;
      this._strength = workbookBinding1358.clip(csIn6816);
      csIn6815 === undefined && csIn6813 instanceof workbookBinding1356
        ? (this._expression = csIn6813)
        : (this._expression = csIn6813.minus(csIn6815));
    }
    id() {
      return this._id;
    }
    expression() {
      return this._expression;
    }
    op() {
      return this._operator;
    }
    strength() {
      return this._strength;
    }
    toString() {
      return (
        this._expression.toString() +
        " " +
        ["<=", ">=", "="][this._operator] +
        " 0 (" +
        this._strength.toString() +
        ")"
      );
    }
    _expression;
    _operator;
    _strength;
    _id = workbookBinding1362++;
  };
  workbookBinding1362 = 0;
});
