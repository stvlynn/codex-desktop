// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ipo`) / export `kj`.

export type BindDeferredUiHelperKjPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jh: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  rpo: (...args: unknown[]) => unknown;
  zG: (...args: unknown[]) => unknown;
  zR: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHelperKjPeers | null = null;

/** Wire bindDeferredUiHelperKj peers once companions land. */
export function setBindDeferredUiHelperKjPeers(
  next: BindDeferredUiHelperKjPeers,
): void {
  peers = next;
}

/**
 * Bundle export `kj` / internal `ipo`.
 */
export function bindDeferredUiHelperKj() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperKj peers are not configured");
  }

  return peers.e(() => {
    ((rpo = peers.c()),
      peers.$u(),
      peers.Pp(),
      peers.zR(),
      peers.Jh(),
      (zG = peers.J()));
  });
}
