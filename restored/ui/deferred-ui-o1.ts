// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bwr`) / export `O1`.

export type BindDeferredUiO1Peers = {
  J: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  _wr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gwr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vwr: (...args: unknown[]) => unknown;
  ywr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiO1Peers | null = null;

/** Wire bindDeferredUiO1 peers once companions land. */
export function setBindDeferredUiO1Peers(next: BindDeferredUiO1Peers): void {
  peers = next;
}

/**
 * Bundle export `O1` / internal `bwr`.
 */
export function bindDeferredUiO1() {
  if (peers == null) {
    throw new Error("bindDeferredUiO1 peers are not configured");
  }

  return peers.e(() => {
    ((gwr = peers.c()),
      (_wr = peers.r(peers.o(), 1)),
      peers.Pp(),
      (vwr = peers.J()),
      (ywr = (0, peers._wr.createContext)(!1)));
  });
}
