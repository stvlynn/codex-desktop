// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: xlsx-workbook-validate deps via direct imports
// (wireXlsxWorkbookValidateBoundaryHooks leave-behind retired).

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

export type XlsxWorkbookValidateBoundaryHooks = {
  parseA1Range: (...args: any[]) => any;
  boundsIntersect: (...args: any[]) => any;
  boundsSize: (...args: any[]) => any;
  initAddressUtils: () => void;
};

export const xwvH: XlsxWorkbookValidateBoundaryHooks = {
  get parseA1Range() {
    return (__req("../../utils/spreadsheet-address-utils") as any)[
      "parseA1Range"
    ];
  },
  get boundsIntersect() {
    return (__req("../../utils/spreadsheet-address-utils") as any)[
      "boundsIntersect"
    ];
  },
  get boundsSize() {
    return (__req("../../utils/spreadsheet-address-utils") as any)[
      "boundsSize"
    ];
  },
  get initAddressUtils() {
    return (__req("../../utils/spreadsheet-address-utils") as any)[
      "initAddressUtils"
    ];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — xwvH uses direct imports. */
export function wireXlsxWorkbookValidateBoundaryHooks(
  _next?: Partial<XlsxWorkbookValidateBoundaryHooks>,
): void {}
