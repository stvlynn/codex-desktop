// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Krc`) / export `Zp`.

export type BindDeferredConversationZpPeers = {
  Ea: (...args: unknown[]) => unknown;
  F1: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  P1: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vrc: (...args: unknown[]) => unknown;
  connectionGroups: (...args: unknown[]) => unknown;
  pendingStableWorktrees: (...args: unknown[]) => unknown;
  recentRenderableThreadKeys: (...args: unknown[]) => unknown;
  tZi: (...args: unknown[]) => unknown;
  visibleCloudThreadKeys: (...args: unknown[]) => unknown;
  visibleRecentChatThreadKeys: (...args: unknown[]) => unknown;
  visibleUnpinnedProjectGroups: (...args: unknown[]) => unknown;
  zrc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationZpPeers | null = null;

/** Wire bindDeferredConversationZp peers once companions land. */
export function setBindDeferredConversationZpPeers(
  next: BindDeferredConversationZpPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zp` / internal `Krc`.
 */
export function bindDeferredConversationZp() {
  if (peers == null) {
    throw new Error("bindDeferredConversationZp peers are not configured");
  }

  return peers.Ea(peers.Q, (e) => {
    let t = (e) => ({
        connectionGroups: e.connectionGroups,
        effectiveSidebarOrganizeMode: e.effectiveSidebarOrganizeMode,
        hasAnyProjectRows: e.hasAnyProjectRows,
        hasConnectedRemoteHosts: e.hasConnectedRemoteHosts,
        hasUnpinnedProjectRows: e.hasUnpinnedProjectRows,
        isChronologicalList: e.isChronologicalList,
        isWorkspaceRootOptionsLoading: e.isWorkspaceRootOptionsLoading,
        pendingStableWorktrees: e.pendingStableWorktrees,
        projectSidebarEnabled: e.projectSidebarEnabled,
        recentRenderableThreadKeys: e.recentRenderableThreadKeys,
        showProjectsEmptyState: e.showProjectsEmptyState,
        showProjectsSection: e.showProjectsSection,
        showRecent: e.showRecent,
        showRecentChatsSection: e.showRecentChatsSection,
        visibleCloudThreadKeys: e.visibleCloudThreadKeys,
        visibleRecentChatThreadKeys: e.visibleRecentChatThreadKeys,
        visibleUnpinnedProjectGroups: e.visibleUnpinnedProjectGroups,
      }),
      n = null;
    return peers.Ma(peers.Q, ({ get: r }) => {
      let i = r(peers.F1, e),
        a = t(i);
      return (
        (n = peers.Vrc(n, {
          ...a,
          connectionGroups: peers.tZi(
            n?.connectionGroups ?? [],
            a.connectionGroups,
          ),
          pendingStableWorktrees: peers.P1(
            n?.pendingStableWorktrees ?? [],
            a.pendingStableWorktrees,
          ),
          recentRenderableThreadKeys: peers.P1(
            n?.recentRenderableThreadKeys ?? [],
            a.recentRenderableThreadKeys,
          ),
          visibleRecentChatThreadKeys: peers.P1(
            n?.visibleRecentChatThreadKeys ?? [],
            a.visibleRecentChatThreadKeys,
          ),
          visibleCloudThreadKeys: peers.P1(
            n?.visibleCloudThreadKeys ?? [],
            a.visibleCloudThreadKeys,
          ),
          visibleUnpinnedProjectGroups: peers.zrc(
            n?.visibleUnpinnedProjectGroups ?? [],
            a.visibleUnpinnedProjectGroups,
          ),
        })),
        n
      );
    });
  });
}
