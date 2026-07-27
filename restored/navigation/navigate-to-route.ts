// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hZ`) / export `pS`.

export type BindNavigateToRoutePeers = {
  Fds: (...args: unknown[]) => unknown;
  JR: (...args: unknown[]) => unknown;
  Mds: (...args: unknown[]) => unknown;
  Nds: (...args: unknown[]) => unknown;
  Pds: (...args: unknown[]) => unknown;
  Pn: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindNavigateToRoutePeers | null = null;

/** Wire bindNavigateToRoute peers once companions land. */
export function setBindNavigateToRoutePeers(next: BindNavigateToRoutePeers): void {
  peers = next;
}

/**
 * Bundle export `pS` / internal `hZ`.
 */
export function bindNavigateToRoute() {
  if (peers == null) {
    throw new Error("bindNavigateToRoute peers are not configured");
  }

  return peers.e(() => {
    Mds = peers.c(), peers.fr(), Nds = peers.r(peers.JR(), 1), Pds = peers.r(peers.o(), 1), Fds = peers.Pn([]);
  });
}
