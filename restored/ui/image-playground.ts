// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nbs`) / export `mb`.

export type ImagePlaygroundPeers = {
  e: (...args: unknown[]) => unknown;
  ebs: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  tbs: (...args: unknown[]) => unknown;
};

let peers: ImagePlaygroundPeers | null = null;

/** Wire imagePlayground peers once companions land. */
export function setImagePlaygroundPeers(next: ImagePlaygroundPeers): void {
  peers = next;
}

/**
 * Bundle export `mb` / internal `nbs`.
 */
export function imagePlayground() {
  if (peers == null) {
    throw new Error("imagePlayground peers are not configured");
  }

  return peers.e(() => {
    ebs = peers.r(peers.o(), 1), tbs = (0, peers.ebs.createContext)(`default`);
  });
}
