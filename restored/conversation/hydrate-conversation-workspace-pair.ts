// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `NPs`) / export `q_`.

export type HydrateConversationWorkspacePairPeers = {
  ensureHostHydrated: (store: unknown, hostId: unknown) => Promise<void> | void;
  hydrateConversationCwd: (
    store: unknown,
    args: { conversationId: unknown; cwd: unknown; hostId: unknown },
  ) => Promise<unknown> | unknown;
};

let peers: HydrateConversationWorkspacePairPeers | null = null;

/** Wire host/cwd hydration once companions land. */
export function setHydrateConversationWorkspacePairPeers(
  next: HydrateConversationWorkspacePairPeers,
): void {
  peers = next;
}

/**
 * Bundle export `q_` / internal `NPs`.
 * Hydrate host then conversation cwd pair.
 */
export async function hydrateConversationWorkspacePair(
  store: unknown,
  args: { conversationId: unknown; cwd: unknown; hostId: unknown },
): Promise<unknown> {
  if (peers == null) {
    throw new Error(
      "HydrateConversationWorkspacePair peers are not configured",
    );
  }
  await peers.ensureHostHydrated(store, args.hostId);
  return peers.hydrateConversationCwd(store, args);
}
