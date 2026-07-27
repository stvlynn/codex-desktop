// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Round-robin picker that interleaves prompts across selected roles.

import { normalizeWelcomeV2Roles } from "./normalize-welcome-v2-roles";
import type {
  WelcomeV2RoleId,
  WelcomeV2RoleInput,
} from "./welcome-v2-role-ids";
import type { WelcomeV2RolePrompt } from "./welcome-v2-role-prompt";
import { WELCOME_V2_SUGGESTION_LIMIT } from "./welcome-v2-suggestion-limit";

export type PickWelcomeV2SuggestionPromptsProps = {
  roles: readonly WelcomeV2RoleInput[];
  promptsByRole: Readonly<
    Record<WelcomeV2RoleId, readonly WelcomeV2RolePrompt[]>
  >;
  limit?: number;
};

/**
 * Take one prompt from each role first, then continue round-robin until `limit`
 * unique tiles are collected (or pools are exhausted).
 */
export function pickWelcomeV2SuggestionPrompts({
  roles,
  promptsByRole,
  limit = WELCOME_V2_SUGGESTION_LIMIT,
}: PickWelcomeV2SuggestionPromptsProps): WelcomeV2RolePrompt[] {
  const roleLists = normalizeWelcomeV2Roles(roles).map(
    (role) => promptsByRole[role],
  );
  const cursors = roleLists.map(() => 0);
  const picked: WelcomeV2RolePrompt[] = [];
  const seen = new Set<WelcomeV2RolePrompt>();

  for (const [index] of roleLists.entries()) {
    const prompt = roleLists[index][cursors[index]];
    cursors[index] += 1;
    if (!prompt || seen.has(prompt)) {
      continue;
    }
    seen.add(prompt);
    picked.push(prompt);
    if (picked.length >= limit) {
      return picked;
    }
  }

  while (picked.length < limit) {
    let progressed = false;
    for (let index = 0; index < roleLists.length; index += 1) {
      const prompt = roleLists[index][cursors[index]];
      cursors[index] += 1;
      if (!prompt || seen.has(prompt)) {
        continue;
      }
      seen.add(prompt);
      picked.push(prompt);
      progressed = true;
      if (picked.length >= limit) {
        break;
      }
    }
    if (!progressed) {
      break;
    }
  }

  return picked;
}
