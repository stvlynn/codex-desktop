// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: coupon day-count + schedule + PRICE/YIELD engines
// (legacy Srt / Ort / Binding1901 / Nrt / jrt / Mrt).
// Stage-3 wave-153.

import { esmInit } from "../../runtime/rolldown-runtime";
import { workbookBinding1888 } from "../formula-date-epoch";
import {
  workbookHelper933 as startOfLocalDay,
  datedifYdUnits,
  workbookHelper936 as endOfMonthDate,
  getSerialMonth,
  getSerialYear,
  A9e,
  Qnt,
  dtt,
  ltt,
  stt,
  Met,
  F9e,
} from "../formula-date-months";
import { A7e } from "../formula-date-add-months";
import { vrt } from "../formula-newton";

export let yrt: number;
export let brt: number;
export let xrt: number;

export const Srt = esmInit(() => {
  yrt = 1e-13;
  brt = 1e-14;
  xrt = 100;
});

export function ensureSrtInit(): void {
  Srt();
}

export let workbookBinding1889: any;
export let workbookBinding1890: any;
export let Crt: any;
export let $6: any;
export let workbookBinding1891: any;
export let workbookBinding1892: any;
export let wrt: any;
export let workbookBinding1893: any;
export let Trt: any;
export let Ert: any;
export let Drt: any;

export const Ort = esmInit(() => {
  workbookBinding1888();
  workbookBinding1889 = (fbcIn16287: any) => Math.min(fbcIn16287, 30);
  workbookBinding1890 = (
    fbcIn14121,
    fbcIn14122,
    fbcIn14123,
    fbcIn14124,
    fbcIn14125,
    fbcIn14126,
  ) =>
    (fbcIn14126 - fbcIn14123) * 360 +
    (fbcIn14125 - fbcIn14122) * 30 +
    fbcIn14124 -
    fbcIn14121;
  Crt = (
    fbcIn14843,
    fbcIn14844,
    fbcIn14845,
    fbcIn14846,
    fbcIn14847,
    fbcIn14848,
  ) =>
    workbookBinding1890(
      workbookBinding1889(fbcIn14843),
      fbcIn14844,
      fbcIn14845,
      workbookBinding1889(fbcIn14846),
      fbcIn14847,
      fbcIn14848,
    );
  $6 = (
    fbcIn13565,
    fbcIn13566,
    fbcIn13567,
    fbcIn13568,
    fbcIn13569,
    fbcIn13570,
  ) =>
    workbookBinding1890(
      workbookBinding1889(fbcIn13565),
      fbcIn13566,
      fbcIn13567,
      fbcIn13565 >= 30 ? workbookBinding1889(fbcIn13568) : fbcIn13568,
      fbcIn13569,
      fbcIn13570,
    );
  workbookBinding1891 = (fbcIn16486: any) =>
    startOfLocalDay(endOfMonthDate(fbcIn16486));
  workbookBinding1892 = (fbcIn16153: any) =>
    dtt(A9e(fbcIn16153), endOfMonthDate(fbcIn16153));
  wrt = (fbcIn16396: any) => getSerialMonth(fbcIn16396) === 1;
  workbookBinding1893 = (fbcIn16288: any) =>
    workbookBinding1892(fbcIn16288) && wrt(fbcIn16288);
  Trt = (fbcIn16154: any) => workbookBinding1891(new Date(fbcIn16154, 1));
  Ert = (fbcIn15818: any, fbcIn15819: any, fbcIn15820: any) =>
    A7e(fbcIn15818, (12 / fbcIn15819) * fbcIn15820);
  Drt = (fbcIn15205: any, fbcIn15206: any) =>
    workbookBinding1893(fbcIn15205)
      ? Trt(getSerialYear(fbcIn15206))
      : Qnt(fbcIn15205, getSerialYear(fbcIn15206));
});

export function ensureOrtInit(): void {
  Ort();
}

