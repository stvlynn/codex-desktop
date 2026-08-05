// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ex`) / export `b9`.

export type CollabAgentToolCallPeers = {
  ann: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g_: (...args: unknown[]) => unknown;
  onn: (...args: unknown[]) => unknown;
  wSt: (...args: unknown[]) => unknown;
};

let peers: CollabAgentToolCallPeers | null = null;

/** Wire collabAgentToolCall peers once companions land. */
export function setCollabAgentToolCallPeers(
  next: CollabAgentToolCallPeers,
): void {
  peers = next;
}

/**
 * Bundle export `b9` / internal `Ex`.
 */
export function collabAgentToolCall() {
  if (peers == null) {
    throw new Error("collabAgentToolCall peers are not configured");
  }

  return peers.e(() => {
    (peers.wSt(),
      peers.g_(),
      (ann = `Interrupted before the steer was accepted.`),
      (onn = `Run ended before the steer was accepted.`));
  });
}
