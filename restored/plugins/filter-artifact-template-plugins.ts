// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `O4n` / export `J3`.

import { ARTIFACT_TEMPLATE_NAME_PREFIX } from "./artifact-template-name-prefix";

type ArtifactTemplatePlugin = {
  name: string;
  path: string;
  enabled?: boolean;
  interface?: { iconLarge?: string | null } | null;
};

/** Keep enabled artifact-template plugins for a host path (unique short names). */
export function filterArtifactTemplatePlugins(
  plugins: ArtifactTemplatePlugin[],
  hostPath: unknown,
  pathOwners: Map<string, unknown>,
): ArtifactTemplatePlugin[] {
  const seen = new Set<string>();
  return plugins.filter((plugin) => {
    const shortName = plugin.name.slice(plugin.name.lastIndexOf(":") + 1);
    if (
      !plugin.enabled ||
      !shortName.startsWith(ARTIFACT_TEMPLATE_NAME_PREFIX) ||
      pathOwners.get(plugin.path) !== hostPath ||
      !plugin.interface?.iconLarge?.trim() ||
      seen.has(shortName)
    ) {
      return false;
    }
    seen.add(shortName);
    return true;
  });
}
