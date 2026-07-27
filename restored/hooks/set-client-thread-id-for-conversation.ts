// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VJn`) / export `A8`.

export type A8Peers = {
  JJn: (...args: unknown[]) => unknown;
};
let peers: A8Peers | null = null;

/** Wire A8 peers once companions land. */
export function setA8Peers(next: A8Peers): void {
  peers = next;
}

/**
 * Bundle export `A8` / internal `VJn`.
 */
export function A8(
  e: unknown,
  { clientThreadId, conversationId }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("A8 peers are not configured");
  }
  peers.JJn(e, conversationId, clientThreadId);
}
