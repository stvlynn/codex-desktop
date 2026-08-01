// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: whether trendline has a visible label (legacy sxe).
// Stage-3 wave-137.

export function sxe(ctlIn8008: any) {
  let ctlBind18493 = ctlIn8008?.label,
    ctlBind18494 =
      typeof ctlBind18493?.text == "string" &&
      ctlBind18493.text.trim().length > 0,
    ctlBind18495 = (ctlBind18493?.textRuns?.length ?? 0) > 0;
  return (
    !!ctlIn8008?.displayEquation ||
    !!ctlIn8008?.displayRSquared ||
    ctlBind18494 ||
    ctlBind18495
  );
}
