// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel YIELD (legacy k0e / uat).
// Stage-3 wave-107.

import { fsecH } from "./boundary-hooks";

void fsecH;

export function computeYield(fsecIn2857: any, fsecIn2858: any, fsecIn2859: any, fsecIn2860: any, fsecIn2861: any, ) {
  if (
    ((fsecIn2857 = fsecH.fn848(fsecIn2857)),
    (fsecIn2858 = fsecH.fn848(fsecIn2858)),
    (fsecIn2859 = fsecH.fn849(fsecIn2859)),
    (fsecIn2860 = fsecH.fn849(fsecIn2860)),
    (fsecIn2861 = fsecH.fn849(fsecIn2861)),
    (fsecIn2861 ||= 0),
    fsecH.fn846(
      fsecIn2857,
      fsecIn2858,
      fsecIn2859,
      fsecIn2860,
      fsecIn2861,
    ))
  )
    return fsecH.VALUE_ERROR;
  if (fsecIn2859 <= 0 || fsecIn2860 <= 0)
    return fsecH.NUM_ERROR;
  if (fsecIn2857 >= fsecIn2858) return fsecH.VALUE_ERROR;
  let fsecBind10655, fsecBind10656;
  switch (fsecIn2861) {
    case 0:
      fsecBind10655 = 360;
      fsecBind10656 = fsecH.days360(
        fsecIn2857,
        fsecIn2858,
        false,
      );
      break;
    case 1:
      fsecBind10655 = 365;
      fsecBind10656 = fsecH.dayCount(
        fsecIn2857,
        fsecIn2858,
        "D",
      );
      break;
    case 2:
      fsecBind10655 = 360;
      fsecBind10656 = fsecH.dayCount(
        fsecIn2857,
        fsecIn2858,
        "D",
      );
      break;
    case 3:
      fsecBind10655 = 365;
      fsecBind10656 = fsecH.dayCount(
        fsecIn2857,
        fsecIn2858,
        "D",
      );
      break;
    case 4:
      fsecBind10655 = 360;
      fsecBind10656 = fsecH.days360(
        fsecIn2857,
        fsecIn2858,
        true,
      );
      break;
    default:
      return fsecH.NUM_ERROR;
  }
  return (
    (((fsecIn2860 - fsecIn2859) / fsecIn2860) *
      fsecBind10655) /
    fsecBind10656
  );
}

/** Legacy alias. */
export const k0e = computeYield;
