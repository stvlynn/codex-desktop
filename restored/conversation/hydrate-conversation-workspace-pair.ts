// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NPs`) / export `q_`.

export type HydrateConversationWorkspacePairPeers = {
  IPs: (...args: unknown[]) => unknown;
  LPs: (...args: unknown[]) => unknown;
};
let peers: HydrateConversationWorkspacePairPeers | null = null;

/** Wire hydrateConversationWorkspacePair peers once companions land. */
export function setHydrateConversationWorkspacePairPeers(
  next: HydrateConversationWorkspacePairPeers,
): void {
  peers = next;
}

/**
 * Bundle export `q_` / internal `NPs`.
 */
export async function hydrateConversationWorkspacePair(
  e: unknown,
  { conversationId, cwd, hostId }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error(
      "hydrateConversationWorkspacePair peers are not configured",
    );
  }
  return (
    await peers.LPs(e, hostId),
    peers.IPs(e, {
      conversationId,
      cwd,
      hostId,
    })
  );
}
