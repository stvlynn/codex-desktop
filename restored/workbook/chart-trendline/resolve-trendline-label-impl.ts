// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: trendline label text resolve.
// Stage-3 wave-113.

export function resolveTrendlineLabel(ctlIn2125: any, ctlIn2126: any) {
  let ctlBind9036 = ctlIn2125.label,
    ctlBind9037 = ctlBind9036?.textStyle;
  if (ctlBind9036 && (ctlBind9036.textRuns?.length ?? 0) > 0)
    return {
      paragraphs: [
        {
          runs: ctlBind9036.textRuns.map((item) => ({
            text: item.text ?? "",
            textStyle: item.textStyle ?? ctlBind9037,
          })),
        },
      ],
      resolvedStyle: ctlBind9037,
      manualLayout: ctlBind9036.manualLayout,
    };
  let ctlBind9038 =
      ctlBind9036 && typeof ctlBind9036.text == "string"
        ? ctlBind9036.text.trim()
        : "",
    ctlBind9039 =
      (ctlIn2125.displayEquation || ctlIn2125.displayRSquared) &&
      ctlIn2126?.label?.text
        ? ctlIn2126.label.text
        : "",
    ctlBind9040 = ctlBind9038.length > 0 ? ctlBind9038 : ctlBind9039;
  return ctlBind9040
    ? {
        paragraphs: ctlBind9040
          .split(/\r?\n/)
          .filter((item) => item.trim().length > 0)
          .map((item) => ({
            runs: [
              {
                text: item,
                textStyle: ctlBind9037,
              },
            ],
          })),
        resolvedStyle: ctlBind9037,
        manualLayout: ctlBind9036?.manualLayout,
      }
    : null;
}

export const cxe = resolveTrendlineLabel;
