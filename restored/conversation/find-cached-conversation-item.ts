// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Bja` / export `FN` — locate a conversation item across query caches.

type QueryClientLike = {
  getQueryData: (key: unknown) => unknown;
  getQueriesData: (filters: {
    queryKey: unknown[];
  }) => Array<[unknown, unknown]>;
};

type ConversationListItem = {
  id: string;
  title?: string | null;
  [key: string]: unknown;
};

type CachedConversationHit = {
  projectId: string | null;
  title: string | null;
};

type FindDeps = {
  recentListQueryKey: () => unknown;
  getRecentListFallback: () =>
    | Array<{ item: ConversationListItem }>
    | null
    | undefined;
  infiniteListQueryKeys: string[];
  getArchivedPages: () =>
    | { pages: Array<{ items: ConversationListItem[] }> }
    | null
    | undefined;
  projectIdFromItem: (item: ConversationListItem) => string | null;
  normalizeTitle: (title: string) => string;
};

let deps: FindDeps | null = null;

export function setFindCachedConversationItemDeps(next: FindDeps): void {
  deps = next;
}

function pagesItems(data: unknown): ConversationListItem[] {
  if (data == null || typeof data !== "object") return [];
  const pages = (data as { pages?: Array<{ items?: ConversationListItem[] }> })
    .pages;
  if (!Array.isArray(pages)) return [];
  return pages.flatMap((page) => page?.items ?? []);
}

/** Bundle `Bja` / export `FN`. */
export function findCachedConversationItem(queryClient: QueryClientLike, conversationId: string): CachedConversationHit | null {
  if (deps == null) {
    throw new Error("findCachedConversationItem deps have not been configured");
  }
  const fromRecent = (
    (queryClient.getQueryData(deps.recentListQueryKey()) as
      | Array<{ item: ConversationListItem }>
      | undefined) ?? deps.getRecentListFallback()
  )?.find(({ item }) => item.id === conversationId)?.item;

  const fromInfinite =
    fromRecent ??
    deps.infiniteListQueryKeys
      .flatMap((key) => queryClient.getQueriesData({ queryKey: [key] }))
      .flatMap(([, data]) => pagesItems(data))
      .find((item) => item.id === conversationId);

  const item =
    fromInfinite ??
    pagesItems(deps.getArchivedPages()).find(
      (entry) => entry.id === conversationId,
    );

  if (item == null) return null;
  const title = deps.normalizeTitle(item.title ?? "");
  return {
    projectId: deps.projectIdFromItem(item),
    title: title.length > 0 ? title : null,
  };
}
