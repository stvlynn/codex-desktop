// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qja` / export `jN` — archive conversation with undo (was mislabeled hydrate).

import {
  CHATGPT_CONVERSATIONS_QUERY_KEY,
  CHATGPT_PROJECT_CONVERSATION_QUERY_ROOTS,
} from "./chatgpt-conversation-query-keys";

type QueryClientLike = {
  getQueriesData: (filters: {
    queryKey: unknown[];
  }) => Array<[unknown, unknown]>;
  getQueryData: (key: unknown) => unknown;
  setQueryData: (key: unknown, updater: (prev: unknown) => unknown) => void;
  invalidateQueries: (filters: { queryKey: unknown[] }) => Promise<unknown>;
};

type ScopeLike = {
  get: (atom: unknown) => any;
  set: (atom: unknown, conversationId: string, value: boolean) => void;
  queryClient: QueryClientLike;
};

export type ArchiveConversationHandle = {
  promise: Promise<"archived" | "undone">;
  undo: () => Promise<void>;
};

type ArchiveDeps = {
  /** Bundle `LMa` — archive-in-flight family atom. */
  archiveInFlightAtom: unknown;
  /** Bundle `MV` — conversations API atom. */
  conversationsApiAtom: unknown;
  /** Bundle `YV` — sidebar conversation-id list atom. */
  sidebarIdsAtom: unknown;
  pinnedListQueryKey: () => unknown;
  restoreListItem: (
    prev: unknown,
    snapshot: unknown,
    conversationId: string,
  ) => unknown;
  restorePinnedList: (
    prev: unknown,
    snapshot: unknown,
    conversationId: string,
  ) => unknown;
  restoreSidebarIds: (
    scope: ScopeLike,
    snapshot: unknown,
    conversationId: string,
  ) => void;
  removeFromListCaches: (
    queryClient: QueryClientLike,
    conversationId: string,
  ) => void;
  removeFromSidebar: (scope: ScopeLike, conversationId: string) => void;
  invalidateConversationLists: (queryClient: QueryClientLike) => void;
};

let deps: ArchiveDeps | null = null;
const pendingById = new Map<string, ArchiveConversationHandle>();

export function setArchiveConversationWithUndoDeps(next: ArchiveDeps): void {
  deps = next;
}

/** Bundle `Qja` / export `jN`. */
export function archiveConversationWithUndo({
  scope,
  conversationId,
}: {
  scope: ScopeLike;
  conversationId: string;
}): ArchiveConversationHandle {
  if (deps == null) {
    throw new Error(
      "archiveConversationWithUndo deps have not been configured",
    );
  }
  const existing = pendingById.get(conversationId);
  if (existing != null) return existing;

  scope.set(deps.archiveInFlightAtom, conversationId, true);
  const listSnapshots = scope.queryClient.getQueriesData({
    queryKey: [CHATGPT_CONVERSATIONS_QUERY_KEY],
  });
  const projectSnapshots = CHATGPT_PROJECT_CONVERSATION_QUERY_ROOTS.flatMap(
    (key) => scope.queryClient.getQueriesData({ queryKey: [key] }),
  );
  const pinnedSnapshot = scope.queryClient.getQueryData(
    deps.pinnedListQueryKey(),
  );
  const sidebarSnapshot = scope.get(deps.sidebarIdsAtom);

  let archived = false;
  let restored = false;
  let undone = false;
  let undoPromise: Promise<unknown> | null = null;

  const restoreCaches = (): void => {
    if (restored) return;
    restored = true;
    for (const [key, snapshot] of listSnapshots) {
      scope.queryClient.setQueryData(key, (prev) =>
        deps!.restoreListItem(prev, snapshot, conversationId),
      );
    }
    for (const [key, snapshot] of projectSnapshots) {
      scope.queryClient.setQueryData(key, (prev) =>
        deps!.restoreListItem(prev, snapshot, conversationId),
      );
    }
    scope.queryClient.setQueryData(deps!.pinnedListQueryKey(), (prev) =>
      deps!.restorePinnedList(prev, pinnedSnapshot, conversationId),
    );
    deps!.restoreSidebarIds(scope, sidebarSnapshot, conversationId);
  };

  const unarchive = (): Promise<unknown> => {
    undoPromise ??= scope
      .get(deps!.conversationsApiAtom)
      .setArchived(conversationId, false)
      .then(async () => {
        await Promise.all([
          scope.queryClient.invalidateQueries({
            queryKey: [CHATGPT_CONVERSATIONS_QUERY_KEY],
          }),
          ...CHATGPT_PROJECT_CONVERSATION_QUERY_ROOTS.map((key) =>
            scope.queryClient.invalidateQueries({ queryKey: [key] }),
          ),
          scope.queryClient.invalidateQueries({
            queryKey: deps!.pinnedListQueryKey() as unknown[],
          }),
        ]);
      })
      .catch((error: unknown) => {
        deps!.removeFromListCaches(scope.queryClient, conversationId);
        deps!.removeFromSidebar(scope, conversationId);
        throw error;
      });
    return undoPromise;
  };

  deps.removeFromListCaches(scope.queryClient, conversationId);
  deps.removeFromSidebar(scope, conversationId);

  const promise = scope
    .get(deps.conversationsApiAtom)
    .setArchived(conversationId, true)
    .then(
      async () => {
        archived = true;
        if (undone) {
          await unarchive();
          return "undone" as const;
        }
        deps!.removeFromListCaches(scope.queryClient, conversationId);
        return "archived" as const;
      },
      (error: unknown) => {
        restoreCaches();
        if (undone) return "undone" as const;
        throw error;
      },
    )
    .finally(() => {
      deps!.invalidateConversationLists(scope.queryClient);
      pendingById.delete(conversationId);
      scope.set(deps!.archiveInFlightAtom, conversationId, false);
    });

  const handle: ArchiveConversationHandle = {
    promise,
    undo: async () => {
      if (!undone) {
        undone = true;
        restoreCaches();
      }
      if (archived) await unarchive();
      else await promise;
    },
  };
  pendingById.set(conversationId, handle);
  return handle;
}
