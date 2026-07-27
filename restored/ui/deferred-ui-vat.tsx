// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pMt`) / export `Vat`.

export type BindBindDeferredUiVatPeers = {
  cMt: (...args: unknown[]) => unknown;
  fMt: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiVatPeers | null = null;

/** Wire bindBindDeferredUiVat peers once companions land. */
export function setBindBindDeferredUiVatPeers(next: BindBindDeferredUiVatPeers): void {
  peers = next;
}

/**
 * Bundle export `Vat` / internal `pMt`.
 */
export function bindBindDeferredUiVat() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiVat peers are not configured");
  }

  return peers.fMt(peers.cMt, `px, `, `px)`, `deg)`);
}
