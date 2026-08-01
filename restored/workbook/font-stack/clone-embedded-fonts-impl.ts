// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: clone font list with embedded font bytes (legacy workbookHelper824).
// Stage-3 wave-142.

export function workbookHelper824(fsIn8610: any) {
  return (fsIn8610 ?? []).map((item) => ({
    ...item,
    embeddedFonts: (item.embeddedFonts ?? []).map((_item) => ({
      ..._item,
      data: new Uint8Array(_item.data ?? []),
    })),
  }));
}
