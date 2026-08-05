// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LJs`) / export `Ng`.

export type GhostActivePeers = {
  FJs: (...args: unknown[]) => unknown;
  IJs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  NJs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: GhostActivePeers | null = null;

/** Wire ghostActive peers once companions land. */
export function setGhostActivePeers(next: GhostActivePeers): void {
  peers = next;
}

/**
 * Bundle export `Ng` / internal `LJs`.
 */
export function ghostActive() {
  if (peers == null) {
    throw new Error("ghostActive peers are not configured");
  }

  return peers.e(() => {
    ((FJs = peers.c()), peers.NJs(), (IJs = peers.J()));
  });
}
