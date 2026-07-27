// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gql`) / export `Ra`.

export type BindDeferredUiRaPeers = {
  Ho: (...args: unknown[]) => unknown;
  I5: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  PA: (...args: unknown[]) => unknown;
  QHl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hql: (...args: unknown[]) => unknown;
  lql: (...args: unknown[]) => unknown;
  mql: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pql: (...args: unknown[]) => unknown;
  qHl: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  z5: (...args: unknown[]) => unknown;
  zVl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRaPeers | null = null;

/** Wire bindDeferredUiRa peers once companions land. */
export function setBindDeferredUiRaPeers(next: BindDeferredUiRaPeers): void {
  peers = next;
}

/**
 * Bundle export `Ra` / internal `gql`.
 */
export function bindDeferredUiRa() {
  if (peers == null) {
    throw new Error("bindDeferredUiRa peers are not configured");
  }

  return peers.e(() => {
    pql = peers.c(), peers.sd(), peers.Ho(), mql = peers.r(peers.o(), 1), peers.Mp(), peers.PA(), peers.I5(), peers.zVl(), peers.qHl(), peers.lql(), peers.QHl(), z5 = peers.J(), hql = {
      hasMore: !1,
      isLoading: !1
    };
  });
}
