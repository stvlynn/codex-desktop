// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: waterfall accent color resolve (legacy bh575).
// Stage-3 wave-138.

/** Legacy Binding1216 — default waterfall accent palette. */
export const WATERFALL_ACCENT_DEFAULTS: Record<string, string> = {
  increase: "#5b9bd5",
  decrease: "#ed7d31",
  total: "#a5a5a5",
};

export function workbookHelper575(cwbIn8954: any, cwbIn8955: any) {
  let cwbBind19501 =
      cwbIn8955 === "increase"
        ? "accent1"
        : cwbIn8955 === "decrease"
          ? "accent2"
          : "accent3",
    cwbBind19502 = cwbIn8954.colorMap?.[cwbBind19501];
  return cwbBind19502 && cwbBind19502.length > 0
    ? cwbBind19502
    : WATERFALL_ACCENT_DEFAULTS[cwbIn8955];
}
