// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: defined-name / named-range registry (legacy zXe/RXe).
// Stage-3 wave-91; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFormulaInit, parseFormula } from "../formula";
import { getAttachedWorksheet } from "../worksheet-attachment";
import {
  initAddressUtils,
  parseSheetRef,
} from "../../utils/spreadsheet-address-utils";
import { nrH } from "./boundary-hooks";

export function quoteSheetName(props: any) {
  return `'${props.replace(/'/g, "''")}'`;
}
export function stripLeadingEquals(props: any) {
  return props.startsWith("=") ? props.slice(1) : props;
}
export let RXe: any;
export let DefinedNameItem: any;
export let NullDefinedNameItem: any;
export const ensureNamedRangesInit = esmInit(() => {
  ensureFormulaInit();
  nrH.ensureRangeClusterInit();
  initAddressUtils();
  RXe = class {
    #e;
    #t;
    #n;
    constructor(nrIn11427) {
      this.#e = nrIn11427;
      this.#t = new Map();
      this.#n = new Map();
    }
    createApi(nrIn1824) {
      let nrBind8388 = nrIn1824,
        nrBind8389 = this;
      return {
        addRange: (nrIn12080, nrIn12081, nrIn12082) =>
          this.addRange(nrIn12080, nrIn12081, {
            ...nrIn12082,
            sheetName: nrIn12082?.sheetName ?? nrBind8388,
          }),
        addFunction: (nrIn12311, nrIn12312) =>
          this.addFunction(nrIn12311, {
            ...nrIn12312,
            sheetName: nrIn12312.sheetName ?? nrBind8388,
          }),
        add: (nrIn7549, nrIn7550, nrIn7551) => {
          let nrBind18030 =
            typeof nrIn7550 == "string"
              ? nrIn7550
              : this.#d(nrIn7550, nrBind8388);
          return (
            this.addRange(nrIn7549, nrBind18030, {
              sheetName: nrBind8388,
            }),
            this.getItemApi(nrIn7549, nrBind8388)
          );
        },
        getItem: (nrIn9149) => {
          let nrBind19720 = this.getItemApi(nrIn9149, nrBind8388);
          if (nrBind19720.isNullObject)
            throw Error(`Defined name ${nrIn9149} not found`);
          return nrBind19720;
        },
        getItemOrNullObject: (nrIn16036) =>
          this.getItemApi(nrIn16036, nrBind8388),
        get items() {
          return (nrBind8388 ? nrBind8389.#u(nrBind8388) : nrBind8389.#l()).map(
            (item) => new DefinedNameItem(nrBind8389, item),
          );
        },
      };
    }
    ingest(nrIn13274) {
      if (nrIn13274) for (let nrBind23089 of nrIn13274) this.#i(nrBind23089);
    }
    replace(nrIn10038) {
      this.#t.clear();
      this.#n.clear();
      this.ingest(nrIn10038);
      this.#e.onChange?.();
    }
    addRange(nrIn14171, nrIn14172, nrIn14173) {
      this.#r(nrIn14171, nrIn14172, nrIn14173);
    }
    #r(nrIn2107, nrIn2108, nrIn2109 = {}) {
      let nrBind9021 = nrIn2109.record ?? true;
      if (!this.normalizeName(nrIn2107))
        throw Error("Defined name requires a non-empty name");
      let nrBind9022 = this.normalizeFormula(nrIn2108),
        nrBind9023 = nrIn2109.sheetName,
        nrBind9024 =
          nrBind9023 == null
            ? undefined
            : this.#e.getLocalSheetIdByName(nrBind9023);
      if (nrBind9023 && nrBind9024 === undefined)
        throw Error(`Worksheet ${nrBind9023} was not found`);
      let nrBind9025 = {
        name: nrIn2107,
        text: nrBind9022.startsWith("=") ? nrBind9022.slice(1) : nrBind9022,
        localSheetId: nrBind9024 ?? undefined,
      };
      this.#i(nrBind9025, nrBind9022);
      this.#e.onChange?.();
      nrBind9021 &&
        this.#e.recordOp?.({
          op: "names.range.add",
          name: nrIn2107,
          formula: stripLeadingEquals(nrBind9022),
          description: nrIn2109.description,
          sheet: nrBind9023,
        });
    }
    addFunction(nrIn3721, nrIn3722) {
      this.#r(nrIn3721, nrIn3722.lambda, {
        sheetName: nrIn3722.sheetName,
        description: nrIn3722.description,
        record: false,
      });
      this.#e.recordOp?.({
        op: "names.function.add",
        name: nrIn3721,
        lambda: stripLeadingEquals(this.normalizeFormula(nrIn3722.lambda)),
        description: nrIn3722.description,
        parameters: nrIn3722.parameters,
        returns: nrIn3722.returns,
        sheet: nrIn3722.sheetName,
      });
    }
    buildProto() {
      let nrBind17604 = [],
        nrBind17605 = (nrIn12083) => {
          for (let nrBind22919 of nrIn12083.values())
            nrBind17604.push({
              ...nrBind22919.proto,
            });
        };
      nrBind17605(this.#t);
      for (let nrBind23045 of this.#n.values()) nrBind17605(nrBind23045);
      return nrBind17604;
    }
    lookup(nrIn7630, nrIn7631) {
      let nrBind18122 = nrIn7631?.trim().toUpperCase();
      if (nrBind18122 && this.#n.has(nrBind18122)) {
        let nrBind22274 = this.#n.get(nrBind18122)?.get(nrIn7630);
        if (nrBind22274) return nrBind22274;
      }
      return this.#t.get(nrIn7630);
    }
    normalizeName(nrIn12682) {
      return nrIn12682?.trim().toUpperCase() ?? "";
    }
    normalizeFormula(nrIn9713) {
      if (!nrIn9713) return "=";
      let nrBind20237 = nrIn9713.trim();
      return nrBind20237
        ? nrBind20237.startsWith("=")
          ? nrBind20237
          : `=${nrBind20237}`
        : "=";
    }
    parseEntry(nrIn7122) {
      if (!nrIn7122.parsed) {
        let nrBind19994 = parseFormula(nrIn7122.normalizedFormula);
        nrIn7122.parsed = nrBind19994;
        nrBind19994.errors.length === 0 &&
          (nrIn7122.isLambda = this.#s(nrBind19994.expr));
      }
      return nrIn7122.parsed ?? null;
    }
    makeGuardKey(nrIn10763) {
      return `${(nrIn10763.scopeSheet ?? "__WORKBOOK__").toUpperCase()}::${nrIn10763.normalizedName}`;
    }
    resolveRange(nrIn1709) {
      let nrBind8027 = this.parseEntry(nrIn1709);
      if (!nrBind8027 || nrBind8027.errors.length > 0)
        throw Error(
          `Defined name "${nrIn1709.proto.name ?? nrIn1709.normalizedName}" has an invalid formula.`,
        );
      if (nrBind8027.expr.kind !== "RangeRef")
        throw Error(
          `Defined name "${nrIn1709.proto.name ?? nrIn1709.normalizedName}" does not refer to a range.`,
        );
      let { sheetName, ref } = parseSheetRef(nrIn1709.normalizedFormula),
        nrBind8028 = sheetName?.trim() || nrIn1709.scopeSheet?.trim();
      if (!nrBind8028)
        throw Error(
          `Defined name "${nrIn1709.proto.name ?? nrIn1709.normalizedName}" refers to "${nrIn1709.normalizedFormula}", which is missing a worksheet scope.`,
        );
      let nrBind8029 = this.#e.getWorksheetByName(nrBind8028);
      if (!nrBind8029)
        throw Error(
          `Worksheet "${nrBind8028}" was not found for defined name "${nrIn1709.proto.name ?? nrIn1709.normalizedName}".`,
        );
      return nrBind8029.getRange(ref);
    }
    #i(nrIn3843, nrIn3844) {
      let nrBind12657 = this.normalizeName(nrIn3843.name);
      if (!nrBind12657 || nrBind12657.startsWith("_XLNM.")) return;
      let nrBind12658 = this.#e.getSheetNameByLocalId(
          nrIn3843.localSheetId ?? null,
        ),
        nrBind12659 = nrIn3844 ?? this.normalizeFormula(nrIn3843.text),
        nrBind12660 = {
          proto: {
            ...nrIn3843,
          },
          normalizedName: nrBind12657,
          normalizedFormula: nrBind12659,
          scopeSheet: nrBind12658,
          parsed: undefined,
          isLambda: false,
        };
      this.#a(nrBind12660);
    }
    #a(nrIn8750) {
      if (nrIn8750.scopeSheet) {
        this.#o(nrIn8750.scopeSheet).set(nrIn8750.normalizedName, nrIn8750);
        return;
      }
      this.#t.set(nrIn8750.normalizedName, nrIn8750);
    }
    #o(nrIn9569) {
      let nrBind20100 = nrIn9569.trim().toUpperCase(),
        nrBind20101 = this.#n.get(nrBind20100);
      return (
        nrBind20101 ||
          ((nrBind20101 = new Map()), this.#n.set(nrBind20100, nrBind20101)),
        nrBind20101
      );
    }
    #s(nrIn9654) {
      return (
        nrIn9654.kind === "FunctionCall" &&
        (nrIn9654.name === "LAMBDA" || nrIn9654.name === "_XLFN.LAMBDA")
      );
    }
    delete(nrIn3001, nrIn3002) {
      let nrBind11014 = this.normalizeName(nrIn3001);
      if (!nrBind11014) throw Error("Defined name requires a non-empty name");
      let nrBind11015 = this.#c(nrBind11014, nrIn3002);
      if (!nrBind11015) throw Error(`Defined name ${nrIn3001} not found`);
      if (nrBind11015.scopeSheet) {
        let nrBind21145 = nrBind11015.scopeSheet.trim().toUpperCase();
        this.#n.get(nrBind21145)?.delete(nrBind11015.normalizedName);
      } else this.#t.delete(nrBind11015.normalizedName);
      this.#e.onChange?.();
      this.#e.recordOp?.({
        op: "names.remove",
        name: nrBind11015.proto.name ?? nrIn3001,
        sheet: nrBind11015.scopeSheet,
      });
    }
    getItemApi(nrIn8429, nrIn8430) {
      let nrBind18933 = this.normalizeName(nrIn8429);
      if (!nrBind18933) return new NullDefinedNameItem(nrIn8429 || "");
      let nrBind18934 = this.#c(nrBind18933, nrIn8430);
      return nrBind18934
        ? new DefinedNameItem(this, nrBind18934)
        : new NullDefinedNameItem(nrIn8429);
    }
    #c(nrIn9083, nrIn9084) {
      if (nrIn9084) {
        let nrBind21850 = nrIn9084.trim().toUpperCase();
        return this.#n.get(nrBind21850)?.get(nrIn9083);
      }
      return this.#t.get(nrIn9083);
    }
    #l() {
      return [...this.#t.values()].sort((nrIn13073, nrIn13074) =>
        nrIn13073.normalizedName.localeCompare(nrIn13074.normalizedName),
      );
    }
    #u(nrIn6894) {
      let nrBind17216 = nrIn6894.trim().toUpperCase(),
        nrBind17217 = this.#n.get(nrBind17216);
      return nrBind17217
        ? [...nrBind17217.values()].sort((nrIn12851, nrIn12852) =>
            nrIn12851.normalizedName.localeCompare(nrIn12852.normalizedName),
          )
        : [];
    }
    #d(nrIn6895, nrIn6896) {
      let nrBind17218 = getAttachedWorksheet(nrIn6895)?.name ?? nrIn6896 ?? "";
      if (!nrBind17218)
        throw Error(
          "Defined names require a worksheet-scoped Range when passing a Range input.",
        );
      return `${quoteSheetName(nrBind17218)}!${nrIn6895.address}`;
    }
  };
  DefinedNameItem = class {
    #e;
    #t;
    constructor(nrIn13014, nrIn13015) {
      this.#e = nrIn13014;
      this.#t = nrIn13015;
    }
    get isNullObject() {
      return false;
    }
    get name() {
      return this.#t.proto.name ?? "";
    }
    get formula() {
      return this.#t.normalizedFormula;
    }
    getRange() {
      return this.#e.resolveRange(this.#t);
    }
    delete() {
      this.#e.delete(this.name, this.#t.scopeSheet);
    }
  };
  NullDefinedNameItem = class {
    #e;
    constructor(nrIn14918) {
      this.#e = nrIn14918;
    }
    get isNullObject() {
      return true;
    }
    get name() {
      return this.#e;
    }
    get formula() {
      return "=";
    }
    getRange() {
      let nrBind21241 = this.#e || "Unknown";
      throw Error(`Defined name "${nrBind21241}" not found.`);
    }
    delete() {
      let nrBind21309 = this.#e || "Unknown";
      throw Error(`Defined name "${nrBind21309}" not found.`);
    }
  };
});

/** Legacy ensure alias (`zXe`). */
export const zXe = ensureNamedRangesInit;
