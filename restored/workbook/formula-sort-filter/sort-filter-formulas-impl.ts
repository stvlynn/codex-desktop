// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: SORT/FILTER/TAKE/DROP spreadsheet formulas
// (legacy wct..Ict including Tct/Pct). Stage-3 wave-118.

import {
  createArrayValue,
  isArrayValue,
  getRangeMetadata,
  copyRangeMetadata,
  isErrorValue,
} from "../formula-array";
import { fsfH } from "./boundary-hooks";
import {
  ERR_VALUE,
  ERR_NA,
  ERR_CALC,
  FLOAT_EPS,
  coerceMatrixRows,
  coerceNumberVector,
  fallbackIfEmpty,
  compareSortKeys,
  matrixColumnCount,
  buildSortIndex,
  ascendingIndices,
  coerceLookupScalar,
  unwrapCellOrError,
  Rst,
  zst,
  Bst,
  Vst,
  Hst,
  Ust,
  Wst,
  Gst,
  Kst,
  qst,
  Jst,
  Yst,
  Xst,
  Zst,
  Qst,
  $st,
  ect,
  tct,
  nct,
  rct,
  ict,
  act,
  oct,
  sct,
  cct,
  lct,
  uct,
  dct,
  fct,
  pct,
  mct,
  hct,
  gct,
  _ct,
  vct,
  yct,
  bct,
  xct,
} from "./sort-filter-helpers-impl";

