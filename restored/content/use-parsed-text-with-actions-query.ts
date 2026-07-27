// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `X7r`) / export `sK`.

export type UseParsedTextWithActionsQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Z7r: (...args: unknown[]) => unknown;
  eP: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  z5r: (...args: unknown[]) => unknown;
};

let peers: UseParsedTextWithActionsQueryPeers | null = null;

/** Wire useParsedTextWithActionsQuery peers once companions land. */
export function setUseParsedTextWithActionsQueryPeers(next: UseParsedTextWithActionsQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `sK` / internal `X7r`.
 */
export function useParsedTextWithActionsQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useParsedTextWithActionsQuery peers are not configured");
  }

  let t = (0, peers.eP.c)(5),
    n = e ?? ``,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = peers.z5r(n, {
        includeActions: !0,
      })),
      (t[0] = n),
      (t[1] = r));
  let i = e != null,
    a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = {
          ...r,
          enabled: i,
          staleTime: peers.Hf.FIVE_MINUTES,
          select: peers.Z7r,
        }),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    peers.jt(a)
  );
}
