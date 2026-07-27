// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `R8r` / export `gK`.

import { marketplacePathFields } from "./marketplace-path-fields";
import { resolvePluginBrandingPaths } from "./resolve-plugin-branding-paths";

/** Flatten a marketplace plugin summary into a row model. */
export function pluginRowFromMarketplaceSummary(entry: {
  summary: {
    interface?: {
      shortDescription?: string | null;
      displayName?: string | null;
      composerIcon?: string | null;
      composerIconUrl?: string | null;
      logo?: string | null;
      logoUrl?: string | null;
      logoDark?: string | null;
      logoUrlDark?: string | null;
    } | null;
    keywords?: unknown;
    name?: string | null;
    id: string;
  };
  description?: string | null;
  marketplaceName?: string | null;
  marketplacePath?: string | null;
}): Record<string, unknown> {
  return {
    ...resolvePluginBrandingPaths(entry.summary),
    description:
      entry.summary.interface?.shortDescription ?? entry.description ?? null,
    displayName: entry.summary.interface?.displayName ?? null,
    marketplaceDisplayName: null,
    marketplaceName: entry.marketplaceName,
    plugin: entry.summary,
    keywords: entry.summary.keywords,
    ...marketplacePathFields({
      marketplaceName: entry.marketplaceName,
      marketplacePath: entry.marketplacePath,
    }),
  };
}
