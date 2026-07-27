// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Jhu`) / export `Dt`.

export type UseBrowserExtensionPluginSetupQueryPeers = {
  useCodexHome: (hostId: unknown) => unknown;
  resolveSetupPath: (codexHome: unknown, plugin: unknown) => unknown;
  useQuery: (options: Record<string, unknown>) => { data: unknown };
  buildQueryKey: (args: { hostId: unknown; path: unknown }) => unknown;
  readFile: (
    method: string,
    args: { params: { hostId: unknown; path: unknown } },
  ) => Promise<{ contents: string }>;
  parseSetupFile: { parse: (value: unknown) => { extensionId: unknown } };
  buildSetupResult: (args: {
    codexHome: unknown;
    extensionId: unknown;
    plugin: unknown;
  }) => unknown;
  infiniteStaleTime: number;
};

let peers: UseBrowserExtensionPluginSetupQueryPeers | null = null;

/** Wire browser-extension plugin setup query peers once companions land. */
export function setUseBrowserExtensionPluginSetupQueryPeers(
  next: UseBrowserExtensionPluginSetupQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Dt` / internal `Jhu`.
 * Query browser-extension plugin setup metadata under codex home.
 */
export function useBrowserExtensionPluginSetupQuery(args: {
  enabled: boolean;
  hostId: unknown;
  plugin: unknown;
}): unknown {
  if (peers == null) {
    throw new Error(
      "UseBrowserExtensionPluginSetupQuery peers are not configured",
    );
  }
  const { enabled, hostId, plugin } = args;
  const codexHome = peers.useCodexHome(hostId);
  const setupPath = peers.resolveSetupPath(codexHome, plugin);
  const queryEnabled = enabled && setupPath != null;
  const queryKey =
    setupPath == null
      ? ["plugins", "browser-extension-setup", "missing"]
      : peers.buildQueryKey({ hostId, path: setupPath });
  const queryFn = async () => {
    if (setupPath == null || plugin == null) return [];
    const file = await peers!.readFile("read-file", {
      params: { hostId, path: setupPath },
    });
    const parsed = peers!.parseSetupFile.parse(JSON.parse(file.contents));
    return [
      peers!.buildSetupResult({
        codexHome,
        extensionId: parsed.extensionId,
        plugin,
      }),
    ];
  };
  const { data } = peers.useQuery({
    enabled: queryEnabled,
    queryKey,
    queryFn,
    retry: false,
    staleTime: peers.infiniteStaleTime,
  });
  return data;
}
