// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bXr`) / export `LY`.

export type BindPluginPeers = {
  e: (...args: unknown[]) => unknown;
  i_: (...args: unknown[]) => unknown;
  yXr: (...args: unknown[]) => unknown;
};

let peers: BindPluginPeers | null = null;

/** Wire bindPlugin peers once companions land. */
export function setBindPluginPeers(next: BindPluginPeers): void {
  peers = next;
}

/**
 * Bundle export `LY` / internal `bXr`.
 */
export function bindPlugin() {
  if (peers == null) {
    throw new Error("bindPlugin peers are not configured");
  }

  return peers.e(() => {
    (peers.i_(), (yXr = `plugin://`));
  });
}
