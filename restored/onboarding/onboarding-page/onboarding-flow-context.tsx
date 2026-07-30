// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Onboarding flow React context + default advance flags (Helper13 surface).

import {
  createContext,
  useContext,
  type ReactElement,
  type ReactNode,
} from "react";

import { type OnboardingAdvanceContext } from "./advance-onboarding-step";
import { ONBOARDING_STEPS, type OnboardingStep } from "./constants";

export type OnboardingContextValue = OnboardingAdvanceContext & {
  finalStep: OnboardingAdvanceContext["finalStep"] & {
    step: OnboardingStep;
  };
  hasPreviouslyCompletedOnboarding: boolean;
  isAdvancingOnboarding: boolean;
  onboardingOverride: unknown;
  postLoginWelcomePending: unknown;
};

const OnboardingContextReact = createContext<OnboardingContextValue | null>(
  null,
);

export function OnboardingContextProvider({
  value,
  children,
}: {
  value: OnboardingContextValue;
  children?: ReactNode;
}): ReactElement {
  return (
    <OnboardingContextReact.Provider value={value}>
      {children}
    </OnboardingContextReact.Provider>
  );
}

export function useOnboardingContext(): OnboardingContextValue {
  return (
    useContext(OnboardingContextReact) ?? {
      finalStep: {
        step: ONBOARDING_STEPS.Complete,
        shouldShow: false,
      },
      hasPreviouslyCompletedOnboarding: false,
      isAdvancingOnboarding: false,
      onboardingOverride: null,
      postLoginWelcomePending: null,
      isLoading: false,
      shouldShowStandardOnboarding: true,
      shouldShowConversationalOnboarding: false,
      shouldShowTeenOnboarding: false,
      agentMigration: {
        shouldShow: async () => false,
      },
    }
  );
}

/** Default flow flags when preference / experiment peers are unavailable. */
export function buildDefaultOnboardingAdvanceContext(args: {
  hasPreviouslyCompletedOnboarding: boolean | null;
  onboardingOverride: unknown;
  postLoginWelcomePending: unknown;
  finalStepShouldShow: boolean;
  finalStepLoading: boolean;
  isAdvancingOnboarding: boolean;
}): OnboardingContextValue {
  const {
    hasPreviouslyCompletedOnboarding,
    onboardingOverride,
    postLoginWelcomePending,
    finalStepShouldShow,
    finalStepLoading,
    isAdvancingOnboarding,
  } = args;
  const shouldShowStandardOnboarding =
    onboardingOverride === "welcome" ||
    Boolean(postLoginWelcomePending) ||
    hasPreviouslyCompletedOnboarding === false;

  return {
    finalStep: {
      step: ONBOARDING_STEPS.WindowsSandboxSetup,
      shouldShow: finalStepShouldShow,
    },
    hasPreviouslyCompletedOnboarding: hasPreviouslyCompletedOnboarding === true,
    isAdvancingOnboarding,
    onboardingOverride,
    postLoginWelcomePending,
    isLoading:
      isAdvancingOnboarding ||
      finalStepLoading ||
      (onboardingOverride !== "welcome" &&
        !postLoginWelcomePending &&
        hasPreviouslyCompletedOnboarding == null),
    shouldShowStandardOnboarding:
      shouldShowStandardOnboarding || hasPreviouslyCompletedOnboarding == null,
    shouldShowConversationalOnboarding: false,
    shouldShowTeenOnboarding: false,
    agentMigration: {
      shouldShow: async () => false,
    },
  };
}
