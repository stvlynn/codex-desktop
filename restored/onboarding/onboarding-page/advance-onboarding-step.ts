// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Pure step-advance graph (Helpers 18–21): next onboarding step from context + result.

import { ONBOARDING_STEPS, type OnboardingStep } from "./constants";

export type OnboardingAdvanceContext = {
  isLoading: boolean;
  shouldShowStandardOnboarding: boolean;
  shouldShowConversationalOnboarding: boolean;
  shouldShowTeenOnboarding: boolean;
  finalStep: { shouldShow: boolean };
  agentMigration: {
    shouldShow: () => Promise<boolean>;
  };
};

export type AgentMigrationSourceResult = {
  step: typeof ONBOARDING_STEPS.AgentMigrationSourceSelection;
  providerIds: readonly string[];
  skipped?: boolean;
};

export type OnboardingStepResult = {
  step?: OnboardingStep;
  skipped?: boolean;
  providerIds?: readonly string[];
  interests?: readonly string[];
  roles?: readonly string[];
  personalizedSuggestionsEnabled?: boolean;
  workMode?: string | null;
  skipRemainingOnboarding?: boolean;
  completedConversationalOnboardingTaskId?: string | null;
  completedConversationalOnboardingTaskSnapshot?: unknown;
  completion?: unknown;
  action?: string;
};

/** Bundle Helper19 — first content step after Start. */
export function resolveStandardOnboardingEntry(
  context: Pick<
    OnboardingAdvanceContext,
    "shouldShowTeenOnboarding" | "shouldShowConversationalOnboarding"
  >,
): OnboardingStep {
  if (context.shouldShowTeenOnboarding) return ONBOARDING_STEPS.TeenWelcome;
  if (context.shouldShowConversationalOnboarding) {
    return ONBOARDING_STEPS.ConversationalOnboarding;
  }
  return ONBOARDING_STEPS.RoleSelection;
}

/** Bundle Helper21 — optional Windows sandbox vs complete. */
export function resolvePostMigrationStep(
  context: Pick<OnboardingAdvanceContext, "finalStep">,
  skipPostMigrationOnboarding: boolean,
): OnboardingStep {
  return context.finalStep.shouldShow && !skipPostMigrationOnboarding
    ? ONBOARDING_STEPS.WindowsSandboxSetup
    : ONBOARDING_STEPS.Complete;
}

/** Bundle Helper20 — agent-migration source → item or exit. */
export function resolveAgentMigrationAdvance(args: {
  currentStep: OnboardingStep;
  context: OnboardingAdvanceContext;
  result: OnboardingStepResult | null | undefined;
  skipPostMigrationOnboarding: boolean;
}): OnboardingStep {
  const { currentStep, context, result, skipPostMigrationOnboarding } = args;
  if (
    currentStep === ONBOARDING_STEPS.AgentMigrationSourceSelection &&
    result?.step === ONBOARDING_STEPS.AgentMigrationSourceSelection &&
    result.skipped !== true &&
    (result.providerIds?.length ?? 0) > 0
  ) {
    return ONBOARDING_STEPS.AgentMigrationItemSelection;
  }
  return resolvePostMigrationStep(context, skipPostMigrationOnboarding);
}

/**
 * Bundle Helper18 — async next-step resolver for the onboarding wizard.
 */
export async function advanceOnboardingStep(args: {
  currentStep: OnboardingStep;
  onboardingContext: OnboardingAdvanceContext;
  result?: OnboardingStepResult | null;
  skipPostMigrationOnboarding?: boolean;
}): Promise<OnboardingStep> {
  const {
    currentStep,
    onboardingContext,
    result = null,
    skipPostMigrationOnboarding = false,
  } = args;

  if (onboardingContext.isLoading && !skipPostMigrationOnboarding) {
    return currentStep;
  }

  switch (currentStep) {
    case ONBOARDING_STEPS.Start:
      return onboardingContext.shouldShowStandardOnboarding
        ? resolveStandardOnboardingEntry(onboardingContext)
        : resolvePostMigrationStep(onboardingContext, false);
    case ONBOARDING_STEPS.WindowsSandboxSetup:
      return ONBOARDING_STEPS.Complete;
    case ONBOARDING_STEPS.TeenWelcome:
      return ONBOARDING_STEPS.TeenInterests;
    case ONBOARDING_STEPS.TeenInterests:
      return ONBOARDING_STEPS.TeenPrompts;
    case ONBOARDING_STEPS.TeenPrompts:
      return resolvePostMigrationStep(onboardingContext, false);
    case ONBOARDING_STEPS.ConversationalOnboarding:
    case ONBOARDING_STEPS.RoleSelection: {
      const showMigration = await onboardingContext.agentMigration.shouldShow();
      return showMigration
        ? ONBOARDING_STEPS.AgentMigrationSourceSelection
        : resolvePostMigrationStep(
            onboardingContext,
            skipPostMigrationOnboarding,
          );
    }
    case ONBOARDING_STEPS.AgentMigrationSourceSelection:
    case ONBOARDING_STEPS.AgentMigrationItemSelection:
      return resolveAgentMigrationAdvance({
        currentStep,
        context: onboardingContext,
        result,
        skipPostMigrationOnboarding,
      });
    case ONBOARDING_STEPS.Complete:
      return ONBOARDING_STEPS.Complete;
    default:
      return ONBOARDING_STEPS.Complete;
  }
}
