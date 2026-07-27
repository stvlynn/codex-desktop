// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Desktop performance telemetry span name literals (`hln`).

/** Span names emitted by the desktop performance telemetry client (`hln`). */
export const DESKTOP_PERFORMANCE_SPAN_NAMES = {
  appStart: "desktop.app_start",
  artifactGeneration: "desktop.artifact_generation",
  artifactPreview: "desktop.artifact_preview",
  pluginsPageLoad: "desktop.plugins_page_load",
  reviewOpen: "desktop.review_open",
  threadNavigation: "desktop.thread_navigation",
  turnFirstResponseVisible: "desktop.turn_submit",
} as const;

export type DesktopPerformanceSpanName =
  (typeof DESKTOP_PERFORMANCE_SPAN_NAMES)[keyof typeof DESKTOP_PERFORMANCE_SPAN_NAMES];
