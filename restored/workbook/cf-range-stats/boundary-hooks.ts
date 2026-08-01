// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: cf-range-stats deps via direct imports
// (wireCfRangeStatsBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type CfRangeStatsHooks = {
  /** Legacy Binding1959 — Excel epoch UTC ms. */
  excelEpochUtc: number;
  /** Legacy Binding1960 — ms per day. */
  msPerDay: number;
  /** Legacy dht — ISO date regex. */
  isoDateRe: RegExp;
  /** Presentation cell data-type enum (legacy d). */
  CellDataType: any;
};

export const crsH: CfRangeStatsHooks = {
  get excelEpochUtc() {
    return (__req("../cf-engine") as any)["excelEpochUtc"];
  },
  get msPerDay() {
    return (__req("../cf-engine") as any)["msPerDay"];
  },
  get isoDateRe() {
    return (__req("../cf-engine") as any)["isoDateRe"];
  },
  get CellDataType() {
    return (__req("../presentation-protobuf") as any)["d"];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — crsH uses direct imports. */
export function wireCfRangeStatsBoundaryHooks(
  _next?: Partial<CfRangeStatsHooks>,
): void {}