export let workbookBinding1894: any;
export let krt: any;
export let workbookBinding1895: any;
export let workbookBinding1896: any;
export let workbookBinding1897: any;
export let workbookBinding1898: any;
export let workbookBinding1899: any;
export let workbookBinding1900: any;

export const workbookBinding1901 = esmInit(() => {
  workbookBinding1888();
  Ort();
  workbookBinding1894 = (fbcIn7933: any) => {
    let fbcBind18415 =
      fbcIn7933 instanceof Date
        ? new Date(fbcIn7933.getTime())
        : new Date(fbcIn7933);
    if (Number.isNaN(fbcBind18415.getTime()))
      throw Error("Invalid date provided to coupon helper");
    return fbcBind18415;
  };
  krt = (fbcIn15837: any, fbcIn15838: any) =>
    ltt(fbcIn15837, fbcIn15838) || dtt(fbcIn15837, fbcIn15838);
  workbookBinding1895 = (fbcIn6664, fbcIn6665, fbcIn6666, fbcIn6667) => {
    let fbcBind16954 = workbookBinding1894(fbcIn6664),
      fbcBind16955 = workbookBinding1894(fbcIn6665);
    switch (fbcIn6667) {
      case "ACTUAL/365":
        return 365 / fbcIn6666;
      case "ACTUAL/ACTUAL":
        return datedifYdUnits(fbcBind16955, fbcBind16954);
      default:
        return 360 / fbcIn6666;
    }
  };
  workbookBinding1896 = (fbcIn2887, fbcIn2888, fbcIn2889) => {
    let fbcBind10742 = workbookBinding1894(fbcIn2887),
      fbcBind10743 = workbookBinding1894(fbcIn2888),
      fbcBind10744 = Met(fbcBind10742),
      fbcBind10745 = getSerialMonth(fbcBind10742),
      fbcBind10746 = getSerialYear(fbcBind10742),
      fbcBind10747 = Met(fbcBind10743),
      fbcBind10748 = getSerialMonth(fbcBind10743),
      fbcBind10749 = getSerialYear(fbcBind10743);
    switch (fbcIn2889) {
      case "30/360":
        return $6(
          fbcBind10744,
          fbcBind10745,
          fbcBind10746,
          fbcBind10747,
          fbcBind10748,
          fbcBind10749,
        );
      case "30E/360":
        return Crt(
          fbcBind10744,
          fbcBind10745,
          fbcBind10746,
          fbcBind10747,
          fbcBind10748,
          fbcBind10749,
        );
      case "ACTUAL/360":
      case "ACTUAL/365":
      case "ACTUAL/ACTUAL":
        return datedifYdUnits(fbcBind10743, fbcBind10742);
      default:
        return (
          workbookBinding1893(fbcBind10742) && (fbcBind10744 = 30),
          workbookBinding1893(fbcBind10742) &&
            workbookBinding1893(fbcBind10743) &&
            (fbcBind10747 = 30),
          $6(
            fbcBind10744,
            fbcBind10745,
            fbcBind10746,
            fbcBind10747,
            fbcBind10748,
            fbcBind10749,
          )
        );
    }
  };
  workbookBinding1897 = (fbcIn6079, fbcIn6080, fbcIn6081) => {
    let fbcBind16130 = workbookBinding1894(fbcIn6079),
      fbcBind16131 = workbookBinding1894(fbcIn6080),
      fbcBind16132 = Math.max(4, fbcIn6081),
      fbcBind16133 = Drt(fbcBind16131, fbcBind16130),
      fbcBind16134 = workbookBinding1892(fbcBind16131),
      fbcBind16135 = [];
    for (
      let fbcBind21487 = 1 - fbcBind16132;
      fbcBind21487 < fbcBind16132;
      fbcBind21487 += 1
    ) {
      let fbcBind22486 = Ert(fbcBind16133, fbcIn6081, fbcBind21487);
      fbcBind16135.push(
        fbcBind16134 ? workbookBinding1891(fbcBind22486) : fbcBind22486,
      );
    }
    return fbcBind16135;
  };
  workbookBinding1898 = (fbcIn9540, fbcIn9541, fbcIn9542) => {
    let fbcBind20063 = workbookBinding1894(fbcIn9540),
      fbcBind20064 = workbookBinding1897(fbcBind20063, fbcIn9541, fbcIn9542),
      fbcBind20065 = fbcBind20064[0];
    for (let fbcBind23038 of fbcBind20064)
      krt(fbcBind23038, fbcBind20063) && (fbcBind20065 = fbcBind23038);
    return fbcBind20065;
  };
  workbookBinding1899 = (fbcIn9620, fbcIn9621, fbcIn9622) => {
    let fbcBind20155 = workbookBinding1894(fbcIn9620),
      fbcBind20156 = workbookBinding1897(fbcBind20155, fbcIn9621, fbcIn9622);
    for (let fbcBind23009 of fbcBind20156)
      if (stt(fbcBind23009, fbcBind20155)) return fbcBind23009;
    return fbcBind20156[fbcBind20156.length - 1];
  };
  workbookBinding1900 = (fbcIn10600, fbcIn10601, fbcIn10602) => {
    let fbcBind21085 = workbookBinding1899(fbcIn10600, fbcIn10601, fbcIn10602),
      fbcBind21086 = F9e(workbookBinding1894(fbcIn10601), fbcBind21085);
    return Math.ceil(1 + (fbcIn10602 / 12) * fbcBind21086);
  };
});

