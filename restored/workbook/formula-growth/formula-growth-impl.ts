// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel GROWTH (legacy pQe / C4e).
// Stage-3 wave-107.

import { fgrH } from "./boundary-hooks";

void fgrH;

export function computeGrowth(fgrIn2614: any, fgrIn2615: any, fgrIn2616: any, fgrIn2617: any, ) {
  if (
    ((fgrIn2614 = fgrH.fn850(
      fgrH.fn841(fgrIn2614),
    )),
    fgrIn2614 instanceof Error)
  )
    return fgrIn2614;
  let fgrBind10058;
  if (fgrIn2615 === undefined)
    for (
      fgrIn2615 = [], fgrBind10058 = 1;
      fgrBind10058 <= fgrIn2614.length;
      fgrBind10058++
    )
      fgrIn2615.push(fgrBind10058);
  if (
    (fgrIn2616 === undefined && (fgrIn2616 = fgrIn2615),
    (fgrIn2615 = fgrH.fn850(
      fgrH.fn841(fgrIn2615),
    )),
    (fgrIn2616 = fgrH.fn850(
      fgrH.fn841(fgrIn2616),
    )),
    fgrH.fn846(fgrIn2615, fgrIn2616))
  )
    return fgrH.VALUE_ERROR;
  fgrIn2617 === undefined && (fgrIn2617 = true);
  let fgrBind10059 = fgrIn2614.length,
    fgrBind10060 = 0,
    fgrBind10061 = 0,
    fgrBind10062 = 0,
    fgrBind10063 = 0;
  for (
    fgrBind10058 = 0;
    fgrBind10058 < fgrBind10059;
    fgrBind10058++
  ) {
    let fgrBind21716 = fgrIn2615[fgrBind10058],
      fgrBind21717 = Math.log(fgrIn2614[fgrBind10058]);
    fgrBind10060 += fgrBind21716;
    fgrBind10061 += fgrBind21717;
    fgrBind10062 += fgrBind21716 * fgrBind21717;
    fgrBind10063 += fgrBind21716 * fgrBind21716;
  }
  fgrBind10060 /= fgrBind10059;
  fgrBind10061 /= fgrBind10059;
  fgrBind10062 /= fgrBind10059;
  fgrBind10063 /= fgrBind10059;
  let fgrBind10064, fgrBind10065;
  fgrIn2617
    ? ((fgrBind10064 =
        (fgrBind10062 - fgrBind10060 * fgrBind10061) /
        (fgrBind10063 - fgrBind10060 * fgrBind10060)),
      (fgrBind10065 =
        fgrBind10061 - fgrBind10064 * fgrBind10060))
    : ((fgrBind10064 = fgrBind10062 / fgrBind10063),
      (fgrBind10065 = 0));
  let fgrBind10066 = [];
  for (
    fgrBind10058 = 0;
    fgrBind10058 < fgrIn2616.length;
    fgrBind10058++
  )
    fgrBind10066.push(
      Math.exp(
        fgrBind10065 +
          fgrBind10064 * fgrIn2616[fgrBind10058],
      ),
    );
  return fgrBind10066;
}

/** Legacy alias. */
export const pQe = computeGrowth;
