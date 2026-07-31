// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: Range.conditionalFormats API + type normalize (legacy Spe/Cpe).

import { getAttachedWorksheet } from "../worksheet-attachment";
import { resolveCfRangeTarget, listCfRulesForTarget } from "./cf-range-ops";
import { normalizeCfRuleConfig } from "./cf-rule-records";

export class RangeConditionalFormats {
  #e;
  constructor(cfIn14870: unknown) {
    this.#e = cfIn14870;
  }
  addColorScale(cfIn4813) {
    if (
      typeof cfIn4813 == "object" &&
      cfIn4813 &&
      "minColor" in cfIn4813 &&
      "maxColor" in cfIn4813
    ) {
      let cfBind17530 = cfIn4813,
        cfBind17531 = [
          cfBind17530.minColor,
          ...(cfBind17530.midColor ? [cfBind17530.midColor] : []),
          cfBind17530.maxColor,
        ];
      return this.add("colorScale", {
        colors: cfBind17531,
        thresholds: cfBind17530.thresholds,
      });
    }
    return this.add("colorScale", cfIn4813);
  }
  addDataBar(cfIn13295) {
    return this.add("dataBar", cfIn13295);
  }
  addIconSet(cfIn13296) {
    return this.add("iconSet", cfIn13296);
  }
  addExpression(cfIn6365, cfIn6366) {
    let cfBind16524 =
        typeof cfIn6365 == "object" && !!cfIn6365 && "formula" in cfIn6365,
      cfBind16525 = cfBind16524 ? cfIn6365.formula : cfIn6365,
      cfBind16526 =
        cfBind16524 && "format" in cfIn6365 ? cfIn6365.format : cfIn6366,
      cfBind16527 = {
        formula: cfBind16525,
      };
    return (
      cfBind16526 && (cfBind16527.format = cfBind16526),
      this.add("expression", cfBind16527)
    );
  }
  addCustom(cfIn13045, cfIn13046) {
    return this.addExpression(cfIn13045, cfIn13046);
  }
  addCellIs(cfIn13485) {
    return this.add("cellIs", cfIn13485);
  }
  add(cfIn7461, cfIn7462) {
    let cfBind17935 = this.#t(),
      cfBind17936 = this.#e.address,
      cfBind17937 = normalizeCfTypeName(String(cfIn7461)),
      cfBind17938 = {
        ...normalizeCfRuleConfig(cfBind17937, cfIn7462),
        type: cfBind17937,
      };
    return cfBind17935.conditionalFormattings.add({
      range: cfBind17936,
      rule: cfBind17938,
    });
  }
  get items() {
    let cfBind19900 = this.#t(),
      { target } = resolveCfRangeTarget(cfBind19900, this.#e.address);
    return listCfRulesForTarget(
      cfBind19900.__getConditionalFormattings(),
      target,
    );
  }
  getItemAt(cfIn9586) {
    let cfBind20116 = this.items[cfIn9586];
    if (!cfBind20116)
      throw Error(`Conditional format at index ${cfIn9586} not found.`);
    return cfBind20116;
  }
  clearAll() {
    this.#t().conditionalFormattings.clear(this.#e.address);
  }
  deleteAll() {
    this.clearAll();
  }
  clear() {
    this.clearAll();
  }
  #t() {
    let cfBind20590 = getAttachedWorksheet(this.#e);
    if (!cfBind20590) throw Error("Range is not attached to a worksheet.");
    return cfBind20590;
  }
}

export function normalizeCfTypeName(props: string): string {
  switch (props.replace(/[^a-z0-9]/gi, "").toLowerCase()) {
    case "aboveaverage":
      return "aboveAverage";
    case "beginswith":
      return "beginsWith";
    case "cellis":
    case "cellvalue":
      return "cellIs";
    case "colorscale":
      return "colorScale";
    case "containsblanks":
      return "containsBlanks";
    case "containserrors":
      return "containsErrors";
    case "containstext":
      return "containsText";
    case "databar":
      return "dataBar";
    case "duplicatevalues":
      return "duplicateValues";
    case "endswith":
      return "endsWith";
    case "iconset":
      return "iconSet";
    case "notcontainsblanks":
      return "notContainsBlanks";
    case "notcontainserrors":
      return "notContainsErrors";
    case "notcontainstext":
      return "notContainsText";
    case "expression":
    case "custom":
      return "expression";
    case "timeperiod":
      return "timePeriod";
    case "top10":
      return "top10";
    case "uniquevalues":
      return "uniqueValues";
    default:
      break;
  }
  let cfBind4803 = [
    "aboveAverage",
    "beginsWith",
    "cellIs",
    "colorScale",
    "containsBlanks",
    "containsErrors",
    "containsText",
    "dataBar",
    "duplicateValues",
    "endsWith",
    "iconSet",
    "expression",
    "notContainsBlanks",
    "notContainsErrors",
    "notContainsText",
    "timePeriod",
    "top10",
    "uniqueValues",
  ].join(", ");
  throw Error(
    `Unsupported conditional format type: ${props}. Supported types: ${cfBind4803}. Use Custom as an alias for expression rules.`,
  );
}
