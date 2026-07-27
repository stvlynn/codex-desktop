// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Zja` / export `BN` — rename + patch conversation caches.

type ScopeLike = {
  get: (atom: unknown) => {
    rename: (conversationId: string, title: string) => Promise<unknown>;
  };
  query: {
    snapshot: (
      atom: unknown,
      conversationId: string,
    ) => {
      setData: (
        updater: (prev: { title?: string } | null | undefined) => unknown,
      ) => void;
    };
  };
  queryClient: unknown;
};

type RenameDeps = {
  conversationsApiAtom: unknown;
  conversationDetailAtom: unknown;
  patchTitleCaches: (args: {
    conversationId: string;
    scope: ScopeLike;
    title: string;
  }) => void;
  patchQueryCaches: (
    queryClient: unknown,
    conversationId: string,
    patch: (item: Record<string, unknown>) => Record<string, unknown>,
  ) => void;
  invalidateConversationLists: (queryClient: unknown) => void;
};

let deps: RenameDeps | null = null;

export function setRenameConversationTitleDeps(next: RenameDeps): void {
  deps = next;
}

/** Bundle `Zja` / export `BN`. */
export async function renameConversationTitle({
  scope,
  conversationId,
  previousTitle,
  title,
}: {
  scope: ScopeLike;
  conversationId: string;
  previousTitle: string;
  title: string;
}): Promise<void> {
  if (deps == null) {
    throw new Error("renameConversationTitle deps have not been configured");
  }
  const next = title.trim();
  if (next.length === 0 || next === previousTitle.trim()) return;
  await scope.get(deps.conversationsApiAtom).rename(conversationId, next);
  deps.patchTitleCaches({ conversationId, scope, title: next });
  deps.patchQueryCaches(scope.queryClient, conversationId, (item) => ({
    ...item,
    title: next,
  }));
  deps.invalidateConversationLists(scope.queryClient);
  scope.query
    .snapshot(deps.conversationDetailAtom, conversationId)
    .setData((prev) => (prev == null ? prev : { ...prev, title: next }));
}
