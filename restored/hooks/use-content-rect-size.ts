// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fCr`) / export `M1`.

export type UseContentRectSizePeers = {
  Tk: (...args: unknown[]) => unknown;
  hCr: (...args: unknown[]) => unknown;
  mCr: (...args: unknown[]) => unknown;
};

let peers: UseContentRectSizePeers | null = null;

/** Wire useContentRectSize peers once companions land. */
export function setUseContentRectSizePeers(next: UseContentRectSizePeers): void {
  peers = next;
}

/**
 * Bundle export `M1` / internal `fCr`.
 */
export function useContentRectSize() {
  if (peers == null) {
    throw new Error("useContentRectSize peers are not configured");
  }

  let e = (0, peers.mCr.c)(5),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = {
        width: null,
        height: null,
      }),
      (e[0] = t))
    : (t = e[0]);
  let [n, r] = (0, peers.hCr.useState)(t),
    i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (e) => {
        let { width: t, height: n } = e.contentRect;
        r({
          width: t,
          height: n,
        });
      }),
      (e[1] = i))
    : (i = e[1]);
  let a = peers.Tk(i),
    o;
  return (
    e[2] !== n || e[3] !== a
      ? ((o = [a, n]), (e[2] = n), (e[3] = a), (e[4] = o))
      : (o = e[4]),
    o
  );
}
