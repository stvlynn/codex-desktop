// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `TDa` / export `PP` — branch API + seed local conversation state.

type ScopeLike = {
  get: (atom: unknown, conversationId?: string) => any;
  set: (atom: unknown, conversationId: string, value: unknown) => void;
};

export type BranchConversationResult = {
  clientThreadId: string;
  projectId: string | null;
};

type BranchDeps = {
  conversationsApiAtom: unknown;
  projectIdAtom: unknown;
  tppExecutionTargetAtom: unknown;
  conversationOriginAtom: unknown;
  branchOriginAtom: unknown;
  normalizeConversationId: (conversationId: string) => string;
  normalizeAsyncStatus: (status: unknown) => unknown;
  moderationDisclaimersByMessageId: (conversation: unknown) => unknown;
  seedConversationState: (
    scope: ScopeLike,
    state: Record<string, unknown>,
  ) => void;
};

let deps: BranchDeps | null = null;

export function setBranchConversationAtMessageDeps(next: BranchDeps): void {
  deps = next;
}

/** Bundle `TDa` / export `PP`. */
export async function branchConversationAtMessage(
  scope: ScopeLike,
  {
    conversationId,
    messageId,
  }: {
    conversationId: string;
    messageId: string;
  },
): Promise<BranchConversationResult> {
  if (deps == null) {
    throw new Error(
      "branchConversationAtMessage deps have not been configured",
    );
  }
  const { clientThreadId, conversation } = await scope
    .get(deps.conversationsApiAtom)
    .branch({ conversationId, messageId });
  const projectId =
    conversation.gizmo_id ?? scope.get(deps.projectIdAtom, conversationId);
  const tppExecutionTarget = scope.get(
    deps.tppExecutionTargetAtom,
    conversationId,
  );
  deps.seedConversationState(scope, {
    asyncStatus: deps.normalizeAsyncStatus(conversation.async_status),
    conversationId: clientThreadId,
    conversationOrigin:
      conversation.conversation_origin ??
      (tppExecutionTarget == null
        ? scope.get(deps.conversationOriginAtom, conversationId)
        : "tpp"),
    currentNode: conversation.current_node,
    error: null,
    mapping: conversation.mapping,
    moderationDisclaimersByMessageId:
      deps.moderationDisclaimersByMessageId(conversation),
    projectId,
    status: "idle",
    streamRequestId: null,
    title: conversation.title?.trim() || null,
    tppExecutionTarget,
  });
  scope.set(deps.branchOriginAtom, clientThreadId, {
    conversationId: deps.normalizeConversationId(conversationId),
    messageId,
  });
  return { clientThreadId, projectId };
}
