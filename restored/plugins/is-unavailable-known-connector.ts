// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bcc` / export `Xf`.

import { normalizeConnectorCatalogId } from "./normalize-connector-catalog-id";

/** True for connector-unavailable errors with a known catalog id. */
export function isUnavailableKnownConnector(connectorId: string, reason: string): boolean {
  return (
    reason === "connector-unavailable" &&
    normalizeConnectorCatalogId(connectorId) != null
  );
}
