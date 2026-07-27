// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ycc` / export `Jf`; companion `xcc` map.

const CONNECTOR_CATALOG_IDS = new Map<string, string>([
  ["gmail", "gmail"],
  ["google-calendar", "google-calendar"],
  ["google-drive", "google-drive"],
  ["connector_gmail", "gmail"],
  ["connector_google_calendar", "google-calendar"],
  ["connector_google_drive", "google-drive"],
]);

/** Normalize a connector id to its catalog id, or null. */
export function normalizeConnectorCatalogId(
  connectorId: string,
): string | null {
  return CONNECTOR_CATALOG_IDS.get(connectorId) ?? null;
}
