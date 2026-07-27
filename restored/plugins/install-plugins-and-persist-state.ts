// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Bjl`) / export `Zs`.

export type InstallPluginsAndPersistStatePeers = {
  clearPending: (key: unknown) => void;
  pendingKey: (hostId: unknown, plugin: unknown) => unknown;
  installOne: (
    hostId: unknown,
    plugin: unknown,
    pluginName: string,
  ) => Promise<string | null | undefined>;
  pollUntilPersisted: (input: {
    isPollingStopped: () => boolean;
    pluginsToInstall: Array<{ plugin: unknown; pluginName: string }>;
    refetchLocalPlugins: () => Promise<unknown>;
  }) => Promise<string[] | null | undefined>;
  logError: (
    message: string,
    detail: {
      safe: Record<string, unknown>;
      sensitive: Record<string, unknown>;
    },
  ) => void;
};

let peers: InstallPluginsAndPersistStatePeers | null = null;

/** Wire installPluginsAndPersistState peers once companions land. */
export function setInstallPluginsAndPersistStatePeers(
  next: InstallPluginsAndPersistStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zs` / internal `Bjl`.
 * Install missing plugins and wait for persisted local state.
 */
export async function installPluginsAndPersistState(input: {
  hostId: unknown;
  pluginNames: string[];
  plugins: Array<{
    plugin: { name: string; installed?: boolean; enabled?: boolean };
  }>;
  refetchLocalPlugins: () => Promise<unknown>;
}): Promise<string[]> {
  if (peers == null) {
    throw new Error("InstallPluginsAndPersistState peers are not configured");
  }
  const toInstall: Array<{
    plugin: (typeof input.plugins)[number];
    pluginName: string;
  }> = [];
  for (const pluginName of input.pluginNames) {
    const match = input.plugins.find((item) => item.plugin.name === pluginName);
    if (match == null) continue;
    if (match.plugin.installed && match.plugin.enabled) {
      peers.clearPending(peers.pendingKey(input.hostId, match));
      continue;
    }
    toInstall.push({ plugin: match, pluginName });
  }
  if (toInstall.length === 0) return [];
  const installPromise = Promise.all(
    toInstall.map(({ plugin, pluginName }) =>
      peers!.installOne(input.hostId, plugin, pluginName),
    ),
  ).then((names) => ({
    pluginNames: names.filter((name): name is string => name != null),
    source: "install-response" as const,
  }));
  let stopped = false;
  try {
    const persisted = await peers.pollUntilPersisted({
      isPollingStopped: () => stopped,
      pluginsToInstall: toInstall,
      refetchLocalPlugins: input.refetchLocalPlugins,
    });
    const result =
      persisted == null
        ? await installPromise
        : { pluginNames: persisted, source: "persisted" as const };
    if (result.pluginNames.length > 0) {
      try {
        await input.refetchLocalPlugins();
      } catch (error) {
        peers.logError(
          "Failed to refresh conversational onboarding plugins after install",
          {
            safe: { pluginNames: result.pluginNames },
            sensitive: { error },
          },
        );
        throw error;
      }
    }
    return result.pluginNames;
  } finally {
    stopped = true;
  }
}
