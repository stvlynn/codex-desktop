// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// LocalStorage / preference key strings for onboarding completion state.

/** Persisted key for the last completed onboarding step id. */
export const LAST_COMPLETED_ONBOARDING_KEY = "last_completed_onboarding";

/** Electron preference: projectless onboarding finished. */
export const PROJECTLESS_ONBOARDING_COMPLETED_KEY =
  "electron:onboarding-projectless-completed";

/** Electron preference: conversational onboarding completed, keyed by account. */
export const CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY =
  "electron:onboarding-conversational-completed-by-account-id";

export const ONBOARDING_STORAGE_KEYS = {
  lastCompletedOnboarding: LAST_COMPLETED_ONBOARDING_KEY,
  projectlessCompleted: PROJECTLESS_ONBOARDING_COMPLETED_KEY,
  conversationalCompletedByAccountId:
    CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY,
} as const;
