// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xVs` / export `x_`.

/** Prefer engineering/data_science, else first non-default role. */
export function pickSuggestedOnboardingRole(args: {
  roleSelectionSkipped: boolean;
  roles: readonly string[];
}): string | null {
  const { roleSelectionSkipped, roles } = args;
  if (roleSelectionSkipped) return null;
  return (
    roles.find((role) => role === "engineering" || role === "data_science") ??
    roles.find((role) => role !== "default" && role !== "something_else") ??
    (roles.includes("something_else") ? "something_else" : null)
  );
}
