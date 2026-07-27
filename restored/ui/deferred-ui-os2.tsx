// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `R8`) / export `os`.

export type BindBindDeferredUiOs2Peers = {
  Gm: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  _Fl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  vFl: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiOs2Peers | null = null;

/** Wire bindBindDeferredUiOs2 peers once companions land. */
export function setBindBindDeferredUiOs2Peers(next: BindBindDeferredUiOs2Peers): void {
  peers = next;
}

/**
 * Bundle export `os` / internal `R8`.
 */
export function bindBindDeferredUiOs2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiOs2 peers are not configured");
  }

  return peers.e(() => {
    vFl = peers.c(), peers.Ho(), peers.ed(), peers._Fl(), peers.Gm();
  });
}
