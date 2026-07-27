// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map a skill record into a mention list item (bundle `M1r` / export `gJ`).

import { getPluginDisplayName } from "./get-plugin-display-name";
import { getPluginShortDescription } from "./get-plugin-short-description";

export type SkillMentionSource = {
  name: string;
  path?: string | null;
  description?: string | null;
  short_description?: string | null;
  shortDescription?: string | null;
  interface?: {
    displayName?: string | null;
    shortDescription?: string | null;
    iconSmall?: string | null;
  } | null;
};

export type SkillMentionItem = {
  name: string;
  displayName: string;
  path: string | null | undefined;
  description: string | null | undefined;
  iconSmall: string;
};

/** Normalize a skill into composer mention-list fields (`M1r` / `gJ`). */
export function toSkillMentionItem(skill: SkillMentionSource): SkillMentionItem {
  return {
    name: skill.name,
    displayName: getPluginDisplayName(skill),
    path: skill.path,
    description: getPluginShortDescription(skill),
    iconSmall: skill.interface?.iconSmall ?? "",
  };
}
