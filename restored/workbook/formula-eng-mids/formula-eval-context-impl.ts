// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula eval-context stack (legacy Dot/Tot/Eot/workbookHelper962/Binding1934).
// Stage-3 wave-142.

export function Tot(femIn15821: any) {
  workbookBinding1934.push(femIn15821);
}
export function Eot(femIn11178: any) {
  if (workbookBinding1934.length === 0) return;
  let femBind21658 = workbookBinding1934.pop();
  femBind21658 &&
    femBind21658 !== femIn11178 &&
    (workbookBinding1934.length = 0);
}
export function Dot(femIn12092: any, femIn12093: any) {
  Tot(femIn12092);
  try {
    return femIn12093();
  } finally {
    Eot(femIn12092);
  }
}
export function workbookHelper962() {
  return workbookBinding1934.length === 0
    ? null
    : (workbookBinding1934[workbookBinding1934.length - 1] ?? null);
}
export let workbookBinding1934: any[] = [];
export function ensureEvalContextStackInit(): void {
  workbookBinding1934 = [];
}
/** Compat alias for barrels. */
export const workbookFn962 = workbookHelper962;

export const workbookHelper962 = workbookFn962;
