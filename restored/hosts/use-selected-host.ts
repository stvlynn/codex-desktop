// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YFo`) / export `TO`.

export type UseSelectedHostPeers = {
  H_: (...args: unknown[]) => unknown;
};

let peers: UseSelectedHostPeers | null = null;

/** Wire useSelectedHost peers once companions land. */
export function setUseSelectedHostPeers(next: UseSelectedHostPeers): void {
  peers = next;
}

/**
 * Bundle export `TO` / internal `YFo`.
 */
export function useSelectedHost(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useSelectedHost peers are not configured");
  }

  return t == null || e === `local` || t.some(t => t.hostId === e) ? e : peers.H_;
}
