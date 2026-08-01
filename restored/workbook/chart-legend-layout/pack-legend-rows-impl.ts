// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: pack/balance legend rows (legacy sbe/cbe).
// Stage-3 wave-114.

const ENTRY_GAP_STACKED = 16;

void ENTRY_GAP_STACKED;

export function packLegendRows(
  cllIn3559: any,
  cllIn3560: any,
  cllIn3561: any = false,
) {
  if (cllIn3559.length === 0) return [];
  let cllBind12049 = [],
    cllBind12050 = {
      itemIndices: [],
      width: 0,
    };
  for (
    let cllBind15503 = 0;
    cllBind15503 < cllIn3559.length;
    cllBind15503 += 1
  ) {
    let cllBind16321 = cllIn3559[cllBind15503] ?? 0,
      cllBind16322 =
        cllBind12050.itemIndices.length > 0 ? ENTRY_GAP_STACKED : 0,
      cllBind16323 = cllBind12050.width + cllBind16322 + cllBind16321;
    if (
      cllBind12050.itemIndices.length > 0 &&
      Number.isFinite(cllIn3560) &&
      cllBind16323 > cllIn3560
    ) {
      cllBind12049.push(cllBind12050);
      cllBind12050 = {
        itemIndices: [cllBind15503],
        width: cllBind16321,
      };
      continue;
    }
    cllBind12050.itemIndices.push(cllBind15503);
    cllBind12050.width = cllBind16323;
  }
  return (
    cllBind12049.push(cllBind12050),
    !cllIn3561 || cllBind12049.length <= 1
      ? cllBind12049
      : (balanceLegendRows(cllIn3559, cllBind12049.length, cllIn3560) ??
        cllBind12049)
  );
}
export function balanceLegendRows(
  cllIn4645: any,
  cllIn4646: any,
  cllIn4647: any,
) {
  let cllBind13905 = Math.floor(cllIn4645.length / cllIn4646),
    cllBind13906 = cllIn4645.length % cllIn4646,
    cllBind13907 = [],
    cllBind13908 = 0;
  for (let cllBind16393 = 0; cllBind16393 < cllIn4646; cllBind16393 += 1) {
    let cllBind17178 = cllBind13905 + +(cllBind16393 < cllBind13906),
      cllBind17179 = Array.from(
        {
          length: cllBind17178,
        },
        (cllIn16519, cllIn16520) => cllBind13908 + cllIn16520,
      ),
      cllBind17180 = cllBind17179.reduce(
        (accumulator, current, index) =>
          accumulator +
          (index > 0 ? ENTRY_GAP_STACKED : 0) +
          (cllIn4645[current] ?? 0),
        0,
      );
    if (Number.isFinite(cllIn4647) && cllBind17180 > cllIn4647) return;
    cllBind13907.push({
      itemIndices: cllBind17179,
      width: cllBind17180,
    });
    cllBind13908 += cllBind17178;
  }
  return cllBind13907;
}

export const sbe = packLegendRows;
export const cbe = balanceLegendRows;
