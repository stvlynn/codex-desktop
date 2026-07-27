// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cac`) / export `setVacRouteForWorkspacePath`.

export type VacRouteForWorkspacePathPeers = {
  A8s: (...args: unknown[]) => unknown;
  M8s: (...args: unknown[]) => unknown;
  N8s: (...args: unknown[]) => unknown;
  _ac: (...args: unknown[]) => unknown;
  vac: (...args: unknown[]) => unknown;
};
let peers: VacRouteForWorkspacePathPeers | null = null;

/** Wire setVacRouteForWorkspacePath peers once companions land. */
export function setVacRouteForWorkspacePathPeers(next: VacRouteForWorkspacePathPeers): void {
  peers = next;
}

/**
 * Bundle export `setVacRouteForWorkspacePath` / internal `cac`.
 */
export function setVacRouteForWorkspacePath(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("setVacRouteForWorkspacePath peers are not configured");
  }
  let r = peers.N8s(t);
  e.get(peers._ac, r);
  e.set(peers._ac, r, {
    route: peers.A8s(n),
  });
  e.set(peers.vac, peers.M8s(t));
}
