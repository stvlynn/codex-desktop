// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `e0n`) / export `y6`.

export type BindBindMarkdownPeers = {
  $1n: (...args: unknown[]) => unknown;
  Q1n: (...args: unknown[]) => unknown;
  X1n: (...args: unknown[]) => unknown;
  Y1n: (...args: unknown[]) => unknown;
  Z1n: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindMarkdownPeers | null = null;

/** Wire bindBindMarkdown peers once companions land. */
export function setBindBindMarkdownPeers(next: BindBindMarkdownPeers): void {
  peers = next;
}

/**
 * Bundle export `y6` / internal `e0n`.
 */
export function bindBindMarkdown() {
  if (peers == null) {
    throw new Error("bindBindMarkdown peers are not configured");
  }

  return peers.e(() => {
    Y1n = `-9223372036854775808`, X1n = `9223372036854775807`, Z1n = 19, Q1n = null, $1n = !1;
  });
}
