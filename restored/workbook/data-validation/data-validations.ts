// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: worksheet dataValidations collection (legacy zpe).

import { parseA1Range } from "../../utils/spreadsheet-address-utils";
import {
  resolveDvSqref,
  buildDataValidationRecord,
  recordDvSetOp,
  boundsContains,
  boundsArea,
} from "./dv-helpers";

export class DataValidations {
  #e;
  constructor(dvIn14871) {
    this.#e = dvIn14871;
  }
  get items() {
    return this.#e.__getDataValidations();
  }
  getForAddress(dvIn4140) {
    let dvBind13128 = parseA1Range(resolveDvSqref(this.#e, dvIn4140))?.bounds;
    if (!dvBind13128) return null;
    let dvBind13129 = null,
      dvBind13130 = 1 / 0;
    for (let dvBind16924 of this.#e.__getDataValidations()) {
      let dvBind18171 = dvBind16924.sqref;
      if (!dvBind18171) continue;
      let dvBind18172 = parseA1Range(dvBind18171)?.bounds;
      if (!dvBind18172 || !boundsContains(dvBind18172, dvBind13128)) continue;
      let dvBind18173 = boundsArea(dvBind18172);
      dvBind18173 < dvBind13130 &&
        ((dvBind13129 = dvBind16924), (dvBind13130 = dvBind18173));
    }
    return dvBind13129;
  }
  add(dvIn10073) {
    let dvBind20562 = buildDataValidationRecord(
      this.#e,
      dvIn10073.range,
      dvIn10073,
    );
    return (
      this.#e.__getDataValidations().push(dvBind20562),
      recordDvSetOp(this.#e, dvBind20562),
      dvBind20562
    );
  }
  clear(dvIn3153) {
    let dvBind11280 = resolveDvSqref(this.#e, dvIn3153),
      dvBind11281 = this.#e.__getDataValidations(),
      dvBind11282 = false;
    for (
      let dvBind21833 = dvBind11281.length - 1;
      dvBind21833 >= 0;
      --dvBind21833
    )
      dvBind11281[dvBind21833]?.sqref === dvBind11280 &&
        (dvBind11281.splice(dvBind21833, 1), (dvBind11282 = true));
    if (!dvBind11282) return;
    this.#e.__invalidateViewportLayout();
    this.#e.__queueCollaborativePublish();
    let dvBind11283 = this.#e.workbook.getRecorder();
    if (!dvBind11283) return;
    let dvBind11284 = {
      op: "datavalidation.clear",
      target: {
        sheet: this.#e.name,
        range: dvBind11280,
      },
    };
    dvBind11283.record(dvBind11284);
  }
}
