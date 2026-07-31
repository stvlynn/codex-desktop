// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: shift relative A1 refs in a formula (legacy a1-shift).

import { columnLettersToNumber, columnNumberToLetters } from "../formula";
import { MAX_WORKSHEET_ROWS, MAX_WORKSHEET_COLS } from "./worksheet-limits";

export function shiftA1FormulaRefs(
  addrIn4972: unknown,
  addrIn4973: unknown,
  addrIn4974: unknown,
) {
  return (
    addrIn4972 &&
    addrIn4972.replace(
      /(\$?)([A-Z]{1,3})(\$?)(\d{1,7})/g,
      (addrIn6387, addrIn6388, addrIn6389, addrIn6390, addrIn6391) => {
        let addrBind16556 = columnLettersToNumber(addrIn6389),
          addrBind16557 = Number(addrIn6391);
        if (!addrBind16556 || !addrBind16557) return addrIn6387;
        let addrBind16558 = addrBind16556,
          addrBind16559 = addrBind16557;
        return (
          addrIn6388 || (addrBind16558 = addrBind16556 + addrIn4974),
          addrIn6390 || (addrBind16559 = addrBind16557 + addrIn4973),
          addrBind16558 < 1 ||
          addrBind16559 < 1 ||
          addrBind16558 > MAX_WORKSHEET_COLS ||
          addrBind16559 > MAX_WORKSHEET_ROWS
            ? addrIn6387
            : `${addrIn6388}${columnNumberToLetters(addrBind16558)}${addrIn6390}${addrBind16559}`
        );
      },
    )
  );
}
