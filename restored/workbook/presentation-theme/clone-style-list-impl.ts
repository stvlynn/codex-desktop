// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shallow-clone theme style list entries (legacy $2).
// Stage-3 wave-140.

export function $2(ptIn11649: any) {
  return ptIn11649
    ? ptIn11649.map((item) =>
        item && typeof item == "object"
          ? {
              ...item,
            }
          : item,
      )
    : [];
}
