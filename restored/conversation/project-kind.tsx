// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RDe`) / export `upt`.

export type BindBindProjectKindPeers = {
  IDe: (...args: unknown[]) => unknown;
  LDe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  al: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fl: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindBindProjectKindPeers | null = null;

/** Wire bindBindProjectKind peers once companions land. */
export function setBindBindProjectKindPeers(next: BindBindProjectKindPeers): void {
  peers = next;
}

/**
 * Bundle export `upt` / internal `RDe`.
 */
export function bindBindProjectKind() {
  if (peers == null) {
    throw new Error("bindBindProjectKind peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), IDe = peers.dl(`projectKind`, [peers.sl({
      projectKind: peers.ml(`local`),
      projectId: peers.X(),
      path: peers.X().optional(),
      cwd: peers.X().optional(),
      pendingCoreUpdate: peers.il()
    }), peers.sl({
      projectKind: peers.ml(`remote`),
      projectId: peers.X(),
      path: peers.X(),
      cwd: peers.X().optional(),
      hostId: peers.X().optional(),
      pendingCoreUpdate: peers.il()
    })]), LDe = peers.fl(peers.X(), peers.al());
  });
}
