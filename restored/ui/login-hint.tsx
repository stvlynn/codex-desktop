// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zws`) / export `Ry`.

export type BindLoginHintPeers = {
  Au: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Iws: (...args: unknown[]) => unknown;
  Lws: (...args: unknown[]) => unknown;
  Rws: (...args: unknown[]) => unknown;
  URL: (...args: unknown[]) => unknown;
  Uo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindLoginHintPeers | null = null;

/** Wire bindLoginHint peers once companions land. */
export function setBindLoginHintPeers(next: BindLoginHintPeers): void {
  peers = next;
}

/**
 * Bundle export `Ry` / internal `zws`.
 */
export function bindLoginHint() {
  if (peers == null) {
    throw new Error("bindLoginHint peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.Fh(), Iws = new peers.URL(peers.Uo), Lws = `${peers.Iws.pathname}/purchase/`, Rws = `3800100299`;
  });
}
