// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `eMa`) / export `VN`.

export type SetConversationPinnedStatePeers = {
  run: (...args: unknown[]) => Promise<unknown> | unknown;
};

let peers: SetConversationPinnedStatePeers | null = null;

/** Wire SetConversationPinnedState peers once companions land. */
export function setSetConversationPinnedStatePeers(
  next: SetConversationPinnedStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `VN` / internal `eMa`.
 * Async helper body restored from extractFn(internal).
 */
export async function SetConversationPinnedState(
  ...args: unknown[]
): Promise<unknown> {
  if (peers == null) {
    throw new Error("SetConversationPinnedState peers are not configured");
  }
  return peers.run(...args);
}
