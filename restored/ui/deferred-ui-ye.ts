// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FJo`) / export `YE`.

export type DeferredUiYEPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  MJo: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  PJo: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  VJ: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  uh: (...args: unknown[]) => unknown;
};

let peers: DeferredUiYEPeers | null = null;

/** Wire deferredUiYE peers once companions land. */
export function setDeferredUiYEPeers(next: DeferredUiYEPeers): void {
  peers = next;
}

/**
 * Bundle export `YE` / internal `FJo`.
 */
export function deferredUiYE() {
  if (peers == null) {
    throw new Error("deferredUiYE peers are not configured");
  }

  return peers.e(() => {
    PJo = peers.c(), peers.$u(), peers.Pp(), peers.Mp(), peers.uh(), peers.MJo(), VJ = peers.J();
  });
}
