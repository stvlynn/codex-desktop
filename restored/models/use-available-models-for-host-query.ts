// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NM`) / export `$Y`.

export type UseAvailableModelsForHostQueryPeers = {
  Fo: (...args: unknown[]) => unknown;
  QJr: (...args: unknown[]) => unknown;
  ZJr: (...args: unknown[]) => unknown;
  additionalAvailableModels: (...args: unknown[]) => unknown;
  authMethod: (...args: unknown[]) => unknown;
  bM: (...args: unknown[]) => unknown;
  eYr: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  includeUltraReasoningEffort: (...args: unknown[]) => unknown;
  isLoading: (...args: unknown[]) => unknown;
  limit: (...args: unknown[]) => unknown;
};

let peers: UseAvailableModelsForHostQueryPeers | null = null;

/** Wire useAvailableModelsForHostQuery peers once companions land. */
export function setUseAvailableModelsForHostQueryPeers(next: UseAvailableModelsForHostQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `$Y` / internal `NM`.
 */
export function useAvailableModelsForHostQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useAvailableModelsForHostQuery peers are not configured");
  }

  let t = (0, peers.ZJr.c)(10),
    n = e?.hostId ?? `local`,
    r = e?.limit ?? peers.QJr,
    i = peers.bM(n),
    a;
  t[0] === e?.additionalAvailableModels
    ? (a = t[1])
    : ((a = Array.from(e?.additionalAvailableModels ?? []).sort()),
      (t[0] = e?.additionalAvailableModels),
      (t[1] = a));
  let o = i?.authMethod ?? null,
    s = e?.includeUltraReasoningEffort !== !1,
    c;
  t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== o || t[6] !== s
    ? ((c = {
        additionalAvailableModels: a,
        authMethod: o,
        hostId: n,
        includeUltraReasoningEffort: s,
        limit: r,
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l = e?.enabled !== !1 && i?.isLoading !== !0,
    u;
  return (
    t[8] === l
      ? (u = t[9])
      : ((u = {
          enabled: l,
        }),
        (t[8] = l),
        (t[9] = u)),
    peers.Fo(peers.eYr, c, u)
  );
}
