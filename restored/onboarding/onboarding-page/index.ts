// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Onboarding page public barrel.

export {
  OnboardingPage,
  ensureOnboardingPageInit,
  bindOnboardingPage,
  type OnboardingPageProps,
} from "./page";

export {
  ONBOARDING_STEPS,
  ONBOARDING_ROLES,
  TEEN_INTERESTS,
  WORK_MODES,
  type OnboardingStep,
  type OnboardingRole,
  type TeenInterest,
  type WorkMode,
} from "./constants";

export {
  advanceOnboardingStep,
  resolveStandardOnboardingEntry,
  resolvePostMigrationStep,
  type OnboardingAdvanceContext,
  type OnboardingStepResult,
} from "./advance-onboarding-step";

export {
  ONBOARDING_STEP_ANALYTICS_NAME,
  analyticsNameForOnboardingStep,
} from "./onboarding-step-analytics";

export {
  TEEN_INTEREST_OPTIONS,
  type TeenInterestOption,
} from "./teen-interest-options";

export {
  TEEN_PROMPT_CATALOG,
  pickTeenPromptsForInterests,
  type TeenPromptCard,
} from "./teen-prompt-catalog";

export {
  ONBOARDING_ROLE_LABELS,
  ROLE_SELECTION_OPTIONS,
  labelForOnboardingRole,
} from "./role-option-labels";
