// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vnr`) / export `$2`.

export type Dollar2BindableHelperPeers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: Dollar2BindableHelperPeers | null = null;

/** Wire dollar2BindableHelper peers once companions land. */
export function setDollar2BindableHelperPeers(
  next: Dollar2BindableHelperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$2` / internal `Vnr`.
 */
export function dollar2BindableHelper() {
  if (peers == null) {
    throw new Error("dollar2BindableHelper peers are not configured");
  }

  return peers.JE(({ threadSource: e }) => e ?? null);
}
