// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TM`) / export `OX`.

export type BindBinddeferredUiOX3Peers = {
  Ft: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  bKr: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  xKr: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredUiOX3Peers | null = null;

/** Wire bindBinddeferredUiOX3 peers once companions land. */
export function setBindBinddeferredUiOX3Peers(next: BindBinddeferredUiOX3Peers): void {
  peers = next;
}

/**
 * Bundle export `OX` / internal `TM`.
 */
export function bindBinddeferredUiOX3() {
  if (peers == null) {
    throw new Error("bindBinddeferredUiOX3 peers are not configured");
  }

  return peers.ka(peers.Q, (e) =>
    peers.Ft({
      queryKey: peers.bKr(e),
      queryFn: ({ signal: t }) => peers.xKr(e, t),
      staleTime: peers.Hf.ONE_MINUTE,
    }),
  );
}
