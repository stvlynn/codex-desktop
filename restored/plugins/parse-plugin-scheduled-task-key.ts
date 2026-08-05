// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oCe` (companion) + `aCe` / export `fmt`.

/** Split `pluginId/scheduledTaskKey` path pairs. */
export function parsePluginScheduledTaskKey(
  value: string,
): { pluginId: string; scheduledTaskKey: string } | null {
  const slash = value.lastIndexOf("/");
  return slash <= 0 || slash === value.length - 1
    ? null
    : {
        pluginId: value.slice(0, slash),
        scheduledTaskKey: value.slice(slash + 1),
      };
}

/** Build `pluginId/scheduledTaskKey` composite key (bundle `iCe`). */
export function buildPluginScheduledTaskKey(
  pluginId: string,
  scheduledTaskKey: string,
): string {
  return `${pluginId}/${scheduledTaskKey}`;
}

/** Plugin id prefix from a scheduled-task composite key. */
export function pluginIdFromScheduledTaskKey(value: string): string | null {
  return parsePluginScheduledTaskKey(value)?.pluginId ?? null;
}
