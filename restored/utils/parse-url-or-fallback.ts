// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ers`) / export `DC`.

export type ParseUrlOrFallbackPeers = {
  Drs: (...args: unknown[]) => unknown;
};

let peers: ParseUrlOrFallbackPeers | null = null;

/** Wire parseUrlOrFallback peers once companions land. */
export function setParseUrlOrFallbackPeers(next: ParseUrlOrFallbackPeers): void {
  peers = next;
}

/**
 * Bundle export `DC` / internal `Ers`.
 */
export function parseUrlOrFallback(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("parseUrlOrFallback peers are not configured");
  }

  let n = peers.Drs.safeParse(e.url);
  return n.success ? n.data : t;
}
