// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `SVs` / export `y_`.

import { pickSuggestedOnboardingRole } from "./pick-suggested-onboarding-role";

/** Prefer backend role; fall back to local role suggestion. */
export function resolveBackendOrLocalRole(args: {
  backendRole: string | null | undefined;
  localRoles: readonly string[];
}): string | null {
  const { backendRole, localRoles } = args;
  const resolved =
    (backendRole === "something_else" ? null : backendRole) ??
    pickSuggestedOnboardingRole({
      roleSelectionSkipped: false,
      roles: localRoles,
    });
  return resolved === "something_else" ? null : (resolved ?? null);
}
