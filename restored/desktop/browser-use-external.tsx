// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r6r`) / export `UK`.

export type BindBrowserUseExternalPeers = {
  DN: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  HGr: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  Y3r: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dk: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n6r: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  t6r: (...args: unknown[]) => unknown;
};

let peers: BindBrowserUseExternalPeers | null = null;

/** Wire bindBrowserUseExternal peers once companions land. */
export function setBindBrowserUseExternalPeers(next: BindBrowserUseExternalPeers): void {
  peers = next;
}

/**
 * Bundle export `UK` / internal `r6r`.
 */
export function bindBrowserUseExternal() {
  if (peers == null) {
    throw new Error("bindBrowserUseExternal peers are not configured");
  }

  return peers.e(() => {
    t6r = peers.c(), peers.Qt(), n6r = peers.r(peers.o(), 1), peers.HGr(), peers.DN(), peers.Fh(), peers.Uf(), peers.Wh(), peers.qx(), peers.dk(), peers.Y3r();
  });
}
