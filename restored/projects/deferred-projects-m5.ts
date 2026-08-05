// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PWn`) / export `m5`.

export type BindDeferredProjectsM5Peers = {
  AWn: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Hh: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Zf: (...args: unknown[]) => unknown;
  mWn: (...args: unknown[]) => unknown;
  pWn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredProjectsM5Peers | null = null;

/** Wire bindDeferredProjectsM5 peers once companions land. */
export function setBindDeferredProjectsM5Peers(
  next: BindDeferredProjectsM5Peers,
): void {
  peers = next;
}

/**
 * Bundle export `m5` / internal `PWn`.
 */
export function bindDeferredProjectsM5() {
  if (peers == null) {
    throw new Error("bindDeferredProjectsM5 peers are not configured");
  }

  return peers.Ia(peers.Q, () => ({
    queryKey: peers.pWn,
    queryFn: async () => {
      let { body: e } = await peers.Zf.getInstance().post(
          `/wham/apps`,
          JSON.stringify({
            id: 1,
            jsonrpc: `2.0`,
            method: `tools/list`,
            params: {},
          }),
          peers.Hh(),
        ),
        t = peers.AWn.parse(e);
      if (`error` in t) throw Error(`Sites tools list failed`);
      let n = new Set(t.result.tools.map(({ name: e }) => e));
      return peers.mWn.every((e) => n.has(e));
    },
    retry: !1,
    staleTime: peers.Hf.ONE_MINUTE,
  }));
}
