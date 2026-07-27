// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ra`) / export `evt`.

export type UseCloudEnvironmentsSettingsQueryPeers = {
  Hi: (...args: unknown[]) => unknown;
  Pn: (...args: unknown[]) => unknown;
  di: (...args: unknown[]) => unknown;
  onError: (...args: unknown[]) => unknown;
  onSettled: (...args: unknown[]) => unknown;
  onSuccess: (...args: unknown[]) => unknown;
  ua: (...args: unknown[]) => unknown;
};

let peers: UseCloudEnvironmentsSettingsQueryPeers | null = null;

/** Wire useCloudEnvironmentsSettingsQuery peers once companions land. */
export function setUseCloudEnvironmentsSettingsQueryPeers(next: UseCloudEnvironmentsSettingsQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `evt` / internal `Ra`.
 */
export function useCloudEnvironmentsSettingsQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useCloudEnvironmentsSettingsQuery peers are not configured");
  }

  let n = peers.Hi(`cached`, e, (e, n) => {
    if (e.queryClient == null) throw Error(`mutationSignal requires a QueryClient on Scope`);
    let r = peers.Pn({
        data: void 0,
        error: null,
        status: `idle`,
        variables: void 0
      }),
      i = 0;
    return peers.Pn(a => {
      let o = a(r),
        s = async (a, o) => {
          let s = t(peers.ua(n, e)),
            c = {
              client: e.queryClient,
              meta: s.meta,
              mutationKey: s.mutationKey
            },
            l = ++i;
          e.store.set(r, {
            data: void 0,
            error: null,
            status: `pending`,
            variables: a
          });
          let u, d;
          try {
            u = await s.onMutate?.(a, c), d = await s.mutationFn?.(a, c);
          } catch (t) {
            let n = t;
            throw l === i && e.store.set(r, {
              data: void 0,
              error: n,
              status: `error`,
              variables: a
            }), await s.onError?.(n, a, u, c), await s.onSettled?.(void 0, n, a, u, c), o?.onError?.(n, a, u, c), o?.onSettled?.(void 0, n, a, u, c), t;
          }
          return l === i && e.store.set(r, {
            data: d,
            error: null,
            status: `success`,
            variables: a
          }), await s.onSuccess?.(d, a, u, c), await s.onSettled?.(d, null, a, u, c), o?.onSuccess?.(d, a, u, c), o?.onSettled?.(d, null, a, u, c), d;
        };
      return {
        ...o,
        isError: o.status === `error`,
        isIdle: o.status === `idle`,
        isPending: o.status === `pending`,
        isSuccess: o.status === `success`,
        mutate: (e, t) => {
          s(e, t).catch(() => {});
        },
        mutateAsync: s
      };
    });
  }, (e, t) => {
    peers.di(t, e, `mutation`, {
      debugLabel: n.debugLabel
    });
  });
  return n;
}
