// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qrc`) / export `Xp`.

export type BindDeferredConversationXpPeers = {
  Ea: (...args: unknown[]) => unknown;
  F1: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  P1: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vrc: (...args: unknown[]) => unknown;
  pinnedProjectGroups: (...args: unknown[]) => unknown;
  pinnedThreadKeys: (...args: unknown[]) => unknown;
  zrc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationXpPeers | null = null;

/** Wire bindDeferredConversationXp peers once companions land. */
export function setBindDeferredConversationXpPeers(next: BindDeferredConversationXpPeers): void {
  peers = next;
}

/**
 * Bundle export `Xp` / internal `qrc`.
 */
export function bindDeferredConversationXp() {
  if (peers == null) {
    throw new Error("bindDeferredConversationXp peers are not configured");
  }

  return peers.Ea(peers.Q, e => {
    let t = e => ({
        isWorkspaceRootOptionsLoading: e.isWorkspaceRootOptionsLoading,
        pinnedProjectGroups: e.pinnedProjectGroups,
        pinnedThreadKeys: e.pinnedThreadKeys
      }),
      n = null;
    return peers.Ma(peers.Q, ({
      get: r
    }) => {
      let i = r(peers.F1, e),
        a = t(i);
      return n = peers.Vrc(n, {
        ...a,
        pinnedProjectGroups: peers.zrc(n?.pinnedProjectGroups ?? [], a.pinnedProjectGroups),
        pinnedThreadKeys: peers.P1(n?.pinnedThreadKeys ?? [], a.pinnedThreadKeys)
      }), n;
    });
  });
}
