// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sheet id/name catalog normalize (legacy jgt).
// Stage-3 wave-127.

export function normalizeSheetCatalog(scaIn3664: any) {
  let scaBind12256 = [...scaIn3664]
      .map((item, index) => {
        let scaBind18586 = item.sheetId?.trim(),
          scaBind18587 = item.name?.trim(),
          scaBind18588 = Number.isFinite(item.index)
            ? item.index
            : index;
        return !scaBind18586 || !scaBind18587
          ? null
          : {
              sheetId: scaBind18586,
              name: scaBind18587,
              index: scaBind18588,
            };
      })
      .filter((item) => item != null)
      .sort(
        (scaIn16106, scaIn16107) =>
          scaIn16106.index - scaIn16107.index,
      ),
    scaBind12257 = new Set(),
    scaBind12258 = [];
  for (let scaBind20726 of scaBind12256)
    scaBind12257.has(scaBind20726.sheetId) ||
      (scaBind12257.add(scaBind20726.sheetId),
      scaBind12258.push({
        sheetId: scaBind20726.sheetId,
        name: scaBind20726.name,
        index: scaBind12258.length,
      }));
  return scaBind12258;
}

export const jgt = normalizeSheetCatalog;
