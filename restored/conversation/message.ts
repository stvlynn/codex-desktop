// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Den`) / export `A9`.

export type BindMessagePeers = {
  Een: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindMessagePeers | null = null;

/** Wire bindMessage peers once companions land. */
export function setBindMessagePeers(next: BindMessagePeers): void {
  peers = next;
}

/**
 * Bundle export `A9` / internal `Den`.
 */
export function bindMessage() {
  if (peers == null) {
    throw new Error("bindMessage peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), Een = peers.sl({
      code: peers.rl().optional(),
      message: peers.X().optional()
    });
  });
}
