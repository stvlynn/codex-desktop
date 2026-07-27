// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `U4i`) / export `Mz`.

export type BindBindPluginsPeers = {
  H4i: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  UN: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  V4i: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  YN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  h6r: (...args: unknown[]) => unknown;
  r6r: (...args: unknown[]) => unknown;
};

let peers: BindBindPluginsPeers | null = null;

/** Wire bindBindPlugins peers once companions land. */
export function setBindBindPluginsPeers(next: BindBindPluginsPeers): void {
  peers = next;
}

/**
 * Bundle export `Mz` / internal `U4i`.
 */
export function bindBindPlugins() {
  if (peers == null) {
    throw new Error("bindBindPlugins peers are not configured");
  }

  return peers.e(() => {
    V4i = peers.c(), peers.Qt(), peers.Vf(), peers.r6r(), peers.h6r(), peers.UN(), peers.YN(), peers.K_(), peers.Uf(), H4i = [`plugins`, `detail`];
  });
}
