// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `g2n` / export `Z3` (simplified segment walker).

import { trimDotSlashPrefix } from "../files/trim-dot-slash-prefix";

export type SkillsManagePathInfo = {
  skillId: string;
  skillRootPath: string;
  pluginId: string | null;
  pluginMarketplaceName?: string | null;
  isSystem?: boolean;
  relativePathSegments: string[];
};

/**
 * Parse a skills/manage-style path into skill/plugin identity.
 * Mirrors the bundle `v2n`/`y2n` walkers for `skills` + `plugins` layouts.
 */
export function parseSkillsManagePath(rawPath: string): SkillsManagePathInfo | null {
  const normalized = trimDotSlashPrefix(rawPath).replace(/\/+$/, "");
  const segments = normalized.split("/").filter((part) => part.length > 0);
  if (segments.length === 0) return null;
  const rootSlash = normalized.match(/^\/+/)?.[0] ?? "";

  for (let i = 0; i < segments.length; i += 1) {
    const a = segments[i]?.toLowerCase();
    const b = segments[i + 1]?.toLowerCase();
    if ((a === ".codex" || a === "codex") && b === "skills") {
      const maybeSystem = segments[i + 2]?.toLowerCase();
      const offset =
        maybeSystem === "system" || maybeSystem === ".system" ? 3 : 2;
      const skillId = segments[i + offset] ?? null;
      if (skillId != null && skillId.length > 0) {
        return {
          skillId,
          skillRootPath: `${rootSlash}${segments.slice(0, i + offset + 1).join("/")}`,
          pluginId: null,
          isSystem: maybeSystem === ".system" || maybeSystem === "system",
          relativePathSegments: segments.slice(i + offset + 1),
        };
      }
    }
  }

  for (let i = 0; i < segments.length; i += 1) {
    if (segments[i]?.toLowerCase() !== "plugins") continue;
    const hasMarketplace = segments[i + 1]?.toLowerCase() === "marketplace";
    const pluginIndex = i + (hasMarketplace ? 3 : 1);
    const pluginId = segments[pluginIndex] ?? null;
    if (pluginId == null) continue;
    const afterPlugin = pluginIndex + (hasMarketplace ? 1 : 0);
    const skillsAt = segments.findIndex(
      (part, idx) => idx > afterPlugin && part.toLowerCase() === "skills",
    );
    const noSkills = skillsAt < 0;
    const skillIndex = noSkills ? afterPlugin : skillsAt + 1;
    const skillId = noSkills ? pluginId : (segments[skillIndex] ?? null);
    const relative = segments.slice(skillIndex + 1);
    if (
      skillId == null ||
      (noSkills &&
        (relative.length !== 1 || relative[0]?.toLowerCase() !== "skill.md"))
    ) {
      continue;
    }
    return {
      skillId,
      skillRootPath: `${rootSlash}${segments.slice(0, skillIndex + 1).join("/")}`,
      pluginId,
      pluginMarketplaceName: hasMarketplace ? (segments[i + 2] ?? null) : null,
      relativePathSegments: relative,
    };
  }
  return null;
}
