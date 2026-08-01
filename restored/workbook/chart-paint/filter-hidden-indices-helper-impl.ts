// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: filter series by hidden index set (legacy workbookHelper485).
// Stage-3 wave-142.

export function workbookHelper485(whIn12420: any, whIn12421: any) {
  return whIn12421.size === 0
    ? whIn12420
    : whIn12420.filter((item, index) => !whIn12421.has(index));
}
