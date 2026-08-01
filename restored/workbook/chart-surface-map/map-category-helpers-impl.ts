// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map category normalize helpers (legacy qye/Gye).
// Stage-3 wave-143.

export function qye(csmIn10772: any) {
  if (typeof csmIn10772 != "string") return null;
  let csmBind21297 = csmIn10772.trim();
  return csmBind21297 ? csmBind21297.toUpperCase() : null;
}
export function Gye(props: any) {
  return (props && props.replace(/[^a-zA-Z0-9_-]/g, "_")) || "map";
}
