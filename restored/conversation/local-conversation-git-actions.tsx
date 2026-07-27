// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GYo`) / export `BE`.

export type LocalConversationGitActionsPeers = {
  FFi: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  KYo: (...args: unknown[]) => unknown;
  No: (...args: unknown[]) => unknown;
  W_: (...args: unknown[]) => unknown;
  XJ: (...args: unknown[]) => unknown;
  available: (...args: unknown[]) => unknown;
  qYo: (...args: unknown[]) => unknown;
  yJ: (...args: unknown[]) => unknown;
};
let peers: LocalConversationGitActionsPeers | null = null;

/** Wire LocalConversationGitActions peers once companions land. */
export function setLocalConversationGitActionsPeers(
  next: LocalConversationGitActionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `BE` / internal `GYo`.
 */
export function LocalConversationGitActions(props: unknown) {
  const KYo = peers.KYo;
  const No = peers.No;
  if (peers == null) {
    throw new Error("LocalConversationGitActions peers are not configured");
  }
  let {
      conversationId = null,
      target,
      codexWorktree,
      surface,
      hidePullRequestSection = false,
      hideCreatePullRequestAction = false,
      branchControlOwnsDetachedSetup = false,
      reviewToolbarCompact = false,
      onCreateBranchActionReady,
      onCreatePullRequestActionReady,
      deferQueries = false,
      showCreatePullRequestActionWhenDeferred = false,
    } = props,
    x = peers.W_(target.hostId),
    S = {
      hostConfig: x,
      operationSource: "local_conversation_git_actions",
    };
  let C = !deferQueries,
    w = {
      enabled: C,
    };
  let T = peers.Fo(peers.FFi, S, w),
    E = deferQueries || T.data?.available !== true,
    D = {
      codexWorktree,
      conversationId,
      target,
    };
  let O = (
    <KYo
      deferGitQueries={E}
      hideCreatePullRequestAction={hideCreatePullRequestAction}
      hidePullRequestSection={hidePullRequestSection}
      reviewToolbarCompact={reviewToolbarCompact}
      surface={surface}
      branchControlOwnsDetachedSetup={branchControlOwnsDetachedSetup}
      onCreateBranchActionReady={onCreateBranchActionReady}
      onCreatePullRequestActionReady={onCreatePullRequestActionReady}
      showCreatePullRequestActionWhenDeferred={
        showCreatePullRequestActionWhenDeferred
      }
    />
  );
  return (
    <No scope={peers.yJ} value={D}>
      {O}
    </No>
  );
}
