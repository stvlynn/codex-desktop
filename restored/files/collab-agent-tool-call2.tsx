// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jtn`) / export `w9`.

export type BindBindCollabAgentToolCall2Peers = {
  Atn: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindCollabAgentToolCall2Peers | null = null;

/** Wire bindBindCollabAgentToolCall2 peers once companions land. */
export function setBindBindCollabAgentToolCall2Peers(
  next: BindBindCollabAgentToolCall2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `w9` / internal `jtn`.
 */
export function bindBindCollabAgentToolCall2() {
  if (peers == null) {
    throw new Error("bindBindCollabAgentToolCall2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      (Atn = /^(?:data:image\/|https?:\/\/|file:\/\/|app:\/\/|\/@fs)/i));
  });
}
