// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel IRR solver (legacy F0e).
// Stage-3 wave-101/104 (computeXirr / Z0e).

import {
  workbookBinding1835 as valueError,
  workbookBinding1838 as numError,
} from "../formula-stats";
import { irrH } from "./boundary-hooks";

void valueError;
void numError;
void irrH;

export function computeIrr(irrIn689: any, irrIn690: any) {
  if (
    ((irrIn690 =
      typeof irrIn690 == "number"
        ? irrIn690
        : irrIn690 === undefined
          ? 0.1
          : irrH.fn849(irrIn690)),
    (irrIn689 =
      irrH.fn841(irrIn689).filter(irrH.fn854)),
    (irrIn689 = irrH.fn850(irrIn689)),
    irrH.fn846(irrIn689, irrIn690))
  )
    return valueError;
  let irrBind4962 = new Float64Array(irrIn689.length),
    irrBind4963 = false,
    irrBind4964 = false;
  for (
    let irrBind21876 = 0;
    irrBind21876 < irrIn689.length;
    irrBind21876++
  ) {
    irrBind4962[irrBind21876] =
      irrIn689[irrBind21876];
    irrBind4962[irrBind21876] > 0 &&
      (irrBind4963 = true);
    irrBind4962[irrBind21876] < 0 &&
      (irrBind4964 = true);
  }
  if (!irrBind4963 || !irrBind4964) return numError;
  let irrBind4965 = (irrIn8523) => {
      irrIn8523 <= -1 && (irrIn8523 = -0.999999999);
      let irrBind19033 = irrBind4962[0],
        irrBind19034 = 1 + irrIn8523,
        irrBind19035 = 1;
      for (
        let irrBind22696 = 1;
        irrBind22696 < irrBind4962.length;
        irrBind22696++
      ) {
        irrBind19035 *= irrBind19034;
        irrBind19033 +=
          irrBind4962[irrBind22696] / irrBind19035;
      }
      return irrBind19033;
    },
    irrBind4966 = new Map(),
    irrBind4967 = function (irrIn9717) {
      let irrBind20238 = Math.round(irrIn9717 * 1e10) / 1e10;
      if (irrBind4966.has(irrBind20238))
        return irrBind4966.get(irrBind20238);
      let irrBind20239 = irrBind4965(irrBind20238);
      return (
        irrBind4966.set(irrBind20238, irrBind20239),
        irrBind20239
      );
    };
  return (function () {
    let irrBind6970 = irrIn690,
      irrBind6971 = irrBind6970,
      irrBind6972 = 0;
    for (; irrBind6972 < 1e3; ) {
      let irrBind13038 = irrBind4967(irrBind6970);
      if (Math.abs(irrBind13038) < 1e-10) return irrBind6970;
      if (
        irrBind6972 > 0 &&
        Math.abs(irrBind6970 - irrBind6971) < 1e-9
      )
        break;
      let irrBind13039 = Math.max(
          1e-4,
          Math.abs(irrBind6970 * 1e-4),
        ),
        irrBind13040 =
          (irrBind4967(irrBind6970 + irrBind13039) -
            irrBind13038) /
          irrBind13039;
      if (Math.abs(irrBind13040) < 1e-10) break;
      irrBind6971 = irrBind6970;
      let irrBind13041 = irrBind13038 / irrBind13040,
        irrBind13042 = Math.max(
          0.1,
          Math.abs(irrBind6970) * 0.5,
        );
      Math.abs(irrBind13041) > irrBind13042
        ? (irrBind6970 -=
            Math.sign(irrBind13041) * irrBind13042)
        : (irrBind6970 -= irrBind13041);
      irrBind6970 <= -1 && (irrBind6970 = -0.99999999);
      irrBind6970 > 1e3 && (irrBind6970 = 1e3);
      irrBind6972++;
    }
    let irrBind6973 = irrBind4967(irrBind6970);
    if (Math.abs(irrBind6973) < 1e-10) return irrBind6970;
    let irrBind6974, irrBind6975;
    if (irrBind6973 > 0) {
      for (
        irrBind6974 = irrBind6970,
          irrBind6975 = irrBind6970 + 0.1;
        irrBind4967(irrBind6975) > 0 &&
        irrBind6975 < 1e3;
      )
        irrBind6975 = irrBind6975 * 2 + 0.1;
      if (irrBind6975 >= 1e3) return irrBind6970;
    } else {
      for (
        irrBind6975 = irrBind6970,
          irrBind6974 = Math.max(
            -0.99999999,
            irrBind6970 - 0.1,
          );
        irrBind4967(irrBind6974) < 0 &&
        irrBind6974 > -0.99999999;
      )
        irrBind6974 = Math.max(-0.99999999, irrBind6974 - 0.1);
      if (irrBind6974 <= -0.99999999) return irrBind6970;
    }
    let irrBind6976;
    for (
      let irrBind19442 = 0;
      irrBind19442 < 1e3;
      irrBind19442++
    ) {
      irrBind6976 = (irrBind6974 + irrBind6975) / 2;
      let irrBind20278 = irrBind4967(irrBind6976);
      if (
        Math.abs(irrBind20278) < 1e-10 ||
        Math.abs(irrBind6975 - irrBind6974) < 1e-10
      )
        return irrBind6976;
      irrBind20278 * irrBind4967(irrBind6974) < 0
        ? (irrBind6975 = irrBind6976)
        : (irrBind6974 = irrBind6976);
    }
    return irrBind6976;
  })();
}

