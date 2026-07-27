// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yoc`) / export `pp`.

export type ResolveInboxExposureItemsPeers = {
  Qoc: (...args: unknown[]) => unknown;
  Zoc: (...args: unknown[]) => unknown;
  asc: (...args: unknown[]) => unknown;
};
let peers: ResolveInboxExposureItemsPeers | null = null;

/** Wire resolveInboxExposureItems peers once companions land. */
export function setResolveInboxExposureItemsPeers(
  next: ResolveInboxExposureItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pp` / internal `Yoc`.
 */
export function resolveInboxExposureItems({
  canEnableNotifications,
  generalAssignment,
  hideGoogleWorkspaceItems,
  mailProvider,
  plan,
  representativeRole,
  roleAssignment,
  roles,
  taskDefinitions,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("resolveInboxExposureItems peers are not configured");
  }
  let l = peers.asc.safeParse(roleAssignment),
    u = peers.asc.safeParse(generalAssignment),
    d = l.success && l.data.length > 0 ? l.data : null,
    f = u.success && u.data.length > 0 ? u.data : null,
    p = null,
    m;
  representativeRole != null && d != null
    ? ((p = representativeRole), (m = d))
    : f == null
      ? (m = peers.Zoc(roles, representativeRole))
      : ((p = "general"), (m = f));
  let h = peers.Qoc({
    canEnableNotifications,
    candidateItemIds: m,
    hideGoogleWorkspaceItems,
    mailProvider,
    plan,
    taskDefinitions,
  });
  return h.length > 0
    ? {
        exposureParameter: p,
        itemIds: h,
      }
    : {
        exposureParameter: p,
        itemIds: peers.Qoc({
          canEnableNotifications,
          candidateItemIds: peers.Zoc(roles, representativeRole),
          hideGoogleWorkspaceItems,
          mailProvider,
          plan,
          taskDefinitions,
        }),
      };
}
