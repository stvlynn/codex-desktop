// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: OOXML guide variable bag from width/height (legacy Iue).

import type { FormulaEnv } from "./types";

/** Legacy `Iue` — build `w/h/l/t/r/b/hc/…` guide env for a bbox. */
export function buildGuideVariables(width: number, height: number): FormulaEnv {
  let ss = Math.min(width, height);
  return {
    w: width,
    h: height,
    l: 0,
    t: 0,
    r: width,
    b: height,
    hc: width / 2,
    vc: height / 2,
    ss,
    wd2: width / 2,
    wd3: width / 3,
    wd4: width / 4,
    wd5: width / 5,
    wd6: width / 6,
    wd8: width / 8,
    wd10: width / 10,
    wd12: width / 12,
    wd32: width / 32,
    hd2: height / 2,
    hd3: height / 3,
    hd4: height / 4,
    hd5: height / 5,
    hd6: height / 6,
    hd8: height / 8,
    hd10: height / 10,
    ssd2: ss / 2,
    ssd6: ss / 6,
    ssd8: ss / 8,
    ssd16: ss / 16,
    ssd32: ss / 32,
  };
}
