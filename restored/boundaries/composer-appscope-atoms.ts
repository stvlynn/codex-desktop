// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xOa`) / export `BP`.

export type ComposerAppScopeAtomsPeers = {
  $V: (...args: unknown[]) => unknown;
  JV: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  tH: (...args: unknown[]) => unknown;
};

let peers: ComposerAppScopeAtomsPeers | null = null;

/** Wire composerAppScopeAtoms peers once companions land. */
export function setComposerAppScopeAtomsPeers(next: ComposerAppScopeAtomsPeers): void {
  peers = next;
}

/**
 * Bundle export `BP` / internal `xOa`.
 */
export function composerAppScopeAtoms() {
  if (peers == null) {
    throw new Error("composerAppScopeAtoms peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    let n = peers.JV(t, e);
    return n != null && t(peers.$V, n) ? t(peers.tH, n) : null;
  });
}
