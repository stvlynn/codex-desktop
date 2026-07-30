// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Onboarding wizard step ids, interest tags, and role catalogs.

export const ONBOARDING_STEPS = {
  Start: "start",
  TeenWelcome: "teen-welcome",
  TeenInterests: "teen-interests",
  TeenPrompts: "teen-prompts",
  WindowsSandboxSetup: "windows-sandbox-setup",
  ConversationalOnboarding: "conversational-onboarding",
  RoleSelection: "role-selection",
  AgentMigrationSourceSelection: "agent-migration-source-selection",
  AgentMigrationItemSelection: "agent-migration-item-selection",
  Complete: "complete",
} as const;

export type OnboardingStep =
  (typeof ONBOARDING_STEPS)[keyof typeof ONBOARDING_STEPS];

export const TEEN_INTERESTS = [
  "animals",
  "fitness",
  "school",
  "art_creative",
  "beauty_style",
  "science",
  "money",
  "gaming",
  "music",
  "sports",
  "coding",
  "other",
] as const;

export type TeenInterest = (typeof TEEN_INTERESTS)[number];

export const ONBOARDING_ROLES = [
  "default",
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

export type OnboardingRole = (typeof ONBOARDING_ROLES)[number];

export const WORK_MODES = ["coding", "non_coding"] as const;

export type WorkMode = (typeof WORK_MODES)[number];
