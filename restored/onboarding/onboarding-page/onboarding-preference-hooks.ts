// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Preference / final-step hooks that collide with wrong IMPORT_MAP exportSources.

import { ONBOARDING_STEPS, type OnboardingStep } from "./constants";

/**
 * Bundle export `Eb` — resolves the terminal onboarding step for the session.
 * exportSources maps Eb → analytics enum (wrong for `j()` call).
 */
export function useFinalOnboardingStep(): {
  step: OnboardingStep;
  shouldShow: boolean;
  isLoading: boolean;
} {
  return {
    step: ONBOARDING_STEPS.Complete,
    shouldShow: false,
    isLoading: false,
  };
}

/**
 * Bundle export `dvt` — read a desktop/onboarding preference by key atom.
 * exportSources maps dvt → DOM_ONINPUT_EVENT_NAME.
 */
export function useOnboardingPreferenceValue<T = unknown>(
  _key: unknown,
): T | null {
  void _key;
  return null;
}

/** Local setter companion used next to preference reads in the controller. */
export function useOnboardingPreferenceSetter<T = unknown>(
  _key: unknown,
): (value: T) => void {
  void _key;
  return (_value: T) => {
    void _value;
  };
}
