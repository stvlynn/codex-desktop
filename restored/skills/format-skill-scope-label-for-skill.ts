// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `YZa` / export `Uj` (uses `qZa`/`JZa` / `Vj`/`Hj`).

import type { MessageDescriptor } from "react-intl";

import {
  formatSkillScopeLabel,
  resolveSkillRepoLabel,
  type SkillScope,
} from "./skill-scope-labels";

type IntlShape = {
  formatMessage: (message: MessageDescriptor) => string;
};

/** Format a skill's scope label, resolving repo roots when needed. */
export function formatSkillScopeLabelForSkill(args: {
  skill: { scope: SkillScope; path: string };
  roots: readonly string[];
  intl: IntlShape;
  fallbackRepoLabel?: string;
  adminLabel?: string;
}): string {
  return formatSkillScopeLabel({
    scope: args.skill.scope,
    intl: args.intl,
    repoLabel: resolveSkillRepoLabel({
      skillPath: args.skill.path,
      roots: args.roots,
      fallbackLabel:
        args.fallbackRepoLabel ??
        formatSkillScopeLabel({ scope: "repo", intl: args.intl }),
    }),
    adminLabel: args.adminLabel,
  });
}
