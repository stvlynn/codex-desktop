// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fRn`) / export `q5`.

export type BindBindPluginPeers = {
  dRn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  uRn: (...args: unknown[]) => unknown;
};

let peers: BindBindPluginPeers | null = null;

/** Wire bindBindPlugin peers once companions land. */
export function setBindBindPluginPeers(next: BindBindPluginPeers): void {
  peers = next;
}

/**
 * Bundle export `q5` / internal `fRn`.
 */
export function bindBindPlugin() {
  if (peers == null) {
    throw new Error("bindBindPlugin peers are not configured");
  }

  return peers.e(() => {
    ((uRn = `app://`), (dRn = `plugin://`));
  });
}
