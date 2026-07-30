// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Onboarding controller (Helper91): step signal, advance, and context.

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
} from "react";

import {
  advanceOnboardingStep,
  type OnboardingStepResult,
} from "./advance-onboarding-step";
import {
  ONBOARDING_STEPS,
  type OnboardingStep,
  type TeenInterest,
} from "./constants";
import { analyticsNameForOnboardingStep } from "./onboarding-step-analytics";
import {
  OnboardingContextProvider,
  buildDefaultOnboardingAdvanceContext,
  getOnboardingScopeAndSignals,
  useFinalOnboardingStep,
  useOnboardingPreferenceValue,
  type OnboardingContextValue,
} from "./runtime-bridges";
import { OnboardingStepRouter } from "./steps";

export type OnboardingControllerProps = Record<string, never>;

/**
 * Bundle Helper91 — owns step signal reads, advance pending, and continue.
 */
export function OnboardingController(
  _props: OnboardingControllerProps = {},
): ReactElement {
  const { signals } = getOnboardingScopeAndSignals();
  const finalStep = useFinalOnboardingStep();
  const onboardingOverride = useOnboardingPreferenceValue("onboardingOverride");
  const postLoginWelcomePending = useOnboardingPreferenceValue(
    "postLoginWelcomePending",
  );
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(() =>
    signals.step.get(),
  );
  const [selectedInterests, setSelectedInterests] = useState<TeenInterest[]>(
    () => signals.interests.get(),
  );
  const [providerIds, setProviderIds] = useState<string[]>(() =>
    signals.providerIds.get(),
  );
  const [isAdvancePending, setAdvancePending] = useState(false);

  useEffect(() => {
    return signals.step.subscribe(() => {
      setCurrentStep(signals.step.get());
    });
  }, [signals.step]);

  useEffect(() => {
    return signals.interests.subscribe(() => {
      setSelectedInterests(signals.interests.get());
    });
  }, [signals.interests]);

  useEffect(() => {
    return signals.providerIds.subscribe(() => {
      setProviderIds(signals.providerIds.get());
    });
  }, [signals.providerIds]);

  const contextValue: OnboardingContextValue = useMemo(
    () =>
      buildDefaultOnboardingAdvanceContext({
        hasPreviouslyCompletedOnboarding: false,
        onboardingOverride,
        postLoginWelcomePending,
        finalStepShouldShow: finalStep.shouldShow,
        finalStepLoading: finalStep.isLoading,
        isAdvancingOnboarding: isAdvancePending,
      }),
    [
      finalStep.isLoading,
      finalStep.shouldShow,
      isAdvancePending,
      onboardingOverride,
      postLoginWelcomePending,
    ],
  );

  // Auto-advance off the Start loading sentinel once context is ready.
  useEffect(() => {
    if (currentStep !== ONBOARDING_STEPS.Start) return;
    if (contextValue.isLoading) return;
    let cancelled = false;
    void (async () => {
      if (onboardingOverride != null && onboardingOverride !== "welcome") {
        signals.step.set(ONBOARDING_STEPS.Complete);
        return;
      }
      const next = await advanceOnboardingStep({
        currentStep: ONBOARDING_STEPS.Start,
        onboardingContext: contextValue,
        skipPostMigrationOnboarding: signals.skipPostMigration.get(),
      });
      if (cancelled) return;
      signals.step.set(next);
      setCurrentStep(next);
      void analyticsNameForOnboardingStep(next);
    })();
    return () => {
      cancelled = true;
    };
  }, [
    contextValue,
    currentStep,
    onboardingOverride,
    signals.skipPostMigration,
    signals.step,
  ]);

  const onContinue = useCallback(
    async (result?: unknown) => {
      setAdvancePending(true);
      try {
        const parsed = (result ?? null) as OnboardingStepResult | null;
        if (
          parsed?.step === ONBOARDING_STEPS.TeenInterests &&
          Array.isArray(parsed.interests)
        ) {
          const interests = parsed.interests as TeenInterest[];
          signals.interests.set(interests);
          setSelectedInterests(interests);
        }
        if (
          parsed?.step === ONBOARDING_STEPS.AgentMigrationSourceSelection &&
          Array.isArray(parsed.providerIds)
        ) {
          const nextProviders = parsed.providerIds.map(String);
          signals.providerIds.set(nextProviders);
          setProviderIds(nextProviders);
        }
        if (
          parsed?.step === ONBOARDING_STEPS.ConversationalOnboarding &&
          parsed.skipRemainingOnboarding === true
        ) {
          signals.skipPostMigration.set(true);
        }
        const upcoming = await advanceOnboardingStep({
          currentStep: signals.step.get(),
          onboardingContext: contextValue,
          result: parsed,
          skipPostMigrationOnboarding: signals.skipPostMigration.get(),
        });
        signals.step.set(upcoming);
        setCurrentStep(upcoming);
        void analyticsNameForOnboardingStep(upcoming);
      } finally {
        setAdvancePending(false);
      }
    },
    [
      contextValue,
      signals.interests,
      signals.providerIds,
      signals.skipPostMigration,
      signals.step,
    ],
  );

  return (
    <OnboardingContextProvider value={contextValue}>
      <OnboardingStepRouter
        currentStep={currentStep}
        isAdvancePending={isAdvancePending}
        onContinue={onContinue}
        selectedInterests={selectedInterests}
        providerIds={providerIds}
      />
    </OnboardingContextProvider>
  );
}
