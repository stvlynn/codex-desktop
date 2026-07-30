// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Analytics step-name table wired next to step transitions (Helper22 / `$a`).

import { ONBOARDING_STEPS, type OnboardingStep } from "./constants";

/** Bundle `$a` — maps wizard steps to analytics event step ids. */
export const ONBOARDING_STEP_ANALYTICS_NAME: Record<
  OnboardingStep,
  string | null
> = {
  [ONBOARDING_STEPS.Start]: null,
  [ONBOARDING_STEPS.TeenWelcome]: "teen_welcome",
  [ONBOARDING_STEPS.TeenInterests]: "teen_interests",
  [ONBOARDING_STEPS.TeenPrompts]: "teen_prompts",
  [ONBOARDING_STEPS.WindowsSandboxSetup]: null,
  [ONBOARDING_STEPS.ConversationalOnboarding]: "conversational_onboarding",
  [ONBOARDING_STEPS.RoleSelection]: "role_selection",
  [ONBOARDING_STEPS.AgentMigrationSourceSelection]:
    "agent_migration_source_selection",
  [ONBOARDING_STEPS.AgentMigrationItemSelection]:
    "agent_migration_item_selection",
  [ONBOARDING_STEPS.Complete]: null,
};

export function analyticsNameForOnboardingStep(
  step: OnboardingStep,
): string | null {
  return ONBOARDING_STEP_ANALYTICS_NAME[step] ?? null;
}
