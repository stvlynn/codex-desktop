// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF fill/font/icon engine class (legacy Wht) + Ght ensure.
// Stage-3 wave-131.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, Zn } from "../presentation-protobuf";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { ensureIconSetCatalogInit } from "../icon-set";
import { ensureFormulaInit } from "../formula";
import { ensureFormulaArrayInit } from "../formula-array";
import {
  workbookHelper1021 as pointInCfRanges,
  coerceCfNumeric,
} from "../cf-range-stats";
import { remapFormulaAst } from "../formula-ast-remap";
import { Iht, Rht } from "../cf-icon-color-scale";
import { ensureCfEpochInit, Cht, Oht } from "./cf-epoch";
import { hht, ght, _ht, vht, yht, bht, xht } from "./cf-cell-match-impl";
import { Lht, zht } from "./cf-icon-index-impl";

const noopEnsure = esmInit(() => {});

export let Vht, Hht, workbookBinding1962, Uht, Wht;
export const ensureCfFillEngineInit = esmInit(() => {
  wr();
  ensureCssNamedColorsInit();
  noopEnsure();
  initAddressUtils();
  Cht();
  ensureCfEpochInit();
  ensureIconSetCatalogInit();
  Oht();
  ensureFormulaInit();
  ensureFormulaArrayInit();
  Vht = "rgba(255,199,206,1)";
  Hht = "#4F81BD";
  workbookBinding1962 = {
    colorSpace: "spreadsheetml",
  };
  Uht = {
    type: Zn.COLOR_TYPE_SCHEME,
    value: "accent1",
    lastColor: "",
    transform: {
      tint: 6e4,
      shade: 0,
      lumMod: 0,
      lumOff: 0,
      satMod: 0,
      alpha: 1e5,
    },
  };
  Wht = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(ceIn5882) {
      this.#e = ceIn5882.sheetName;
      this.#t = ceIn5882.getCell;
      this.#n = ceIn5882.evaluateExpression;
      this.#r = ceIn5882.conditionalRules;
      this.#i = ceIn5882.colorScaleRules;
      this.#a = ceIn5882.dataBarRules;
      this.#o = ceIn5882.iconSetRules;
    }
    getFillCss(ceIn2833, ceIn2834, ceIn2835) {
      let ceBind10593 = null,
        ceBind10594 = 1 / 0,
        ceBind10595 = ceIn2835 ?? this.#t(ceIn2833, ceIn2834);
      for (let ceBind18716 of this.#r) {
        if (
          !pointInCfRanges(ceIn2833, ceIn2834, ceBind18716.ranges) ||
          !this.#s(ceBind18716, ceIn2833, ceIn2834, ceBind10595)
        )
          continue;
        let ceBind19406 = ceBind18716.fillCss;
        ceBind19406 &&
          ceBind18716.priority < ceBind10594 &&
          ((ceBind10593 = ceBind19406), (ceBind10594 = ceBind18716.priority));
      }
      if (this.#i.length > 0) {
        let ceBind16689 = coerceCfNumeric(ceBind10595);
        if (ceBind16689 != null)
          for (let ceBind18943 of this.#i) {
            if (!pointInCfRanges(ceIn2833, ceIn2834, ceBind18943.ranges))
              continue;
            let ceBind19671 = Iht(ceBind18943, ceBind16689);
            ceBind19671 &&
              ceBind18943.priority < ceBind10594 &&
              ((ceBind10593 = ceBind19671),
              (ceBind10594 = ceBind18943.priority));
          }
      }
      return ceBind10593;
    }
    getTextColor(ceIn5322, ceIn5323, ceIn5324) {
      let ceBind14992 = 1 / 0,
        ceBind14993 = null,
        ceBind14994 = ceIn5324 ?? this.#t(ceIn5322, ceIn5323);
      for (let ceBind18552 of this.#r)
        ceBind18552.fontColor &&
          pointInCfRanges(ceIn5322, ceIn5323, ceBind18552.ranges) &&
          this.#s(ceBind18552, ceIn5322, ceIn5323, ceBind14994) &&
          ceBind18552.priority < ceBind14992 &&
          ((ceBind14993 = ceBind18552.fontColor),
          (ceBind14992 = ceBind18552.priority));
      return ceBind14993;
    }
    getDataBar(ceIn7127, ceIn7128, ceIn7129) {
      if (coerceCfNumeric(ceIn7129 ?? this.#t(ceIn7127, ceIn7128)) == null)
        return null;
      let ceBind17464 = null;
      for (let ceBind21852 of this.#a)
        pointInCfRanges(ceIn7127, ceIn7128, ceBind21852.ranges) &&
          (!ceBind17464 || ceBind21852.priority < ceBind17464.priority) &&
          (ceBind17464 = ceBind21852);
      return ceBind17464;
    }
    hasDataBar(ceIn12339, ceIn12340, ceIn12341) {
      return this.getDataBar(ceIn12339, ceIn12340, ceIn12341) != null;
    }
    getIconSet(ceIn3903, ceIn3904, ceIn3905) {
      let ceBind12784 = coerceCfNumeric(
        ceIn3905 ?? this.#t(ceIn3903, ceIn3904),
      );
      if (ceBind12784 == null) return null;
      let ceBind12785 = null;
      for (let ceBind21853 of this.#o)
        pointInCfRanges(ceIn3903, ceIn3904, ceBind21853.ranges) &&
          (!ceBind12785 || ceBind21853.priority < ceBind12785.priority) &&
          (ceBind12785 = ceBind21853);
      return ceBind12785
        ? {
            iconSetName: ceBind12785.iconSetName,
            iconIndex: Lht(ceBind12785, ceBind12784),
            priority: ceBind12785.priority,
            showValue: ceBind12785.showValue,
          }
        : null;
    }
    #s(ceIn1574, ceIn1575, ceIn1576, ceIn1577) {
      switch (ceIn1574.type) {
        case "cellIs": {
          let ceBind21773 = coerceCfNumeric(ceIn1577);
          return Rht(ceIn1574.operator ?? "", ceIn1574.formula, ceBind21773);
        }
        case "expression":
          return this.#c(ceIn1574, ceIn1575, ceIn1576);
        case "containsText":
        case "notContainsText":
        case "beginsWith":
        case "endsWith":
          return hht(ceIn1574.type, ceIn1574.text, ceIn1577);
        case "containsBlanks":
        case "notContainsBlanks":
          return ght(ceIn1574.type, ceIn1577);
        case "containsErrors":
        case "notContainsErrors":
          return _ht(ceIn1574.type, ceIn1577);
        case "timePeriod":
          return xht(ceIn1574.timePeriod, ceIn1577);
        case "duplicateValues":
        case "uniqueValues":
          return vht(ceIn1574.type, ceIn1574.valueCounts, ceIn1577);
        case "top10":
          return yht(ceIn1574.threshold, ceIn1577);
        case "aboveAverage":
          return bht(ceIn1574.threshold, ceIn1577);
        default:
          return false;
      }
    }
    #c(ceIn3362, ceIn3363, ceIn3364) {
      let ceBind11694 = `${ceIn3363}:${ceIn3364}`,
        ceBind11695 = ceIn3362.matchCache.get(ceBind11694);
      if (ceBind11695 != null) return ceBind11695;
      let ceBind11696 = ceIn3363 - ceIn3362.anchor.row,
        ceBind11697 = ceIn3364 - ceIn3362.anchor.col,
        ceBind11698 = remapFormulaAst(ceIn3362.expr, ceBind11696, ceBind11697);
      if (!ceBind11698)
        return (ceIn3362.matchCache.set(ceBind11694, false), false);
      let ceBind11699 = {
          sheet: {
            sheetName: this.#e,
          },
          row: ceIn3363 + 1,
          col: ceIn3364 + 1,
          absRow: false,
          absCol: false,
        },
        ceBind11700 = zht(this.#n(ceBind11698, ceBind11699));
      return (ceIn3362.matchCache.set(ceBind11694, ceBind11700), ceBind11700);
    }
  };
});

export const Ght = ensureCfFillEngineInit;
export const ConditionalFormatFillEngine = {
  get Wht() {
    return Wht;
  },
};
