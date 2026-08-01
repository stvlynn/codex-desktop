// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation stub context + option coerce (legacy 825/gYe/HLe).
// Stage-3 wave-136.

export let HLe: any;
let stubInited = false;
export function ensurePresentationStubContextInit(): void {
  if (stubInited) return;
  stubInited = true;
  HLe = { stub: () => {} };
}

export function workbookHelper825(pscIn9325: any, pscIn9326: any) {
  ensurePresentationStubContextInit();
  let pscBind19887 = HLe,
    pscBind19888 = {};
  return (
    gYe(pscIn9325)
      ? ((pscBind19887 = pscIn9325), (pscBind19888 = pscIn9326 ?? {}))
      : pscIn9325
        ? (pscBind19888 = pscIn9325)
        : pscIn9326 && (pscBind19888 = pscIn9326),
    {
      context: pscBind19887,
      options: pscBind19888,
    }
  );
}
export function gYe(pscIn10901: any) {
  return (
    typeof pscIn10901 == "object" &&
    !!pscIn10901 &&
    "stub" in pscIn10901 &&
    typeof pscIn10901.stub == "function"
  );
}
