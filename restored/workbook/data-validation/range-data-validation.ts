// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: Range.dataValidation API (legacy Binding665).

import { getAttachedWorksheet } from "../worksheet-attachment";
import {
  resolveDvSqref,
  recordDvSetOp,
  listValuesJoin,
  parseDvListValues,
  applyDvRuleFields,
  dvTypeProtoToName,
  dvOperatorProtoToName,
  dvErrorStyleProtoToName,
} from "./dv-helpers";
import {
  dvTypeNameToProto,
  dvOperatorNameToProto,
  dvErrorStyleNameToProto,
} from "./dv-proto-maps";

export class RangeDataValidation {
  #e;
  constructor(dvIn14872: unknown) {
    this.#e = dvIn14872;
  }
  get rule() {
    let dvBind14961 = this.#n();
    if (!dvBind14961) return null;
    let dvBind14962 = dvTypeProtoToName(dvBind14961.type);
    return {
      type: dvBind14962,
      operator: dvOperatorProtoToName(dvBind14961.operator),
      formula1: dvBind14961.formula1 ?? undefined,
      formula2: dvBind14961.formula2 ?? undefined,
      values:
        dvBind14962 === "list"
          ? parseDvListValues(dvBind14961.formula1)
          : undefined,
    };
  }
  set rule(dvIn9068) {
    if (!dvIn9068) {
      this.clear();
      return;
    }
    let dvBind19642 = this.#r();
    applyDvRuleFields(dvBind19642, dvIn9068);
    recordDvSetOp(this.#t(), dvBind19642);
  }
  get prompt() {
    let dvBind16672 = this.#n();
    return dvBind16672
      ? {
          title: dvBind16672.promptTitle ?? undefined,
          message: dvBind16672.promptMessage ?? undefined,
          show: dvBind16672.showInputMessage ?? undefined,
        }
      : null;
  }
  set prompt(dvIn3690) {
    if (!dvIn3690) {
      let dvBind17302 = this.#n();
      if (!dvBind17302) return;
      dvBind17302.promptTitle = undefined;
      dvBind17302.promptMessage = undefined;
      dvBind17302.showInputMessage = undefined;
      recordDvSetOp(this.#t(), dvBind17302);
      return;
    }
    let dvBind12325 = this.#r();
    dvBind12325.promptTitle = dvIn3690.title ?? undefined;
    dvBind12325.promptMessage = dvIn3690.message ?? undefined;
    dvBind12325.showInputMessage = dvIn3690.show ?? true;
    recordDvSetOp(this.#t(), dvBind12325);
  }
  get errorAlert() {
    let dvBind15653 = this.#n();
    return dvBind15653
      ? {
          title: dvBind15653.errorTitle ?? undefined,
          message: dvBind15653.errorMessage ?? undefined,
          style: dvErrorStyleProtoToName(dvBind15653.errorStyle),
          show: dvBind15653.showErrorMessage ?? undefined,
        }
      : null;
  }
  set errorAlert(dvIn3100) {
    if (!dvIn3100) {
      let dvBind16361 = this.#n();
      if (!dvBind16361) return;
      dvBind16361.errorTitle = undefined;
      dvBind16361.errorMessage = undefined;
      dvBind16361.errorStyle = undefined;
      dvBind16361.showErrorMessage = undefined;
      recordDvSetOp(this.#t(), dvBind16361);
      return;
    }
    let dvBind11194 = this.#r();
    dvBind11194.errorTitle = dvIn3100.title ?? undefined;
    dvBind11194.errorMessage = dvIn3100.message ?? undefined;
    dvBind11194.showErrorMessage = dvIn3100.show ?? true;
    dvIn3100.style &&
      (dvBind11194.errorStyle = dvErrorStyleNameToProto(dvIn3100.style));
    recordDvSetOp(this.#t(), dvBind11194);
  }
  get ignoreBlanks() {
    return this.#n()?.allowBlank ?? false;
  }
  set ignoreBlanks(dvIn10922) {
    let dvBind21432 = this.#r();
    dvBind21432.allowBlank = !!dvIn10922;
    recordDvSetOp(this.#t(), dvBind21432);
  }
  get inCellDropDown() {
    let dvBind20734 = this.#n();
    return !dvBind20734 || dvBind20734.showDropDown === undefined
      ? true
      : !dvBind20734.showDropDown;
  }
  set inCellDropDown(dvIn10832) {
    let dvBind21355 = this.#r();
    dvBind21355.showDropDown = !dvIn10832;
    recordDvSetOp(this.#t(), dvBind21355);
  }
  clear() {
    this.#t().dataValidations.clear(this.#e.address);
  }
  #t() {
    let dvBind20591 = getAttachedWorksheet(this.#e);
    if (!dvBind20591) throw Error("Range is not attached to a worksheet.");
    return dvBind20591;
  }
  #n() {
    return (
      this.#t().dataValidations.getForAddress(this.#e.address) ?? undefined
    );
  }
  #r() {
    let dvBind16740 = this.#t(),
      dvBind16741 = resolveDvSqref(dvBind16740, this.#e.address),
      dvBind16742 = dvBind16740
        .__getDataValidations()
        .find((item) => item.sqref === dvBind16741);
    return (
      dvBind16742 ||
        ((dvBind16742 = {
          sqref: dvBind16741,
        }),
        dvBind16740.__getDataValidations().push(dvBind16742)),
      dvBind16742
    );
  }
}
