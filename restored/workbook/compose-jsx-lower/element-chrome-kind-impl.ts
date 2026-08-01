// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: has visual chrome + lowered-kind bag check (legacy ike/cke).
// Stage-3 wave-140.

export function ike(cjlIn10006: any) {
  return (
    cjlIn10006.fill !== undefined ||
    cjlIn10006.line !== undefined ||
    cjlIn10006.borderRadius !== undefined ||
    cjlIn10006.shadow !== undefined
  );
}
export function cke(cjlIn10962: any) {
  return (
    typeof cjlIn10962 == "object" &&
    !!cjlIn10962 &&
    "kind" in cjlIn10962 &&
    typeof cjlIn10962.kind == "string"
  );
}
