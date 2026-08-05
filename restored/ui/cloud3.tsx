// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DLi`) / export `qU`.

export type BindCloud3Peers = {
  HI: (...args: unknown[]) => unknown;
  LP: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  UI: (...args: unknown[]) => unknown;
  VI: (...args: unknown[]) => unknown;
  _Li: (...args: unknown[]) => unknown;
  gLi: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  iLi: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindCloud3Peers | null = null;

/** Wire bindCloud3 peers once companions land. */
export function setBindCloud3Peers(next: BindCloud3Peers): void {
  peers = next;
}

/**
 * Bundle export `qU` / internal `DLi`.
 */
export function bindCloud3() {
  if (peers == null) {
    throw new Error("bindCloud3 peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => {
    if (e(peers.HI) === `cloud`)
      return {
        isLoading: !1,
        metrics: null,
      };
    if (e(peers.LP) === `branch`) {
      let t = e(peers.VI),
        n = t.data;
      if (n?.type === `success`)
        return {
          isLoading: !1,
          metrics: peers.gLi(n),
        };
      if (e(peers.UI) && !t.isError && (t.isFetching || t.isPending))
        return {
          isLoading: !0,
          metrics: null,
        };
    }
    let t = e(peers.iLi),
      n = peers._Li(t.data);
    return n == null
      ? {
          isLoading: t.isFetching,
          metrics: null,
        }
      : {
          isLoading: !1,
          metrics: n,
        };
  });
}
