// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `m3r` / export `iq`. Companion `h3r` microsoft remaps.

export const MICROSOFT_CONNECTOR_ID_MAP: Record<string, string> = {
  gmail: "outlook-email",
  "google-calendar": "outlook-calendar",
  "google-drive": "sharepoint",
  slack: "teams",
};

/** Remap Google/Slack connector ids when the provider is Microsoft. */
export function mapConnectorIdForProvider(
  connectorId: string,
  provider: string,
): string {
  return provider === "microsoft"
    ? (MICROSOFT_CONNECTOR_ID_MAP[connectorId] ?? connectorId)
    : connectorId;
}
