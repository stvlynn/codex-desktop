// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map a raw Welcome V2 role string onto a catalog role id.

import {
  DEFAULT_WELCOME_V2_ROLE_ID,
  FALLBACK_WELCOME_V2_ROLE_ID,
  WELCOME_V2_ROLE_IDS,
  type WelcomeV2RoleId,
  type WelcomeV2RoleInput,
} from "./welcome-v2-role-ids";

const WELCOME_V2_ROLE_ID_SET: ReadonlySet<string> = new Set(
  WELCOME_V2_ROLE_IDS,
);

/**
 * `"default"` → engineering; unknown roles → `something_else`; known catalog
 * keys pass through.
 */
export function normalizeWelcomeV2Role(
  role: WelcomeV2RoleInput,
): WelcomeV2RoleId {
  if (role === "default") {
    return DEFAULT_WELCOME_V2_ROLE_ID;
  }
  if (WELCOME_V2_ROLE_ID_SET.has(role)) {
    return role as WelcomeV2RoleId;
  }
  return FALLBACK_WELCOME_V2_ROLE_ID;
}
