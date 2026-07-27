// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IWi`) / export `nH`.

export type BindLocalThreadPeers = {
  Au: (...args: unknown[]) => unknown;
  DWi: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  FWi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  kqr: (...args: unknown[]) => unknown;
};

let peers: BindLocalThreadPeers | null = null;

/** Wire bindLocalThread peers once companions land. */
export function setBindLocalThreadPeers(next: BindLocalThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `nH` / internal `IWi`.
 */
export function bindLocalThread() {
  if (peers == null) {
    throw new Error("bindLocalThread peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.Au(), peers.kqr(), peers.ed(), peers.ap(), peers.DWi(), FWi = peers.Da(peers.Q, e => !1);
  });
}
