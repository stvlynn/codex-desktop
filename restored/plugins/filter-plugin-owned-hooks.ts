// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tqc` / export `id` (dedupe helper inlined).

export type PluginHookLike = {
  key: string;
  source?: string;
  pluginId?: string | null;
};

export type PluginSummaryLike = {
  summary: { id: string };
  hooks: Array<{ key: string }>;
};

/** Hooks owned by `plugin` that still appear enabled in `hookLists`. */
export function filterPluginOwnedHooks(
  hookLists: Array<{ hooks: PluginHookLike[] }> | null | undefined,
  plugin: PluginSummaryLike | null | undefined,
): PluginHookLike[] {
  if (plugin == null) return [];
  const allowed = new Set(plugin.hooks.map((h) => h.key));
  const matched =
    hookLists?.flatMap((group) =>
      group.hooks.filter(
        (hook) =>
          hook.source === "plugin" &&
          hook.pluginId === plugin.summary.id &&
          allowed.has(hook.key),
      ),
    ) ?? [];
  const seen = new Set<string>();
  const out: PluginHookLike[] = [];
  for (const hook of matched) {
    if (seen.has(hook.key)) continue;
    seen.add(hook.key);
    out.push(hook);
  }
  return out;
}
