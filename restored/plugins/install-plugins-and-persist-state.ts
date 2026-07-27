// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bjl`) / export `Zs`.

export type InstallPluginsAndPersistStatePeers = {
  Hjl: (...args: unknown[]) => unknown;
  Ujl: (...args: unknown[]) => unknown;
  Vjl: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  Wjl: (...args: unknown[]) => unknown;
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
 */
export async function installPluginsAndPersistState({
  hostId,
  pluginNames,
  plugins,
  refetchLocalPlugins,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("installPluginsAndPersistState peers are not configured");
  }
  let i = [];
  for (let r of pluginNames) {
    let t = plugins.find((item) => {
      return item.plugin.name === r;
    });
    if (t != null) {
      if (t.plugin.installed && t.plugin.enabled) {
        peers.Wjl.delete(peers.Ujl(hostId, t));
        continue;
      }
      i.push({
        plugin: t,
        pluginName: r,
      });
    }
  }
  if (i.length === 0) return [];
  let a = Promise.all(
      i.map(({ plugin, pluginName }) => {
        return peers.Hjl(hostId, plugin, pluginName);
      }),
    ).then((value) => {
      return {
        pluginNames: value.filter((item) => {
          return item != null;
        }),
        source: "install-response",
      };
    }),
    o = false;
  try {
    let e = peers
        .Vjl({
          isPollingStopped: () => {
            return o;
          },
          pluginsToInstall: i,
          refetchLocalPlugins,
        })
        .then((value) => {
          return value == null
            ? a
            : {
                pluginNames: value,
                source: "persisted-state",
              };
        }),
      t = await Promise.race([a, e]);
    if (t.source === "persisted-state")
      peers.Wf.info(
        "Conversational onboarding plugin readiness observed before install response",
        {
          safe: {
            pluginNames: t.pluginNames,
          },
        },
      );
    else if (t.pluginNames.length > 0)
      try {
        await refetchLocalPlugins();
      } catch (e) {
        throw (
          peers.Wf.error(
            "Failed to refresh conversational onboarding plugins after install",
            {
              safe: {
                pluginNames: t.pluginNames,
              },
              sensitive: {
                error: e,
              },
            },
          ),
          e
        );
      }
    return t.pluginNames;
  } finally {
    o = true;
  }
}
