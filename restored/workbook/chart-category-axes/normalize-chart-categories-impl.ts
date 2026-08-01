// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: normalize chart category labels (legacy workbookHelper419/Aye/jye).
// Stage-3 wave-124.

export function seriesCategoryLength(props: any) {
  return Math.max(
    props.categoryPointCount ?? 0,
    props.valuePointCount ?? 0,
    workbookHelper418(props.categoryIndices) + 1,
    workbookHelper418(props.valueIndices) + 1,
    props.categories?.length ?? 0,
    props.values?.length ?? 0,
  );
}
export function compactSparseCategories(ccaIn7424: any) {
  let ccaBind17887 = new Set(ccaIn7424.filter((item) => item !== undefined)),
    ccaBind17888 = " ";
  return ccaIn7424.map((item) => {
    if (item !== undefined) return item;
    for (; ccaBind17887.has(ccaBind17888); ) ccaBind17888 += " ";
    let ccaBind20859 = ccaBind17888;
    return (
      ccaBind17887.add(ccaBind20859),
      (ccaBind17888 += " "),
      ccaBind20859
    );
  });
}
export function normalizeChartCategories(ccaIn3249: any) {
  let ccaBind11460 = ccaIn3249.categories ?? [],
    ccaBind11461 = ccaIn3249.series ?? [],
    ccaBind11462 = ccaBind11461[0],
    ccaBind11463 =
      ccaBind11460.length > 0 ? ccaBind11460 : (ccaBind11462?.categories ?? []),
    ccaBind11464 = Math.max(
      ccaBind11463.length,
      ...ccaBind11461.map(seriesCategoryLength),
    );
  if (ccaBind11464 === 0) return [];
  let ccaBind11465 = Array.from({
      length: ccaBind11464,
    }),
    ccaBind11466 = [];
  return (
    ccaBind11460.length === 0 &&
      ccaBind11462 &&
      (ccaBind11462.categoryIndices?.length === ccaBind11463.length
        ? (ccaBind11466 = ccaBind11462.categoryIndices)
        : ccaBind11462.valueIndices?.length === ccaBind11463.length &&
          (ccaBind11466 = ccaBind11462.valueIndices)),
    ccaBind11463.forEach((item, index) => {
      let ccaBind22260 = ccaBind11466[index] ?? index;
      ccaBind22260 >= 0 &&
        ccaBind22260 < ccaBind11465.length &&
        (ccaBind11465[ccaBind22260] = item);
    }),
    compactSparseCategories(ccaBind11465)
  );
}

/** Legacy aliases (wave-124). */
export const Aye = seriesCategoryLength;
export const jye = compactSparseCategories;
export const workbookHelper419 = normalizeChartCategories;
