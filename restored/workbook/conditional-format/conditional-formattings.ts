// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: worksheet conditionalFormattings collection (legacy xpe).

import {
  resolveCfRangeTarget,
  findCfGroupForTarget,
  createCfGroup,
  recordCfAddOp,
  formatCfTargetRange,
  cfGroupMatchesTarget,
} from "./cf-range-ops";
import { buildCfRuleRecord } from "./cf-rule-records";
import { ConditionalFormatRule } from "./conditional-format-rule";

export class ConditionalFormattings {
  #e;
  constructor(cfIn14869: unknown) {
    this.#e = cfIn14869;
  }
  get items() {
    return this.#e.__getConditionalFormattings();
  }
  add(cfIn3576) {
    let { range, rule } = cfIn3576,
      { target } = resolveCfRangeTarget(this.#e, range),
      cfBind12077 =
        findCfGroupForTarget(this.#e.__getConditionalFormattings(), target) ??
        createCfGroup(this.#e.__getConditionalFormattings(), target),
      cfBind12078 = buildCfRuleRecord(this.#e, rule, this.#t());
    return (
      (cfBind12077.rules = cfBind12077.rules ?? []),
      cfBind12077.rules.push(cfBind12078),
      this.#e.workbook.invalidateConditionalFormattingCache(this.#e.name),
      recordCfAddOp(this.#e, target, rule),
      new ConditionalFormatRule(cfBind12078)
    );
  }
  clear(cfIn2361) {
    let { target } = resolveCfRangeTarget(this.#e, cfIn2361),
      cfBind9544 = formatCfTargetRange(target),
      cfBind9545 = this.#e.__getConditionalFormattings(),
      cfBind9546 = false;
    for (
      let cfBind20673 = cfBind9545.length - 1;
      cfBind20673 >= 0;
      --cfBind20673
    ) {
      let cfBind21959 = cfBind9545[cfBind20673];
      cfBind21959 &&
        cfGroupMatchesTarget(cfBind21959, target) &&
        (cfBind9545.splice(cfBind20673, 1), (cfBind9546 = true));
    }
    if (
      (this.#e.workbook.invalidateConditionalFormattingCache(this.#e.name),
      this.#e.__queueCollaborativePublish(),
      !cfBind9546 || !cfBind9544)
    )
      return;
    let cfBind9547 = this.#e.workbook.getRecorder();
    if (!cfBind9547) return;
    let cfBind9548 = {
      op: "conditionalformat.clear",
      target: {
        sheet: this.#e.name,
        range: cfBind9544,
      },
    };
    cfBind9547.record(cfBind9548);
  }
  #t() {
    let cfBind16445 = 0;
    for (let cfBind18349 of this.#e.__getConditionalFormattings())
      for (let cfBind20338 of cfBind18349.rules ?? []) {
        let cfBind21216 =
          typeof cfBind20338.priority == "number" ? cfBind20338.priority : 0;
        cfBind16445 = Math.max(cfBind16445, cfBind21216);
      }
    return cfBind16445 + 1;
  }
}
