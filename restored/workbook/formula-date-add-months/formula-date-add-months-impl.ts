// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: clamp-aware add months (legacy A7e).
// Stage-3 wave-128.

import { fdamH } from "./boundary-hooks";

export function addMonthsClamped(
  fdamIn5896: any,
  fdamIn5897: any,
  fdamIn5898: any,
) {
  let fdamBind15881 = fdamH.fn931(fdamIn5896, fdamIn5898?.in);
  if (isNaN(fdamIn5897)) return fdamH.fn930(fdamIn5898?.in || fdamIn5896, NaN);
  if (!fdamIn5897) return fdamBind15881;
  let fdamBind15882 = fdamBind15881.getDate(),
    fdamBind15883 = fdamH.fn930(
      fdamIn5898?.in || fdamIn5896,
      fdamBind15881.getTime(),
    );
  return (
    fdamBind15883.setMonth(fdamBind15881.getMonth() + fdamIn5897 + 1, 0),
    fdamBind15882 >= fdamBind15883.getDate()
      ? fdamBind15883
      : (fdamBind15881.setFullYear(
          fdamBind15883.getFullYear(),
          fdamBind15883.getMonth(),
          fdamBind15882,
        ),
        fdamBind15881)
  );
}

export const A7e = addMonthsClamped;
