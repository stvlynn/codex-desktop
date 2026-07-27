// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tp`) / export `$ut`.

export type PersistedAtomStorePeers = {
  $f: (...args: unknown[]) => unknown;
  PZe: (...args: unknown[]) => unknown;
  cacheKey: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  select: (...args: unknown[]) => unknown;
  source: (...args: unknown[]) => unknown;
};

let peers: PersistedAtomStorePeers | null = null;

/** Wire persistedAtomStore peers once companions land. */
export function setPersistedAtomStorePeers(next: PersistedAtomStorePeers): void {
  peers = next;
}

/**
 * Bundle export `$ut` / internal `tp`.
 */
export function persistedAtomStore(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("persistedAtomStore peers are not configured");
  }

  return peers.ka(e, e => {
    let r = n?.(e),
      i = r != null && `params` in r ? r.params : void 0,
      a = r != null && `params` in r ? i : e,
      o = r?.cacheKey,
      s = r?.select,
      c = r?.source;
    return {
      ...(r == null ? {} : (() => {
        let {
          cacheKey: e,
          params: t,
          select: n,
          source: i,
          ...a
        } = r;
        return a;
      })()),
      queryFn: ({
        signal: e
      }) => peers.PZe(t, a, s, e, c),
      queryKey: peers.$f(t, a, o)
    };
  });
}
