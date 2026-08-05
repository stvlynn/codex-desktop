// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xna`) / export `QL`.

export type BindDeferredQLPeers = {
  Jna: (...args: unknown[]) => unknown;
  Yna: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredQLPeers | null = null;

/** Wire bindDeferredQL peers once companions land. */
export function setBindDeferredQLPeers(next: BindDeferredQLPeers): void {
  peers = next;
}

/**
 * Bundle export `QL` / internal `Xna`.
 */
export function bindDeferredQL() {
  if (peers == null) {
    throw new Error("bindDeferredQL peers are not configured");
  }

  return peers.e(() => {
    ((Jna = peers.r(peers.o(), 1)), (Yna = (0, peers.Jna.createContext)(null)));
  });
}
