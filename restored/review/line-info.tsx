// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KB`) / export `EL`.

export type BindBindLineInfoPeers = {
  Nla: (...args: unknown[]) => unknown;
  Tla: (...args: unknown[]) => unknown;
  Vca: (...args: unknown[]) => unknown;
  _la: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ila: (...args: unknown[]) => unknown;
  ula: (...args: unknown[]) => unknown;
};

let peers: BindBindLineInfoPeers | null = null;

/** Wire bindBindLineInfo peers once companions land. */
export function setBindBindLineInfoPeers(next: BindBindLineInfoPeers): void {
  peers = next;
}

/**
 * Bundle export `EL` / internal `KB`.
 */
export function bindBindLineInfo() {
  if (peers == null) {
    throw new Error("bindBindLineInfo peers are not configured");
  }

  return peers.e(() => {
    (peers.Vca(),
      peers.ila(),
      peers.ula(),
      peers._la(),
      peers.Tla(),
      peers.Nla());
  });
}
