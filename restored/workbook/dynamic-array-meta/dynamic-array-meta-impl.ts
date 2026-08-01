// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: dynamic-array / LAMBDA prefix tables (legacy Cpt).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ensureFormulaInit as workbookF } from "../formula";

export let workbookBinding1952: any;
export let workbookBinding1953: any;
export let workbookBinding1954: any;
export let xpt: any;
export let Spt: any;

export const Cpt = esmInit(() => {
  spreadsheetVn();
  initAddressUtils();
  workbookF();
      workbookBinding1952 = "XLDAPR";
      workbookBinding1953 = "{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}";
      workbookBinding1954 = 12e4;
      xpt = [
        {
          name: "FILTER",
          prefix: "_xlfn._xlws.",
        },
        {
          name: "SORT",
          prefix: "_xlfn._xlws.",
        },
        {
          name: "UNIQUE",
          prefix: "_xlfn.",
        },
      ];
      Spt = [
        {
          name: "LAMBDA",
          prefix: "_xlfn.",
        },
      ];
});

export function ensureDynamicArrayMetaInit(): void {
  Cpt();
}
