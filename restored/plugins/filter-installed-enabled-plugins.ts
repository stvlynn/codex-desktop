// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Res` / export `pw`.

import { isAvailabilityDisabledByAdmin } from "./is-availability-disabled-by-admin";

type PluginRow = {
  plugin: {
    installed?: boolean;
    enabled?: boolean;
    availability?: unknown;
  };
};

/** Keep installed+enabled plugins that are not admin-disabled. */
export function filterInstalledEnabledPlugins<T extends PluginRow>(
  rows: T[],
): T[] {
  return rows.filter(
    (row) =>
      row.plugin.installed === true &&
      row.plugin.enabled === true &&
      !isAvailabilityDisabledByAdmin(row.plugin.availability),
  );
}
