// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve primary role + interleaved suggestion prompts for Welcome V2 home.

import { normalizeWelcomeV2Role } from "./normalize-welcome-v2-role";
import { pickWelcomeV2SuggestionPrompts } from "./pick-welcome-v2-suggestion-prompts";
import {
  FALLBACK_WELCOME_V2_ROLE_ID,
  type WelcomeV2RoleId,
  type WelcomeV2RoleInput,
} from "./welcome-v2-role-ids";
import type { WelcomeV2RolePrompt } from "./welcome-v2-role-prompt";
import { WELCOME_V2_ROLE_PROMPT_CATALOG } from "./welcome-v2-role-prompt-catalog";

export type GetWelcomeV2RoleSuggestionsProps = {
  roles: readonly WelcomeV2RoleInput[];
};

export type WelcomeV2RoleSuggestions = {
  role: WelcomeV2RoleId;
  suggestionPrompts: WelcomeV2RolePrompt[];
};

/**
 * Primary role comes from the first selected role; suggestion tiles round-robin
 * across all selected roles from the Welcome V2 catalog.
 */
export function getWelcomeV2RoleSuggestions({
  roles,
}: GetWelcomeV2RoleSuggestionsProps): WelcomeV2RoleSuggestions {
  return {
    role: normalizeWelcomeV2Role(roles[0] ?? FALLBACK_WELCOME_V2_ROLE_ID),
    suggestionPrompts: pickWelcomeV2SuggestionPrompts({
      roles,
      promptsByRole: WELCOME_V2_ROLE_PROMPT_CATALOG,
    }),
  };
}
