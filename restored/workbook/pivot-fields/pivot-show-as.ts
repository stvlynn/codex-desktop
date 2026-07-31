// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotShowAs VO (Class53) + show-as token maps.
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  PivotShowAsCalculation,
  ensurePivotFieldEnumsInit,
} from "./pivot-field-enums";

export function normalizePivotToken(pivotIn11660: string): string {
  return pivotIn11660
    .trim()
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
}
export function parseShowAsCalculation(pivotIn11586: unknown): string {
  if (pivotIn11586 == null) return PivotShowAsCalculation.none;
  let pivotBind21987 = normalizePivotToken(String(pivotIn11586));
  return showAsCalcByToken[pivotBind21987] ?? PivotShowAsCalculation.none;
}
export function showAsCalcToProtoToken(
  pivotIn4702: string,
): string | undefined {
  switch (pivotIn4702) {
    case PivotShowAsCalculation.none:
      return;
    case PivotShowAsCalculation.percentOfColumnTotal:
      return "percentOfCol";
    case PivotShowAsCalculation.percentOfRowTotal:
      return "percentOfRow";
    case PivotShowAsCalculation.percentOfGrandTotal:
      return "percentOfTotal";
    case PivotShowAsCalculation.differenceFrom:
      return "difference";
    case PivotShowAsCalculation.percentDifferenceFrom:
      return "percentDiff";
    default:
      return;
  }
}
export let showAsCalcByToken: Record<string, string>;
export let PivotShowAs: any;
export const ensurePivotShowAsInit = esmInit(() => {
  ensurePivotFieldEnumsInit();
  showAsCalcByToken = {
    [normalizePivotToken(PivotShowAsCalculation.none)]:
      PivotShowAsCalculation.none,
    [normalizePivotToken(PivotShowAsCalculation.percentOfColumnTotal)]:
      PivotShowAsCalculation.percentOfColumnTotal,
    [normalizePivotToken(PivotShowAsCalculation.percentOfRowTotal)]:
      PivotShowAsCalculation.percentOfRowTotal,
    [normalizePivotToken(PivotShowAsCalculation.percentOfGrandTotal)]:
      PivotShowAsCalculation.percentOfGrandTotal,
    [normalizePivotToken(PivotShowAsCalculation.differenceFrom)]:
      PivotShowAsCalculation.differenceFrom,
    [normalizePivotToken(PivotShowAsCalculation.percentDifferenceFrom)]:
      PivotShowAsCalculation.percentDifferenceFrom,
    [normalizePivotToken("normal")]: PivotShowAsCalculation.none,
    [normalizePivotToken("percentOfCol")]:
      PivotShowAsCalculation.percentOfColumnTotal,
    [normalizePivotToken("percentOfRow")]:
      PivotShowAsCalculation.percentOfRowTotal,
    [normalizePivotToken("percentOfTotal")]:
      PivotShowAsCalculation.percentOfGrandTotal,
    [normalizePivotToken("difference")]: PivotShowAsCalculation.differenceFrom,
    [normalizePivotToken("percentDiff")]:
      PivotShowAsCalculation.percentDifferenceFrom,
  };
  PivotShowAs = class PivotShowAsImpl {
    #e: any;
    #t: any;
    #n: any;
    constructor(pivotIn9597: any = {}) {
      this.#e = pivotIn9597.calculation ?? PivotShowAsCalculation.none;
      this.#t = pivotIn9597.baseField;
      this.#n = pivotIn9597.baseItem;
    }
    get calculation() {
      return this.#e;
    }
    set calculation(pivotIn14509: any) {
      this.#e = pivotIn14509;
    }
    get baseField() {
      return this.#t;
    }
    set baseField(pivotIn14680: any) {
      this.#t = pivotIn14680;
    }
    get baseItem() {
      return this.#n;
    }
    set baseItem(pivotIn14778: any) {
      this.#n = pivotIn14778;
    }
    clone() {
      return new PivotShowAsImpl({
        calculation: this.#e,
        baseField: this.#t,
        baseItem: this.#n,
      });
    }
  };
});
