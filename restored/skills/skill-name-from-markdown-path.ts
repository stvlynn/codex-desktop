// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_Xr` companion for exports `IY` / `FY`.

const PLUGIN_SKILL_PREFIX = "plugin:";

function normalizeSkillToken(raw: string): string {
  return raw.trim();
}

/** Skill name from a markdown skill path or `plugin:` token. */
export function skillNameFromMarkdownPath(pathValue: string): string | null {
  const normalized = pathValue.toLowerCase().replaceAll("\\", "/");
  if (normalized.startsWith(PLUGIN_SKILL_PREFIX)) {
    return normalizeSkillToken(normalized.slice(9).split("@")[0] ?? "");
  }
  const match = normalized.match(/(?:^|\/)skills\/([^/]+)\/skill\.md$/);
  const name = match?.[1];
  return name == null ? null : normalizeSkillToken(name);
}
