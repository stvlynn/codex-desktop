// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `c_`) / export `yst`.

export type BrowserPeers = {
  Au: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  qvt: (...args: unknown[]) => unknown;
};

let peers: BrowserPeers | null = null;

/** Wire browser peers once companions land. */
export function setBrowserPeers(next: BrowserPeers): void {
  peers = next;
}

/**
 * Bundle export `yst` / internal `c_`.
 */
export function browser() {
  if (peers == null) {
    throw new Error("browser peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.jf(), qvt = `/dev/null`;
  });
}