export function ensureBinding1901Init(): void {
  workbookBinding1901();
}

export let workbookBinding1902: any;
export let Art: any;
export let jrt: any;
export let Mrt: any;

export const Nrt = esmInit(() => {
  workbookBinding1888();
  Srt();
  workbookBinding1901();
  workbookBinding1902 = (
    fbcIn7326,
    fbcIn7327,
    fbcIn7328,
    fbcIn7329,
    fbcIn7330,
    fbcIn7331,
    fbcIn7332,
    fbcIn7333,
  ) => {
    let fbcBind17715 =
      fbcIn7328 /
        (1 + fbcIn7327 / fbcIn7329) ** (fbcIn7332 - 1 + fbcIn7330 / fbcIn7331) -
      (100 * fbcIn7326 * fbcIn7333) / (fbcIn7329 * fbcIn7331);
    for (let fbcBind22035 = 1; fbcBind22035 <= fbcIn7332; fbcBind22035 += 1)
      fbcBind17715 +=
        (100 * fbcIn7326) /
        fbcIn7329 /
        (1 + fbcIn7327 / fbcIn7329) **
          (fbcBind22035 - 1 + fbcIn7330 / fbcIn7331);
    return fbcBind17715;
  };
  Art = (
    fbcIn6195,
    fbcIn6196,
    fbcIn6197,
    fbcIn6198,
    fbcIn6199,
    fbcIn6200,
    fbcIn6201,
  ) => {
    let fbcBind16277 =
      (-fbcIn6197 / fbcIn6198) *
      (fbcIn6201 - 1 + fbcIn6199 / fbcIn6200) *
      (1 + fbcIn6196 / fbcIn6198) ** -(fbcIn6201 + fbcIn6199 / fbcIn6200);
    for (let fbcBind20066 = 1; fbcBind20066 <= fbcIn6201; fbcBind20066 += 1)
      fbcBind16277 -=
        ((100 * fbcIn6195) ** 2 / fbcIn6198 ** 2) *
        (fbcBind20066 - 1 + fbcIn6199 / fbcIn6200) *
        (1 + fbcIn6196 / fbcIn6198) ** -(fbcBind20066 + fbcIn6199 / fbcIn6200);
    return fbcBind16277;
  };
  jrt = (
    fbcIn4763,
    fbcIn4764,
    fbcIn4765,
    fbcIn4766,
    fbcIn4767,
    fbcIn4768,
    fbcIn4769,
  ) => {
    let fbcBind14112 = workbookBinding1898(fbcIn4763, fbcIn4764, fbcIn4768),
      fbcBind14113 = workbookBinding1895(
        fbcBind14112,
        workbookBinding1899(fbcIn4763, fbcIn4764, fbcIn4768),
        fbcIn4768,
        fbcIn4769,
      ),
      fbcBind14114 = workbookBinding1896(fbcBind14112, fbcIn4763, fbcIn4769),
      fbcBind14115 = fbcBind14113 - fbcBind14114,
      fbcBind14116 = workbookBinding1900(fbcIn4763, fbcIn4764, fbcIn4768);
    if (fbcBind14116 === 1) {
      let fbcBind20106 = (100 * fbcIn4765) / fbcIn4768 + fbcIn4767,
        fbcBind20107 =
          (fbcIn4766 / fbcIn4768) * (fbcBind14115 / fbcBind14113) + 1,
        fbcBind20108 =
          (100 * fbcIn4765 * fbcBind14114) / (fbcIn4768 * fbcBind14113);
      return fbcBind20106 / fbcBind20107 - fbcBind20108;
    }
    return workbookBinding1902(
      fbcIn4765,
      fbcIn4766,
      fbcIn4767,
      fbcIn4768,
      fbcBind14115,
      fbcBind14113,
      fbcBind14116,
      fbcBind14114,
    );
  };
  Mrt = (
    fbcIn3073,
    fbcIn3074,
    fbcIn3075,
    fbcIn3076,
    fbcIn3077,
    fbcIn3078,
    fbcIn3079,
  ) => {
    let fbcBind11156 = workbookBinding1898(fbcIn3073, fbcIn3074, fbcIn3078),
      fbcBind11157 = workbookBinding1899(fbcIn3073, fbcIn3074, fbcIn3078),
      fbcBind11158 = workbookBinding1896(fbcBind11156, fbcIn3073, fbcIn3079),
      fbcBind11159 = workbookBinding1895(
        fbcBind11156,
        fbcBind11157,
        fbcIn3078,
        fbcIn3079,
      ),
      fbcBind11160 = fbcBind11159 - fbcBind11158,
      fbcBind11161 = workbookBinding1900(fbcIn3073, fbcIn3074, fbcIn3078);
    return fbcBind11161 === 1
      ? ((fbcBind11160 = workbookBinding1896(fbcIn3073, fbcIn3074, fbcIn3079)),
        fbcIn3079.includes("ACTUAL") &&
          (fbcBind11159 = datedifYdUnits(fbcIn3074, fbcBind11156)),
        ((fbcIn3077 / 100 +
          fbcIn3075 / fbcIn3078 -
          fbcIn3076 / 100 -
          (fbcBind11158 / fbcBind11159) * (fbcIn3075 / fbcIn3078)) /
          (fbcIn3076 / 100 +
            (fbcBind11158 / fbcBind11159) * (fbcIn3075 / fbcIn3078))) *
          fbcIn3078 *
          (fbcBind11159 / fbcBind11160))
      : vrt(
          (fbcIn15633: any) =>
            workbookBinding1902(
              fbcIn3075,
              fbcIn15633,
              fbcIn3077,
              fbcIn3078,
              fbcBind11160,
              fbcBind11159,
              fbcBind11161,
              fbcBind11158,
            ) - fbcIn3076,
          (fbcIn15860: any) =>
            Art(
              fbcIn3075,
              fbcIn15860,
              fbcIn3077,
              fbcIn3078,
              fbcBind11160,
              fbcBind11159,
              fbcBind11161,
            ),
          fbcIn3075,
        );
  };
});

export function ensureNrtInit(): void {
  Nrt();
}

export const ensurePriceYieldInit = Nrt;
