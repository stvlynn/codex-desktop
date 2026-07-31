// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: paragraphStyle clone helper (legacy workbookHelper 260).

export function cloneParagraphStyle(trIn10891: unknown) {
  if (!trIn10891) return;
  let trBind21400 = structuredClone(trIn10891);
  return ((trBind21400.tabStops = trBind21400.tabStops ?? []), trBind21400);
}
