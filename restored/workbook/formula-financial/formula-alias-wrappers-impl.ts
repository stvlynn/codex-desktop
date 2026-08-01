// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: financial formula aliases + stubs (legacy Uit…Fat + Hit…Hat).
// Stage-3 wave-135/136.

import {
  U0e,
  futureValue,
  z0e,
  V0e,
  npvArgs,
  L0e,
  K0e,
  q0e,
  I0e,
  Q0e,
  J0e,
  Y0e,
  X0e,
  A0e,
  j0e,
  R0e,
  M0e,
  w0e,
  N0e,
  B0e,
  G0e,
} from "./formula-annuity-impl";
import { E0e, D0e, T0e, O0e, P0e } from "./formula-financial-impl";
import { W0e, F0e, Z0e } from "../formula-irr";

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

// Stage-3 wave-136: Hit…Hat aliases/stubs.

export function Hit(
  ffaIn13979: any,
  ffaIn13980: any,
  ffaIn13981: any,
  ...ffaIn13982: any[]
) {
  return npvArgs(ffaIn13979, ffaIn13980, ffaIn13981, ...ffaIn13982);
}
export function Jit(ffaIn15042: any, ffaIn15043: any, ffaIn15044: any) {
  return L0e(ffaIn15042, ffaIn15043, ffaIn15044);
}
export function Yit(ffaIn15428: any, ffaIn15429: any) {
  return F0e(ffaIn15428, ffaIn15429);
}
export function Xit(ffaIn15045: any, ffaIn15046: any, ffaIn15047: any) {
  return K0e(ffaIn15045, ffaIn15046, ffaIn15047);
}
export function Zit(
  ffaIn14457: any,
  ffaIn14458: any,
  ffaIn14459: any,
  ffaIn14460: any,
) {
  return q0e(ffaIn14457, ffaIn14458, ffaIn14459, ffaIn14460);
}
export function tat(
  ffaIn7207: any,
  ffaIn7208: any,
  ffaIn7209: any,
  ffaIn7210: any,
  ffaIn7211: any,
  ffaIn7212: any,
  ffaIn7213: any,
) {
  throw Error(
    `VDB is not implemented. cost=${String(ffaIn7207)}, salvage=${String(ffaIn7208)}, life=${String(ffaIn7209)}, startPeriod=${String(ffaIn7210)}, endPeriod=${String(ffaIn7211)}, factor=${String(ffaIn7212)}, noSwitch=${String(ffaIn7213)}`,
  );
}
export function rat(
  ffaIn14461: any,
  ffaIn14462: any,
  ffaIn14463: any,
  ffaIn14464: any,
) {
  return I0e(ffaIn14461, ffaIn14462, ffaIn14463, ffaIn14464);
}
export function iat(ffaIn15048: any, ffaIn15049: any, ffaIn15050: any) {
  return Z0e(ffaIn15048, ffaIn15049, ffaIn15050);
}
export function aat(ffaIn15051: any, ffaIn15052: any, ffaIn15053: any) {
  return Q0e(ffaIn15051, ffaIn15052, ffaIn15053);
}
export function cat(
  ffaIn8158: any,
  ffaIn8159: any,
  ffaIn8160: any,
  ffaIn8161: any,
  ffaIn8162: any,
) {
  throw Error(
    `INTRATE is not implemented. settlement=${String(ffaIn8158)}, maturity=${String(ffaIn8159)}, investment=${String(ffaIn8160)}, redemption=${String(ffaIn8161)}, basis=${String(ffaIn8162)}`,
  );
}
export function pat(ffaIn15054: any, ffaIn15055: any, ffaIn15056: any) {
  return J0e(ffaIn15054, ffaIn15055, ffaIn15056);
}
export function mat(ffaIn15057: any, ffaIn15058: any, ffaIn15059: any) {
  return Y0e(ffaIn15057, ffaIn15058, ffaIn15059);
}
export function hat(ffaIn15060: any, ffaIn15061: any, ffaIn15062: any) {
  return X0e(ffaIn15060, ffaIn15061, ffaIn15062);
}
export function vat(ffaIn15430: any, ffaIn15431: any) {
  return A0e(ffaIn15430, ffaIn15431);
}
export function yat(ffaIn15432: any, ffaIn15433: any) {
  return j0e(ffaIn15432, ffaIn15433);
}
export function bat(ffaIn15434: any, ffaIn15435: any) {
  return R0e(ffaIn15434, ffaIn15435);
}
export function xat(ffaIn15436: any, ffaIn15437: any) {
  return M0e(ffaIn15436, ffaIn15437);
}
export function Tat(
  ffaIn14465: any,
  ffaIn14466: any,
  ffaIn14467: any,
  ffaIn14468: any,
) {
  return w0e(ffaIn14465, ffaIn14466, ffaIn14467, ffaIn14468);
}
export function Aat(
  ffaIn7681: any,
  ffaIn7682: any,
  ffaIn7683: any,
  ffaIn7684: any,
  ffaIn7685: any,
  ffaIn7686: any,
) {
  throw Error(
    `DURATION is not implemented. settlement=${String(ffaIn7681)}, maturity=${String(ffaIn7682)}, coupon=${String(ffaIn7683)}, yld=${String(ffaIn7684)}, frequency=${String(ffaIn7685)}, basis=${String(ffaIn7686)}`,
  );
}
export function jat(
  ffaIn7653: any,
  ffaIn7654: any,
  ffaIn7655: any,
  ffaIn7656: any,
  ffaIn7657: any,
  ffaIn7658: any,
) {
  throw Error(
    `MDURATION is not implemented. settlement=${String(ffaIn7653)}, maturity=${String(ffaIn7654)}, coupon=${String(ffaIn7655)}, yld=${String(ffaIn7656)}, frequency=${String(ffaIn7657)}, basis=${String(ffaIn7658)}`,
  );
}
export function Mat(
  ffaIn6454: any,
  ffaIn6455: any,
  ffaIn6456: any,
  ffaIn6457: any,
  ffaIn6458: any,
  ffaIn6459: any,
  ffaIn6460: any,
  ffaIn6461: any,
) {
  throw Error(
    `ODDLPRICE is not implemented. settlement=${String(ffaIn6454)}, maturity=${String(ffaIn6455)}, lastInterest=${String(ffaIn6456)}, rate=${String(ffaIn6457)}, yld=${String(ffaIn6458)}, redemption=${String(ffaIn6459)}, frequency=${String(ffaIn6460)}, basis=${String(ffaIn6461)}`,
  );
}
export function Nat(
  ffaIn6478: any,
  ffaIn6479: any,
  ffaIn6480: any,
  ffaIn6481: any,
  ffaIn6482: any,
  ffaIn6483: any,
  ffaIn6484: any,
  ffaIn6485: any,
) {
  throw Error(
    `ODDLYIELD is not implemented. settlement=${String(ffaIn6478)}, maturity=${String(ffaIn6479)}, lastInterest=${String(ffaIn6480)}, rate=${String(ffaIn6481)}, pr=${String(ffaIn6482)}, redemption=${String(ffaIn6483)}, frequency=${String(ffaIn6484)}, basis=${String(ffaIn6485)}`,
  );
}
export function Iat(
  ffaIn7056: any,
  ffaIn7057: any,
  ffaIn7058: any,
  ffaIn7059: any,
  ffaIn7060: any,
  ffaIn7061: any,
  ffaIn7062: any,
) {
  throw Error(
    `AMORLINC is not implemented. cost=${String(ffaIn7056)}, datePurchased=${String(ffaIn7057)}, firstPeriod=${String(ffaIn7058)}, salvage=${String(ffaIn7059)}, period=${String(ffaIn7060)}, rate=${String(ffaIn7061)}, basis=${String(ffaIn7062)}`,
  );
}
export function Rat(
  ffaIn8613: any,
  ffaIn8614: any,
  ffaIn8615: any,
  ffaIn8616: any,
  ffaIn8617: any,
) {
  throw Error(
    `ACCRINTM is not implemented. issue=${String(ffaIn8613)}, settlement=${String(ffaIn8614)}, rate=${String(ffaIn8615)}, par=${String(ffaIn8616)}, basis=${String(ffaIn8617)}`,
  );
}
export function zat(ffaIn15438: any, ffaIn15439: any) {
  return N0e(ffaIn15438, ffaIn15439);
}
export function Bat(ffaIn15063: any, ffaIn15064: any, ffaIn15065: any) {
  return B0e(ffaIn15063, ffaIn15064, ffaIn15065);
}
export function Vat(ffaIn15066: any, ffaIn15067: any, ffaIn15068: any) {
  return G0e(ffaIn15066, ffaIn15067, ffaIn15068);
}
export function Hat(
  ffaIn6769: any,
  ffaIn6770: any,
  ffaIn6771: any,
  ffaIn6772: any,
  ffaIn6773: any,
  ffaIn6774: any,
  ...ffaIn6775: any[]
) {
  throw Error(
    `STOCKHISTORY is not implemented. stock=${String(ffaIn6769)}, startDate=${String(ffaIn6770)}, endDate=${String(ffaIn6771)}, interval=${String(ffaIn6772)}, headers=${String(ffaIn6773)}, properties1=${String(ffaIn6774)}, rest.length=${ffaIn6775.length}`,
  );
}
