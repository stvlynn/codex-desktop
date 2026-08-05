// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mes`) / export `xw`.

export type BindDeferredxwPeers = {
  Qt: (...args: unknown[]) => unknown;
  U4i: (...args: unknown[]) => unknown;
  XN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  des: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fes: (...args: unknown[]) => unknown;
  pes: (...args: unknown[]) => unknown;
  tP: (...args: unknown[]) => unknown;
};

let peers: BindDeferredxwPeers | null = null;

/** Wire bindDeferredxw peers once companions land. */
export function setBindDeferredxwPeers(next: BindDeferredxwPeers): void {
  peers = next;
}

/**
 * Bundle export `xw` / internal `mes`.
 */
export function bindDeferredxw() {
  if (peers == null) {
    throw new Error("bindDeferredxw peers are not configured");
  }

  return peers.e(() => {
    ((des = peers.c()),
      peers.Qt(),
      peers.XN(),
      peers.tP(),
      peers.U4i(),
      (fes = `DISABLED_BY_ADMIN`),
      (pes = `DISABLED_BY_ADMIN`));
  });
}
