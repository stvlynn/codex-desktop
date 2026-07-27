// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yVs` / export `b_`; companion `DVs` / `EVs`.

const CODING_ROLES = new Set(["default", "engineering", "data_science"]);

/** Map selected roles to `coding` vs `non_coding`. */
export function codingRoleCategory(
  roles: readonly string[],
): "coding" | "non_coding" {
  return roles.some((role) => CODING_ROLES.has(role)) ? "coding" : "non_coding";
}
