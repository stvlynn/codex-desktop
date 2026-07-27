// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `gts`) / export `JC`.

export type UseHostSkillsRootQueryPeers = {
  defaultRoot: unknown;
  useSkills: (
    root: unknown,
    hostId: unknown,
    options: { enabled: boolean },
  ) => { skills: unknown };
  useAvailablePlugins: (
    hostId: unknown,
    root: unknown,
    options: { enabled: boolean },
  ) => { availablePlugins: unknown };
  useAppsQuery: (options: { enabled: boolean; hostId: unknown }) => {
    data: unknown;
  };
  buildCapabilityNames: (args: {
    apps: unknown;
    plugins: unknown;
    skills: unknown;
  }) => unknown;
  emptyCapabilityNames: unknown;
};

let peers: UseHostSkillsRootQueryPeers | null = null;

/** Wire host skills root query peers once companions land. */
export function setUseHostSkillsRootQueryPeers(
  next: UseHostSkillsRootQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `JC` / internal `gts`.
 * Combine skills/plugins/apps into capability names for a host root.
 */
export function useHostSkillsRootQuery(args: {
  enabled?: boolean;
  hostId: unknown;
  root?: unknown;
}): { capabilityNames: unknown } {
  if (peers == null) {
    throw new Error("UseHostSkillsRootQuery peers are not configured");
  }
  const enabled = args.enabled === undefined ? true : args.enabled;
  const root = args.root ?? peers.defaultRoot;
  const { skills } = peers.useSkills(root, args.hostId, { enabled });
  const { availablePlugins } = peers.useAvailablePlugins(args.hostId, root, {
    enabled,
  });
  const { data } = peers.useAppsQuery({ enabled, hostId: args.hostId });
  if (!enabled) {
    return { capabilityNames: peers.emptyCapabilityNames };
  }
  const apps = data === undefined ? [] : data;
  return {
    capabilityNames: peers.buildCapabilityNames({
      apps,
      plugins: availablePlugins,
      skills,
    }),
  };
}
