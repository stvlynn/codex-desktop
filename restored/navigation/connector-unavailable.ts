// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Scc`) / export `Yf`.

export type ConnectorUnavailablePeers = {
  e: (...args: unknown[]) => unknown;
  xcc: (...args: unknown[]) => unknown;
};

let peers: ConnectorUnavailablePeers | null = null;

/** Wire connectorUnavailable peers once companions land. */
export function setConnectorUnavailablePeers(
  next: ConnectorUnavailablePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yf` / internal `Scc`.
 */
export function connectorUnavailable() {
  if (peers == null) {
    throw new Error("connectorUnavailable peers are not configured");
  }

  return peers.e(() => {
    xcc = new Map([
      [`gmail`, `gmail`],
      [`google-calendar`, `google-calendar`],
      [`google-drive`, `google-drive`],
      [`connector_gmail`, `gmail`],
      [`connector_google_calendar`, `google-calendar`],
      [`connector_google_drive`, `google-drive`],
    ]);
  });
}
