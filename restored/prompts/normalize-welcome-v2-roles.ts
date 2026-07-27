// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Deduplicate and normalize a list of Welcome V2 role selections.

import {
  FALLBACK_WELCOME_V2_ROLE_ID,
  type WelcomeV2RoleId,
  type WelcomeV2RoleInput,
} from "./welcome-v2-role-ids";
import { normalizeWelcomeV2Role } from "./normalize-welcome-v2-role";

/**
 * Empty input collapses to `[something_else]`; otherwise map + unique-preserve
 * order via `Set`.
 */
export function normalizeWelcomeV2Roles(
  roles: readonly WelcomeV2RoleInput[],
): WelcomeV2RoleId[] {
  const source =
    roles.length > 0 ? roles : ([FALLBACK_WELCOME_V2_ROLE_ID] as const);
  return Array.from(new Set(source.map(normalizeWelcomeV2Role)));
}
