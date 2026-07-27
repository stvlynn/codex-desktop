// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `mmo`) / export `_j`.

export type UsePullRequestCommentsForConversationArgs = {
  conversationId: unknown;
  enablePullRequestComments?: boolean;
  localConversationId?: unknown;
};

export type UsePullRequestCommentsForConversationPeers = {
  useLocalComments: (
    conversationId: unknown,
    localConversationId: unknown,
  ) => {
    comments: unknown;
    modelComments: unknown;
    setComments: unknown;
  };
  canonicalizeId: (id: unknown) => unknown;
  headBranchAtom: unknown;
  cwdAtom: unknown;
  hostIdAtom: unknown;
  useAtomValue: (atom: unknown, id: unknown) => unknown;
  useRemoteComments: (args: {
    cwd: unknown;
    headBranch: unknown;
    hostId: unknown;
    operationSource: "diff_comment_sources";
    enabled: boolean;
  }) => unknown;
};

let peers: UsePullRequestCommentsForConversationPeers | null = null;

/** Wire PR comments peers once companions land. */
export function setUsePullRequestCommentsForConversationPeers(
  next: UsePullRequestCommentsForConversationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_j` / internal `mmo`.
 * Local + remote pull-request comments for a conversation.
 */
export function usePullRequestCommentsForConversation(
  args: UsePullRequestCommentsForConversationArgs,
): {
  comments: unknown;
  modelComments: unknown;
  setComments: unknown;
  remote: unknown;
} {
  if (peers == null) {
    throw new Error(
      "UsePullRequestCommentsForConversation peers are not configured",
    );
  }
  const {
    conversationId,
    enablePullRequestComments = true,
    localConversationId,
  } = args;
  const local = peers.useLocalComments(conversationId, localConversationId);
  const id = peers.canonicalizeId(String(conversationId));
  const headBranch = peers.useAtomValue(peers.headBranchAtom, id) ?? "";
  const cwd = peers.useAtomValue(peers.cwdAtom, id);
  const hostId = peers.useAtomValue(peers.hostIdAtom, id) ?? undefined;
  const remote = peers.useRemoteComments({
    cwd,
    headBranch,
    hostId,
    operationSource: "diff_comment_sources",
    enabled: enablePullRequestComments,
  });
  return {
    comments: local.comments,
    modelComments: local.modelComments,
    setComments: local.setComments,
    remote,
  };
}
