// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sxo`) / export `kA`.

export type KAPeers = {
  Bxo: (...args: unknown[]) => unknown;
  Exo: (...args: unknown[]) => unknown;
};
let peers: KAPeers | null = null;

/** Wire kA peers once companions land. */
export function setKAPeers(next: KAPeers): void {
  peers = next;
}

/**
 * Bundle export `kA` / internal `Sxo`.
 */
export function kA(
  e: unknown,
  {
    pendingWorktreeId,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("kA peers are not configured");
  }
  e.set(peers.Bxo, pendingWorktreeId, {
    sourceWorkspaceRoot,
    state: peers.Exo(e, sourceConversationId),
  });
}
