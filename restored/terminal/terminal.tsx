// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mBi`) / export `dU`.

export type BindBindTerminalPeers = {
  Kar: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  pBi: (...args: unknown[]) => unknown;
};

let peers: BindBindTerminalPeers | null = null;

/** Wire bindBindTerminal peers once companions land. */
export function setBindBindTerminalPeers(next: BindBindTerminalPeers): void {
  peers = next;
}

/**
 * Bundle export `dU` / internal `mBi`.
 */
export function bindBindTerminal() {
  if (peers == null) {
    throw new Error("bindBindTerminal peers are not configured");
  }

  return peers.Ma(peers.hT, ({
    get: e
  }) => e(peers.Kar) === !1 ? `right` : e(peers.pBi));
}
