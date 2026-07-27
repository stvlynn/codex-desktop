// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `S5r` / export `yK`. Hash-fallback icon list deferred (returns matched key or null).

import { connectorIconKeyFromSlug } from "./connector-icon-key-from-slug";
import { slugifyPluginNamePrefix } from "./slugify-plugin-name-prefix";

function matchBrandingIconKey(plugin: {
  name?: string | null;
  id?: string | null;
  interface?: { displayName?: string | null } | null;
}): string | null {
  const tokens = [
    plugin.name ?? "",
    plugin.id ?? "",
    plugin.interface?.displayName ?? "",
  ].map(slugifyPluginNamePrefix);
  for (const token of tokens) {
    const key = connectorIconKeyFromSlug(token);
    if (key != null) return key;
  }
  return null;
}

/** Resolve composer/logo branding paths for a plugin summary. */
export function resolvePluginBrandingPaths(
  plugin: {
    id: string;
    name?: string | null;
    interface?: {
      composerIcon?: string | null;
      composerIconUrl?: string | null;
      logo?: string | null;
      logoUrl?: string | null;
      logoDark?: string | null;
      logoUrlDark?: string | null;
      displayName?: string | null;
    } | null;
  },
  marketplace?: {
    logoUrl?: string | null;
    logoUrlDark?: string | null;
  } | null,
): {
  composerIconPath: string | null;
  logoDarkPath: string | null;
  logoPath: string | null;
} {
  const iface = plugin.interface;
  const composerIcon = iface?.composerIcon ?? iface?.composerIconUrl ?? null;
  const logo = iface?.logo ?? iface?.logoUrl ?? null;
  const logoDark = iface?.logoDark ?? iface?.logoUrlDark ?? null;
  const matched = matchBrandingIconKey(plugin);
  const hasExplicitLogo = logo != null || logoDark != null;
  const composerIconPath = composerIcon ?? (hasExplicitLogo ? null : matched);
  const logoPath = hasExplicitLogo
    ? (logo ?? logoDark ?? null)
    : (matched ?? marketplace?.logoUrl ?? marketplace?.logoUrlDark ?? null);
  const logoDarkPath = hasExplicitLogo
    ? (logoDark ?? null)
    : (matched ?? marketplace?.logoUrlDark ?? marketplace?.logoUrl ?? null);
  if (composerIconPath != null || logoPath != null) {
    return { composerIconPath, logoDarkPath, logoPath };
  }
  return {
    composerIconPath: matched,
    logoDarkPath: matched,
    logoPath: matched,
  };
}
