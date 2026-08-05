// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FZl`) / export `ba`.

export type TextTokenErrorForegroundPeers = {
  J: (...args: unknown[]) => unknown;
  NZl: (...args: unknown[]) => unknown;
  PZl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: TextTokenErrorForegroundPeers | null = null;

/** Wire textTokenErrorForeground peers once companions land. */
export function setTextTokenErrorForegroundPeers(
  next: TextTokenErrorForegroundPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ba` / internal `FZl`.
 */
export function textTokenErrorForeground() {
  if (peers == null) {
    throw new Error("textTokenErrorForeground peers are not configured");
  }

  return peers.e(() => {
    ((NZl = peers.c()), peers.sd(), (PZl = peers.J()));
  });
}
