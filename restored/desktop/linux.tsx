// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Tr`) / export `c1`.

export type BindBindLinuxPeers = {
  QTr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindLinuxPeers | null = null;

/** Wire bindBindLinux peers once companions land. */
export function setBindBindLinuxPeers(next: BindBindLinuxPeers): void {
  peers = next;
}

/**
 * Bundle export `c1` / internal `$Tr`.
 */
export function bindBindLinux() {
  if (peers == null) {
    throw new Error("bindBindLinux peers are not configured");
  }

  return peers.e(() => {
    QTr = 1e3;
  });
}
