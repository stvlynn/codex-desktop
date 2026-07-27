// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// No-op analytics client used before a real client is installed
// (bundle `Wb` / export `Y9`).

export const NOOP_ANALYTICS_CLIENT = {
  logProductEvent: () => {},
  logEventWithStatsig: () => {},
  trackCounter: async () => {},
  flush: async () => {},
  submitCodexAnalyticsEvent: null as null,
};
