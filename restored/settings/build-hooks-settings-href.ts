// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `V6c` / export `wl` (+ companion `W6c`).

/** Hooks settings route path (`W6c`). */
export const HOOKS_SETTINGS_PATH = "hooks-settings";

/** Build `hooks-settings` href with optional host/plugin/project query. */
export function buildHooksSettingsHref(args: {
  hostId?: string | null;
  pluginId?: string | null;
  projectRoot?: string | null;
  source?: string | null;
}): string {
  const { hostId, pluginId, projectRoot, source } = args;
  const params = new URLSearchParams();
  if (hostId != null) params.set("hostId", hostId);
  if (source != null) params.set("source", source);
  if (source != null && projectRoot != null)
    params.set("projectRoot", projectRoot);
  if (source === "plugin" && pluginId !== undefined) {
    params.set("pluginId", pluginId ?? "__unknown__");
  }
  const query = params.toString();
  return query === "" ? HOOKS_SETTINGS_PATH : `${HOOKS_SETTINGS_PATH}?${query}`;
}
