// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LSe`) / export `vmt`.

export type BindDeferredvmtPeers = {
  FSe: (...args: unknown[]) => unknown;
  ISe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  al: (...args: unknown[]) => unknown;
  au: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fl: (...args: unknown[]) => unknown;
  jSe: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredvmtPeers | null = null;

/** Wire bindDeferredvmt peers once companions land. */
export function setBindDeferredvmtPeers(next: BindDeferredvmtPeers): void {
  peers = next;
}

/**
 * Bundle export `vmt` / internal `LSe`.
 */
export function bindDeferredvmt() {
  if (peers == null) {
    throw new Error("bindDeferredvmt peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), peers.jSe(), FSe = peers.sl({
      id: peers.X().transform(peers.au),
      name: peers.X(),
      rootPaths: peers.ol(peers.X()),
      createdAt: peers.rl(),
      updatedAt: peers.rl()
    }), ISe = peers.fl(peers.X(), peers.al());
  });
}
