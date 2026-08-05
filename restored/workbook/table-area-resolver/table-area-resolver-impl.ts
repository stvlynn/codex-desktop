// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: workbook table/area resolver (legacy npt / ipt / rpt).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  initAddressUtils,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import {
  ensureFormulaArrayInit as $u,
  attachRangeMetadata,
} from "../formula-array";
import { qft, Jft, Yft } from "../formula-structured-ref";
import { workbookBinding687 } from "../table-styles";

export let rpt: any;

export const npt = esmInit(() => {
  initAddressUtils();
  workbookBinding687();
  workbookBinding687();
});

export const ipt = esmInit(() => {
  initAddressUtils();
  $u();
  npt();
  rpt = class {
    #e;
    constructor(tarIn14933) {
      this.#e = tarIn14933;
    }
    findTableByName(tarIn4276) {
      let tarBind13330 = tarIn4276.trim().toUpperCase();
      if (!tarBind13330) return null;
      for (let tarBind16052 of this.#e.worksheets) {
        let tarBind16890 = tarBind16052.name?.trim();
        if (tarBind16890) {
          for (let tarBind19723 of tarBind16052.__getTables() ?? [])
            if (
              (tarBind19723.name ?? tarBind19723.displayName ?? "")
                .trim()
                .toUpperCase() === tarBind13330
            )
              return {
                sheetName: tarBind16890,
                table: tarBind19723,
              };
        }
      }
      return null;
    }
    resolveArea(tarIn6788, tarIn6789) {
      return qft(tarIn6788, {
        activeCellAddress: this.#n(
          tarIn6789.fallbackSheet,
          tarIn6789.activeCellAddress,
        ),
        findTableByName: (tarIn15881) => this.findTableByName(tarIn15881),
        findContainingTable: (tarIn16451) => this.#t(tarIn16451),
      });
    }
    readValues(tarIn6488, tarIn6489, tarIn6490) {
      let tarBind16682 = this.resolveArea(tarIn6488, {
        fallbackSheet: tarIn6490,
        activeCellAddress: tarIn6489.activeCellAddress,
      });
      return tarBind16682.kind === "Error"
        ? [[this.#e.makeError(tarBind16682.code)]]
        : this.#r(tarBind16682, tarIn6489);
    }
    expand(tarIn10657, tarIn10658) {
      let tarBind21157 = this.resolveArea(tarIn10657, tarIn10658);
      return tarBind21157.kind === "Error" ? [] : Yft(tarBind21157.area);
    }
    #t(tarIn3044) {
      let tarBind11098 = tarIn3044.sheet?.sheetName?.trim();
      if (!tarBind11098) return null;
      let tarBind11099 = this.#e.getWorksheetByName(tarBind11098);
      if (!tarBind11099) return null;
      for (let tarBind14134 of tarBind11099.__getTables() ?? []) {
        let tarBind14820 = parseA1Range(tarBind14134.ref ?? "");
        if (!tarBind14820) continue;
        let tarBind14821 = tarBind14820.bounds.startRow + 1,
          tarBind14822 = tarBind14820.bounds.endRow + 1,
          tarBind14823 = tarBind14820.bounds.startCol + 1,
          tarBind14824 = tarBind14820.bounds.endCol + 1;
        if (
          tarIn3044.row >= tarBind14821 &&
          tarIn3044.row <= tarBind14822 &&
          tarIn3044.col >= tarBind14823 &&
          tarIn3044.col <= tarBind14824
        )
          return {
            sheetName: tarBind11098,
            table: tarBind14134,
          };
      }
      return null;
    }
    #n(tarIn9784, tarIn9785) {
      if (!tarIn9785) return;
      let tarBind20326 = tarIn9785.sheet?.sheetName ?? tarIn9784;
      if (tarBind20326)
        return this.#e.normalizeCellAddress(tarIn9785, tarBind20326);
    }
    #r(tarIn5313, tarIn5314) {
      let tarBind14957 = Jft(tarIn5313.area),
        tarBind14958 = [];
      for (let tarBind17576 of tarBind14957) {
        let tarBind18067 = [];
        for (let tarBind20248 of tarBind17576) {
          let tarBind20756 = tarIn5314.cellAddressToKey(tarBind20248);
          tarBind18067.push(
            tarBind20756
              ? tarIn5314.getCellValue(tarBind20756)
              : this.#e.makeError("#REF!"),
          );
        }
        tarBind14958.push(tarBind18067);
      }
      return (attachRangeMetadata(tarBind14958, tarBind14957), tarBind14958);
    }
  };
});

export function ensureTableAreaResolverInit(): void {
  ipt();
}
