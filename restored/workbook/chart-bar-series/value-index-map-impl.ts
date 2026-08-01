// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart series value index map (legacy workbookHelper420).
// Stage-3 wave-137.

export function workbookHelper420(cbsIn7939: any) {
  let cbsBind18424 = cbsIn7939.valueIndices ?? [],
    cbsBind18425 = cbsIn7939.values ?? [];
  return cbsBind18424.length === 0 ||
    cbsBind18424.length !== cbsBind18425.length
    ? new Map(cbsBind18425.map((item, index) => [index, item]))
    : new Map(
        cbsBind18424.map((item, index) => [item, cbsBind18425[index] ?? 0]),
      );
}
