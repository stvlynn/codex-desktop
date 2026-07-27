// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pLc` / export `Kd`.

/** Return plugin name when it comes from a first-party / catalog channel. */
export function catalogPluginDisplayName(
  plugin:
    | {
        name?: string;
        appMetadata?: { firstPartyType?: string | null };
        distributionChannel?: string | null;
      }
    | null
    | undefined,
): string | undefined {
  if (
    plugin == null ||
    (!plugin.appMetadata?.firstPartyType?.trim() &&
      plugin.distributionChannel !== "DEFAULT_OAI_CATALOG" &&
      plugin.distributionChannel !== "ECOSYSTEM_DIRECTORY")
  ) {
    return undefined;
  }
  return plugin.name;
}
