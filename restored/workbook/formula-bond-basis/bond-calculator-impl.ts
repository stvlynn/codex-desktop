// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: bond calculator factory + input ensure (legacy Prt/Irt/Lrt).
// Stage-3 wave-133 — jrt/Mrt remain boundary-owned via fbbH hooks.

import { esmInit } from "../../runtime/rolldown-runtime";
import { fbbH } from "./boundary-hooks";

let frequencySet: Set<number>;
let conventionSet: Set<string>;
let cloneDate: (props: any) => Date;
let coerceBondDateField: (value: any, label: any) => Date;
export let Irt: (props: any) => any;

export const ensureBondInputInit = esmInit(() => {
  fbbH.ensurePriceYieldInit();
  frequencySet = new Set([1, 2, 4, 12]);
  conventionSet = new Set([
    "30U/360",
    "ACTUAL/ACTUAL",
    "ACTUAL/360",
    "ACTUAL/365",
    "30E/360",
    "30/360",
  ]);
  cloneDate = (props: any) => new Date(props.getTime());
  coerceBondDateField = (value: any, label: any) => {
    if (value instanceof Date) {
      if (Number.isNaN(value.getTime()))
        throw Error(`${label} must be a valid date`);
      return cloneDate(value);
    }
    if (typeof value == "string") {
      let parsed = new Date(value);
      if (Number.isNaN(parsed.getTime()))
        throw Error(`${label} must be a valid date`);
      return parsed;
    }
    throw Error(`${label} must be provided`);
  };
  Irt = (props: any) => {
    if (!props) throw Error("A bond object is required");
    let settlement = coerceBondDateField(props.settlement, "settlement"),
      maturity = coerceBondDateField(props.maturity, "maturity");
    if (settlement.getTime() > maturity.getTime())
      throw Error("settlement must be on or before maturity");
    if (typeof props.rate != "number" || props.rate < 0 || props.rate > 1)
      throw Error("rate must be a number between 0 and 1");
    if (
      typeof props.redemption != "number" ||
      Number.isNaN(props.redemption) ||
      props.redemption <= 0
    )
      throw Error("redemption must be a positive number");
    if (
      typeof props.frequency != "number" ||
      !frequencySet.has(props.frequency)
    )
      throw Error(
        `frequency must be one of ${Array.from(frequencySet).join(", ")}`,
      );
    if (typeof props.convention != "string")
      throw Error("convention must be a string");
    if (!conventionSet.has(props.convention))
      throw Error(
        `convention must be one of ${Array.from(conventionSet).join(", ")}`,
      );
    return {
      settlement,
      maturity,
      rate: props.rate,
      redemption: props.redemption,
      frequency: props.frequency,
      convention: props.convention,
    };
  };
});

export const Lrt = ensureBondInputInit;

export function Prt(fbbIn6979: any) {
  let { settlement, maturity, rate, redemption, frequency, convention } =
    Irt(fbbIn6979);
  return {
    price: (fbbIn15861) =>
      fbbH.bondPriceFn(
        settlement,
        maturity,
        rate,
        fbbIn15861,
        redemption,
        frequency,
        convention,
      ),
    yield: (fbbIn15862) =>
      fbbH.bondYieldFn(
        settlement,
        maturity,
        rate,
        fbbIn15862,
        redemption,
        frequency,
        convention,
      ),
  };
}

export const createBondCalculator = Prt;
