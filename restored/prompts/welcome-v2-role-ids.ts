// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Welcome V2 onboarding role identifiers used for home prompt personalization.

/** Canonical role ids that own a prompt catalog bucket. */
export const WELCOME_V2_ROLE_IDS = [
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

export type WelcomeV2RoleId = (typeof WELCOME_V2_ROLE_IDS)[number];

/** UI/default sentinel that maps onto `engineering`. */
export type WelcomeV2RoleInput = WelcomeV2RoleId | "default" | (string & {});

export const DEFAULT_WELCOME_V2_ROLE_ID: WelcomeV2RoleId = "engineering";

export const FALLBACK_WELCOME_V2_ROLE_ID: WelcomeV2RoleId = "something_else";
