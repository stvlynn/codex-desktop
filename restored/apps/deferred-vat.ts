// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xNt`) / export `vat`.

export type DeferredVatPeers = {
  bNt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lv: (...args: unknown[]) => unknown;
  ov: (...args: unknown[]) => unknown;
};

let peers: DeferredVatPeers | null = null;

/** Wire deferredVat peers once companions land. */
export function setDeferredVatPeers(next: DeferredVatPeers): void {
  peers = next;
}

/**
 * Bundle export `vat` / internal `xNt`.
 */
export function deferredVat() {
  if (peers == null) {
    throw new Error("deferredVat peers are not configured");
  }

  return peers.e(() => {
    (peers.ov(), peers.lv(), (bNt = Symbol(`implicit`)));
  });
}
