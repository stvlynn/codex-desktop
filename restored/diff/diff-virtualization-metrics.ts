// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hyo` / export `WA`; companion `byo` = 18.

/** Layout metrics for diff virtualization from a base font size. */
export function diffVirtualizationMetrics(fontSize: number): {
  hunkLineCount: number;
  lineHeight: number;
  diffHeaderHeight: number;
  hunkSeparatorHeight: number;
  spacing: number;
} {
  const lineHeightScale = 18;
  return {
    hunkLineCount: 32,
    lineHeight: (fontSize * lineHeightScale) / 10,
    diffHeaderHeight: 0,
    hunkSeparatorHeight: 32,
    spacing: 0,
  };
}
