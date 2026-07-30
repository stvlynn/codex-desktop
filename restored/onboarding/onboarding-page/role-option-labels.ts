// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Display labels for role-selection chips (bundle `appInitialValue` / Helper71).

import type { OnboardingRole } from "./constants";

/** Human labels for onboarding role ids (FormattedMessage defaultMessages). */
export const ONBOARDING_ROLE_LABELS: Record<OnboardingRole, string> = {
  default: "General",
  engineering: "Engineering",
  product_management: "Product",
  finance: "Finance",
  marketing: "Marketing",
  sales: "Sales",
  operations: "Operations",
  people_hr: "People / HR",
  legal: "Legal",
  data_science: "Data science",
  design: "Design",
  student: "Student",
  something_else: "Something else",
};

/** Roles shown on the welcome v2 grid (excludes the sentinel `default`). */
export const ROLE_SELECTION_OPTIONS: readonly OnboardingRole[] = [
  "engineering",
  "product_management",
  "finance",
  "marketing",
  "sales",
  "operations",
  "people_hr",
  "legal",
  "data_science",
  "design",
  "student",
  "something_else",
] as const;

export function labelForOnboardingRole(role: OnboardingRole): string {
  return ONBOARDING_ROLE_LABELS[role] ?? role.replaceAll("_", " ");
}
