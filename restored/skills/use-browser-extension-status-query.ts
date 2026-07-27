// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Whu`) / export `kt`.

export type UseBrowserExtensionStatusQueryPeers = {
  Ghu: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Hhu: (...args: unknown[]) => unknown;
  Uhu: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
};

let peers: UseBrowserExtensionStatusQueryPeers | null = null;

/** Wire useBrowserExtensionStatusQuery peers once companions land. */
export function setUseBrowserExtensionStatusQueryPeers(next: UseBrowserExtensionStatusQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `kt` / internal `Whu`.
 */
export function useBrowserExtensionStatusQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useBrowserExtensionStatusQuery peers are not configured");
  }

  let t = (0, peers.Ghu.c)(10),
    { browserExtensionId: n } = e,
    r = n != null,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = peers.Hhu({
        browserExtensionId: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] !== r || t[3] !== i
    ? ((a = {
        enabled: r,
        refetchOnWindowFocus: !0,
        staleTime: peers.Hf.FIVE_SECONDS,
        ...i,
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a))
    : (a = t[4]);
  let { data: o, isLoading: s } = peers.jt(a),
    c;
  t[5] === o ? (c = t[6]) : ((c = peers.Uhu(o)), (t[5] = o), (t[6] = c));
  let l = n != null && s,
    u;
  return (
    t[7] !== c || t[8] !== l
      ? ((u = {
          isConnected: c,
          isLoading: l,
        }),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
