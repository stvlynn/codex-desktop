// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `x4i`/`y4i` — exports Uz/Lz.

export type PluginMarketplaceQuery = {
  marketplacePath: string | null;
  pluginName: string | null;
  remoteMarketplaceName: string | null;
  hostId: string | null;
};

/** Parse plugin marketplace query-string (`x4i` / `Uz`). */
export function parsePluginMarketplaceQuery(
  search: string,
): PluginMarketplaceQuery | null {
  const params = new URLSearchParams(search);
  const marketplacePath = params.get("marketplacePath")?.trim() || null;
  const remoteMarketplaceName =
    params.get("remoteMarketplaceName")?.trim() || null;
  const pluginName = params.get("pluginName")?.trim() || null;
  const hostId = params.get("hostId")?.trim() || null;
  const hasMarketplace = !!marketplacePath || !!remoteMarketplaceName;
  if (
    (marketplacePath && remoteMarketplaceName) ||
    (hasMarketplace && !pluginName) ||
    (!hasMarketplace && pluginName)
  ) {
    return null;
  }
  return {
    marketplacePath: marketplacePath || null,
    pluginName: pluginName || null,
    remoteMarketplaceName: remoteMarketplaceName || null,
    hostId,
  };
}

/** Resolve direct marketplace route fields (`y4i` / `Lz`). */
export function resolvePluginMarketplaceDirectRoute(args: {
  explicitMarketplacePath?: string | null;
  explicitPluginName?: string | null;
  explicitRemoteMarketplaceName?: string | null;
  routeParams?: {
    marketplacePath?: string | null;
    pluginName?: string | null;
    remoteMarketplaceName?: string | null;
  } | null;
}): {
  directMarketplacePath: string | null;
  directPluginName: string | null;
  directRemoteMarketplaceName: string | null;
} {
  const {
    explicitMarketplacePath: e,
    explicitPluginName: t,
    explicitRemoteMarketplaceName: n,
    routeParams: r,
  } = args;
  const hasExplicitMarketplace = e != null || n != null;
  return {
    directMarketplacePath: hasExplicitMarketplace
      ? (e ?? null)
      : (r?.marketplacePath ?? null),
    directPluginName: t ?? r?.pluginName ?? null,
    directRemoteMarketplaceName: hasExplicitMarketplace
      ? (n ?? null)
      : (r?.remoteMarketplaceName ?? null),
  };
}
