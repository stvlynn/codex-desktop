// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Build skill insert text for the composer (bundle `a1r` / export `kJ`).

import { buildSkillMentionMarkdown } from "./build-skill-mention-markdown";

export type SkillInsertSource = {
  name: string;
  path?: string | null;
  interface?: { defaultPrompt?: string | null } | null;
};

function ensureTrailingSpace(value: string): string {
  return value.endsWith(" ") ? value : `${value} `;
}

function getSkillDefaultPrompt(skill: SkillInsertSource): string | null {
  const prompt = skill.interface?.defaultPrompt;
  if (!prompt) return null;
  const trimmed = prompt.trim();
  return trimmed.length === 0 ? null : trimmed;
}

/**
 * Prefer the skill's default prompt (appending a `$name` mention when missing),
 * otherwise insert just the mention markdown.
 */
export function buildSkillInsertText(skill: SkillInsertSource): string {
  const defaultPrompt = getSkillDefaultPrompt(skill);
  const mention = buildSkillMentionMarkdown({
    name: skill.name,
    path: skill.path,
  });
  if (!defaultPrompt) return ensureTrailingSpace(mention);

  const lowerPrompt = defaultPrompt.toLowerCase();
  const linkedNeedle = `[$${skill.name.toLowerCase()}](`;
  if (lowerPrompt.includes(linkedNeedle)) {
    return ensureTrailingSpace(defaultPrompt);
  }
  const bareNeedle = `$${skill.name.toLowerCase()}`;
  if (!skill.path && lowerPrompt.includes(bareNeedle)) {
    return ensureTrailingSpace(defaultPrompt);
  }
  return ensureTrailingSpace(`${defaultPrompt} ${mention}`);
}
