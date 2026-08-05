// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zw`) / export `j5`.

export type BindBindCodexAppsPeers = {
  Au: (...args: unknown[]) => unknown;
  N_e: (...args: unknown[]) => unknown;
  S_e: (...args: unknown[]) => unknown;
  Wl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gUn: (...args: unknown[]) => unknown;
};

let peers: BindBindCodexAppsPeers | null = null;

/** Wire bindBindCodexApps peers once companions land. */
export function setBindBindCodexAppsPeers(next: BindBindCodexAppsPeers): void {
  peers = next;
}

/**
 * Bundle export `j5` / internal `zw`.
 */
export function bindBindCodexApps() {
  if (peers == null) {
    throw new Error("bindBindCodexApps peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(), `${peers.S_e}${peers.Wl}`, (gUn = `${peers.N_e}@${peers.Wl}`));
  });
}
