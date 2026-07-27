// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `p2i`) / export `iB`.

export type ConnectorOrDefaultIconPeers = {
  _P: (...args: unknown[]) => unknown;
  d2i: (...args: unknown[]) => unknown;
  dR: (...args: unknown[]) => unknown;
  h2i: (...args: unknown[]) => unknown;
  m2i: (...args: unknown[]) => unknown;
};

let peers: ConnectorOrDefaultIconPeers | null = null;

/** Wire ConnectorOrDefaultIcon peers once companions land. */
export function setConnectorOrDefaultIconPeers(next: ConnectorOrDefaultIconPeers): void {
  peers = next;
}

/**
 * Bundle export `iB` / internal `p2i`.
 */
export function ConnectorOrDefaultIcon(e: unknown, t: unknown = `icon-xs`) {
  if (peers == null) {
    throw new Error("ConnectorOrDefaultIcon peers are not configured");
  }

  let n = (0, peers.m2i.createElement)(peers.dR, {
    className: t,
  });
  return e == null
    ? n
    : e.connectorId === peers.h2i
      ? (0, peers.m2i.createElement)(peers.d2i, {
          "aria-hidden": !0,
          className: t,
        })
      : (0, peers.m2i.createElement)(peers._P, {
          alt: ``,
          className: t,
          fallback: n,
          logoDarkUrl: e.logoDarkUrl,
          logoUrl: e.logoUrl,
        });
}
