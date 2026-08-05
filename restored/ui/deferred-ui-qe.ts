// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zJo`) / export `qE`.

export type BindDeferredUiQEPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  LJo: (...args: unknown[]) => unknown;
  RJo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  mGo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiQEPeers | null = null;

/** Wire bindDeferredUiQE peers once companions land. */
export function setBindDeferredUiQEPeers(next: BindDeferredUiQEPeers): void {
  peers = next;
}

/**
 * Bundle export `qE` / internal `zJo`.
 */
export function bindDeferredUiQE() {
  if (peers == null) {
    throw new Error("bindDeferredUiQE peers are not configured");
  }

  return peers.e(() => {
    ((LJo = peers.c()), peers.$u(), peers.mGo(), (RJo = peers.J()));
  });
}
