// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kes` / export `mw` — pure helper.

import { marketplacePathOrRemote } from "./marketplace-path-or-remote";
import { pluginRowDedupeKey } from "./plugin-row-dedupe-key";

type PluginRow = {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
  marketplaceDisplayName?: string | null;
  marketplaceName?: string;
  keywords?: string[] | null;
  displayName?: string | null;
  plugin: {
    id: string;
    name: string;
    installed?: boolean;
    remotePluginId?: string | null;
    shareContext?: { remotePluginId?: string | null } | null;
    availability?: unknown;
  };
};

function normalizePluginSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function pluginSearchTokens(row: PluginRow): string[] {
  return [row.plugin.name, row.displayName ?? "", ...(row.keywords ?? [])];
}

function matchesPluginQuery(query: string, tokens: string[]): boolean {
  if (query.length === 0) return true;
  const needle = normalizePluginSearchText(query);
  return normalizePluginSearchText(tokens.join(" ")).includes(needle);
}

function isPinnedPlugin(
  row: PluginRow,
  pinnedIds?: Set<string> | null,
): boolean {
  return (
    pinnedIds?.has(row.plugin.id) === true ||
    (row.plugin.remotePluginId != null &&
      pinnedIds?.has(row.plugin.remotePluginId) === true)
  );
}

function sortPluginsByPinThenAvailability(
  rows: PluginRow[],
  pinnedIds?: Set<string> | null,
): PluginRow[] {
  return rows.sort((a, b) => {
    const aPinned = isPinnedPlugin(a, pinnedIds);
    if (aPinned !== isPinnedPlugin(b, pinnedIds)) return aPinned ? -1 : 1;
    return 0;
  });
}

/** Filter/dedupe plugin catalog rows by query + optional marketplace value. */
export function filterPluginsByMarketplaceQuery(args: {
  dedupeSearchResults?: boolean;
  plugins: PluginRow[];
  marketplaceFilterValue?: string | null;
  query: string;
  pinnedPluginIds?: Set<string> | null;
}): PluginRow[] {
  const {
    dedupeSearchResults = false,
    plugins,
    marketplaceFilterValue = null,
    query,
    pinnedPluginIds = null,
  } = args;
  const filtered = plugins.filter((row) => {
    if (!matchesPluginQuery(query, pluginSearchTokens(row))) return false;
    if (marketplaceFilterValue == null) return true;
    return (
      marketplacePathOrRemote(row) === marketplaceFilterValue &&
      (row.marketplaceDisplayName?.trim() || row.marketplaceName || "").trim()
        .length > 0
    );
  });
  if (!dedupeSearchResults)
    return sortPluginsByPinThenAvailability(filtered, pinnedPluginIds);
  const byKey = new Map<string, PluginRow>();
  for (const row of filtered) {
    const key = pluginRowDedupeKey(row);
    const existing = byKey.get(key);
    if (
      existing == null ||
      (!existing.plugin.installed && row.plugin.installed)
    ) {
      byKey.set(key, row);
    }
  }
  return sortPluginsByPinThenAvailability(
    Array.from(byKey.values()),
    pinnedPluginIds,
  );
}
