// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF time-period date match (legacy oht/uht).
// Stage-3 wave-108.

import { cfRtH as cfH } from "./boundary-hooks-runtime";

void cfH;

export function utcDateKey(cfIn11819: any) {
  return Date.UTC(
    cfIn11819.getUTCFullYear(),
    cfIn11819.getUTCMonth(),
    cfIn11819.getUTCDate(),
  );
}

export function matchesCfDatePeriod(
  cfIn1957: any,
  cfIn1958: any,
  cfIn1959: any = new Date(),
) {
  let cfBind8700 = utcDateKey(cfIn1958),
    cfBind8701 = utcDateKey(cfIn1959);
  switch (cfIn1957.replace(/[^a-z0-9]/gi, "").toLowerCase()) {
    case "today":
      return cfBind8700 === cfBind8701;
    case "yesterday":
      return (
        cfBind8700 === cfH.addDays(cfBind8701, -1)
      );
    case "tomorrow":
      return cfBind8700 === cfH.addDays(cfBind8701, 1);
    case "last7days":
      return (
        cfBind8700 >= cfH.addDays(cfBind8701, -6) &&
        cfBind8700 <= cfBind8701
      );
    case "thisweek": {
      let cfBind22657 = cfH.weekStart(cfBind8701);
      return (
        cfBind8700 >= cfBind22657 &&
        cfBind8700 < cfH.addDays(cfBind22657, 7)
      );
    }
    case "lastweek": {
      let cfBind22631 = cfH.weekStart(cfBind8701);
      return (
        cfBind8700 >= cfH.addDays(cfBind22631, -7) &&
        cfBind8700 < cfBind22631
      );
    }
    case "nextweek": {
      let cfBind22527 = cfH.weekStart(cfBind8701);
      return (
        cfBind8700 >= cfH.addDays(cfBind22527, 7) &&
        cfBind8700 < cfH.addDays(cfBind22527, 14)
      );
    }
    case "thismonth":
      return (
        cfBind8700 >= cfH.monthStart(cfBind8701) &&
        cfBind8700 < cfH.monthEnd(cfBind8701)
      );
    case "lastmonth": {
      let cfBind22565 = cfH.monthStart(cfBind8701);
      return (
        cfBind8700 >=
          cfH.monthStart(cfH.addDays(cfBind22565, -1)) &&
        cfBind8700 < cfBind22565
      );
    }
    case "nextmonth": {
      let cfBind22711 = cfH.monthEnd(cfBind8701);
      return (
        cfBind8700 >= cfBind22711 &&
        cfBind8700 < cfH.monthEnd(cfBind22711)
      );
    }
    default:
      return false;
  }
}

/** Legacy aliases. */
export const uht = utcDateKey;
export const oht = matchesCfDatePeriod;