export function wct(
  fsfIn3684: any,
  fsfIn3685: any,
  fsfIn3686: any,
  fsfIn3687: any,
  fsfIn3688: any,
  fsfIn3689: any,
) {
  let fsfBind12317 = Wst(fsfIn3685);
  if (isErrorValue(fsfBind12317)) return fsfBind12317;
  if (fsfBind12317.values.length === 0) return ERR_VALUE;
  let fsfBind12318 = coerceMatrixRows(fsfIn3686);
  if (fsfBind12318.length === 0) return ERR_VALUE;
  let fsfBind12319 = unwrapCellOrError(
    coerceLookupScalar(fsfH.firstCellOrValue(fsfIn3684)),
  );
  if (isErrorValue(fsfBind12319)) return fsfBind12319;
  let fsfBind12320 = cct(fsfIn3688);
  if (isErrorValue(fsfBind12320)) return fsfBind12320;
  let fsfBind12321 = lct(fsfIn3689);
  if (isErrorValue(fsfBind12321)) return fsfBind12321;
  let fsfBind12322 =
    fsfBind12321 === -1
      ? uct(fsfBind12317.values.length)
      : ascendingIndices(fsfBind12317.values.length);
  for (let fsfBind20870 of fsfBind12322) {
    let fsfBind21420 = dct(
      fsfBind12319,
      unwrapCellOrError(fsfBind12317.values[fsfBind20870]),
      fsfBind12320,
    );
    if (isErrorValue(fsfBind21420)) return fsfBind21420;
    if (fsfBind21420)
      return _ct(fsfBind12318, fsfBind12317.orientation, fsfBind20870);
  }
  return vct(fsfIn3687);
}
export function Tct(
  fsfIn3622: any,
  fsfIn3623: any,
  fsfIn3624: any,
  ...fsfIn3625: any[]
) {
  let fsfBind12160 = coerceMatrixRows(fsfIn3622);
  if (fsfBind12160.length === 0) return createArrayValue([]);
  if (fsfIn3623 === undefined) return ERR_VALUE;
  let fsfBind12161 = matrixColumnCount(fsfBind12160),
    fsfBind12162 = Gst(
      fsfBind12160.length,
      fsfBind12161,
      fsfIn3623,
      fsfIn3624,
      fsfIn3625,
    );
  if (isErrorValue(fsfBind12162)) return fsfBind12162;
  if (fsfBind12162.orientation === "column") {
    let fsfBind20070 = ascendingIndices(fsfBind12160.length);
    return (
      fsfBind20070.sort((fsfIn15770, fsfIn15771) =>
        sct(fsfIn15770, fsfIn15771, fsfBind12162.instructions),
      ),
      createArrayValue(
        fsfBind20070.map((item) =>
          (fsfBind12160[item] ?? []).map((_item) => unwrapCellOrError(_item)),
        ),
      )
    );
  }
  let fsfBind12163 = ascendingIndices(fsfBind12161);
  return (
    fsfBind12163.sort((fsfIn15772, fsfIn15773) =>
      sct(fsfIn15772, fsfIn15773, fsfBind12162.instructions),
    ),
    createArrayValue(
      fsfBind12160.map((item) =>
        fsfBind12163.map((_item) => unwrapCellOrError(item[_item] ?? null)),
      ),
    )
  );
}
export function Ect(fsfIn3762: any, fsfIn3763: any, fsfIn3764: any) {
  let fsfBind12487 = coerceNumberVector(fsfIn3762);
  if (fsfBind12487 === null) return ERR_VALUE;
  let fsfBind12488 = ect(fsfIn3763);
  if (isErrorValue(fsfBind12488)) return fsfBind12488;
  let fsfBind12489 =
    fsfIn3764 === undefined
      ? ERR_NA
      : unwrapCellOrError(coerceLookupScalar(fsfIn3764));
  if (fsfIn3764 !== undefined && isErrorValue(fsfBind12489))
    return fsfBind12489;
  if (fsfBind12488 === 0) return ERR_VALUE;
  if (fsfBind12487.length === 0) return createArrayValue([]);
  let fsfBind12490 = Math.ceil(fsfBind12487.length / fsfBind12488),
    fsfBind12491 = [],
    fsfBind12492 = 0;
  for (let fsfBind19828 = 0; fsfBind19828 < fsfBind12490; fsfBind19828 += 1) {
    let fsfBind20750 = [];
    for (let fsfBind22065 = 0; fsfBind22065 < fsfBind12488; fsfBind22065 += 1)
      fsfBind12492 < fsfBind12487.length
        ? (fsfBind20750.push(unwrapCellOrError(fsfBind12487[fsfBind12492])),
          (fsfBind12492 += 1))
        : fsfBind20750.push(fsfBind12489);
    fsfBind12491.push(fsfBind20750);
  }
  return createArrayValue(fsfBind12491);
}
export function Dct(fsfIn5157: any, fsfIn5158: any, ...fsfIn5159: any[]) {
  let fsfBind14656 = [fsfIn5157, fsfIn5158, ...fsfIn5159].filter(
    (item) => item !== undefined,
  );
  if (fsfBind14656.length === 0) return ERR_VALUE;
  let fsfBind14657 = fsfBind14656.map((item) => coerceMatrixRows(item)),
    fsfBind14658 = fsfBind14657.reduce(
      (accumulator, current) =>
        Math.max(accumulator, matrixColumnCount(current)),
      0,
    ),
    fsfBind14659 = [];
  for (let fsfBind20493 of fsfBind14657)
    for (let fsfBind21154 of fsfBind20493) {
      let fsfBind21660 = [];
      for (let fsfBind22815 = 0; fsfBind22815 < fsfBind14658; fsfBind22815 += 1)
        fsfBind21660.push(
          unwrapCellOrError(fsfBind21154[fsfBind22815] ?? null),
        );
      fsfBind14659.push(fsfBind21660);
    }
  return createArrayValue(fsfBind14659);
}
export function Oct(fsfIn3729: any, fsfIn3730: any, ...fsfIn3731: any[]) {
  let fsfBind12410 = [fsfIn3729, fsfIn3730, ...fsfIn3731].filter(
    (item) => item !== undefined,
  );
  if (fsfBind12410.length === 0) return ERR_VALUE;
  let fsfBind12411 = fsfBind12410.map((item) => coerceMatrixRows(item)),
    fsfBind12412 = fsfBind12411.reduce(
      (accumulator, current) => Math.max(accumulator, current.length),
      0,
    );
  if (fsfBind12412 === 0) return createArrayValue([]);
  let fsfBind12413 = Array.from(
    {
      length: fsfBind12412,
    },
    () => [],
  );
  for (let fsfBind18611 of fsfBind12411) {
    let fsfBind19119 = matrixColumnCount(fsfBind18611);
    for (let fsfBind20009 = 0; fsfBind20009 < fsfBind12412; fsfBind20009 += 1) {
      let fsfBind20937 =
          fsfBind20009 < fsfBind18611.length ? fsfBind18611[fsfBind20009] : [],
        fsfBind20938 = fsfBind12413[fsfBind20009];
      for (let fsfBind22816 = 0; fsfBind22816 < fsfBind19119; fsfBind22816 += 1)
        fsfBind20938.push(
          unwrapCellOrError(fsfBind20937[fsfBind22816] ?? null),
        );
    }
  }
  return createArrayValue(fsfBind12413);
}
export function kct(
  fsfIn5599: any,
  fsfIn5600: any,
  fsfIn5601: any,
  ...fsfIn5602: any[]
) {
  let fsfBind15427 = coerceMatrixRows(fsfIn5599);
  if (fsfBind15427.length === 0) return ERR_VALUE;
  let fsfBind15428 = [fsfIn5600, fsfIn5601, ...fsfIn5602].filter(
    (item) => item !== undefined,
  );
  if (fsfBind15428.length === 0) return ERR_VALUE;
  let fsfBind15429 = [];
  for (let fsfBind20789 of fsfBind15428) {
    let fsfBind21340 = Qst(fsfBind20789, fsfBind15427.length);
    if (isErrorValue(fsfBind21340)) return fsfBind21340;
    let fsfBind21341 = fsfBind15427[fsfBind21340] ?? [];
    fsfBind15429.push(fsfBind21341.map((item) => unwrapCellOrError(item)));
  }
  return createArrayValue(fsfBind15429);
}
export function Act(
  fsfIn5160: any,
  fsfIn5161: any,
  fsfIn5162: any,
  ...fsfIn5163: any[]
) {
  let fsfBind14660 = coerceMatrixRows(fsfIn5160);
  if (fsfBind14660.length === 0) return ERR_VALUE;
  let fsfBind14661 = matrixColumnCount(fsfBind14660);
  if (fsfBind14661 === 0) return ERR_VALUE;
  let fsfBind14662 = [fsfIn5161, fsfIn5162, ...fsfIn5163].filter(
    (item) => item !== undefined,
  );
  if (fsfBind14662.length === 0) return ERR_VALUE;
  let fsfBind14663 = [];
  for (let fsfBind22329 of fsfBind14662) {
    let fsfBind22604 = Qst(fsfBind22329, fsfBind14661);
    if (isErrorValue(fsfBind22604)) return fsfBind22604;
    fsfBind14663.push(fsfBind22604);
  }
  return createArrayValue(
    fsfBind14660.map((item) =>
      fsfBind14663.map((_item) => unwrapCellOrError(item[_item] ?? null)),
    ),
  );
}
export function jct(fsfIn3741: any, fsfIn3742: any, fsfIn3743: any) {
  let fsfBind12443 = coerceMatrixRows(fsfIn3741);
  if (fsfBind12443.length === 0) return createArrayValue([]);
  let fsfBind12444 = tct(fsfIn3742);
  if (isErrorValue(fsfBind12444)) return fsfBind12444;
  let fsfBind12445 = buildSortIndex(fsfIn3743);
  if (isErrorValue(fsfBind12445)) return fsfBind12445;
  let fsfBind12446 = [],
    fsfBind12447 = fsfBind12443.length,
    fsfBind12448 = matrixColumnCount(fsfBind12443);
  if (fsfBind12445)
    for (let fsfBind20722 = 0; fsfBind20722 < fsfBind12448; fsfBind20722 += 1)
      for (
        let fsfBind21911 = 0;
        fsfBind21911 < fsfBind12447;
        fsfBind21911 += 1
      ) {
        let fsfBind22605 = unwrapCellOrError(
          fsfBind12443[fsfBind21911]?.[fsfBind20722],
        );
        fsfBind12444(fsfBind22605) || fsfBind12446.push(fsfBind22605);
      }
  else
    for (let fsfBind21879 of fsfBind12443)
      for (let fsfBind22488 of fsfBind21879) {
        let fsfBind22763 = unwrapCellOrError(fsfBind22488);
        fsfBind12444(fsfBind22763) || fsfBind12446.push(fsfBind22763);
      }
  return createArrayValue(fsfBind12446.map((item) => [item]));
}
export function Mct(fsfIn3845: any, fsfIn3846: any, fsfIn3847: any) {
  let fsfBind12661 = coerceMatrixRows(fsfIn3845);
  if (fsfBind12661.length === 0) return createArrayValue([[]]);
  let fsfBind12662 = tct(fsfIn3846);
  if (isErrorValue(fsfBind12662)) return fsfBind12662;
  let fsfBind12663 = buildSortIndex(fsfIn3847);
  if (isErrorValue(fsfBind12663)) return fsfBind12663;
  let fsfBind12664 = fsfBind12661.length,
    fsfBind12665 = matrixColumnCount(fsfBind12661),
    fsfBind12666 = [];
  if (fsfBind12663)
    for (let fsfBind20723 = 0; fsfBind20723 < fsfBind12665; fsfBind20723 += 1)
      for (
        let fsfBind21912 = 0;
        fsfBind21912 < fsfBind12664;
        fsfBind21912 += 1
      ) {
        let fsfBind22606 = unwrapCellOrError(
          fsfBind12661[fsfBind21912]?.[fsfBind20723],
        );
        fsfBind12662(fsfBind22606) || fsfBind12666.push(fsfBind22606);
      }
  else
    for (let fsfBind21880 of fsfBind12661)
      for (let fsfBind22489 of fsfBind21880) {
        let fsfBind22764 = unwrapCellOrError(fsfBind22489);
        fsfBind12662(fsfBind22764) || fsfBind12666.push(fsfBind22764);
      }
  return createArrayValue([fsfBind12666]);
}
export function Nct(fsfIn3641: any, fsfIn3642: any, fsfIn3643: any) {
  let fsfBind12206 = coerceNumberVector(fsfIn3641);
  if (fsfBind12206 === null) return ERR_VALUE;
  let fsfBind12207 = ect(fsfIn3642);
  if (isErrorValue(fsfBind12207)) return fsfBind12207;
  if (fsfBind12207 === 0) return ERR_VALUE;
  let fsfBind12208 =
    fsfIn3643 === undefined
      ? ERR_NA
      : unwrapCellOrError(coerceLookupScalar(fsfIn3643));
  if (fsfIn3643 !== undefined && isErrorValue(fsfBind12208))
    return fsfBind12208;
  if (fsfBind12206.length === 0)
    return createArrayValue(
      Array.from(
        {
          length: fsfBind12207,
        },
        () => [],
      ),
    );
  let fsfBind12209 = Math.ceil(fsfBind12206.length / fsfBind12207),
    fsfBind12210 = Array.from(
      {
        length: fsfBind12207,
      },
      () => Array(fsfBind12209).fill(fsfBind12208),
    );
  for (
    let fsfBind21367 = 0;
    fsfBind21367 < fsfBind12206.length;
    fsfBind21367 += 1
  ) {
    let fsfBind22470 = fsfBind21367 % fsfBind12207,
      fsfBind22471 = Math.floor(fsfBind21367 / fsfBind12207);
    fsfBind12210[fsfBind22470][fsfBind22471] = unwrapCellOrError(
      fsfBind12206[fsfBind21367],
    );
  }
  return createArrayValue(fsfBind12210);
}
export function Pct(
  fsfIn3416: any,
  fsfIn3417: any,
  fsfIn3418: any,
  fsfIn3419: any,
) {
  let fsfBind11813 = coerceMatrixRows(fsfIn3416),
    fsfBind11814 = fsfBind11813.length,
    fsfBind11815 = matrixColumnCount(fsfBind11813),
    fsfBind11816 = $st(fsfIn3417, fsfBind11814);
  if (isErrorValue(fsfBind11816)) return fsfBind11816;
  let fsfBind11817 = $st(fsfIn3418, fsfBind11815);
  if (isErrorValue(fsfBind11817)) return fsfBind11817;
  if (fsfBind11816 === fsfBind11814 && fsfBind11817 === fsfBind11815)
    return createArrayValue(
      fsfBind11813.map((item) => item.map((_item) => unwrapCellOrError(_item))),
    );
  let fsfBind11818 =
    fsfIn3419 === undefined
      ? ERR_NA
      : unwrapCellOrError(coerceLookupScalar(fsfIn3419));
  if (fsfIn3419 !== undefined && isErrorValue(fsfBind11818))
    return fsfBind11818;
  let fsfBind11819 = [];
  for (let fsfBind18906 = 0; fsfBind18906 < fsfBind11816; fsfBind18906 += 1) {
    let fsfBind19856 =
        fsfBind18906 < fsfBind11814 ? (fsfBind11813[fsfBind18906] ?? []) : [],
      fsfBind19857 = [];
    for (let fsfBind22275 = 0; fsfBind22275 < fsfBind11817; fsfBind22275 += 1)
      fsfBind19856 && fsfBind22275 < fsfBind19856.length
        ? fsfBind19857.push(unwrapCellOrError(fsfBind19856[fsfBind22275]))
        : fsfBind19857.push(fsfBind11818);
    fsfBind11819.push(fsfBind19857);
  }
  return createArrayValue(fsfBind11819);
}
export function Fct(fsfIn3556: any, fsfIn3557: any, fsfIn3558: any) {
  let fsfBind12042 = coerceMatrixRows(fsfIn3556),
    fsfBind12043 = fsfBind12042.length;
  if (fsfBind12043 === 0) return ERR_VALUE;
  let fsfBind12044 = Yst(fsfIn3557, fsfBind12043);
  if (isErrorValue(fsfBind12044)) return fsfBind12044;
  let fsfBind12045 = Xst(fsfBind12044, fsfBind12043);
  if (isErrorValue(fsfBind12045)) return fsfBind12045;
  let fsfBind12046 = fsfBind12045,
    fsfBind12047 = matrixColumnCount(fsfBind12042),
    fsfBind12048 = null;
  if (fsfIn3558 !== undefined) {
    if (fsfBind12047 === 0) return ERR_VALUE;
    let fsfBind20630 = Yst(fsfIn3558, fsfBind12047);
    if (isErrorValue(fsfBind20630)) return fsfBind20630;
    let fsfBind20631 = Xst(fsfBind20630, fsfBind12047);
    if (isErrorValue(fsfBind20631)) return fsfBind20631;
    fsfBind12048 = fsfBind20631;
  }
  return createArrayValue(
    fsfBind12046.map((item) => {
      let fsfBind21204 = fsfBind12042[item] ?? [];
      return fsfBind12048 === null
        ? fsfBind21204.map((_item) => unwrapCellOrError(_item))
        : fsfBind12048.map((_item) =>
            unwrapCellOrError(fsfBind21204[_item] ?? null),
          );
    }),
  );
}
export function Ict(fsfIn3127: any, fsfIn3128: any, fsfIn3129: any) {
  let fsfBind11246 = coerceMatrixRows(fsfIn3127),
    fsfBind11247 = fsfBind11246.length;
  if (fsfBind11247 === 0) return ERR_VALUE;
  let fsfBind11248 = Jst(fsfIn3128, fsfBind11247);
  if (isErrorValue(fsfBind11248)) return fsfBind11248;
  let fsfBind11249 = Zst(fsfBind11248, fsfBind11247);
  if (isErrorValue(fsfBind11249)) return fsfBind11249;
  let fsfBind11250 = matrixColumnCount(fsfBind11246),
    fsfBind11251 = null;
  if (fsfIn3129 !== undefined) {
    if (fsfBind11250 === 0) return ERR_VALUE;
    let fsfBind20632 = Jst(fsfIn3129, fsfBind11250);
    if (isErrorValue(fsfBind20632)) return fsfBind20632;
    let fsfBind20633 = Zst(fsfBind20632, fsfBind11250);
    if (isErrorValue(fsfBind20633)) return fsfBind20633;
    fsfBind11251 = fsfBind20633;
  }
  if (fsfBind11249.length === 0) return ERR_CALC;
  let fsfBind11252 = fsfBind11249.map((item) => {
    let fsfBind21388 = fsfBind11246[item] ?? [];
    return fsfBind11251 === null
      ? fsfBind21388.map((_item) => unwrapCellOrError(_item))
      : fsfBind11251.map((_item) =>
          unwrapCellOrError(fsfBind21388[_item] ?? null),
        );
  });
  return (
    fsfBind11251 === null
      ? matrixColumnCount(fsfBind11252) > 0
      : fsfBind11251.length > 0
  )
    ? createArrayValue(fsfBind11252)
    : ERR_CALC;
}

/** Semantic aliases for preferred mid-file peels. */
export const filterByCriteria = wct;
export const sortByKeys = Tct;
export const takeMatrix = Pct;
