// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Fullscreen shell (Helper92): brand icon when not in conversational step.

import { useEffect, useState, type ReactElement } from "react";

import { AppSurfaceId } from "../../app/app-surface-ids";
import { ONBOARDING_STEPS } from "./constants";
import { OnboardingController } from "./onboarding-controller";
import {
  SafeOnboardingFullscreenFrame,
  getOnboardingScopeAndSignals,
} from "./runtime-bridges";

/**
 * Bundle Helper92 — wraps the controller in the fullscreen onboarding frame.
 */
export function OnboardingShell(): ReactElement {
  const { signals } = getOnboardingScopeAndSignals();
  const [step, setStep] = useState(() => signals.step.get());

  useEffect(() => {
    return signals.step.subscribe(() => {
      setStep(signals.step.get());
    });
  }, [signals.step]);

  const showBrandIcon =
    AppSurfaceId.ChatGPT === "chatgpt" &&
    step !== ONBOARDING_STEPS.ConversationalOnboarding;

  return (
    <SafeOnboardingFullscreenFrame fullBleed showBrandIcon={showBrandIcon}>
      <OnboardingController />
    </SafeOnboardingFullscreenFrame>
  );
}
