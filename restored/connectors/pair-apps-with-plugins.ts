// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ooc` / export `_p` (+ companions `VGa` / `Moc` / `JGa`).

function normalizeMatchKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "");
}

type AppLike = {
  name: string;
  pluginDisplayNames: readonly string[];
  isAccessible: boolean;
  isEnabled: boolean;
};

type PluginLike = {
  name: string;
  interface?: { displayName?: string | null } | null;
};

type PluginRow = { plugin: PluginLike & { id: string } };

function pluginMatchKeys(plugin: PluginLike): Set<string> {
  return new Set(
    [plugin.name, plugin.interface?.displayName ?? ""].map(normalizeMatchKey),
  );
}

function appMatchKeys(app: AppLike): Set<string> {
  return new Set([app.name, ...app.pluginDisplayNames].map(normalizeMatchKey));
}

function appMatchesPlugin(app: AppLike, plugin: PluginLike): boolean {
  const pluginKeys = pluginMatchKeys(plugin);
  for (const key of appMatchKeys(app)) {
    if (pluginKeys.has(key)) return true;
  }
  return false;
}

function withAppInstallState(app: AppLike, row: PluginRow): PluginRow {
  return {
    ...row,
    plugin: {
      ...row.plugin,
      installed: app.isAccessible,
      enabled: app.isEnabled,
    },
  };
}

/** Pair connector apps with matching plugin rows (deduped by plugin id). */
export function pairAppsWithPlugins(args: {
  apps: readonly AppLike[];
  plugins: readonly PluginRow[];
}): Array<{ app: AppLike; plugin: PluginRow }> {
  const { apps, plugins } = args;
  const seen = new Set<string>();
  return apps.flatMap((app) => {
    const row =
      plugins.find((plugin) => appMatchesPlugin(app, plugin.plugin)) ?? null;
    if (row == null || seen.has(row.plugin.id)) return [];
    seen.add(row.plugin.id);
    return [{ app, plugin: withAppInstallState(app, row) }];
  });
}
