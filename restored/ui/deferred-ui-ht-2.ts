// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `j0o`) / export `HT`.

export type DeferredUiHTPeers = {
  E0o: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  VA: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  nj: (...args: unknown[]) => unknown;
  zA: (...args: unknown[]) => unknown;
};

let peers: DeferredUiHTPeers | null = null;

/** Wire deferredUiHT peers once companions land. */
export function setDeferredUiHTPeers(next: DeferredUiHTPeers): void {
  peers = next;
}

/**
 * Bundle export `HT` / internal `j0o`.
 */
export function deferredUiHT() {
  if (peers == null) {
    throw new Error("deferredUiHT peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.nj, e);
    if (n?.kind === `local` && n.conversation == null)
      return n.pendingWorktree.isPinned;
    switch (peers.zA(e)?.kind) {
      case `local`:
      case `remote`: {
        let r =
          n?.kind === `local` && n.conversation != null
            ? n.conversation.id
            : peers.VA(e);
        return r != null && t(peers.E0o).includes(r);
      }
      case void 0:
        return !1;
    }
  });
}