/** Legacy alias. */
export const F0e = computeIrr;

export function computeXirr(irrIn1978: any, irrIn1979: any, irrIn1980: any) {
  if (
    ((irrIn1978 = irrH.fn850(
      irrH.fn841(irrIn1978),
    )),
    (irrIn1979 = irrH.coerceDates(irrH.fn841(irrIn1979))),
    (irrIn1980 = irrH.fn849(irrIn1980)),
    irrH.fn846(irrIn1978, irrIn1979, irrIn1980))
  )
    return valueError;
  let irrBind8747 = (
      irrIn9267,
      irrIn9268,
      irrIn9269,
    ) => {
      let irrBind19820 = irrIn9269 + 1,
        irrBind19821 = irrIn9267[0];
      for (
        let irrBind22364 = 1;
        irrBind22364 < irrIn9267.length;
        irrBind22364++
      )
        irrBind19821 +=
          irrIn9267[irrBind22364] /
          irrBind19820 **
            (irrH.dayDiff(
              irrIn9268[irrBind22364],
              irrIn9268[0],
            ) /
              365);
      return irrBind19821;
    },
    irrBind8748 = (
      irrIn8201,
      irrIn8202,
      irrIn8203,
    ) => {
      let irrBind18705 = irrIn8203 + 1,
        irrBind18706 = 0;
      for (
        let irrBind21111 = 1;
        irrBind21111 < irrIn8201.length;
        irrBind21111++
      ) {
        let irrBind22217 =
          irrH.dayDiff(
            irrIn8202[irrBind21111],
            irrIn8202[0],
          ) / 365;
        irrBind18706 -=
          (irrBind22217 * irrIn8201[irrBind21111]) /
          irrBind18705 ** +(irrBind22217 + 1);
      }
      return irrBind18706;
    },
    irrBind8749 = false,
    irrBind8750 = false;
  for (
    let irrBind22324 = 0;
    irrBind22324 < irrIn1978.length;
    irrBind22324++
  ) {
    irrIn1978[irrBind22324] > 0 && (irrBind8749 = true);
    irrIn1978[irrBind22324] < 0 && (irrBind8750 = true);
  }
  if (!irrBind8749 || !irrBind8750) return numError;
  irrIn1980 ||= 0.1;
  let irrBind8751 = irrIn1980,
    irrBind8753,
    irrBind8754,
    irrBind8755,
    irrBind8756 = true;
  do {
    irrBind8755 = irrBind8747(
      irrIn1978,
      irrIn1979,
      irrBind8751,
    );
    irrBind8753 =
      irrBind8751 -
      irrBind8755 /
        irrBind8748(
          irrIn1978,
          irrIn1979,
          irrBind8751,
        );
    irrBind8754 = Math.abs(irrBind8753 - irrBind8751);
    irrBind8751 = irrBind8753;
    irrBind8756 =
      irrBind8754 > 1e-10 && Math.abs(irrBind8755) > 1e-10;
  } while (irrBind8756);
  return irrBind8751;
}

/** Legacy alias. */
export const Z0e = computeXirr;
