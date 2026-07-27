// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xxo`) / export `OA`.

export type LinkSourceTargetConversationIdsPeers = {
  Exo: (...args: unknown[]) => unknown;
  bT: (...args: unknown[]) => unknown;
  jxo: (...args: unknown[]) => unknown;
  zxo: (...args: unknown[]) => unknown;
};
let peers: LinkSourceTargetConversationIdsPeers | null = null;

/** Wire linkSourceTargetConversationIds peers once companions land. */
export function setLinkSourceTargetConversationIdsPeers(
  next: LinkSourceTargetConversationIdsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `OA` / internal `xxo`.
 */
export function linkSourceTargetConversationIds(
  e: unknown,
  { sourceConversationId, targetConversationId }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("linkSourceTargetConversationIds peers are not configured");
  }
  e.set(
    peers.zxo,
    targetConversationId,
    peers.jxo(
      peers.Exo(e, sourceConversationId),
      peers.bT(e, targetConversationId),
    ),
  );
}
