// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Default Welcome V2 role-state payload stored under the preference key.

import type { WelcomeV2RoleInput } from "../prompts/welcome-v2-role-ids";

export type WelcomeV2RoleState = {
  roles: WelcomeV2RoleInput[];
  personalizedSuggestionsEnabled: boolean;
  workMode: string | null;
};

/** Default atom value for `electron:onboarding-welcome-v2-role-state`. */
export const WELCOME_V2_ROLE_STATE_DEFAULT: WelcomeV2RoleState = {
  roles: [],
  personalizedSuggestionsEnabled: true,
  workMode: null,
};
