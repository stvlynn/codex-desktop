// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `a4r`) / export `Pq`.

export type ResolveGuardianApprovalWorkspaceWriteModePeers = {
  Epe: (...args: unknown[]) => unknown;
  Fpe: (...args: unknown[]) => unknown;
  Gpe: (...args: unknown[]) => unknown;
  Kpe: (...args: unknown[]) => unknown;
  Upe: (...args: unknown[]) => unknown;
  r4r: (...args: unknown[]) => unknown;
};
let peers: ResolveGuardianApprovalWorkspaceWriteModePeers | null = null;

/** Wire resolveGuardianApprovalWorkspaceWriteMode peers once companions land. */
export function setResolveGuardianApprovalWorkspaceWriteModePeers(
  next: ResolveGuardianApprovalWorkspaceWriteModePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pq` / internal `a4r`.
 */
export function resolveGuardianApprovalWorkspaceWriteMode({
  isConfigDataPending,
  requirements,
  resolvedConfig,
  isGuardianApprovalEnabledByStatsig,
  hasAuthoritativeGuardianApprovalDefault = false,
  defaultWorkspaceWriteMode = "auto",
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "resolveGuardianApprovalWorkspaceWriteMode peers are not configured",
    );
  }
  let o = isConfigDataPending
      ? ["read-only", "auto", "granular", "full-access", "custom"]
      : peers.Fpe(requirements, resolvedConfig),
    s = peers.Kpe(resolvedConfig ?? undefined) ?? true,
    c =
      isGuardianApprovalEnabledByStatsig ||
      hasAuthoritativeGuardianApprovalDefault,
    l = o.filter((item) => {
      return item !== "guardian-approvals";
    }),
    u = o.includes("guardian-approvals") && l.length === 0,
    d = (c && s) || u ? o : l,
    f = d.includes("guardian-approvals"),
    p = d.filter((item) => {
      return item !== "custom";
    }),
    m = peers.Gpe(resolvedConfig ?? undefined, defaultWorkspaceWriteMode),
    h = m === "full-access" ? null : m,
    g = f && m === "auto" && peers.Epe(peers.Upe(resolvedConfig ?? undefined)),
    _ = peers.r4r(p);
  return (
    g ? (_ = "guardian-approvals") : h != null && p.includes(h) && (_ = h),
    {
      availableAgentModes: d,
      canShowCustom: d.includes("custom"),
      canUnlock: d.includes("full-access"),
      customEquivalentMode: g ? "guardian-approvals" : m,
      isGuardianModeAvailable: f,
      isConfigDataPending,
      configNonFullAccessMode: _,
      showGuardianOption: c,
    }
  );
}
