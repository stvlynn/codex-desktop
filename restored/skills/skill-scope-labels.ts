// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Skill scope / path label helpers (bundle `qZa` / `JZa` near exports `Vj` / `Hj`).

import type { MessageDescriptor } from "react-intl";

import { skillScopeMessages } from "./skill-scope-messages";

export type SkillScope = "system" | "repo" | "user" | "admin" | string;

export type FormatSkillScopeLabelArgs = {
  scope: SkillScope;
  intl: { formatMessage: (message: MessageDescriptor) => string };
  repoLabel?: string;
  adminLabel?: string;
};

/**
 * Human label for a skill scope (bundle `qZa` / export `Vj`).
 */
export function formatSkillScopeLabel({
  scope,
  intl,
  repoLabel,
  adminLabel,
}: FormatSkillScopeLabelArgs): string {
  if (scope === "repo") {
    return repoLabel ?? intl.formatMessage(skillScopeMessages.repo);
  }
  if (scope === "admin") {
    return adminLabel ?? intl.formatMessage(skillScopeMessages.admin);
  }
  const message = skillScopeMessages[scope as keyof typeof skillScopeMessages];
  if (message) return intl.formatMessage(message);
  return scope;
}

/**
 * Longest matching workspace-root prefix for a skill path
 * (bundle `JZa` / export `Hj`).
 */
export function resolveSkillRepoLabel({
  skillPath,
  roots,
  fallbackLabel,
}: {
  skillPath: string;
  roots: readonly string[];
  fallbackLabel: string;
}): string {
  const match = roots.reduce<string | null>((best, root) => {
    if (!skillPath.startsWith(root)) return best;
    if (best == null || root.length > best.length) return root;
    return best;
  }, null);
  if (match == null) return fallbackLabel;
  const leaf = match.split(/[/\\]/).filter(Boolean).at(-1) ?? "";
  return leaf.length > 0 ? leaf : fallbackLabel;
}
