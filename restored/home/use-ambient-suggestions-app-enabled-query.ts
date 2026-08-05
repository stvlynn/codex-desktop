// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yti`) / export `ZW`.

export type UseAmbientSuggestionsAppEnabledQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Xti: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  hasAccessibleAndEnabledApp: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  tni: (...args: unknown[]) => unknown;
};

let peers: UseAmbientSuggestionsAppEnabledQueryPeers | null = null;

/** Wire useAmbientSuggestionsAppEnabledQuery peers once companions land. */
export function setUseAmbientSuggestionsAppEnabledQueryPeers(
  next: UseAmbientSuggestionsAppEnabledQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZW` / internal `Yti`.
 */
export function useAmbientSuggestionsAppEnabledQuery(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useAmbientSuggestionsAppEnabledQuery peers are not configured",
    );
  }

  let t = (0, peers.tni.c)(9),
    { accountId: n, enabled: r, hostId: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = peers.Xti(i, n)), (t[0] = n), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = async () =>
        (await peers.gp.ambientSuggestions?.hasAccessibleAndEnabledApp({
          hostId: i,
        })) ?? !1),
      (t[3] = i),
      (t[4] = o));
  let s;
  return (
    t[5] !== r || t[6] !== a || t[7] !== o
      ? ((s = {
          queryKey: a,
          queryFn: o,
          enabled: r,
          retry: !1,
          staleTime: peers.Hf.FIVE_MINUTES,
        }),
        (t[5] = r),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    peers.jt(s)
  );
}
