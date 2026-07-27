// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `a7l`) / export `wr`.

export type BindDeferredUiWrPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  PLr: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  R7: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dRr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  i7l: (...args: unknown[]) => unknown;
  n7l: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWrPeers | null = null;

/** Wire bindDeferredUiWr peers once companions land. */
export function setBindDeferredUiWrPeers(next: BindDeferredUiWrPeers): void {
  peers = next;
}

/**
 * Bundle export `wr` / internal `a7l`.
 */
export function bindDeferredUiWr() {
  if (peers == null) {
    throw new Error("bindDeferredUiWr peers are not configured");
  }

  return peers.e(() => {
    i7l = peers.c(), peers.sd(), peers.$u(), peers.Nw(), peers.dRr(), peers.Pp(), peers.Mp(), peers.PLr(), peers.n7l(), R7 = peers.J();
  });
}
