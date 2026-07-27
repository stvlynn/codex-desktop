// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `tCo`) / export `Qk`.

export type UseCanPinThreadActionOptions = {
  canPin?: boolean;
};

export type UseCanPinThreadActionPeers = {
  useStore: () => {
    /* store passed to patchThreadIdsQueryCache */
  };
  useThreadIdsQuery: () => { data?: { threadIds?: string[] } };
  patchThreadIdsQueryCache: (
    store: unknown,
    threadId: string,
    pinned: boolean,
  ) => void;
};

let peers: UseCanPinThreadActionPeers | null = null;

/** Wire pin-action hook peers once companions land. */
export function setUseCanPinThreadActionPeers(
  next: UseCanPinThreadActionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qk` / internal `tCo`.
 * Return pin state + toggle for a conversation thread.
 */
export function useCanPinThreadAction(
  conversationId: string | null | undefined,
  options?: UseCanPinThreadActionOptions,
): { isPinned: boolean; togglePin: () => void } {
  if (peers == null) {
    throw new Error("UseCanPinThreadAction peers are not configured");
  }
  const { canPin = true } = options ?? {};
  const store = peers.useStore();
  const { data } = peers.useThreadIdsQuery();
  const threadIds = data?.threadIds ?? [];
  const isPinned =
    canPin && conversationId != null && threadIds.includes(conversationId);
  const togglePin = () => {
    if (!canPin || conversationId == null) return;
    peers!.patchThreadIdsQueryCache(store, conversationId, !isPinned);
  };
  return { isPinned, togglePin };
}
