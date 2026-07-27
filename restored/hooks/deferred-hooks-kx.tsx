// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SKr`) / export `kX`.

export type BindBindDeferredHooksKXPeers = {
  Q: (...args: unknown[]) => unknown;
  Ra: (...args: unknown[]) => unknown;
  TM: (...args: unknown[]) => unknown;
  U8n: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  wM: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredHooksKXPeers | null = null;

/** Wire bindBindDeferredHooksKX peers once companions land. */
export function setBindBindDeferredHooksKXPeers(next: BindBindDeferredHooksKXPeers): void {
  peers = next;
}

/**
 * Bundle export `kX` / internal `SKr`.
 */
export function bindBindDeferredHooksKX() {
  if (peers == null) {
    throw new Error("bindBindDeferredHooksKX peers are not configured");
  }

  return peers.Ra(peers.Q, ({ scope: e }) => ({
    mutationFn: async (e) =>
      peers.wM(peers.gp.openIn.setGlobalPreferredTarget(e)),
    networkMode: `always`,
    onSuccess: async (t, { target: n }) => {
      let r = e.query.snapshot(peers.TM, {
        cwd: null,
      });
      (r.setData((e) =>
        e == null
          ? e
          : {
              ...e,
              preferredTarget: n,
            },
      ),
        await peers.U8n(e.queryClient, r.queryKey));
    },
  }));
}
