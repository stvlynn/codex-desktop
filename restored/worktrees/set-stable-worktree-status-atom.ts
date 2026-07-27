// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QFo`) / export `setStableWorktreeStatusAtom`.

export type StableWorktreeStatusAtomPeers = {
  eIo: (...args: unknown[]) => unknown;
};
let peers: StableWorktreeStatusAtomPeers | null = null;

/** Wire setStableWorktreeStatusAtom peers once companions land. */
export function setStableWorktreeStatusAtomPeers(next: StableWorktreeStatusAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `setStableWorktreeStatusAtom` / internal `QFo`.
 */
export function setStableWorktreeStatusAtom(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setStableWorktreeStatusAtom peers are not configured");
  }
  e.set(peers.eIo, t);
}
