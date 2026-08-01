// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel PRICEDISC (legacy H0e / dat).
// Stage-3 wave-107.

import { fsecH } from "./boundary-hooks";

void fsecH;

export function computePriceDisc(
  fsecIn2864: any,
  fsecIn2865: any,
  fsecIn2866: any,
  fsecIn2867: any,
  fsecIn2868: any,
) {
  if (
    ((fsecIn2864 = fsecH.fn848(fsecIn2864)),
    (fsecIn2865 = fsecH.fn848(fsecIn2865)),
    (fsecIn2866 = fsecH.fn849(fsecIn2866)),
    (fsecIn2867 = fsecH.fn849(fsecIn2867)),
    (fsecIn2868 = fsecH.fn849(fsecIn2868)),
    (fsecIn2868 ||= 0),
    fsecH.fn846(fsecIn2864, fsecIn2865, fsecIn2866, fsecIn2867, fsecIn2868))
  )
    return fsecH.VALUE_ERROR;
  if (fsecIn2866 <= 0 || fsecIn2867 <= 0) return fsecH.NUM_ERROR;
  if (fsecIn2864 >= fsecIn2865) return fsecH.VALUE_ERROR;
  let fsecBind10674, fsecBind10675;
  switch (fsecIn2868) {
    case 0:
      fsecBind10674 = 360;
      fsecBind10675 = fsecH.days360(fsecIn2864, fsecIn2865, false);
      break;
    case 1:
      fsecBind10674 = 365;
      fsecBind10675 = fsecH.dayCount(fsecIn2864, fsecIn2865, "D");
      break;
    case 2:
      fsecBind10674 = 360;
      fsecBind10675 = fsecH.dayCount(fsecIn2864, fsecIn2865, "D");
      break;
    case 3:
      fsecBind10674 = 365;
      fsecBind10675 = fsecH.dayCount(fsecIn2864, fsecIn2865, "D");
      break;
    case 4:
      fsecBind10674 = 360;
      fsecBind10675 = fsecH.days360(fsecIn2864, fsecIn2865, true);
      break;
    default:
      return fsecH.NUM_ERROR;
  }
  return fsecIn2867 - (fsecIn2866 * fsecIn2867 * fsecBind10675) / fsecBind10674;
}

/** Legacy alias. */
export const H0e = computePriceDisc;
