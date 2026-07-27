// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `wSo`) / export `nA`.

export type BuildPendingWorktreeForkEntriesPeers = {
  threadIndexAtom: unknown;
  openThreadIdsAtom: unknown;
  forkedFromAtom: unknown;
  titleAtom: unknown;
  readPendingWorktrees: (
    get: AtomStore["get"],
    key: string,
  ) =>
    | Array<{
        hostId: unknown;
        launchMode: string;
        initialThreadTitle?: string | null;
        id: unknown;
        sourceConversationId: unknown;
      }>
    | null
    | undefined;
  assemble: (seed: ForkEntry, values: Iterable<ForkEntry>) => unknown;
};

let peers: BuildPendingWorktreeForkEntriesPeers | null = null;

/** Wire buildPendingWorktreeForkEntries peers once companions land. */
export function setBuildPendingWorktreeForkEntriesPeers(
  next: BuildPendingWorktreeForkEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nA` / internal `wSo`.
 * Build fork-entry map from thread index, open threads, and pending worktrees.
 */
export type AtomStore = {
  get: (atom: unknown, key?: unknown) => unknown;
};

export type ForkEntry = {
  conversationId: unknown;
  forkedFromId: unknown;
  title: unknown;
};

export function buildPendingWorktreeForkEntries(
  store: AtomStore,
  conversationId: unknown,
  hostId: unknown,
): unknown {
  if (peers == null) {
    throw new Error("BuildPendingWorktreeForkEntries peers are not configured");
  }
  const map = new Map<unknown, ForkEntry>();
  for (const row of store.get(peers.threadIndexAtom, hostId) as Array<{
    conversationId: unknown;
    forkedFromId?: unknown;
    title: unknown;
  }>) {
    map.set(row.conversationId, {
      conversationId: row.conversationId,
      forkedFromId: row.forkedFromId ?? null,
      title: row.title,
    });
  }
  for (const id of store.get(peers.openThreadIdsAtom, hostId) as unknown[]) {
    map.set(id, {
      conversationId: id,
      forkedFromId: store.get(peers.forkedFromAtom, id),
      title: store.get(peers.titleAtom, id),
    });
  }
  for (const pending of peers.readPendingWorktrees(
    store.get,
    "pending_worktrees",
  ) ?? []) {
    if (
      pending.hostId !== hostId ||
      pending.launchMode !== "fork-conversation" ||
      pending.initialThreadTitle == null
    ) {
      continue;
    }
    map.set(pending.id, {
      conversationId: pending.id,
      forkedFromId: pending.sourceConversationId,
      title: pending.initialThreadTitle,
    });
  }
  return peers.assemble(
    map.get(conversationId) ?? {
      conversationId,
      forkedFromId: store.get(peers.forkedFromAtom, conversationId),
      title: store.get(peers.titleAtom, conversationId),
    },
    map.values(),
  );
}
