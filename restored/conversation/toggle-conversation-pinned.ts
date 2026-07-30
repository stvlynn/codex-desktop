// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tMa` / export `UN` — flip pin / is_starred for a conversation.

type ConversationLike = {
  id: string;
  is_starred?: boolean;
};

type ScopeLike = {
  get: (atom: unknown) => {
    setPinned: (id: string, pinned: boolean) => Promise<unknown>;
  };
  query: {
    snapshot: (
      atom: unknown,
      conversationId: string,
    ) => {
      getData: () => { is_starred?: boolean } | null | undefined;
      setData: (
        updater: (prev: { is_starred?: boolean } | null | undefined) => unknown,
      ) => void;
    };
  };
  queryClient: unknown;
};

type PinDeps = {
  conversationsApiAtom: unknown;
  conversationDetailAtom: unknown;
  applyPinnedOptimistic: (
    queryClient: unknown,
    conversation: ConversationLike,
    isPinned: boolean,
  ) => void;
  invalidateConversationLists: (queryClient: unknown) => void;
  pendingById: Map<string, { isPinned: boolean; promise: Promise<void> }>;
};

let deps: PinDeps | null = null;

export function setToggleConversationPinnedDeps(next: PinDeps): void {
  deps = next;
}

async function setPinned(
  scope: ScopeLike,
  conversation: ConversationLike,
  isPinned: boolean,
): Promise<void> {
  if (deps == null) {
    throw new Error("toggleConversationPinned deps have not been configured");
  }
  const snapshot = scope.query.snapshot(
    deps.conversationDetailAtom,
    conversation.id,
  );
  const previous =
    snapshot.getData()?.is_starred ?? conversation.is_starred === true;
  deps.applyPinnedOptimistic(scope.queryClient, conversation, isPinned);
  snapshot.setData((prev) =>
    prev == null ? prev : { ...prev, is_starred: isPinned },
  );
  try {
    await scope
      .get(deps.conversationsApiAtom)
      .setPinned(conversation.id, isPinned);
  } catch (error) {
    deps.applyPinnedOptimistic(scope.queryClient, conversation, previous);
    snapshot.setData((prev) =>
      prev == null || prev.is_starred !== isPinned
        ? prev
        : { ...prev, is_starred: previous },
    );
    throw error;
  } finally {
    deps.invalidateConversationLists(scope.queryClient);
  }
}

/** Bundle `tMa` / export `UN`. */
export function toggleConversationPinned({
  scope,
  conversation,
}: {
  scope: ScopeLike;
  conversation: ConversationLike;
}): Promise<void> {
  if (deps == null) {
    throw new Error("toggleConversationPinned deps have not been configured");
  }
  const pending = deps.pendingById.get(conversation.id);
  const nextPinned = !(pending?.isPinned ?? conversation.is_starred === true);
  if (pending?.isPinned === nextPinned) return pending.promise;
  const promise =
    pending == null
      ? setPinned(scope, conversation, nextPinned)
      : pending.promise
          .catch(() => undefined)
          .then(() => setPinned(scope, conversation, nextPinned));
  deps.pendingById.set(conversation.id, {
    isPinned: nextPinned,
    promise,
  });
  return promise.finally(() => {
    if (deps?.pendingById.get(conversation.id)?.promise === promise) {
      deps.pendingById.delete(conversation.id);
    }
  });
}

// --- missing-relative-export aliases ---
export { toggleConversationPinned as ToggleConversationPinned };
