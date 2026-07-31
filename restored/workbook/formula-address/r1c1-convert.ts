// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: A1 ↔ R1C1 formula converters (legacy vme/yme).

import { columnLettersToNumber, columnNumberToLetters } from "../formula";
import { mapOutsideQuotedSegments, isAlphanumericChar } from "./map-unquoted";
import { MAX_WORKSHEET_ROWS, MAX_WORKSHEET_COLS } from "./worksheet-limits";

export function convertR1C1ToA1(
  addrIn1285: unknown,
  addrIn1286: unknown,
  addrIn1287: unknown,
) {
  return mapOutsideQuotedSegments(addrIn1285, (addrIn1402) =>
    addrIn1402.replace(
      /R(\[[-+]?\d+\]|\d+)?C(\[[-+]?\d+\]|\d+)?/gi,
      (addrIn1552, addrIn1553, addrIn1554, addrIn1555) => {
        let addrBind7626 = addrIn1402[addrIn1555 - 1],
          addrBind7627 = addrIn1402[addrIn1555 + addrIn1552.length];
        if (
          isAlphanumericChar(addrBind7626) ||
          isAlphanumericChar(addrBind7627)
        )
          return addrIn1552;
        let addrBind7628 = (addrIn3221) => {
            if (!addrIn3221)
              return {
                absolute: false,
                value: 0,
              };
            let addrBind11414 = addrIn3221.trim();
            if (addrBind11414.startsWith("[") && addrBind11414.endsWith("]")) {
              let addrBind18048 = Number(addrBind11414.slice(1, -1));
              if (
                !Number.isFinite(addrBind18048) ||
                !Number.isInteger(addrBind18048)
              )
                throw Error(`Invalid R1C1 reference: ${addrIn1552}`);
              return {
                absolute: false,
                value: addrBind18048,
              };
            }
            let addrBind11415 = Number(addrBind11414);
            if (
              !Number.isFinite(addrBind11415) ||
              !Number.isInteger(addrBind11415) ||
              addrBind11415 < 1
            )
              throw Error(`Invalid R1C1 reference: ${addrIn1552}`);
            return {
              absolute: true,
              value: addrBind11415,
            };
          },
          addrBind7629 = addrBind7628(addrIn1553),
          addrBind7630 = addrBind7628(addrIn1554),
          addrBind7631 = addrBind7629.absolute
            ? addrBind7629.value
            : addrIn1286 + addrBind7629.value,
          addrBind7632 = addrBind7630.absolute
            ? addrBind7630.value
            : addrIn1287 + addrBind7630.value;
        if (
          addrBind7631 < 1 ||
          addrBind7632 < 1 ||
          addrBind7631 > MAX_WORKSHEET_ROWS ||
          addrBind7632 > MAX_WORKSHEET_COLS
        )
          throw Error(
            `R1C1 reference ${addrIn1552} resolves outside worksheet bounds.`,
          );
        let addrBind7633 = columnNumberToLetters(addrBind7632);
        return `${addrBind7630.absolute ? "$" : ""}${addrBind7633}${addrBind7629.absolute ? "$" : ""}${addrBind7631}`;
      },
    ),
  );
}
export function convertA1ToR1C1(
  addrIn2719: unknown,
  addrIn2720: unknown,
  addrIn2721: unknown,
) {
  return mapOutsideQuotedSegments(addrIn2719, (addrIn2923) =>
    addrIn2923.replace(
      /(\$?)([A-Z]{1,3})(\$?)(\d{1,7})/g,
      (
        addrIn3214,
        addrIn3215,
        addrIn3216,
        addrIn3217,
        addrIn3218,
        addrIn3219,
      ) => {
        let addrBind11401 = addrIn2923[addrIn3219 - 1],
          addrBind11402 = addrIn2923[addrIn3219 + addrIn3214.length];
        if (
          isAlphanumericChar(addrBind11401) ||
          isAlphanumericChar(addrBind11402)
        )
          return addrIn3214;
        let addrBind11403 = columnLettersToNumber(addrIn3216),
          addrBind11404 = Number(addrIn3218);
        return !addrBind11403 || !addrBind11404
          ? addrIn3214
          : `${
              addrIn3217
                ? `R${addrBind11404}`
                : (() => {
                    let addrBind21498 = addrBind11404 - addrIn2720;
                    return addrBind21498 === 0 ? "R" : `R[${addrBind21498}]`;
                  })()
            }${
              addrIn3215
                ? `C${addrBind11403}`
                : (() => {
                    let addrBind21499 = addrBind11403 - addrIn2721;
                    return addrBind21499 === 0 ? "C" : `C[${addrBind21499}]`;
                  })()
            }`;
      },
    ),
  );
}
