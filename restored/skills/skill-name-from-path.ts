// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_Xr` companion for `IY` / `FY`.

import { normalizeSkillSlug } from "./normalize-skill-slug";

export const PLUGIN_URL_SCHEME = "plugin://";

/** Skill name from a markdown skill path or `plugin://` token. */
export function skillNameFromPath(pathValue: string): string | null {
  const normalized = pathValue.toLowerCase().replaceAll("\\", "/");
  if (normalized.startsWith(PLUGIN_URL_SCHEME)) {
    const slug = normalized.slice(PLUGIN_URL_SCHEME.length).split("@")[0] ?? "";
    return normalizeSkillSlug(slug);
  }
  const match = normalized.match(/(?:^|\/)skills\/([^/]+)\/skill\.md$/);
  const name = match?.[1];
  return name == null ? null : normalizeSkillSlug(name);
}
