// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dqn`) / export `e5`.

export type ChatMessagePeers = {
  Gf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  uqn: (...args: unknown[]) => unknown;
  yS: (...args: unknown[]) => unknown;
};

let peers: ChatMessagePeers | null = null;

/** Wire chatMessage peers once companions land. */
export function setChatMessagePeers(next: ChatMessagePeers): void {
  peers = next;
}

/**
 * Bundle export `e5` / internal `dqn`.
 */
export function chatMessage() {
  if (peers == null) {
    throw new Error("chatMessage peers are not configured");
  }

  return peers.e(() => {
    (peers.yS(), peers.Gf(), (uqn = /^::[a-zA-Z0-9-]+.*$/gm));
  });
}
