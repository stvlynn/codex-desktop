// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qra`) / export `zL`.

export type BindBindInitialRoutePeers = {
  Xra: (...args: unknown[]) => unknown;
  Zra: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindInitialRoutePeers | null = null;

/** Wire bindBindInitialRoute peers once companions land. */
export function setBindBindInitialRoutePeers(next: BindBindInitialRoutePeers): void {
  peers = next;
}

/**
 * Bundle export `zL` / internal `Qra`.
 */
export function bindBindInitialRoute() {
  if (peers == null) {
    throw new Error("bindBindInitialRoute peers are not configured");
  }

  return peers.e(() => {
    Xra = peers.r(peers.o(), 1), Zra = (0, peers.Xra.createContext)(null);
  });
}
