// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: CF range targeting + publish helpers (legacy resolveCfRangeTarget…recordCfAddOp).

import { Zn as colorTypeEnum } from "../presentation-protobuf";
import {
  parseSheetRef,
  parseA1Range,
  formatA1,
} from "../../utils/spreadsheet-address-utils";
import { themeStyleMapsFromProto } from "../design-tokens";
import { WorkbookColor } from "../theme-color";
import { resolveColorProtoToRgbaString } from "../color-resolve";
import { buildConditionalFormatAddOp } from "../mutation-ops";
import { resolveIconCount, defaultIconThresholds } from "../icon-set";
import { ConditionalFormatRule } from "./conditional-format-rule";

import { buildCfRuleRecord } from "./cf-rule-records";

export function resolveCfRangeTarget(cfIn3732: unknown, cfIn3733: unknown) {
  let { sheetName, ref } = parseSheetRef(cfIn3733);
  if (sheetName && sheetName !== cfIn3732.name)
    throw Error(
      `Conditional formatting range must target "${cfIn3732.name}", received "${sheetName}".`,
    );
  let cfBind12416 = parseA1Range(ref);
  if (!cfBind12416) throw Error(`Invalid range address: ${cfIn3733}`);
  let cfBind12417 = cfBind12416.bounds,
    cfBind12418 = formatA1(cfBind12417.startRow, cfBind12417.startCol),
    cfBind12419 = formatA1(cfBind12417.endRow, cfBind12417.endCol);
  return {
    ref: cfBind12416.ref,
    target: {
      sheetName: cfIn3732.name,
      sheetId: cfIn3732.id ?? "",
      startAddress: cfBind12418,
      endAddress: cfBind12419,
    },
  };
}
export function cfGroupMatchesTarget(cfIn8116: unknown, cfIn8117: unknown) {
  return (cfIn8116.ranges ?? []).some(
    (item) =>
      item.startAddress === cfIn8117.startAddress &&
      item.endAddress === cfIn8117.endAddress &&
      (!item.sheetName || item.sheetName === cfIn8117.sheetName),
  );
}
export function findCfGroupForTarget(cfIn14199: unknown, cfIn14200: unknown) {
  return cfIn14199.find((item) => cfGroupMatchesTarget(item, cfIn14200));
}
export function createCfGroup(cfIn12114: unknown, cfIn12115: unknown) {
  let cfBind22291 = {
    ranges: [cfIn12115],
    rules: [],
  };
  return (cfIn12114.push(cfBind22291), cfBind22291);
}
export function listCfRulesForTarget(cfIn10421: unknown, cfIn10422: unknown) {
  let cfBind20892 = [];
  for (let cfBind22434 of cfIn10421)
    if (cfGroupMatchesTarget(cfBind22434, cfIn10422))
      for (let cfBind22939 of cfBind22434.rules ?? [])
        cfBind20892.push(new ConditionalFormatRule(cfBind22939));
  return cfBind20892;
}
export function recordCfAddOp(
  cfIn8590: unknown,
  cfIn8591: unknown,
  cfIn8592: unknown,
) {
  cfIn8590.__queueCollaborativePublish();
  let cfBind19095 = cfIn8590.workbook.getRecorder();
  if (!cfBind19095) return;
  let cfBind19096 = buildConditionalFormatAddOp({
    sheet: cfIn8590.name,
    target: cfIn8591,
    rule: cfIn8592,
  });
  cfBind19096 && cfBind19095.record(cfBind19096);
}
export function formatCfTargetRange(props: unknown) {
  let cfBind20771 = props.startAddress;
  if (!cfBind20771) return null;
  let cfBind20772 = props.endAddress;
  return cfBind20772 && cfBind20772 !== cfBind20771
    ? `${cfBind20771}:${cfBind20772}`
    : cfBind20771;
}
