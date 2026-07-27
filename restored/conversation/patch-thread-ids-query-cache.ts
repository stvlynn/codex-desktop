// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `EK`) / export `tA`.

export type PatchThreadIdsQueryCachePeers = {
  threadIdsQueryAtom: unknown;
  activeConversationAtom: unknown;
  selectionAtom: unknown;
  arraysEqual: (a: unknown[], b: unknown[]) => boolean;
  insertThreadId: (args: {
    threadIds: string[];
    threadId: string;
    beforeThreadId: string | null;
  }) => string[];
  isActiveConversation: (
    store: any,
    activeConversationId: unknown,
    threadId: string,
  ) => boolean;
  persistPin: (
    threadId: string,
    pinned: boolean,
    beforeThreadId?: string | null,
  ) => Promise<unknown>;
  afterPin: (store: any, threadId: string) => void;
  reportError: (error: unknown) => void;
};

let peers: PatchThreadIdsQueryCachePeers | null = null;

/** Wire thread-id cache peers once companions land. */
export function setPatchThreadIdsQueryCachePeers(
  next: PatchThreadIdsQueryCachePeers,
): void {
  peers = next;
}

/**
 * Bundle export `tA` / internal `EK`.
 * Optimistically patch pinned thread ids, then persist.
 */
export async function patchThreadIdsQueryCache(
  store: {
    query: { snapshot: (atom: unknown) => any };
    get: (atom: unknown) => any;
    set: (atom: unknown, value: unknown) => void;
  },
  threadId: string,
  pinned: boolean,
  beforeThreadId?: string | null,
): Promise<boolean> {
  if (peers == null) {
    throw new Error("PatchThreadIdsQueryCache peers are not configured");
  }
  const snapshot = store.query.snapshot(peers.threadIdsQueryAtom);
  const previous = snapshot.getData() as { threadIds: string[] } | null;
  const nextData =
    previous == null
      ? null
      : {
          threadIds: pinned
            ? peers.insertThreadId({
                threadIds: previous.threadIds,
                threadId,
                beforeThreadId: beforeThreadId ?? null,
              })
            : previous.threadIds.filter((id) => id !== threadId),
        };
  const activeConversationId = store.get(peers.activeConversationAtom);
  const previousSelection =
    activeConversationId != null &&
    peers.isActiveConversation(store, activeConversationId, threadId)
      ? store.get(peers.selectionAtom)
      : undefined;
  if (previousSelection !== undefined) store.set(peers.selectionAtom, null);
  if (nextData != null) snapshot.setData(nextData);
  try {
    if (beforeThreadId === undefined) {
      await peers.persistPin(threadId, pinned);
    } else {
      await peers.persistPin(threadId, pinned, beforeThreadId);
    }
    if (pinned) peers.afterPin(store, threadId);
    return true;
  } catch (error) {
    const current = snapshot.getData() as { threadIds: string[] } | null;
    let restored = nextData == null;
    if (
      nextData != null &&
      current != null &&
      peers.arraysEqual(current.threadIds, nextData.threadIds)
    ) {
      snapshot.setData(previous);
      restored = true;
    }
    if (
      restored &&
      previousSelection !== undefined &&
      store.get(peers.activeConversationAtom) === activeConversationId
    ) {
      store.set(
        peers.selectionAtom,
        store.get(peers.selectionAtom) == null ? previousSelection : null,
      );
    }
    peers.reportError(error);
    return false;
  }
}
