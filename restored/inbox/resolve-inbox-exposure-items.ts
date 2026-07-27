// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Yoc`) / export `pp`.

export type ResolveInboxExposureItemsPeers = {
  parseAssignment: {
    safeParse: (value: unknown) => { success: boolean; data: unknown[] };
  };
  fallbackItemIds: (roles: unknown, representativeRole: unknown) => unknown[];
  filterExposed: (args: {
    canEnableNotifications: unknown;
    candidateItemIds: unknown;
    hideGoogleWorkspaceItems: unknown;
    mailProvider: unknown;
    plan: unknown;
    taskDefinitions: unknown;
  }) => unknown[];
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
 * Resolve inbox exposureParameter + itemIds from roles/plan/mail assignments.
 */
export function resolveInboxExposureItems(args: {
  canEnableNotifications: unknown;
  generalAssignment: unknown;
  hideGoogleWorkspaceItems: unknown;
  mailProvider: unknown;
  plan: unknown;
  representativeRole: unknown;
  roleAssignment: unknown;
  roles: unknown;
  taskDefinitions: unknown;
}): { exposureParameter: unknown; itemIds: unknown[] } {
  if (peers == null) {
    throw new Error("ResolveInboxExposureItems peers are not configured");
  }
  const roleParsed = peers.parseAssignment.safeParse(args.roleAssignment);
  const generalParsed = peers.parseAssignment.safeParse(args.generalAssignment);
  const roleIds =
    roleParsed.success && roleParsed.data.length > 0 ? roleParsed.data : null;
  const generalIds =
    generalParsed.success && generalParsed.data.length > 0
      ? generalParsed.data
      : null;
  let exposureParameter: unknown = null;
  let candidateItemIds: unknown;
  if (args.representativeRole != null && roleIds != null) {
    exposureParameter = args.representativeRole;
    candidateItemIds = roleIds;
  } else if (generalIds == null) {
    candidateItemIds = peers.fallbackItemIds(
      args.roles,
      args.representativeRole,
    );
  } else {
    exposureParameter = "general";
    candidateItemIds = generalIds;
  }
  const itemIds = peers.filterExposed({
    canEnableNotifications: args.canEnableNotifications,
    candidateItemIds,
    hideGoogleWorkspaceItems: args.hideGoogleWorkspaceItems,
    mailProvider: args.mailProvider,
    plan: args.plan,
    taskDefinitions: args.taskDefinitions,
  });
  if (itemIds.length > 0) return { exposureParameter, itemIds };
  return {
    exposureParameter,
    itemIds: peers.filterExposed({
      canEnableNotifications: args.canEnableNotifications,
      candidateItemIds: peers.fallbackItemIds(
        args.roles,
        args.representativeRole,
      ),
      hideGoogleWorkspaceItems: args.hideGoogleWorkspaceItems,
      mailProvider: args.mailProvider,
      plan: args.plan,
      taskDefinitions: args.taskDefinitions,
    }),
  };
}
