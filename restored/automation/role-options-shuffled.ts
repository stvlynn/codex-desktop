// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wVs` / export `S_`; companion `OVs`.

export const AUTOMATION_ROLE_OPTIONS = [
  "engineering",
  "data_science",
  "product_management",
  "design",
  "marketing",
  "sales",
  "finance",
  "operations",
  "people_hr",
  "legal",
  "student",
  "something_else",
] as const;

/** Shuffle role options, keeping `something_else` last. */
export function roleOptionsShuffled(random: () => number = Math.random,
): string[] {
  const roles = AUTOMATION_ROLE_OPTIONS.filter(
    (role) => role !== "something_else",
  );
  for (let i = roles.length - 1; i > 0; --i) {
    const j = Math.floor(random() * (i + 1));
    [roles[i], roles[j]] = [roles[j], roles[i]];
  }
  return [...roles, "something_else"];
}
