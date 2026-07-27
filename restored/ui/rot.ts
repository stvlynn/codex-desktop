// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lkt`) / export `rot`.

export type RotPeers = {
  Ikt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: RotPeers | null = null;

/** Wire rot peers once companions land. */
export function setRotPeers(next: RotPeers): void {
  peers = next;
}

/**
 * Bundle export `rot` / internal `Lkt`.
 */
export function rot() {
  if (peers == null) {
    throw new Error("rot peers are not configured");
  }

  return peers.e(() => {
    peers.Ikt();
  });
}
