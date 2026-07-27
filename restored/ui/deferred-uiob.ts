// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qxs`) / export `ob`.

export type DeferredUiobPeers = {
  $u: (...args: unknown[]) => unknown;
  CB: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jh: (...args: unknown[]) => unknown;
  Kxs: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  QZ: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kxs: (...args: unknown[]) => unknown;
};

let peers: DeferredUiobPeers | null = null;

/** Wire deferredUiob peers once companions land. */
export function setDeferredUiobPeers(next: DeferredUiobPeers): void {
  peers = next;
}

/**
 * Bundle export `ob` / internal `qxs`.
 */
export function deferredUiob() {
  if (peers == null) {
    throw new Error("deferredUiob peers are not configured");
  }

  return peers.e(() => {
    Kxs = peers.c(), peers.$u(), peers.Pp(), peers.CB(), peers.Jh(), peers.kxs(), QZ = peers.J();
  });
}
