// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x4r`) / export `Aq`.

export type UseConversationHostFeatureFlagsPeers = {
  B_: (...args: unknown[]) => unknown;
  CE: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Kpe: (...args: unknown[]) => unknown;
  Oh: (...args: unknown[]) => unknown;
  PE: (...args: unknown[]) => unknown;
  SE: (...args: unknown[]) => unknown;
  TE: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z8n: (...args: unknown[]) => unknown;
  config: (...args: unknown[]) => unknown;
  dA: (...args: unknown[]) => unknown;
  guardian_approval: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  requirements: (...args: unknown[]) => unknown;
  s5n: (...args: unknown[]) => unknown;
  w4r: (...args: unknown[]) => unknown;
  xD: (...args: unknown[]) => unknown;
  zpe: (...args: unknown[]) => unknown;
};
let peers: UseConversationHostFeatureFlagsPeers | null = null;

/** Wire useConversationHostFeatureFlags peers once companions land. */
export function setUseConversationHostFeatureFlagsPeers(
  next: UseConversationHostFeatureFlagsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Aq` / internal `x4r`.
 */
export function useConversationHostFeatureFlags(e: unknown) {
  if (peers == null) {
    throw new Error("useConversationHostFeatureFlags peers are not configured");
  }
  let { conversationId, hostId, cwdOverride } = e,
    a = peers.Fo(peers.oD, conversationId),
    o = peers.Y(peers.CE),
    s = peers.Y(peers.SE),
    c = peers.Y(peers.Z8n),
    l = peers.Y(peers.TE),
    u = peers.Fo(peers.xD, conversationId),
    d = cwdOverride !== undefined,
    f = d ? (cwdOverride ?? null) : (a ?? o),
    p = d && f == null,
    m = !d && a == null && s,
    h = !d && (conversationId == null ? s : u == null),
    g =
      cwdOverride === "~" ||
      (!d &&
        !h &&
        (conversationId == null
          ? l == null && peers.dA(c)
          : u === "projectless"));
  let _ = g,
    [v] = peers.B_("statsig_default_enable_features"),
    y = peers.Oh(),
    b = d ? "preserve-null" : "fallback-to-workspace",
    x = !p && !m,
    S = {
      hostId,
      cwdMode: b,
      enabled: x,
    };
  let { data, isPending } = peers.s5n(f, S),
    T = {
      hostId,
    };
  let { data: _data, isPending: _isPending } = peers.Fo(peers.PE, T),
    O = _data?.requirements ?? null,
    k = data?.config ?? null,
    A =
      _isPending || peers.zpe("auto", O) || peers.zpe("guardian-approvals", O);
  let j = A,
    M = j && peers.Kpe(k ?? undefined) !== false && (v === undefined || y);
  let N = p || m || h || _isPending || isPending || M,
    P = v?.guardian_approval === true;
  return {
    isConfigDataPending: N,
    isGuardianApprovalEnabledByStatsig: P,
    isProjectless: _,
    requirements: O,
    resolvedConfig: k,
  };
}
