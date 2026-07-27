// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `I4i`) / export `Nz`.

export type UsePluginDetailQueryPeers = {
  usePluginsFeatureEnabled: (args: { hostId: string }) => boolean;
  useTheme: () => unknown;
  isLocalPluginName: (name: unknown) => boolean;
  useLocalPluginAvailability: (args: { enabled: boolean; hostId: string }) => {
    isLoading: boolean;
    available: boolean;
  };
  buildQueryKey: (args: Record<string, unknown>) => unknown;
  useQuery: (opts: Record<string, unknown>) => unknown;
  ipc: (
    method: string,
    payload: Record<string, unknown>,
  ) => Promise<{
    plugin: {
      summary: {
        interface?: {
          logo?: unknown;
          logoDark?: unknown;
          composerIcon?: unknown;
        };
      };
      skills: Array<{
        interface?: { iconSmall?: unknown; iconLarge?: unknown };
      }>;
    };
  }>;
  resolveImage: (
    ref: unknown,
    hostId: string,
    theme: unknown,
  ) => Promise<unknown>;
  marketplaceArgs: (args: {
    marketplacePath: unknown;
    remoteMarketplaceName: unknown;
  }) => Record<string, unknown>;
  hydratePlugin: (plugin: unknown, images: Record<string, unknown>) => unknown;
};

let peers: UsePluginDetailQueryPeers | null = null;

/** Wire usePluginDetailQuery peers once companions land. */
export function setUsePluginDetailQueryPeers(
  next: UsePluginDetailQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nz` / internal `I4i`.
 * Load plugin detail (+ skill icons) for marketplace / remote plugins.
 */
export function usePluginDetailQuery(args: {
  hostId?: string;
  marketplacePath?: unknown;
  pluginName?: unknown;
  remoteMarketplaceName?: unknown;
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UsePluginDetailQuery peers are not configured");
  }
  const enabled = args.enabled ?? true;
  const hostId = args.hostId ?? "local";
  const pluginsEnabled = peers.usePluginsFeatureEnabled({ hostId });
  const theme = peers.useTheme();
  const isLocal =
    args.pluginName != null && peers.isLocalPluginName(args.pluginName);
  const availability = peers.useLocalPluginAvailability({
    enabled: isLocal,
    hostId,
  });
  const hasTarget =
    (args.marketplacePath != null || args.remoteMarketplaceName != null) &&
    args.pluginName != null;
  const queryEnabled =
    pluginsEnabled &&
    enabled &&
    hasTarget &&
    (!isLocal || availability.available);
  return peers.useQuery({
    queryKey: peers.buildQueryKey({
      hostId,
      marketplacePath: args.marketplacePath,
      pluginName: args.pluginName,
      remoteMarketplaceName: args.remoteMarketplaceName,
    }),
    enabled: queryEnabled,
    queryFn: async () => {
      if (args.pluginName == null) {
        throw new Error("plugin detail query requires pluginName");
      }
      const { plugin } = await peers!.ipc("read-plugin", {
        hostId,
        ...peers!.marketplaceArgs({
          marketplacePath: args.marketplacePath,
          remoteMarketplaceName: args.remoteMarketplaceName,
        }),
        pluginName: args.pluginName,
      });
      const iface = plugin.summary.interface;
      const [
        composerIconDataUrl,
        logoDataUrl,
        logoDarkDataUrl,
        skillImageDataUrls,
      ] = await Promise.all([
        peers!.resolveImage(iface?.composerIcon, hostId, theme),
        peers!.resolveImage(iface?.logo, hostId, theme),
        peers!.resolveImage(iface?.logoDark, hostId, theme),
        Promise.all(
          plugin.skills.map(async (skill) => {
            if (skill.interface == null) return null;
            const [iconSmallDataUrl, iconLargeDataUrl] = await Promise.all([
              peers!.resolveImage(skill.interface.iconSmall, hostId, theme),
              peers!.resolveImage(skill.interface.iconLarge, hostId, theme),
            ]);
            return { iconSmallDataUrl, iconLargeDataUrl };
          }),
        ),
      ]);
      return peers!.hydratePlugin(plugin, {
        composerIconDataUrl,
        logoDataUrl,
        logoDarkDataUrl,
        skillImageDataUrls,
      });
    },
  });
}
