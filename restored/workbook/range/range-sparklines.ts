// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: Range.sparklines.add helper (legacy Sme).

/** Legacy `Sme` — sparklines facade bound to a parent Range. */
export class RangeSparklines {
  #range: any;
  #range;
  constructor(rngIn14873: unknown) {
    this.#range = rngIn14873 as any;
  }
  add(rngIn1581, rngIn1582, rngIn1583) {
    let rngBind7716 = this.#range.__getWorksheet();
    if (!rngBind7716)
      throw Error(
        "Range.sparklines.add requires a range attached to a worksheet.",
      );
    if (typeof rngIn1581 == "string") {
      if (!rngIn1582)
        throw Error(
          "Range.sparklines.add(type, sourceData, options?) requires sourceData.",
        );
      return rngBind7716.sparklineGroups.add({
        type: rngIn1581,
        targetRange: this.#range,
        sourceData: rngIn1582,
        ...(rngIn1583 ?? {}),
      });
    }
    let rngBind7717 = rngIn1581;
    if (rngBind7717.targetRange && rngBind7717.targetRange !== this.#range) {
      let rngBind16017 =
        typeof rngBind7717.targetRange == "string"
          ? rngBind7717.targetRange
          : rngBind7717.targetRange.address;
      console.warn(
        `Range.sparklines.add(config) ignores config.targetRange (${rngBind16017}) and uses ${this.#range.address}.`,
      );
    }
    return rngBind7716.sparklineGroups.add({
      ...rngBind7717,
      targetRange: this.#range,
    });
  }
}
