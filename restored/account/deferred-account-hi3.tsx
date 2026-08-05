// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `l$l`) / export `Hi`.

export type DeferredAccountHi3Peers = {
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  uploadError: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountHi3Peers | null = null;

/** Wire DeferredAccountHi3 peers once companions land. */
export function setDeferredAccountHi3Peers(
  next: DeferredAccountHi3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Hi` / internal `l$l`.
 */
export function DeferredAccountHi3() {
  if (peers == null) {
    throw new Error("DeferredAccountHi3 peers are not configured");
  }
  return class extends Error {
    uploadError;
    constructor(e) {
      (super(`Profile photo upload failed`), (this.uploadError = peers.e));
    }
  };
}
