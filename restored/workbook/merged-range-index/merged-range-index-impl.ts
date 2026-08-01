// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: merged-cell range index (legacy Binding833 / sye).
// Stage-3 wave-141.

import {
  parseA1Range,
  initAddressUtils,
} from "../../utils/spreadsheet-address-utils";
import { workbookHelper379, oye } from "./merged-range-helpers-impl";

initAddressUtils();

export class workbookBinding833 {
  bounds;
  #e = new Map();
  #t = new Map();
  #n = new Map();
  constructor(mriIn1933) {
    let mriBind8669 = [];
    for (let mriBind9323 of mriIn1933) {
      let mriBind9487 = mriBind9323.startAddress;
      if (!mriBind9487) continue;
      let mriBind9488 = parseA1Range(
        `${mriBind9487}:${mriBind9323.endAddress ?? mriBind9487}`,
      );
      if (!mriBind9488) continue;
      let mriBind9489 = Math.min(
          mriBind9488.bounds.startRow,
          mriBind9488.bounds.endRow,
        ),
        mriBind9490 = Math.max(
          mriBind9488.bounds.startRow,
          mriBind9488.bounds.endRow,
        ),
        mriBind9491 = Math.min(
          mriBind9488.bounds.startCol,
          mriBind9488.bounds.endCol,
        ),
        mriBind9492 = Math.max(
          mriBind9488.bounds.startCol,
          mriBind9488.bounds.endCol,
        ),
        mriBind9493 = {
          rowMin: mriBind9489,
          rowMax: mriBind9490,
          colMin: mriBind9491,
          colMax: mriBind9492,
        };
      mriBind8669.push(mriBind9493);
      for (
        let mriBind22900 = mriBind9489;
        mriBind22900 <= mriBind9490;
        mriBind22900 += 1
      )
        workbookHelper379(this.#e, mriBind22900, mriBind9493);
      for (
        let mriBind22111 = mriBind9489 + 1;
        mriBind22111 <= mriBind9490;
        mriBind22111 += 1
      )
        workbookHelper379(this.#t, mriBind22111, {
          colMin: mriBind9491,
          colMax: mriBind9492,
        });
      for (
        let mriBind22112 = mriBind9491 + 1;
        mriBind22112 <= mriBind9492;
        mriBind22112 += 1
      )
        workbookHelper379(this.#n, mriBind22112, {
          rowMin: mriBind9489,
          rowMax: mriBind9490,
        });
    }
    this.bounds = mriBind8669;
  }
  findBoundsForCell(mriIn8979, mriIn8980) {
    let mriBind19525 = this.#e.get(mriIn8979);
    if (!(!mriBind19525 || mriBind19525.length === 0))
      return mriBind19525.find(
        (item) => mriIn8980 >= item.colMin && mriIn8980 <= item.colMax,
      );
  }
  boundaryCrossesHorizontally(mriIn7639, mriIn7640) {
    let mriBind18133 = this.#t.get(mriIn7639);
    if (!mriBind18133 || mriBind18133.length === 0) return false;
    for (let mriBind22688 of mriBind18133)
      if (mriIn7640 >= mriBind22688.colMin && mriIn7640 <= mriBind22688.colMax)
        return true;
    return false;
  }
  boundaryCrossesVertically(mriIn7705, mriIn7706) {
    let mriBind18203 = this.#n.get(mriIn7706);
    if (!mriBind18203 || mriBind18203.length === 0) return false;
    for (let mriBind22689 of mriBind18203)
      if (mriIn7705 >= mriBind22689.rowMin && mriIn7705 <= mriBind22689.rowMax)
        return true;
    return false;
  }
  rangesIntersecting(mriIn5943) {
    let mriBind15963 = [],
      mriBind15964 = new Set();
    for (
      let mriBind18957 = mriIn5943.rowMin;
      mriBind18957 <= mriIn5943.rowMax;
      mriBind18957 += 1
    ) {
      let mriBind20362 = this.#e.get(mriBind18957);
      if (mriBind20362)
        for (let mriBind22673 of mriBind20362)
          mriBind15964.has(mriBind22673) ||
            (mriBind15964.add(mriBind22673),
            oye(mriBind22673, mriIn5943) && mriBind15963.push(mriBind22673));
    }
    return mriBind15963;
  }
}
