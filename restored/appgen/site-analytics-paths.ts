// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Appgen site analytics / settings path builders (bundle `B3o`/`V3o` / exports `ET`/`TT`).

/** `/sites/:projectId/analytics` (bundle `B3o` / export `ET`). */
export function siteAnalyticsPath(projectId: string): string {
  return `/sites/${encodeURIComponent(projectId)}/analytics`;
}

/** `/sites/:projectId/analytics/events` (bundle `V3o` / export `TT`). */
export function siteAnalyticsEventsPath(projectId: string): string {
  return `${siteAnalyticsPath(projectId)}/events`;
}

/** `/sites/:projectId/settings` (bundle `H3o`). */
export function siteSettingsPath(projectId: string): string {
  return `/sites/${encodeURIComponent(projectId)}/settings`;
}

export const SITE_ANALYTICS_ROUTE_PATTERN = "/sites/:projectId/analytics";
export const SITE_ANALYTICS_EVENTS_ROUTE_PATTERN =
  "/sites/:projectId/analytics/events";
export const SITE_SETTINGS_ROUTE_PATTERN = "/sites/:projectId/settings";
export const SITE_LIBRARY_ROUTE_PATTERN = "/sites/library";
