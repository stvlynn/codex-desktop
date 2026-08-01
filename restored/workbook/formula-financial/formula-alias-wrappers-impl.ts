// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: financial formula aliases + ODDF* stubs (legacy Uit…Fat).
// Stage-3 wave-135.

import { U0e, futureValue, z0e, V0e } from "./formula-annuity-impl";
import { E0e, D0e, T0e, O0e, P0e } from "./formula-financial-impl";
import { W0e } from "../formula-irr";

export function Uit(
  ffaIn13867: any,
  ffaIn13868: any,
  ffaIn13869: any,
  ffaIn13870: any,
  ffaIn13871: any,
) {
  return U0e(ffaIn13867, ffaIn13868, ffaIn13869, ffaIn13870, ffaIn13871);
}
export function Wit(
  ffaIn13983: any,
  ffaIn13984: any,
  ffaIn13985: any,
  ffaIn13986: any,
  ffaIn13987: any,
) {
  return futureValue(
    ffaIn13983,
    ffaIn13984,
    ffaIn13985,
    ffaIn13986,
    ffaIn13987,
  );
}
export function Git(
  ffaIn13872: any,
  ffaIn13873: any,
  ffaIn13874: any,
  ffaIn13875: any,
  ffaIn13876: any,
) {
  return z0e(ffaIn13872, ffaIn13873, ffaIn13874, ffaIn13875, ffaIn13876);
}
export function qit(
  ffaIn13336: any,
  ffaIn13337: any,
  ffaIn13338: any,
  ffaIn13339: any,
  ffaIn13340: any,
  ffaIn13341: any,
) {
  return W0e(
    ffaIn13336,
    ffaIn13337,
    ffaIn13338,
    ffaIn13339,
    ffaIn13340,
    ffaIn13341,
  );
}
export function Qit(
  ffaIn13877: any,
  ffaIn13878: any,
  ffaIn13879: any,
  ffaIn13880: any,
  ffaIn13881: any,
) {
  return O0e(ffaIn13877, ffaIn13878, ffaIn13879, ffaIn13880, ffaIn13881);
}
export function $it(
  ffaIn13342: any,
  ffaIn13343: any,
  ffaIn13344: any,
  ffaIn13345: any,
  ffaIn13346: any,
  ffaIn13347: any,
) {
  return P0e(
    ffaIn13342,
    ffaIn13343,
    ffaIn13344,
    ffaIn13345,
    ffaIn13346,
    ffaIn13347,
  );
}
export function eat(
  ffaIn13348: any,
  ffaIn13349: any,
  ffaIn13350: any,
  ffaIn13351: any,
  ffaIn13352: any,
  ffaIn13353: any,
) {
  return V0e(
    ffaIn13348,
    ffaIn13349,
    ffaIn13350,
    ffaIn13351,
    ffaIn13352,
    ffaIn13353,
  );
}
export function nat(
  ffaIn13882: any,
  ffaIn13883: any,
  ffaIn13884: any,
  ffaIn13885: any,
  ffaIn13886: any,
) {
  return D0e(ffaIn13882, ffaIn13883, ffaIn13884, ffaIn13885, ffaIn13886);
}
export function Sat(
  ffaIn13354: any,
  ffaIn13355: any,
  ffaIn13356: any,
  ffaIn13357: any,
  ffaIn13358: any,
  ffaIn13359: any,
) {
  return E0e(
    ffaIn13354,
    ffaIn13355,
    ffaIn13356,
    ffaIn13357,
    ffaIn13358,
    ffaIn13359,
  );
}
export function Cat(
  ffaIn13360: any,
  ffaIn13361: any,
  ffaIn13362: any,
  ffaIn13363: any,
  ffaIn13364: any,
  ffaIn13365: any,
) {
  return T0e(
    ffaIn13360,
    ffaIn13361,
    ffaIn13362,
    ffaIn13363,
    ffaIn13364,
    ffaIn13365,
  );
}
export function Pat(
  ffaIn6055: any,
  ffaIn6056: any,
  ffaIn6057: any,
  ffaIn6058: any,
  ffaIn6059: any,
  ffaIn6060: any,
  ffaIn6061: any,
  ffaIn6062: any,
  ffaIn6063: any,
) {
  throw Error(
    `ODDFPRICE is not implemented. settlement=${String(ffaIn6055)}, maturity=${String(ffaIn6056)}, issue=${String(ffaIn6057)}, firstCoupon=${String(ffaIn6058)}, rate=${String(ffaIn6059)}, yld=${String(ffaIn6060)}, redemption=${String(ffaIn6061)}, frequency=${String(ffaIn6062)}, basis=${String(ffaIn6063)}`,
  );
}
export function Fat(
  ffaIn6084: any,
  ffaIn6085: any,
  ffaIn6086: any,
  ffaIn6087: any,
  ffaIn6088: any,
  ffaIn6089: any,
  ffaIn6090: any,
  ffaIn6091: any,
  ffaIn6092: any,
) {
  throw Error(
    `ODDFYIELD is not implemented. settlement=${String(ffaIn6084)}, maturity=${String(ffaIn6085)}, issue=${String(ffaIn6086)}, firstCoupon=${String(ffaIn6087)}, rate=${String(ffaIn6088)}, pr=${String(ffaIn6089)}, redemption=${String(ffaIn6090)}, frequency=${String(ffaIn6091)}, basis=${String(ffaIn6092)}`,
  );
}
