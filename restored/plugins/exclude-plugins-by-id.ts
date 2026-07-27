// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Pes` / export `yw`.

/** Drop plugin rows whose `plugin.id` is in `excludeIds`. */
export function excludePluginsById<T extends { plugin: { id: string } }>(
  rows: T[],
  excludeIds: string[],
): T[] {
  if (excludeIds.length === 0) return rows;
  const excluded = new Set(excludeIds);
  return rows.filter((row) => !excluded.has(row.plugin.id));
}
