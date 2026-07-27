// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jes` / export `bw` — extractFn(jes); companions Ces/Aes/Mes/xes/Ses/bes/Yes.

import { filterPluginsByMarketplaceQuery } from "./filter-plugins-by-marketplace-query";
import { isAvailabilityDisabledByAdmin } from "./is-availability-disabled-by-admin";
import { pluginRowDedupeKey } from "./plugin-row-dedupe-key";

type PluginRow = {
  displayName?: string | null;
  keywords?: string[] | null;
  plugin: {
    id: string;
    name: string;
    installed?: boolean;
    availability?: string | null;
    remotePluginId?: string | null;
    shareContext?: { remotePluginId?: string | null } | null;
  };
};
type PluginSection = { section: { id: string }; plugins: PluginRow[] };

const PLUGIN_SEARCH_MATCH_RANK_NONE = 6;

function normalizePluginSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
function pluginSearchTokens(row: PluginRow): string[] {
  return [row.plugin.name, row.displayName ?? "", ...(row.keywords ?? [])];
}
function matchesPluginQueryTokens(query: string, tokens: string[]): boolean {
  if (query.length === 0) return true;
  const needle = normalizePluginSearchText(query);
  return normalizePluginSearchText(tokens.join(" ")).includes(needle);
}
function pluginSearchMatchRank(row: PluginRow, needle: string): number {
  const display = normalizePluginSearchText(row.displayName ?? "");
  const name = normalizePluginSearchText(row.plugin.name);
  const pair = [display, name];
  const keywords = (row.keywords ?? []).map(normalizePluginSearchText);
  const rank = [
    display === needle,
    name === needle,
    pair.some((v) => v.startsWith(needle)),
    pair.some((v) => v.includes(needle)),
    keywords.includes(needle),
    keywords.some((v) => v.includes(needle)) ||
      matchesPluginQueryTokens(needle, pluginSearchTokens(row)),
  ].findIndex(Boolean);
  return rank === -1 ? PLUGIN_SEARCH_MATCH_RANK_NONE : rank;
}
function searchPluginsByQuery(args: {
  plugins: PluginRow[];
  query: string;
}): PluginRow[] {
  const needle = normalizePluginSearchText(args.query);
  if (needle.length === 0) {
    return filterPluginsByMarketplaceQuery({
      dedupeSearchResults: true,
      plugins: args.plugins,
      query: args.query,
    });
  }
  const byKey = new Map<
    string,
    { catalogIndex: number; matchRank: number; plugin: PluginRow }
  >();
  for (const [catalogIndex, plugin] of args.plugins.entries()) {
    const matchRank = pluginSearchMatchRank(plugin, needle);
    const key = pluginRowDedupeKey(plugin);
    const existing = byKey.get(key);
    if (existing == null) {
      byKey.set(key, { catalogIndex, matchRank, plugin });
      continue;
    }
    existing.matchRank = Math.min(existing.matchRank, matchRank);
    if (!existing.plugin.plugin.installed && plugin.plugin.installed)
      existing.plugin = plugin;
  }
  return Array.from(byKey.values())
    .filter(({ matchRank }) => matchRank < PLUGIN_SEARCH_MATCH_RANK_NONE)
    .sort((left, right) => {
      if (left.matchRank !== right.matchRank)
        return left.matchRank - right.matchRank;
      const leftDisabled = isAvailabilityDisabledByAdmin(
        left.plugin.plugin.availability,
      );
      const rightDisabled = isAvailabilityDisabledByAdmin(
        right.plugin.plugin.availability,
      );
      if (leftDisabled !== rightDisabled) return leftDisabled ? 1 : -1;
      return left.catalogIndex - right.catalogIndex;
    })
    .map(({ plugin }) => plugin);
}

/** Filter each plugin section down to query matches (bundle `jes` / `bw`). */
export function filterPluginSectionsByQuery(args: {
  query: string;
  sections: PluginSection[];
}): PluginSection[] {
  const { query, sections } = args;
  const sectionIdByPluginKey = new Map<string, string>();
  for (const { plugins, section } of sections) {
    for (const plugin of plugins) {
      const key = pluginRowDedupeKey(plugin);
      if (!sectionIdByPluginKey.has(key))
        sectionIdByPluginKey.set(key, section.id);
    }
  }
  const matchedBySection = new Map<string, PluginRow[]>();
  for (const plugin of searchPluginsByQuery({
    plugins: sections.flatMap(({ plugins }) => plugins),
    query,
  })) {
    const sectionId = sectionIdByPluginKey.get(pluginRowDedupeKey(plugin));
    if (sectionId == null) continue;
    const list = matchedBySection.get(sectionId) ?? [];
    list.push(plugin);
    matchedBySection.set(sectionId, list);
  }
  return sections.flatMap((section) => {
    const plugins = matchedBySection.get(section.section.id) ?? [];
    return plugins.length === 0 ? [] : [{ ...section, plugins }];
  });
}
