// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OD`) / export `Y0`.

export type BindDeferredBrowserY0Peers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Trr: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  krr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredBrowserY0Peers | null = null;

/** Wire bindDeferredBrowserY0 peers once companions land. */
export function setBindDeferredBrowserY0Peers(next: BindDeferredBrowserY0Peers): void {
  peers = next;
}

/**
 * Bundle export `Y0` / internal `OD`.
 */
export function bindDeferredBrowserY0() {
  if (peers == null) {
    throw new Error("bindDeferredBrowserY0 peers are not configured");
  }

  return peers.ka(peers.Q, (e) => ({
    queryKey: [...peers.krr, e],
    queryFn: async () => {
      try {
        return await peers.Trr(e);
      } catch (e) {
        return (
          peers.Wf.error(`Failed to load experimental features`, {
            safe: {
              error: String(e),
            },
            sensitive: {},
          }),
          []
        );
      }
    },
    staleTime: peers.Hf.ONE_MINUTE,
  }));
}
